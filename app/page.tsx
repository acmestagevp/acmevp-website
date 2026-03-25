import ContentWrapper from "@/components/layout/ContentWrapper"
import Testimonials from "@/components/Testimonials"
import Header from "@/components/ui/Header"
import Section from "@/components/layout/Section"
import Content from "@/components/Content"
import { logos } from "@/constants/logos"
import Link from "next/link"
import Logo from "@/components/Logo"
import AnimateIn from "@/components/decoration/AnimateIn"

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Header variant="full" imageOpacity={90} graphic="/images/home/hero-main.png">
				<ContentWrapper variant="default">
					<div className="relative z-10 pt-96 md:pt-112 text-center">
						<AnimateIn>
							<h1 className="text-3xl md:text-5xl tracking-wider text-center font-serif text-balance font-gradient">
								<span className="text-9xl">ACME</span> <br />
								<span>Virtual Production</span>
							</h1>
						</AnimateIn>
						<AnimateIn delay={0.15}>
							<p className="mt-6 text-neutral-400 text-balance">
								From high-end commercials to photo-realistic virtual environments, ACME Virutal
								Production can take you anywhere you can imagine, all from the heart of Minnesota.
							</p>
						</AnimateIn>
					</div>
				</ContentWrapper>
			</Header>
			<Section variant="custom" className="p-12" border>
				<ContentWrapper variant="wide">
					<Content graphic="/images/home/stage-bts-1.png" isReversed={false}>
						<AnimateIn>
							<Link href="/stage">
								<h2 className="text-2xl py-2 text-right">Stage</h2>
							</Link>
							<div className="text-neutral-400 ">
								<p className="py-2">
									ACME houses the largest LED volume in Minnesota. A 60 ft × 16.5 ft curved wall
									delivering 14 million pixels of immersion at 2.6 mm pixel pitch and 1,000 nits
									brightness.
								</p>
								<p className="py-2">
									Engineered with native Unreal Engine + Pixera support, it’s ready for anything
									from single-camera plate shots to full virtual environments.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<ContentWrapper variant="wide" className="">
					<div className="lg:min-w-7xl py-18">
						<AnimateIn>
							<h2 className="text-center text-sm uppercase tracking-widest text-neutral-500">
								Trusted By
							</h2>
						</AnimateIn>
						<AnimateIn delay={0.25}>
							<div className="flex flex-wrap justify-center">
								{logos.map((logo, index) => (
									<Logo key={index} graphic={logo.graphic} alt={logo.alt} />
								))}
							</div>
						</AnimateIn>
					</div>
				</ContentWrapper>
			</Section>
			<Section variant="custom" className="py-16" border>
				<ContentWrapper variant="wide">
					<Content basis="" graphic="/images/home/stage-bts-2.jpg" isReversed={true}>
						<AnimateIn>
							<Link href="/services">
								<h2 className="text-left py-2 text-2xl">Services</h2>
							</Link>
							<div className="text-neutral-400 ">
								<p className="py-2">
									We offer complete end-to-end virtual production services across the greater
									Minneapolis area. From full production management and our flagship studio to
									premium gear packages, in-house VAD, and seamless post-production, everything you
									need is under one roof.
								</p>
								<p className="py-2">
									Whether you’re booking the stage alone or looking for complete project support,
									our team and trusted network handle the details so you can focus on the creative.
								</p>
							</div>
						</AnimateIn>
					</Content>
				</ContentWrapper>
			</Section>
			<Section border>
				<ContentWrapper variant="full" className="bg-sides">
					<AnimateIn>
						<Testimonials />
					</AnimateIn>
				</ContentWrapper>
			</Section>
		</div>
	)
}
