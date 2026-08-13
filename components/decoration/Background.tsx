import React from "react"
import Image from "next/image"

const Background = () => {
	return <div className="shell-background" aria-hidden="true">
		<Image className="shell-background__glow bg-mask-top" src="/background/bg-2.png" alt="" width={1920} height={1080} />
		<Image className="shell-background__noise bg-mask-top" src="/background/bg-noise.png" alt="" width={1920} height={1080} />
	</div>
}

export default Background
