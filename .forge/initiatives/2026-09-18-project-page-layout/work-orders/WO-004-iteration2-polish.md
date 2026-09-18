# Work Order: WO-004 — Iteration-2 Polish: Balanced Video, Close Affordance, Tighter Listing Header

## Metadata

- **Status:** `complete`
- **Assignee:** `impl-WO-004-2026-09-18-1` (fresh code-mode implementer session)
- **Phase/order:** 4 (iteration 2; depends on WO-001/002/003, all complete)
- **Initiative:** [`../project-page-layout-v2.md`](../project-page-layout-v2.md) (authoritative version)
- **Generated filename:** `WO-004-iteration2-polish.md`
- **Owner/orchestrator:** John Wildauer / Zoo orchestrator sessions
- **Validation:** [`../validations/validation-WO-004.md`](../validations/validation-WO-004.md)
- **Fixes:** `none`
- **Implementer session/agent ID:** `impl-WO-004-2026-09-18-1`
- **Session exception:** `none`

## Summary

Three user-requested polish changes from the iteration-1 closeout review, consolidated into one work order per the user's efficiency directive: (1) cap the featured video so it fits the viewport with even spacing, (2) add a fixed top-right "X" close affordance linking to `/projects`, (3) tighten the Projects listing title block.

## In scope

- **Balanced video framing:** the featured video plus its section padding fits the viewport — frame width = min(available width, viewport-height-derived width), centered, true 16:9, no letterbox; even top/bottom spacing; slightly larger side margins acceptable on short viewports
- **Close affordance:** a fixed top-right "×" link to `/projects` on project detail pages, page-gutter inset, above content, accessible label, subtle existing-token styling
- **Listing header:** reduced title-block padding/min-height on `/projects` (top padding still clears the fixed NavBar); other pages unchanged

## Out of scope

- Player replacement/re-theming, catalog changes, other pages' headers, remnant lint fixes, and changes to validated WO-001/002/003 behavior beyond the three items above

## Requirements

- **REQ-PDET-002** (framing): AC-PDET-002.2 (revised by WO-003 to gutter-framed 16:9) is revised again to viewport-balanced framing — copy the current AC text from [`requirements/features/project-detail.md`](../../../../.forge/requirements/features/project-detail.md) and revise it when applying the update.
- **REQ-PDET-004** (conversion paths): AC-PDET-004.2 ("Back to Projects" link) — this work order adds the "X" close affordance as an additional back-navigation path; record it in the requirements.
- **Projects listing:** check [`requirements/features/projects-listing.md`](../../../../.forge/requirements/features/projects-listing.md) for header-padding statements; update only if this change makes them inaccurate.

## Blueprints

- [`blueprints/components/media-delivery.md`](../../../../.forge/blueprints/components/media-delivery.md) — featured-framing contract (currently gutter-framed 16:9) updates to viewport-balanced
- [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) — framing + close-affordance composition
- [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) — Header text-variant override, if extended for min-heights

## Implementation plan

1. **Video balance** — [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx) featured frame and/or [`components/project/ProjectContent.tsx`](../../../../components/project/ProjectContent.tsx) featured branch: cap the frame to the viewport, e.g. frame class `relative mx-auto aspect-video w-[min(100%,calc((100svh-8rem)*16/9))] overflow-hidden` (tune the `8rem` ≈ twice the section padding plus breathing room), or an equivalent mechanism. Keep the `ContentWrapper variant="full"` gutter as the minimum side margin; the centered narrower frame adds margin on short viewports. Note: `.section--gallery`'s unlayered `padding-block: clamp(1.5rem, 4vw, 3rem)` in [`app/globals.css`](../../../../app/globals.css) overrides Tailwind `py-*` utilities on the section — adjust padding via the CSS class or inline styles, not Tailwind py utilities on the same element.
2. **Close affordance** — [`app/projects/[slug]/page.tsx`](../../../../app/projects/[slug]/page.tsx): add a fixed close link (top-right, e.g. `fixed top-[var(--page-gutter)] right-[var(--page-gutter)] z-40`, "×" glyph, `aria-label="Close project — back to Projects"`, subtle styling with existing tokens — e.g. `shell-cta` at small size or a minimal bordered control) linking to `/projects`.
3. **Listing header** — [`app/projects/page.tsx`](../../../../app/projects/page.tsx): pass a tighter `textPaddingClassName` (top padding still clears the fixed NavBar — at least ~6rem, e.g. `pt-24 pb-6 md:pt-28 md:pb-8` or tighter) and reduce the title block's min-heights if needed via the smallest coherent extension of the Header text-variant override ([`components/ui/Header.tsx`](../../../../components/ui/Header.tsx)); all other pages' headers must render identically.

