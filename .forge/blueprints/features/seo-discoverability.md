# Feature Blueprint: SEO and Discoverability

> This is the technical counterpart to [`seo-discoverability.md`](../../requirements/features/seo-discoverability.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

Discoverability is a build-time pipeline: the root layout defines global metadata; the project route's `generateMetadata` derives per-project metadata from catalog `seo` fields with fallbacks and publication-state-driven robots directives; `robots.ts` and `sitemap.ts` generate crawler files, with the sitemap filtered by the readiness report's `indexable` list. The readiness checker ([`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts)) is the integrity engine: it validates catalog technical health and tracks content-approval gates.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/seo-discoverability.md`](../../requirements/features/seo-discoverability.md)

## Component Blueprint Composition

Consumes the container's catalog contract (@Next.js Web App: catalog types, publication states) and @Presentation Foundation only indirectly (metadata is route-owned, not component-owned).

## Feature-Specific Components

```component
name: generateMetadata (project route)
container: Next.js Web App
responsibilities:
	- Per-project title/description with catalog fallbacks; canonical per slug
	- OpenGraph/Twitter cards with approved social image when present
	- robots: index only when publicationState is indexable or publishable; unknown slug → noindex
```

```component
name: robots.ts
container: Next.js Web App
responsibilities:
	- Allow all agents; link sitemap at https://acmevp.com/sitemap.xml
```

```component
name: sitemap.ts
container: Next.js Web App
responsibilities:
	- Static routes with a hardcoded site lastModified; project routes filtered by readiness indexable bucket with approved dates
```

```component
name: getProjectReadinessReport
container: Next.js Web App
responsibilities:
	- Validate catalog: slug safety/uniqueness, thumbnail existence, content presence, Mux ID shape, fixture paths, local image existence
	- Track content gates: SEO fields, dates, credits, video rights, fixture replacement
	- Produce cumulative tier lists: fixtureValid (all slugs), indexable (state beyond fixture-valid), publishable (state publishable)
```

## Models and contracts

```model
name: ProjectSeo
store: constants/projects.ts (per project)
description: Approved launch metadata; absent fields fall back to catalog-derived values
fields:
	- description?, socialImage?, publishedAt?, modifiedAt?
constraints:
	- Dates must parse and not be in the future (readiness-checked)
	- publishable requires an approved socialImage (readiness-enforced)
```

```model
name: ReadinessReport
store: computed (utils/projectReadiness.ts)
description: Validation output consumed by sitemap gating
fields:
	- fixtureValid[], indexable[], publishable[], technicalFailures[], contentGates[]
constraints:
	- Filesystem checks (existsInPublic) require server/build context
```

### Key Contracts

- **Indexability rule:** `indexable = publicationState ∈ {indexable, publishable}` — applied identically in `generateMetadata` robots and sitemap filtering.
- **Canonical coverage:** defined on home (layout) and project pages only; other routes inherit the root canonical (known gap, review F-1).

### Integration Contracts

- Sitemap `lastModified` for static routes is a hardcoded constant (`2026-08-12`); project routes prefer approved `modifiedAt`/`publishedAt`.

## Requirement alignment

- `REQ-SEO-001` → #robots.ts
- `REQ-SEO-002` → #sitemap.ts + #getProjectReadinessReport indexable bucket
- `REQ-SEO-003` → #RootLayout metadata + #generateMetadata fallbacks
- `REQ-SEO-004` → #generateMetadata robots directives by publication state
- `REQ-SEO-005` → #getProjectReadinessReport technical-failure and content-gate taxonomies

## Architecture Decision Records

### ADR-001: Readiness report as the single gating engine

**Context:** Sitemap inclusion and metadata robots must agree on what is approved; approvals are editorial decisions encoded as data.

**Decision:** One pure function computes the readiness report from the catalog; the sitemap consumes its `indexable` list directly, while `generateMetadata` applies the same indexability rule inline — one canonical rule, two call sites (a known duplication to keep in sync — blueprint review B-2).

**Consequences:** The gating rule has one canonical definition in the checker; adding a gate is a checker change, though the inline metadata duplication must be kept consistent; the report doubles as a pre-publication checklist.
