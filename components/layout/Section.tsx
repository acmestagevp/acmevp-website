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
			className={`${border ? "border-t border-neutral-800" : ""} relative ${className} ${variants[variant]}`}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Section
