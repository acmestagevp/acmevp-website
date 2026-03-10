"use client"

import React, { useState } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<nav className="">
			<ul className="">
				<div className="">
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
				<div className="">
					{navItems.map(({ label, href }) => (
						<Link className="" key={label} href={href}>
							{label}
						</Link>
					))}
				</div>
				<div className="">
					<button className="" onClick={toggleMenu} aria-label="Toggle Menu">
						☰
					</button>
				</div>
			</ul>
			{menuOpen && (
				<div className="">
					{navItems.map(({ label, href }) => (
						<Link key={label} href={href} className="" onClick={() => setMenuOpen(false)}>
							{label}
						</Link>
					))}
				</div>
			)}
		</nav>
	)
}

export default NavBar
