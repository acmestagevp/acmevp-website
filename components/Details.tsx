import React from "react"
import Image from "next/image"

interface DetailsProps {
	title: string
	paragraphs: string[]
	graphic: string
	isReversed?: boolean
}

const Content: React.FC<DetailsProps> = ({
	title,
	paragraphs,
	graphic,
	isReversed = false,
}) => {
	return (
		<div className="flex flex-col lg:flex-row p-4 py-18 items-center lg:items-start lg:max-w-4xl">
			<div
				className={`flex-2 text-center px-4 ${isReversed ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
			>
				<h2 className="text-xl p-2 text-balance">{title}</h2>
				{paragraphs.map((paragraph, index) => (
					<h3 key={index} className={`text-left py-4`}>
						{paragraph}
					</h3>
				))}
			</div>
			<Image
				className={`flex-1 p-2 px-4 ${isReversed ? "lg:order-1" : "lg:order-2"} opacity-75 hover:opacity-100 ease-in-out duration-100`}
				width={256}
				height={256}
				src={graphic}
				alt={title}
			/>
		</div>
	)
}

export default Content
