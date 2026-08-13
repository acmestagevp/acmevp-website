import fs from "node:fs"
import path from "node:path"
import { projects, type ContentBlock, type Project, type ProjectPublicationState } from "@/constants/projects"

export type ReadinessIssue = {
	project: string
	field: string
	message: string
}

export type ProjectReadinessReport = {
	fixtureValid: string[]
	indexable: string[]
	publishable: string[]
	technicalFailures: ReadinessIssue[]
	contentGates: ReadinessIssue[]
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const videoIdPatterns = {
	youtube: /^[A-Za-z0-9_-]{6,}$/,
	vimeo: /^\d{4,}$/,
} as const

const isDate = (value?: string) => {
	if (!value) return false
	const date = new Date(value)
	return !Number.isNaN(date.valueOf()) && date <= new Date()
}

const existsInPublic = (assetPath: string) =>
	assetPath.startsWith("/") && fs.existsSync(path.join(process.cwd(), "public", assetPath.slice(1)))

const addIssue = (issues: ReadinessIssue[], project: Project, field: string, message: string) => {
	issues.push({ project: project.slug, field, message })
}

export function getProjectReadinessReport(records: readonly Project[] = projects): ProjectReadinessReport {
	const technicalFailures: ReadinessIssue[] = []
	const contentGates: ReadinessIssue[] = []
	const fixtureValid: string[] = []
	const indexable: string[] = []
	const publishable: string[] = []
	const seenSlugs = new Set<string>()

	for (const project of records) {
		if (!project.title.trim()) addIssue(technicalFailures, project, "title", "Title is empty.")
		if (!slugPattern.test(project.slug)) addIssue(technicalFailures, project, "slug", "Slug is not URL-safe.")
		if (seenSlugs.has(project.slug)) addIssue(technicalFailures, project, "slug", "Slug is duplicated.")
		seenSlugs.add(project.slug)
		if (!existsInPublic(project.thumbnail)) addIssue(technicalFailures, project, "thumbnail", "Local thumbnail does not exist.")
		if (!project.content.length) addIssue(technicalFailures, project, "content", "Project has no content blocks.")

		project.content.forEach((block: ContentBlock, index) => {
			if (block.type === "video" && !videoIdPatterns[block.platform].test(block.videoId)) {
				addIssue(technicalFailures, project, `content[${index}].videoId`, `Invalid ${block.platform} video ID shape.`)
			}
			if (block.type === "image" && !existsInPublic(block.src)) {
				addIssue(technicalFailures, project, `content[${index}].src`, "Local image does not exist.")
			}
		})

		const state: ProjectPublicationState = project.publicationState ?? "fixture-valid"
		if (state !== "fixture-valid") indexable.push(project.slug)
		if (state === "publishable") publishable.push(project.slug)
		fixtureValid.push(project.slug)

		if (state === "fixture-valid") addIssue(contentGates, project, "publicationState", "Intentional fixture; content approval is required before indexing.")
		if (!project.seo?.description) addIssue(contentGates, project, "seo.description", "Approved SEO description is missing.")
		if (!project.seo?.socialImage) addIssue(contentGates, project, "seo.socialImage", "Approved social preview is missing.")
		if (!isDate(project.seo?.publishedAt)) addIssue(contentGates, project, "seo.publishedAt", "Approved non-future publication date is missing.")
		if (!isDate(project.seo?.modifiedAt)) addIssue(contentGates, project, "seo.modifiedAt", "Approved non-future modified date is missing.")
		if (project.content.some((block) => block.type === "video")) addIssue(contentGates, project, "content.video", "Embed ownership and rights are unverified.")
		addIssue(contentGates, project, "content.credits", "Credits and public-use rights require owner approval.")
		if (state === "publishable" && !project.seo?.socialImage) {
			addIssue(contentGates, project, "publicationState", "Cannot be publishable without an approved social preview.")
		}
	}

	return { fixtureValid, indexable, publishable, technicalFailures, contentGates }
}
