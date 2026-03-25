import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="default" graphic="/images/stage/stage-main.png" imageOpacity={60}>
				<ContentWrapper
					variant="wide"
					className="pt-64 pb-24 place-items-center xl:place-items-end flex-1"
				>
					<AnimateIn useOpacity={false}>
						<div className="z-10 mt-24 py-8 px-12 max-w-2xl relative">
							<div className="absolute -z-1 inset-0 border-t border-neutral-600 rounded-3xl backdrop-blur-lg bg-neutral-950/70 bg-mask"></div>
							<AnimateIn>
								<h2 className="text-center text-5xl md:text-7xl font-serif font-gradient">
									The Stage
								</h2>
							</AnimateIn>
							<div className="text-left py-4 text-neutral-400">
								<AnimateIn delay={0.2}>
									<h3 className="my-4">
										Our volume gives you the scale you actually need on set. This is the largest LED
										wall in the greater Minneapolis area, and with enough space to build entire sets
										in front of it without running out room.
									</h3>
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
			<Section border>
				<ContentWrapper variant="wide">
					<Content basis="50%" graphic="/images/stage/upadiv.png">
						<AnimateIn>
							<h2 className="text-center text-4xl">Panels</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									Premium Unilumin UpadIV panels deliver the brightness and clarity professionals
									demand. They hold up beautifully under studio lighting and stay crisp even in wide
									shots or close-ups.
								</h3>
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
			<Section border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/primex22.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Tracking</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									Optitrack is the gold-standard camera tracking system used on major stages
									worldwide. It follows your camera in real time so the virtual world stays
									perfectly locked to the lens.
								</h3>
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
			<Section border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/rtx6000.png">
						<AnimateIn>
							<h2 className="text-center text-4xl">Compute</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									Two custom-built media servers power complex Unreal Engine scenes without dropping
									frames, handling high-detail environments and real-time lighting changes with room
									to spare.
								</h3>
								<ul className="list-disc list-inside">
									<li className="">2 Custom Media Servers</li>
									<li className="">Dual RTX 6000 Ada GPUs</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/pixera.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Media</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									We run the latest Unreal Engine versions natively and keep Pixera on hand for
									quick 2D plates and video playback. This flexible combination lets us jump between
									photorealistic 3D worlds and fast-turnaround plates without ever slowing down
									production.
								</h3>
								<ul className="list-disc list-inside">
									<li className="">Unreal Engine 5.3, 5.5, 5.7</li>
									<li className="">Pixera (2D media, photo, video playback)</li>
								</ul>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/floorplan.png">
						<AnimateIn>
							<h2 className="text-center text-4xl">Floorplan</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									See the exact stage layout. The open design gives you full flexibility for camera
									movement, talent blocking, load-in, and set build, all while keeping everything
									you need within arm’s reach.
								</h3>
								<ul className="list-disc list-inside">
									<li>
										<a
											href="/floorplan.pdf"
											download="my-specific-filename.pdf"
											className="hover:text-neutral-200 ease-in-out duration-200"
										>
											[Download PDF]
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
			<Section border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/amenities.png" isReversed={true}>
						<AnimateIn>
							<h2 className="text-center text-4xl">Amenities</h2>
							<div className="text-left py-4 text-neutral-400">
								<h3 className="my-4">
									Everything you need to keep the day running smoothly is already here. With
									drive-in access, free parking, and high-speed WiFi, the studio is built to support
									long days and large crews without any added stress.
								</h3>
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
		</div>
	)
}
