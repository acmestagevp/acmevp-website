import { navItems } from "@/constants/nav"
import Link from "next/link"

const Footer = () => {
	return (
		<div className="flex flex-col justify-center p-4">
			<div className="flex flex-col mb-8 lg:flex-row justify-around">
				<div className="p-4 text-center">
					<p>ACME Virtual Production Stage</p>
					<p>2635 S 28th Ave.</p>
					<p>Minneapolis MN 55406</p>
				</div>
				<div className="p-4 text-center">
					<p>info@acmevp.com</p>
					<p>(612) 385-0488</p>
					<p>M-F: 7:30am - 7:30pm</p>
				</div>
			</div>
			<div className="flex place-content-center px-4 flex-wrap">
				{navItems.map(({ label, href }) => (
					<Link className="px-4" key={label} href={href}>
						{label}
					</Link>
				))}
			</div>
			<div className="flex place-content-center py-4 text-xs">
				©2026 ACME Virtual Production
			</div>
		</div>
	)
}

export default Footer
