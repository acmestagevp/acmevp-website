import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/constants/projects"

export default function Projects() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="text">
				<ContentWrapper variant="wide">
					<div className="relative z-10 text-center">
						<AnimateIn>
							<h1 className="text-5xl md:text-7xl font-serif font-gradient w-fit place-self-center">
								Projects
							</h1>
						</AnimateIn>
					</div>
				</ContentWrapper>
			</Header>
			<Section mode="gallery">
				<ContentWrapper variant="bleed">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-media)]">
						{projects.map((project) => (
							<ProjectCard
								key={project.slug}
								slug={project.slug}
								title={project.title}
								subtitle={project.subtitle}
								thumbnail={project.thumbnail}
							/>
						))}
					</div>
				</ContentWrapper>
			</Section>
		</div>
	)
}
