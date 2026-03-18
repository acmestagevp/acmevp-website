"use client"

import React, { useState } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<nav className="fixed top-0 z-40 w-full pointer-events-none">
			<ul className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<div className="mx-4">
					<Link className="" href={"/"}>
						<Image
							src="/images/ACME-Logo-White.png"
							alt="Acme Virtual Production"
							width={128}
							height={50}
							className="pointer-events-auto cursor-pointer opacity-80 transition duration-300 hover:opacity-100"
							onClick={() => setMenuOpen(false)}
						/>
					</Link>
				</div>
				<div className="premium-panel mx-4 my-2 hidden rounded-full px-3 py-2 pointer-events-auto lg:inline">
					{navItems.map(({ label, href }) => (
						<Link
							className="mx-4 inline-flex items-center text-xs uppercase tracking-[0.24em] text-neutral-400 transition duration-300 hover:text-white"
							key={label}
							href={href}
						>
							{label}
						</Link>
					))}
				</div>
				<div className="premium-panel lg:hidden mx-4 my-2 rounded-full z-50">
					<button
						className="pointer-events-auto cursor-pointer px-4 py-2 text-lg text-neutral-200"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						☰
					</button>
				</div>
			</ul>
			{menuOpen && (
				<div className="premium-panel absolute top-4 right-4 min-w-48 rounded-3xl px-5 pb-4 pt-16 text-right lg:hidden pointer-events-none">
					{navItems.map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							className="block py-2 text-xs uppercase tracking-[0.24em] text-neutral-300 pointer-events-auto cursor-pointer transition duration-300 hover:text-white"
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
