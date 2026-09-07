# Feature Blueprint: Centralized Content Maintenance

## Feature Summary

The content boundary is the `constants/` directory. `nav.ts`, `logos.ts`, `projects.ts`, and `testimonials.ts` export records consumed by navigation, proof, listing, metadata, and project-rendering components. The first initiative should map remaining inline page copy and define safe migration boundaries without altering output.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Requirements:** [`../../requirements/features/centralized-content-maintenance.md`](../../requirements/features/centralized-content-maintenance.md)

## Component Blueprint Composition

Compose [#Centralized Content Catalog](../components/content-catalog.md) with [#Shared Site Shell](../components/shared-site-shell.md), project showcase, proof, and route page consumers.

## Feature-Specific Components

```component
name: ContentSourceBoundary
container: Next.js Web Application
responsibilities:
  - Document canonical content modules and their consumers.
  - Keep typed editorial records independent from rendering components.
  - Identify inline copy that is intentionally page-specific or a candidate for migration.
```

## Requirement alignment

- `REQ-CONTENT-001` → Catalog modules and their documented consumers.
- `REQ-CONTENT-002` → Typed record contracts plus a no-behavior-change migration plan for inline copy.

## Architecture Decision Records

### ADR-001: Constants are the current editorial source of truth

**Context:** The repository already uses typed constants and has no CMS.

**Decision:** Expand and document the constants boundary before considering a new content platform.

**Consequences:** Content remains versioned with code and requires PR review; no runtime CMS dependency is introduced.
