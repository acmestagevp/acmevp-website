import type { Metadata } from "next"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"
import Link from "next/link"

export const metadata: Metadata = {
	title: "The Stage",
	description:
		"Minnesota's largest LED volume — 60ft wide, 16.5ft tall, 14M+ pixels. Full specs and amenities.",
}

const specs = [
	{
		id: "panels",
		label: "Panels",
		title: "Unilumin UpadIV 2.6",
		items: ["2.6 mm Pixel Pitch", "1,000 nits brightness", "38 tiles wide × 10 tiles high"],
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
	{
		id: "tracking",
		label: "Tracking",
		title: "Optitrack",
		items: [
			"12 PrimeX22 capture cameras",
			"Two simultaneous frustums",
			"1,600 sq ft tracking area",
		],
		graphic: "/images/content-1-1.png",
		isReversed: true,
	},
	{
		id: "compute",
		label: "Compute",
		title: "Render Nodes",
		items: ["2 custom media servers", "Dual RTX 6000 Ada GPUs"],
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
	{
		id: "media",
		label: "Media",
		title: "Unreal Engine & Pixera",
		items: ["Unreal Engine 5.3, 5.5, 5.7", "Pixera 2D media playback", "Photo & video playback"],
		graphic: "/images/content-1-1.png",
		isReversed: true,
	},
	{
		id: "amenities",
		label: "Amenities",
		title: "ACME East",
		items: [
			"30 ft ceilings",
			"Drive-in access",
			"Free parking",
			"Dining area",
			"Client lounge",
			"WiFi",
		],
		graphic: "/images/content-1-1.png",
		isReversed: false,
	},
]

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<Header variant="half" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="flex flex-col items-center text-center gap-5 py-20">
						<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Minneapolis, MN</p>
						<h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
							The Stage
						</h1>
						<p className="text-neutral-400 text-base leading-relaxed max-w-lg">
							Minnesota's largest LED volume — a 60 ft wide, 16.5 ft tall curved wall delivering
							over 14 million pixels of photo-realistic immersion.
						</p>
					</div>
				</ContentWrapper>
			</Header>

			{/* ── Dimension Stats ──────────────────────────────────────────── */}
			<Section variant="custom" className="py-16 border-b border-white/[0.06] w-full">
				<ContentWrapper variant="wide">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
						{[
							{ label: "Width", value: "60 ft" },
							{ label: "Height", value: "16.5 ft" },
							{ label: "Resolution", value: "7296 × 1920" },
							{ label: "Total Pixels", value: "14M+" },
						].map(({ label, value }) => (
							<div key={label} className="bg-[#080808] px-8 py-8 flex flex-col gap-1">
								<p className="text-xs uppercase tracking-[0.15em] text-neutral-500">{label}</p>
								<p className="text-2xl md:text-3xl font-light text-white">{value}</p>
							</div>
						))}
					</div>
				</ContentWrapper>
			</Section>

			{/* ── Spec Sections ────────────────────────────────────────────── */}
			{specs.map((spec, index) => (
				<Section
					key={spec.id}
					id={spec.id}
					variant="custom"
					className={`py-20 md:py-28 w-full ${index !== 0 ? "border-t border-white/[0.06]" : ""}`}
				>
					<ContentWrapper variant="wide">
						<Content graphic={spec.graphic} isReversed={spec.isReversed}>
							<div className="flex flex-col gap-4">
								<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{spec.label}</p>
								<h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
									{spec.title}
								</h2>
								<ul className="flex flex-col gap-2 mt-1">
									{spec.items.map((item) => (
										<li key={item} className="flex items-center gap-3 text-sm text-neutral-400">
											<span className="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</Content>
					</ContentWrapper>
				</Section>
			))}

			{/* ── Floorplan CTA ────────────────────────────────────────────── */}
			<Section variant="custom" className="py-20 border-t border-white/[0.06] w-full">
				<ContentWrapper variant="narrow">
					<div className="text-center flex flex-col items-center gap-5">
						<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Floorplan</p>
						<h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
							Ready to plan your shoot?
						</h2>
						<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
							Download the stage floorplan or get in touch to schedule a walkthrough.
						</p>
						<div className="flex items-center gap-4 mt-2">
							<Link
								href="/contact"
								className="px-6 py-2.5 text-sm bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors duration-200"
							>
								Schedule a Tour
							</Link>
							<a
								href="/contact"
								className="px-6 py-2.5 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
							>
								Download PDF →
							</a>
						</div>
					</div>
				</ContentWrapper>
			</Section>
		</div>
	)
}
