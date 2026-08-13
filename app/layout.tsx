import type { Metadata } from "next"
import { Gilda_Display, Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import Background from "@/components/decoration/Background"

const gildaDisplay = Gilda_Display({
	variable: "--font-serif",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
})

const inter = Inter({
	weight: "variable",
	variable: "--font-inter-sans",
	subsets: ["latin"],
	display: "swap",
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
	twitter: {
		card: "summary_large_image",
		title: "ACME Virtual Production",
		description: "A full service virtual production studio located in Minneapolis, MN.",
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
					content="width=device-width, viewport-fit=cover, initial-scale=1"
				/>
			</head>
			<body
				id="body"
				className={`${gildaDisplay.variable} ${inter.variable} antialiased`}
			>
				<div className="site-shell relative isolate flex min-h-screen min-w-0 flex-col">
					<Background />
					<NavBar />
					<main className="relative z-10 flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
