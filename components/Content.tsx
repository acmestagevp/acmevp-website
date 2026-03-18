import React from "react"
import Image from "next/image"

interface ContentProps {
	graphic: string
	basis?: string
	padding?: string
	isReversed?: boolean
	children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ graphic, isReversed = false, children }) => {
	return (
		<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
			{/* Text side */}
			<div className={`flex-1 flex flex-col gap-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
				{children}
			</div>

			{/* Image side */}
			<div className={`flex-1 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
				<div className="relative overflow-hidden rounded-xl border border-white/[0.06] glow-border">
					<Image
						className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
						width={1080}
						height={1080}
						src={graphic}
						alt={graphic}
					/>
				</div>
			</div>
		</div>
	)
}

export default Content
