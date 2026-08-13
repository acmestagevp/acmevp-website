import React from "react"
import Image from "next/image"

interface HeaderProps {
	variant?: "default" | "half" | "full" | "text"
	imageOpacity?: number
	className?: string
	graphic?: string
	children?: React.ReactNode
	alt?: string
}

const Header: React.FC<HeaderProps> = ({
	variant = "default",
	graphic,
	className,
	imageOpacity = 40,
	children,
	alt = "ACME Virtual Production feature image",
}) => {
	const variants = {
		default: { section: "h-[80vh]", image: "h-full" },
		half: { section: "h-[50vh]", image: "h-full" },
		full: { section: "h-screen", image: "h-full" },
	}
	const textClass = "relative flex min-h-[16rem] items-center justify-center w-full px-[var(--page-gutter)] pt-32 pb-12 md:min-h-[20rem] md:pt-40 md:pb-16"
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
