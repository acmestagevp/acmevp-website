import { navItems } from "@/constants/nav"
import Link from "next/link"
import Section from "./layout/Section"
import ContentWrapper from "./layout/ContentWrapper"

const Footer = () => {
	return (
		<Section variant="custom" className="py-4">
			<ContentWrapper>
				<div className="flex flex-col justify-center p-4 z-10">
					<div className="flex flex-col py-16 lg:flex-row justify-between">
						<div className="p-4 text-center ">
							<p className="text-2xl">ACME Virtual Production</p>
							<p>2635 S 28th Ave.</p>
							<p>Minneapolis MN 55406</p>
						</div>
						<div className="p-4 text-center">
							<p className="text-2xl">Contact</p>
							<p>info@acmevp.com</p>
							<p>(612) 385-0488</p>
						</div>
					</div>
					<div className="flex place-content-center px-4 flex-wrap">
						{navItems.map(({ label, href }) => (
							<Link
								className="mx-4 text-neutral-500 hover:text-neutral-300 ease-in-out duration-200"
								key={label}
								href={href}
							>
								{label}
							</Link>
						))}
					</div>
					<div className="flex place-content-center py-4 text-xs text-neutral-500 hover:text-neutral-400 ease-in-out duration-200">
						©2026 ACME Virtual Production
					</div>
				</div>
			</ContentWrapper>
		</Section>
	)
}

export default Footer
