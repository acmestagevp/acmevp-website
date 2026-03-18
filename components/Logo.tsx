import Image from "next/image"
import React from "react"

const Logo = ({ graphic, alt }: { graphic: string; alt: string }) => {
	return (
		<div className="flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300 ease-in-out p-2">
			<Image
				src={graphic}
				alt={alt}
				width={160}
				height={60}
				className="object-contain h-10 w-auto filter grayscale"
			/>
		</div>
	)
}

export default Logo
