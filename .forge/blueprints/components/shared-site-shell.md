# Component Blueprint: Shared Site Shell

## Capability Summary

The shared site shell gives every route consistent navigation, page framing, visual foundation, responsive layout primitives, footer content, and decorative behavior. It consumes navigation constants and route children; it does not own page-specific editorial content.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Containers:** [`../containers/next-web-application.md`](../containers/next-web-application.md)

## Core Components

```component
name: RootLayout
container: Next.js Web Application
responsibilities:
  - Apply metadata, fonts, global CSS, background, navigation, main region, and footer.
  - Preserve the site-wide semantic and stacking boundary.
```

```component
name: Navigation
container: Next.js Web Application
responsibilities:
  - Render desktop and mobile links from constants/nav.ts.
  - Track route state, scroll state, menu state, Escape, outside click, and resize behavior.
```

```component
name: LayoutPrimitives
container: Next.js Web Application
responsibilities:
  - Provide content width, section spacing, borders, radius, and optional decorative variants.
  - Support shared page composition without duplicating layout contracts.
```

```component
name: MotionAndDecoration
container: Next.js Web Application
responsibilities:
  - Provide background and entrance effects.
  - Respect reduced-motion behavior where implemented.
```

RootLayout composes Navigation, LayoutPrimitives through route consumers, and MotionAndDecoration around route children. Navigation reads `navItems`; it must not duplicate route labels in separate desktop/mobile data structures.

## System Contracts

### Key Contracts

- Every primary route remains reachable through the shared navigation.
- Mobile menu controls expose expanded state and return focus after Escape.
- Layout primitives accept explicit variants rather than forcing page-specific structural duplication.
- Decorative effects remain subordinate to readable content and honor reduced-motion preferences.

### Integration Contracts

- Root layout receives route children from the App Router.
- Navigation consumes `{ label, href }` records from `constants/nav.ts`.
- Route pages consume `ContentWrapper`, `Section`, `Header`, and `AnimateIn` as presentation contracts.

## Architecture Decision Records

### ADR-001: Centralize reusable shell behavior

**Context:** The site has multiple public routes and both desktop/mobile navigation behavior.

**Decision:** Keep shell behavior in shared components and keep route-specific editorial composition in pages/features.

**Consequences:** A shell change can affect all routes, so route smoke and responsive/accessibility checks are required.