## Files and systems

- **Update:** `components/project/VideoBlock.tsx`, `components/project/ProjectContent.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `components/ui/Header.tsx` (only if the override is extended), `app/globals.css` (only if section padding is tuned there), plus the authorized durable documents
- **Avoid changing:** `constants/projects.ts`, `components/ui/NavBar.tsx`, other pages, player internals

## Validation and E2E acceptance tests

**Reduced scope per user directive 2026-09-18 — no browser automation; the user visually confirms all changes after implementation.**

- **Automated checks:** `pnpm build`, `pnpm lint` (pre-existing baseline failures in `components/Banner.tsx` and `utils/componentMap.ts` expected; do not fix)
- **Scope check:** the validator reviews the git diff to confirm the change set matches this work order and contains no rogue changes
- **Acceptance test (assessed from the diff):** the featured frame is viewport-capped and centered at 16:9; the close link is present, fixed top-right, and points to `/projects`; the listing header passes a tighter padding override while other pages' Header calls are unchanged

## Durable-document impact

- **Requirements impact:** `update` — selected: `update`
- **Blueprint impact:** `update` — selected: `update`
- **Affected documents/IDs:** `requirements/features/project-detail.md` (AC-PDET-002.2 framing wording; REQ-PDET-004 close-affordance addition); `requirements/features/projects-listing.md` (verify unchanged unless it documents header padding); `blueprints/components/media-delivery.md` (framing contract); `blueprints/features/project-detail.md` (composition); `blueprints/components/presentation-foundation.md` (Header override, if extended)
- **Rationale and evidence:** the framing change revises the freshly updated AC-PDET-002.2 wording; the close affordance adds a user-facing navigation path to REQ-PDET-004; the blueprint framing contracts reference the gutter-framed rule this work order refines
- **Authorized documentation changes:** the revisions listed above, kept minimal and accurate

## Implementation record (impl-WO-004-2026-09-18-1)

**Session/agent ID:** `impl-WO-004-2026-09-18-1` (fresh code-mode implementer session; dispatched by `zoo-architect-2026-09-18`); branch verified `dev/2026-09-18-project-page-layout` (working tree before implementation contained only orchestrator planning artifacts).

**Changed files (no files created or deleted):**

- `components/project/VideoBlock.tsx` — featured `frameClass` → `relative mx-auto aspect-video w-[min(100%,calc((100svh-8rem)*16/9))] overflow-hidden`: true 16:9, width capped by the viewport height (`100svh` minus `8rem` ≈ twice the section padding plus breathing room), centered via `mx-auto` so short viewports gain even, balanced spacing; the `ContentWrapper variant="full"` gutter in `ProjectContent` remains the minimum side margin. Non-featured frame unchanged (also resolves the WO-003 identical-branches ternary note: the featured branch now genuinely differs).
- `app/projects/[slug]/page.tsx` — added the fixed top-right close affordance: a `Link` to `/projects` at `fixed top-[var(--page-gutter)] right-[var(--page-gutter)] z-40`, "×" glyph (`aria-hidden`, the link carries `aria-label="Close project — back to Projects"`), styled with existing tokens (`border-[var(--border-subtle)]`, `bg-[var(--surface-translucent)]`, hover to `var(--text-primary)`/`var(--text-inverse)` — the `shell-cta` hover pattern at small size). No changes to the video-first order, Header call, or closing CTA.
- `app/projects/page.tsx` — listing-only header tightening: `Header variant="text"` now passes `textPaddingClassName="pt-24 pb-6 md:pt-28 md:pb-8"` (top padding clears the fixed NavBar, ≥6rem) and `textMinHeightClassName="min-h-0 md:min-h-0"`. Other pages' `Header` calls untouched.
- `components/ui/Header.tsx` — smallest-coherent extension of the text-variant override: new optional `textMinHeightClassName` prop replacing the default `min-h-[16rem] md:min-h-[20rem]` (same replacement-not-append mechanism as `textPaddingClassName`); callers passing nothing render byte-identically as before (`/`, `/services`, `/stage` unaffected).
- `app/globals.css` — **not changed**: the featured `Section` retains its Tailwind `py-6 md:py-8` classes and the viewport cap does the balancing; the `.section--gallery` unlayered `padding-block` note was respected (no conflicting `py-*` adjustment was attempted — the `100svh - 8rem` reserve accounts for the clamp padding).
- `.forge/requirements/features/project-detail.md` — authorized update: AC-PDET-002.2 revised to viewport-balanced framing; new AC-PDET-004.3 (fixed top-right "×" close affordance); "Featured video" Terminology entry updated and a "Close affordance" entry added. AC-PDET-002.1/002.3–002.6, AC-PDET-004.1/004.2 verified unchanged and accurate.
- `.forge/blueprints/components/media-delivery.md` — authorized update: `VideoBlock` featured-framing responsibility and the Featured framing contract → viewport-balanced 16:9 (with the actual cap formula recorded).
- `.forge/blueprints/features/project-detail.md` — authorized update: Feature Summary mentions the close affordance; new "Close affordance" Key Contract; Featured inference contract updated to viewport-balanced; REQ-PDET-002/004 alignment rows updated.
- `.forge/blueprints/components/presentation-foundation.md` — authorized update: `Header` block records the `textMinHeightClassName` extension and the listing's tighter override values.
- `.forge/requirements/features/projects-listing.md` — verified unchanged: it documents no header-padding statements, so the listing change makes nothing in it inaccurate.
- `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-004-iteration2-polish.md` — this implementation record; status set to `in-review`.
- `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — chronological entry appended.

