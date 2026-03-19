import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			<Header graphic="/images/stage/wireframe-wall.png" imageOpacity={80}>
				<ContentWrapper variant="wide" className="pt-64 pb-24 place-items-end flex-1">
					<div className="w-xl pt-28 pr-16">
						<h2 className="text-center text-3xl">Our Stage</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								Our main volume gives you the scale you actually need on set.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">Width: 60ft</li>
								<li className="">Height: 16.5ft</li>
								<li className="">2.5° Curve</li>
							</ul>
							<h3 className="text-xl">
								More pixels mean sharper, more convincing imagery even when the camera gets close.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">38 Tiles Wide × 10 Tiles High</li>
								<li className="">7296px x 1920px</li>
								<li className="">14,008,320 Total Pixels</li>
							</ul>
						</div>
					</div>
				</ContentWrapper>
			</Header>
			<Section>
				<ContentWrapper variant="wide">
					<Content basis="50%" graphic="/images/stage/upadiv.png">
						<h2 className="text-center text-3xl">Panels</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								Premium Unilumin UpadIV panels deliver the brightness and clarity professionals
								demand.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">2.6mm Pixel Pitch</li>
								<li className="">1000 nits brightness</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/primex22.png" isReversed={true}>
						<h2 className="text-center text-3xl">Tracking</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								Optitrack is the gold-standard camera tracking system used on major stages
								worldwide. It follows your camera in real time so the virtual world stays perfectly
								locked to the lens.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">12 PrimeX22 Capture Cameras</li>
								<li className="">Two Simultaneous Frustums</li>
								<li className="">1600 sq ft Tracking Area</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/rtx6000.png">
						<h2 className="text-center text-3xl">Compute</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								Two custom-built media servers with dual RTX 6000 Ada GPUs power complex Unreal
								scenes without dropping frames.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">2 Custom Media Servers</li>
								<li className="">Dual RTX 6000 Ada GPUs</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/pixera.png" isReversed={true}>
						<h2 className="text-center text-3xl">Media</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								We run the latest Unreal Engine versions natively and keep Pixera on hand for quick
								2D plates and video playback.
							</h3>
							<ul className="list-disc list-inside">
								<li className="">Unreal Engine 5.3, 5.5, 5.7</li>
								<li className="">Pixera (2D media, photo, video playback)</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/floorplan.png">
						<h2 className="text-center text-3xl">Floorplan</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">See exactly how the stage and amenities layout.</h3>
							<ul className="list-disc list-inside">
								<a
									href="/floorplan.pdf"
									download="my-specific-filename.pdf"
									className="hover:text-neutral-200 ease-in-out duration-200"
								>
									[Download PDF]
								</a>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/stage/amenities.png" isReversed={true}>
						<h2 className="text-center text-3xl">Amenities</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">
								Everything you need to keep the day running smoothly is already here.
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
					</Content>
				</ContentWrapper>
			</Section>
		</div>
	)
}
