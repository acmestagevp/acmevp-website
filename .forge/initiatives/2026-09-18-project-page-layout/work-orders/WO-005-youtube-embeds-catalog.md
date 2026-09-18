# Work Order: WO-005 — YouTube-Embedded Projects: `youtube` Source Kind + Two Catalog Projects

## Metadata

- **Status:** `complete`
- **Assignee:** `impl-WO-005-2026-09-18-1` (fresh code-mode implementer session)
- **Phase/order:** 5 (iteration 3; depends on WO-001–004: WO-001/002/003 complete, WO-004 `in-review` — see Implementation plan note)
- **Initiative:** [`../project-page-layout-v3.md`](../project-page-layout-v3.md) (authoritative version)
- **Generated filename:** `WO-005-youtube-embeds-catalog.md`
- **Owner/orchestrator:** John Wildauer / Zoo orchestrator sessions
- **Validation:** [`../validations/validation-WO-005.md`](../validations/validation-WO-005.md)
- **Fixes:** `none`
- **Implementer session/agent ID:** `impl-WO-005-2026-09-18-1`
- **Session exception:** `none`

## Summary

Fast-tracked iteration 3 per the user's 2026-09-18 request: add a `youtube` video source kind rendered as a privacy-enhanced iframe embed inside the unchanged featured frame, and add two catalog projects that use it — "MN Lottery" (Jumanji Campaign) and "University of North Dakota" (Lead Your Own Way) — whose media cannot be hosted directly but is public on client YouTube channels.

## In scope

- **Source kind:** `YouTubeVideoSource { kind: "youtube"; videoId: string }` added to the `ProjectVideoSource` union and `VideoPlatform` in [`constants/projects.ts`](../../../../constants/projects.ts)
- **Render branch:** [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx) renders `https://www.youtube-nocookie.com/embed/{videoId}` as an iframe filling the same `absolute inset-0 h-full w-full` frame (true 16:9, viewport cap, centering, and page-gutter minimum margins all carry over unchanged)
- **Fingerprint fix:** [`components/project/ProjectContent.tsx`](../../../../components/project/ProjectContent.tsx) — the block-fingerprint ternary currently accesses `block.source.path` for any non-Mux kind; with a third kind TypeScript narrowing fails to compile, so it must fingerprint YouTube sources by `videoId` (required, not optional)
- **Readiness rule:** [`utils/projectReadiness.ts`](../../../../utils/projectReadiness.ts) validates YouTube video IDs (11-character `/^[A-Za-z0-9_-]{11}$/`) as a technical failure, consistent with the Mux playback-ID and fixture-path rules
- **Two catalog entries** appended after `a-window-in-time-renewal-by-andersen`:
  - `mn-lottery-jumanji` — title `MN Lottery`, subtitle `Jumanji Campaign`, thumbnail `/images/projects/mnl-jumanji.png`, single `featured: true` video block with `source: { kind: "youtube", videoId: "ouIYp23CqUs" }` (from `https://www.youtube.com/watch?v=ouIYp23CqUs`)
  - `und-lead-your-own-way` — title `University of North Dakota`, subtitle `Lead Your Own Way`, thumbnail `/images/projects/und-lyow.png`, single `featured: true` video block with `source: { kind: "youtube", videoId: "skJNJLSk9KA" }` (from `https://www.youtube.com/watch?v=skJNJLSk9KA`)
  - Both: `publicationState: "publishable"` (matches the four existing projects), no `seo` fields (route-fallback metadata, same posture as the existing four), no autoplay

## Out of scope

- Mux player replacement/re-theming, player theming for the YouTube embed (native YouTube controls are used), autoplay changes or YouTube autoplay parameters, SEO field authoring, catalog reordering of the four existing projects, other pages, remnant lint fixes, and any change to validated WO-001–004 behavior beyond the new source kind

## Requirements

Copy applicable requirement wording and acceptance criteria verbatim:

- **REQ-PDET-001: Project pages render header and content blocks in catalog order**
  - **AC-PDET-001.1:** "`/projects/[slug]` shall render the project's title as the page heading, with its subtitle beneath when present." — applies to the two new pages.
  - **AC-PDET-001.2:** "The page shall render the project's content blocks in the order defined by the catalog." — the new entries are catalog-driven like the existing four.
