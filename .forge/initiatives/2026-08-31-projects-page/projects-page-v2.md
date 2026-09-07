# Initiative: Projects Page — Video Delivery Refinement

> This is the authoritative v2 plan for the existing Projects page initiative. It supersedes the planning statements in [`projects-page-v1.md`](projects-page-v1.md) where the video delivery strategy differs. v1 remains the historical record of the route/catalog foundation.

## Initiative metadata

- **Status:** `in-progress`
- **Owner/orchestrator:** ACME website team
- **Created:** 2026-08-31
- **Updated:** 2026-09-07
- **Current gate:** real portfolio media and publication approval
- **Authoritative version:** `v2`
- **Base/default branch:** `master` (exact local branch state remains unexposed)
- **Initiative branch:** existing stakeholder-selected branch; no new branch created
- **Branch policy:** `optional during documentation` — selected: remain on the existing branch
- **Branch capability/evidence:** Git capability and exact current branch name are not available from the repository inspection record; no branch-level review is claimed.
- **Reduced-capability fallback or opt-out evidence:** User directed that no branch be recreated. This documentation pass uses source inspection and file-level evidence only.
- **Branch creation failure:** `none` — branch creation was intentionally not attempted

## Outcome

Replace the current click-to-load third-party iframe experience with an immediately rendered, site-integrated video player contract, prepare every project fixture for local temporary playback, and define the Mux/next-video production handoff and Vercel deployment gates.

## Boundary and sequencing

- **Parent goal:** Demonstrate ACME Virtual Production's capability through credible work; see [`project-showcase.md`](../../requirements/features/project-showcase.md:55).
- **Initiative type:** `product MVP stage` — project showcase media-delivery refinement.
- **Single observable outcome:** Every project video block renders a player immediately from a typed local/Mux-oriented source contract, with temporary fixture status visible to maintainers and production Mux configuration documented as a required release gate.
- **Validation boundary:** All project routes render without the old load prompt; local placeholder playback works; the selected next-video/Mux integration builds and runs; Mux/Vercel configuration is verified externally before production publication.
- **Split assessment:** `keep as one initiative` with sequential work orders.
- **Dependency order:** Player contract → temporary fixture migration → Mux/Vercel setup and real media migration → route/accessibility/build review.

## Scope

### In scope

- Remove the `isLoaded` click-to-load branch and the “Video is available when you choose to load the player” prompt from [`VideoBlock.tsx`](../../../components/project/VideoBlock.tsx:23).
- Establish the current [`next-video`](../../../package.json:11) integration path and verify its exact package API, Next.js compatibility, build plugin/configuration, and Mux workflow during implementation.
- Preserve featured/non-featured video geometry, ordered block rendering, descriptive project/block context, controls, and intentional autoplay behavior.
- Replace all current YouTube/Vimeo fixture records in [`constants/projects.ts`](../../../constants/projects.ts:17) with [`videos/placeholder.mp4`](../../../videos/placeholder.mp4) temporarily, preserving block order and featured intent.
- Add a typed temporary-fixture marker and a production-oriented local/Mux source contract without treating temporary media as publishable.
- Define the Mux upload, playback metadata, environment-variable, Vercel, account, billing, rights, and deployment gates.
- Validate immediate rendering, responsive behavior, accessibility, failure states, lint/build, browser routes, and publication readiness.

### Out of scope

- Final creative selection, editing, compression, captions, credits, rights, or copywriting for the portfolio videos.
- Publishing Mux credentials, tokens, or secrets to the repository or client bundle.
- Automatically changing a project's publication state merely because its video technically plays.
- CMS migration, automated media ingestion beyond the selected next-video/Mux workflow, or unrelated visual redesign.
- Production deployment until the Mux account and Vercel environment are configured and approved.

## Current evidence and investigation

- [`VideoBlock`](../../../components/project/VideoBlock.tsx:15) currently creates YouTube/Vimeo iframe URLs and initializes [`isLoaded`](../../../components/project/VideoBlock.tsx:23) from `autoplay`; ordinary blocks therefore show a prompt and button before any player is mounted.
- [`VideoPlatform`](../../../constants/projects.ts:17) only permits `youtube` and `vimeo`, and the four current records use those providers.
- [`next.config.ts`](../../../next.config.ts:3) contains no video plugin configuration, [`package.json`](../../../package.json:11) contains no next-video/Mux dependency, and [`pnpm-lock.yaml`](../../../pnpm-lock.yaml) contains no related package entries.
- [`videos/placeholder.mp4`](../../../videos/placeholder.mp4) exists at repository root and is not under [`public/`](../../../public/). The implementation work order must verify the selected next-video version's local-file ingestion/build behavior before relocating or duplicating the asset.
- Mux credentials and upload configuration are deployment-owned concerns. The work orders require server-side Vercel environment configuration, but intentionally leave exact variable names and generated metadata shape to the pinned package/version verification step.

