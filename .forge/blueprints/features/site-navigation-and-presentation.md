# Feature Blueprint: Site Navigation and Presentation

## Feature Summary

App Router pages compose a shared root shell from `app/layout.tsx`, `components/ui/NavBar.tsx`, `components/ui/Footer.tsx`, `components/ui/Header.tsx`, `components/layout/ContentWrapper.tsx`, `components/layout/Section.tsx`, and decoration components. Navigation records come from `constants/nav.ts`.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Requirements:** [`../../requirements/features/site-navigation-and-presentation.md`](../../requirements/features/site-navigation-and-presentation.md)

## Component Blueprint Composition

Compose [#Shared Site Shell](../components/shared-site-shell.md) with route pages under `app/`. `RootLayout` owns the persistent shell; each page supplies route-specific content through shared framing primitives.

## Feature-Specific Components

```component
name: RoutePageComposition
container: Next.js Web Application
responsibilities:
  - Compose route content and calls to action within shared shell boundaries.
  - Preserve stable route URLs and metadata.
```

## Requirement alignment

- `REQ-NAV-001` → `NavBar` consumes `constants/nav.ts` for desktop and mobile links.
- `REQ-NAV-002` → `RootLayout`, layout primitives, Header, Footer, and decoration compose consistent pages.

## Architecture Decision Records

### ADR-001: Route pages own composition, shell owns persistence

**Context:** Pages have different editorial layouts but share navigation, footer, and visual primitives.

**Decision:** Keep persistent behavior in the shell and route-specific composition in App Router pages.

**Consequences:** Shared shell changes require cross-route validation; page content can evolve independently.
