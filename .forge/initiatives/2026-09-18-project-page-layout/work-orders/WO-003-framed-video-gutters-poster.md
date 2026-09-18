# Work Order: WO-003 — Framed 16:9 Video with Gutters, Poster, and Fullscreen Controls

## Metadata

- **Status:** `complete` (passed validation in [`../validations/validation-WO-003.md`](../validations/validation-WO-003.md), 2026-09-18)
- **Assignee:** `impl-WO-003-2026-09-18-1` (fresh code-mode implementer session)
- **Phase/order:** 3 of 3 (depends on WO-002: the framed video is verified in its final position at the top of the page)
- **Initiative:** [`../project-page-layout-v1.md`](../project-page-layout-v1.md)
- **Generated filename:** `WO-003-framed-video-gutters-poster.md`
- **Owner/orchestrator:** John Wildauer / Zoo orchestrator sessions
- **Validation:** [`../validations/validation-WO-003.md`](../validations/validation-WO-003.md)
- **Fixes:** `none`
- **Implementer session/agent ID:** `impl-WO-003-2026-09-18-1`
- **Session exception:** `none`

## Summary

Reframes the featured video from edge-to-edge `md:h-[85vh]` full-bleed to a true 16:9 frame inset by the global page gutter, adds a Mux poster so the pre-play frame isn't a black rectangle, and verifies the existing Sutro (Media Chrome) player controls — including the fullscreen toggle — are discoverable. No player replacement and no new dependencies.

## In scope

- [`components/project/ProjectContent.tsx`](../../../../components/project/ProjectContent.tsx): wrap the featured video in `ContentWrapper variant="full"` (global `--page-gutter` margins, no max-width)
- [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx): featured frame becomes `aspect-video` at all breakpoints (remove `md:aspect-auto md:h-[85vh]`)
- [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx): pass a Mux poster derived from the playback ID (`https://image.mux.com/{playbackId}/thumbnail.jpg`) for `mux` sources
- Verify controls discoverability: controls visible on load and touch, fullscreen toggle present and functional

## Out of scope

- Player replacement, theme swap, or custom controls (the Sutro/Media Chrome default player is retained)
- Non-featured video framing (unchanged `aspect-video` + `wide` wrapper)
- Autoplay behavior changes (autoplay stays opt-in per block, forced muted + playsInline)
- Catalog changes ([`constants/projects.ts`](../../../../constants/projects.ts) remains untouched)
- The page reorder (WO-002) and nav suppression (WO-001)

## Requirements

Copy applicable requirement wording and acceptance criteria verbatim:

- **REQ-PDET-002: Video blocks play approved media**
  - **AC-PDET-002.1:** "Video blocks with a Mux source shall play via the Mux playback ID with visible controls."
  - **AC-PDET-002.2:** "A video block marked featured — or the sole video block of a project — shall render full-bleed (viewport-scale height on desktop)." _(revised by this work order to gutter-framed 16:9 — see Durable-document impact)_
  - **AC-PDET-002.3:** "Autoplay, when configured for a block, shall be muted and inline (plays inline, no audio surprise)."
  - **AC-PDET-002.4:** "Local-fixture sources shall render the placeholder video in place of production media."
  - **AC-PDET-002.5:** "The player shall expose an accessible title and a screen-reader status describing the video."

## Blueprints

- [`blueprints/components/media-delivery.md`](../../../../.forge/blueprints/components/media-delivery.md) — "Featured framing: featured videos render full-bleed (`md:h-[85vh]`); standard videos render at `aspect-video`" — the featured contract updates to the gutter-framed 16:9 rule; the poster addition extends the `VideoBlock` responsibilities
- [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) — Featured inference contract and REQ-PDET-002 alignment reference full-bleed framing

## Implementation plan

1. [`components/project/ProjectContent.tsx`](../../../../components/project/ProjectContent.tsx) — featured branch: wrap `VideoBlock` in `ContentWrapper variant="full"` inside the existing `Section`
2. [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx) — featured `frameClass` becomes `relative w-full aspect-video overflow-hidden` (drop `md:aspect-auto md:h-[85vh]`)
3. [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx) — for `mux` sources, pass `poster={`https://image.mux.com/${source.playbackId}/thumbnail.jpg`}` to the next-video `<Video>`; leave the local-fixture path without a poster (placeholder renders its own first frame)
4. Verify the Sutro control bar: visible before playback (over the poster), auto-hide behavior during playback acceptable, fullscreen toggle works on desktop and touch

## Files and systems

