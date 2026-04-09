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
		let speed = 40 // pixels per second
		let targetSpeed = 80
		let last = performance.now()

		const loop = (now: number) => {
			const dt = (now - last) / 1000
			last = now

			// smooth speed interpolation
			speed += (targetSpeed - speed) * 0.05

			x -= speed * dt

			if (-x >= width) x = 0

			row.style.transform = `translateX(${x}px)`

			requestAnimationFrame(loop)
		}

		requestAnimationFrame(loop)

		const slow = () => (targetSpeed = 5)
		const normal = () => (targetSpeed = 80)

		row.parentElement?.addEventListener("mouseenter", slow)
		row.parentElement?.addEventListener("mouseleave", normal)

		return () => {
			row.parentElement?.removeEventListener("mouseenter", slow)
			row.parentElement?.removeEventListener("mouseleave", normal)
		}
	}, [])

	const items = [...testimonials, ...testimonials] // duplicate for seamless loop

	return (
		<div className="w-full overflow-hidden my-24">
			<div ref={rowRef} className="flex w-max gap-8">
				{items.map((testimonial, index) => (
					<div
						key={index}
						className="max-w-screen md:max-w-3xl text-balanced border border-neutral-200/20 rounded-xl bg-neutral-700/10 
						hover:border-neutral-500/30 hover:bg-neutral-700/30 backdrop-filter backdrop-blur-xs 
						p-12 text-center content-center shadow-2xl ease-in-out duration-200"
					>
						<p className="text-sm italic text-neutral-400">
							"{testimonial.quote}"
						</p>

						<div className="mt-6">
							<p className="text-lg text-white">{testimonial.name}</p>
							<p className="text-sm text-neutral-400 smallcaps tracking-wide">
								{testimonial.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials
