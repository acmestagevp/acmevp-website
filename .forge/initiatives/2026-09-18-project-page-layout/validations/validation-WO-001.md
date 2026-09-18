# Validation: WO-001 — Suppress Main Nav on Project Detail Pages

## Validation metadata

- **Review type:** `validation`
- **Status:** `complete`
- **Validator:** Zoo code-mode validation session (fresh context; independent of implementer session `impl-WO-001-2026-09-18-1`)
- **Validator session/agent ID:** `val-WO-001-2026-09-18-1`
- **Session exception:** `none`
- **Date:** 2026-09-18
- **Initiative:** [`../project-page-layout-v1.md`](../project-page-layout-v1.md)
- **Validation file:** `validation-WO-001.md`
- **Validated work order:** [`../work-orders/WO-001-suppress-nav-project-pages.md`](../work-orders/WO-001-suppress-nav-project-pages.md)
- **Compared commit/diff:** uncommitted working-tree diff on branch `dev/2026-09-18-project-page-layout` (created from `master` at `341b8b7`): `git diff -- components/ui/NavBar.tsx` and `git diff -- .forge/blueprints/components/presentation-foundation.md`, plus untracked initiative artifacts (`work-orders/WO-001…WO-003`); no commits were made before or during validation
- **Fix chain:** `none`

Validation files belong in this initiative's `validations/` directory, named
`validation-[work-order-id].md`. Requirements and design reviews are separate
artifacts and live in `reviews/`; use
[`../reviews/review-template.md`](../reviews/review-template.md) for those.

## Authorized scope

Assessed per [`../work-orders/WO-001-suppress-nav-project-pages.md`](../work-orders/WO-001-suppress-nav-project-pages.md):

- Pathname-based suppression of `NavBar` rendering on project detail routes (`/projects/{slug}`) in [`components/ui/NavBar.tsx`](../../../../components/ui/NavBar.tsx), consistent across SSR and client render (no nav flash); the `/projects` listing and all other routes keep the nav exactly as before.
- The authorized blueprint update to [`presentation-foundation.md`](../../../blueprints/components/presentation-foundation.md): `NavBar` responsibilities and the root-layout mounting note record the suppression rule.
- Acceptance test: given a project detail page, no `NavBar` chrome appears and content begins at the top of the viewport; given any other route, the `NavBar` renders exactly as before.
- Automated checks: `pnpm build`, `pnpm lint` (baseline lint failures in `components/Banner.tsx` and `utils/componentMap.ts` are pre-existing and out of scope).

Explicitly excluded: WO-002 (page reorder), WO-003 (video framing), route-group restructuring of `app/`, Footer changes, and fixing the pre-existing lint findings. Unimplemented design obligations (WO-002/WO-003) were not assessed; a design deficiency would route to design review, not to a fix work order.

## Validation checklist

