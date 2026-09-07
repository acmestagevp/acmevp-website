# Work Order: WO-004 — Mux and Vercel Media Handoff

## Metadata

- **Status:** `in-progress` — temporary asset path verified; real portfolio migration remains
- **Assignee:** ACME website/deployment/content teams
- **Phase/order:** 4
- **Initiative:** [`../projects-page-v2.md`](../projects-page-v2.md)
- **Generated filename:** `WO-004-mux-vercel-media-handoff.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-004.md`](../reviews/implementation-review-WO-004.md)

## Summary

Configure the verified next-video/Mux production path and replace the temporary local fixture with approved portfolio media. This work order includes repository configuration and external deployment gates; it must not expose Mux credentials or imply production readiness before playback, account, rights, and stakeholder checks pass.

## In scope

- Pin and document the verified next-video/Mux package and upload workflow from WO-002.
- Configure Mux credentials only as server-side Vercel environment variables using the exact names required by the selected package/version.
- Confirm local, preview, and production environment separation and ensure secrets are absent from committed files and client bundles.
- Upload/register approved lightweight portfolio videos and capture the source/playback metadata required by the typed catalog contract.
- Replace temporary fixture sources and markers with approved Mux-backed records while preserving project/block order and featured intent.
- Confirm Mux playback access, poster/thumbnail behavior, controls, and expected caching/streaming behavior in the deployed environment.

## Out of scope

- Selecting or approving creative content, claims, credits, rights, captions, or publication dates; those remain stakeholder-owned gates.
- Client-side upload tooling, CMS migration, or exposing Mux management tokens.
- Marking records `indexable` or `publishable` without content-owner approval.

## Requirements

- [`AC-PROJECT-003.1`](../../../../.forge/requirements/features/project-showcase.md:40): Project records can express publication state and SEO metadata independently of template validity.
- [`AC-PROJECT-003.2`](../../../../.forge/requirements/features/project-showcase.md:43): Only approved indexable or publishable records are represented as indexable by project metadata behavior.
- [`NFR-PROJECT-001`](../../../../.forge/requirements/features/project-showcase.md:45): Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../../.forge/blueprints/features/project-showcase.md:30) — typed project content and publication state.
- [`technical-context.md`](../../../../.forge/blueprints/technical-context.md) — Next/Vercel runtime and deployment context.

## Implementation plan

1. Confirm Mux account ownership, billing, token scope, package version, and exact environment-variable names.
2. Configure local/preview/production Vercel environments without writing secret values into the repository.
3. Upload the approved video set using the verified workflow and record only non-secret identifiers/metadata.
4. Replace placeholder records in [`constants/projects.ts`](../../../../constants/projects.ts:71) and remove temporary markers only for approved assets.
5. Verify deployed playback and rollback behavior before changing publication readiness.

## Files and systems

- **Create:** Provider configuration or generated media metadata only where required by the verified package; deployment configuration is managed in Vercel, not committed secrets.
- **Update:** [`package.json`](../../../../package.json:11), [`pnpm-lock.yaml`](../../../../pnpm-lock.yaml), [`next.config.ts`](../../../../next.config.ts:3), [`constants/projects.ts`](../../../../constants/projects.ts:17), and approved readiness metadata.
- **Avoid changing:** `.env*` secret values in source control, public claims without approval, and unrelated routes/components.

## Validation and acceptance

- **Automated checks:** [`pnpm lint`](../../../../package.json:9), [`pnpm build`](../../../../package.json:7), and production bundle inspection for accidental secret exposure.
- **Manual/external gates:** Mux upload/playback, Vercel preview and production environment variables, deployment verification, account/billing ownership, media rights, credits, and stakeholder approval.
- **Acceptance test:** Given an approved portfolio video and configured Vercel environment, when the project route is deployed, then the next-video player streams the Mux-backed asset, no secret is client-visible, the temporary marker is removed only for that approved asset, and publication state remains unchanged until approval.

## Documentation updates

- Record exact package/configuration versions, non-secret identifiers, external gate owners, and evidence in [`projects-page-v2.md`](../projects-page-v2.md) and [`execution-log.md`](../execution-log.md).

## Completion checklist

- [x] Mux account/token verification was completed by the user and local credentials were supplied securely.
- [x] Temporary placeholder was uploaded and processed through next-video/Mux.
- [x] Vercel preview/production environment playback was verified by the user.
- [ ] Approved videos are uploaded and catalog metadata is updated.
- [ ] No credentials are committed or client-exposed.
- [ ] Preview/production playback is verified.
- [ ] Implementation review is complete.
