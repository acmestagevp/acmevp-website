import React from "react"
import AnimateIn from "@/components/decoration/AnimateIn"

interface TextBlockProps {
	heading?: string
	body: string
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, body }) => {
	return (
		<AnimateIn>
			<div className="max-w-3xl mx-auto text-center">
				{heading && (
					<h2 className="mb-4 text-2xl md:text-3xl font-serif font-gradient">
						{heading}
					</h2>
				)}
				<p className="text-neutral-400 text-balance leading-relaxed">
					{body}
				</p>
			</div>
		</AnimateIn>
	)
}

export default TextBlock
