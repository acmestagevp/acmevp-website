# Component Blueprint: Centralized Content Catalog

## Capability Summary

The content catalog is the structured editorial boundary for reusable website content. It allows the website team to update navigation, logos, projects, testimonials, and future approved content in one discoverable location while presentation components render the data consistently.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Containers:** [`../containers/next-web-application.md`](../containers/next-web-application.md)

## Core Components

```component
name: NavigationCatalog
container: Next.js Web Application
responsibilities:
  - Export shared navigation labels and route hrefs from constants/nav.ts.
```

```component
name: ProjectCatalog
container: Next.js Web Application
responsibilities:
  - Define Project and ContentBlock types and ordered project content in constants/projects.ts.
  - Provide data to listing, static params, metadata, and detail rendering.
```

```component
name: ProofCatalog
container: Next.js Web Application
responsibilities:
  - Export client logos and testimonial records from constants/logos.ts and constants/testimonials.ts.
  - Keep approved attribution and quote content centralized.
```

Pages and feature components read catalog exports; catalog modules do not import presentation components. Project content crosses the boundary through typed discriminated blocks (`video`, `text`, `image`) and media paths.

## System Contracts

### Key Contracts

- Every reusable record has one canonical export and stable identifiers where routing requires them.
- Project slugs are unique, URL-safe, and stable once public.
- Project block order is editorially meaningful and preserved by renderers.
- Asset `src` values refer to public paths; alt text is required for image blocks.
- Fixture validity and publication readiness remain distinct.

### Integration Contracts

- `projects` is consumed by project listing, `generateStaticParams`, `generateMetadata`, and `ProjectContent`.
- `testimonials` is consumed by the Testimonials presentation component.
- `navItems` is consumed by desktop and mobile Navigation.
- Catalog changes should be validated with affected route rendering and content review, not by editing multiple page copies.

## Architecture Decision Records

### ADR-001: Prefer typed constants before introducing a CMS

**Context:** The current repository already centralizes important content in TypeScript constants and has no CMS or authenticated editorial system.

**Decision:** Treat `constants/` as the content source of truth for the current product and document any remaining inline content for gradual migration; defer CMS selection.

**Consequences:** Developers retain type safety and simple builds, while content updates still require repository changes and review.
