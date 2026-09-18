# Feature Requirements: SEO and Discoverability

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/seo-discoverability.md`](../../blueprints/features/seo-discoverability.md)

## Overview

The site's discoverability system controls how search engines and social platforms see ACME: per-page metadata, canonical URLs, OpenGraph/Twitter cards, `robots.txt`, and a sitemap. Its distinctive behavior is publication gating: project pages are indexed only when their catalog entry is approved for indexing, and a readiness checker validates catalog integrity and tracks outstanding content approvals. This protects the studio from shipping half-approved work to search engines while the "first publishable draft" matures.

## Terminology

| Term              | Definition                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Publication state | A project's approval tier: `fixture-valid` (draft), `indexable`, `publishable`                                    |
| Readiness report  | A computed validation of the catalog: technical failures (broken data) and content gates (missing approvals)      |
| Content gate      | An outstanding approval item — e.g., missing SEO description, social image, publication date, or credits approval |

## Requirements

### REQ-SEO-001: Robots policy allows crawling and points to the sitemap

**User Story:** As the site owner, I want search engines to crawl the site and find the sitemap, so that approved pages get discovered.

**Acceptance Criteria:**

- **AC-SEO-001.1:** `robots.txt` shall allow all user agents on all paths and link the sitemap at `https://acmevp.com/sitemap.xml`.

### REQ-SEO-002: The sitemap lists static routes and approved projects only

**User Story:** As the site owner, I want the sitemap to reflect only content ready for indexing, so that search engines never see unapproved work.

**Acceptance Criteria:**

- **AC-SEO-002.1:** The sitemap shall include the five static routes (home, stage, services, projects, contact).
- **AC-SEO-002.2:** The sitemap shall include a project route only when that project's publication state is `indexable` or `publishable`.
- **AC-SEO-002.3:** Project entries shall use their approved modified/published dates when present.

### REQ-SEO-003: Pages carry complete metadata

**User Story:** As a visitor sharing a link, I want accurate previews, so that the studio looks professional in search results and social feeds.

**Acceptance Criteria:**

- **AC-SEO-003.1:** Every page shall carry a title and description on the `acmevp.com` domain; the home page and project pages shall define canonical URLs (other routes currently inherit the root canonical — recorded as a known gap).
- **AC-SEO-003.2:** Every page shall provide OpenGraph and Twitter card metadata.
- **AC-SEO-003.3:** Project pages shall use their approved SEO fields when present, falling back to catalog-derived title/description when absent.

### REQ-SEO-004: Project indexing follows the publication state

**User Story:** As the site owner, I want unapproved projects kept out of search indexes, so that drafts never leak publicly.

**Acceptance Criteria:**

- **AC-SEO-004.1:** Project pages with publication state `indexable` or `publishable` shall be indexable.
- **AC-SEO-004.2:** Project pages in `fixture-valid` state (or with no state) shall carry noindex metadata.
- **AC-SEO-004.3:** An unknown project slug shall produce noindex metadata and a 404 page.

### REQ-SEO-005: Catalog integrity is validated by a readiness report

**User Story:** As the content owner, I want the catalog checked for technical validity and outstanding approvals, so that I know what blocks publication.

**Acceptance Criteria:**

- **AC-SEO-005.1:** The readiness report shall flag technical failures: empty titles, URL-unsafe or duplicate slugs, missing local thumbnails, empty content, malformed Mux playback IDs, unknown fixture paths, and missing local images.
- **AC-SEO-005.2:** The readiness report shall flag content gates: fixture-state projects, missing SEO description/social image/publication/modified dates, video rights and credits requiring owner approval, and publishable projects lacking a social preview.
- **AC-SEO-005.3:** The report shall produce cumulative tier lists for downstream gating: `fixtureValid` (all projects), `indexable` (publication state beyond `fixture-valid`), and `publishable` (state `publishable`).

## Non-functional requirements

- **NFR-SEO-001:** Readiness checks that touch the filesystem shall run in server/build contexts only.

## Out of scope

- Redirect management for renamed slugs.
- Analytics or search-console integration.

## Traceability notes

- **Related product goal:** search engines index only approved content; accurate social previews.
- **Dependencies:** project catalog data; [`project-detail.md`](project-detail.md).
- **Known risks:** the four current projects are marked `publishable` but lack SEO fields (descriptions, social images, dates) — the readiness report intentionally flags these as content gates pending owner approval. Only the home and project pages define canonical URLs; `/stage`, `/services`, `/projects`, and `/contact` inherit the root canonical (requirements review finding F-1) — candidate follow-up.
