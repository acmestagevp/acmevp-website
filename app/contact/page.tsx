"use client"

import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import AnimateIn from "@/components/decoration/AnimateIn"
	import { sendEmail } from "@/utils/sendEmail"
	import { useActionState } from "react"
	import { useFormStatus } from "react-dom"

function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full md:w-max px-12 py-4 control-surface hover:bg-neutral-300 hover:border-[var(--border-strong)] text-neutral-300 hover:text-neutral-950 uppercase tracking-widest"
		>
			{pending ? "Sending..." : "Send Inquiry"}
		</button>
	)
}

const Contact = () => {
	const [state, formAction] = useActionState(sendEmail, { success: false })

	return (
		<Section variant="custom" className="pt-28 md:py-20">
			<ContentWrapper variant="wide">
				<div className="grid min-h-[70vh] w-full items-center gap-12 py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16 md:py-16">
					<div className="text-center md:text-right">
						<AnimateIn>
						<h1 className="text-5xl font-serif font-gradient md:text-6xl">Let&apos;s build your world.</h1>
						</AnimateIn>
						<AnimateIn delay={0.2}>
							<p className="mb-8 text-neutral-400">
								Ready to step into the volume? Whether you&apos;re booking the 60ft wall or need a full
								VAD environment, our team is ready to build with you.
							</p>
						</AnimateIn>

						<div className="space-y-2">
							<AnimateIn delay={0.3}>
								<div>
									<h2 className="text-sm text-neutral-400">Email</h2>
									<p className="text-lg">
										<a href="mailto:info@acmevp.com">info@acmevp.com</a>
									</p>
								</div>
							</AnimateIn>
							<AnimateIn delay={0.3}>
								<div>
									<h2 className="text-sm text-neutral-400">Phone</h2>
									<p className="text-lg">
										<a href="tel:6123850488">(612) 385-0488</a>
									</p>
								</div>
							</AnimateIn>
						</div>
					</div>

					{/* Right Side: Form (60% width on desktop) */}
					<div className="w-full">
						{state?.success ? (
							<div className="panel-surface p-6 text-center md:p-10" role="status" aria-live="polite">
								<h2 className="text-xl font-serif mb-2">Message Received</h2>
								<p className="text-neutral-400 text-sm">
									We’ll be in touch shortly to start building your world.
								</p>
							</div>
						) : (
							<form action={formAction} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="flex flex-col">
											<label htmlFor="contact-name" className="mb-2 text-sm font-medium ">Name</label>
										<input
											required
											type="text"
												name="name"
												id="contact-name"
											className="control-surface p-3 focus:border-[var(--border-strong)]"
										/>
									</div>
									<div className="flex flex-col">
											<label htmlFor="contact-email" className="mb-2 text-sm ">Email</label>
										<input
											required
											type="email"
												name="email"
												id="contact-email"
											className="control-surface p-3 focus:border-[var(--border-strong)]"
										/>
									</div>
								</div>

								<div className="flex flex-col">
									<label htmlFor="contact-subject" className="mb-2 text-sm ">Subject</label>
									{/* <select
									name="projectType"
									className="bg-neutral-950 text-neutral-200 border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 
									transition-colors appearance-none"
								>
									<option>Virtual Production / LED Volume</option>
									<option>VAD / Unreal Engine Build</option>
									<option>Post-Production</option>
									<option>Education / Workshop</option>
								</select> */}
									<input
										required
										type="text"
										name="subject"
										id="contact-subject"
										className="control-surface p-3 focus:border-[var(--border-strong)]"
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="contact-message" className="mb-2 text-sm ">Message</label>
									<textarea
										required
										rows={4}
									name="message"
									id="contact-message"
									className="control-surface p-3 focus:border-[var(--border-strong)]"
									/>
								</div>

								<SubmitButton />
							</form>
						)}
					</div>
				</div>
			</ContentWrapper>
		</Section>
	)
}

export default Contact
