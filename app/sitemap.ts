import type { MetadataRoute } from "next"
import { projects } from "@/constants/projects"
import { getProjectReadinessReport } from "@/utils/projectReadiness"

const base = "https://acmevp.com"
const siteLastModified = new Date("2026-08-12T00:00:00.000Z")

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		...(["/", "/stage", "/services", "/contact", "/projects"] as const).map((pathname) => ({
			url: `${base}${pathname === "/" ? "" : pathname}`,
			lastModified: siteLastModified,
		})),
	]

	const { indexable } = getProjectReadinessReport(projects)
	const projectRoutes: MetadataRoute.Sitemap = projects
		.filter((project) => indexable.includes(project.slug))
		.map((project) => ({
			url: `${base}/projects/${project.slug}`,
			lastModified: project.seo?.modifiedAt
				? new Date(project.seo.modifiedAt)
				: project.seo?.publishedAt
					? new Date(project.seo.publishedAt)
					: siteLastModified,
		}))

	return [...staticRoutes, ...projectRoutes]
}