## Requirements and blueprints

- [`project-showcase.md`](../../requirements/features/project-showcase.md:26) — valid project routes render ordered content and preserve route navigation.
- [`project-showcase.md`](../../requirements/features/project-showcase.md:36) — publication state remains independent from technical validity.
- [`project-showcase.md`](../../requirements/features/project-showcase.md:45) — media needs usable accessibility behavior and must not be the sole source of critical meaning.
- [`project-showcase.md`](../../blueprints/features/project-showcase.md:30) — typed project/content model and ordered block dispatcher.
- [`content-catalog.md`](../../blueprints/components/content-catalog.md) — centralized content ownership and readiness boundaries.
- [`00-overview.md`](../../process/00-overview.md:94) — required lint/build/browser/manual gates and no validation bypass.

## Work-order plan

| Order | Work order | Outcome | Dependencies | Review cadence |
|---|---|---|---|---|
| 2 | [`WO-002-immediate-video-provider-contract.md`](work-orders/WO-002-immediate-video-provider-contract.md) | Immediate player rendering and next-video/Mux-oriented component contract | [`WO-001-projects-page-foundation.md`](work-orders/WO-001-projects-page-foundation.md) | per work order |
| 3 | [`WO-003-temporary-local-video-fixtures.md`](work-orders/WO-003-temporary-local-video-fixtures.md) | All current records use the local placeholder with explicit temporary status | WO-002 | per work order |
| 4 | [`WO-004-mux-vercel-media-handoff.md`](work-orders/WO-004-mux-vercel-media-handoff.md) | Mux/Vercel setup and real portfolio media migration | WO-002, WO-003, stakeholder media approval | per work order |
| 5 | [`WO-005-video-validation-publication-readiness.md`](work-orders/WO-005-video-validation-publication-readiness.md) | Playback, accessibility, route, build, and publication gates are evidenced | WO-002, WO-003, WO-004 | per work order |

## Decisions and unresolved items

- **Decision:** Mux is the required production provider, surfaced through the selected next-video integration.
- **Decision:** The local [`placeholder.mp4`](../../../videos/placeholder.mp4) is temporary validation media only; it must carry an explicit fixture marker and must not imply content approval.
- **Decision:** Project players are visible immediately. This does not authorize unmuted autoplay; autoplay remains an explicit, browser-policy-aware presentation choice.
- **Unresolved implementation detail:** Exact next-video package version, import shape, Next config plugin, generated metadata shape, and Mux upload command must be verified during WO-002/WO-004 and pinned in the resulting dependency/configuration changes.
- **External gate:** Mux account, token ownership, Vercel environment variables, deployment project, playback access, billing, media rights, and stakeholder approval must be verified before production publication.

## Readiness checklist

- [x] User experience problem and desired immediate-rendering outcome are explicit.
- [x] Production provider and temporary local fixture policy are explicit.
- [x] Work orders are ordered by dependency with independent outcomes.
- [x] Existing requirements and blueprints are linked.
- [x] Exact next-video package version/API and local import/configuration path are verified (`next-video` 2.8.1).
- [x] Player implementation removes the click-to-load prompt.
- [x] All current fixtures use the temporary local source and marker.
- [x] Mux sync/upload is authorized after user verified account/token/Vercel readiness.
- [x] Temporary placeholder is synced to Mux and resolves through the player.
- [x] Mux/Vercel production playback was verified by the user.
- [ ] Real portfolio media migration is completed.
- [x] TypeScript, build, route, unknown-slug, immediate-player, and Mux-output evidence is recorded.
- [ ] Full lint gate is clean; current failure is a pre-existing [`componentMap.ts`](../../../utils/componentMap.ts:9) error.
- [ ] Playwright responsive/accessibility evidence is recorded; the MCP browser session was unavailable for the final pass.
- [ ] Stakeholder content/rights/publication approval is recorded.
- [ ] Implementation reviews and closeout review are completed.
