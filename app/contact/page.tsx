import Footer from "@/components/Footer"

export default function Contact() {
	return (
		<div>
			{/* Contact Info Section */}
			<div>
				<h2>Contact Us</h2>
				<p>Reach out to us for any inquiries.</p>
				<div>
					<p>Email: acmestagevp@gmail.com</p>
					<p>Phone: (123) 456-7890</p>
					<p>Address: 123 Main St, City, State, ZIP</p>
				</div>
			</div>

			{/* Contact Form Section */}
			<div>
				<h2>Send a Message</h2>
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
