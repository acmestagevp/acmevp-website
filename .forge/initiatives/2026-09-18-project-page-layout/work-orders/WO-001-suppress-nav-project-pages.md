# Work Order: WO-001 — Suppress Main Nav on Project Detail Pages

## Metadata

- **Status:** `complete` (passed validation in [`../validations/validation-WO-001.md`](../validations/validation-WO-001.md), 2026-09-18)
- **Assignee:** `impl-WO-001-2026-09-18-1` (fresh code-mode implementer session)
- **Phase/order:** 1 of 3 (no dependencies)
- **Initiative:** [`../project-page-layout-v1.md`](../project-page-layout-v1.md)
- **Generated filename:** `WO-001-suppress-nav-project-pages.md`
- **Owner/orchestrator:** John Wildauer / Zoo orchestrator sessions
- **Validation:** [`../validations/validation-WO-001.md`](../validations/validation-WO-001.md)
- **Fixes:** `none`
- **Implementer session/agent ID:** `impl-WO-001-2026-09-18-1`
- **Session exception:** `none`

## Summary

`NavBar` currently renders globally from the root layout on every route. This work order suppresses it on project detail routes (`/projects/{slug}`) via a pathname check inside the already-client `NavBar` component, so the video-led project pages present without navigation chrome. All other routes — including the `/projects` listing — keep the nav unchanged.

## In scope

- Pathname-based suppression of `NavBar` rendering on project detail routes in [`components/ui/NavBar.tsx`](../../../../components/ui/NavBar.tsx)
- Match `/projects/{slug}` (a slug segment present after `/projects/`); `/projects` itself keeps the nav
- Consistent suppression across SSR and client render (no flash of nav on project pages)

## Out of scope

- Route-group restructuring of `app/` (recorded as the rejected structural alternative in the initiative plan)
- Footer changes (remains on all pages, including project pages)
- Any change to nav items, styling, or behavior on non-project routes
- The page-route reorder (WO-002) and video framing (WO-003)

## Requirements

No requirement in [`requirements/features/project-detail.md`](../../../../.forge/requirements/features/project-detail.md) governs global navigation chrome; the requirements impact is classified `not applicable` (see Durable-document impact). No acceptance criteria are copied verbatim for this work order.

## Blueprints

- [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) — `NavBar` responsibilities and the root-layout mounting note; this work order adds a documented project-detail exception
- [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) — context: the project page composes `Header`/`ProjectContent`; nav suppression is chrome-level, not page-content-level

## Implementation plan

1. [`components/ui/NavBar.tsx`](../../../../components/ui/NavBar.tsx) — derive `isProjectDetail` from the existing `usePathname()` value (pathname matches `/projects/{slug}` — i.e., starts with `/projects/` and has a non-empty segment after it); return `null` before rendering when true
2. Verify no nav flash on project detail pages and no behavior change on other routes (`usePathname()` resolves during server render of client components, so SSR output is consistent)

## Files and systems

- **Update:** `components/ui/NavBar.tsx`
- **Avoid changing:** `app/layout.tsx`, `constants/nav.ts`, all other components and pages

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm build`, `pnpm lint`
- **Manual/external checks:** with the dev server, confirm the nav is absent on all four `/projects/{slug}` pages and present on `/`, `/projects`, `/services`, `/stage`, and `/contact`; mobile menu unaffected on non-project routes
- **Acceptance test:** Given a visitor on any project detail page, when the page renders, then no `NavBar` chrome appears and page content begins at the top of the viewport; given any other route, the `NavBar` renders exactly as before.

## Durable-document impact

- **Requirements impact:** `not applicable` — checked [`requirements/features/project-detail.md`](../../../../.forge/requirements/features/project-detail.md); no requirement covers global navigation chrome, and the project-detail requirements are unaffected by chrome presence/absence
- **Blueprint impact:** `update` — selected: `update`
- **Affected documents/IDs:** [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) (`NavBar` component block; the "mounts once in the root layout" note)
- **Rationale and evidence:** the blueprint documents `NavBar` as rendering on every route ("`NavBar` and `Footer` mount once in the root layout around `{children}`"); this work order introduces a per-route exception that must be recorded
- **Authorized documentation changes:** update the `NavBar` component responsibilities and the mounting note in `presentation-foundation.md` to record the project-detail suppression rule

## Implementation record

Recorded 2026-09-18 by implementer session `impl-WO-001-2026-09-18-1`.

**Changed files (no files created or deleted):**

- `components/ui/NavBar.tsx` (updated) — derived `isProjectDetail` from the existing `usePathname()` value (`pathname.startsWith("/projects/") && pathname.length > "/projects/".length`) and added an early `return null` before rendering, placed after all hook calls (rules-of-hooks safe). The `/projects` listing and all other routes render exactly as before. The file additionally carries a whole-file Prettier reformat applied by the editor's format-on-save during the tool write — confirmed as intended behavior by the user on 2026-09-18; formatting-only, no behavior change.
- `.forge/blueprints/components/presentation-foundation.md` (updated) — authorized blueprint update: added a route-suppression responsibility to the `NavBar` component block and updated the "mounts once in the root layout" note to record the project-detail suppression rule.
- `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-001-suppress-nav-project-pages.md` (updated) — this implementation record, the completion checklist, and the status transition to `in-review`.
- `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` (updated) — appended the execution-log entry for this session.

**Validation attempts and results (2026-09-18):**

- `pnpm build` — **pass** (exit 0). Next.js 16.1.6 (Turbopack); compiled successfully; 14 routes generated including the four SSG project detail pages (`cadillac-future-iq`, `cadillac-future-iq-behind-the-scenes`, `polica-wasted-me`, `a-window-in-time-renewal-by-andersen`).
- `pnpm lint` — **fail, pre-existing baseline only** (exit 1). Findings: `components/Banner.tsx` 12:65 warning (`'isReversed' is assigned a value but never used`); `utils/componentMap.ts` 9:48 error (`Unexpected any. Specify a different type`). Both are in remnant files unrelated to this initiative and match the baseline recorded in the initiative plan (2026-09-18). No findings in any file changed by this work order. Not fixed — out of scope.
- Prerendered-HTML evidence (build output) — searched `.next/server/app/*.html` for `Primary navigation`: **absent** in all four project detail pages; **present** in `index.html` (`/`), `projects.html` (`/projects` listing keeps the nav), `services.html`, `stage.html`, `contact.html`, and `_not-found.html`. SSR output contains no nav on project detail routes, so server and client render match — no nav flash. (`_global-error.html` has no nav with or without this change; global-error replaces the root layout.)
- Manual dev-server checks (nav absent on the four project pages; present on `/`, `/projects`, `/services`, `/stage`, `/contact`; mobile menu unaffected on non-project routes) — the route-presence portion is evidenced by the prerendered-HTML check above; interactive/mobile verification remains for the validation session and the user's visual verification per the initiative's validation boundary.

**Durable-document impact (applied):** blueprint `update` applied as authorized — the `presentation-foundation.md` `NavBar` responsibilities block and mounting note now record the project-detail suppression rule. Requirements impact `not applicable` re-confirmed: no requirement in `requirements/features/project-detail.md` governs global navigation chrome.

## Completion checklist

- [x] Implementation is complete within scope.
- [x] Tests/checks and required gates have evidence.
- [x] Durable-document impact classification is accurate against the diff, and authorized documentation updates are applied.
- [x] Execution log is appended, including dispatch and completion session/agent identifiers.
- [x] Work order is `in-review` with recorded evidence, and completion (`complete`) comes only from a passed validation in `validations/validation-WO-001.md`.
