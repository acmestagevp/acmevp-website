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
	alt = "ACME Virtual Production",
}) => {
	const variants = {
		default: "h-[80vh]",
		half: "h-[50vh]",
		full: "h-screen",
	}
	return (
		<section
			className={
				variant === "text"
					? "relative flex items-center justify-center w-full pt-36 pb-12 md:pt-44 md:pb-16"
					: `relative ${variants[variant]} flex items-center justify-center py-20 md:py-0 w-full`
			}
		>
			{children}
			{variant !== "text" && graphic && (
				<div className={`absolute inset-0 pointer-events-none -z-10 bg-mask`}>
					<Image
						className={`min-w-full min-${variants[variant]} object-cover ${className}`}
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
