"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const BrushReveal = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)

	// trailLength: 0.1 is short (fast fade), 0.01 is long (slow fade)
	// 0.05 is about 1.5 seconds. I've bumped the default to 0.08 so the trail disappears
	// visually 100% (no perceptible ghosting) much faster while still feeling nice.
	const trailLength = 0.02

	const mouse = useRef({
		x: 0,
		y: 0,
		lastX: 0,
		lastY: 0,
		active: false,
		needsUpdate: false,
	})

	useEffect(() => {
		const canvas = canvasRef.current
		const container = containerRef.current
		if (!canvas || !container) return

		const ctx = canvas.getContext("2d", { alpha: true })
		if (!ctx) return

		let animationFrameId: number

		const resizeCanvas = () => {
			canvas.width = container.offsetWidth
			canvas.height = container.offsetHeight
			ctx.fillStyle = "rgba(0.1, 0.1, 0.1, 1)"
			ctx.fillRect(0, 0, canvas.width, canvas.height)
		}

		const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

		const drawReveal = (x: number, y: number) => {
			const radius = 75 // total brush size (fade happens over ~100px)

			const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)

			// NEW GRADIENT: small sharp white point + slow fade to black
			// Full reveal (white point) only in the first 5px, then fades smoothly over the rest of the 100px radius.
			// This gives you exactly the "small white point that slowly fades to black" look.
			gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
			gradient.addColorStop(0.1, "rgba(0, 0, 0, 1)") // full reveal up to 5px (small point)
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)") // complete fade by 100px

			ctx.globalCompositeOperation = "destination-out"
			ctx.fillStyle = gradient
			ctx.beginPath()
			ctx.arc(x, y, radius, 0, Math.PI * 2)
			ctx.fill()
		}

		const render = () => {
			// 1. ALWAYS FADE TOWARD BLACK FIRST (this is what heals the canvas)
			ctx.globalCompositeOperation = "source-over"
			ctx.fillStyle = `rgba(0.1, 0.1, 0.1, ${trailLength})`
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			// 2. DRAW THE REVEAL SECOND
			if (mouse.current.active) {
				const dist = Math.hypot(
					mouse.current.x - mouse.current.lastX,
					mouse.current.y - mouse.current.lastY,
				)

				const steps = Math.max(1, Math.floor(dist / 2))
				for (let i = 0; i <= steps; i++) {
					const x = lerp(mouse.current.lastX, mouse.current.x, i / steps)
					const y = lerp(mouse.current.lastY, mouse.current.y, i / steps)
					drawReveal(x, y)
				}

				mouse.current.lastX = mouse.current.x
				mouse.current.lastY = mouse.current.y
			}

			animationFrameId = requestAnimationFrame(render)
		}

		const handleMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect()
			mouse.current.x = e.clientX - rect.left
			mouse.current.y = e.clientY - rect.top

			if (!mouse.current.active) {
				mouse.current.lastX = mouse.current.x
				mouse.current.lastY = mouse.current.y
				mouse.current.active = true
			}
		}

		const handleMouseLeave = () => {
			mouse.current.active = false
		}

		// Initialize
		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)
		window.addEventListener("mousemove", handleMouseMove)
		canvas.addEventListener("mouseleave", handleMouseLeave)

		render()

		return () => {
			window.removeEventListener("resize", resizeCanvas)
			window.removeEventListener("mousemove", handleMouseMove)
			canvas.removeEventListener("mouseleave", handleMouseLeave)
			cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return (
		<div ref={containerRef} className="relative w-full h-screen overflow-hidden cursor-crosshair">
			<div className="absolute inset-0">
				<Image
					src="/images/pixel test.png" // ← Change to your image path
					alt="Revealable background image"
					fill
					priority // Optional: loads eagerly since it's the main content
					quality={75} // Tune 75–100 based on your needs
					className="object-cover object-center z-[-100]" // Ensures it covers without distortion
				/>
			</div>

			{/* Optional: subtle overlay if you want the unrevealed state to feel darker/more mysterious */}
			<div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />

			<canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
		</div>
	)
}

export default BrushReveal
