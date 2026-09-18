"use client"

import React from "react"
import Video from "next-video"
import placeholderVideo from "@videos/placeholder.mp4"
import type { ProjectVideoSource } from "@/constants/projects"

interface VideoBlockProps {
	source: ProjectVideoSource
	projectTitle: string
	blockNumber?: number
	featured?: boolean
	autoplay?: boolean
}

const VideoBlock: React.FC<VideoBlockProps> = ({
	source,
	projectTitle,
	blockNumber,
	featured = false,
	autoplay = false,
}) => {
	const title = `${projectTitle} project film${blockNumber ? `, video ${blockNumber}` : ""}`
	const frameClass = featured
		? "relative w-full aspect-video overflow-hidden"
		: "relative w-full aspect-video overflow-hidden"

	return (
		<div className="w-full">
			<p className="sr-only" id={`video-status-${blockNumber ?? 0}`}>
				Video player: {title}. If the player is unavailable, use the project context on this page.
			</p>
			<div className={frameClass}>
				{source.kind === "local-fixture" ? (
					<Video
						src={placeholderVideo}
						className="absolute inset-0 h-full w-full"
						controls
						autoPlay={autoplay}
						muted={autoplay}
						playsInline
						title={title}
						aria-describedby={`video-status-${blockNumber ?? 0}`}
					/>
				) : (
					<Video
						playbackId={source.playbackId}
						poster={`https://image.mux.com/${source.playbackId}/thumbnail.jpg`}
						className="absolute inset-0 h-full w-full"
						controls
						autoPlay={autoplay}
						muted={autoplay}
						playsInline
						title={title}
						aria-describedby={`video-status-${blockNumber ?? 0}`}
					/>
				)}
			</div>
		</div>
	)
}

export default VideoBlock
