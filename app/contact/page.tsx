import Footer from "@/components/Footer"

export default function Contact() {
	return (
		<div className="flex flex-col items-center h-[95vh] place-content-center">
			{/* Contact Info Section */}
			<div>
				<h2 className="text-2xl m-4">Contact Us</h2>
				<p>Reach out to us for any inquiries.</p>
				<div>
					<p>acmestagevp@gmail.com</p>
					<p>(612) 385-0488</p>
					<br />
					<p>2635 S 28th Ave.</p>
					<p>Minneapolis, MN 55406</p>
				</div>
			</div>

			{/* Contact Form Section */}
			<div>
				<h2 className="text-2xl m-4">Send a Message</h2>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message"></textarea>
					</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}
