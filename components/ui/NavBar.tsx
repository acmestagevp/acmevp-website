"use client"

import React, { useState, useEffect } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 120)
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<nav
			className={`fixed top-0 z-40 pointer-events-none transition-all duration-500
				${
					scrolled
						? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/60"
						: "bg-transparent border-b border-transparent"
				}`}
		>
			<ul className="flex w-screen justify-between items-center p-4">
				<div className="mx-4">
					<Link className="" href={"/"}>
						<Image
							src="/images/ACME-Logo-White.png"
							alt="Acme Virtual Production"
							width={128}
							height={50}
							className="opacity-70 hover:opacity-100 ease-in-out duration-200 pointer-events-auto cursor-pointer"
							onClick={() => setMenuOpen(false)}
						/>
					</Link>
				</div>
				<div className="mx-4 my-2 hidden pointer-events-auto lg:inline">
					{navItems.map(({ label, href }) => (
						<Link
							className={`mx-4 text-neutral-400 hover:text-neutral-300 ease-in-out duration-200 text-sm
								${label === "Contact" ? "tracking-wide border px-5 py-2 ml-1 rounded-xl shadow-neutral-50/20 bg-neutral-900 border-neutral-700 font-bold hover:shadow-xl duration-200 hover:text-neutral-950 hover:bg-neutral-300" : "tracking-widest"}`}
							key={label}
							href={href}
						>
							{label}
						</Link>
					))}
				</div>
				<div className="lg:hidden mx-4 my-2 z-50">
					<button
						className="pointer-events-auto cursor-pointer text-xl"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						☰
					</button>
				</div>
			</ul>
			{menuOpen && (
				<div className="absolute top-0 right-0 pt-16 px-4 text-right bg-neutral-950/70 lg:hidden pointer-events-none">
					{navItems.map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							className="block py-2 pr-4 pointer-events-auto cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							{label}
						</Link>
					))}
				</div>
			)}
		</nav>
	)
}

export default NavBar
