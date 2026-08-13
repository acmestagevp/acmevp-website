import React from "react"
import Image from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/decoration/AnimateIn"

interface ProjectCardProps {
	slug: string
	title: string
	subtitle?: string
	thumbnail: string
	mediaRatio?: "video" | "square" | "portrait"
	mediaFit?: "cover" | "contain"
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	slug,
	title,
	subtitle,
	thumbnail,
	mediaRatio = "video",
	mediaFit = "cover",
}) => {
	const ratioClass = {
		video: "aspect-video",
		square: "aspect-square",
		portrait: "aspect-[4/5]",
	}[mediaRatio]
	const fitClass = mediaFit === "contain" ? "object-contain" : "object-cover"

	return (
		<AnimateIn>
			<Link
				href={`/projects/${slug}`}
				className="group gallery-media block"
				aria-label={`View project: ${title}${subtitle ? `, ${subtitle}` : ""}`}
			>
				<div className={`relative w-full ${ratioClass} overflow-hidden bg-black`}>
					<Image
						className={`${fitClass} opacity-75 group-hover:opacity-100 group-focus-visible:opacity-100 ease-in-out duration-200`}
						fill
						src={thumbnail}
						alt={title}
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
					/>
				</div>
				<div className="px-2 py-4 transition-colors group-focus-visible:bg-white/5">
					<h2 className="text-xl font-serif">{title}</h2>
					{subtitle && <p className="text-sm text-secondary">{subtitle}</p>}
				</div>
			</Link>
		</AnimateIn>
	)
}

export default ProjectCard
