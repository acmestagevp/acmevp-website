# Feature Blueprint: Facility, Services, and Proof

## Feature Summary

Stage and Services routes compose media and editorial sections from shared layout components. Home also assembles stage/service summaries, logos from `constants/logos.ts`, and Testimonials from `constants/testimonials.ts`.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Requirements:** [`../../requirements/features/facility-services-proof.md`](../../requirements/features/facility-services-proof.md)

## Component Blueprint Composition

Compose [#Shared Site Shell](../components/shared-site-shell.md) and [#Centralized Content Catalog](../components/content-catalog.md) with `Content`, `Logo`, `Testimonials`, `Header`, `Section`, and `ContentWrapper`.

## Feature-Specific Components

```component
name: FacilityAndServicePresentation
container: Next.js Web Application
responsibilities:
  - Present stage imagery, specifications, amenities, service categories, and calls to action.
  - Keep approved marketing claims readable and structurally separate from layout logic.
```

## Requirement alignment

- `REQ-PROOF-001` → Stage route and shared media/layout components.
- `REQ-PROOF-002` → Services route and shared content/layout components.
- `REQ-PROOF-003` → Logo and Testimonials components consuming proof catalog records.

## Architecture Decision Records

### ADR-001: Centralize repeatable proof records

**Context:** Logos and testimonials are reused across the home experience and may grow over time.

**Decision:** Keep those records in `constants/` and render them through shared presentation components.

**Consequences:** Attribution/content review is centralized; component consumers remain consistent.
