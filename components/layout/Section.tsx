type SectionProps = React.HTMLAttributes<HTMLElement> & {
	variant?: "default" | "custom"
	as?: "section" | "div" | "article"
	id?: string
	border?: boolean
}

const Section: React.FC<SectionProps> = ({
	as: Component = "section",
	id,
	variant = "default",
	className = "",
	border = false,
	children,
	...props
}) => {
	const variants = {
		default: "py-8 md:py-12 lg:py-16",
		custom: "",
	}

	return (
		<Component
			id={id}
			className={`${border ? "border-t rounded-4xl border-neutral-700" : ""} relative ${className} ${variants[variant]}`}
			{...props}
		>
			<div
				className="pointer-events-none absolute inset-0"
				style={
					border
						? {
								background:
									"radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.05) 3%, rgba(98,255,179,0) 70%, rgba(98,255,179,0) 100%)",
							}
						: {}
				}
			/>
			{children}
		</Component>
	)
}

export default Section