- **REQ-PDET-002: Video blocks play approved media**
  - **AC-PDET-002.1:** "Video blocks with a Mux source shall play via the Mux playback ID with visible controls." — unchanged; this work order adds a parallel AC for YouTube sources (see Durable-document impact).
  - **AC-PDET-002.2 (as revised by WO-004):** viewport-balanced true-16:9 framing — applies unchanged to YouTube-embedded featured videos (the iframe fills the identical frame).
  - **AC-PDET-002.5:** "The player shall expose an accessible title and a screen-reader status describing the video." — the iframe `title` and the existing `sr-only` status paragraph apply.
- **REQ-PLIST-001: Projects page lists the full catalog as a card grid**
  - **AC-PLIST-001.1:** "The `/projects` page shall render one card for every project in the catalog." — automatically satisfied (six cards after this change); no code change.

## Blueprints

- [`blueprints/components/media-delivery.md`](../../../../.forge/blueprints/components/media-delivery.md) — source-union contract, `VideoBlock` responsibilities, the "Mux hosts all production media" integration contract, and ADR-001 all update for the third kind
- [`blueprints/features/project-detail.md`](../../../../.forge/blueprints/features/project-detail.md) — `ContentBlock` model constraints (readiness validation) and composition notes
- [`blueprints/components/presentation-foundation.md`](../../../../.forge/blueprints/components/presentation-foundation.md) — expected `verify unchanged` (no chrome/layout changes)
- [`requirements/features/projects-listing.md`](../../../../.forge/requirements/features/projects-listing.md) — expected `verify unchanged` (the grid is catalog-driven; nothing in it becomes inaccurate)

## Implementation plan

1. **Catalog types** — [`constants/projects.ts`](../../../../constants/projects.ts): add `YouTubeVideoSource { kind: "youtube"; videoId: string; temporary?: false }`; extend `ProjectVideoSource` and `VideoPlatform` (`"local" | "mux" | "youtube"`); append the two project entries exactly as specified in In scope (comment noting the client-channel YouTube source is welcome, e.g. that the embed is used because the media cannot be hosted directly)
2. **Render branch** — [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx): add a `source.kind === "youtube"` branch **before** the Mux else-branch (keeps narrowing sound): `<iframe src={`https://www.youtube-nocookie.com/embed/${source.videoId}`} className="absolute inset-0 h-full w-full" title={title} aria-describedby={`video-status-${blockNumber ?? 0}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />` — no poster (YouTube shows its own thumbnail), no autoplay parameters
3. **Fingerprint** — [`components/project/ProjectContent.tsx`](../../../../components/project/ProjectContent.tsx): extend the video fingerprint to `block.source.kind === "mux" ? block.source.playbackId : block.source.kind === "youtube" ? block.source.videoId : block.source.path` (otherwise the build fails to compile once the union gains a third member)
4. **Readiness rule** — [`utils/projectReadiness.ts`](../../../../utils/projectReadiness.ts): add `if (block.type === "video" && block.source.kind === "youtube" && !/^[A-Za-z0-9_-]{11}$/.test(block.source.videoId))` → technical failure "Invalid YouTube video ID shape." (mirroring the Mux rule at [`utils/projectReadiness.ts`](../../../../utils/projectReadiness.ts) line 50)
5. **Verify** — `pnpm build` (expect 16 static routes now: six SSG project pages), `pnpm lint` (baseline-only failures expected), prerendered HTML contains the two new pages with the `youtube-nocookie.com/embed/` iframe srcs and correct `<h1>` titles; `/projects` listing markup contains six `ProjectCard` links

Note on WO-004: it is `in-review` awaiting validation. Per the user's no-gating directive 2026-09-18 the iteration-3 implementation proceeds; the WO-004 and WO-005 validation sessions batch before the combined closeout. Do not modify or revert WO-004's delivered changes.

## Files and systems

