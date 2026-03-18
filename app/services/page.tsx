import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"

const Services = () => {
	return (
		<div className="flex flex-col items-center">
			<Header variant="default" graphic="/images/hero-16-9.png">
				<ContentWrapper className="pt-64 pb-24">
					<div className="relative z-10 text-center">
						<h1 className="text-3xl md:text-4xl tracking-tight">Services</h1>
						<p className="mt-6">
							Our full-service production team acts as your end-to-end partner, handling everything
							from pre-production planning and location scouting to on-set execution and wrap. We
							coordinate in-house crew and our trusted vendor network so you can focus on the
							creative while we manage logistics, scheduling, and technical execution. From high-end
							commercials and narrative projects to branded content, we deliver polished productions
							that feel like they were shot on location - without ever leaving Minnesota.
						</p>
					</div>
				</ContentWrapper>
			</Header>
			<Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content textFlex="2" graphic="/images/content-1-1.png" isReversed={false}>
						<h2 className="text-3xl py-2">Studio</h2>
						<div className="text-neutral-400">
							<p className="py-2">
								ACME Virtual Production houses Minnesota’s largest LED volume: a 60 ft × 16.5 ft
								curved wall with over 14 million pixels, 2.6 mm Unilumin UpadIV panels, and 1,000
								nits brightness. Paired with 30-foot ceilings, drive-in access, free parking, client
								lounge, and full production amenities, the stage is built for seamless integration
								of live-action and virtual environments. Whether you need a single-camera hero shot
								or a full 270° immersive set, this is the Midwest’s most capable virtual production
								destination.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content textFlex="2" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-3xl py-2">Gear</h2>
						<div className="text-neutral-400">
							<p className="py-2">
								We offer direct access to premium cameras, lighting packages, grip equipment, and
								specialized virtual production tools through our in-house inventory and
								long-standing partnerships. Whether you need a high-end cinema camera package, MRMC
								motion-control rigs, or additional lighting, this flexible gear ecosystem means you
								can scale your shoot exactly as needed without the hassle of sourcing from multiple
								vendors.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content textFlex="2" graphic="/images/content-1-1.png" isReversed={false}>
						<h2 className="text-3xl py-2">Virtual Art Department</h2>
						<div className="text-neutral-400">
							<p className="py-2">
								Our Virtual Art Department (VAD) team designs, builds, and operates real-time Unreal
								Engine environments tailored to your project’s vision. From photorealistic 3D worlds
								and 2.5D plate extensions to custom assets and live compositing, we handle every
								layer of the virtual set. Using Optitrack tracking, Pixera 2D playback, and native
								Unreal Engine, we ensure pixel-perfect integration between practical elements and
								the LED wall — all managed by artists who understand both creative direction and
								technical delivery.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			{/* <Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content textFlex="2" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-3xl py-2">Education</h2>
						<div className="text-neutral-400">
							<p className="py-2">
								We believe the best virtual production happens when everyone on set understands the
								technology. That’s why we offer hands-on demo nights, private workshops, and ongoing
								educational resources for directors, DPs, producers, and agencies. Whether you’re
								new to LED volumes or want to dive deeper into nDisplay workflows, camera tracking,
								or real-time lighting, our sessions are designed to build confidence and efficiency.
								Think of it as your shortcut to getting the most out of every shoot at ACME and
								beyond.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section> */}
			<Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content textFlex="2" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-3xl py-2">Post-Production</h2>
						<div className="text-neutral-400">
							<p className="py-2">
								Our post-production team picks up right where the stage leaves off, delivering
								seamless color grading, virtual-set extensions, final compositing, and deliverable
								packages. With direct access to the original Unreal assets and on-set data, we
								maintain perfect continuity between the LED wall and any practical elements. From
								quick-turn commercial deliverables to full narrative finishing, we ensure your
								project looks and feels exactly as envisioned — polished, consistent, and ready for
								distribution.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
		</div>
	)
}

export default Services
