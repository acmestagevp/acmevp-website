import React from "react"
import Image from "next/image"
import { text } from "stream/consumers"

interface ContentProps {
	graphic: string
	textFlex?: string
	imageFlex?: string
	padding?: string
	isReversed?: boolean
	children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({
	graphic,
	isReversed = false,
	textFlex = "2",
	imageFlex = "1",
	padding = "4",
	children,
}) => {
	return (
		<div className="flex flex-col lg:flex-row items-center">
			<div
				className={`flex-${textFlex} p-${padding} ${isReversed ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
			>
				{children}
			</div>
			<div className={`flex-${imageFlex} p-${padding} ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
				<Image
					className={`opacity-75 hover:opacity-100 ease-in-out duration-200`}
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
