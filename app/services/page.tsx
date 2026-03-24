import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"
import Link from "next/link"
import AnimateIn from "@/components/decoration/AnimateIn"

const Services = () => {
	return (
		<div className="flex flex-col items-center">
			<Header
				variant="default"
				imageOpacity={25}
				graphic="/images/services/services.jpg"
				alt="BTS Photo of volume wall shoot at ACME Stage. Photo by Krizia Studios."
			>
				<ContentWrapper className="pt-64 pb-12">
					<div className="relative z-10 text-center">
						<AnimateIn>
							<h1 className="text-3xl md:text-5xl">Services</h1>
						</AnimateIn>
						<AnimateIn delay={0.25}>
							<p className="mt-6 text-neutral-400 text-balance">
								Our full-service production team acts as your end-to-end partner, handling
								everything from pre-production planning and location scouting to on-set execution
								and wrap. We coordinate in-house crew and our trusted vendor network so you can
								focus on the creative while we manage logistics, scheduling, and technical
								execution. From high-end commercials and narrative projects to branded content, we
								deliver polished productions that feel like they were shot on location - without
								ever leaving Minnesota.
							</p>
						</AnimateIn>
					</div>
				</ContentWrapper>
			</Header>
			<Section variant="custom" className="p-18" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/services/studio.jpg" isReversed={false}>
						<AnimateIn>
							<Link href="/stage">
								<h2 className="text-2xl py-2">Studio</h2>
							</Link>
							<div className="text-neutral-400">
								<p className="py-2">
									ACME Virtual Production houses Minnesota’s largest LED volume: a 60 ft × 16.5 ft
									curved wall with over 14 million pixels, 2.6 mm Unilumin UpadIV panels, and 1,000
									nits brightness. P
								</p>
								<p className="py-2">
									Paired with 30-foot ceilings, drive-in access, free parking, and a client lounge,
									the stage is built for seamless live-action + virtual integration. Whether you
									need a single-camera hero shot or a full 270° immersive set, this is the Midwest’s
									most capable virtual production destination.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="p-18" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/services/gear.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-2xl py-2">Gear</h2>
							<div className="text-neutral-400">
								<p className="py-2">
									We offer direct access to premium cameras, lighting packages, grip equipment, and
									specialized virtual production tools through our in-house inventory and
									long-standing partnerships.
								</p>
								<p className="py-2">
									Whether you need a high-end cinema camera package, MRMC motion-control rigs, or
									additional lighting, this flexible gear ecosystem means you can scale your shoot
									exactly as needed without the hassle of sourcing from multiple vendors.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="p-18" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/services/vad.png" isReversed={false}>
						<AnimateIn>
							<h2 className="text-2xl py-2">Virtual Art Department</h2>
							<div className="text-neutral-400">
								<p className="py-2">
									Our in-house VAD team designs, builds, and operates custom Unreal Engine
									environments tailored to your brief.
								</p>
								<p className="py-2">
									From photorealistic 3D worlds and 2.5D extensions to live compositing, we handle
									every layer. Optitrack tracking and Pixera playback guarantee pixel-perfect
									integration between practical elements and the LED wall.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			{/* <Section variant="custom" className="p-18" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-2xl py-2">Education</h2>
							<div className="text-neutral-400">
								<p className="py-2">
									We don’t just run the stage — we make sure your team gets the most out of it.
								</p>
								<p className="py-2">
									Hands-on demo nights, private workshops, and quick-reference guides cover
									everything from basic LED workflows to advanced nDisplay and camera tracking.
									Whether you’re new to virtual production or a seasoned DP, these sessions turn
									“first time on a volume” into “nailed it on take one.”
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section> */}
			<Section variant="custom" className="p-18" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/services/post.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-2xl py-2">Post-Production</h2>
							<div className="text-neutral-400">
								<p className="py-2">
									Our post team picks up where the stage ends, delivering color grading, virtual-set
									extensions, final compositing, and client-ready files.
								</p>
								<p className="py-2">
									Direct access to the original Unreal assets and on-set data means perfect
									continuity and faster turnarounds — from quick commercial deliverables to full
									narrative finishing.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
		</div>
	)
}

export default Services
