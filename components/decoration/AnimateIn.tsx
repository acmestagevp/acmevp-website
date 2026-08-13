"use client"

import { motion, MotionProps, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateInProps extends MotionProps {
	children: ReactNode
	className?: string
	delay?: number // optional stagger
	useOpacity?: boolean
	y?: number // how far it slides up (default 60)
}

const AnimateIn = ({
	children,
	className = "",
	useOpacity = true,
	delay = 0,
	y = 60,
	...props
}: AnimateInProps) => {
	const reducedMotion = useReducedMotion()
	const motionDisabled = reducedMotion === true
	return (
		<motion.div
			initial={reducedMotion ? false : { y: y, ...(useOpacity ? { opacity: 0 } : { opacity: 1 }) }}
			whileInView={motionDisabled ? undefined : { y: 0, ...(useOpacity ? { opacity: 1 } : {}) }}
			viewport={{ once: true, margin: "-80px 0px" }} // starts animating a bit before fully in view
			transition={motionDisabled ? { duration: 0 } : {
				duration: 0.5,
				ease: "easeOut",
				delay,
			}}
			className={className}
			{...props} // lets you override anything if needed
		>
			{children}
		</motion.div>
	)
}

export default AnimateIn