**Work-order assumptions verified before implementation:** the featured frame was `w-full aspect-video` inside `ContentWrapper variant="full"` (so at typical desktop widths its height exceeded `100svh`, matching the user's "video hangs past the viewport bottom" report); `.section--gallery` carries the unlayered `padding-block: clamp(1.5rem, 4vw, 3rem)` noted in the work order; the listing `Header` used the default text-variant padding/min-heights; `textPaddingClassName` was the only text-variant override. No material discrepancies.

**Validation results (2026-09-18):**

- `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; compiled in 2.8s; 14/14 routes generated including the four SSG project detail pages).
- `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning (unused `isReversed`), `utils/componentMap.ts` 9:48 error (`no-explicit-any`) — remnant files matching the recorded baseline; no findings in any changed file; not fixed (out of scope).
- Scope check: the diff touches only the five authorized code files plus the authorized durable documents; no catalog, NavBar, player, or other-page changes. Per the reduced validation scope, browser automation is waived — the user visually confirms all three changes after implementation.

## Completion checklist

- [x] Implementation is complete within scope.
- [x] Tests/checks and required gates have evidence (build/lint; git-diff scope review by the validator; user visual confirmation to follow).
- [x] Durable-document impact classification is accurate against the diff, and authorized documentation updates are applied.
- [x] Execution log is appended, including dispatch and completion session/agent identifiers.
- [x] Work order is `in-review` with recorded evidence, and completion (`complete`) comes only from a passed validation in `validations/validation-WO-004.md`.

**Completion record (2026-09-18):** set to `complete` by the user's explicit closeout directive at the end of iteration 3 — the user reviewed the delivered behavior ("otherwise, everything looks good") and directed the combined closeout; the batched validation session (the planned `validations/validation-WO-004.md`) was waived by this gate-owner decision and is recorded in [`../execution-log.md`](../execution-log.md). Standing evidence: `pnpm build` pass, lint baseline-only, and the user's visual verification of the delivered changes.
