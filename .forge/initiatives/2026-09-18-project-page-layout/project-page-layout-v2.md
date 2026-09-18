# Initiative: Project Page Layout — Iteration 2

## Initiative metadata

- **Phase:** `draft` | `plan` | `review` | `execute` | `validate` | `closeout` — selected: `execute`
- **Status:** `active` | `blocked` | `closed` — selected: `active`
- **Owner/orchestrator:** John Wildauer (owner) / Zoo orchestrator sessions
- **Created:** 2026-09-18
- **Updated:** 2026-09-18
- **Authoritative version:** `v2` — supersedes [`project-page-layout-v1.md`](project-page-layout-v1.md) for iteration 2; v1 retained for history
- **Initiative mode:** `standard` | `rapid` — selected: `rapid`
- **Mode requested by:** `user` — explicit request 2026-09-18 ("proceed directly into rapid mode")
- **Mode confirmation:** confirmed 2026-09-18 — the user's iteration-2 prompt is the direct authorization; no further gating until iteration 2 completes
- **Rapid-mode eligibility:** `eligible` — narrow outcome (three small polish changes in one page family), known implementation pattern, bounded file surface, practical validation path (git-diff scope review + build/lint)
- **Base/default branch:** `master`
- **Initiative branch:** `dev/2026-09-18-project-page-layout` — iteration 2 continues on the same branch; iteration-1 changes remain uncommitted pending the combined closeout
- **Branch policy:** `required` (unchanged from v1)
- **Validation cadence:** `per work order` — iteration-2 reduced scope per user directive 2026-09-18: validation = git-diff scope review (confirm the execution agent didn't go rogue) + `pnpm build`/`pnpm lint`; browser automation waived ("reviewers can forgo the playwright verification"); the user visually confirms all changes after implementation and is the approval gate
- **Phase transition evidence:** created 2026-09-18 from the v1 closeout gate — the user reviewed iteration 1 and requested three changes plus process directives (efficiency, reduced verification, no gating until iteration 2 completes); `plan` → `execute` the same day on that standing authorization; WO-004 dispatched to `impl-WO-004-2026-09-18-1`
- **Direct-translation confirmation:** `requested and confirmed` — the user's iteration-2 prompt directly authorizes the three changes and instructs proceeding directly to work orders and implementation

## Standard artifact locations

- **Authoritative plan:** [`project-page-layout-v2.md`](project-page-layout-v2.md)
- **Design review:** not applicable for iteration 2 — rapid path; the user's direct authorization replaces the design-review gate
- **Validations:** `validations/validation-[work-order-id].md` (iteration 2 adds `validation-WO-004.md`)
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/) (iteration 2 adds WO-004)

## Outcome

Iteration-2 polish of the project pages per the user's iteration-1 closeout feedback: a viewport-balanced video frame with even spacing, an "X" close affordance returning to the projects listing, and a tighter Projects listing title block — approved via the user's visual confirmation after implementation.

## Scope

### In scope

- Featured video framing balance — [`components/project/ProjectContent.tsx`](../../../components/project/ProjectContent.tsx), [`components/project/VideoBlock.tsx`](../../../components/project/VideoBlock.tsx), section padding as needed
- "X" close affordance on project detail pages — [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx)
- Projects listing title block tightening — [`app/projects/page.tsx`](../../../app/projects/page.tsx), [`components/ui/Header.tsx`](../../../components/ui/Header.tsx) (only if the text-variant override needs extending)

### Out of scope

- Player replacement/re-theming, catalog changes, other pages' headers, SEO/metadata, remnant-component cleanup (separate follow-up), and any change to the validated WO-001/002/003 behavior beyond the three items above

## Context and motivation

