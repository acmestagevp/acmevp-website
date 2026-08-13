// components/ui/content-wrapper.tsx
type ContentWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
	variant?: "default" | "wide" | "narrow" | "full" | "bleed"
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
	variant = "default",
	className = "",
	children,
	...props
}) => {
	const variants = {
		default: "layout-wrapper layout-wrapper--default",
		wide: "layout-wrapper layout-wrapper--wide",
		narrow: "layout-wrapper layout-wrapper--narrow",
		full: "layout-wrapper layout-wrapper--full",
		bleed: "layout-wrapper layout-wrapper--bleed",
	}

	return (
		<div className={`${variants[variant]} ${className}`} {...props}>
			{children}
		</div>
	)
}

export default ContentWrapper
