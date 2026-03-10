import Footer from "@/components/Footer"
import { projects } from "@/constants/projects"
import { componentMap } from "@/utils/componentMap"

export default function Projects() {
	return (
		<div className="flex flex-col items-center">
			{projects.map((section, index) => {
				const Component = componentMap[section.component] // Use the imported map
				if (!Component) return null

				const { component, ...props } = section

				return (
					<Component
						key={index}
						{...props}
						isReversed={
							section.component === "Content" ? index % 2 === 1 : undefined
						}
					/>
				)
			})}
		</div>
	)
}
