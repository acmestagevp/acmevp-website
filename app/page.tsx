import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import Header from "@/components/ui/Header"
import Section from "@/components/layout/Section"
import Content from "@/components/Content"
import { logos } from "@/constants/logos"
import Link from "next/link"
import Logo from "@/components/Logo"

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="full" imageOpacity={40} graphic="/images/hero-16-9.png">
				<ContentWrapper variant="narrow">
					<div className="relative z-10 text-center pt-172 md:pt-212 pb-48">
						<h1 className="text-3xl font-sans md:text-5xl font-semibold">
							ACME Virtual Production
						</h1>
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
			<Section variant="custom" className="p-12" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/home/stage-bts-1.png" isReversed={false}>
						<h2 className="text-2xl py-2 text-right">Minnesota’s Largest LED Volume</h2>
						<div className="text-neutral-400 ">
							<p className="py-2">
								ACME houses the largest LED volume in Minnesota — a 60 ft × 16.5 ft curved wall
								delivering 14 million pixels of immersion at 2.6 mm pixel pitch and 1,000 nits
								brightness.
							</p>
							<p className="py-2">
								Engineered with Optitrack motion capture, dual RTX 6000 media servers, and native
								Unreal Engine + Pixera support, it’s ready for anything from single-camera hero
								shots to full 270° worlds. 30-foot ceilings, drive-in access, and full studio
								amenities complete the package.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<ContentWrapper variant="default">
					<h2 className="text-center text-sm uppercase tracking-widest text-neutral-400">
						Trusted By
					</h2>
					<div className="flex flex-wrap justify-center">
						{logos.map((logo, index) => (
							<Logo key={index} graphic={logo.graphic} alt={logo.alt} />
						))}
					</div>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="py-16" border>
				<ContentWrapper variant="wide">
					<Content basis="" graphic="/images/home/stage-bts-2.jpg" isReversed={true}>
						<Link href="/services">
							<h2 className="text-left text-2xl">Services</h2>
						</Link>
						<div className="text-neutral-400 ">
							<p className="py-2">
								We offer complete end-to-end virtual production services across the greater
								Minneapolis area. From full production management and our flagship studio to premium
								gear packages, in-house VAD, and seamless post-production, everything you need is
								under one roof. Whether you’re booking the stage alone or looking for complete
								project support, our team and trusted network handle the details so you can focus on
								the creative.
							</p>
						</div>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<Testimonials />
			</Section>
		</div>
	)
}
