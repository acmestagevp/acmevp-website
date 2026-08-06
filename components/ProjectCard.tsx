import React from "react"
import Image from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/decoration/AnimateIn"

interface ProjectCardProps {
	slug: string
	title: string
	subtitle?: string
	thumbnail: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	slug,
	title,
	subtitle,
	thumbnail,
}) => {
	return (
		<AnimateIn>
			<Link href={`/projects/${slug}`} className="group block">
				<div className="relative w-full aspect-video overflow-hidden">
					<Image
						className="object-cover opacity-75 group-hover:opacity-100 ease-in-out duration-200"
						fill
						src={thumbnail}
						alt={title}
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>
				<div className="px-2 py-4">
					<h2 className="text-xl font-serif">{title}</h2>
					{subtitle && <p className="text-sm text-neutral-400">{subtitle}</p>}
				</div>
			</Link>
		</AnimateIn>
	)
}

export default ProjectCard
