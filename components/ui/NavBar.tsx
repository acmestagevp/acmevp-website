"use client"

import React, { useState } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<nav className="fixed top-0 z-40 pointer-events-none">
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
							className="mx-6 tracking-wide text-neutral-400 hover:text-neutral-200 ease-in-out duration-200"
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
				<div className="absolute top-0 right-4 pt-16 px-4 text-right bg-neutral-950/70 lg:hidden pointer-events-none">
					{navItems.map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							className="block py-2 pointer-events-auto cursor-pointer"
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