- **Update:** `constants/projects.ts`, `components/project/VideoBlock.tsx`, `components/project/ProjectContent.tsx`, `utils/projectReadiness.ts`, plus the authorized durable documents
- **Avoid changing:** `components/project/TextBlock.tsx`, `components/project/ImageBlock.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `components/ui/*`, `app/globals.css`, `videos/*`, `video.d.ts` (no local-fixture changes), the four existing catalog entries

## Validation and E2E acceptance tests

**Reduced scope per the standing user directive — no browser automation; the user visually confirms all changes after implementation.**

- **Automated checks:** `pnpm build`, `pnpm lint` (pre-existing baseline failures in `components/Banner.tsx` and `utils/componentMap.ts` expected; do not fix)
- **Prerendered-HTML checks (recommended evidence):** `.next/server/app/projects/mn-lottery-jumanji.html` and `und-lead-your-own-way.html` exist; each contains `youtube-nocookie.com/embed/ouIYp23CqUs` / `youtube-nocookie.com/embed/skJNJLSk9KA`, the correct `<h1>` title, exactly one `h1`, and no Mux thumbnail URL; `projects.html` shows six card links
- **Scope check:** the validator reviews the git diff to confirm the change set matches this work order and contains no rogue changes
- **Acceptance test (assessed from the diff/build):** given the catalog, when built, then two new SSG project pages exist at the specified slugs rendering the client's YouTube videos via the privacy-enhanced embed inside the unchanged viewport-balanced 16:9 frame, the listing shows six cards, and invalid YouTube IDs would fail readiness exactly like invalid Mux IDs

## Durable-document impact

- **Requirements impact:** `update` — selected: `update`
- **Blueprint impact:** `update` — selected: `update`
- **Affected documents/IDs:** `requirements/features/project-detail.md` (new AC-PDET-002.7: YouTube sources render the client's public video via the privacy-enhanced embed with visible controls; Terminology "YouTube embed" entry); `blueprints/components/media-delivery.md` (source-union contract + `VideoBlock` responsibilities + integration contract + ADR-001 revision: Mux for hostable production media, YouTube embeds for client-channel-only media); `blueprints/features/project-detail.md` (ContentBlock constraints note YouTube ID validation); `requirements/features/projects-listing.md` and `blueprints/components/presentation-foundation.md` — `verify unchanged`
- **Rationale and evidence:** AC-PDET-002.1 and the media-delivery contracts currently describe a two-member source union and an ADR-001 that says "Mux hosts all production media"; the third kind revises those contracts, and the catalog integrity rule set must cover the new ID shape
- **Authorized documentation changes:** the revisions listed above, kept minimal and accurate

## Implementation record (impl-WO-005-2026-09-18-1, 2026-09-18)

**Changed files (no files created or deleted; the two thumbnails were pre-staged by the user before dispatch):**

- `constants/projects.ts` — added `YouTubeVideoSource { kind: "youtube"; videoId: string; temporary?: false }`; `ProjectVideoSource` is now `LocalVideoSource | MuxVideoSource | YouTubeVideoSource`; `VideoPlatform` extended to `"local" | "mux" | "youtube"`; appended the two catalog entries exactly per In scope (`mn-lottery-jumanji`, `und-lead-your-own-way` — `publicationState: "publishable"`, no `seo` fields, no autoplay, each a single `featured: true` video block with the specified YouTube source) with a comment noting the client-channel embed rationale; the stale in-file header comment ("only the four official projects") was revised to describe the Mux + YouTube-embed media posture so the file's own documentation stays accurate.
- `components/project/VideoBlock.tsx` — added the `source.kind === "youtube"` branch **before** the Mux else-branch: `<iframe src={`https://www.youtube-nocookie.com/embed/${source.videoId}`}>` with `className="absolute inset-0 h-full w-full"`, `title`, `aria-describedby={`video-status-${blockNumber ?? 0}`}`, the standard YouTube capability `allow` list, and `allowFullScreen`; no poster, no autoplay parameters; featured/standard frame logic, `sr-only` status paragraph, local-fixture and Mux branches untouched.
- `components/project/ProjectContent.tsx` — video fingerprint extended to `block.source.kind === "mux" ? block.source.playbackId : block.source.kind === "youtube" ? block.source.videoId : block.source.path` (restores compiling TypeScript narrowing with the third union member; one-line behavioral change).
- `utils/projectReadiness.ts` — added the YouTube technical-failure rule `!/^[A-Za-z0-9_-]{11}$/.test(block.source.videoId)` → "Invalid YouTube video ID shape." on `content[i].source.videoId`, placed between the Mux and local-fixture rules. The file also carries a whole-file Prettier reformat applied by the editor's format-on-save during the tool write (the user-confirmed intended-behavior pattern from WO-001, 2026-09-18): every pre-existing rule is wrapped verbatim — same conditions, fields, messages, regexes — formatting-only, no behavior change.
- `.forge/requirements/features/project-detail.md` — authorized update: new **AC-PDET-002.7** (privacy-enhanced `youtube-nocookie.com` embed with visible native controls, no autoplay parameters, same featured/standard frame); "YouTube embed" Terminology entry.
- `.forge/blueprints/components/media-delivery.md` — authorized update: Capability Summary and source-union contract cover the third kind (11-character ID shape); `VideoBlock` responsibility bullet + "YouTube embed" key contract (iframe src/allow/allowFullScreen, no poster, no autoplay parameters); poster contract extended (YouTube's own thumbnail); integration contract revised to "Mux hosts all hostable production media … YouTube embed for client-channel-only media"; ADR-001 retitled and expanded accordingly.
- `.forge/blueprints/features/project-detail.md` — authorized update: `ContentBlock` constraints note the 11-character YouTube ID shape; REQ-PDET-002 alignment row mentions YouTube embeds.
- `.forge/requirements/features/projects-listing.md` — verified unchanged and accurate (AC-PLIST-001.1 is catalog-driven — "one card for every project in the catalog" now means six; no statement becomes inaccurate).
- `.forge/blueprints/components/presentation-foundation.md` — verified unchanged and accurate (no chrome/layout/primitive changes; `VideoBlock` is not documented there).
- `.forge/initiatives/2026-09-18-project-page-layout/work-orders/WO-005-youtube-embeds-catalog.md` — this implementation record; status set to `in-review`.
- `.forge/initiatives/2026-09-18-project-page-layout/execution-log.md` — chronological entry appended.

**Work-order assumptions verified before implementation:** the fingerprint ternary at `ProjectContent.tsx:28` indeed read `block.source.path` for any non-Mux kind; the Mux readiness rule sat at `utils/projectReadiness.ts:50`; the featured frame carried WO-004's viewport-balanced class; `mnl-jumanji.png` / `und-lyow.png` were present in `public/images/projects/`. No material discrepancies.

**Validation results (2026-09-18):**

- `pnpm build` — **pass** (exit 0; Next.js 16.1.6/Turbopack; compiled in 2.8s; **16/16 static pages** — the expected count with six SSG project pages; `/projects/[slug]` lists four paths + `[+3 more paths]`).
- `pnpm lint` — **fail, pre-existing baseline only** (exit 1): `components/Banner.tsx` 12:65 warning (unused `isReversed`), `utils/componentMap.ts` 9:48 error (`no-explicit-any`) — remnant files matching the recorded baseline; no findings in any changed file; not fixed (out of scope).
- Prerendered-HTML checks (recommended evidence, all pass):
  - `.next/server/app/projects/mn-lottery-jumanji.html` and `und-lead-your-own-way.html` exist; each contains the correct iframe src (`youtube-nocookie.com/embed/ouIYp23CqUs` / `youtube-nocookie.com/embed/skJNJLSk9KA`), exactly one `iframe`, exactly one `h1` (`<h1 class="text-4xl md:text-6xl font-serif font-gradient">MN Lottery</h1>` / `…font-gradient">University of North Dakota</h1>`), the subtitle text, and no `image.mux.com` reference.
  - `projects.html` contains exactly **six** card links (`href="/projects/{slug}"`): the four existing slugs plus `mn-lottery-jumanji` and `und-lead-your-own-way`.
- Scope evidence prepared for the validator: code diff confined to the four authorized files (`git diff --stat`: `constants/projects.ts` 47 lines, `components/project/VideoBlock.tsx` 18, `components/project/ProjectContent.tsx` 2, `utils/projectReadiness.ts` 126 — the latter dominated by the formatting-only Prettier reformat; its sole behavioral delta is the YouTube rule); thumbnails untracked as pre-staged inputs; WO-004's delivered changes untouched.
- Per the reduced validation scope (user directive 2026-09-18), no browser automation was run; the git-diff scope review is the validator's step and the user visually confirms the two new pages and the six-card listing after implementation.

## Completion checklist

- [x] Implementation is complete within scope.
- [x] Tests/checks and required gates have evidence (build/lint; prerendered-HTML checks; git-diff scope review by the validator; user visual confirmation to follow).
- [x] Durable-document impact classification is accurate against the diff, and authorized documentation updates are applied.
- [x] Execution log is appended, including dispatch and completion session/agent identifiers.
- [x] Work order is `in-review` with recorded evidence, and completion (`complete`) comes only from a passed validation in `validations/validation-WO-005.md`.

**Completion record (2026-09-18):** set to `complete` by the user's explicit closeout directive — the user reviewed the delivered behavior ("otherwise, everything looks good"), added a manual catalog reorder (`mn-lottery-jumanji` moved to the first listing position; build re-verified green afterwards), and directed commit + closeout + merge to `master`. The batched validation session (the planned `validations/validation-WO-005.md`) was waived by this gate-owner decision and is recorded in [`../execution-log.md`](../execution-log.md).
