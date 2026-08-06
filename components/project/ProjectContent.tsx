import React from "react"
import type { ContentBlock } from "@/constants/projects"
import VideoBlock from "./VideoBlock"
import TextBlock from "./TextBlock"
import ImageBlock from "./ImageBlock"
import Section from "@/components/layout/Section"
import ContentWrapper from "@/components/layout/ContentWrapper"

interface ProjectContentProps {
	blocks: ContentBlock[]
}

const ProjectContent: React.FC<ProjectContentProps> = ({ blocks }) => {
	// A lone video block auto-features (video-only pages) unless overridden per-block
	const isVideoOnly = blocks.length === 1 && blocks[0].type === "video"

	return (
		<>
			{blocks.map((block, index) => {
				switch (block.type) {
					case "video": {
						const featured = block.featured ?? isVideoOnly

						// Featured videos bleed full-width — no ContentWrapper constraint
						if (featured) {
							return (
								<Section key={index} variant="custom" className="w-full py-6 md:py-8">
									<VideoBlock
										platform={block.platform}
										videoId={block.videoId}
										featured={true}
										autoplay={block.autoplay}
									/>
								</Section>
							)
						}

						return (
							<Section key={index} variant="custom" className="w-full py-6 md:py-8">
								<ContentWrapper variant="wide">
									<VideoBlock
										platform={block.platform}
										videoId={block.videoId}
										featured={false}
										autoplay={block.autoplay}
									/>
								</ContentWrapper>
							</Section>
						)
					}
					case "text":
						return (
							<Section key={index} variant="custom" className="w-full py-6 md:py-8">
								<ContentWrapper variant="default">
									<TextBlock
										heading={block.heading}
										body={block.body}
									/>
								</ContentWrapper>
							</Section>
						)
					case "image":
						return (
							<Section key={index} variant="custom" className="w-full py-6 md:py-8">
								<ContentWrapper variant={block.fullWidth ? "full" : "wide"}>
									<ImageBlock
										src={block.src}
										alt={block.alt}
										caption={block.caption}
										fullWidth={block.fullWidth}
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
