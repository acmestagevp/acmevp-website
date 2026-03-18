import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import Background from "@/components/decoration/Background"
import Image from "next/image"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	metadataBase: new URL("https://acmevp.com"),

	title: {
		default: "ACME Virtual Production",
		template: "%s – ACME Virtual Production",
	},

	description: "A full service virtual production studio located in Minneapolis, MN.",

	alternates: {
		canonical: "https://acmevp.com",
	},

	openGraph: {
		title: "ACME Virtual Production",
		description: "A full service virtual production studio located in Minneapolis, MN.",
		url: "https://acmevp.com",
		siteName: "ACME Virtual Production",
		type: "website",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, viewport-fit=cover, initial-scale=1, maximum-scale=1, user-scaleable=no"
				/>
			</head>
			<body
				id="body"
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
			>
				<div className="relative z-10 flex min-h-screen flex-col">
					{/* <Background /> */}
					<NavBar />
					<main className="">{children}</main>
					<Footer />
					<Image
						className="absolute inset-x-0 bottom-0 h-[50vh] pointer-events-none z-[-1] object-cover opacity-25 bg-mask-top"
						src="/background/bg-footer.jpg"
						alt="Footer Glow"
						width={1920}
						height={1080}
					/>
					<Image
						className="absolute inset-x-0 bottom-0 h-[50vh] pointer-events-none z-[-1] opacity-10 bg-mask-top"
						src="/background/bg-noise.png"
						alt="Footer Noise"
						width={1920}
						height={1080}
					/>
				</div>
			</body>
		</html>
	)
}
