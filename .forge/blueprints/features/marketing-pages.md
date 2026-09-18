# Feature Blueprint: Marketing Pages

> This is the technical counterpart to [`marketing-pages.md`](../../requirements/features/marketing-pages.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

Three static pages — home, stage, services — composed entirely from the presentation foundation with code-resident copy. Each page is a server component: a `Header` hero followed by alternating `Section`/`ContentWrapper`/`Content` editorial blocks, closed by a CTA section linking to `/contact`. No feature-specific state; all interactivity is delegated to `AnimateIn` and the shared chrome.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/marketing-pages.md`](../../requirements/features/marketing-pages.md)

## Component Blueprint Composition

Composes @Presentation Foundation: #Header (hero variants with background images), #Section + #ContentWrapper (layout rhythm), #Content (reversible two-column editorial blocks), #AnimateIn (entrance motion), #Testimonials and #Logo (home page social proof). The home page additionally renders the client-logo row from [`constants/logos.ts`](../../../constants/logos.ts) and the marquee from [`constants/testimonials.ts`](../../../constants/testimonials.ts).

## Feature-Specific Components

```component
name: MarketingPage
container: Next.js Web App
responsibilities:
	- One server component per route: app/page.tsx, app/stage/page.tsx, app/services/page.tsx
	- Owns copy, image selection, and section ordering as JSX
```

The pages are the feature-specific components — copy is not data-driven; each page hardcodes its editorial structure and links.

## Models and contracts

No feature-specific models. Copy and imagery are inline JSX; the floor-plan PDF is a static asset at [`public/ACME_Stage_Floor_Plan.pdf`](../../../public/ACME_Stage_Floor_Plan.pdf) linked with a `download` attribute.

### Key Contracts

- Section rhythm alternates `isReversed` on `Content` blocks for visual variety.
- Every marketing page ends with a `Section` + `ContentWrapper variant="narrow"` CTA linking to `/contact`.

### Integration Contracts

- The Services page's Studio section links to `/stage` via `Link` inside `Content` copy (one direction; the stage page's only internal link is its contact CTA — blueprint review B-1).

## Requirement alignment

- `REQ-MKTG-001` → [`app/page.tsx`](../../../app/page.tsx): hero + stage/services teasers + logo row + testimonial marquee + CTA
- `REQ-MKTG-002` → [`app/stage/page.tsx`](../../../app/stage/page.tsx): hero panel + six spec sections + floor-plan PDF + CTA
- `REQ-MKTG-003` → [`app/services/page.tsx`](../../../app/services/page.tsx): hero + four service sections (Education section exists only as a commented-out draft) + CTA

## Architecture Decision Records

### ADR-001: Copy lives in page components

**Context:** Marketing copy changes with the business, not with data models.

**Decision:** Pages own their copy as JSX; only repeated structured data (logos, testimonials, nav, projects) lives in `constants/`.

**Consequences:** Copy edits touch page files directly; structured data stays reusable and type-checked.
