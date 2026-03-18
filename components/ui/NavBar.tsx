"use client"

import React, { useState, useEffect } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 24)
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				scrolled
					? "bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.06]"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
						<Image
							src="/images/ACME-Logo-White.png"
							alt="Acme Virtual Production"
							width={108}
							height={42}
							className="opacity-80 hover:opacity-100 transition-opacity duration-200"
						/>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden lg:flex items-center gap-1">
						{navItems.map(({ label, href }) => {
							const isActive = pathname === href
							return (
								<Link
									key={label}
									href={href}
									className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
										isActive ? "text-white" : "text-neutral-400 hover:text-neutral-100"
									}`}
								>
									{label}
								</Link>
							)
						})}
					</div>

					{/* Mobile Hamburger */}
					<button
						className="lg:hidden flex flex-col gap-1.5 p-2 text-neutral-400 hover:text-white transition-colors"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle Menu"
					>
						<span
							className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
						/>
						<span
							className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
						/>
						<span
							className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="lg:hidden border-t border-white/[0.06] bg-[#080808]/95 backdrop-blur-md">
					<div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
						{navItems.map(({ label, href }) => {
							const isActive = pathname === href
							return (
								<Link
									key={label}
									href={href}
									onClick={() => setMenuOpen(false)}
									className={`px-4 py-3 text-sm rounded-md transition-colors duration-200 ${
										isActive
											? "text-white bg-white/[0.06]"
											: "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
									}`}
								>
									{label}
								</Link>
							)
						})}
					</div>
				</div>
			)}
		</nav>
	)
}

export default NavBar
