# Work Order: WO-002 — Mux Video and Credit Content

## Metadata

- **Status:** `complete`
- **Assignee:** ACME website team
- **Phase/order:** 2
- **Initiative:** [`../project-content-v1.md`](../project-content-v1.md)
- **Generated filename:** `WO-002-mux-video-and-credit-content.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-002.md`](../reviews/implementation-review-WO-002.md)

## Summary

Connect each official project to its ready Mux asset and add the supplied credit text as the only supporting editorial content. Preserve the exact Mux playback IDs and the intentional `Kat Rapheal` spelling.

## In scope

- Add one Mux video block per project using the four supplied playback IDs.
- Add a text block containing each project's supplied director, cinematographer, or producer credit.
- Preserve rights/license approval and explicit `publishable` state from the accepted plan.

## Out of scope

- New descriptions, stills, captions, SEO fields, local thumbnail replacement, media editing, or additional videos.

## Requirements

- `AC-PROJECT-002.1`: A valid project route renders its configured content blocks in editorial order.
- `AC-PROJECT-003.1`: Project records can express publication state and SEO metadata independently of template validity.
- `NFR-PROJECT-001`: Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../blueprints/features/project-showcase.md) — use the discriminated video/text block union.
- [`content-catalog.md`](../../../blueprints/components/content-catalog.md) — media crosses the catalog boundary through typed blocks.

## Implementation plan

1. Map each record to its verified Mux playback ID from the corresponding [`videos/`](../../../videos/) metadata file.
2. Add the supplied credit as a concise text block after the video.
3. Verify the `VideoBlock` Mux branch receives the source and no local placeholder source remains.

## Files and systems

- **Create:** None.
- **Update:** [`projects.ts`](../../../constants/projects.ts), unless a narrowly scoped type correction is required.
- **Avoid changing:** Mux metadata files, credentials, video assets, and unrelated renderers.

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm lint`; `pnpm build`.
- **Manual/external checks:** Verify all four Mux assets report `ready` and playback IDs match the metadata files.
- **Acceptance test:** Given an official project route, when it renders, then its Mux video plays through the configured player and the supplied credit text is visible as page context.

## Documentation updates

- Record playback-ID mapping, changed files, and validation evidence in [`execution-log.md`](../execution-log.md).

## Completion checklist

- [x] Four Mux playback IDs are mapped correctly.
- [x] Four credit blocks match the approved wording.
- [x] No placeholder video source remains.
- [x] Validation evidence is recorded.
