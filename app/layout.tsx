import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

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
			<body id="body" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<main>
					<NavBar />
					{children}
				</main>
			</body>
		</html>
	)
}
