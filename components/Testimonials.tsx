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
		<div className="w-full overflow-hidden py-12">
			<div ref={rowRef} className="flex w-max gap-8">
				{items.map((testimonial, index) => (
					<div
						key={index}
						className="w-4xl shrink-0 border-2 rounded-xl border-neutral-800 p-12 text-center opacity-50 hover:opacity-100 ease-in-out duration-100"
					>
						<p className="text-neutral-200 italic">"{testimonial.quote}"</p>

						<div className="mt-8">
							<p className=" text-white">{testimonial.name}</p>
							<p className="text-sm text-neutral-400">{testimonial.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials
