# Work Order: WO-002 — Immediate Video Provider Contract

## Metadata

- **Status:** `in-review`
- **Assignee:** ACME website team
- **Phase/order:** 2
- **Initiative:** [`../projects-page-v2.md`](../projects-page-v2.md)
- **Generated filename:** `WO-002-immediate-video-provider-contract.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-002.md`](../reviews/implementation-review-WO-002.md)

## Summary

Replace the current click-to-load iframe boundary with an immediately rendered video player and establish the typed component contract needed for next-video/Mux playback. The player must be present in the initial rendered project composition; immediate rendering must not be conflated with unmuted autoplay.

## In scope

- Verify and pin the selected next-video package/version and its current Next 16/React 19 integration API before implementation.
- Replace the provider-specific iframe assumptions in [`VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx:15) with the verified next-video rendering contract.
- Remove the [`isLoaded`](../../../../components/project/VideoBlock.tsx:23) state and the prompt/button branch at [`VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx:52).
- Preserve featured versus constrained geometry, `projectTitle`, block number, controls, accessible labeling, ordered `ProjectContent` dispatch, and intentional autoplay behavior.
- Add an explicit player loading/error/fallback boundary appropriate to the selected package; it must not recreate the rejected click-to-load UX.
- Add the required next-video configuration/plugin only after the package's documented setup is verified.

## Out of scope

- Uploading final portfolio media to Mux.
- Replacing all project catalog records with the placeholder; that is WO-003.
- Vercel production environment configuration; that is WO-004.
- Publication-state approval, final copy, credits, and rights.

## Requirements

- [`AC-PROJECT-002.1`](../../../../.forge/requirements/features/project-showcase.md:30): A valid project route renders its configured content blocks in editorial order.
- [`AC-PROJECT-003.1`](../../../../.forge/requirements/features/project-showcase.md:40): Project records can express publication state and SEO metadata independently of template validity.
- [`NFR-PROJECT-001`](../../../../.forge/requirements/features/project-showcase.md:45): Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../../.forge/blueprints/features/project-showcase.md:3) — preserve the typed catalog and ordered dispatcher while changing the video provider implementation.
- [`content-catalog.md`](../../../../.forge/blueprints/components/content-catalog.md) — provider/source metadata remains centralized in project records.

## Implementation plan

1. Confirm the package's current API, supported import form for files in [`videos/`](../../../../videos/), Next config integration, and Mux/local playback behavior; record the selected version and any deviations in the execution log.
2. Update dependencies and lockfile, then configure the verified next-video integration in [`next.config.ts`](../../../../next.config.ts:3) if required.
3. Refactor [`VideoBlock`](../../../../components/project/VideoBlock.tsx:15) to render the verified player immediately and remove the click-to-load state.
4. Preserve the existing `featured` geometry and add only the loading/error/accessibility behavior required by the provider.
5. Update callers only where required by the new typed source contract; do not populate final Mux IDs in this order.

## Files and systems

- **Create:** No new application component unless the verified package requires an isolated provider adapter or error boundary.
- **Update:** [`package.json`](../../../../package.json:11), [`pnpm-lock.yaml`](../../../../pnpm-lock.yaml), [`next.config.ts`](../../../../next.config.ts:3), [`components/project/VideoBlock.tsx`](../../../../components/project/VideoBlock.tsx:15), and typed contracts in [`constants/projects.ts`](../../../../constants/projects.ts:17) only as needed for provider compatibility.
- **Avoid changing:** Final project content, publication state, Mux credentials, Vercel settings, and unrelated project/image/text layout.

## Validation and acceptance

- **Automated checks:** [`pnpm lint`](../../../../package.json:9), [`pnpm build`](../../../../package.json:7), and the package's documented type/build checks.
- **Manual checks:** Open a project detail route with JavaScript enabled and confirm the player is present without clicking a load button; confirm featured and non-featured geometry, controls, keyboard access, and a usable unavailable/error state.
- **Acceptance test:** Given a valid project with a video block, when its detail route loads, then a video player is rendered immediately, the old load prompt is absent, project/block context is accessible, and no unmuted autoplay occurs unless explicitly configured.

## Documentation updates

- Record the verified package version/API and any config assumptions in [`projects-page-v2.md`](../projects-page-v2.md) and [`execution-log.md`](../execution-log.md).
- Do not claim Mux production readiness until WO-004 is complete.

## Completion checklist

- [x] Package/API/version and configuration are verified.
- [x] Immediate player rendering is implemented.
- [x] Old click-to-load prompt/state is removed.
- [x] Automated and manual checks have evidence.
- [ ] Implementation review is complete.
