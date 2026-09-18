# Feature Requirements: Project Detail Pages

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md)

## Overview

Each project gets its own page at `/projects/[slug]`, statically generated from the catalog. A page opens with the project's title and optional subtitle, then renders the project's content blocks in catalog order — video-first today, with text and image blocks available. Pages close with a contact CTA and a link back to the listing. This is the deepest view of ACME's work and the primary target of the first initiative (layout improvement); the requirements below document the current behavior as the baseline contract that the initiative will revise.

## Terminology

| Term           | Definition                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Content block  | A typed unit of project content: `video`, `text`, or `image`, defined in the catalog                                   |
| Featured video | A video block rendered full-bleed; a lone video block is featured automatically                                        |
| Local fixture  | A temporary placeholder video (`/videos/placeholder.mp4`) used in place of approved production media during draft work |

## Requirements

### REQ-PDET-001: Project pages render header and content blocks in catalog order

**User Story:** As a prospective client, I want a page per project presenting its work, so that I can evaluate what ACME delivered.

**Acceptance Criteria:**

- **AC-PDET-001.1:** `/projects/[slug]` shall render the project's title as the page heading, with its subtitle beneath when present.
- **AC-PDET-001.2:** The page shall render the project's content blocks in the order defined by the catalog.
- **AC-PDET-001.3:** Requesting a slug not present in the catalog shall produce a 404 page.

### REQ-PDET-002: Video blocks play approved media

**User Story:** As a prospective client, I want to watch the project's film directly on the page, so that I can see the quality of the work.

**Acceptance Criteria:**

- **AC-PDET-002.1:** Video blocks with a Mux source shall play via the Mux playback ID with visible controls.
- **AC-PDET-002.2:** A video block marked featured — or the sole video block of a project — shall render full-bleed (viewport-scale height on desktop).
- **AC-PDET-002.3:** Autoplay, when configured for a block, shall be muted and inline (plays inline, no audio surprise).
- **AC-PDET-002.4:** Local-fixture sources shall render the placeholder video in place of production media.
- **AC-PDET-002.5:** The player shall expose an accessible title and a screen-reader status describing the video.

### REQ-PDET-003: Text and image blocks support editorial depth

**User Story:** As a prospective client, I want context around the work — credits, stills, notes — so that I understand how the project was made.

**Acceptance Criteria:**

- **AC-PDET-003.1:** Text blocks shall render an optional heading and body copy at a readable measure.
- **AC-PDET-003.2:** Image blocks shall render with configurable aspect ratio and fit, optional caption, and lazy loading.
- **AC-PDET-003.3:** Image blocks marked full-width shall render unconstrained; otherwise constrained to a content wrapper.

### REQ-PDET-004: Project pages close with conversion paths

**User Story:** As a prospective client who just watched the work, I want an obvious next step, so that I can start a similar project.

**Acceptance Criteria:**

- **AC-PDET-004.1:** Every project page shall end with a "Discuss a project" CTA linking to `/contact`.
- **AC-PDET-004.2:** Every project page shall provide a "Back to Projects" link to `/projects`.

## Non-functional requirements

- **NFR-PDET-001:** Project pages shall be statically generated at build time for every catalog slug.
- **NFR-PDET-002:** Page metadata shall follow the SEO feature — [`seo-discoverability.md`](seo-discoverability.md).

## Out of scope

- Comments, likes, or any interactive engagement beyond the video player.
- Per-project galleries beyond the current block types.

## Traceability notes

- **Related product goal:** credible showcase of past work; conversion to inquiry.
- **Dependencies:** project catalog; media delivery; [`projects-listing.md`](projects-listing.md); [`seo-discoverability.md`](seo-discoverability.md).
- **Known risks:** the first initiative (layout improvement) will revise the presentation requirements in this file; block data shapes are stable and should be preserved unless the initiative explicitly changes them.
