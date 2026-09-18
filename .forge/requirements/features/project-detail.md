# Feature Requirements: Project Detail Pages

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md)

## Overview

Each project gets its own page at `/projects/[slug]`, statically generated from the catalog. A page opens with the featured video, then the project's title and optional subtitle, then any remaining content blocks in catalog order — video-first today, with text and image blocks available. Pages close with a contact CTA and a link back to the listing. This is the deepest view of ACME's work and the primary target of the first initiative (layout improvement); the requirements below document the current behavior as the baseline contract that the initiative will revise.

## Terminology

| Term             | Definition                                                                                                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content block    | A typed unit of project content: `video`, `text`, or `image`, defined in the catalog                                                                                                    |
| Featured video   | A video block rendered at true 16:9, width-capped by the viewport height and centered (the global page gutter is the minimum side margin); a lone video block is featured automatically |
| Close affordance | A fixed top-right "×" control on project detail pages linking back to `/projects`                                                                                                       |
| Local fixture    | A temporary placeholder video (`/videos/placeholder.mp4`) used in place of approved production media during draft work                                                                  |
| YouTube embed    | The privacy-enhanced `youtube-nocookie.com` iframe player used for media that is public on a client's YouTube channel but cannot be hosted directly                                     |

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
- **AC-PDET-002.2:** A video block marked featured — or the sole video block of a project — shall render at true 16:9 (no letterbox bars), width-capped by the viewport height (`min(available width, viewport-height-derived width)`) so the film plus its section padding fits the viewport with even top/bottom spacing, centered within the full wrapper (the global page gutter remains the minimum side margin; side margins may grow slightly on short viewports).
- **AC-PDET-002.6:** Video blocks with a Mux source shall display a poster image derived from the playback ID (`image.mux.com/{playbackId}/thumbnail.jpg`) before playback.
- **AC-PDET-002.3:** Autoplay, when configured for a block, shall be muted and inline (plays inline, no audio surprise).
- **AC-PDET-002.4:** Local-fixture sources shall render the placeholder video in place of production media.
- **AC-PDET-002.5:** The player shall expose an accessible title and a screen-reader status describing the video.
- **AC-PDET-002.7:** Video blocks with a YouTube source shall render the client's public video via the privacy-enhanced embed (`youtube-nocookie.com/embed/{videoId}`) with visible native controls and no autoplay parameters; the iframe fills the same featured/standard frame as the Mux and local-fixture players.

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
- **AC-PDET-004.3:** Every project page shall provide a fixed top-right "×" close affordance linking to `/projects`, inset by the page gutter, above the content, with an accessible label (e.g. "Close project — back to Projects").

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
