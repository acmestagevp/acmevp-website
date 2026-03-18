import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<footer className="relative mt-auto border-t border-white/[0.06]">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
					{/* Brand */}
					<div className="flex flex-col gap-4">
						<Image
							src="/images/ACME-Logo-White.png"
							alt="Acme Virtual Production"
							width={100}
							height={40}
							className="opacity-60"
						/>
						<p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
							Minnesota's premier virtual production studio. Bringing worlds to life on the largest
							LED volume in the Midwest.
						</p>
					</div>

					{/* Navigation */}
					<div className="flex flex-col gap-3">
						<p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-1">
							Navigation
						</p>
						{navItems.map(({ label, href }) => (
							<Link
								key={label}
								href={href}
								className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 w-fit"
							>
								{label}
							</Link>
						))}
					</div>

					{/* Contact */}
					<div className="flex flex-col gap-3">
						<p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-1">
							Contact
						</p>
						<a
							href="mailto:info@acmevp.com"
							className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 w-fit"
						>
							info@acmevp.com
						</a>
						<a
							href="tel:6123850488"
							className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 w-fit"
						>
							(612) 385-0488
						</a>
						<a
							href="https://maps.app.goo.gl/bFTrkW2d8GBaKfHT6"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 w-fit"
						>
							2635 S 28th Ave.
							<br />
							Minneapolis, MN 55406
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-neutral-600">
						©2026 ACME Virtual Production. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
