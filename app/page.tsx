import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import Header from "@/components/ui/Header"
import Section from "@/components/layout/Section"
import Content from "@/components/Content"
import { logos } from "@/constants/logos"
import Logo from "@/components/Logo"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<Header variant="full" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="flex flex-col items-center text-center pt-32 pb-16 gap-6">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs text-neutral-400 tracking-wide uppercase">
							Minnesota's Largest LED Volume
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
							ACME Virtual Production
						</h1>
						<p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl">
							Transport your production to the bustling streets of Tokyo, the serene beaches of
							Hawaii, or the rugged peaks of the Rockies — all from the heart of Minnesota.
						</p>
						<div className="flex items-center gap-4 pt-2">
							<Link
								href="/contact"
								className="px-6 py-2.5 text-sm bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors duration-200"
							>
								Schedule a Tour
							</Link>
							<Link
								href="/stage"
								className="px-6 py-2.5 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
							>
								Explore the Stage →
							</Link>
						</div>
					</div>
				</ContentWrapper>
			</Header>

			{/* ── LED Volume Feature ───────────────────────────────────────── */}
			<Section variant="custom" className="py-24 md:py-32">
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={false}>
						<div className="flex flex-col gap-4">
							<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">The Stage</p>
							<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-snug">
								Minnesota's Largest LED Volume
							</h2>
							<div className="flex flex-col gap-3 text-neutral-400 text-sm leading-relaxed">
								<p>
									ACME Virtual Production is home to the largest LED wall in Minnesota — a
									commanding 60-foot-wide by 16.5-foot-tall curved volume that delivers over 14
									million pixels of breathtaking, photo-realistic immersion.
								</p>
								<p>
									Built with premium Unilumin UpadIV 2.6 mm panels (1000 nits brightness), full
									Optitrack motion capture across a 1,600 sq ft tracking area, dual custom media
									servers with RTX 6000 Ada GPUs, and native support for Unreal Engine 5.3–5.7 plus
									Pixera playback.
								</p>
							</div>
							<Link
								href="/stage"
								className="mt-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200 w-fit"
							>
								View full specs →
							</Link>
						</div>
					</Content>
				</ContentWrapper>
			</Section>

			{/* ── Client Logos ─────────────────────────────────────────────── */}
			<Section variant="custom" className="py-16 border-y border-white/[0.06]">
				<ContentWrapper variant="wide">
					<p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 mb-10">
						Delivering end-to-end virtual production for
					</p>
					<div className="flex flex-wrap justify-center items-center gap-2">
						{logos.map((logo, index) => (
							<Logo key={index} graphic={logo.graphic} alt={logo.alt} />
						))}
					</div>
				</ContentWrapper>
			</Section>

			{/* ── Services ─────────────────────────────────────────────────── */}
			<Section variant="custom" className="py-24 md:py-32">
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={true}>
						<div className="flex flex-col gap-4">
							<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">What we offer</p>
							<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-snug">
								Full-service production, start to finish
							</h2>
							<p className="text-neutral-400 text-sm leading-relaxed">
								All-in-one production services in the greater Minneapolis area — from pre-production
								through final delivery.
							</p>
							<ul className="flex flex-col gap-2 mt-2">
								{["Production", "Studio", "Gear", "Virtual Art Department", "Post-Production"].map(
									(service) => (
										<li key={service} className="flex items-center gap-3 text-sm text-neutral-300">
											<span className="w-1 h-1 rounded-full bg-neutral-500 flex-shrink-0" />
											{service}
										</li>
									),
								)}
							</ul>
							<Link
								href="/services"
								className="mt-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200 w-fit"
							>
								View all services →
							</Link>
						</div>
					</Content>
				</ContentWrapper>
			</Section>

			{/* ── Testimonials ─────────────────────────────────────────────── */}
			<Testimonials />
		</div>
	)
}
