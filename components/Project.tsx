import React from "react"
import Image from "next/image"

interface ProjectProps {
	title: string
	subtitle: string
	graphic: string
	isReversed?: boolean
}

const Project: React.FC<ProjectProps> = ({ title, subtitle, graphic }) => {
	return (
		<div className="group flex lg:w-1/3 md:w-1/2 w-full p-4">
			<div className="flex flex-col flex-1 gap-4">
				{/* Image */}
				<div className="relative overflow-hidden rounded-xl border border-white/[0.06] aspect-square">
					<Image
						className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
						fill
						src={graphic}
						alt={title}
					/>
				</div>
				{/* Meta */}
				<div className="px-1">
					<h2 className="text-base font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
						{title}
					</h2>
					<p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default Project
