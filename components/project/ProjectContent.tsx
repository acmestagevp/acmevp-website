import React from "react"
import type { ContentBlock } from "@/constants/projects"
import VideoBlock from "./VideoBlock"
import TextBlock from "./TextBlock"
import ImageBlock from "./ImageBlock"
import Section from "@/components/layout/Section"
import ContentWrapper from "@/components/layout/ContentWrapper"

interface ProjectContentProps {
	blocks: ContentBlock[]
	projectTitle: string
}

const ProjectContent: React.FC<ProjectContentProps> = ({ blocks, projectTitle }) => {
	// A lone video block auto-features (video-only pages) unless overridden per-block
	const isVideoOnly = blocks.length === 1 && blocks[0].type === "video"
	const archetype = isVideoOnly
		? "film-first"
		: blocks.some((block) => block.type === "image") &&
			  blocks.some((block) => block.type === "text")
			? "case-study"
			: "behind-the-scenes"
	const blockKeys = new Map<string, number>()

	const getBlockKey = (block: ContentBlock) => {
		const fingerprint =
			block.type === "video"
				? `${block.type}-${block.source.kind}-${block.source.kind === "mux" ? block.source.playbackId : block.source.path}`
				: block.type === "image"
					? `${block.type}-${block.src}-${block.alt}`
					: `${block.type}-${block.heading ?? "untitled"}-${block.body}`
		const occurrence = blockKeys.get(fingerprint) ?? 0
		blockKeys.set(fingerprint, occurrence + 1)
		return `${fingerprint}-${occurrence}`
	}

	return (
		<>
			{blocks.map((block, index) => {
				const key = getBlockKey(block)
				switch (block.type) {
					case "video": {
						const featured = block.featured ?? isVideoOnly

						// Featured videos render at true 16:9, inset by the global page gutter via the full wrapper
						if (featured) {
							return (
								<Section key={key} variant="custom" mode="gallery" className="w-full py-6 md:py-8">
									<ContentWrapper variant="full">
										<VideoBlock
											source={block.source}
											projectTitle={projectTitle}
											blockNumber={index + 1}
											featured={true}
											autoplay={block.autoplay}
										/>
									</ContentWrapper>
								</Section>
							)
						}

						return (
							<Section
								key={key}
								variant="custom"
								mode="gallery"
								className={`w-full py-6 md:py-8 composition-${archetype}`}
							>
								<ContentWrapper variant="wide">
									<VideoBlock
										source={block.source}
										projectTitle={projectTitle}
										blockNumber={index + 1}
										featured={false}
										autoplay={block.autoplay}
									/>
								</ContentWrapper>
							</Section>
						)
					}
					case "text":
						return (
							<Section key={key} variant="custom" mode="gallery" className="w-full py-6 md:py-8">
								<ContentWrapper variant="default">
									<TextBlock heading={block.heading} body={block.body} headingLevel="h2" />
								</ContentWrapper>
							</Section>
						)
					case "image":
						return (
							<Section key={key} variant="custom" mode="gallery" className="w-full py-6 md:py-8">
								<ContentWrapper variant={block.fullWidth ? "full" : "wide"}>
									<ImageBlock
										src={block.src}
										alt={block.alt}
										caption={block.caption}
										fullWidth={block.fullWidth}
										aspectRatio={block.aspectRatio}
										fit={block.fit}
									/>
								</ContentWrapper>
							</Section>
						)
					default:
						return null
				}
			})}
		</>
	)
}

export default ProjectContent
