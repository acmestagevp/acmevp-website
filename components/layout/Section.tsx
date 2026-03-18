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
		default: "py-20 md:py-28 lg:py-36",
		custom: "",
	}

	return (
		<Component id={id} className={`relative w-full ${variants[variant]} ${className}`} {...props}>
			{children}
		</Component>
	)
}

export default Section
