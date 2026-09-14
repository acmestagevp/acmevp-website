# Work Order: WO-004 — Publication Validation

## Metadata

- **Status:** `complete`
- **Assignee:** ACME website team with ACME content stakeholder
- **Phase/order:** 4
- **Initiative:** [`../project-content-v1.md`](../project-content-v1.md)
- **Generated filename:** `WO-004-publication-validation.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-004.md`](../reviews/implementation-review-WO-004.md)

## Summary

Validate the complete four-project showcase and assemble publication evidence. Temporary thumbnails remain an explicit follow-up; they must not be confused with temporary video fixtures, which are prohibited in the official records.

## In scope

- Run lint/build and browser route checks for the listing, four detail routes, and unknown slug.
- Verify Mux playback, credit context, fallback metadata, accessibility, responsive behavior, and navigation.
- Record stakeholder rights/license assertion and publication approval.
- Record thumbnail replacement as follow-up without expanding the project scope.

## Out of scope

- Replacing thumbnails, adding SEO copy, production deployment, merging to `master`, or fixing unrelated pre-existing failures without an explicit decision.

## Requirements

- `AC-PROJECT-002.2`: Unknown project slugs produce a not-found outcome rather than misleading content.
- `AC-PROJECT-003.2`: Only approved indexable or publishable records are represented as indexable by project metadata behavior.
- `NFR-PROJECT-001`: Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../blueprints/features/project-showcase.md) — validate route, metadata, dispatcher, and media composition.
- [`00-overview.md`](../../../process/00-overview.md) — apply required lint/build/browser and manual gates without bypass.

## Implementation plan

1. Run `pnpm lint` and `pnpm build`, recording exact results.
2. Use Playwright to validate the listing, four detail routes, unknown slug, responsive states, accessibility, and Mux playback.
3. Record stakeholder rights/publication approval and the temporary-thumbnail follow-up.
4. Prepare implementation and closeout review evidence without marking the initiative complete until all required gates pass.

## Files and systems

- **Create:** Validation evidence and required review artifacts.
- **Update:** [`execution-log.md`](../execution-log.md) and authorized state corrections only.
- **Avoid changing:** Scope, approval state, or unrelated routes to make a gate appear to pass.

## Validation and E2E acceptance tests

- **Automated checks:** `pnpm lint`; `pnpm build`.
- **Manual/external checks:** `pnpm dev` with Playwright at `http://localhost:3000`; verify stakeholder publication approval.
- **Acceptance test:** Given the four official records, when all checks pass, then only those records are discoverable, each uses its Mux video and credit context, and all incomplete follow-up work is documented.

## Documentation updates

- Append attempts/results, changed files, review links, manual gates, and thumbnail follow-up to [`execution-log.md`](../execution-log.md).
- Create implementation and closeout reviews using the Forge templates.

## Completion checklist

- [x] Lint/build results are recorded.
- [x] Browser route/responsive/accessibility/media evidence is recorded.
- [x] Rights/publication approval is recorded.
- [x] Thumbnail follow-up is recorded.
- [x] Implementation and closeout reviews are complete.
