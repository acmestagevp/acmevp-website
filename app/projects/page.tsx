import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Testimonials from "@/components/Testimonials"
import { header, projects } from "@/constants/projects"
import { componentMap } from "@/utils/componentMap"

export default function Projects() {
	return (
		<div className="flex flex-col">
			<Header {...header[0]} />
			<div className="flex flex-col lg:flex-row mx-8 flex-wrap items-center">
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
