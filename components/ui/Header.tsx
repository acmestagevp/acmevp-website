import React from "react"
import Image from "next/image"

interface HeaderProps {
	variant?: "default" | "half" | "full" | "text"
	imageOpacity?: number
	className?: string
	textPaddingClassName?: string
	textMinHeightClassName?: string
	graphic?: string
	children?: React.ReactNode
	alt?: string
}

const Header: React.FC<HeaderProps> = ({
	variant = "default",
	graphic,
	className,
	textPaddingClassName,
	textMinHeightClassName,
	imageOpacity = 40,
	children,
	alt = "ACME Virtual Production feature image",
}) => {
	const variants = {
		default: { section: "h-[80vh]", image: "h-full" },
		half: { section: "h-[50vh]", image: "h-full" },
		full: { section: "h-screen", image: "h-full" },
	}
	// Text variant: the default padding clears the fixed NavBar (pt-32/md:pt-40);
	// textPaddingClassName replaces the padding block and textMinHeightClassName
	// replaces the min-heights (replacement, not append — same-property
	// utilities resolve by stylesheet order, so appended utilities could not
	// override the defaults). Callers passing nothing render exactly as before.
	const textClass = `relative flex ${textMinHeightClassName ?? "min-h-[16rem] md:min-h-[20rem]"} items-center justify-center w-full px-[var(--page-gutter)] ${textPaddingClassName ?? "pt-32 pb-12 md:pt-40 md:pb-16"}`
	return (
		<section
			className={
				variant === "text"
					? textClass
					: `relative ${variants[variant].section} flex items-center justify-center py-20 md:py-0 w-full`
			}
		>
			{children}
			{variant !== "text" && graphic && (
				<div className={`absolute inset-0 pointer-events-none -z-10 bg-mask`}>
					<Image
						className={`min-w-full ${variants[variant].image} object-cover ${className ?? ""}`}
						style={{ opacity: imageOpacity / 100 }}
						fill
						sizes="100vw"
						preload={true}
						src={graphic}
						alt={alt}
					/>
				</div>
			)}
		</section>
	)
}

export default Header
