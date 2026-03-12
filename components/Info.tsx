// components/Info.tsx
import React from "react"
import Image from "next/image"

interface InfoProps {
	title: string
	content: Array<{
		list?: string
		title?: string
		items: string[]
	}>
	graphic: string
	isReversed?: boolean
}

const Info: React.FC<InfoProps> = ({
	title,
	content,
	graphic,
	isReversed = false,
}) => {
	return (
		<div className="flex flex-col lg:flex-row flex-col p-4 py-18 items-center lg:items-start lg:max-w-4xl">
			<div
				className={`text-center px-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
			>
				<h2 className="text-center text-3xl">{title}</h2>
				{content.map((section, index) => (
					<div key={index} className={`text-left py-4`}>
						<h3 className="text-xl">{section.list || section.title}</h3>
						<ul>
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex} className="list-disc list-inside text-sm">
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<Image
				className={`p-2 px-4 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
				src={graphic}
				alt={`${title} graphic`}
				width={256}
				height={256}
			/>
		</div>
	)
}

export default Info
