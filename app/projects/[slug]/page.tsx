import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
import ProjectContent from "@/components/project/ProjectContent"
import { projects } from "@/constants/projects"

const siteUrl = "https://acmevp.com"

// Pre-render all project pages at build time
export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}))
}

// Per-project metadata for SEO + browser tab title
export function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	return params.then(({ slug }) => {
		const project = projects.find((p) => p.slug === slug)
		if (!project) {
			return { title: "Project Not Found", robots: { index: false, follow: false } }
		}
		const description =
			project.seo?.description ??
			(project.subtitle
				? `${project.title}: ${project.subtitle}. A project by ACME Virtual Production.`
				: `${project.title}. A project by ACME Virtual Production.`)
		const preview = project.seo?.socialImage
			? new URL(project.seo.socialImage, siteUrl).toString()
			: undefined
		const isIndexable =
			project.publicationState === "indexable" || project.publicationState === "publishable"
		return {
			title: project.subtitle ? `${project.title} – ${project.subtitle}` : project.title,
			description,
			alternates: { canonical: `${siteUrl}/projects/${project.slug}` },
			openGraph: {
				title: project.title,
				description,
				url: `${siteUrl}/projects/${project.slug}`,
				type: "website",
				...(preview ? { images: [{ url: preview, alt: project.title }] } : {}),
			},
			twitter: {
				card: "summary_large_image",
				title: project.title,
				description,
				...(preview ? { images: [preview] } : {}),
			},
			robots: { index: isIndexable, follow: true },
		}
	})
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = projects.find((p) => p.slug === slug)

	if (!project) {
		notFound()
	}

	return (
		<div className="flex flex-col items-center">
			{/* Video-first: the featured film leads; the title/subtitle header follows
				with normal section rhythm (the nav is suppressed on project pages). */}
			<ProjectContent blocks={project.content} projectTitle={project.title} />

			<Header variant="text" textPaddingClassName="py-12 md:py-16">
				<ContentWrapper variant="wide">
					<div className="relative z-10 text-center">
						<AnimateIn>
							<h1 className="text-4xl md:text-6xl font-serif font-gradient">{project.title}</h1>
						</AnimateIn>
						{project.subtitle && (
							<AnimateIn delay={0.2}>
								<p className="mt-3 text-lg text-neutral-400">{project.subtitle}</p>
							</AnimateIn>
						)}
					</div>
				</ContentWrapper>
			</Header>

			<Section mode="gallery" variant="custom" className="py-12 md:py-16">
				<ContentWrapper variant="default">
					<div className="flex flex-col items-center gap-5 text-center">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">Let&apos;s make the next one.</h2>
							<Link href="/contact" className="shell-cta mt-6 uppercase tracking-widest">
								Discuss a project
							</Link>
						</div>
						<Link
							href="/projects"
							className="text-secondary hover:text-[var(--text-primary)] tracking-widest text-sm uppercase"
						>
							← Back to Projects
						</Link>
					</div>
				</ContentWrapper>
			</Section>
		</div>
	)
}
