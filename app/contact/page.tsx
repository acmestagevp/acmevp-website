import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import React from "react"

const Contact = () => {
	return (
		<Section variant="custom" className="pt-28 md:py-12">
			<ContentWrapper variant="wide">
				<div className="premium-panel min-h-[70vh] w-full overflow-hidden rounded-[2rem] border border-white/10 md:flex md:flex-row">
					<div className="flex flex-col justify-center border-b border-white/10 p-8 text-center text-balance md:w-2/5 md:items-end md:border-b-0 md:border-r md:pl-16 md:text-right">
						<p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Get in touch</p>
						<h2 className="mb-6 mt-4 text-3xl text-white md:text-4xl">
							Let&apos;s build your world.
						</h2>
						<p className="mb-8 text-sm leading-7 text-neutral-300 md:text-base">
							Ready to step into the volume? Whether you&apos;re booking the 60ft wall or need a
							full VAD environment build, our team is ready to scale with you.
						</p>

						<div className="space-y-2">
							<div>
								<h4 className="text-xs uppercase tracking-[0.24em] text-neutral-500">Email</h4>
								<p className="mt-2 text-lg text-neutral-100 transition duration-300 hover:text-white">
									<a href="mailto:info@acmevp.com">info@acmevp.com</a>
								</p>
							</div>
							<div>
								<h4 className="text-xs uppercase tracking-[0.24em] text-neutral-500">Phone</h4>
								<p className="mt-2 text-lg text-neutral-100 transition duration-300 hover:text-white">
									<a href="tel:6123850488">(612) 385-0488</a>
								</p>
							</div>
						</div>
					</div>

					{/* Right Side: Form (60% width on desktop) */}
					<div className="flex flex-col justify-center p-8 md:w-3/5 md:p-12">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col">
									<label className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
										Name
									</label>
									<input
										type="text"
										className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-white/30 focus:bg-white/[0.05]"
									/>
								</div>
								<div className="flex flex-col">
									<label className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
										Company
									</label>
									<input
										type="text"
										className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-white/30 focus:bg-white/[0.05]"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
									Project Type
								</label>
								<select className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-neutral-100 outline-none transition duration-300 focus:border-white/30 focus:bg-white/[0.05]">
									<option>Virtual Production / LED Volume</option>
									<option>VAD / Unreal Engine Build</option>
									<option>Post-Production</option>
									<option>Education / Workshop</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
									Message
								</label>
								<textarea
									rows={4}
									className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-white/30 focus:bg-white/[0.05]"
								/>
							</div>

							<button className="w-full rounded-full border border-white/15 px-12 py-4 text-xs uppercase tracking-[0.28em] text-neutral-200 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white md:w-max">
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
