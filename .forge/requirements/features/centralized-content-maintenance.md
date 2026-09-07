# Feature Requirements: Centralized Content Maintenance

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/centralized-content-maintenance.md`](../../blueprints/features/centralized-content-maintenance.md)

## Overview

The website team needs a predictable way to update the site's reusable editorial content without hunting through every route. The existing constants folder is the intended content boundary. This requirement describes maintenance behavior, not a CMS or an implementation mandate for every sentence of page copy.

## Requirements

### REQ-CONTENT-001: Maintain reusable records centrally

**User Story:** As a website maintainer, I want reusable navigation, project, logo, and testimonial content to have one canonical source, so that updates remain consistent across consumers.

**Acceptance Criteria:**

- **AC-CONTENT-001.1:** Navigation, projects, logos, and testimonials each have a documented canonical content source under `constants/`.
- **AC-CONTENT-001.2:** Consumers render those records rather than maintaining divergent copies of the same record.
- **AC-CONTENT-001.3:** Project content supports an ordered, typed set of supported block kinds with required accessibility fields for images.

### REQ-CONTENT-002: Keep editorial and presentation responsibilities distinct

**User Story:** As a website maintainer, I want content edits separated from presentation logic, so that approved copy changes do not require rewriting layout behavior.

**Acceptance Criteria:**

- **AC-CONTENT-002.1:** Content records document their required fields, stable identifiers, and publication/readiness semantics.
- **AC-CONTENT-002.2:** The first architecture initiative documents remaining inline content and its migration boundary without changing visible behavior.

## Non-functional requirements

- **NFR-CONTENT-001:** Content records remain type-checked and route/build validation catches invalid structural changes.

## Out of scope

- Introducing a CMS or moving every existing inline string during initialization.

## Traceability notes

- **Related product goal:** Reduce content drift and maintenance cost.
- **Dependencies:** `constants/`, shared components, route consumers, and project renderers.
- **Known risks:** Existing inline copy means centralization is currently partial.
