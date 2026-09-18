# Execution Log

> This log is primarily for work-order execution. Do not use it as a transcript
> of every exploratory planning exchange; keep early findings and discussion in
> the initiative plan's exploration scratchpad. Append entries chronologically.
> Never rewrite prior entries to conceal failures, retries, or superseded
> decisions.

## Initiative

- **Initiative:** Project Page Layout (`.forge/initiatives/2026-09-18-project-page-layout/`)
- **Initiative mode:** `standard` | `rapid` — selected: `rapid`
- **Current phase:** `draft` | `plan` | `review` | `execute` | `validate` | `closeout` — selected: `closeout`
- **Current status:** `active` | `blocked` | `closed` — selected: `active`
- **Orchestrator:** Zoo architect session (orchestrator from draft through execution)
- **Orchestrator session/agent ID:** zoo-architect-2026-09-18

## Execution log entries

### 2026-09-18 — Execution begins (rapid path)

- **Branch decision (from initiative creation):** initiative branch `dev/2026-09-18-project-page-layout` created from `master` at `341b8b7` and checked out; working tree clean after checkout; no remote operations (full evidence in the initiative plan metadata). Implementation proceeds on this branch; commits are deferred to closeout per [`06-closeout.md`](../../process/06-closeout.md).
- **Gate authority:** user instruction 2026-09-18 — "continue the rapid path, and don't gate again until we're ready to closeout the initiative"; intermediate human gates waived until closeout; per-work-order validation sessions still run; the user's visual verification of the affected pages remains the closeout gate.
- **Dispatch 1 — WO-001 implementer:** session/agent ID `impl-WO-001-2026-09-18-1` (fresh code-mode session); work order set to `in-progress`; scope: suppress `NavBar` on `/projects/{slug}` per [`work-orders/WO-001-suppress-nav-project-pages.md`](work-orders/WO-001-suppress-nav-project-pages.md); dispatched by `zoo-architect-2026-09-18`.

### 2026-09-18 — WO-001 implemented with evidence (impl-WO-001-2026-09-18-1)

