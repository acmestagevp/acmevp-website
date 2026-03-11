"use client"

import React, { useState } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<nav className="flex fixed h-20 z-10 bg-neutral-950">
			<ul className="flex w-screen justify-between items-center p-4">
				<div className="mx-4 my-2">
					<Link className="" href={"/"}>
						<Image
							src="/globe.svg"
							alt="Acme Virtual Production"
							width={40}
							height={10}
							className=""
							onClick={() => setMenuOpen(false)}
						/>
					</Link>
				</div>
				<div className="mx-4 my-2 hidden pointer-events-auto lg:inline">
					{navItems.map(({ label, href }) => (
						<Link className="mx-6" key={label} href={href}>
							{label}
						</Link>
					))}
				</div>
				<div className="lg:hidden px-4 py-2">
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
				<div className="absolute top-0 right-0 pt-16 pr-5 text-right lg:hidden pointer-events-none">
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
