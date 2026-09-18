# Component Blueprint: Presentation Foundation

> A reusable capability composed of runtime components. Feature-agnostic: every page composes these primitives.

## Capability Summary

The shared layout, chrome, and decoration system that gives the site its structure and feel: section/wrapper layout primitives, the hero `Header`, the fixed `NavBar` and `Footer`, editorial two-column `Content`, the `AnimateIn` entrance-animation wrapper, the decorative `Background`, and the `Testimonials` marquee. All pages compose these; no page owns its own layout scaffolding.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Containers:** Next.js Web App ([`../containers/nextjs-web-app.md`](../containers/nextjs-web-app.md))

## Core Components

```component
name: Section
container: Next.js Web App
responsibilities:
	- Semantic page section with mode (marketing | gallery), variant (default | custom), optional border/atmosphere classes
```

```component
name: ContentWrapper
container: Next.js Web App
responsibilities:
	- Horizontal width control: default, wide, narrow, full, bleed variants via layout-wrapper CSS classes
```

```component
name: Header
container: Next.js Web App
responsibilities:
	- Hero region with variants (default 80vh, half 50vh, full 100vh, text-only) and an optional background image at configurable opacity
	- Text-variant padding: nav-clearing by default (`pt-32`/`md:pt-40`, clearing the fixed NavBar); the optional `textPaddingClassName` prop replaces the padding block for routes without nav chrome (project detail pages pass `py-12 md:py-16`)
```

```component
name: NavBar
container: Next.js Web App
responsibilities:
	- Fixed top navigation: logo link, five nav items, aria-current indication, scrolled-state background
	- Mobile menu: toggle button, Escape/outside-pointer/resize close, focus return to toggle
	- Route suppression: renders nothing on project detail routes (`/projects/{slug}`) via a `usePathname()` check (consistent across SSR and client render); the `/projects` listing and all other routes keep the nav
```

```component
name: Footer
container: Next.js Web App
responsibilities:
	- Studio identity (address with Maps link), contact links, nav links, copyright
```

```component
name: Content
container: Next.js Web App
responsibilities:
	- Two-column editorial block: copy column + image column, reversible order, configurable padding
```

```component
name: AnimateIn
container: Next.js Web App
responsibilities:
	- framer-motion whileInView entrance (slide-up + optional opacity, stagger delay)
	- Disabled entirely under prefers-reduced-motion
```

```component
name: Background
container: Next.js Web App
responsibilities:
	- Fixed decorative glow + noise layers behind all content, aria-hidden
```

```component
name: Testimonials
container: Next.js Web App
responsibilities:
	- Infinite marquee of testimonial cards; hover slows the scroll; disabled under prefers-reduced-motion
```

`Section` and `ContentWrapper` nest inside `Header` or page flows; `AnimateIn` wraps content inside any of them. `NavBar` and `Footer` mount once in the root layout around `{children}` — `NavBar` suppresses itself (returns `null`) on project detail routes (`/projects/{slug}`), so those pages render without nav chrome while all other routes, including `/projects`, keep it; `Background` sits behind everything.

## System Contracts

### Key Contracts

- `ContentWrapper` variants are the only sanctioned width mechanism — pages must not hand-roll max-widths.
- `AnimateIn` must remain reduced-motion-safe; any new animation composes it rather than raw framer-motion.
- `NavBar` menu state is self-contained: it owns its listeners and cleanup; pages never manipulate it.

### Integration Contracts

- Design tokens (spacing, colors, surfaces like `panel-surface`, `control-surface`, `shell-cta`) are defined in [`app/globals.css`](../../../app/globals.css) as CSS custom properties/classes; components consume them via Tailwind utility classes.
- Navigation data comes from [`constants/nav.ts`](../../../constants/nav.ts); testimonial data from [`constants/testimonials.ts`](../../../constants/testimonials.ts); client logos from [`constants/logos.ts`](../../../constants/logos.ts).

## Architecture Decision Records

### ADR-001: framer-motion behind a reduced-motion-aware wrapper

**Context:** The site wants scroll-triggered polish without violating motion preferences.

**Decision:** All entrance animation flows through `AnimateIn`, which checks `useReducedMotion` and disables animation when requested; the marquee checks the media query directly.

**Consequences:** One place to audit motion behavior; pages stay declarative; reduced-motion support is structural, not per-page.
