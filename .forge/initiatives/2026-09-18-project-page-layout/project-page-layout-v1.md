# Initiative: Project Page Layout

## Initiative metadata

- **Phase:** `draft` | `plan` | `review` | `execute` | `validate` | `closeout` — selected: `closeout`
- **Status:** `active` | `blocked` | `closed` — selected: `active`
- **Owner/orchestrator:** John Wildauer (owner) / Zoo architect session (orchestrator during draft)
- **Created:** 2026-09-18
- **Updated:** 2026-09-18
- **Authoritative version:** `v1` — superseded by [`project-page-layout-v2.md`](project-page-layout-v2.md) for iteration 2 (2026-09-18); this version is retained for history
- **Initiative mode:** `standard` | `rapid` — selected: `rapid` (switched from `standard` 2026-09-18 per the user's explicit request)
- **Mode requested by:** `user` — explicit request 2026-09-18 ("use the rapid initiative path"), made after the architect session offered rapid upon convergence per the user's standing preference
- **Mode confirmation:** rapid confirmed 2026-09-18 — the user accepted all recommended defaults (converged prompt-as-draft confirmed accurate) and then explicitly selected the rapid path when offered
- **Rapid-mode eligibility:** `eligible` — all sub-decisions resolved 2026-09-18 (pathname-check nav suppression, 16:9 framed video, Sutro player retained, Mux poster, credits deferred): one narrow outcome, known implementation pattern, bounded file surface, practical validation path; offered per the user's standing preference and selected by the user 2026-09-18
- **Base/default branch:** `master`
- **Initiative branch:** `dev/2026-09-18-project-page-layout` <!-- evidence recorded below after branch creation -->
- **Branch policy:** `required` — selected: `required` (local only; agents never push)
- **Branch naming convention:** `dev/YYYY-MM-DD-short-slug` — no override
- **Branch capability/evidence:** confirmed 2026-09-18 by dispatched coding session — workflow state committed locally to `master` as `341b8b7` (80 files; includes replacing the prior workflow installation the user had already removed from the working tree); branch `dev/2026-09-18-project-page-layout` created from `master` at `341b8b7` and checked out; working tree clean after checkout; no remote operations performed
- **Reduced-capability fallback or opt-out evidence:** not applicable — Git fully available; CLI authority routes to coding sessions per manifest policy
- **Branch creation failure:** `none` | `recorded below` — `none`
- **Validation cadence:** `per work order` | `consolidated` | `custom` — selected: `per work order`
- **Phase transition evidence:** initiative created 2026-09-18 from the initialization handoff (manifest status `complete`; recommended first initiative recorded in [Decisions and handoff](../../project-manifest.md#decisions-and-handoff)); `draft` → `plan` 2026-09-18 — user requested work-order creation on the rapid track after confirming all design defaults; three work orders created (WO-001 nav suppression, WO-002 video-first order, WO-003 framed video); `plan` → `review` → `execute` 2026-09-18 — rapid path: design-readiness confirmation recorded in lieu of full design review (see Design readiness checklist); user waived intermediate human gates until closeout; WO-001 dispatched to fresh implementer session `impl-WO-001-2026-09-18-1`; `execute` ↔ `validate` alternated per work order (six dispatches, all logged in the execution log); `validate` → `closeout` 2026-09-18 — all three work orders `complete` with passed fresh-session validations; closeout preconditions verified and follow-ups recorded in the execution log; the user's visual verification + closeout approval is the remaining gate before commit/merge and the `closed` status flip
- **Direct-translation confirmation:** `not needed` | `requested and confirmed` — evidence: `not needed` (initial prompt was a focus area, not a broad authorization; scope converges with the user)

## Standard artifact locations

- **Authoritative plan:** [`project-page-layout-v1.md`](project-page-layout-v1.md)
- **Design review:** [`reviews/design-review.md`](reviews/design-review.md)
- **Validations:** `validations/validation-[work-order-id].md`
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/)

## Outcome

A refined layout for the individual project pages (`/projects/[slug]`), approved by the user: video-first page order, main nav suppressed, and a gutter-framed true-16:9 video with fullscreen-capable controls and a Mux poster. **Converged 2026-09-18; work orders to be created on the user's request.**

## Initiative boundary and sizing

- **Parent roadmap or product goal:** ongoing maintenance and polish of the ACME marketing site (see [Product overview](../../requirements/product-overview.md)); first initiative per the initialization handoff
- **Initiative type:** `workspace foundation` | `product MVP stage` | `A/B experiment` | `plausibility branch` | `other` — selected: `other` (baseline-contract refinement of an existing feature)
- **Single observable outcome:** the project detail pages present ACME's work in an improved layout that the user approves
- **Validation boundary:** `pnpm build` + `pnpm lint` pass, plus the user's visual verification of the affected pages (per manifest policy)
- **Split assessment:** `keep as one initiative` | `split into linked initiatives` — decision: `keep as one initiative` (single page family, single outcome)
- **If split, traceability and dependencies:** not applicable

## Scope

### In scope

- The project detail route presentation — [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx), [`components/project/`](../../../components/project/) components, and related styling/tokens
- Suppression of the global nav bar on project detail pages — [`components/ui/NavBar.tsx`](../../../components/ui/NavBar.tsx) behavior (and [`app/layout.tsx`](../../../app/layout.tsx) restructuring only if the route-group option is chosen)

### Out of scope

- Catalog data-model changes (none required — the title/video reorder is presentational; [`constants/projects.ts`](../../../constants/projects.ts) is expected to remain untouched), other pages, SEO/metadata behavior, and the remnant-component cleanup (separate follow-up)

## Context and motivation

The user identified the individual project pages as the first area to improve. The current baseline is documented in [`requirements/features/project-detail.md`](../../requirements/features/project-detail.md) and [`blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md): a title header, ordered content blocks (video-first today), and a closing CTA.

## Exploration scratchpad

### Initial findings

- All four catalog projects are single-video pages: a lone Mux video block, auto-featured full-bleed (`md:h-[85vh]`), with credits text blocks commented out in the catalog ([`constants/projects.ts`](../../../constants/projects.ts)).
- `ProjectContent` computes composition archetypes (`film-first`, `case-study`, `behind-the-scenes`) and applies a `composition-*` class, but only `film-first` is exercised by current data.
- The page closes with a "Discuss a project" CTA and a "Back to Projects" link.
- Baseline checks (2026-09-18): `pnpm build` passes; `pnpm lint` fails only in remnant files unrelated to this initiative.
- **Title/video order is page structure, not catalog data (2026-09-18).** `title`/`subtitle` are separate `Project` fields rendered by the page route's `Header variant="text"` ahead of `ProjectContent` ([`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx)); the catalog's `content` array only orders blocks relative to each other. Reordering the title below the video is a JSX change in the page route — no catalog change required.
- **The main nav is global root-layout chrome (2026-09-18).** `NavBar` renders once in [`app/layout.tsx`](../../../app/layout.tsx) for every route, fixed at the top (`z-40`), and the text `Header` clears it with `pt-32 md:pt-40` padding. Suppressing it on `/projects/[slug]` is a layout-structure decision (see [Options considered](#options-considered)).
- **Featured video framing is full-bleed by construction (2026-09-18).** `ProjectContent` renders featured videos in a `Section` with no `ContentWrapper`, and `VideoBlock` frames them `w-full … md:h-[85vh]`. On typical desktop widths the 85vh frame is wider than 16:9, so the letterboxed video shows black side bars (browsers default video to `object-fit: contain`).
- **Fullscreen-capable controls already ship (2026-09-18).** `VideoBlock` passes `controls` to next-video's `<Video>`, whose default player is the player.style "Sutro" theme over Media Chrome (`next-video@2.8.1` bundles `media-chrome` + `player.style`); the control bar includes play, seek, volume, and a fullscreen toggle, auto-hidden during playback.
- **No poster is passed today (2026-09-18).** The Mux players render without a poster image, so the pre-play frame can read as a black rectangle; a poster is derivable from the playback ID (`image.mux.com/{playbackId}/thumbnail.jpg`).

### Questions and hypotheses

- ~~What specifically does the user want improved: header treatment, media framing/scale, spacing/rhythm, credits presentation, or the closing section?~~ Answered 2026-09-18: video-first ordering, no main nav on project pages, gutter margins with fullscreen-capable controls.
- Should the commented-out credits blocks return as part of the new layout? — Resolved 2026-09-18: credits stay commented out for now (deferred).
- Are there reference pages (internal or external) that express the target look? — Resolved 2026-09-18: none supplied; the converged design relies on the user's direction and existing site tokens.
- How should the nav be suppressed — a pathname check inside `NavBar` (minimal) or a route-group restructure of `app/` (idiomatic)? — Resolved 2026-09-18: pathname check.
- With the nav gone, what back-navigation affordance (if any) replaces it at the top of the page, beyond the existing bottom "Back to Projects" link? — Resolved 2026-09-18: none added; the existing bottom link (plus browser back) suffices.
- Does the Footer remain on project pages? — Resolved 2026-09-18: yes.
- Should the featured frame stay cinematic (`md:h-[85vh]`, letterboxed) or become a true 16:9 frame at all breakpoints? — Resolved 2026-09-18: true 16:9 frame.
- Should a Mux poster be added so the pre-play frame isn't black? — Resolved 2026-09-18: yes.

### Options considered

| Concern           | Option                                                                                                 | Benefits                                                      | Costs/risks                                                         | Current direction                           |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------- |
| Title/video order | Reorder JSX in the page route (video first, then title/subtitle)                                       | No data-model change; single-file edit                        | Rebalance the text header's nav-clearing padding (`pt-32 md:pt-40`) | confirmed 2026-09-18                        |
| Nav suppression   | Pathname check inside `NavBar` (already a client component using `usePathname`)                        | Small change; no file moves; trivially reversible             | Routing policy lives inside a UI component                          | confirmed 2026-09-18                        |
| Nav suppression   | Route groups (`app/(site)/` with nav layout; project detail pages outside it)                          | Idiomatic Next.js structure; nav absence is structural        | Moves every route file; larger diff mid-initiative                  | rejected for now; revisit if the site grows |
| Video margins     | Wrap the featured video in `ContentWrapper variant="full"` (global gutter, no max-width)               | Reuses the `--page-gutter` token; consistent with site rhythm | None significant                                                    | confirmed 2026-09-18                        |
| Video margins     | Cap width at `--measure-wide` (80rem)                                                                  | More contained on very large screens                          | Less immersive on wide displays                                     | not selected                                |
| Frame shape       | `aspect-video` at all breakpoints (true 16:9, no letterbox bars)                                       | Video reads as framed artwork; no black bars                  | Loses the 85vh cinematic height on tall viewports                   | confirmed 2026-09-18                        |
| Frame shape       | Keep `md:h-[85vh]` cinematic frame                                                                     | Maximum impact                                                | Black side bars on typical desktop widths                           | rejected 2026-09-18                         |
| Controls          | Keep the Sutro/Media Chrome player; verify discoverability; optionally theme via CSS custom properties | Fullscreen already included; no new dependencies              | Chrome auto-hides during playback (may read as "no controls")       | confirmed 2026-09-18                        |
| Controls          | Swap player theme or build custom controls                                                             | Full visual control                                           | New surface to build and maintain                                   | rejected 2026-09-18                         |

### Decisions and discussion notes

- 2026-09-18: user selected project page layout as the first initiative focus during initialization intake.
- 2026-09-18: user direction recorded — (1) the video becomes the prominent, leading element (title/subtitle move below it), (2) the main nav bar is removed on project detail pages, (3) the video block gains gutter margins and exposes fullscreen-capable controls. Open sub-decisions: nav-suppression approach, back-navigation affordance, frame shape, poster, credits return.
- 2026-09-18: user confirmed all recommended defaults — pathname-check nav suppression, true 16:9 framed video with `--page-gutter` margins, Sutro (Media Chrome) player retained with fullscreen, Mux poster added, credits stay commented out, no additional top back-link, Footer remains. Design converged; work orders to be created on the user's request.
- 2026-09-18: user selected the rapid initiative path when offered upon convergence (per standing preference); mode metadata updated. On the user's request, create work orders and proceed through per-work-order validation and closeout.
- 2026-09-18: `draft` → `plan` on the user's request; work orders created in dependency order — WO-001 (nav suppression, no dependencies), WO-002 (video-first order, depends on WO-001), WO-003 (framed 16:9 video with gutters/poster/controls, depends on WO-002). Sequential execution; each work order dispatches to a fresh implementer session with per-work-order validation.
- 2026-09-18: user authorized continuing the rapid path without further gating until closeout ("continue the rapid path, and don't gate again until we're ready to closeout the initiative") — recorded as the standing authority for the `review` → `execute` gate bypass; per-work-order validation sessions still run; the user's visual verification of the affected pages remains the closeout approval gate.
- 2026-09-18: at the closeout gate the user requested iteration-2 changes (viewport-balanced video spacing, an "X" close affordance — reversing the "no additional top back-link" decision — and a tighter Projects listing header) plus process directives (efficiency, verification reduced to git-diff scope review + build/lint, no browser automation, no gating until iteration 2 completes). Authoritative plan version moved to [`project-page-layout-v2.md`](project-page-layout-v2.md); v1 closeout (commit/merge/status flip) is deferred until iteration 2 completes and the user approves.

### Next investigation or conversation focus

- Plan phase 2026-09-18: work orders created (WO-001 → WO-002 → WO-003). Next: on the user's dispatch approval, run the rapid path — design-readiness confirmation, then the orchestrator execution loop (fresh implementer session per work order, fresh validation session per work order), then closeout.

## Requirements and blueprint references

- **Requirements:** [`requirements/features/project-detail.md`](../../requirements/features/project-detail.md) — REQ-PDET-001…004 (this initiative will likely revise the presentation requirements; durable-document impact classified per work order)
- **Blueprints:** [`blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md); [`blueprints/components/presentation-foundation.md`](../../blueprints/components/presentation-foundation.md); [`blueprints/components/media-delivery.md`](../../blueprints/components/media-delivery.md)

## Proposed design

Confirmed by the user 2026-09-18 (all recommended defaults).

### 1. Video-first page order

`/projects/[slug]` renders the featured video first; the title/subtitle `Header variant="text"` moves below `ProjectContent`, ahead of the closing CTA section. The header's nav-clearing padding (`pt-32 md:pt-40`) is rebalanced to normal section rhythm because the nav is suppressed on these pages. No catalog change: `title`/`subtitle` remain page fields in [`constants/projects.ts`](../../../constants/projects.ts); only the page route's JSX order changes.

### 2. Main nav suppressed on project detail pages

Recommended: `NavBar` (already a client component with `usePathname`) renders nothing when the pathname matches a project detail route (`/projects/{slug}`); all other routes keep the nav. The structural alternative — route groups with a nav-less layout for project detail pages — is recorded in [Options considered](#options-considered) and remains available if preferred. The Footer stays. Back navigation relies on the existing "← Back to Projects" link and browser back; no additional top-of-page affordance (confirmed 2026-09-18).

### 3. Framed video with fullscreen-capable controls

The featured video keeps its `Section` but gains `ContentWrapper variant="full"` — the global `--page-gutter` margin on both sides instead of edge-to-edge bleed. The frame becomes `aspect-video` at all breakpoints (no letterbox bars; height follows width) — confirmed 2026-09-18; on 16:9 displays a full-width 16:9 frame naturally lands near today's 85vh height, minus the black bars. Controls: keep next-video's default Sutro (Media Chrome) player, which already includes a fullscreen toggle; the implementing work order verifies discoverability (visible on load and touch, auto-hide behavior) and may theme it via CSS custom properties. Confirmed: pass the Mux poster derived from the playback ID so the pre-play frame isn't black.

## Work-order plan

Created 2026-09-18 (rapid path, sequential execution, per-work-order validation):

1. [`WO-001-suppress-nav-project-pages.md`](work-orders/WO-001-suppress-nav-project-pages.md) — suppress the main nav on `/projects/{slug}` via a pathname check in `NavBar`; no dependencies
2. [`WO-002-video-first-page-order.md`](work-orders/WO-002-video-first-page-order.md) — reorder the page route so the video renders before the title/subtitle header; rebalance the header's nav-clearing padding, scoped to project pages; depends on WO-001
3. [`WO-003-framed-video-gutters-poster.md`](work-orders/WO-003-framed-video-gutters-poster.md) — gutter-framed 16:9 featured video, Mux poster, Sutro controls/fullscreen verification; depends on WO-002

Each work order carries its durable-document impact classification (WO-001: blueprint update; WO-002: requirements + blueprint update; WO-003: requirements + blueprint update) and dispatches to a separate fresh implementer session followed by a fresh validation session.

## Risks and decisions

- **Risk:** layout changes may alter documented baseline behavior — **Mitigation:** work orders classify requirements/blueprint impact and update [`project-detail.md`](../../requirements/features/project-detail.md) as authorized
- **Decision needed:** the concrete layout direction — **Owner:** John Wildauer — resolved 2026-09-18 (see [Proposed design](#proposed-design))

## Design readiness checklist

- [x] Scope and exclusions are explicit.
- [x] The initiative has one observable outcome and one named validation boundary.
- [x] The initiative is traceable to its roadmap or parent product goal, including any staged MVP relationship.
- [x] The advisory split assessment is recorded; any split initiatives have distinct outcomes, dependencies, and review/closeout boundaries.
- [x] Requirements and blueprints are linked.
- [x] Work orders are independently executable and ordered.
- [x] Every work order carries a durable-document impact classification per [`00-overview.md`](../../process/00-overview.md).
- [x] Initiative mode metadata (mode, requested by, confirmation, eligibility) is recorded.
- [x] Phase transition evidence and the direct-translation confirmation (when applicable) are recorded.
- [x] Validation cadence is recorded.
- [x] Validation commands and manual gates are identified.
- [x] Required human approval has been obtained or is pending at the documented gate.

Design-readiness confirmed 2026-09-18 (rapid path): all checklist items satisfied; this confirmation replaces the full design-review gate per the rapid-mode policy. Human gate authority: the user instructed "continue the rapid path, and don't gate again until we're ready to closeout the initiative" (2026-09-18) — intermediate human gates are waived until closeout; per-work-order validation sessions still run; the user's visual verification of the affected pages remains the closeout approval gate.
