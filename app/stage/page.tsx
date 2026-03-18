import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			<Header graphic="/images/hero-16-9.png">
				<ContentWrapper variant="wide">
					<h2 className="text-center text-3xl">The Stage</h2>
					<div className="text-center py-4 text-neutral-400">
						<h3 className="text-xl p-4">Dimensions</h3>
						<ul className="list-disc list-inside">
							<li className="">Width: 60ft</li>
							<li className="">Height: 16.5ft</li>
							<li className="">2.5° Curve</li>
						</ul>
						<h3 className="text-xl">Resolution</h3>
						<ul className="list-disc list-inside">
							<li className="">38 Tiles Wide</li>
							<li className="">10 Tiles High</li>
							<li className="">7296px x 1920px</li>
							<li className="">14,008,320 Total Pixels</li>
						</ul>
					</div>
				</ContentWrapper>
			</Header>
			<Section>
				<ContentWrapper variant="wide">
					<Content imageFlex="1" graphic="/images/content-1-1.png">
						<h2 className="text-center text-3xl">Panels</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">Unilumin UpadIV 2.6</h3>
							<ul className="list-disc list-inside">
								<li className="">2.5mm Pixel Pitch</li>
								<li className="">1000 nits brightness</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content imageFlex="1" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-center text-3xl">Tracking</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">Optitrack</h3>
							<ul className="list-disc list-inside">
								<li className="">12 PrimeX22 Capture Cameras</li>
								<li className="">Two Simultaneous Frustums</li>
								<li className="">1600sq ft Tracking Area</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content imageFlex="1" graphic="/images/content-1-1.png">
						<h2 className="text-center text-3xl">Compute</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">Render Nodes</h3>
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
					<Content imageFlex="1" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-center text-3xl">Media</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">Unreal Engine</h3>
							<ul className="list-disc list-inside">
								<li className="">5.3</li>
								<li className="">5.5</li>
								<li className="">5.7</li>
							</ul>
							<h3 className="text-xl p-4">Pixera</h3>
							<ul className="list-disc list-inside">
								<li className="">2D Media</li>
								<li className="">Photo</li>
								<li className="">Video Playback</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content imageFlex="1" graphic="/images/content-1-1.png">
						<h2 className="text-center text-3xl">Floorplan</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">Layout</h3>
							<ul className="list-disc list-inside">
								<a href="/contact" className="">
									Download PDF
								</a>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content imageFlex="1" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-center text-3xl">Amenities</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-xl p-4">ACME East</h3>
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
