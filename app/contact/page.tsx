import ContentWrapper from "@/components/layout/ContentWrapper"
import Section from "@/components/layout/Section"
import { Content } from "next/font/google"
import React from "react"

const Contact = () => {
	return (
		<Section>
			<ContentWrapper variant="wide">
				<div className="min-h-[80vh] w-full text-white flex flex-col md:flex-row">
					<div className="flex flex-col justify-center p-8 md:p-16 md:w-2/5 text-right">
						<h2 className="text-3xl mb-6">Let's build your world.</h2>
						<p className="mb-8">
							Ready to step into the volume? Whether you're booking the 60ft wall or need a full VAD
							environment build, our team is ready to scale with you.
						</p>

						<div className="space-y-6">
							<div>
								<h4 className="text-sm">Location</h4>
								<p className="text-lg">Minneapolis, MN</p>
							</div>
							<div>
								<h4 className="text-sm">Email</h4>
								<p className="text-lg">info@acmevp.com</p>
							</div>
						</div>
					</div>

					{/* Right Side: Form (60% width on desktop) */}
					<div className="flex flex-col justify-center p-8 md:p-24 md:w-3/5">
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
								<select className="border border-neutral-700 p-3 rounded focus:outline-none focus:border-blue-500 transition-colors">
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

							<button className="w-full md:w-max px-12 py-4 bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-widest transition-all rounded">
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
