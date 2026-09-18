# Initiative: Project Page Layout — Iteration 3 (YouTube-Embedded Projects)

## Initiative metadata

- **Phase:** `draft` | `plan` | `review` | `execute` | `validate` | `closeout` — selected: `closeout`
- **Status:** `active` | `blocked` | `closed` — selected: `closed`
- **Owner/orchestrator:** John Wildauer (owner) / Zoo orchestrator sessions
- **Created:** 2026-09-18
- **Updated:** 2026-09-18
- **Authoritative version:** `v3` — supersedes [`project-page-layout-v2.md`](project-page-layout-v2.md) for iteration 3; v2 retained for history
- **Initiative mode:** `standard` | `rapid` — selected: `rapid`
- **Mode requested by:** `user` — explicit request 2026-09-18 ("fast track this as well")
- **Mode confirmation:** confirmed 2026-09-18 — the user's iteration-3 prompt directly authorizes the change set; no further gating until WO-005 is complete and reviewed
- **Rapid-mode eligibility:** `eligible` — narrow outcome (one new catalog source kind + two catalog entries in one page family), known implementation pattern, bounded file surface, practical validation path (git-diff scope review + build/lint; user visual confirmation)
- **Base/default branch:** `master`
- **Initiative branch:** `dev/2026-09-18-project-page-layout` — iteration 3 continues on the same branch; all iteration changes remain uncommitted pending the combined closeout
- **Branch policy:** `required` (unchanged from v1/v2)
- **Validation cadence:** `per work order` — reduced scope per the standing user directive (2026-09-18): validation = git-diff scope review + `pnpm build`/`pnpm lint`; browser automation waived; the user visually confirms all changes after implementation and is the approval gate
- **Phase transition evidence:** created 2026-09-18 from the user's iteration-3 request at the iteration-2 closeout prep — two client-channel YouTube videos to add as projects, with thumbnails already staged in `public/images/projects/` (`mnl-jumanji.png`, `und-lyow.png`, presence confirmed); `plan` → `execute` the same day on the user's "fast track" directive
- **Direct-translation confirmation:** `requested and confirmed` — the user's iteration-3 prompt directly authorizes the YouTube-embed capability and the two named projects, and instructs proceeding without gating until the work order is complete and reviewed

## Standard artifact locations

- **Authoritative plan:** [`project-page-layout-v3.md`](project-page-layout-v3.md)
- **Design review:** not applicable for iteration 3 — rapid path; the user's direct authorization replaces the design-review gate
- **Validations:** `validations/validation-[work-order-id].md` (iteration 3 adds `validation-WO-005.md`)
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/) (iteration 3 adds WO-005)

## Outcome

The portfolio grows from four to six projects: two whose media cannot be hosted directly (client-channel YouTube video) render as privacy-enhanced YouTube embeds inside the same viewport-balanced 16:9 featured frame as Mux-hosted media, with catalog-driven listing cards, detail pages, and sitemap entries appearing automatically.

## Scope

### In scope

