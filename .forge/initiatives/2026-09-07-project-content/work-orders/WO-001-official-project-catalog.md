# Work Order: WO-001 — Official Project Catalog

## Metadata

- **Status:** `complete`
- **Assignee:** ACME website team
- **Phase/order:** 1
- **Initiative:** [`../project-content-v1.md`](../project-content-v1.md)
- **Generated filename:** `WO-001-official-project-catalog.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-001.md`](../reviews/implementation-review-WO-001.md)

## Summary

Replace the provisional project catalog with exactly four official project records in the stakeholder-approved order. Keep the provided titles, subtitles, slugs, and intentional temporary placeholder thumbnails while removing all previous project records from the exported catalog.

## In scope

- Author the four records: Cadillac / Future IQ; Cadillac / Future IQ: Behind the Scenes; Polica / Wasted Me; A Window in Time / Renewal by Andersen.
- Use the approved proposed slugs from [`project-content-v1.md`](../project-content-v1.md) and preserve listing order.
- Set records to `publishable`, retain fallback metadata, and use existing public placeholder thumbnail assets explicitly as temporary.

## Out of scope

- Mux playback wiring, credit copy blocks, thumbnail replacement, new copy, or unrelated records.

## Requirements

- `AC-PROJECT-001.1`: The Projects route displays each approved listing record with title, optional subtitle, and thumbnail where available.
- `AC-PROJECT-001.2`: Each listing links to its corresponding stable project detail route.
- `AC-PROJECT-003.1`: Project records can express publication state and SEO metadata independently of template validity.

## Blueprints

- [`project-showcase.md`](../../../blueprints/features/project-showcase.md) — preserve the typed Project record and publication state.
- [`content-catalog.md`](../../../blueprints/components/content-catalog.md) — keep [`projects.ts`](../../../constants/projects.ts) as the canonical source.

## Implementation plan

1. Replace the current `projects` array with the four approved records in order.
2. Assign stable proposed slugs, temporary existing thumbnail paths, and `publishable` state.
3. Confirm no old project or placeholder-video record remains in the exported array.

## Files and systems

- **Create:** None.
- **Update:** [`projects.ts`](../../../constants/projects.ts).
- **Avoid changing:** Route components, video renderers, unrelated catalogs, and thumbnail assets.

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm lint`; `pnpm build`.
- **Manual/external checks:** Inspect the exported array for exactly four records and exact order.
- **Acceptance test:** Given the catalog, when the Projects route consumes it, then exactly the four approved records appear in the approved order and every record has a stable slug, title, subtitle, thumbnail, and publication state.

## Documentation updates

- Append changed files and validation evidence to [`execution-log.md`](../execution-log.md).

## Completion checklist

- [x] Exactly four records are present in order.
- [x] No prior project record remains.
- [x] Temporary thumbnail usage is documented.
- [x] Validation evidence is recorded.
