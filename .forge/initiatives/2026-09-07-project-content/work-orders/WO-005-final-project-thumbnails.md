# Work Order: WO-005 — Final Project Thumbnails

## Metadata

- **Status:** `complete`
- **Assignee:** ACME website team
- **Phase/order:** 5 — follow-up after first-draft closeout
- **Initiative:** [`../project-content-v1.md`](../project-content-v1.md)
- **Generated filename:** `WO-005-final-project-thumbnails.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** Create [`../reviews/implementation-review-WO-005.md`](../reviews/implementation-review-WO-005.md) only after this work order is complete.

## Summary

Replace the temporary listing thumbnails in the four official project records with the supplied local images under [`public/images/projects/`](../../../public/images/projects/). This is a focused content follow-up; review is intentionally deferred until implementation and validation are complete.

## In scope

- Map the supplied files to the four official records in listing order:
  - [`future-iq.png`](../../../public/images/projects/future-iq.png) → Cadillac / Future IQ
  - [`future-iq-bts.png`](../../../public/images/projects/future-iq-bts.png) → Cadillac / Future IQ: Behind the Scenes
  - [`polica-wasted-me.png`](../../../public/images/projects/polica-wasted-me.png) → Polica / Wasted Me
  - [`rba-awit.png`](../../../public/images/projects/rba-awit.png) → A Window in Time / Renewal by Andersen
- Update only the thumbnail paths in the canonical project catalog.
- Verify the Projects listing renders all four new thumbnails and no temporary thumbnail path remains.

## Out of scope

- Changing project order, titles, slugs, Mux sources, credit text, route presentation, SEO metadata, or image assets.
- Creating the implementation review before the work order is complete.

## Requirements

- `AC-PROJECT-001.1`: The Projects route displays each approved listing record with title, optional subtitle, and thumbnail where available.
- `AC-PROJECT-001.2`: Each listing links to its corresponding stable project detail route.

## Blueprints

- [`content-catalog.md`](../../../blueprints/components/content-catalog.md) — keep project thumbnails in the canonical catalog.
- [`project-showcase.md`](../../../blueprints/features/project-showcase.md) — preserve stable project records and listing composition.

## Implementation plan

1. Replace the four temporary thumbnail constants/usages in [`projects.ts`](../../../constants/projects.ts) with the supplied `/images/projects/...` paths.
2. Run the build and inspect the Projects route with Playwright.
3. Record changed files and validation results, then create the deferred implementation review.

## Files and systems

- **Create:** None; supplied image assets already exist.
- **Update:** [`projects.ts`](../../../constants/projects.ts).
- **Avoid changing:** Project content blocks, Mux playback IDs, routes, global image configuration, and the supplied image files.

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm build`; run `pnpm lint` and record any existing failure.
- **Manual/external checks:** Playwright at `/projects`; confirm each card image source resolves to the matching `/images/projects/` asset.
- **Acceptance test:** Given the four supplied image files, when the Projects route renders, then each official project card uses its matching final thumbnail and no temporary thumbnail path is referenced by the catalog.

## Documentation updates

- Update this work order status and append execution evidence to [`execution-log.md`](../execution-log.md).
- Create [`implementation-review-WO-005.md`](../reviews/implementation-review-WO-005.md) after implementation and validation only.

## Completion checklist

- [x] Four catalog thumbnail paths use `/images/projects/` assets.
- [x] Projects listing displays the matching images.
- [x] Build and browser validation evidence is recorded.
- [x] Deferred implementation review is created after completion.