Iteration 1 delivered video-first, nav-less, gutter-framed 16:9 project pages; all three work orders passed validation. At the closeout gate the user reviewed the result and requested: (1) even spacing around the video — today there is a visible gap above the video but the video's bottom extends past the viewport ("hanging down past the bottom of the page"), because the 16:9 frame at full available width is taller than the visible viewport; slightly larger side margins are acceptable if needed for balance; (2) a small "X" in the top-right corner to close out of the project and return to `/projects` — with the nav gone, project pages should feel like they render on top of the projects page (this reverses iteration 1's "no additional top back-link" decision); (3) a tighter Projects listing title block so the project cards feel more dominant. The user also directed: prioritize efficiency and cost, reduce verification to a git-diff scope check plus build/lint (no browser automation; the user visually confirms afterward), and do not gate until iteration 2 completes.

## Proposed design

Confirmed by direct user authorization 2026-09-18.

### 1. Viewport-balanced video framing

Cap the featured frame so the entire video plus its section padding fits the viewport: frame width = min(available width, viewport-height-derived width), centered, true 16:9 preserved (no letterbox). Top/bottom spacing comes from the section padding and becomes visible on both sides once the height is capped; side margins may grow slightly on short viewports — explicitly acceptable per the user. Implementation note: `.section--gallery`'s unlayered `padding-block: clamp(1.5rem, 4vw, 3rem)` in [`app/globals.css`](../../../app/globals.css) overrides Tailwind `py-*` utilities on the section (unlayered author CSS beats layered utilities), so padding adjustments must target the right mechanism.

### 2. "X" close affordance

A fixed top-right "×" control on project detail pages linking to `/projects`, inset by the page gutter, z-index above content, subtly styled with existing tokens, with an accessible label (e.g., "Close project — back to Projects"). Project pages should read as an overlay on the projects page.

### 3. Tighter Projects listing title block

Reduce the listing page's title-block padding and min-height so the project grid starts higher and dominates; the top padding must still clear the fixed NavBar (the listing keeps the nav). Scope to the listing page only — other pages' headers unchanged. Mechanism: the existing `textPaddingClassName` override and, if needed, a smallest-coherent extension covering the text variant's min-heights.

## Work-order plan

Created 2026-09-18 (rapid path; single consolidated work order for efficiency per the user's directive; one implementer session, one reduced-scope validation session):

1. [`WO-004-iteration2-polish.md`](work-orders/WO-004-iteration2-polish.md) — all three changes: viewport-balanced video framing, "X" close affordance, tighter listing header; depends on WO-001/002/003 (all complete)

## Risks and decisions

- **Risk:** viewport-height math varies with browser chrome, zoom, and aspect ratios — **Mitigation:** centering plus the user's visual confirmation after implementation
- **Risk:** the fixed "X" could collide with player chrome on small screens — **Mitigation:** gutter inset and modest sizing; user visual confirmation
- **Decision:** iteration 1's "no additional top back-link" is reversed — the user requested the "X" close affordance (2026-09-18)
- **Decision:** verification scope reduced to git-diff scope review + build/lint per the user's directive; browser automation waived; the user's visual confirmation is the approval gate

## Design readiness checklist

- [x] Scope and exclusions are explicit.
- [x] The initiative has one observable outcome and one named validation boundary (git-diff scope review + build/lint; user visual confirmation as the approval gate).
- [x] The initiative is traceable to its roadmap or parent product goal (iteration 2 of the project page layout initiative).
- [x] The advisory split assessment: kept as one iteration — three small changes, one page family, single outcome.
- [x] Requirements and blueprints are linked (via WO-004).
- [x] Work orders are independently executable and ordered (single WO-004).
- [x] Every work order carries a durable-document impact classification per [`00-overview.md`](../../process/00-overview.md).
- [x] Initiative mode metadata (mode, requested by, confirmation, eligibility) is recorded.
- [x] Phase transition evidence and the direct-translation confirmation are recorded.
- [x] Validation cadence is recorded (reduced scope per user directive).
- [x] Validation commands and manual gates are identified (build/lint + git diff; user visual confirmation).
- [x] Required human approval: the user's post-implementation visual confirmation, per their instruction.
