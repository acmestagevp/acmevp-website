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
			className={`relative min-${variants[variant]} flex w-full items-center justify-center overflow-hidden py-20 md:py-0`}
		>
			{children}
			<div
				className={`absolute inset-0 z-0 opacity-${imageOpacity} pointer-events-none bg-black bg-mask`}
			>
				<Image
					className={`h-full w-full object-cover ${variants[variant]}`}
					width={1920}
					height={1080}
					src={graphic}
					alt="Acme Virtual Production"
				/>
			</div>
			<div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 premium-divider" />
			{variant === "full" ? (
				<div
					className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
					// style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
				>
					<span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Scroll</span>
					<div className="h-8 w-px animate-pulse bg-linear-to-b from-neutral-400 to-transparent" />
				</div>
			) : null}
		</section>
	)
}

export default Header
