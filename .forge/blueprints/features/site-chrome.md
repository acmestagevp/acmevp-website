# Feature Blueprint: Site Chrome

> This is the technical counterpart to [`site-chrome.md`](../../requirements/features/site-chrome.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

The root layout ([`app/layout.tsx`](../../../app/layout.tsx)) mounts the chrome once for every route: `Background` decoration, `NavBar`, `{children}` main region, `Footer`. It also owns the font loading (Gilda Display + Inter via `next/font/google`), the global metadata template, and the viewport meta. All chrome behavior lives in @Presentation Foundation components; this blueprint records how the layout wires them and where the requirements land.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/site-chrome.md`](../../requirements/features/site-chrome.md)

## Component Blueprint Composition

Composes @Presentation Foundation: #NavBar (fixed nav + mobile menu), #Footer (identity/contact/nav), #Background (decorative layers), #AnimateIn (used by pages but governed by the same motion contract). Fonts and metadata are layout-owned.

## Feature-Specific Components

```component
name: RootLayout
container: Next.js Web App
responsibilities:
	- Mount chrome around all routes; load fonts as CSS variables (--font-serif, --font-inter-sans)
	- Global metadata: default title, template "%s – ACME Virtual Production", description, canonical, OpenGraph/Twitter
	- Viewport meta with viewport-fit=cover
```

## Models and contracts

```model
name: navItems
store: constants/nav.ts
description: The five nav entries shared by NavBar and Footer
fields:
	- label, href (Home /, Stage /stage, Services /services, Projects /projects, Contact /contact)
constraints:
	- Single source of truth; NavBar and Footer must render identical sets
```

### Key Contracts

- NavBar marks the current route with `aria-current="page"` (exact match, or prefix match for nested routes).
- Mobile menu closes on Escape (focus returns to the toggle), outside pointer-down, and resize ≥ 1024px.
- `Background` is `aria-hidden` — decoration never reaches assistive technology.

### Integration Contracts

- Font CSS variables are consumed by Tailwind classes (`font-serif`) and tokens in `globals.css`.

## Requirement alignment

- `REQ-CHROME-001` → #NavBar: fixed bar, logo link, five items, Contact as CTA, scrolled state, accessible mobile menu
- `REQ-CHROME-002` → #Footer: address (Maps link), email, phone, nav links, copyright
- `REQ-CHROME-003` → #Background + #AnimateIn + #Testimonials motion contracts (reduced-motion respected)
- `REQ-CHROME-004` → #RootLayout: font pairing + title template/default

## Architecture Decision Records

### ADR-001: Chrome mounted once in the root layout

**Context:** Navigation and footer must be identical across all six routes.

**Decision:** Root layout owns chrome mounting; pages never render their own nav/footer.

**Consequences:** One place to change chrome; pages stay pure content; route transitions preserve chrome state (client components).
