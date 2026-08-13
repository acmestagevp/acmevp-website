type SectionProps = React.HTMLAttributes<HTMLElement> & {
	variant?: "default" | "custom"
	mode?: "marketing" | "gallery"
	as?: "section" | "div" | "article"
	id?: string
	border?: boolean
	atmosphere?: boolean
}

const Section: React.FC<SectionProps> = ({
	as: Component = "section",
	id,
	variant = "default",
	mode = "marketing",
	className = "",
	border = false,
	atmosphere = false,
	children,
	...props
}) => {
	return (
		<Component
			id={id}
			className={`section--${mode ?? "marketing"} ${border ? "section--border" : ""} ${atmosphere ? "section--atmosphere" : ""} ${variant === "custom" ? "section--custom" : ""} ${className}`}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Section
