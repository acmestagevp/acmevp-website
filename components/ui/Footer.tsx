import { navItems } from "@/constants/nav"
import Link from "next/link"
import Section from "../layout/Section"
import ContentWrapper from "../layout/ContentWrapper"

const Footer = () => {
	return (
		<footer>
			<Section variant="custom" className="site-footer" border>
				<ContentWrapper variant="wide">
					<div className="relative z-10 flex flex-col justify-center">
						<div className="footer-columns mb-8 flex flex-col lg:flex-row lg:justify-between">
							<div className="text-center lg:text-left">
								<h2 className="my-4 text-2xl">ACME Virtual Production</h2>
								<p className="text-secondary hover:text-neutral-300">
									<a
										href="https://maps.app.goo.gl/bFTrkW2d8GBaKfHT6"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="ACME Virtual Production address on Google Maps"
									>
										2635 28th Ave S<br />
										Minneapolis, MN 55406
									</a>
								</p>
							</div>
							<div className="text-center lg:text-left">
								<h2 className="my-4 text-2xl">Tasty Lighting Supply</h2>
								<p className="text-secondary hover:text-neutral-300">
									<p className="text-secondary hover:text-neutral-300">
										<a href="mailto:Orders@TastyLighting.com">Orders@TastyLighting.com</a>
									</p>
									<p className="text-secondary hover:text-neutral-300">
										<a href="tel:6128755074">(612) 875-5074</a>
									</p>
								</p>
							</div>
							<div className="text-center lg:text-left">
								<h2 className="my-4 text-2xl">Contact</h2>
								<p className="text-secondary hover:text-neutral-300">
									<a href="mailto:info@acmevp.com">info@acmevp.com</a>
								</p>
								<p className="text-secondary hover:text-neutral-300">
									<a href="tel:6123850488">(612) 385-0488</a>
								</p>
							</div>
						</div>
						<nav aria-label="Footer navigation">
							<ul className="flex flex-wrap place-content-center px-4">
								{navItems.map(({ label, href }) => (
									<li key={label}>
										<Link
											className="shell-nav__link inline-block px-3 py-2 text-secondary hover:text-neutral-300"
											href={href}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className="flex place-content-center py-2 text-xs text-secondary hover:text-neutral-300">
							©2026 ACME Virtual Production
						</div>
					</div>
				</ContentWrapper>
			</Section>
		</footer>
	)
}

export default Footer