- **Session/agent ID:** `impl-WO-001-2026-09-18-1` (fresh code-mode implementer session; dispatched by `zoo-architect-2026-09-18`); branch verified `dev/2026-09-18-project-page-layout`.
- **Changed files (no files created or deleted):**
  - `components/ui/NavBar.tsx` — added pathname-based suppression: `isProjectDetail` derived from the existing `usePathname()` value (`pathname.startsWith("/projects/") && pathname.length > "/projects/".length`), early `return null` before rendering, placed after all hook calls (rules-of-hooks safe). The `/projects` listing and all other routes render exactly as before. The file also carries a whole-file Prettier reformat applied by the editor's format-on-save during the tool write; the user confirmed this is intended behavior (2026-09-18) — formatting-only, no behavior change.
  - `.forge/blueprints/components/presentation-foundation.md` — authorized blueprint update: added a route-suppression responsibility to the `NavBar` component block and updated the "mounts once in the root layout" note to record the project-detail suppression rule.
  - `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-001-suppress-nav-project-pages.md` — implementation record appended; completion checklist satisfied; status set to `in-review`.
  - `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — this entry.
- **Validation results (2026-09-18):**
  - `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; 14 routes generated including the four SSG project detail pages).
  - `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning (unused `isReversed`), `utils/componentMap.ts` 9:48 error (`no-explicit-any`) — remnant files unrelated to this initiative, matching the baseline recorded in the initiative plan; no findings in any changed file; not fixed (out of scope).
  - Prerendered-HTML check (`.next/server/app/*.html` searched for `Primary navigation`): nav **absent** in all four project detail pages (`cadillac-future-iq`, `cadillac-future-iq-behind-the-scenes`, `polica-wasted-me`, `a-window-in-time-renewal-by-andersen`); nav **present** in `index.html`, `projects.html` (listing keeps the nav), `services.html`, `stage.html`, `contact.html`, `_not-found.html`. SSR output contains no nav on project detail routes, so SSR and client render match — no nav flash. (`_global-error.html` has no nav independent of this change; global-error replaces the root layout.)
  - Interactive dev-server and mobile-menu checks remain for the validation session and the user's visual verification (initiative validation boundary).
- **Durable-document impact:** blueprint `update` applied as authorized; requirements `not applicable` re-confirmed (no requirement governs global navigation chrome).
- **Status:** WO-001 set to `in-review` — implemented with evidence recorded, awaiting fresh validation per [`05-validation.md`](../../process/05-validation.md); `complete` remains reserved for a passed validation.

### 2026-09-18 — Dispatch 2: WO-001 validation

- **Dispatch 2 — WO-001 validator:** session/agent ID `val-WO-001-2026-09-18-1` (fresh code-mode validation session); dispatched by `zoo-architect-2026-09-18` after verifying the 05-validation.md dispatch preconditions (work order `in-review`; changed files recorded; validation attempts recorded; diff available on branch `dev/2026-09-18-project-page-layout`). Scope: validate WO-001 only per [`work-orders/WO-001-suppress-nav-project-pages.md`](work-orders/WO-001-suppress-nav-project-pages.md); outcome to be recorded in [`validations/validation-WO-001.md`](validations/validation-WO-001.md).

### 2026-09-18 — WO-001 validation complete: pass (val-WO-001-2026-09-18-1)

- **Session/agent ID:** `val-WO-001-2026-09-18-1` (fresh code-mode validation session; dispatched by `zoo-architect-2026-09-18`).
- **Validation file:** [`validations/validation-WO-001.md`](validations/validation-WO-001.md) — decision **pass** (0 blockers, 0 warnings, 4 notes).
- **Verified:** recorded evidence matches the uncommitted working-tree diff on `dev/2026-09-18-project-page-layout` — the implementer's changes are `components/ui/NavBar.tsx` (authorized pathname suppression; the whole-file Prettier reformat independently assessed as formatting-only, no behavior change) plus the authorized `presentation-foundation.md` blueprint update; the remaining `.forge` changes are orchestrator-authored planning artifacts. Acceptance criteria met: `pnpm build` pass (exit 0; 14/14 static pages including the four project slugs); `pnpm lint` fail with only the pre-existing baseline findings (`components/Banner.tsx` 12:65 warning, `utils/componentMap.ts` 9:48 error — matches the manifest-recorded baseline; no findings in changed files); prerendered HTML shows the nav absent on all four project detail pages and present on `/`, `/projects`, `/services`, `/stage`, `/contact`, `_not-found`; validator-performed interactive checks (desktop and 375×812 mobile viewports, client-side navigation, mobile-menu toggle on `/`) all pass with no hydration errors. Blueprint `update` applied accurately; requirements `not applicable` rationale verified against `requirements/features/project-detail.md`. Out-of-scope boundary respected: no route-group restructuring, Footer unchanged and still present on project pages, WO-002/WO-003 untouched, lint baseline not fixed.
- **Outcome:** **pass** — per [`05-validation.md`](../../process/05-validation.md) the orchestrator sets WO-001 to `complete` and proceeds to WO-002; no fix work order required. The user's visual verification of the affected pages remains the closeout approval gate.

### 2026-09-18 — WO-001 complete; Dispatch 3: WO-002 implementation

- **WO-001 → `complete`:** set by `zoo-architect-2026-09-18` on the passed validation in [`validations/validation-WO-001.md`](validations/validation-WO-001.md) (0 blockers, 0 warnings, 4 notes). First work order of three complete.
- **Dispatch 3 — WO-002 implementer:** session/agent ID `impl-WO-002-2026-09-18-1` (fresh code-mode session); work order set to `in-progress`; scope: video-first page order + scoped header padding rebalance per [`work-orders/WO-002-video-first-page-order.md`](work-orders/WO-002-video-first-page-order.md); dependency WO-001 satisfied (complete); dispatched by `zoo-architect-2026-09-18`.

### 2026-09-18 — WO-002 implemented with evidence (impl-WO-002-2026-09-18-1)

- **Session/agent ID:** `impl-WO-002-2026-09-18-1` (fresh code-mode implementer session; dispatched by `zoo-architect-2026-09-18`); branch verified `dev/2026-09-18-project-page-layout`.
- **Changed files (no files created or deleted):**
  - `app/projects/[slug]/page.tsx` — moved `ProjectContent` above the text-variant `Header` (featured video renders first, title/subtitle follow, closing CTA unchanged and last); the `Header` call passes `textPaddingClassName="py-12 md:py-16"` for normal section rhythm now that the nav is suppressed (WO-001). Carries Prettier formatting hunks from the editor's format-on-save (user-confirmed intended behavior, 2026-09-18, per the WO-001 record) — formatting-only, no behavior change.
  - `components/ui/Header.tsx` — added the optional `textPaddingClassName` prop (text variant only) that replaces the default nav-clearing padding block `pt-32 pb-12 md:pt-40 md:pb-16`; replacement rather than append because same-property Tailwind utilities resolve by stylesheet order. Callers passing nothing get the same class set as before.
  - `.forge/requirements/features/project-detail.md` — authorized update: Overview narrative revised to video-first order; acceptance criteria unchanged.
  - `.forge/blueprints/features/project-detail.md` — authorized update: Feature Summary revised to video-first composition.
  - `.forge/blueprints/components/presentation-foundation.md` — authorized update: `Header` block records the text-variant padding override.
  - `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-002-video-first-page-order.md` — implementation record appended; completion checklist satisfied; status set to `in-review`.
  - `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — this entry.
- **Validation results (2026-09-18):**
  - `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; 14 routes including the four SSG project pages).
  - `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning, `utils/componentMap.ts` 9:48 error — remnant files matching the recorded baseline; no findings in changed files; not fixed (out of scope).
  - Prerendered HTML (`.next/server/app/projects/*.html`): video markup precedes `<h1` on all four project pages (e.g. `cadillac-future-iq.html` next-video@3992 < video@5549 < h1@6600; pre-change baseline h1@3899 < video@6066); exactly one `h1` per page; closing CTA last before the footer; project-page header class now `… md:min-h-[20rem] py-12 md:py-16` (no `pt-32`).
  - Other pages unchanged vs the pre-change build: `/projects` listing keeps the identical text-variant class token set (attribute token order of `md:min-h-[20rem]` shifted — CSS-irrelevant); `/`, `/services`, `/stage` header classes byte-identical; `/contact` has no Header, as before.
  - Interactive (Playwright, running dev server): `/projects/cadillac-future-iq` renders video → title/subtitle → CTA → footer with no nav; `AnimateIn` entrances verified firing on scroll-into-view for the repositioned title and subtitle (opacity 0/translateY(60px) below the fold → opacity 1/none after scroll).
  - Visual verification of all pages remains for the validation session and the user (initiative validation boundary).
- **Durable-document impact:** requirements `update` and blueprint `update` applied as authorized (Overview narrative, Feature Summary, `Header` block); acceptance criteria untouched.
- **Status:** WO-002 set to `in-review` — implemented with evidence recorded, awaiting fresh validation per [`05-validation.md`](../../process/05-validation.md); `complete` remains reserved for a passed validation in [`validations/validation-WO-002.md`](validations/validation-WO-002.md).

### 2026-09-18 — Dispatch 4: WO-002 validation

- **Dispatch 4 — WO-002 validator:** session/agent ID `val-WO-002-2026-09-18-1` (fresh code-mode validation session); dispatched by `zoo-architect-2026-09-18` after verifying the 05-validation.md dispatch preconditions (work order `in-review`; changed files recorded; validation attempts recorded; diff available on branch `dev/2026-09-18-project-page-layout`). Scope: validate WO-002 only per [`work-orders/WO-002-video-first-page-order.md`](work-orders/WO-002-video-first-page-order.md); outcome to be recorded in [`validations/validation-WO-002.md`](validations/validation-WO-002.md).

### 2026-09-18 — WO-002 validation complete: pass (val-WO-002-2026-09-18-1)

- **Session/agent ID:** `val-WO-002-2026-09-18-1` (fresh code-mode validation session; dispatched by `zoo-architect-2026-09-18`).
- **Validation file:** [`validations/validation-WO-002.md`](validations/validation-WO-002.md) — decision **pass** (0 blockers, 0 warnings, 5 notes).
- **Verified:** recorded evidence matches the uncommitted working-tree diff on `dev/2026-09-18-project-page-layout` — the WO-002 code delta is the page reorder + `textPaddingClassName` prop in `app/projects/[slug]/page.tsx` and `components/ui/Header.tsx` (the page file's Prettier hunks independently assessed as formatting-only, no behavior change), plus the authorized durable-document updates (requirements Overview narrative — acceptance criteria untouched; feature blueprint Feature Summary; presentation-foundation `Header` block); `components/ui/NavBar.tsx` re-verified byte-identical to WO-001's validated state; the remaining `.forge` changes are orchestrator-authored planning artifacts. Acceptance criteria met: `pnpm build` pass (exit 0; 14/14 routes including the four SSG project slugs); `pnpm lint` fail with only the pre-existing baseline findings (`components/Banner.tsx` 12:65 warning, `utils/componentMap.ts` 9:48 error; no findings in changed files); prerendered HTML shows video markup before `<h1` on all four project pages with exactly one `h1` each and the closing CTA last before the footer; project-page text-header class `… md:min-h-[20rem] py-12 md:py-16` (nav-clearing padding replaced); other pages' headers unchanged (`/projects` identical token set with a CSS-irrelevant attribute-order shift; `/`, `/services`, `/stage` byte-identical; `/contact` no Header). Validator-performed interactive checks (dev server port 3000: direct load + client-side navigation, `AnimateIn` entrance verification on the repositioned title/subtitle, `/projects` listing nav/padding check) all pass with no hydration errors. Out-of-scope boundary respected: no WO-003 work, no catalog changes, no NavBar changes, no other-page header changes, lint baseline not fixed.
- **Outcome:** **pass** — per [`05-validation.md`](../../process/05-validation.md) the orchestrator sets WO-002 to `complete` and proceeds to WO-003; no fix work order required. The user's visual verification of the affected pages remains the closeout approval gate.

### 2026-09-18 — WO-002 complete; Dispatch 5: WO-003 implementation

- **WO-002 → `complete`:** set by `zoo-architect-2026-09-18` on the passed validation in [`validations/validation-WO-002.md`](validations/validation-WO-002.md) (0 blockers, 0 warnings, 5 notes). Second work order of three complete. Note N-5 recorded for closeout: sweep pre-initiative "baseline contract" framing sentences in the durable docs when recording closeout follow-ups.
- **Dispatch 5 — WO-003 implementer:** session/agent ID `impl-WO-003-2026-09-18-1` (fresh code-mode session); work order set to `in-progress`; scope: gutter-framed 16:9 featured video + Mux poster + Sutro controls/fullscreen verification per [`work-orders/WO-003-framed-video-gutters-poster.md`](work-orders/WO-003-framed-video-gutters-poster.md); dependency WO-002 satisfied (complete); dispatched by `zoo-architect-2026-09-18`.

### 2026-09-18 — WO-003 implemented with evidence (impl-WO-003-2026-09-18-1)

- **Session/agent ID:** `impl-WO-003-2026-09-18-1` (fresh code-mode implementer session; dispatched by `zoo-architect-2026-09-18`); branch verified `dev/2026-09-18-project-page-layout`.
- **Changed files (no files created or deleted):**
  - `components/project/ProjectContent.tsx` — featured video wrapped in `ContentWrapper variant="full"` inside the existing `Section` (global `--page-gutter` inset both sides, no max-width), replacing the edge-to-edge bleed; non-featured/text/image branches unchanged.
  - `components/project/VideoBlock.tsx` — featured `frameClass` → `relative w-full aspect-video overflow-hidden` (true 16:9 at all breakpoints; `md:aspect-auto md:h-[85vh]` removed; non-featured frame unchanged); Mux branch passes `poster={`https://image.mux.com/${source.playbackId}/thumbnail.jpg`}` to next-video's `<Video>`; local-fixture branch left without a poster; `controls`/`autoPlay`/`muted`/`playsInline`/`title`/`aria-describedby` untouched.
  - `.forge/requirements/features/project-detail.md` — authorized update: AC-PDET-002.2 revised to gutter-framed 16:9; new AC-PDET-002.6 (Mux poster from playback ID before playback); "Featured video" Terminology entry updated; AC-PDET-002.1/002.3/002.4/002.5 verified unchanged and accurate.
  - `.forge/blueprints/components/media-delivery.md` — authorized update: featured-framing contract → gutter-framed 16:9; `VideoBlock` responsibilities + poster contract bullet added.
  - `.forge/blueprints/features/project-detail.md` — authorized update: featured inference contract, `ProjectContent` responsibilities, and REQ-PDET-002 alignment no longer reference full-bleed.
  - `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-003-framed-video-gutters-poster.md` — implementation record appended; completion checklist satisfied; status set to `in-review`.
  - `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — this entry.
- **Validation results (2026-09-18):**
  - `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; 14 routes including the four SSG project pages).
  - `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning, `utils/componentMap.ts` 9:48 error — remnant files matching the recorded baseline; no findings in changed files; not fixed (out of scope).
  - Prerendered HTML (`.next/server/app/projects/*.html`): all four project pages show `layout-wrapper--full` ×2, `h-[85vh]` ×0, `aspect-video` ×1, Mux thumbnail URL ×2 (preload + poster img); next-video renders the poster as a styled `img`, not a `poster="` attribute — confirmed interactively.
  - Interactive (Playwright, running dev server port 3000): `/projects/cadillac-future-iq` frame 1205×677.8 = exactly 1.7778 (16:9), no `h-[85vh]` in the DOM, 32px gutter per side, poster `image.mux.com/b2V5InHCmI3DAvCVP00HJBuiMuFk7ETeDpT02QMFStzt00/thumbnail.jpg` visible before playback; `/projects/polica-wasted-me` identical framing with its own poster; Sutro control bar discoverable pre-playback on both (play, mute, seek, settings, PiP, **fullscreen toggle**); player not replaced or re-themed. Viewport screenshot captured as visual evidence.
  - The user's visual verification of the affected pages remains the closeout gate (initiative validation boundary).
- **Durable-document impact:** requirements `update` and blueprint `update` applied as authorized (AC-PDET-002.2 + AC-PDET-002.6 + Terminology; media-delivery framing/poster contracts; project-detail blueprint wording).
- **Status:** WO-003 set to `in-review` — implemented with evidence recorded, awaiting fresh validation per [`05-validation.md`](../../process/05-validation.md); `complete` remains reserved for a passed validation in [`validations/validation-WO-003.md`](validations/validation-WO-003.md).

### 2026-09-18 — Dispatch 6: WO-003 validation

- **Dispatch 6 — WO-003 validator:** session/agent ID `val-WO-003-2026-09-18-1` (fresh code-mode validation session); dispatched by `zoo-architect-2026-09-18` after verifying the 05-validation.md dispatch preconditions (work order `in-review`; changed files recorded; validation attempts recorded; diff available on branch `dev/2026-09-18-project-page-layout`). Scope: validate WO-003 only per [`work-orders/WO-003-framed-video-gutters-poster.md`](work-orders/WO-003-framed-video-gutters-poster.md); outcome to be recorded in [`validations/validation-WO-003.md`](validations/validation-WO-003.md). Orchestrator note: an untracked temp file `.forge/tmp-check-wo003.ps1` from the implementer's evidence collection is present in the working tree — the validator will assess it as potential out-of-scope debris for closeout cleanup.

### 2026-09-18 — WO-003 validation complete: pass (val-WO-003-2026-09-18-1)

- **Session/agent ID:** `val-WO-003-2026-09-18-1` (fresh code-mode validation session; dispatched by `zoo-architect-2026-09-18`).
- **Validation file:** [`validations/validation-WO-003.md`](validations/validation-WO-003.md) — decision **pass** (0 blockers, 0 warnings, 8 notes).
- **Verified:** recorded evidence matches the uncommitted working-tree diff on `dev/2026-09-18-project-page-layout` — the WO-003 code delta is the featured-branch `ContentWrapper variant="full"` wrap in `components/project/ProjectContent.tsx` (Prettier hunks independently assessed formatting-only, no behavior change) and the featured `frameClass` 16:9 change + Mux `poster` prop in `components/project/VideoBlock.tsx` (identical-branch ternary assessed a harmless redundancy, note N-2), plus the authorized durable-document updates (requirements AC-PDET-002.2 revision + new AC-PDET-002.6 + Terminology; media-delivery framing/poster contracts; project-detail blueprint framing references); the WO-001/WO-002 files (`NavBar.tsx`, `Header.tsx`, `app/projects/[slug]/page.tsx`, `presentation-foundation.md`) re-verified free of WO-003 content; the remaining `.forge` changes are orchestrator-authored planning artifacts. Acceptance criteria met: `pnpm build` pass (exit 0; 14/14 routes including the four SSG project slugs); `pnpm lint` fail with only the pre-existing baseline findings (`components/Banner.tsx` 12:65 warning, `utils/componentMap.ts` 9:48 error; no findings in changed files); prerendered HTML shows `layout-wrapper--full` wrapping the featured video, `h-[85vh]` ×0, `aspect-video` frame, and the Mux thumbnail URL (preload + poster img) on all four project pages; validator-performed interactive checks on **all four** project pages (dev server port 3000, desktop viewport): frame ratio exactly 1.7778 (16:9) with 32px `--page-gutter` insets per side and `max-width: none`, Mux poster visible before playback with per-project URLs matching the catalog playback IDs, Sutro control bar discoverable pre-playback, and the fullscreen toggle verified functional (`document.fullscreenElement` = `media-theme-sutro`; enter + exit). Durable-document impact: requirements `update` and blueprint `update` verified accurate against the final behavior. Out-of-scope boundary respected: no player replacement/re-theming, no non-featured framing or autoplay changes, no catalog changes, no NavBar/Header/page-route changes, lint baseline not fixed.
- **Debris assessment (orchestrator-flagged):** `.forge/tmp-check-wo003.ps1` is **absent** from the working tree at validation time (file read ENOENT; `dir .forge\*.ps1` → "File Not Found"; absent from `git status --porcelain` and `git status --ignored`; no gitignore match; full-repo sweep finds only node_modules shims) — the dispatch note is stale and no closeout cleanup action is required; the stale VSCode tab should be closed without saving so the file is not recreated (validation note N-1).
- **Outcome:** **pass** — per [`05-validation.md`](../../process/05-validation.md) the orchestrator sets WO-003 to `complete`; all three work orders of the initiative are then complete and the `validate -> closeout` gate is reached. No fix work order required. The user's visual verification of the affected pages remains the closeout approval gate.

### 2026-09-18 — WO-003 complete; closeout preparation (zoo-architect-2026-09-18)

- **WO-003 → `complete`:** set by `zoo-architect-2026-09-18` on the passed validation in [`validations/validation-WO-003.md`](validations/validation-WO-003.md) (0 blockers, 0 warnings, 8 notes). All three work orders are now `complete` with passed validations.
- **Closeout preconditions verified from recorded evidence:**
  - Every work order `complete`: WO-001, WO-002, WO-003 — each with a passed fresh-session validation (`validation-WO-001.md`, `validation-WO-002.md`, `validation-WO-003.md`).
  - All validations, gates, and approvals have recorded evidence: three validation files; the rapid-path design-readiness confirmation and the user's gate waiver (2026-09-18) recorded in the initiative plan; the user's visual verification of the affected pages remains pending as the closeout approval gate per project policy.
  - Session separation held: six dispatches (three implementer, three validator), each a separate fresh session with its ID recorded above; no exceptions ("Session separation exceptions" section remains `None recorded.`).
  - Final state clean: validators verified the working tree contains only the authorized WO-001/WO-002/WO-003 changes plus orchestrator-authored `.forge` artifacts; the flagged debris file `.forge/tmp-check-wo003.ps1` was confirmed absent from the working tree (stale editor tab only); no unresolved conflicts.
- **Follow-ups recorded (deferred work, with ownership):**
  1. `VideoBlock.tsx` `frameClass` ternary now has identical branches (featured/standard distinction lives in `ProjectContent`'s wrapper choice) — harmless redundancy; cleanup candidate for a future maintenance pass. (WO-003 validation note N-2)
  2. `AC-PDET-002.6` (poster criterion) numbered out of list order in `requirements/features/project-detail.md` — cosmetic; fix in the next doc-touching pass. (WO-003 validation note N-5)
  3. Pre-initiative "baseline contract" framing sentences in the durable docs (requirements Overview, feature blueprint summary) are stale now that the initiative is closing — sweep when a doc-touching initiative next runs. (WO-002 note N-5 / WO-003 note N-8)
  4. Lint baseline remains red in remnant files (`components/Banner.tsx`, `utils/componentMap.ts`) — already owned by the separately recorded remnant-component cleanup follow-up; not this initiative's scope.
  5. Local-fixture video path is compile-verified only (no catalog fixture exercises it) — note for whenever a fixture source is next used. (WO-003 validation note N-6)
- **Pending closeout actions:** the user's visual verification + closeout approval (the gate they retained); then commit all changes and merge `dev/2026-09-18-project-page-layout` into `master` (dispatched to an execution-capable coding session per the capability routing rule), then the status flip to `closed`.

## Session separation exceptions

None recorded.

## Unresolved and deferred work

- None yet; follow-up candidates live in the [project manifest](../../project-manifest.md#decisions-and-handoff).
