import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import Header from "@/components/ui/Header"
import Section from "@/components/layout/Section"
import Content from "@/components/Content"
import { logos } from "@/constants/logos"
import Image from "next/image"
import Logo from "@/components/Logo"

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="full" graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="relative z-10 text-center pt-112">
						<h1 className="text-3xl md:text-4xl tracking-tight">ACME Virtual Production</h1>
						<p className="mt-6 text-neutral-400">
							ACME Virtual Production opens the door to a new world of possibilities. Whether for
							high-end commercials, narrative films, or photo-realistic virtual environments, you
							can transport your production to the bustling streets of Tokyo, the serene beaches of
							Hawaii, or the rugged peaks of the Rockies — all from the heart of Minnesota.
						</p>
						{/* <Link href="/contact">
							<button className="mt-6 px-4 py-2 text-neutral-500 uppercase border border-neutral-600 rounded bg-neutral-800 hover:bg-neutral-700 ease-in-out duration-300">
								Schedule a Tour
							</button>
						</Link> */}
					</div>
				</ContentWrapper>
			</Header>
			<Section variant="custom" className="pb-16">
				<ContentWrapper variant="wide">
					<Content graphic="/images/content-1-1.png" isReversed={false}>
						<h2 className="text-3xl py-2 text-center">Minnesota’s Largest LED Volume</h2>
						<div className="text-neutral-400 text-center">
							<p className="py-2">
								ACME Virtual Production is home to the largest LED wall in Minnesota — a commanding
								60-foot-wide by 16.5-foot-tall curved volume that delivers over 14 million pixels of
								breathtaking, photo-realistic immersion.
							</p>
							<p className="py-2">
								Built with premium Unilumin UpadIV 2.6 mm panels (1000 nits brightness), full
								Optitrack motion capture across a 1,600 sq ft tracking area, dual custom media
								servers with RTX 6000 Ada GPUs, and native support for Unreal Engine 5.3–5.7 plus
								Pixera playback, this stage is engineered for high-end commercials, narrative
								projects, and everything in between.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper variant="narrow">
					<h2 className="text-center text-sm uppercase tracking-widest text-neutral-400">
						Delivering End-to-end virtual production for
					</h2>
					<div className="flex flex-wrap justify-center">
						{logos.map((logo, index) => (
							<Logo key={index} graphic={logo.graphic} alt={logo.alt} />
						))}
					</div>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="py-16">
				<ContentWrapper variant="wide">
					<Content basis="" graphic="/images/content-1-1.png" isReversed={true}>
						<h2 className="text-center text-3xl">Services</h2>
						<div className="text-center py-4 text-neutral-400">
							<h3 className="text-lg">
								All-in-one production services in the greater Minneapolis area.
							</h3>
							<br />
							<ul className="list-disc list-inside">
								<li className="">Production</li>
								<li className="">Studio</li>
								<li className="">Gear</li>
								<li className="">VAD</li>
								{/* <li className="">Education</li> */}
								<li className="">Post</li>
							</ul>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Testimonials />
		</div>
	)
}
