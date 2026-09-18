# Feature Requirements: Projects Listing

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/projects-listing.md`](../../blueprints/features/projects-listing.md)

## Overview

The `/projects` page is the portfolio index: a responsive grid showing every project in the catalog as a card with thumbnail, title, and optional subtitle, each linking to its detail page. It gives prospective clients a fast visual overview of ACME's past work before they dive into individual projects.

## Terminology

| Term         | Definition                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------------- |
| Catalog      | The code-resident project list in `constants/projects.ts` — the single source of truth for projects |
| Project card | A grid tile linking to one project's detail page, showing thumbnail + title + subtitle              |

## Requirements

### REQ-PLIST-001: Projects page lists the full catalog as a card grid

**User Story:** As a prospective client, I want to see all of ACME's past work in one view, so that I can quickly gauge the studio's range.

**Acceptance Criteria:**

- **AC-PLIST-001.1:** The `/projects` page shall render one card for every project in the catalog.
- **AC-PLIST-001.2:** Each card shall display the project's thumbnail, title, and subtitle (when present).
- **AC-PLIST-001.3:** Each card shall link to that project's detail page at `/projects/[slug]`.
- **AC-PLIST-001.4:** The grid shall be responsive: one column on mobile, two on medium, three on large screens.

### REQ-PLIST-002: Cards present media with feedback and restraint

**User Story:** As a visitor, I want the grid to feel responsive and polished, so that browsing the portfolio is pleasant.

**Acceptance Criteria:**

- **AC-PLIST-002.1:** Card thumbnails shall lazy-load.
- **AC-PLIST-002.2:** Cards shall animate into view on scroll, respecting reduced-motion preference.
- **AC-PLIST-002.3:** Cards shall provide hover and keyboard-focus visual feedback, and an accessible link label naming the project.

## Non-functional requirements

- **NFR-PLIST-001:** Thumbnails shall use responsive image sizing appropriate to the grid layout.

## Out of scope

- Filtering, tagging, or categorization of projects.
- Pagination or lazy-loading of the grid itself (the catalog is small).

## Traceability notes

- **Related product goal:** credible showcase of past work.
- **Dependencies:** project catalog data; project detail pages — [`project-detail.md`](project-detail.md).
- **Known risks:** none specific to the listing; catalog integrity is covered by [`seo-discoverability.md`](seo-discoverability.md).
