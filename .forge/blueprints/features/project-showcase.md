# Feature Blueprint: Project Showcase

## Feature Summary

`constants/projects.ts` defines typed project records and the `ContentBlock` union. `app/projects/page.tsx` lists projects through `ProjectCard`; `app/projects/[slug]/page.tsx` uses the same records for static params, metadata, not-found handling, and `ProjectContent`. `VideoBlock`, `TextBlock`, and `ImageBlock` render block variants.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Requirements:** [`../../requirements/features/project-showcase.md`](../../requirements/features/project-showcase.md)

## Component Blueprint Composition

Compose [#Centralized Content Catalog](../components/content-catalog.md) and [#Shared Site Shell](../components/shared-site-shell.md) with `ProjectCard`, `ProjectContent`, `VideoBlock`, `TextBlock`, and `ImageBlock`.

## Feature-Specific Components

```component
name: ProjectContentDispatcher
container: Next.js Web Application
responsibilities:
  - Iterate ordered project blocks and dispatch by discriminated type.
  - Pass project context to media/text presentation and preserve accessibility metadata.
```

## Models and contracts

```model
name: Project
store: constants/projects.ts
description: Typed routeable portfolio record with ordered editorial content.
fields:
  - slug: URL-safe stable identifier
  - title: public project title
  - subtitle: optional supporting title
  - thumbnail: public-relative listing image
  - content: ordered video, text, or image blocks
  - publicationState: fixture-valid, indexable, or publishable
constraints:
  - slug uniqueness and stable generated route
  - image blocks require alt and public-relative src
```

## Requirement alignment

- `REQ-PROJECT-001` → Projects page, ProjectCard, and project catalog.
- `REQ-PROJECT-002` → Dynamic project route and ProjectContent block renderers.
- `REQ-PROJECT-003` → Project publication state and metadata logic in the dynamic route.

## Architecture Decision Records

### ADR-001: Use a discriminated content-block union

**Context:** Projects need mixed media and editorial blocks in an explicit order.

**Decision:** Model supported blocks as typed `video`, `text`, and `image` variants and dispatch centrally.

**Consequences:** New block kinds require type, renderer, and validation changes; existing project pages remain declarative.
