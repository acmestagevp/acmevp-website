import React from "react"
import Image from "next/image"
interface ContentProps {
	graphic: string
	basis?: string
	padding?: string
	isReversed?: boolean
	children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({
	graphic,
	isReversed = false,
	padding = "6",
	children,
}) => {
	return (
		<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
			<div
				className={`premium-panel rounded-[2rem] p-${padding} ${isReversed ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
			>
				{children}
			</div>
			<div className={`p-${padding} ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
				<Image
					className="w-full rounded-[2rem] border border-white/10 object-cover opacity-80 shadow-2xl transition duration-300 hover:opacity-100"
					width={1080}
					height={1080}
					src={graphic}
					alt={graphic}
				/>
			</div>
		</div>
	)
}

export default Content
