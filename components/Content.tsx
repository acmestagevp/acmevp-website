import React from "react"
import Image from "next/image"

interface ContentProps {
	title: string
	subtitle: string
	graphic: string
	isReversed?: boolean
}

const Content: React.FC<ContentProps> = ({
	title,
	subtitle,
	graphic,
	isReversed = false,
}) => {
	return (
		<div className="flex flex-col lg:flex-row flex-col p-4 py-18 items-center lg:items-start lg:max-w-4xl">
			<div
				className={`flex-2 text-center px-4 ${isReversed ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
			>
				<h2 className="text-xl p-2 text-balance">{title}</h2>
				<p className="p-2 text-balance">{subtitle}</p>
			</div>
			<Image
				className={`flex-1 p-2 px-4 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
				width={256}
				height={256}
				src={graphic}
				alt={title}
			/>
		</div>
	)
}

export default Content
