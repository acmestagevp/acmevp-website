import Footer from "@/components/Footer"
import { stage } from "@/constants/stage"
import { componentMap } from "@/utils/componentMap"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			{stage.map((section, index) => {
				const Component = componentMap[section.component] // Use the imported map
				if (!Component) return null

				const { component, ...props } = section

				return (
					<Component
						key={index}
						{...props}
						isReversed={
							section.component === "Info" ? index % 2 === 1 : undefined
						}
					/>
				)
			})}
		</div>
	)
}
