import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
import Link from "next/link"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="default" graphic="/images/stage/stage-main.png" imageOpacity={60} alt="ACME virtual production stage and LED volume">
				<ContentWrapper
					variant="wide"
					className="pt-64 pb-24 place-items-center xl:place-items-end flex-1"
				>
					<AnimateIn useOpacity={false}>
						<div className="relative z-10 mt-24 max-w-2xl px-8 py-8 md:px-12">
							<div className="absolute -z-1 inset-0 panel-surface backdrop-blur-lg bg-mask"></div>
							<AnimateIn>
								<h1 className="text-center text-5xl md:text-7xl font-serif font-gradient">
									The Stage
								</h1>
							</AnimateIn>
							<div className="text-left py-4 text-secondary">
								<AnimateIn delay={0.2}>
									<p className="my-4">
										Our volume gives you the scale you actually need on set. This is the largest LED
										wall in the greater Minneapolis area, and with enough space to build entire sets
										in front of it without running out room.
									</p>
								</AnimateIn>
								<AnimateIn delay={0.3}>
									<ul className="list-disc list-inside">
										<li className="">Width: 60 ft</li>
										<li className="">Height: 16.5 ft</li>
										<li className="">2.5° Curve</li>
									</ul>
								</AnimateIn>
							</div>
						</div>
					</AnimateIn>
				</ContentWrapper>
			</Header>
			<Section className="pt-20 md:pt-28">
				<ContentWrapper variant="wide">
					<Content basis="50%" graphic="/images/stage/upadiv.png" alt="Unilumin UpadIV LED panels on the ACME stage">
						<AnimateIn>
							<h2 className="text-center text-4xl">Panels</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									Premium Unilumin UpadIV panels deliver the brightness and clarity professionals
									demand. They hold up beautifully under studio lighting and stay crisp even in wide
									shots or close-ups.
								</p>
								<ul className="list-disc list-inside">
									<li className="">2.6mm Pixel Pitch</li>
									<li className="">1000 nits brightness</li>
									<li className="">38 Tiles Wide × 10 Tiles High</li>
									<li className="">7296px × 1920px</li>
									<li className="">14,008,320 Total Pixels</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/primex22.png" alt="OptiTrack PrimeX22 camera tracking system" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Tracking</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									Optitrack is the gold-standard camera tracking system used on major stages
									worldwide. It follows your camera in real time so the virtual world stays
									perfectly locked to the lens.
								</p>
								<ul className="list-disc list-inside">
									<li className="">12 PrimeX22 Capture Cameras</li>
									<li className="">Two Simultaneous Frustums</li>
									<li className="">1600 sq ft Tracking Area</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/rtx6000.png" alt="RTX 6000 Ada media server hardware">
						<AnimateIn>
							<h2 className="text-center text-4xl">Compute</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									Two custom-built media servers power complex Unreal Engine scenes without dropping
									frames, handling high-detail environments and real-time lighting changes with room
									to spare.
								</p>
								<ul className="list-disc list-inside">
									<li className="">2 Custom Media Servers</li>
									<li className="">Dual RTX 6000 Ada GPUs</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/pixera.png" alt="Pixera media playback system" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Media</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									We run the latest Unreal Engine versions natively and keep Pixera on hand for
									quick 2D plates and video playback. This flexible combination lets us jump between
									photorealistic 3D worlds and fast-turnaround plates without ever slowing down
									production.
								</p>
									<ul className="list-disc list-inside">
										<li className="">Unreal Engine</li>
										<li><ul className="ml-8 list-disc list-inside">
											<li className="">5.3</li>
											<li className="">5.5</li>
											<li className="">5.7</li>
										</ul></li>
										<li className="">Pixera</li>
										<li><ul className="ml-8 list-disc list-inside">
											<li className="">2D Media</li>
											<li className="">Video Playback</li>
										</ul></li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/floorplan.png" alt="Floor plan for the ACME virtual production stage">
						<AnimateIn>
							<h2 className="text-center text-4xl">Floorplan</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									See the exact stage layout. The open design gives you full flexibility for camera
									movement, talent blocking, load-in, and set build, all while keeping everything
									you need within arm’s reach.
								</p>
								<ul className="list-disc list-inside">
									<li>
										<a
											href="/ACME_Stage_Floor_Plan.pdf"
											download="ACME_Stage_Floor_Plan.pdf"
											className="hover:text-neutral-200 ease-in-out duration-200"
										>
											[ Download PDF ]
										</a>
									</li>
									<li>75 ft × 75 ft Dimensions</li>
									<li>5,625 sq ft Stage Area</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/amenities.png" alt="Amenities and crew support spaces at ACME" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Amenities</h2>
							<div className="text-left py-4 text-neutral-400">
								<p className="my-4">
									Everything you need to keep the day running smoothly is already here. With
									drive-in access, free parking, and high-speed WiFi, the studio is built to support
									long days and large crews without any added stress.
								</p>
								<ul className="list-disc list-inside">
									<li className="">30ft Ceilings</li>
									<li className="">Drive In Access</li>
									<li className="">Free Parking</li>
									<li className="">Dining Area</li>
									<li className="">Client Lounge</li>
									<li className="">WiFi</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section className="pb-24 pt-8 md:pb-32 md:pt-12">
				<ContentWrapper variant="narrow" className="text-center">
					<AnimateIn>
						<p className="mb-5 text-sm uppercase tracking-[0.24em] text-neutral-500">Your next stage day</p>
						<h2 className="font-serif text-3xl md:text-4xl">Bring the production into focus.</h2>
						<Link href="/contact" className="control-surface mt-8 inline-flex items-center justify-center px-8 py-3 uppercase tracking-widest hover:bg-neutral-300 hover:text-neutral-950">
							Book the stage
						</Link>
					</AnimateIn>
				</ContentWrapper>
			</Section>
		</div>
	)
}
