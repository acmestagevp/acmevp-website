import Image from "next/image"
import React from "react"

const Logo = ({ graphic, alt }: { graphic: string; alt: string }) => {
	return (
		<div className="flex items-center justify-center opacity-40 hover:opacity-900 ease-in-out duration-200">
			<Image src={graphic} alt={alt} width={200} height={200} className="object-cover p-4" />
		</div>
	)
}

export default Logo
