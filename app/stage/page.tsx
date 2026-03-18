import Header from "@/components/ui/Header"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Content from "@/components/Content"
import Section from "@/components/layout/Section"

export default function Stage() {
	return (
		<div className="flex flex-col items-center">
			<Header graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow" className="pt-64 pb-24">
					<div className="premium-panel rounded-[2rem] px-8 py-12 text-center md:px-12">
						<p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
							Technical overview
						</p>
						<h2 className="mt-4 text-center text-3xl text-white md:text-4xl">The Stage</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Dimensions</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
								<li className="">Width: 60ft</li>
								<li className="">Height: 16.5ft</li>
								<li className="">2.5° Curve</li>
							</ul>
							<h3 className="mt-6 text-xl text-neutral-100">Resolution</h3>
							<ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
								<li className="">38 Tiles Wide</li>
								<li className="">10 Tiles High</li>
								<li className="">7296px x 1920px</li>
								<li className="">14,008,320 Total Pixels</li>
							</ul>
						</div>
					</div>
				</ContentWrapper>
			</Header>
			<Section>
				<ContentWrapper variant="wide">
					<Content basis="50%" graphic="/images/content-1-1.png">
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Panels</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Unilumin UpadIV 2.6</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
								<li className="">2.5mm Pixel Pitch</li>
								<li className="">1000 nits brightness</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={true}>
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Tracking</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Optitrack</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
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
					<Content graphic="/images/content-1-1.png">
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Compute</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Render Nodes</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
								<li className="">2 Custom Media Servers</li>
								<li className="">Dual RTX 6000 Ada GPUs</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={true}>
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Media</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Unreal Engine</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
								<li className="">5.3</li>
								<li className="">5.5</li>
								<li className="">5.7</li>
							</ul>
							<h3 className="mt-6 p-4 text-xl text-neutral-100">Pixera</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
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
					<Content graphic="/images/content-1-1.png">
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Floorplan</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">Layout</h3>
							<div className="pt-2">
								<a
									href="/contact"
									className="inline-flex rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.24em] text-neutral-300 transition duration-300 hover:border-white/30 hover:text-white"
								>
									Download PDF
								</a>
							</div>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={true}>
						<p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">System</p>
						<h2 className="text-center text-3xl text-white md:text-4xl">Amenities</h2>
						<div className="py-4 text-center text-sm leading-7 text-neutral-300 md:text-base">
							<h3 className="p-4 text-xl text-neutral-100">ACME East</h3>
							<ul className="space-y-2 text-xs uppercase tracking-[0.24em] text-neutral-400">
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
