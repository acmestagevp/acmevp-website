import React from "react"
import Image from "next/image"
import BrushReveal from "@/components/decoration/BrushReveal"

const Background = () => {
	return (
		<div className="absolute inset-0 z-[-100] overflow-y-hidden">
			{/* <Image
				className="absolute inset-x-0 bottom-0 h-64 pointer-events-none z-[-1] object-cover"
				src="/background/bg-footer.jpg"
				alt="Footer Glow"
				width={1920}
				height={1080}
			/>
			<Image
				className="absolute inset-x-0 bottom-0 h-64 pointer-events-none z-[-1] opacity-10"
				src="/background/bg-noise.png"
				alt="Footer Noise"
				width={1920}
				height={1080}
			/> */}
			<BrushReveal />
			<BrushReveal />
			<BrushReveal />
			<BrushReveal />
			<BrushReveal />
		</div>
	)
}

export default Background
