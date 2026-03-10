import Footer from "@/components/Footer"
import { services } from "@/constants/services"
import { componentMap } from "@/utils/componentMap"

export default function Services() {
	return (
		<div className="flex flex-col items-center">
			{services.map((section, index) => {
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
