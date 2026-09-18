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
	// Featured frame: true 16:9, capped by the viewport height so the film plus
	// its section padding fits on screen with even spacing; centered (mx-auto)
	// so short viewports gain balanced side margins. The ContentWrapper full
	// variant keeps the page gutter as the minimum side margin.
	const frameClass = featured
		? "relative mx-auto aspect-video w-[min(100%,calc((100svh-8rem)*16/9))] overflow-hidden"
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
				) : source.kind === "youtube" ? (
					// Client-channel media: privacy-enhanced YouTube embed with
					// native controls; YouTube supplies its own thumbnail, so no
					// poster and no autoplay parameters.
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${source.videoId}`}
						className="absolute inset-0 h-full w-full"
						title={title}
						aria-describedby={`video-status-${blockNumber ?? 0}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
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
