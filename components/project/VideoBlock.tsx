"use client"

import React, { useState } from "react"
import type { VideoPlatform } from "@/constants/projects"

interface VideoBlockProps {
	platform: VideoPlatform
	videoId: string
	projectTitle: string
	blockNumber?: number
	featured?: boolean
	autoplay?: boolean
}

const VideoBlock: React.FC<VideoBlockProps> = ({
	platform,
	videoId,
	projectTitle,
	blockNumber,
	featured = false,
	autoplay = false,
}) => {
	const [isLoaded, setIsLoaded] = useState(autoplay)
	const src =
		platform === "youtube"
			? `https://www.youtube.com/embed/${videoId}${autoplay ? "?autoplay=1&mute=1" : ""}`
			: `https://player.vimeo.com/video/${videoId}${autoplay ? "?autoplay=1&muted=1" : ""}`

	return (
		<div className="w-full">
			<p className="sr-only" id={`video-status-${videoId}-${blockNumber ?? 0}`}>
				Embedded video: {projectTitle}{blockNumber ? `, video ${blockNumber}` : ""}. If the player is unavailable, use the project context on this page.
			</p>
			<div
				className={
					featured
						? "relative w-full aspect-video md:aspect-auto md:h-[85vh] overflow-hidden"
						: "relative w-full aspect-video overflow-hidden"
				}
			>
				{isLoaded ? (
					<iframe
						className="absolute inset-0 h-full w-full"
						src={src}
						title={`${projectTitle} project film${blockNumber ? `, video ${blockNumber}` : ""}`}
						aria-describedby={`video-status-${videoId}-${blockNumber ?? 0}`}
						loading={autoplay ? "eager" : "lazy"}
						allow={autoplay ? "autoplay; encrypted-media; picture-in-picture" : "encrypted-media; picture-in-picture"}
						allowFullScreen
					/>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-neutral-950/80 p-6 text-center">
						<div>
							<p className="text-secondary">Video is available when you choose to load the player.</p>
							<button
								type="button"
								className="shell-cta mt-4 uppercase tracking-widest"
								onClick={() => setIsLoaded(true)}
							>
								Load project video
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default VideoBlock