- **Update:** `components/project/ProjectContent.tsx`, `components/project/VideoBlock.tsx`
- **Avoid changing:** `constants/projects.ts`, `app/projects/[slug]/page.tsx`, `components/ui/*`, `app/globals.css` (the gutter comes from the existing `--page-gutter` token via `layout-wrapper--full`)

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm build`, `pnpm lint`
- **Manual/external checks:** all four project pages show the video inset by the page gutter at 16:9 with no black side bars on a typical desktop viewport; the Mux poster is visible before playback; the control bar (play, seek, volume, fullscreen) is reachable and the fullscreen toggle works; the local-fixture code path still compiles and renders the placeholder when exercised
- **Acceptance test:** Given a project detail page on a desktop viewport, when rendered, then the featured video is framed at 16:9 with `--page-gutter` margins on both sides, displays the Mux poster before playback, and the player controls include a working fullscreen toggle.

## Durable-document impact

- **Requirements impact:** `update` — selected: `update`
- **Blueprint impact:** `update` — selected: `update`
- **Affected documents/IDs:** [`requirements/features/project-detail.md`](../../../../.forge/requirements/features/project-detail.md) (AC-PDET-002.2; Terminology "Featured video"; poster behavior added to REQ-PDET-002); [`blueprints/components/media-delivery.md`](../../../../.forge/blueprints/components/media-delivery.md) (featured-framing contract; `VideoBlock` responsibilities); [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) (featured inference contract wording)
- **Rationale and evidence:** AC-PDET-002.2 explicitly mandates the old full-bleed behavior and must be revised to match the converged design; the media-delivery blueprint documents the old framing contract verbatim
- **Authorized documentation changes:** revise AC-PDET-002.2 to the gutter-framed 16:9 rule, update the "Featured video" terminology entry, add the poster behavior to REQ-PDET-002's acceptance criteria, and update the media-delivery/project-detail blueprint framing contracts accordingly

## Implementation record (impl-WO-003-2026-09-18-1)

**Session/agent ID:** `impl-WO-003-2026-09-18-1` (fresh code-mode implementer session; dispatched by `zoo-architect-2026-09-18`); branch verified `dev/2026-09-18-project-page-layout`.

**Changed files (no files created or deleted in the delivered change):**

- `components/project/ProjectContent.tsx` — featured video branch: `VideoBlock` now wrapped in `ContentWrapper variant="full"` inside the existing `Section` (global `--page-gutter` padding-inline on both sides, no max-width), replacing the edge-to-edge bleed; comment updated to record the new intent. Non-featured video, text, and image branches unchanged.
- `components/project/VideoBlock.tsx` — featured `frameClass` changed from `relative w-full aspect-video md:aspect-auto md:h-[85vh] overflow-hidden` to `relative w-full aspect-video overflow-hidden` (true 16:9 at all breakpoints, height follows width, no letterbox bars); non-featured frame class unchanged. Mux branch passes `poster={`https://image.mux.com/${source.playbackId}/thumbnail.jpg`}` to next-video's `<Video>`; local-fixture branch intentionally left without a poster. `controls`, `autoPlay={autoplay}`, `muted={autoplay}`, `playsInline`, `title`, and `aria-describedby` untouched.
- `.forge/requirements/features/project-detail.md` — authorized update: AC-PDET-002.2 revised from full-bleed to the gutter-framed 16:9 rule; new AC-PDET-002.6 (Mux poster derived from the playback ID before playback); "Featured video" Terminology entry updated. AC-PDET-002.1/002.3/002.4/002.5 unchanged — verified still accurate against the diff.
- `.forge/blueprints/components/media-delivery.md` — authorized update: featured-framing contract rewritten to gutter-framed 16:9; `VideoBlock` responsibilities record the poster-from-playback-ID behavior and a new Poster contract bullet.
- `.forge/blueprints/features/project-detail.md` — authorized update: Featured inference contract, `ProjectContent` responsibilities, and REQ-PDET-002 alignment row no longer reference full-bleed.
- `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-003-framed-video-gutters-poster.md` — this implementation record; completion checklist satisfied; status set to `in-review`.
- `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — chronological entry appended.

**Work-order assumptions verified before implementation:** the featured branch rendered with no ContentWrapper and `frameClass` contained `md:aspect-auto md:h-[85vh]`; no poster was passed; `layout-wrapper--full` applies `padding-inline: var(--page-gutter)` with `max-width: none`. No material discrepancies found.

**Validation results (2026-09-18):**

- `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; 14 routes including the four SSG project detail pages).
- `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning (unused `isReversed`), `utils/componentMap.ts` 9:48 error (`no-explicit-any`) — remnant files matching the recorded baseline; no findings in any changed file; not fixed (out of scope).
- Prerendered-HTML check (`.next/server/app/projects/*.html`, regex counts per page): all four project pages (`cadillac-future-iq`, `cadillac-future-iq-behind-the-scenes`, `polica-wasted-me`, `a-window-in-time-renewal-by-andersen`) show `layout-wrapper--full` ×2, `h-[85vh]` ×0, `aspect-video` ×1, and the Mux thumbnail URL `image.mux.com/{playbackId}/thumbnail.jpg` ×2 (preload link + player poster img). No `poster="` attribute appears in SSR HTML because next-video renders the poster as a styled `img` element — confirmed in the interactive check.
- Interactive check (Playwright against the running dev server, port 3000):
  - `/projects/cadillac-future-iq`: frame 1205×677.8 = ratio 1.7778 (exactly 16:9), `frameClass` = `relative w-full aspect-video overflow-hidden` with no `h-[85vh]` anywhere in the DOM; wrapper padding-inline 32px per side (`clamp(1.25rem, 3vw, 2rem)` capped at 2rem on the 1284px viewport); poster `img` `src` = `https://image.mux.com/b2V5InHCmI3DAvCVP00HJBuiMuFk7ETeDpT02QMFStzt00/thumbnail.jpg` — visible before playback (not a black rectangle).
  - `/projects/polica-wasted-me`: identical framing (ratio 1.7778, 32px gutters) and its own poster `image.mux.com/900Nx01jFo6OBmMcKZsL27M0100LmVTs8MRflGkVSLgxW00w/thumbnail.jpg`.
  - Sutro (Media Chrome) control bar discoverable before playback on both pages: play, mute, seek slider, playback time, settings, PiP, and **"enter fullscreen mode"** toggle all present over the poster; viewport screenshot saved as visual evidence. Player not replaced or re-themed.
- The user's visual verification of the pages remains the closeout gate (initiative validation boundary).

## Completion checklist

- [x] Implementation is complete within scope.
- [x] Tests/checks and required gates have evidence.
- [x] Durable-document impact classification is accurate against the diff, and authorized documentation updates are applied.
- [x] Execution log is appended, including dispatch and completion session/agent identifiers.
- [x] Work order is `in-review` with recorded evidence, and completion (`complete`) comes only from a passed validation in `validations/validation-WO-003.md`.
