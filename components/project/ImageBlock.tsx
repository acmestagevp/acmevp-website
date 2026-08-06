import React from "react"
import Image from "next/image"
import AnimateIn from "@/components/decoration/AnimateIn"

interface ImageBlockProps {
	src: string
	alt: string
	caption?: string
	fullWidth?: boolean
}

const ImageBlock: React.FC<ImageBlockProps> = ({
	src,
	alt,
	caption,
	fullWidth = false,
}) => {
	return (
		<AnimateIn>
			<div className={fullWidth ? "w-full" : "max-w-4xl mx-auto"}>
				<div className="relative w-full aspect-video overflow-hidden">
					<Image
						className="object-cover opacity-75 hover:opacity-100 ease-in-out duration-200"
						fill
						src={src}
						alt={alt}
					/>
				</div>
				{caption && (
					<p className="mt-3 text-center text-sm text-neutral-500">
						{caption}
					</p>
				)}
			</div>
		</AnimateIn>
	)
}

export default ImageBlock
