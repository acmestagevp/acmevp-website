"use client"

import React, { useState, useEffect, useRef } from "react"
import { navItems } from "@/constants/nav"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const pathname = usePathname()
	const navRef = useRef<HTMLElement>(null)
	const menuButtonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 120)
		}
		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && menuOpen) {
				setMenuOpen(false)
				menuButtonRef.current?.focus()
			}
		}
		const handlePointerDown = (event: PointerEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false)
		}
		const handleResize = () => {
			if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false)
		}
		document.addEventListener("keydown", handleKeyDown)
		document.addEventListener("pointerdown", handlePointerDown)
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			document.removeEventListener("keydown", handleKeyDown)
			document.removeEventListener("pointerdown", handlePointerDown)
			window.removeEventListener("resize", handleResize)
		}
	}, [menuOpen])

	const closeMenu = () => setMenuOpen(false)
	const toggleMenu = () => setMenuOpen((prev) => !prev)

	// Project detail routes (/projects/{slug}) render without nav chrome;
	// the /projects listing and all other routes keep the nav unchanged.
	const isProjectDetail = pathname.startsWith("/projects/") && pathname.length > "/projects/".length
	if (isProjectDetail) return null

	return (
		<nav
			ref={navRef}
			aria-label="Primary navigation"
			className={`shell-nav fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300
				${
					scrolled
						? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/60"
						: "bg-transparent"
				}`}
		>
			<div className="layout-wrapper layout-wrapper--full flex items-center justify-between py-3">
				<Link href="/" onClick={() => setMenuOpen(false)} aria-label="ACME Virtual Production home">
					<Image
						src="/images/ACME-Logo-White.png"
						alt="Acme Virtual Production"
						width={128}
						height={50}
						priority
						className="opacity-80 transition-opacity duration-200 hover:opacity-100"
					/>
				</Link>
				<ul className="hidden items-center gap-2 lg:flex">
					{navItems.map(({ label, href }) => (
						<li key={label}>
							<Link
								className={
									label === "Contact"
										? "shell-cta ml-2 text-sm"
										: "shell-nav__link px-3 py-2 text-sm tracking-widest text-secondary hover:text-neutral-300"
								}
								href={href}
								aria-current={
									pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
										? "page"
										: undefined
								}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<div className="lg:hidden">
					<button
						ref={menuButtonRef}
						className="shell-cta min-w-10 px-3 text-xl"
						onClick={toggleMenu}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-navigation"
					>
						<span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
					</button>
				</div>
			</div>
			<nav
				id="mobile-navigation"
				hidden={!menuOpen}
				aria-label="Mobile navigation"
				className="shell-nav__menu panel-surface absolute right-[var(--page-gutter)] z-50 w-[min(18rem,calc(100vw-2*var(--page-gutter)))] p-3 text-right lg:hidden"
			>
				<ul>
					{navItems.map(({ label, href }) => (
						<li key={label}>
							<Link
								href={href}
								className={
									label === "Contact"
										? "shell-cta mt-2 w-full"
										: "shell-nav__link block px-4 py-3 text-secondary hover:text-neutral-300"
								}
								onClick={closeMenu}
								aria-current={
									pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
										? "page"
										: undefined
								}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</nav>
	)
}

export default NavBar
