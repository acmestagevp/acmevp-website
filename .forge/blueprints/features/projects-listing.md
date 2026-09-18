# Feature Blueprint: Projects Listing

> This is the technical counterpart to [`projects-listing.md`](../../requirements/features/projects-listing.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

`/projects` maps the project catalog to a responsive card grid. A text-variant `Header` titles the page; a gallery-mode `Section` with a bleed `ContentWrapper` holds a 1/2/3-column grid of `ProjectCard`s, one per catalog entry, each linking to its detail route.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/projects-listing.md`](../../requirements/features/projects-listing.md)

## Component Blueprint Composition

Composes @Presentation Foundation: #Header (text variant), #Section (`mode="gallery"`), #ContentWrapper (`variant="bleed"`), #AnimateIn (card entrance). Catalog data comes from the container's catalog contract ([`constants/projects.ts`](../../../constants/projects.ts)).

## Feature-Specific Components

```component
name: ProjectCard
container: Next.js Web App
responsibilities:
	- Thumbnail (aspect-ratio/fit configurable, lazy-loaded, responsive sizes) + title + optional subtitle
	- Whole-card Link to /projects/[slug] with accessible label naming the project
	- Hover/focus-visible opacity and background feedback
```

## Models and contracts

```model
name: Project (consumed)
store: constants/projects.ts
description: Catalog entry consumed read-only by the listing
fields:
	- slug, title, subtitle?, thumbnail
constraints:
	- Slug must be URL-safe and unique (enforced by the readiness report)
```

### Key Contracts

- The grid renders every catalog project unconditionally — publication states gate SEO, not visibility, on the listing.

### Integration Contracts

- Card links target the detail route produced by `generateStaticParams` in [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx).

## Requirement alignment

- `REQ-PLIST-001` → [`app/projects/page.tsx`](../../../app/projects/page.tsx): `projects.map` → `ProjectCard` grid (1/2/3 columns by breakpoint)
- `REQ-PLIST-002` → [`components/ProjectCard.tsx`](../../../components/ProjectCard.tsx): lazy thumbnails, `AnimateIn` entrance, hover/focus feedback, aria-label

## Architecture Decision Records

### ADR-001: Listing shows all projects regardless of publication state

**Context:** Publication states exist to gate search indexing, not to hide work from direct visitors.

**Decision:** The grid renders the full catalog; only metadata robots directives and the sitemap respect publication states.

**Consequences:** Draft projects are reachable by URL but not indexed; the readiness report is the guardrail for incomplete entries.
