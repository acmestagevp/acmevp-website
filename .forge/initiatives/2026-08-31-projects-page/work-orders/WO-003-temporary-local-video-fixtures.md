# Work Order: WO-003 — Temporary Local Video Fixtures

## Metadata

- **Status:** `in-review`
- **Assignee:** ACME website team
- **Phase/order:** 3
- **Initiative:** [`../projects-page-v2.md`](../projects-page-v2.md)
- **Generated filename:** `WO-003-temporary-local-video-fixtures.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-003.md`](../reviews/implementation-review-WO-003.md)

## Summary

Move every current project video fixture to the supplied local [`videos/placeholder.mp4`](../../../../videos/placeholder.mp4) through the verified next-video source contract. Preserve each video block's position and featured intent while making the temporary status explicit and non-publishable.

## In scope

- Extend the typed video source model in [`constants/projects.ts`](../../../../constants/projects.ts:17) for local temporary media and the future Mux-backed production source.
- Replace every current YouTube/Vimeo fixture in [`projects`](../../../../constants/projects.ts:71) with the local placeholder source.
- Preserve all current project/block ordering, featured flags, project titles, and non-video blocks.
- Add a typed marker or equivalent explicit status that identifies the placeholder as temporary fixture media.
- Ensure readiness validation reports temporary media as technically usable but not publication-ready.
- Verify whether the selected next-video package imports the root [`videos/`](../../../../videos/) file directly or requires generated metadata/relocation; follow the verified package behavior rather than duplicating media speculatively.

## Out of scope

- Final video editing, compression, captions, credits, rights, or Mux upload.
- Removing the placeholder marker before stakeholder approval.
- Changing text/image content or project publication state.

## Requirements

- [`AC-PROJECT-002.1`](../../../../.forge/requirements/features/project-showcase.md:30): A valid project route renders its configured content blocks in editorial order.
- [`AC-PROJECT-003.1`](../../../../.forge/requirements/features/project-showcase.md:40): Project records can express publication state and SEO metadata independently of template validity.
- [`AC-PROJECT-003.2`](../../../../.forge/requirements/features/project-showcase.md:43): Only approved indexable or publishable records are represented as indexable by project metadata behavior.

## Blueprints

- [`project-showcase.md`](../../../../.forge/blueprints/features/project-showcase.md:30) — typed routeable project records and ordered content blocks.
- [`content-catalog.md`](../../../../.forge/blueprints/components/content-catalog.md) — central content source and readiness separation.

## Implementation plan

1. Use the source contract established by WO-002 and determine the smallest representation for local temporary media, future Mux media, and fixture status.
2. Update all four current video blocks in [`constants/projects.ts`](../../../../constants/projects.ts:71) to reference the placeholder without reordering content.
3. Update [`projectReadiness.ts`](../../../../utils/projectReadiness.ts:38) so local fixture playback can pass technical checks while temporary media remains a content gate.
4. Verify every generated project route renders the placeholder player and no old YouTube/Vimeo URL remains in the project catalog.

## Files and systems

- **Create:** No application file unless a small typed media contract requires it.
- **Update:** [`constants/projects.ts`](../../../../constants/projects.ts:17), [`utils/projectReadiness.ts`](../../../../utils/projectReadiness.ts:38), and the verified next-video-generated media metadata/configuration if required.
- **Avoid changing:** [`videos/placeholder.mp4`](../../../../videos/placeholder.mp4) contents, project ordering, final content claims, and Mux credentials.

## Validation and acceptance

- **Automated checks:** [`pnpm lint`](../../../../package.json:9), [`pnpm build`](../../../../package.json:7), readiness validation, and a repository search proving no legacy provider IDs remain in the project catalog.
- **Manual checks:** Visit all four current project routes and confirm each video block displays the local placeholder, preserves its position, and remains marked as temporary in the data/readiness model.
- **Acceptance test:** Given any current project record with a video block, when its route renders, then it uses the local placeholder through the typed provider contract, preserves editorial order and featured intent, and remains excluded from publication readiness.

## Documentation updates

- Record the temporary fixture policy and verified file ingestion behavior in [`projects-page-v2.md`](../projects-page-v2.md) and [`execution-log.md`](../execution-log.md).

## Completion checklist

- [x] All video fixtures use the local placeholder.
- [x] Temporary status is typed and readiness-gated.
- [x] Ordered block composition is unchanged.
- [x] Route/build/readiness checks have evidence.
- [ ] Implementation review is complete.
