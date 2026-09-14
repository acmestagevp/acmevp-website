# Work Order: WO-003 — Project Route Presentation

## Metadata

- **Status:** `complete`
- **Assignee:** ACME website team
- **Phase/order:** 3
- **Initiative:** [`../project-content-v1.md`](../project-content-v1.md)
- **Generated filename:** `WO-003-project-route-presentation.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-003.md`](../reviews/implementation-review-WO-003.md)

## Summary

Verify that the existing Projects listing and dynamic detail route present the four authored records correctly. Make only content-integration or contract corrections required for the approved records; do not introduce a visual redesign.

## In scope

- Verify exact listing order, titles, subtitles, placeholder thumbnails, links, detail headers, credit text, and Mux players.
- Verify Contact and Back to Projects navigation and unknown-slug not-found behavior.
- Correct any route integration issue caused by the new catalog records.

## Out of scope

- New page concepts, unrelated styling, SEO expansion, thumbnail replacement, or additional project content.

## Requirements

- `AC-PROJECT-001.1`: The Projects route displays each approved listing record with title, optional subtitle, and thumbnail where available.
- `AC-PROJECT-001.2`: Each listing links to its corresponding stable project detail route.
- `AC-PROJECT-002.1`: A valid project route renders its configured content blocks in editorial order.
- `AC-PROJECT-002.2`: Unknown project slugs produce a not-found outcome rather than misleading content.
- `AC-PROJECT-002.3`: Project pages provide a clear route to Contact and back to Projects.

## Blueprints

- [`project-showcase.md`](../../../blueprints/features/project-showcase.md) — preserve route and dispatcher composition.
- [`shared-site-shell.md`](../../../blueprints/components/shared-site-shell.md) — preserve existing shell/navigation behavior.

## Implementation plan

1. Exercise the Projects listing and all four stable detail routes.
2. Correct only authorized integration defects.
3. Confirm the old routes no longer resolve to misleading project content.

## Files and systems

- **Create:** None.
- **Update:** Existing project route/presentation files only if validation identifies an approved-content integration defect.
- **Avoid changing:** Global styles, unrelated routes, navigation labels, and the project catalog scope.

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm lint`; `pnpm build`.
- **Manual/external checks:** Playwright at `/projects`, all four approved slugs, and an unknown slug across responsive sizes.
- **Acceptance test:** Given the four-record catalog, when a visitor opens Projects and follows each card, then the correct detail route, Mux video, credit text, Contact link, and Projects link appear; unknown slugs produce not-found.

## Documentation updates

- Record route evidence and any changed files in [`execution-log.md`](../execution-log.md).

## Completion checklist

- [x] Listing order and links are correct.
- [x] Four detail routes render correct content.
- [x] Navigation and unknown-slug behavior pass.
- [x] Responsive/accessibility evidence is recorded.
