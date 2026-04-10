"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: { success: boolean }, formData: FormData) {
	const name = formData.get("name") as string
	const email = formData.get("email") as string
	const subject = formData.get("subject") as string
	const message = formData.get("message") as string

	try {
		await resend.emails.send({
			from: "ACME Virtual Production <no-reply@acmevp.com>",
			to: "info@acmevp.com",
			cc: ["acmestage@icloud.com", "john@sehnsuchtentertainment.com"],
			replyTo: `${email}`,
			subject: `${subject}`,
			html: `
			<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
			<p><strong>Message:</strong><br/>${message}</p>
		`,
		})
		console.log("Email sent")
		return { success: true }
	} catch (err) {
		console.error("Email failed:", err)
		return { success: false }
	}
}
