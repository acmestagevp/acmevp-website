import React from "react"
import Image from "next/image"
import AnimateIn from "./decoration/AnimateIn"

interface ContentProps {
	graphic: string
	basis?: string
	padding?: string
	alt?: string
	isReversed?: boolean
	children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({
	graphic,
	isReversed = false,
	padding = "8",
	alt = "ACME Virtual Production editorial image",
	children,
}) => {
	const paddingClass = { "4": "p-4", "6": "p-6", "8": "p-8", "10": "p-10", "12": "p-12" }[padding] ?? "p-8"
	return (
		<div className="flex min-w-0 flex-col items-center lg:flex-row">
			<div
				className={`min-w-0 flex-1 ${paddingClass} ${isReversed ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
			>
				{children}
			</div>
			<div className={`min-w-0 flex-1 ${paddingClass} ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
				<AnimateIn delay={0.25}>
					<Image
						className="media-editorial opacity-75 hover:opacity-100"
						width={1080}
						height={1080}
						src={graphic}
						alt={alt}
						sizes="(max-width: 1024px) 100vw, 50vw"
						loading="lazy"
					/>
				</AnimateIn>
			</div>
		</div>
	)
}

export default Content
