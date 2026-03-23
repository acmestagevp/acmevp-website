import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import { projects } from "@/constants/projects"
import { componentMap } from "@/utils/componentMap"
import Section from "@/components/layout/Section"
import Logo from "@/components/Logo"
import { logos } from "@/constants/logos"

export default function Projects() {
	return (
		<div className="flex flex-col">
			<Header variant="half" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="relative z-10 text-center py-56">
						<h1 className="text-3xl md:text-5xl tracking-tight">Projects</h1>
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
			<Section>
				<ContentWrapper variant="narrow">
					<h2 className="text-center text-sm uppercase tracking-widest text-neutral-400">
						Delivering End-to-end virtual production for
					</h2>
					<div className="flex flex-wrap justify-center">
						{logos.map((logo, index) => (
							<Logo key={index} graphic={logo.graphic} alt={logo.alt} />
						))}
					</div>
				</ContentWrapper>
			</Section>
			<Testimonials />
		</div>
	)
}
