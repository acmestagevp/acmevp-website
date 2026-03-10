import React from "react"
import Image from "next/image"

interface ContentProps {
	title: string
	subtitle: string
	graphic: string
	isReversed?: boolean
}

const Content: React.FC<ContentProps> = ({ title, subtitle, graphic, isReversed = false }) => {
	return (
		<div className="">
			<div className={`flex-1 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
				<h2 className="">{title}</h2>
				<p className="">{subtitle}</p>
			</div>
			<Image
				className={`flex-1 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
				width={500}
				height={500}
				src={graphic}
				alt={title}
			/>
		</div>
	)
}

export default Content
