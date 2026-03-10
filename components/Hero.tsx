import React from "react"
import Image from "next/image"

interface HeaderProps {
	title: string
	subtitle: string
	graphic: string
}

const Hero: React.FC<HeaderProps> = ({ title, subtitle, graphic }) => {
	return (
		<div className="">
			<Image
				className=""
				width={500}
				height={500}
				src="/images/hero-16-9.png"
				alt="Acme Virtual Production"
			/>
			<h1 className="">{title}</h1>
			<p className="">{subtitle}</p>
		</div>
	)
}

export default Hero
