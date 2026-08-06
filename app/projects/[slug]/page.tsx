import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
import ProjectContent from "@/components/project/ProjectContent"
import { projects } from "@/constants/projects"

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
			return { title: "Project Not Found" }
		}
		return {
			title: project.subtitle ? `${project.title} – ${project.subtitle}` : project.title,
			description: project.subtitle
				? `${project.title}: ${project.subtitle}. A project by ACME Virtual Production.`
				: `${project.title}. A project by ACME Virtual Production.`,
		}
	})
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const project = projects.find((p) => p.slug === slug)

	if (!project) {
		notFound()
	}

	return (
		<div className="flex flex-col items-center">
			<Header variant="text">
				<ContentWrapper variant="wide">
					<div className="relative z-10 text-center">
						<AnimateIn>
							<h1 className="text-4xl md:text-6xl font-serif font-gradient">
								{project.title}
							</h1>
						</AnimateIn>
						{project.subtitle && (
							<AnimateIn delay={0.2}>
								<p className="mt-3 text-lg text-neutral-400">{project.subtitle}</p>
							</AnimateIn>
						)}
					</div>
				</ContentWrapper>
			</Header>

			<ProjectContent blocks={project.content} />

			<Section>
				<ContentWrapper variant="default">
					<div className="py-8 text-center">
						<Link
							href="/projects"
							className="text-neutral-400 hover:text-neutral-300 ease-in-out duration-200 tracking-widest text-sm uppercase"
						>
							← Back to Projects
						</Link>
					</div>
				</ContentWrapper>
			</Section>
		</div>
	)
}
