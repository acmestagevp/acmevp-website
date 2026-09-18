# Feature Blueprint: Project Detail Pages

> This is the technical counterpart to [`project-detail.md`](../../requirements/features/project-detail.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

Each `/projects/[slug]` page is statically generated from the catalog: `ProjectContent` renders the project's content blocks in order with the featured video leading the page, a text-variant `Header` renders title/subtitle beneath the content, a fixed top-right "×" close affordance links back to the listing, and a closing section provides the contact CTA and back-link. Video blocks delegate to @Media Delivery; text and image blocks are feature-specific presentational components. **This feature is the target of the layout initiative — this blueprint documents the current behavior.**

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/project-detail.md`](../../requirements/features/project-detail.md)

## Component Blueprint Composition

Composes @Presentation Foundation (#Header text variant, #Section gallery mode, #ContentWrapper variants, #AnimateIn) and @Media Delivery (#VideoBlock with its source union and autoplay/featured contracts). The page route ([`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx)) owns `generateStaticParams`, `generateMetadata`, and 404 handling via `notFound()`.

## Feature-Specific Components

```component
name: ProjectContent
container: Next.js Web App
responsibilities:
	- Dispatch each ContentBlock to its renderer in catalog order
	- Auto-feature a lone video block; compute composition archetype class (film-first | case-study | behind-the-scenes)
	- Stable React keys via block fingerprinting (type + source/heading/body + occurrence)
	- Wrap blocks in Section/ContentWrapper with per-type width choices (featured video full-width wrapper with page gutters; text default; image wide/full)
```

```component
name: TextBlock
container: Next.js Web App
responsibilities:
	- Optional heading (h2/h3) + body at reading measure, AnimateIn-wrapped
```

```component
name: ImageBlock
container: Next.js Web App
responsibilities:
	- next/image with aspect-ratio (video/square/portrait/intrinsic) and fit (cover/contain) options, optional caption, lazy loading
```

## Models and contracts

```model
name: ContentBlock
store: constants/projects.ts
description: Discriminated union driving ProjectContent dispatch
fields:
	- video: { source: ProjectVideoSource, featured?, autoplay? }
	- text: { heading?, body }
	- image: { src, alt, caption?, fullWidth?, aspectRatio?, fit? }
constraints:
	- Video sources validated by the readiness checker (Mux ID shape; 11-character YouTube ID shape; fixture path fixed)
	- Local image srcs must exist under public/ (readiness-checked)
```

### Key Contracts

- **Featured inference:** `featured = block.featured ?? (blocks.length === 1 && blocks[0].type === "video")` — a lone video is always featured; featured videos render at true 16:9, width-capped by the viewport height and centered, inset by the global page gutter (`ContentWrapper variant="full"` — the gutter is the minimum side margin).
- **Close affordance:** the page route renders a fixed top-right "×" `Link` to `/projects` (`top-[var(--page-gutter)] right-[var(--page-gutter)] z-40`, accessible label "Close project — back to Projects"), inset by the page gutter and above the content.
- **Unknown slug:** `notFound()` renders the 404; metadata for unknown slugs is noindex.
- **Static generation:** every catalog slug is pre-rendered at build time.

### Integration Contracts

- `generateMetadata` consumes the project's `seo` fields with catalog-derived fallbacks; robots directives follow the publication state (see the SEO feature blueprint).

## Requirement alignment

- `REQ-PDET-001` → [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx) + #ProjectContent: header + ordered block rendering + 404
- `REQ-PDET-002` → @Media Delivery #VideoBlock: Mux playback, YouTube embeds for client-channel-only media, viewport-balanced 16:9 featured rendering, Mux poster before playback, muted autoplay, fixture fallback, accessible titles
- `REQ-PDET-003` → #TextBlock / #ImageBlock: reading measure, aspect/fit options, captions, lazy loading
- `REQ-PDET-004` → closing `Section` in the page route: "Discuss a project" CTA + back-to-projects link, plus the fixed top-right close affordance

## Architecture Decision Records

### ADR-001: Block-based content model

**Context:** Projects need heterogeneous content (films, credits, stills) without a CMS.

**Decision:** Content is a typed block array in the catalog; `ProjectContent` dispatches by discriminant with layout rules per block type and archetype.

**Consequences:** New projects are data entries; new content types require a catalog type + renderer + readiness rule; layout changes (the first initiative) concentrate in `ProjectContent` and the block components.