- **The evidence is real and matches the recorded diff — pass.** Branch `dev/2026-09-18-project-page-layout` confirmed checked out. `git status` shows exactly the implementer's recorded changed files — `components/ui/NavBar.tsx` (modified), `.forge/blueprints/components/presentation-foundation.md` (modified), the WO-001 work-order file (untracked/new), `execution-log.md` (modified) — plus orchestrator-authored planning artifacts foreseen by the dispatch: `project-page-layout-v1.md` (modified), `.forge/project-manifest.md` (modified; verified to be a one-line branch-creation evidence record), and the untracked WO-002/WO-003 work-order files. `git diff -- components/ui/NavBar.tsx` shows the recorded `isProjectDetail` derivation (`pathname.startsWith("/projects/") && pathname.length > "/projects/".length`) and early `return null` placed after all hook calls; `git diff` on the blueprint shows exactly the authorized `NavBar` responsibilities addition and mounting-note update. Re-run `pnpm build`/`pnpm lint` results match the recorded evidence verbatim.
- **The diff is limited to the authorized scope and contains no accidental changes — pass.** `components/ui/NavBar.tsx` is the only code file changed. Its functional delta is the authorized three-line suppression (comment + `isProjectDetail` + early return); the remainder of the file diff is a whole-file Prettier reformat independently assessed as formatting-only with no behavior change (see Notes N-1). No changes to `app/` (no route-group restructuring), `constants/nav.ts`, `Footer.tsx`, or any other code file. The blueprint diff is confined to the authorized `NavBar` block and mounting note.
- **The implementation satisfies every applicable acceptance criterion — pass.** Prerendered HTML (`.next/server/app/`, searched for `Primary navigation`): nav **absent** in all four project detail pages (`cadillac-future-iq`, `cadillac-future-iq-behind-the-scenes`, `polica-wasted-me`, `a-window-in-time-renewal-by-andersen`); nav **present** in `index.html`, `projects.html` (the `/projects` listing keeps the nav), `services.html`, `stage.html`, `contact.html`, `_not-found.html`. NavBar logo (`ACME-Logo-White`) and `mobile-navigation` are absent from project pages; the `shell-nav` substring found in project HTML is the Footer's `shell-nav__link` class ([`Footer.tsx`](../../../../components/ui/Footer.tsx) line 41), not NavBar chrome. Validator-performed interactive checks (dev server, port 3000): no nav chrome on `/projects/cadillac-future-iq` (desktop) and `/projects/polica-wasted-me` (mobile viewport, reached via client-side navigation from `/`, proving the client-render path); nav with logo and all five items on `/` and `/projects`; mobile menu toggle opens/closes correctly on `/` at 375×812; no hydration errors or console errors. Content begins at the top of the viewport on project pages (the nav is `fixed`/out-of-flow, and no nav element renders there).
- **Tests, lint, build, runtime, and manual gates required by policy have evidence — pass.** `pnpm build` — pass (exit 0; Next.js 16.1.6/Turbopack; 14/14 static pages including the four SSG project slugs), matching the record. `pnpm lint` — fail (exit 1) with exactly the two pre-existing baseline findings: `components/Banner.tsx` 12:65 warning (`'isReversed' is assigned a value but never used`) and `utils/componentMap.ts` 9:48 error (`Unexpected any`), matching the implementer's record and the manifest-recorded baseline verbatim; no findings in any changed file. The initiative's validation boundary (`pnpm build` + `pnpm lint`, plus the user's visual verification) is satisfied up to the user's visual closeout gate, which remains reserved per the recorded gate authority.
- **Error, security, compatibility, and persistence behavior are appropriate — pass.** The early `return null` sits after all hook calls (rules-of-hooks safe); no error path, input handling, security surface, or persistence behavior is touched. `usePathname()` resolves during server render of client components, so SSR and client output match — no nav flash (confirmed by prerendered HTML and the absence of hydration errors).
- **The durable-document impact classification is correct against the actual diff — pass.** Blueprint `update`: applied accurately — the `NavBar` responsibilities block gains the route-suppression responsibility and the mounting note records the suppression rule, matching the actual behavior. Requirements `not applicable`: rationale verified — [`requirements/features/project-detail.md`](../../../requirements/features/project-detail.md) REQ-PDET-001…004 and NFR-PDET-001/002 govern page content, media, and conversion paths, not global navigation chrome; REQ-PDET-004's "Discuss a project" CTA and "Back to Projects" link still render on project pages, and NFR-PDET-001 static generation is unaffected (14/14 static).
- **The out-of-scope boundary was respected — pass.** No route-group restructuring (no `app/` changes); Footer unchanged and still rendered on all four project pages; no nav data/styling/behavior change on non-project routes (`constants/nav.ts` untouched; the reformat is formatting-only); WO-002/WO-003 not implemented (`app/projects/[slug]/page.tsx` untouched; project pages still render title-first); the pre-existing lint findings were not fixed.

## Findings

### Blockers

Each blocker must cite the evidence that makes it blocking; do not infer implementation from a plan, conversation, or unchanged files.

- None.

### Warnings

- None.

### Notes

- `N-1: NavBar.tsx whole-file Prettier reformat assessed formatting-only, no behavior change — Severity: note; Evidence: git diff shows that beyond the authorized three-line suppression, every hunk is whitespace/line-wrapping — JSX attributes re-wrapped with identical values, ternaries multi-lined with identical string literals, and the className template literal's changed whitespace sits inside the ${...} interpolation (JavaScript expression whitespace, not string content) with literal segments unchanged; JSX re-indentation does not alter rendered output. Prerendered and interactive checks confirm non-project routes render exactly as before. The reformat is disclosed in the implementation record and user-confirmed (2026-09-18) as intended editor format-on-save behavior; Recommendation: accept as-is; if format-on-save churn recurs on untouched code, consider a repo Prettier config/pass as follow-up hygiene; Required next state: none (informational).`
- `N-2: lint gate remains red from the pre-existing baseline — Severity: note; Evidence: pnpm lint exits 1 with exactly components/Banner.tsx 12:65 (no-unused-vars) and utils/componentMap.ts 9:48 (no-explicit-any), matching the manifest-recorded baseline; no findings in files changed by this work order; fixing them is explicitly out of scope; Recommendation: keep deferred to the recorded remnant-cleanup follow-up — future work orders cannot claim a green lint gate until it lands; Required next state: none for WO-001.`
- `N-3: interactive/mobile checks deferred by the implementer were discharged by this validation — Severity: note; Evidence: the implementer evidenced route presence/absence via prerendered HTML and deferred interactive/mobile verification to the validation session; this validator performed it (dev server on port 3000; desktop and 375×812 mobile viewports; client-side navigation from / to a project page; mobile menu toggle verified on /); all checks pass. The user's visual verification of the affected pages remains the closeout approval gate per the recorded gate authority; Recommendation: none; Required next state: none.`
- `N-4: pathname-check reachability edges are benign — Severity: note; Evidence: isProjectDetail (pathname.startsWith("/projects/") && pathname.length > "/projects/".length) would also suppress hypothetical nested segments such as /projects/a/b (no such routes exist) and leaves the exact path /projects/ rendering the nav; next.config.ts sets no trailingSlash option, so Next.js redirects /projects/ to /projects, making that edge unreachable in practice. All four real slugs verified suppressed; /projects verified rendering; Recommendation: none — behavior matches the authorized scope ("a slug segment present after /projects/"); Required next state: none.`

## Decision

- **Outcome:** `pass`
- **Required next state:** the orchestrator sets WO-001 to `complete` and proceeds to the next ordered work order (WO-002) per the execution loop in [`05-validation.md`](../../../process/05-validation.md)
- **Fix work order required:** `no`
