import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import { projects } from "@/constants/projects"
import { componentMap } from "@/utils/componentMap"

export default function Projects() {
	return (
		<div className="flex flex-col">
			<Header variant="half" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="relative z-10 text-center pt-18">
						<h1 className="text-3xl md:text-4xl tracking-tight">Projects</h1>
					</div>
				</ContentWrapper>
			</Header>
			<div className="flex flex-col md:flex-row mx-8 flex-wrap items-center">
				{projects.map((section, index) => {
					const Component = componentMap[section.component] // Use the imported map
					if (!Component) return null

					const { component, ...props } = section

					return (
						<Component
							key={index}
							{...props}
							// isReversed={section.component === "Project" ? index % 2 === 1 : undefined}
							isReversed={true}
						/>
					)
				})}
			</div>
			<Testimonials />
		</div>
	)
}
