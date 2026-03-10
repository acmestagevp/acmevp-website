import React from "react"
import Image from "next/image"

interface HeaderProps {
	title: string
	subtitle: string
	graphic: string
}

const Hero: React.FC<HeaderProps> = ({ title, subtitle, graphic }) => {
	return (
		<div className="flex min-h-screen">
			<div className="absolute inset-0 overflow-hidden justify-center">
				<Image
					className="h-full z-[-10] bg-mask object-cover"
					width={1920}
					height={1080}
					src="/images/hero-16-9.png"
					alt="Acme Virtual Production"
					priority
				/>
				<div className="absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 px-2 w-6/7 lg:w-3xl">
					<h1 className="text-2xl text-center py-2 text-balance z-10">
						{title}
					</h1>
					<p className="text-center py-2 text-balance z-10">{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
