# Work Order: WO-005 — Video Validation and Publication Readiness

## Metadata

- **Status:** `complete` for the temporary Mux fixture; publication readiness remains blocked by content approval
- **Assignee:** ACME website team with content/deployment approvers
- **Phase/order:** 5
- **Initiative:** [`../projects-page-v2.md`](../projects-page-v2.md)
- **Generated filename:** `WO-005-video-validation-publication-readiness.md`
- **Owner/orchestrator:** ACME website team
- **Implementation review:** [`../reviews/implementation-review-WO-005.md`](../reviews/implementation-review-WO-005.md)

## Summary

Validate the integrated player across project routes and determine whether the video work is ready for publication. This is the final evidence work order: technical playback success, content approval, rights, metadata, and deployment gates must remain separately recorded.

## In scope

- Validate `/projects`, every generated project route, unknown-slug not-found behavior, Contact/back navigation, and mixed text/image/video ordering.
- Confirm the video player is present immediately, controls are usable, the old load prompt is absent, and loading/error behavior is understandable.
- Test featured and constrained layouts at mobile, tablet, desktop, wide desktop, short/tall viewports, keyboard navigation, zoom, reduced motion, and screen-reader-visible context.
- Verify autoplay is muted/explicit and does not violate browser policy or create unexpected motion/audio.
- Verify local placeholder behavior before Mux and production Mux playback after WO-004.
- Run repository checks and complete the implementation review and closeout evidence.

## Out of scope

- New player features or redesign discovered during validation; defects become follow-up work orders.
- Approving content, claims, rights, credits, or publication state without the responsible stakeholder.

## Requirements

- [`AC-PROJECT-002.1`](../../../../.forge/requirements/features/project-showcase.md:30): A valid project route renders its configured content blocks in editorial order.
- [`AC-PROJECT-002.2`](../../../../.forge/requirements/features/project-showcase.md:33): Unknown project slugs produce a not-found outcome rather than misleading content.
- [`AC-PROJECT-002.3`](../../../../.forge/requirements/features/project-showcase.md:34): Project pages provide a clear route to Contact and back to Projects.
- [`NFR-PROJECT-001`](../../../../.forge/requirements/features/project-showcase.md:45): Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Blueprints

- [`project-showcase.md`](../../../../.forge/blueprints/features/project-showcase.md:46) — requirement alignment and ordered block composition.
- [`shared-site-shell.md`](../../../../.forge/blueprints/components/shared-site-shell.md) — route shell and navigation behavior.

## Validation and acceptance

- **Automated checks:** [`pnpm lint`](../../../../package.json:9), [`pnpm build`](../../../../package.json:7), and any provider-specific type/build checks.
- **Browser checks:** Use the project’s Playwright/browser workflow against local and production-mode builds; capture route, responsive, focus, media-control, and console/network evidence.
- **External/manual gates:** Mux/Vercel deployment verification, content-owner approval, media rights/credits approval, and publication-state decision.
- **Acceptance test:** Given the completed provider migration, when all project routes are tested locally and in the required deployment environment, then players render immediately and accessibly, project composition/navigation remains intact, no blocking console/build errors are introduced, and publication readiness is explicitly approved or remains fixture-valid.

## Documentation updates

- Append all commands, route results, defects, external approvals, and unresolved follow-up items to [`execution-log.md`](../execution-log.md).
- Link the implementation and closeout review artifacts from [`projects-page-v2.md`](../projects-page-v2.md).

## Completion checklist

- [x] Route and component behavior is validated.
- [ ] Responsive/accessibility/autoplay behavior is fully validated; the final Playwright session was unavailable.
- [x] Local and production-mode playback evidence is recorded through build, HTTP route checks, and user Vercel verification.
- [x] Lint/build/browser-equivalent checks pass or failures are explicitly dispositioned.
- [ ] Content, rights, credits, and publication approvals are recorded.
- [x] Implementation review is complete.
- [ ] Closeout review is complete.
