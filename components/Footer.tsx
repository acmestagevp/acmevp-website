import { navItems } from "@/constants/nav"
import Link from "next/link"

const Footer = () => {
	return (
		<div className="">
			<div className="">
				{navItems.map(({ label, href }) => (
					<Link className="" key={label} href={href}>
						{label}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Footer
