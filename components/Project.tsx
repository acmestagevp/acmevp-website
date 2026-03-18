import React from "react"
import Image from "next/image"

interface ProjectProps {
	title: string
	subtitle: string
	graphic: string
	isReversed?: boolean
}

const Project: React.FC<ProjectProps> = ({ title, subtitle, graphic, isReversed = true }) => {
	return (
		<div className="flex lg:w-1/3 md:w-1/2 justify-center p-8">
			<div className="flex flex-col flex-1">
				<Image
					className={`object-cover opacity-75 hover:opacity-100 ease-in-out duration-200 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
					width={1000}
					height={1000}
					src={graphic}
					alt={title}
				/>
				<div className={`py-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
					<h2 className="text-2xl">{title}</h2>
					<p className="">{subtitle}</p>
				</div>
			</div>
		</div>
	)
}
export default Project
