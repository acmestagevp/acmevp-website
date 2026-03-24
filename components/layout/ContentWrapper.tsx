// components/ui/content-wrapper.tsx
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
		default: "max-w-4xl mx-auto px-5 sm:px-6 lg:px-8",
		wide: "max-w-7xl mx-auto px-5 sm:px-6 lg:px-8",
		narrow: "max-w-3xl mx-auto px-5 sm:px-6 lg:px-8",
		full: "w-screen px-5 sm:px-6 lg:px-8",
	}

	return (
		<div className={`${variants[variant]} ${className}`} {...props}>
			{children}
		</div>
	)
}

export default ContentWrapper