- `youtube` video source kind — [`constants/projects.ts`](../../../constants/projects.ts) (types), [`components/project/VideoBlock.tsx`](../../../components/project/VideoBlock.tsx) (iframe embed branch), [`components/project/ProjectContent.tsx`](../../../components/project/ProjectContent.tsx) (block-fingerprint handling), [`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts) (video-ID validation rule)
- Two catalog projects using the new kind:
  - MN Lottery — Jumanji Campaign: `https://www.youtube.com/watch?v=ouIYp23CqUs`, thumbnail [`/images/projects/mnl-jumanji.png`](../../../public/images/projects/mnl-jumanji.png)
  - University of North Dakota — Lead Your Own Way: `https://www.youtube.com/watch?v=skJNJLSk9KA`, thumbnail [`/images/projects/und-lyow.png`](../../../public/images/projects/und-lyow.png)

### Out of scope

- Mux player replacement/re-theming, autoplay changes (including YouTube iframe autoplay parameters), SEO/metadata field authoring, other pages, remnant lint fixes, and any change to validated WO-001–004 behavior beyond the new source kind

## Context and motivation

At iteration-2 closeout prep the user requested a fast-tracked iteration 3: two more projects whose media is not legally available for direct hosting but is public on client YouTube channels. The established catalog architecture (a discriminated `ProjectVideoSource` union dispatched by `source.kind`) was designed for exactly this extension. The user supplied both video URLs and confirmed the thumbnails were pre-staged in the projects image folder (verified present: `mnl-jumanji.png`, `und-lyow.png`). The user directed: proceed without gating until the work order is complete and reviewed, then closeout.

## Proposed design

Confirmed by direct user authorization 2026-09-18.

### 1. `youtube` source kind

Add a third member to the source union (`{ kind: "youtube"; videoId: string }`). `VideoBlock` renders a privacy-enhanced iframe (`https://www.youtube-nocookie.com/embed/{videoId}`) filling the same `absolute inset-0` frame — no new dependency, YouTube's own visible controls, and every framing behavior from WO-003/WO-004 (true 16:9, viewport cap, centered, page-gutter minimum margins) carries over unchanged. The readiness checker gains an 11-character video-ID shape rule, keeping the build-time catalog integrity guarantee consistent with Mux playback IDs and fixture paths. `ProjectContent`'s block-fingerprint expression (which currently ternaries on `path` for non-Mux kinds) is extended to fingerprint YouTube sources by `videoId` — required, or TypeScript narrowing fails to compile.

### 2. Two catalog projects

Appended after `a-window-in-time-renewal-by-andersen` with `publicationState: "publishable"` (matching the four existing projects), slugs `mn-lottery-jumanji` and `und-lead-your-own-way`, single featured video blocks (a lone video auto-features; the flag is explicit for consistency), no autoplay (not requested). The `/projects` listing, ProjectCard grid, prerendering, and sitemap all consume the catalog and need no changes.

## Work-order plan

Created 2026-09-18 (rapid path; single consolidated work order per the user's efficiency directive; one implementer session, one reduced-scope validation session):

1. [`work-orders/WO-005-youtube-embeds-catalog.md`](work-orders/WO-005-youtube-embeds-catalog.md) — the `youtube` source kind and the two catalog projects; depends on WO-001–004 (WO-001/002/003 complete; WO-004 in-review — see Risks and decisions)

## Risks and decisions

- **Risk:** YouTube's iframe chrome differs from the Sutro/Media Chrome player used for Mux media — **Mitigation:** accepted; YouTube's native controls satisfy the visible-controls intent, and the surrounding frame is identical
- **Risk:** custom control surface is limited over YouTube iframes — **Mitigation:** the plain privacy-enhanced embed is chosen precisely to use YouTube's native controls rather than a custom skin
- **Decision:** `youtube-nocookie.com` is the embed domain (privacy-enhanced mode; standard sanctioned mechanism for embedding a client's own public channel video)
- **Decision:** slugs `mn-lottery-jumanji` and `und-lead-your-own-way` (kebab-case brand-campaign pattern consistent with the catalog)
- **Decision:** `publicationState: "publishable"` for both new projects (matches the four existing projects; no approved SEO fields yet — the same content-gates posture as the existing four)
- **Decision:** no autoplay flags on the new video blocks (not requested; YouTube iframe autoplay would additionally require muted parameters)
- **Decision:** WO-004 remains `in-review` — per the user's no-gating directive 2026-09-18, the WO-004 and WO-005 validation sessions batch before the combined closeout
- **Decision:** verification scope remains git-diff scope review + build/lint per the standing directive; browser automation waived; the user's visual confirmation is the approval gate

## Design readiness checklist

- [x] Scope and exclusions are explicit.
- [x] The initiative has one observable outcome and one named validation boundary (git-diff scope review + build/lint; user visual confirmation as the approval gate).
- [x] The initiative is traceable to its roadmap or parent product goal (iteration 3 of the project page layout initiative).
- [x] The advisory split assessment: kept as one iteration — one capability extension plus two catalog entries, one page family, single outcome.
- [x] Requirements and blueprints are linked (via WO-005).
- [x] Work orders are independently executable and ordered (single WO-005).
- [x] Every work order carries a durable-document impact classification per [`00-overview.md`](../../process/00-overview.md).
- [x] Initiative mode metadata (mode, requested by, confirmation, eligibility) is recorded.
- [x] Phase transition evidence and the direct-translation confirmation are recorded.
- [x] Validation cadence is recorded (reduced scope per standing directive).
- [x] Validation commands and manual gates are identified (build/lint + git diff; user visual confirmation).
- [x] Required human approval: the user's post-implementation visual confirmation, per their instruction.
