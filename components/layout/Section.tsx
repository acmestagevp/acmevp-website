type SectionProps = React.HTMLAttributes<HTMLElement> & {
	variant?: "default" | "custom"
	as?: "section" | "div" | "article"
	id?: string
}

const Section: React.FC<SectionProps> = ({
	as: Component = "section",
	id,
	variant = "default",
	className = "",
	children,
	...props
}) => {
	const variants = {
		default: "py-16 md:py-24 lg:py-32",
		custom: "",
	}

	return (
		<Component id={id} className={`relative ${className} ${variants[variant]}`} {...props}>
			{children}
		</Component>
	)
}

export default Section
