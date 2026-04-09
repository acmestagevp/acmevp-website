import React from "react"
import Image from "next/image"

interface HeaderProps {
	variant?: "default" | "half" | "full"
	imageOpacity?: number
	className?: string
	graphic: string
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
			className={`relative ${variants[variant]} flex items-center justify-center py-20 md:py-0 w-full`}
		>
			{children}
			<div className={`absolute inset-0 pointer-events-none -z-10 bg-mask`}>
				<Image
					className={`min-w-full min-${variants[variant]} object-cover ${className}`}
					style={{ opacity: imageOpacity / 100 }}
					fill
					preload={true}
					src={graphic}
					alt={alt}
				/>
			</div>
		</section>
	)
}

export default Header
