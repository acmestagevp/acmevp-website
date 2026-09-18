# Work Order: WO-002 — Video-First Page Order

## Metadata

- **Status:** `complete` (passed validation in [`../validations/validation-WO-002.md`](../validations/validation-WO-002.md), 2026-09-18)
- **Assignee:** `impl-WO-002-2026-09-18-1` (fresh code-mode implementer session)
- **Phase/order:** 2 of 3 (depends on WO-001: the header padding rebalance assumes the nav is suppressed on project pages)
- **Initiative:** [`../project-page-layout-v1.md`](../project-page-layout-v1.md)
- **Generated filename:** `WO-002-video-first-page-order.md`
- **Owner/orchestrator:** John Wildauer / Zoo orchestrator sessions
- **Validation:** [`../validations/validation-WO-002.md`](../validations/validation-WO-002.md)
- **Fixes:** `none`
- **Implementer session/agent ID:** `impl-WO-002-2026-09-18-1`
- **Session exception:** `none`

## Summary

Reorders the project detail page so the featured video renders first and the title/subtitle header follows below the content, ahead of the closing CTA. Rebalances the text header's nav-clearing top padding now that the nav is suppressed on these pages (WO-001), scoping the change so other pages' text headers are untouched.

## In scope

- JSX reorder in [`app/projects/[slug]/page.tsx`](../../../../app/projects/[slug]/page.tsx): `ProjectContent` renders before the title/subtitle `Header`
- Rebalancing the text header's top padding (`pt-32 md:pt-40`) to normal section rhythm on project detail pages only
- Keeping the closing CTA section ("Discuss a project" + "Back to Projects") unchanged and last

## Out of scope

- Video frame, margins, poster, and controls (WO-003)
- `NavBar` changes (WO-001)
- Catalog data ([`constants/projects.ts`](../../../../constants/projects.ts) remains untouched)
- Any change to other pages' header appearance or padding

## Requirements

Copy applicable requirement wording and acceptance criteria verbatim:

- **REQ-PDET-001: Project pages render header and content blocks in catalog order**
  - **AC-PDET-001.1:** "`/projects/[slug]` shall render the project's title as the page heading, with its subtitle beneath when present."
  - **AC-PDET-001.2:** "The page shall render the project's content blocks in the order defined by the catalog."
- **REQ-PDET-004: Project pages close with conversion paths** (context — unchanged by this work order)
  - **AC-PDET-004.1:** "Every project page shall end with a 'Discuss a project' CTA linking to `/contact`."
  - **AC-PDET-004.2:** "Every project page shall provide a 'Back to Projects' link to `/projects`."

Note: AC-PDET-001.1 and AC-PDET-001.2 remain satisfied after the reorder (the title is still the page heading with subtitle beneath; blocks still render in catalog order relative to each other). The requirements document's Overview narrative ("A page opens with the project's title and optional subtitle, then renders the project's content blocks") becomes inaccurate and is authorized for update.

## Blueprints

- [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) — Feature Summary describes "a text-variant `Header` renders title/subtitle, `ProjectContent` renders the project's content blocks in order"; revises to video-first
- [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) — `Header` text-variant padding and any override mechanism added for the scoped rebalance

## Implementation plan

1. [`app/projects/[slug]/page.tsx`](../../../../app/projects/[slug]/page.tsx) — move `<ProjectContent … />` above the `<Header variant="text">` block, keeping the closing CTA `Section` last
2. Scope the header padding rebalance to the project page: the text-variant padding is hardcoded in [`components/ui/Header.tsx`](../../../../components/ui/Header.tsx) (`pt-32 md:pt-40`), so extend `Header` to accept a `className`/padding override for the text variant (or equivalent smallest coherent change) and apply it only on the project page; other pages' text headers must render identically
3. Verify `AnimateIn` entrances still fire for the repositioned title/subtitle

## Files and systems

