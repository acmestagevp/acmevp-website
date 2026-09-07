# Work Order: WO-001 — Projects Page Foundation

## Metadata

- **Status:** `complete` for source inventory/documentation; initiative-level validation remains pending
- **Assignee:** ACME website team
- **Phase/order:** 1
- **Initiative:** [`../projects-page-v1.md`](../projects-page-v1.md)
- **Generated filename:** `WO-001-projects-page-foundation.md`
- **Owner/orchestrator:** ACME website team / documentation agent
- **Implementation review:** not yet created; no implementation-review pass is claimed

## Summary

Record the existing Projects page foundation and its technical contract. The implementation already provides a catalog-driven listing, dynamic project routes, typed ordered content blocks, metadata behavior, and shared media/text renderers; this work order does not add new application behavior.

## In scope

- Inventory [`app/projects/page.tsx`](../../../../app/projects/page.tsx:8) and its catalog-driven card grid.
- Inventory [`app/projects/[slug]/page.tsx`](../../../../app/projects/[slug]/page.tsx:13), including static params, not-found handling, metadata, and route navigation.
- Inventory [`constants/projects.ts`](../../../../constants/projects.ts:17), including [`Project`](../../../../constants/projects.ts:58), [`ContentBlock`](../../../../constants/projects.ts:54), video/text/image block types, publication states, and SEO fields.
- Inventory [`ProjectCard`](../../../../components/ProjectCard.tsx:15), [`ProjectContent`](../../../../components/project/ProjectContent.tsx:14), [`VideoBlock`](../../../../components/project/VideoBlock.tsx:15), [`TextBlock`](../../../../components/project/TextBlock.tsx:1), and [`ImageBlock`](../../../../components/project/ImageBlock.tsx:15).
- Record readiness checks in [`getProjectReadinessReport()`](../../../../utils/projectReadiness.ts:38).

## Out of scope

- Changing application source, styles, routes, components, or catalog records.
- Populating final project copy, approved video IDs, imagery, credits, rights, captions, alt text, or SEO metadata.
- CMS or ingestion work.
- Branch creation, deployment, or publication.

## Requirements

- [`REQ-PROJECT-001`](../../../requirements/features/project-showcase.md:17): Browse projects
  - [`AC-PROJECT-001.1`](../../../requirements/features/project-showcase.md:21): The Projects route displays each approved listing record with title, optional subtitle, and thumbnail where available.
  - [`AC-PROJECT-001.2`](../../../requirements/features/project-showcase.md:24): Each listing links to its corresponding stable project detail route.
- [`REQ-PROJECT-002`](../../../requirements/features/project-showcase.md:26): View project details
  - [`AC-PROJECT-002.1`](../../../requirements/features/project-showcase.md:30): A valid project route renders its configured content blocks in editorial order.
  - [`AC-PROJECT-002.2`](../../../requirements/features/project-showcase.md:33): Unknown project slugs produce a not-found outcome rather than misleading content.
  - [`AC-PROJECT-002.3`](../../../requirements/features/project-showcase.md:34): Project pages provide a clear route to Contact and back to Projects.
- [`REQ-PROJECT-003`](../../../requirements/features/project-showcase.md:36): Preserve publication intent
  - [`AC-PROJECT-003.1`](../../../requirements/features/project-showcase.md:40): Project records can express publication state and SEO metadata independently of template validity.
  - [`AC-PROJECT-003.2`](../../../requirements/features/project-showcase.md:43): Only approved indexable or publishable records are represented as indexable by project metadata behavior.
- [`NFR-PROJECT-001`](../../../requirements/features/project-showcase.md:45): Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../blueprints/features/project-showcase.md:3) — catalog-driven listing/detail routes, typed project model, dispatcher, and block renderers.
- [`content-catalog.md`](../../../blueprints/components/content-catalog.md) — centralized content ownership and readiness boundary.
- [`shared-site-shell.md`](../../../blueprints/components/shared-site-shell.md) — shared Header, Section, ContentWrapper, navigation, and CTA composition.

## Implementation evidence

1. [`app/projects/page.tsx`](../../../../app/projects/page.tsx:25) maps [`projects`](../../../../constants/projects.ts:71) into [`ProjectCard`](../../../../components/ProjectCard.tsx:25), which links to `/projects/${slug}` and exposes title/subtitle/thumbnail presentation.
2. [`generateStaticParams()`](../../../../app/projects/[slug]/page.tsx:14) derives build-time routes from the same catalog, while [`ProjectPage`](../../../../app/projects/[slug]/page.tsx:60) resolves the slug and uses [`notFound()`](../../../../app/projects/[slug]/page.tsx:69) when absent.
3. [`generateMetadata()`](../../../../app/projects/[slug]/page.tsx:21) derives canonical, Open Graph, Twitter, and robots metadata; `fixture-valid` is not indexable, while `indexable` and `publishable` are.
4. [`ProjectContent`](../../../../components/project/ProjectContent.tsx:14) preserves content-array order and dispatches video, text, and image blocks. A single video receives film-first featured treatment by default.
5. [`VideoBlock`](../../../../components/project/VideoBlock.tsx:15) supports YouTube/Vimeo embeds, lazy loading, explicit load interaction, accessible titles/descriptions, and optional muted autoplay. [`ImageBlock`](../../../../components/project/ImageBlock.tsx:15) requires alt text and supports captions, ratios, and fit. [`TextBlock`](../../../../components/project/TextBlock.tsx:1) provides editorial context.
6. [`getProjectReadinessReport()`](../../../../utils/projectReadiness.ts:38) separates technical fixture failures from content gates, including media ownership and credits/rights review.

## Files and systems

- **Create:** Forge documentation only: [`projects-page-v1.md`](../projects-page-v1.md), [`execution-log.md`](../execution-log.md), and this work order.
- **Update:** No application source files; the initiative documentation records the existing state.
- **Avoid changing:** [`app/`](../../../../app/), [`components/`](../../../../components/), [`constants/projects.ts`](../../../../constants/projects.ts), [`public/`](../../../../public/), and [`utils/`](../../../../utils/).

## Validation and E2E acceptance tests

- **Automated checks:** Required commands are [`pnpm lint`](../../../../package.json:9) and [`pnpm build`](../../../../package.json:6). They were not run during this documentation pass and must be recorded before initiative closeout.
- **Manual/external checks:** Browser checks for `/projects`, each generated project slug, an unknown slug, Contact/back links, responsive behavior, and video-load behavior; deployment/provider and content-owner approvals are also required.
- **Acceptance test:** Given the current catalog and routes, when the source is inspected and the required validation gates are run, then the listing links to stable detail routes, valid slugs render ordered blocks, unknown slugs return not-found, metadata follows publication state, and project pages link to Contact and back to Projects.

## Documentation updates

- Added the initiative plan and execution log.
- Linked the existing project showcase requirements and blueprint; no changes to durable requirements or blueprints are authorized by this work order.
- Deferred content population and publication approval to the next implementation step.

## Completion checklist

- [x] Existing implementation is inventoried within scope.
- [ ] Tests/checks and required gates have evidence.
- [x] Authorized initiative documentation is created.
- [x] Execution log is appended.
- [ ] Independent implementation review is completed.
