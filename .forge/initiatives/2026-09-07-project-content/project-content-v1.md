# Initiative: Project Content

## Initiative metadata

- **Status:** `closed`
- **Owner/orchestrator:** ACME website team
- **Created:** 2026-09-07
- **Updated:** 2026-09-14
- **Current gate:** closeout complete — final project thumbnails integrated
- **Authoritative version:** `v1`
- **Base/default branch:** `master`
- **Initiative branch:** `project-page`
- **Branch policy:** `user opt-out` — selected: remain on the existing stakeholder-selected branch
- **Branch naming convention:** `forge/YYYY-MM-DD-short-slug` for future initiatives; not used here by explicit user direction
- **Branch capability/evidence:** The stakeholder identified the current development branch as `project-page`; no new branch is to be created for this initiative.
- **Reduced-capability fallback or opt-out evidence:** This initiative intentionally remains on `project-page`. Branch-level evidence must use the existing branch diff and execution log; merge to `master` is deferred until publishable videos/pages are approved.
- **Branch creation failure:** `none` — branch creation was intentionally not attempted

## Standard artifact locations

- **Authoritative plan:** [`project-content-v1.md`](project-content-v1.md)
- **Design review:** [`reviews/design-review.md`](reviews/design-review.md)
- **Implementation reviews:** `reviews/implementation-review-[work-order-id].md`
- **Closeout review:** [`reviews/closeout-review.md`](reviews/closeout-review.md)
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/)

## Outcome

Author the approved, publishable project records and editorial content that power the main Projects page and each project detail route, with real approved media, accurate metadata, accessible supporting context, and publication state kept separate from fixture validity.

## Initiative boundary and sizing

- **Parent roadmap or product goal:** Demonstrate ACME Virtual Production's capability through credible work; see [`project-showcase.md`](../../requirements/features/project-showcase.md).
- **Initiative type:** `product MVP stage` — selected: content publication stage following the existing projects-page/video-delivery work.
- **Single observable outcome:** The Projects listing and approved project detail routes present stakeholder-supplied publishable projects rather than placeholder portfolio content, while unapproved or incomplete records remain non-publishable.
- **Validation boundary:** Stakeholder content/rights approval plus `pnpm lint`, `pnpm build`, and Playwright checks of the Projects route, every approved project route, unknown-slug behavior, responsive layout, accessibility metadata, and media playback.
- **Split assessment:** `keep as one initiative` — decision: all work contributes to one publication-ready project showcase outcome and shares one approval boundary.
- **If split, traceability and dependencies:** Not applicable. The prior projects-page initiative remains a dependency for the media/player contract; this initiative owns the editorial content and publication handoff.

## Scope

### In scope

- Collect and normalize the stakeholder's project inventory, approved titles, subtitles, slugs, copy, credits, thumbnails, supporting images, video sources, captions, and SEO metadata.
- Replace placeholder or provisional project content with approved project records in the existing typed content catalog.
- Author the main Projects page's listing content and the ordered content blocks for each approved detail page.
- Preserve stable routes, ordered video/text/image block behavior, accessible alt/caption/context content, and Contact/Projects navigation.
- Set publication and SEO metadata only when the stakeholder has approved the associated claims, rights, and media.
- Record incomplete projects as explicit follow-up or non-publishable work rather than silently publishing fixtures.
- Validate routes, media, responsive behavior, accessibility, lint/build, and publication readiness.

### Out of scope

- CMS selection or migration, automated media ingestion, or a new editorial administration interface.
- Unrelated visual redesign, navigation redesign, or changes to the established project-page layout unless a content requirement exposes a necessary contract defect.
- Creating, editing, compressing, captioning, or licensing videos and images; those assets must be supplied or approved by the stakeholder.
- Publishing unapproved claims, credits, client names, music, imagery, or media.
- Merging to `master` or production deployment before stakeholder publication approval and the required release gates.

## Context and motivation

The existing Projects implementation already provides the route and typed content boundary, but the catalog contains provisional records and temporary local media. The preceding projects-page initiative established the video delivery direction while explicitly leaving final creative selection, copywriting, rights, and real portfolio media migration unresolved. This initiative turns the stakeholder's forthcoming inventory into the actual publishable website content without confusing route validity with publication readiness.

