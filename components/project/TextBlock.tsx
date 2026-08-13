import React from "react"
import AnimateIn from "@/components/decoration/AnimateIn"

interface TextBlockProps {
	heading?: string
	body: string
	headingLevel?: "h2" | "h3"
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, body, headingLevel = "h2" }) => {
	const Heading = headingLevel
	return (
		<AnimateIn>
			<div className="max-w-[var(--measure-reading)] mx-auto text-left">
				{heading && (
					<Heading className="mb-4 text-xl md:text-2xl font-serif text-[var(--text-primary)]">
						{heading}
					</Heading>
				)}
				<p className="text-secondary leading-relaxed">
					{body}
				</p>
			</div>
		</AnimateIn>
	)
}

export default TextBlock
