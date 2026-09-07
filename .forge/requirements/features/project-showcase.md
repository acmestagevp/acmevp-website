# Feature Requirements: Project Showcase

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/project-showcase.md`](../../blueprints/features/project-showcase.md)

## Overview

The project showcase demonstrates ACME's work through a browsable listing and individual project pages. Project records may combine video, editorial text, and images in an intentional order, while publication readiness remains separate from whether a route can render.

## Requirements

### REQ-PROJECT-001: Browse projects

**User Story:** As a prospective client, I want to scan representative work, so that I can quickly find relevant examples.

**Acceptance Criteria:**

- **AC-PROJECT-001.1:** The Projects route displays each approved listing record with title, optional subtitle, and thumbnail where available.
- **AC-PROJECT-001.2:** Each listing links to its corresponding stable project detail route.

### REQ-PROJECT-002: View project details

**User Story:** As a creative lead, I want to view a project’s ordered media and context, so that I can understand the work beyond a thumbnail.

**Acceptance Criteria:**

- **AC-PROJECT-002.1:** A valid project route renders its configured content blocks in editorial order.
- **AC-PROJECT-002.2:** Unknown project slugs produce a not-found outcome rather than misleading content.
- **AC-PROJECT-002.3:** Project pages provide a clear route to Contact and back to Projects.

### REQ-PROJECT-003: Preserve publication intent

**User Story:** As the website team, I want fixture validity separated from publication readiness, so that route/template testing does not accidentally publish unapproved work.

**Acceptance Criteria:**

- **AC-PROJECT-003.1:** Project records can express publication state and SEO metadata independently of template validity.
- **AC-PROJECT-003.2:** Only approved indexable or publishable records are represented as indexable by project metadata behavior.

## Non-functional requirements

- **NFR-PROJECT-001:** Project media has usable alt/caption behavior and external embeds are not treated as the sole source of critical page meaning.

## Out of scope

- CMS migration, automated media ingestion, or replacing fixtures during initialization.

## Traceability notes

- **Related product goal:** Demonstrate capability through credible work.
- **Dependencies:** Project catalog, project block renderers, public assets, and external video providers.
- **Known risks:** Existing records include placeholder-like media IDs and require approval review.
