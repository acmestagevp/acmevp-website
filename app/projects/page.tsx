import type { Metadata } from "next"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import { projects } from "@/constants/projects"
import { componentMap } from "@/utils/componentMap"
import Section from "@/components/layout/Section"
import Logo from "@/components/Logo"
import { logos } from "@/constants/logos"

export const metadata: Metadata = {
	title: "Projects",
	description: "Featured virtual production projects from ACME — commercials, narrative, and more.",
}

export default function Projects() {
	return (
		<div className="flex flex-col">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<Header variant="half" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="flex flex-col items-center text-center gap-5 py-20">
						<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Our work</p>
						<h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
							Projects
						</h1>
						<p className="text-neutral-400 text-base leading-relaxed max-w-md">
							From high-end commercials to narrative films — work produced on Minnesota's largest
							LED volume.
						</p>
					</div>
				</ContentWrapper>
			</Header>

			{/* ── Project Grid ─────────────────────────────────────────────── */}
			<Section variant="custom" className="py-16 md:py-24">
				<ContentWrapper variant="wide">
					<div className="flex flex-wrap -m-4">
						{projects.map((section, index) => {
							const Component = componentMap[section.component]
							if (!Component) return null
							const { component, ...props } = section
							return <Component key={index} {...props} isReversed={true} />
						})}
					</div>
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

			{/* ── Testimonials ─────────────────────────────────────────────── */}
			<Testimonials />
		</div>
	)
}
