import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
import Image from "next/image"

const Contact = () => {
	return (
		<Section variant="custom" className="pt-28 md:py-12">
			<ContentWrapper variant="wide">
				<Image
					className="absolute inset-x-0 w-screen rotate-180 top-0 h-[50vh] pointer-events-none z-[-1] object-cover opacity-25 bg-mask-top"
					src="/background/bg-2.png"
					alt="Footer Glow"
					width={1920}
					height={1080}
				/>
				<Image
					className="absolute inset-x-0 w-screen rotate-180 top-0 h-[50vh] pointer-events-none z-[-1] opacity-5 bg-mask-top"
					src="/background/bg-noise.png"
					alt="Footer Noise"
					width={1920}
					height={1080}
				/>
				<div className="min-h-[70vh] w-full flex flex-col md:flex-row">
					<div className="flex flex-col justify-center md:items-end p-8 md:pl-16 md:w-2/5 text-center md:text-right text-balance">
						<AnimateIn>
							<h2 className="text-6xl pb-12! font-serif font-gradient">Let's build your world.</h2>
						</AnimateIn>
						<AnimateIn delay={0.2}>
							<p className="mb-8 text-neutral-400">
								Ready to step into the volume? Whether you're booking the 60ft wall or need a full
								VAD environment, our team is ready to build with you.
							</p>
						</AnimateIn>

						<div className="space-y-2">
							<AnimateIn delay={0.3}>
								<div>
									<h4 className="text-sm text-neutral-400">Email</h4>
									<p className="text-lg">
										<a href="mailto:info@acmevp.com">info@acmevp.com</a>
									</p>
								</div>
							</AnimateIn>
							<AnimateIn delay={0.3}>
								<div>
									<h4 className="text-sm text-neutral-400">Phone</h4>
									<p className="text-lg">
										<a href="tel:6123850488">(612) 385-0488</a>
									</p>
								</div>
							</AnimateIn>
						</div>
					</div>

					{/* Right Side: Form (60% width on desktop) */}
					<div className="flex flex-col justify-center p-8 md:p-12 md:w-3/5">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col">
									<label className="mb-2 text-sm font-medium ">Name</label>
									<input
										type="text"
										className="border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
									/>
								</div>
								<div className="flex flex-col">
									<label className="mb-2 text-sm ">Company</label>
									<input
										type="text"
										className="border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label className="mb-2 text-sm ">Project Type</label>
								<select
									className="bg-neutral-950 text-neutral-200 border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 
									transition-colors appearance-none"
								>
									<option>Virtual Production / LED Volume</option>
									<option>VAD / Unreal Engine Build</option>
									<option>Post-Production</option>
									<option>Education / Workshop</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label className="mb-2 text-sm ">Message</label>
								<textarea
									rows={4}
									className="border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
								/>
							</div>

							<button className="w-full md:w-max px-12 py-4 border border-neutral-400 hover:bg-neutral-300 hover:border-neutral-300 text-neutral-300 hover:text-neutral-950 uppercase tracking-widest transition-all rounded-lg shadow-neutral-50/20 hover:shadow-xl duration-200">
								Send Inquiry
							</button>
						</form>
					</div>
				</div>
			</ContentWrapper>
		</Section>
	)
}

export default Contact
