import React from "react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
	title: string
	subtitle: string
	graphic: string
}

const Hero: React.FC<HeaderProps> = ({ title, subtitle, graphic }) => {
	return (
		<div className="flex min-h-screen">
			<div className="inset-0 overflow-hidden justify-center">
				<Image
					className="h-full z-[-10] bg-mask object-cover opacity-25"
					width={1920}
					height={1080}
					src="/images/hero-16-9.png"
					alt="Acme Virtual Production"
					priority
				/>
				<div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50 px-2 w-6/7 lg:w-3xl text-center">
					<h1 className="text-4xl py-2 text-balance z-10">{title}</h1>
					<p className=" py-2 text-balance z-10">{subtitle}</p>
					<div className="flex p-4 min-w-max justify-center">
						<div className="flex flex-col lg:flex-row">
							<button className="border rounded-lg px-8 py-2 bg-neutral-950 m-2 w-[250px]">
								<Link
									key="Contact"
									href="/contact"
									className="pointer-events-auto cursor-pointer"
								>
									Schedule a Tour
								</Link>
							</button>
							<button className="border rounded-lg px-8 py-2 bg-neutral-950 m-2 w-[250px]">
								<Link
									key="Contact"
									href="/contact"
									className="pointer-events-auto cursor-pointer"
								>
									Contact
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
