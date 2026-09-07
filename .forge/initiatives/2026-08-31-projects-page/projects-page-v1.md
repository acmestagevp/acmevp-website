# Initiative: Projects Page

## Initiative metadata

- **Status:** `in-progress`
- **Owner/orchestrator:** ACME website team
- **Created:** 2026-08-31
- **Updated:** 2026-09-07
- **Current gate:** content readiness and implementation validation
- **Authoritative version:** `v2` — see [`projects-page-v2.md`](projects-page-v2.md); this file remains the historical foundation record
- **Base/default branch:** `master` (exact local branch state is not exposed)
- **Initiative branch:** existing stakeholder-selected branch; no new branch created
- **Branch policy:** `optional during documentation` — selected: remain on the existing branch
- **Branch naming convention:** `forge/YYYY-MM-DD-short-slug`; not used for this documentation pass
- **Branch capability/evidence:** Git capability and exact current branch name were not exposed during initialization; see [`initialization-record.md`](../../initialization-record.md:14)
- **Reduced-capability fallback or opt-out evidence:** User explicitly instructed the agent not to recreate or branch; source-file inspection and the initiative execution log are the comparable evidence. No branch-level review is claimed.
- **Branch creation failure:** `none` — branch creation was intentionally not attempted

## Standard artifact locations

- **Authoritative plan:** [`projects-page-v1.md`](projects-page-v1.md)
- **Current authoritative amendment:** [`projects-page-v2.md`](projects-page-v2.md)
- **Design review:** not yet created; this record documents an already-started implementation rather than asserting design approval
- **Implementation reviews:** not yet created; validation evidence remains pending
- **Closeout review:** not yet created; the initiative remains open for content population and validation
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/WO-001-projects-page-foundation.md`](work-orders/WO-001-projects-page-foundation.md)

## Outcome

Document the existing Projects page foundation as a durable, reviewable initiative record so the team can next populate approved project copy, video, imagery, credits, rights, and publication metadata without confusing fixture content with launch-ready content.

## Initiative boundary and sizing

- **Parent roadmap or product goal:** Demonstrate ACME Virtual Production's capability through credible work; see [`project-showcase.md`](../../requirements/features/project-showcase.md:55) and [`product-overview.md`](../../requirements/product-overview.md)
- **Initiative type:** `product MVP stage` — staged project-showcase foundation
- **Single observable outcome:** A centralized, typed, routeable project showcase is documented, with its current implementation and deferred content work clearly separated.
- **Validation boundary:** Review the recorded source evidence against the project showcase requirements and run the repository's required lint/build and browser route checks before marking the initiative complete.
- **Split assessment:** `keep as one initiative`
- **If split, traceability and dependencies:** No split. Content population is a deferred next work phase within this initiative's boundary, but it remains independently reviewable and must not be represented as complete in this record.

## Scope

### In scope

- Projects listing at [`app/projects/page.tsx`](../../../app/projects/page.tsx:8), including the responsive card grid and catalog-driven links.
- Dynamic detail routes at [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx:60), including static params, slug lookup, not-found behavior, metadata, and Contact/Projects navigation.
- The typed, single-source catalog and content-block model in [`constants/projects.ts`](../../../constants/projects.ts:17).
- Shared rendering through [`components/ProjectCard.tsx`](../../../components/ProjectCard.tsx:15), [`components/project/ProjectContent.tsx`](../../../components/project/ProjectContent.tsx:14), [`components/project/VideoBlock.tsx`](../../../components/project/VideoBlock.tsx:15), [`components/project/TextBlock.tsx`](../../../components/project/TextBlock.tsx:1), and [`components/project/ImageBlock.tsx`](../../../components/project/ImageBlock.tsx:15).
- Separation of fixture validity from publication readiness through [`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts:38).
- Documentation of current sample records and the next content-readiness handoff.

### Out of scope

- Replacing fixture or placeholder-like media IDs with approved production media.
- Writing final case-study copy, credits, claims, captions, alt text, or other stakeholder-owned public content.
- CMS migration, automated media ingestion, or a new content backend.
- Visual redesign unrelated to the existing project showcase behavior.
- Deployment, branch creation, pull-request creation, or claiming that external embeds and rights have been approved.

## Context and motivation

The repository already contains a project showcase implementation, but its progress had not been recorded in Forge. The implementation uses one catalog to drive both the listing and detail routes. The catalog currently contains four sample records: Polica/Wasted Me, Renewal by Andersen/A Window in Time, Case Study/Alex Horner, and Behind the Scenes/Polica - Wasted Me. Some records contain placeholder-like video IDs or fixture copy, so routeability must remain separate from publication approval.

The durable feature intent is recorded in [`project-showcase.md`](../../requirements/features/project-showcase.md:11), and the architectural composition is recorded in [`project-showcase.md`](../../blueprints/features/project-showcase.md:3). This initiative records the implementation evidence and the handoff to the content phase; it does not redefine those durable requirements.

## Requirements and blueprint references

