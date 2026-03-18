import React from "react"
import Image from "next/image"

interface HeaderProps {
	variant?: "default" | "half" | "full"
	imageOpacity?: number
	graphic: string
	children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
	variant = "default",
	graphic,
	imageOpacity = "40",
	children,
}) => {
	const variants = {
		default: "h-[75vh]",
		half: "h-[50vh]",
		full: "h-screen",
	}
	return (
		<section
			className={`relative ${variants[variant]} flex items-center justify-center py-20 md:py-0 w-full`}
		>
			{children}
			<div className={`absolute inset-0 z-0 opacity-${imageOpacity} pointer-events-none`}>
				<Image
					className={`w-full object-cover ${variants[variant]} bg-mask`}
					width={1920}
					height={1080}
					src={graphic}
					alt="Acme Virtual Production"
				/>
			</div>
			{variant === "full" ? (
				<div
					className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					// style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
				>
					<span className="text-xs text-neutral-500 tracking-widest uppercase">Scroll</span>
					<div className="w-px h-8 bg-linear-to-b from-neutral-500 to-transparent animate-pulse" />
				</div>
			) : null}
		</section>
	)
}

export default Header
