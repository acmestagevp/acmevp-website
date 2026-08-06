import React from "react"
import type { VideoPlatform } from "@/constants/projects"

interface VideoBlockProps {
	platform: VideoPlatform
	videoId: string
	featured?: boolean
	autoplay?: boolean
}

const VideoBlock: React.FC<VideoBlockProps> = ({
	platform,
	videoId,
	featured = false,
	autoplay = false,
}) => {
	const src =
		platform === "youtube"
			? `https://www.youtube.com/embed/${videoId}${autoplay ? "?autoplay=1&mute=1" : ""}`
			: `https://player.vimeo.com/video/${videoId}${autoplay ? "?autoplay=1&muted=1" : ""}`

	return (
		<div className="w-full">
			<div
				className={
					featured
						? "relative w-screen aspect-video md:aspect-auto md:h-[85vh] overflow-hidden"
						: "relative w-full aspect-video overflow-hidden"
				}
			>
				<iframe
					className="absolute inset-0 h-full w-full"
					src={src}
					title="Project video"
					loading="lazy"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		</div>
	)
}

export default VideoBlock
