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
	imageOpacity = 35,
	children,
}) => {
	const heightClass = {
		default: "min-h-[75vh]",
		half: "min-h-[50vh]",
		full: "min-h-screen",
	}[variant]

	return (
		<section
			className={`relative ${heightClass} flex items-center justify-center w-full overflow-hidden`}
		>
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<Image
					className="w-full h-full object-cover"
					width={1920}
					height={1080}
					src={graphic}
					alt="ACME Virtual Production"
					priority
					style={{ opacity: imageOpacity / 100 }}
				/>
				{/* Gradient overlays */}
				<div className="absolute inset-0 bg-linear-to-b from-[#080808]/60 via-transparent to-[#080808]" />
				<div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent" />
			</div>

			{/* Content */}
			<div className="relative z-10 w-full">{children}</div>

			{/* Scroll indicator — full variant only */}
			{variant === "full" && (
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
					<span className="text-[10px] text-neutral-500 tracking-[0.25em] uppercase">Scroll</span>
					<div className="w-px h-8 bg-linear-to-b from-neutral-500 to-transparent animate-pulse" />
				</div>
			)}
		</section>
	)
}

export default Header
