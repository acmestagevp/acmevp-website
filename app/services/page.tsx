import type { Metadata } from "next"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Services",
	description:
		"Full-service virtual production in Minneapolis — studio, gear, VAD, and post-production.",
}

const services = [
	{
		id: "production",
		label: "Production",
		title: "End-to-end production management",
		body: "Our full-service production team acts as your end-to-end partner, handling everything from pre-production planning and location scouting to on-set execution and wrap. We coordinate in-house crew and our trusted vendor network so you can focus on the creative while we manage logistics, scheduling, and technical execution.",
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
	{
		id: "studio",
		label: "Studio",
		title: "Minnesota's largest LED volume",
		body: "ACME Virtual Production houses Minnesota's largest LED volume: a 60 ft × 16.5 ft curved wall with over 14 million pixels, 2.6 mm Unilumin UpadIV panels, and 1,000 nits brightness. Paired with 30-foot ceilings, drive-in access, free parking, client lounge, and full production amenities.",
		graphic: "/images/content-1-1.png",
		isReversed: true,
	},
	{
		id: "gear",
		label: "Gear",
		title: "Premium cameras, lighting & grip",
		body: "We offer direct access to premium cameras, lighting packages, grip equipment, and specialized virtual production tools through our in-house inventory and long-standing partnerships. Whether you need a high-end cinema camera package, MRMC motion-control rigs, or additional lighting, our flexible gear ecosystem scales with your shoot.",
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
	{
		id: "vad",
		label: "Virtual Art Department",
		title: "Real-time Unreal Engine environments",
		body: "Our Virtual Art Department (VAD) team designs, builds, and operates real-time Unreal Engine environments tailored to your project's vision. From photorealistic 3D worlds and 2.5D plate extensions to custom assets and live compositing, we handle every layer of the virtual set.",
		graphic: "/images/content-1-1.png",
		isReversed: true,
	},
	{
		id: "post",
		label: "Post-Production",
		title: "Seamless finishing from stage to screen",
		body: "Our post-production team picks up right where the stage leaves off, delivering seamless color grading, virtual-set extensions, final compositing, and deliverable packages. With direct access to the original Unreal assets and on-set data, we maintain perfect continuity between the LED wall and any practical elements.",
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
]

const Services = () => {
	return (
		<div className="flex flex-col items-center">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<Header variant="half" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="flex flex-col items-center text-center gap-5 py-20">
						<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">What we offer</p>
						<h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
							Services
						</h1>
						<p className="text-neutral-400 text-base leading-relaxed max-w-lg">
							Our full-service production team acts as your end-to-end partner — from pre-production
							through final delivery, all under one roof in Minneapolis.
						</p>
					</div>
				</ContentWrapper>
			</Header>

			{/* ── Service Sections ─────────────────────────────────────────── */}
			{services.map((service, index) => (
				<Section
					key={service.id}
					id={service.id}
					variant="custom"
					className={`py-20 md:py-28 w-full ${index !== 0 ? "border-t border-white/[0.06]" : ""}`}
				>
					<ContentWrapper variant="wide">
						<Content graphic={service.graphic} isReversed={service.isReversed}>
							<div className="flex flex-col gap-4">
								<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
									{service.label}
								</p>
								<h2 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-snug">
									{service.title}
								</h2>
								<p className="text-neutral-400 text-sm leading-relaxed">{service.body}</p>
								<Link
									href="/contact"
									className="mt-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200 w-fit"
								>
									Get in touch →
								</Link>
							</div>
						</Content>
					</ContentWrapper>
				</Section>
			))}
		</div>
	)
}

export default Services
