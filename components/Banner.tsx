import React from "react"
import Image from "next/image"
import Link from "next/link"

interface BannerProps {
	title: string
	href: string
	graphic: string
	isReversed?: boolean
}

const Banner: React.FC<BannerProps> = ({ title, href, graphic }) => {
	return (
		<Link href={href} className="group block w-full my-6">
			<div className="relative h-[40vh] w-full overflow-hidden rounded-xl border border-white/[0.06] glow-border">
				<Image
					className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-[1.02] transition-all duration-500 ease-out"
					fill
					src={graphic}
					alt={title}
				/>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
				<div className="absolute inset-0 flex items-center justify-center">
					<h2 className="relative z-10 text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-neutral-100 transition-colors duration-200">
						{title}
					</h2>
				</div>
				{/* Arrow indicator */}
				<div className="absolute bottom-6 right-6 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d="M4 10h12M10 4l6 6-6 6"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</Link>
	)
}

export default Banner
