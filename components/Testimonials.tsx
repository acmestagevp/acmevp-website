"use client"

import { testimonials } from "@/constants/testimonials"
import { useEffect, useRef } from "react"

const Testimonials = () => {
	const rowRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const row = rowRef.current
		if (!row) return

		const width = row.scrollWidth / 2
		let x = 0
		let speed = 40
		let targetSpeed = 50
		let last = performance.now()

		const loop = (now: number) => {
			const dt = (now - last) / 1000
			last = now

			speed += (targetSpeed - speed) * 0.05
			x -= speed * dt
			if (-x >= width) x = 0

			row.style.transform = `translateX(${x}px)`
			requestAnimationFrame(loop)
		}

		requestAnimationFrame(loop)

		const slow = () => (targetSpeed = 5)
		const normal = () => (targetSpeed = 50)

		row.parentElement?.addEventListener("mouseenter", slow)
		row.parentElement?.addEventListener("mouseleave", normal)

		return () => {
			row.parentElement?.removeEventListener("mouseenter", slow)
			row.parentElement?.removeEventListener("mouseleave", normal)
		}
	}, [])

	const items = [...testimonials, ...testimonials]

	return (
		<div className="w-full overflow-hidden py-20 md:py-28">
			{/* Section label */}
			<div className="max-w-2xl mx-auto px-5 text-center mb-12">
				<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">What our clients say</p>
			</div>

			{/* Scrolling row with side fades */}
			<div className="relative">
				<div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
				<div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

				<div ref={rowRef} className="flex w-max gap-6">
					{items.map((testimonial, index) => (
						<div
							key={index}
							className="w-[480px] border border-white/[0.07] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] backdrop-blur-sm p-10 transition-all duration-300 ease-out"
						>
							<p className="text-neutral-400 text-sm leading-relaxed italic">
								&ldquo;{testimonial.quote}&rdquo;
							</p>

							<div className="mt-8 flex items-center gap-3">
								<div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-xs text-neutral-400 font-medium flex-shrink-0">
									{testimonial.name.charAt(0)}
								</div>
								<div>
									<p className="text-sm font-medium text-neutral-200">{testimonial.name}</p>
									<p className="text-xs text-neutral-500 uppercase tracking-wide mt-0.5">
										{testimonial.title}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Testimonials
