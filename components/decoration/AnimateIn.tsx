"use client"

import { motion, MotionProps } from "framer-motion"
import { ReactNode } from "react"

interface AnimateInProps extends MotionProps {
	children: ReactNode
	className?: string
	delay?: number // optional stagger
	y?: number // how far it slides up (default 60)
}

const AnimateIn = ({ children, className = "", delay = 0, y = 60, ...props }: AnimateInProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px 0px" }} // starts animating a bit before fully in view
			transition={{
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