The current source of truth is [`projects.ts`](../../../constants/projects.ts), consumed by [`page.tsx`](../../../app/projects/page.tsx), [`page.tsx`](../../../app/projects/[slug]/page.tsx), and the project block renderers. The durable requirements are in [`project-showcase.md`](../../requirements/features/project-showcase.md), and the technical composition is in [`project-showcase.md`](../../blueprints/features/project-showcase.md) and [`content-catalog.md`](../../blueprints/components/content-catalog.md).

## Requirements and blueprint references

- **Requirements:** [`project-showcase.md`](../../requirements/features/project-showcase.md) — `REQ-PROJECT-001`, `REQ-PROJECT-002`, `REQ-PROJECT-003`, and `NFR-PROJECT-001`.
- **Blueprints:** [`project-showcase.md`](../../blueprints/features/project-showcase.md) — typed Project/content-block model and dispatcher; [`content-catalog.md`](../../blueprints/components/content-catalog.md) — centralized catalog and publication boundary.
- **Policy/gates:** [`00-overview.md`](../../process/00-overview.md) — design approval, per-work-order implementation review, lint/build/browser checks, and stakeholder publication approval.
- **Dependency:** [`projects-page-v2.md`](../2026-08-31-projects-page/projects-page-v2.md) — video delivery and Mux/Vercel handoff; unresolved media or deployment gates remain blockers for publication.

## Planning loop

This initiative is intentionally in the planning loop before work orders are generated. The next step is collaborative editing of this plan: the stakeholder will provide the actual projects, videos, page content, assets, claims, and publication intent; the architect will incorporate that information, identify decisions and constraints, and revise the plan version as needed. No work order is authorized or considered ready for execution during this loop.

The planning loop resolved the project inventory, content and media fields, publication states, route/slug decisions, asset and rights evidence, required page behavior, and the existing catalog contract. The ordered work orders were generated from the accepted design, the initiative entered `in-review`, and design review passed with warnings. Implementation may proceed under a first-draft / fix-forward standard; errors found after the draft are recorded as follow-up rather than treated as design blockers.

### Stakeholder inventory received — 2026-09-14

The stakeholder supplied four Mux-synced videos and directed that these become the only official Projects records, in this exact listing order. The stakeholder stated that all associated rights and licenses are secured.

| Order | Proposed slug | Public title | Proposed subtitle | Video source | Credits supplied | Proposed state |
|---|---|---|---|---|---|---|
| 1 | `cadillac-future-iq` | Cadillac | Future IQ | [`future-iq.mp4.json`](../../../videos/future-iq.mp4.json) — Mux playback ID `b2V5InHCmI3DAvCVP00HJBuiMuFk7ETeDpT02QMFStzt00` | Director: Tony Oberstar; Cinematographer: Marcus Taplin | `publishable` |
| 2 | `cadillac-future-iq-behind-the-scenes` | Cadillac | Future IQ: Behind the Scenes | [`future-iq-bts.mp4.json`](../../../videos/future-iq-bts.mp4.json) — Mux playback ID `iNcr86G02a02GAYDkpPc5iTUhiyVJUoKr3wOLTWxkjQNs` | Produced by Nick Leisenheimer | `publishable` |
| 3 | `polica-wasted-me` | Polica | Wasted Me | [`polica-wasted-me.mp4.json`](../../../videos/polica-wasted-me.mp4.json) — Mux playback ID `900Nx01jFo6OBmMcKZsL27M0100LmVTs8MRflGkVSLgxW00w` | Directed by Ghost+Cow; Cinematographer: Steve Speers | `publishable` |
| 4 | `a-window-in-time-renewal-by-andersen` | A Window in Time | Renewal by Andersen | [`rba-awit.mp4.json`](../../../videos/rba-awit.mp4.json) — Mux playback ID `w100Y5AWF5YqtdhUc5O6901hBgeDn2UIml9oST2At9iqE` | Director: Kat Rapheal; Cinematographer: Alex Horner | `publishable` |

The synced metadata reports `ready` status for all four Mux assets and provides a Mux poster URL for each. The implementation plan should use the four Mux playback IDs, remove all prior records from the exported catalog, preserve this order, and avoid retaining placeholder or previously listed videos on the Projects page. The supplied credits should be rendered as meaningful text context on the detail pages rather than being embedded only in the video.

### Planning decisions still to confirm

- Use the proposed public titles, subtitles, and slugs in the inventory table above.
- Use existing public placeholder thumbnails temporarily; these are explicitly provisional and will be replaced by the stakeholder later. Do not use the Mux poster URLs as listing thumbnails.
- Each detail page will contain only its video plus the supplied credit text; no additional descriptions, stills, captions, or editorial blocks are in scope.
- Use the current route fallback metadata; do not add explicit SEO descriptions, social images, or publication dates in this initiative unless separately requested.
- The supplied spelling `Kat Rapheal` is intentional and must be preserved.