- **Requirements:** [`project-showcase.md`](../../requirements/features/project-showcase.md:17) — `REQ-PROJECT-001` browse projects, `REQ-PROJECT-002` view details, and `REQ-PROJECT-003` preserve publication intent.
- **Blueprint:** [`project-showcase.md`](../../blueprints/features/project-showcase.md:1) — catalog, route, dispatcher, block renderers, and publication-state model.
- **Component blueprints:** [`content-catalog.md`](../../blueprints/components/content-catalog.md) and [`shared-site-shell.md`](../../blueprints/components/shared-site-shell.md).
- **Project policy:** [`00-overview.md`](../../process/00-overview.md:87) — validation commands, review cadence, branch policy, and no-bypass rule.

## Proposed design / current implementation

1. [`app/projects/page.tsx`](../../../app/projects/page.tsx:8) imports the `projects` catalog and maps each record to [`ProjectCard`](../../../components/ProjectCard.tsx:15). Cards display title, optional subtitle, thumbnail, accessible label, and a stable `/projects/[slug]` link.
2. [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx:13) uses [`generateStaticParams()`](../../../app/projects/[slug]/page.tsx:14) to pre-render one route per catalog slug. The page resolves the promised route params, calls [`notFound()`](../../../app/projects/[slug]/page.tsx:69) for unknown slugs, and passes ordered content to [`ProjectContent`](../../../components/project/ProjectContent.tsx:14).
3. The same dynamic route defines [`generateMetadata()`](../../../app/projects/[slug]/page.tsx:21). It derives title/description, canonical URL, Open Graph/Twitter previews, and robots indexing from each record's optional SEO data and [`publicationState`](../../../constants/projects.ts:65). `fixture-valid` records remain non-indexable.
4. [`constants/projects.ts`](../../../constants/projects.ts:17) is the single source of truth. The [`ContentBlock`](../../../constants/projects.ts:54) discriminated union supports ordered video, text, and image blocks. [`Project`](../../../constants/projects.ts:58) adds stable slug, listing metadata, content, publication state, and SEO metadata.
5. [`ProjectContent`](../../../components/project/ProjectContent.tsx:14) dispatches blocks in editorial order. A lone video is treated as film-first and can render featured; mixed text/image records are treated as case studies; other compositions are behind-the-scenes. Video embeds are lazy-loaded behind an explicit load action unless autoplay is configured, while image and text blocks preserve alt/caption and page context.
6. [`getProjectReadinessReport()`](../../../utils/projectReadiness.ts:38) checks slug shape/uniqueness, local assets, content presence, video ID shape, publication state, SEO fields, embed ownership, and credits/rights gates. This supports the next content phase without making fixtures indexable by default.
7. Every valid project page ends with a Contact CTA and a back-to-Projects link, satisfying the current navigation requirement.

## Work-order plan

| Order | Work order | Purpose | Dependencies | Review cadence |
|---|---|---|---|---|
| 1 | [`work-orders/WO-001-projects-page-foundation.md`](work-orders/WO-001-projects-page-foundation.md) | Record and validate the existing route/catalog/rendering foundation | [`project-showcase.md`](../../requirements/features/project-showcase.md:17), [`project-showcase.md`](../../blueprints/features/project-showcase.md:1) | per work order |

## Deferred next step: content population

The next implementation step is to replace or approve the current fixtures with relevant project text/video/image content. That work must include stakeholder approval of public claims, credits and rights, accessible media descriptions, approved SEO descriptions/social images, publication and modified dates, and verification that external video ownership is acceptable. The content phase must then rerun [`getProjectReadinessReport()`](../../../utils/projectReadiness.ts:38), lint/build, route smoke checks, and the required implementation review before publication state changes.

## Risks and decisions

- **Risk:** Current video IDs and sample copy may be placeholders or unapproved — **Mitigation:** keep records at `fixture-valid` until the content owner approves media, claims, credits, rights, and SEO fields.
- **Risk:** Missing Git/branch evidence could be mistaken for branch review — **Mitigation:** explicitly record the existing-branch decision and limitation; do not claim branch-level review.
- **Risk:** External embeds can fail or carry rights/privacy implications — **Mitigation:** retain the non-video page context and perform runtime/provider checks during content readiness.
- **Decision needed:** Which projects, media, copy, credits, and publication dates are approved for launch — **Owner:** ACME content/stakeholder team.

## Current readiness checklist

- [x] Scope and exclusions are explicit.
- [x] The initiative has one observable outcome and one named validation boundary.
- [x] The initiative is traceable to the project showcase product goal.
- [x] The advisory split assessment is recorded.
- [x] Requirements and blueprints are linked.
- [x] The existing implementation has been inventoried in a work order.
- [ ] `pnpm lint` evidence is recorded for this initiative.
- [ ] `pnpm build` evidence is recorded for this initiative.
- [ ] Browser route/responsive checks are recorded for this initiative.
- [ ] Stakeholder approval for public project content and publication readiness is recorded.
- [ ] Implementation review and closeout review are completed.
