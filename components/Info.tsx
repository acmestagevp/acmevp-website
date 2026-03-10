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

const Info: React.FC<InfoProps> = ({ title, content, graphic, isReversed = false }) => {
	return (
		<div>
			<div>
				<h2>{title}</h2>
				{content.map((section, index) => (
					<div key={index}>
						<h3>{section.list || section.title}</h3>
						<ul>
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div>
				<Image src={graphic} alt={`${title} graphic`} width={400} height={300} />
			</div>
		</div>
	)
}

export default Info