## Proposed design

Use the existing typed catalog as the canonical editorial source. The received inventory maps to four `publishable` records in the exact order above. Each record will contain a Mux video block, an existing public placeholder thumbnail explicitly marked as temporary in the initiative evidence, and an approved text block for the supplied credits. All prior project records, placeholder video sources, and provisional copy will be removed from the exported catalog for this initiative. The final plan will use fallback route metadata and preserve `Kat Rapheal` exactly as supplied. Thumbnail replacement remains a follow-up content update and does not change the four-project video scope.

Implementation will then update the catalog and only the presentation/schema pieces required to express approved content. The main listing will expose approved records with accurate titles, supporting labels, and thumbnails. Detail routes will render each approved record's intended editorial order and meaningful fallback/context text. Metadata and indexability will be enabled only for records whose content, media, claims, and rights have stakeholder approval. The initiative will not treat a technically playable video as publication approval.

## Work-order plan

| Order | Work order | Purpose | Dependencies | Review cadence |
|---|---|---|---|---|
| 1 | [`WO-001-official-project-catalog.md`](work-orders/WO-001-official-project-catalog.md) | Replace the provisional catalog with exactly four official records in the approved order and with temporary placeholder thumbnails. | none | per work order |
| 2 | [`WO-002-mux-video-and-credit-content.md`](work-orders/WO-002-mux-video-and-credit-content.md) | Wire the four ready Mux playback IDs and author the supplied credit text blocks. | WO-001 | per work order |
| 3 | [`WO-003-project-route-presentation.md`](work-orders/WO-003-project-route-presentation.md) | Verify the Projects listing and detail routes present only the approved records without unrelated redesign. | WO-001, WO-002 | per work order |
| 4 | [`WO-004-publication-validation.md`](work-orders/WO-004-publication-validation.md) | Validate routes, media, metadata, accessibility, and publication evidence while recording thumbnail follow-up. | WO-001, WO-002, WO-003 | per work order |
| 5 | [`WO-005-final-project-thumbnails.md`](work-orders/WO-005-final-project-thumbnails.md) | Replace temporary listing thumbnails with the four supplied project images. | Closed first draft; supplied files present | review after completion |

## Risks and decisions

- **Risk:** Supplied videos, images, claims, or credits are incomplete or lack rights approval — **Mitigation:** keep affected records `fixture-valid` or `blocked`, list the missing evidence, and exclude them from indexable/publicable output.
- **Risk:** The existing media handoff from the prior initiative is not production-ready — **Mitigation:** treat unresolved Mux/Vercel/playback configuration as a release blocker and do not substitute placeholder media in publishable records.
- **Risk:** Content requirements expose limits in the current block model — **Mitigation:** record the smallest required schema/presentation change as an explicit design decision; do not expand into a CMS or visual redesign.
- **Decision:** Four official project videos, order, supplied credits, and secured rights/licenses — **Owner:** ACME content stakeholder — **Evidence:** stakeholder direction recorded above; **Gate:** implementation may rely on this decision after design approval.
- **Decision:** Detail pages contain only video plus supplied credit text; fallback metadata is sufficient; `Kat Rapheal` spelling is intentional — **Owner:** ACME content stakeholder — **Evidence:** stakeholder direction recorded above.
- **Decision:** Use the proposed titles/subtitles/slugs and existing placeholder thumbnails temporarily; thumbnail replacement will follow — **Owner:** ACME content stakeholder — **Evidence:** stakeholder direction recorded above.
- **Decision:** No new block type or metadata field is required for the supplied content — **Owner:** ACME website team — **Evidence:** accepted plan and generated work orders.

## Design readiness checklist

- [x] Scope and exclusions are explicit.
- [x] The initiative has one observable outcome and one named validation boundary.
- [x] The initiative is traceable to its roadmap or parent product goal, including its staged MVP relationship.
- [x] The advisory split assessment is recorded.
- [x] Requirements and blueprints are linked.
- [x] Work orders are independently executable and ordered after the planning loop.
- [x] Validation commands and manual gates are identified for the generated work orders.
- [x] Stakeholder project/video/content inventory has been supplied and mapped.
- [x] Any schema or content-model changes required by the inventory are resolved; the existing model is sufficient.
- [x] Design review has passed with warnings and human design approval is recorded.
