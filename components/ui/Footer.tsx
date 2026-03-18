import { navItems } from "@/constants/nav"
import Link from "next/link"
import Section from "../layout/Section"
import ContentWrapper from "../layout/ContentWrapper"

const Footer = () => {
	return (
		<Section variant="custom" className="py-6">
			<ContentWrapper>
				<div className="premium-panel z-10 flex flex-col justify-center rounded-[2rem] p-4 md:p-8">
					<div className="flex flex-col justify-between py-10 lg:flex-row lg:items-start">
						<div className="p-4 text-center lg:text-left">
							<p className="m-2 text-2xl text-white">ACME Virtual Production</p>
							<p className="text-sm leading-7 text-neutral-500 transition duration-200 hover:text-neutral-300">
								<a
									href="https://maps.app.goo.gl/bFTrkW2d8GBaKfHT6"
									target="_blank"
									rel="noopener noreferrer"
								>
									2635 S 28th Ave. <br />
									Minneapolis MN 55406
								</a>
							</p>
						</div>
						<div className="p-4 text-center lg:text-right">
							<p className="m-2 text-2xl text-white">Contact</p>
							<p className="text-sm leading-7 text-neutral-500 transition duration-200 hover:text-neutral-300">
								<a href="mailto:info@acmevp.com">info@acmevp.com</a>
							</p>
							<p className="text-sm leading-7 text-neutral-500 transition duration-200 hover:text-neutral-300">
								<a href="tel:(612) 385-0488">(612) 385-0488</a>
							</p>
						</div>
					</div>
					<div className="flex flex-wrap place-content-center gap-x-3 gap-y-2 border-t border-white/10 px-4 pt-6">
						{navItems.map(({ label, href }) => (
							<Link
								className="mx-2 text-[10px] uppercase tracking-[0.24em] text-neutral-500 transition duration-200 hover:text-white"
								key={label}
								href={href}
							>
								{label}
							</Link>
						))}
					</div>
					<div className="flex place-content-center py-4 text-[10px] uppercase tracking-[0.24em] text-neutral-600">
						©2026 ACME Virtual Production
					</div>
				</div>
			</ContentWrapper>
		</Section>
	)
}

export default Footer