- **Update:** `app/projects/[slug]/page.tsx`; `components/ui/Header.tsx` (only the override mechanism needed for the scoped padding rebalance)
- **Avoid changing:** `constants/projects.ts`, `components/project/*` (WO-003 scope), other pages

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm build`, `pnpm lint`
- **Manual/external checks:** all four project pages show the video first, then title/subtitle, then the closing CTA; the headers on `/`, `/projects`, `/services`, `/stage`, and `/contact` are visually unchanged
- **Acceptance test:** Given a project detail page, when rendered, then the featured video appears before the title/subtitle header, the title remains the page heading (`h1`) with subtitle beneath, and the closing CTA remains the last section.

## Durable-document impact

- **Requirements impact:** `update` — selected: `update`
- **Blueprint impact:** `update` — selected: `update`
- **Affected documents/IDs:** [`requirements/features/project-detail.md`](../../../../.forge/requirements/features/project-detail.md) (Overview narrative); [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) (Feature Summary); [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) (`Header` block, if its API gains an override)
- **Rationale and evidence:** the reorder changes documented user-facing page structure (requirements Overview) and the documented composition order (feature blueprint summary); the acceptance criteria themselves remain accurate
- **Authorized documentation changes:** revise the requirements Overview sentence and the feature blueprint Feature Summary to video-first order; record any `Header` API extension in the presentation-foundation blueprint

## Implementation record

Recorded 2026-09-18 by implementer session `impl-WO-002-2026-09-18-1`.

**Changed files (no files created or deleted):**

- `app/projects/[slug]/page.tsx` (updated) — moved `<ProjectContent blocks={project.content} projectTitle={project.title} />` above the `<Header variant="text">` block so the featured video renders first and the title/subtitle header follows; the closing CTA `Section` ("Discuss a project" + "← Back to Projects") is unchanged and remains last. The `Header` call now passes `textPaddingClassName="py-12 md:py-16"` — normal section rhythm matching the page's own closing-CTA section padding (3rem/4rem, within the `--space-section`/gallery clamp range) — replacing the default nav-clearing `pt-32 md:pt-40` now that the nav is suppressed on these pages (WO-001). The file additionally carries Prettier formatting hunks applied by the editor's format-on-save during the tool write (`generateMetadata` wrapping, `ProjectPage` signature, `<h1>` line) — the same editor behavior confirmed as intended by the user on 2026-09-18 (WO-001 record); formatting-only, no behavior change.
- `components/ui/Header.tsx` (updated) — added the optional `textPaddingClassName` prop, consumed only by the text variant: when provided it **replaces** the default padding block `pt-32 pb-12 md:pt-40 md:pb-16` (replacement, not append — same-property Tailwind utilities resolve by stylesheet order, so appended padding could not override the default). Structural classes (`min-h-[16rem]`, `md:min-h-[20rem]`, `--page-gutter`, centering) are unchanged for every caller; callers that pass nothing — the `/projects` listing today — receive the same class set as before.
- `.forge/requirements/features/project-detail.md` (updated) — authorized requirements update: the Overview narrative now reads video-first (featured video renders first, then title/subtitle, then remaining blocks, closing with the CTA). Acceptance criteria unchanged — AC-PDET-001.1/001.2 remain accurate (title is still the page heading with subtitle beneath; blocks still render in catalog order relative to each other).
- `.forge/blueprints/features/project-detail.md` (updated) — authorized blueprint update: the Feature Summary now describes `ProjectContent` leading with the featured video and the text-variant `Header` rendering title/subtitle beneath the content.
- `.forge/blueprints/components/presentation-foundation.md` (updated) — authorized blueprint update: the `Header` component block records the text-variant padding contract (nav-clearing default; `textPaddingClassName` replacement for nav-less routes).
- `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-002-video-first-page-order.md` (updated) — this implementation record, the completion checklist, and the status transition to `in-review`.
- `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` (updated) — appended the execution-log entry for this session.

**Validation attempts and results (2026-09-18):**

- `pnpm build` — **pass** (exit 0). Next.js 16.1.6 (Turbopack); compiled successfully; 14 routes generated including the four SSG project detail pages.
- `pnpm lint` — **fail, pre-existing baseline only** (exit 1). Findings: `components/Banner.tsx` 12:65 warning (`'isReversed' is assigned a value but never used`); `utils/componentMap.ts` 9:48 error (`Unexpected any. Specify a different type`). Both are in remnant files unrelated to this initiative and match the baseline recorded in the initiative plan and WO-001's record. No findings in any file changed by this work order. Not fixed — out of scope.
- Prerendered-HTML order check (`.next/server/app/projects/*.html`, post-change build): on all four project pages the video markup precedes the title heading — `cadillac-future-iq.html`: `next-video` @3992 < `<video` @5549 < `<h1` @6600 (pre-change baseline: header `pt-32` @3703 < `<h1` @3899 < video @6066); `cadillac-future-iq-behind-the-scenes.html`: @4104 < @5660 < @6711; `polica-wasted-me.html`: @3974 < @5531 < @6582; `a-window-in-time-renewal-by-andersen.html`: @4124 < @5688 < @6739. Each page still has exactly one `<h1>` (AC-PDET-001.1) and the closing CTA ("Discuss a project" / "Back to Projects") renders after the header, last before the footer (AC-PDET-004.1/004.2).
- Prerendered-HTML padding check: all four project pages' text-header section class is now `relative flex min-h-[16rem] items-center justify-center w-full px-[var(--page-gutter)] md:min-h-[20rem] py-12 md:py-16` — nav-clearing `pt-32 … md:pt-40` replaced; min-heights, gutter, and centering unchanged.
- Other pages unchanged (prerendered HTML, compared against the pre-change build captured before implementation): `/projects` listing keeps the identical text-variant class token set (`relative flex min-h-[16rem] items-center justify-center w-full px-[var(--page-gutter)] … pt-32 pb-12 … md:pt-40 md:pb-16`) — only the position of `md:min-h-[20rem]` within the class attribute differs, which has no styling effect (class-attribute order is CSS-irrelevant; the generated stylesheet is unchanged); `/` (`relative h-screen flex items-center justify-center py-20 md:py-0 w-full`), `/services`, and `/stage` (`relative h-[80vh] flex items-center justify-center py-20 md:py-0 w-full`) are byte-identical; `/contact` renders no `Header`, as before.
- Interactive check (Playwright against the already-running dev server at `localhost:3000`, `/projects/cadillac-future-iq`): accessibility snapshot shows video player region → `h1` "Cadillac" + subtitle "Future IQ" → closing CTA → footer, with no NavBar (WO-001 intact). `AnimateIn` entrances verified for the repositioned header: before scroll, the title wrapper is below the fold (viewport-top 1043px vs 917px viewport) at `opacity: 0; transform: translateY(60px)`; after `scrollIntoView`, title and subtitle wrappers animate to `opacity: 1; transform: none` (0.5s ease-out, subtitle staggered +0.2s) — entrances fire on scroll-into-view as before. Console `inferred.litix.io` DNS errors are Mux analytics beacons failing in this environment — pre-existing player behavior, unrelated to this change.
- Remaining manual checks (visual verification of all four project pages and the other routes' headers across viewports) remain for the validation session and the user's visual verification per the initiative's validation boundary.

**Durable-document impact (applied):** requirements `update` and blueprint `update` applied as authorized — the project-detail requirements Overview and feature-blueprint Feature Summary now describe video-first order, and the presentation-foundation `Header` block records the `textPaddingClassName` override. Acceptance criteria were not modified.

## Completion checklist

- [x] Implementation is complete within scope.
- [x] Tests/checks and required gates have evidence.
- [x] Durable-document impact classification is accurate against the diff, and authorized documentation updates are applied.
- [x] Execution log is appended, including dispatch and completion session/agent identifiers.
- [x] Work order is `in-review` with recorded evidence, and completion (`complete`) comes only from a passed validation in `validations/validation-WO-002.md`.
