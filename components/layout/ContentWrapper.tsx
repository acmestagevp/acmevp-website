type ContentWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
	variant?: "default" | "wide" | "narrow" | "full"
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
	variant = "default",
	className = "",
	children,
	...props
}) => {
	const variants = {
		default: "max-w-5xl mx-auto px-5 sm:px-6 lg:px-8",
		wide: "max-w-7xl mx-auto px-5 sm:px-6 lg:px-8",
		narrow: "max-w-2xl mx-auto px-5 sm:px-6 lg:px-8",
		full: "px-5 sm:px-6 lg:px-8",
	}

	return (
		<div className={`${variants[variant]} ${className}`} {...props}>
			{children}
		</div>
	)
}

export default ContentWrapper
