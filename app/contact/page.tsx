import type { Metadata } from "next"
import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with ACME Virtual Production to book the stage or discuss your project.",
}

const Contact = () => {
	return (
		<Section variant="custom" className="min-h-screen flex items-center pt-16">
			<ContentWrapper variant="wide" className="w-full py-16 md:py-24">
				<div className="flex flex-col md:flex-row gap-16 md:gap-24">
					{/* ── Left: Info ───────────────────────────────────────── */}
					<div className="flex flex-col justify-center gap-8 md:w-2/5">
						<div className="flex flex-col gap-3">
							<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Get in touch</p>
							<h1 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-snug">
								Let's build your world.
							</h1>
							<p className="text-neutral-400 text-sm leading-relaxed">
								Ready to step into the volume? Whether you're booking the 60 ft wall or need a full
								VAD environment build, our team is ready to scale with you.
							</p>
						</div>

						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-1">
								<p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Email</p>
								<a
									href="mailto:info@acmevp.com"
									className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
								>
									info@acmevp.com
								</a>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Phone</p>
								<a
									href="tel:6123850488"
									className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
								>
									(612) 385-0488
								</a>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Location</p>
								<a
									href="https://maps.app.goo.gl/bFTrkW2d8GBaKfHT6"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
								>
									2635 S 28th Ave.
									<br />
									Minneapolis, MN 55406
								</a>
							</div>
						</div>
					</div>

					{/* ── Right: Form ──────────────────────────────────────── */}
					<div className="flex flex-col justify-center md:w-3/5">
						<div className="border border-white/[0.07] rounded-2xl bg-white/[0.02] p-8 md:p-10">
							<form className="flex flex-col gap-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="flex flex-col gap-2">
										<label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
											Name
										</label>
										<input
											type="text"
											className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.06] transition-all duration-200"
											placeholder="Your name"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
											Company
										</label>
										<input
											type="text"
											className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.06] transition-all duration-200"
											placeholder="Your company"
										/>
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
										Project Type
									</label>
									<select className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.06] transition-all duration-200 appearance-none cursor-pointer">
										<option value="" className="bg-neutral-900">
											Select a project type
										</option>
										<option value="vp" className="bg-neutral-900">
											Virtual Production / LED Volume
										</option>
										<option value="vad" className="bg-neutral-900">
											VAD / Unreal Engine Build
										</option>
										<option value="post" className="bg-neutral-900">
											Post-Production
										</option>
										<option value="edu" className="bg-neutral-900">
											Education / Workshop
										</option>
									</select>
								</div>

								<div className="flex flex-col gap-2">
									<label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
										Message
									</label>
									<textarea
										rows={5}
										className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.06] transition-all duration-200 resize-none"
										placeholder="Tell us about your project..."
									/>
								</div>

								<button
									type="submit"
									className="w-full md:w-auto md:self-start px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors duration-200"
								>
									Send Inquiry
								</button>
							</form>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</Section>
	)
}

export default Contact
