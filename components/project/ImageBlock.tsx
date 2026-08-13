import React from "react"
import Image from "next/image"
import AnimateIn from "@/components/decoration/AnimateIn"

interface ImageBlockProps {
	src: string
	alt: string
	caption?: string
	fullWidth?: boolean
	aspectRatio?: "video" | "square" | "portrait" | "intrinsic"
	fit?: "cover" | "contain"
	sizes?: string
}

const ImageBlock: React.FC<ImageBlockProps> = ({
	src,
	alt,
	caption,
	fullWidth = false,
	aspectRatio = "video",
	fit = "contain",
	sizes = "(max-width: 768px) 100vw, 80rem",
}) => {
	const ratioClass = {
		video: "aspect-video",
		square: "aspect-square",
		portrait: "aspect-[4/5]",
		intrinsic: "aspect-video",
	}[aspectRatio]
	const fitClass = fit === "cover" ? "object-cover" : "object-contain"

	return (
		<AnimateIn>
			<div className={fullWidth ? "w-full" : "max-w-4xl mx-auto"}>
				<div className={`relative w-full ${ratioClass} overflow-hidden bg-black/20`}>
					<Image
						className={fitClass}
						fill
						src={src}
						alt={alt}
						sizes={sizes}
						loading="lazy"
					/>
				</div>
				{caption && (
					<p className="mt-3 text-left text-sm text-muted">
						{caption}
					</p>
				)}
			</div>
		</AnimateIn>
	)
}

export default ImageBlock
