import React from "react"
import Image from "next/image"
import Link from "next/link"

interface BannerProps {
	title: string
	href: string
	graphic: string
	isReversed?: boolean
}

const Content: React.FC<BannerProps> = ({ title, href, graphic, isReversed = false }) => {
	return (
		<Link key={title} href={href} className="block w-full my-8">
			<div className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center">
				<Image
					className={`object-cover opacity-40 hover:opacity-70 ease-in-out duration-100`}
					fill
					src={graphic}
					alt={title}
				/>
				<h2 className="relative z-10 text-4xl">{title}</h2>
			</div>
		</Link>
	)
}

export default Content
