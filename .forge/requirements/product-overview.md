# Product Overview

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Evidence basis:** repository observation

## Business problem

ACME Virtual Production operates the largest LED volume in Minnesota — a 60 ft × 16.5 ft curved wall — and offers end-to-end virtual production services (studio, gear, virtual art department, post-production) from Minneapolis. Prospective clients: producers, directors, brands, and agencies evaluating whether ACME's stage and team can deliver their shoot. They need to quickly assess the stage's technical capabilities, understand the service lines, see credible past work, and start a conversation. Without a polished, credible web presence, ACME loses those inquiries to competitors with stronger marketing. The website is the studio's primary inbound channel.

## Current state

Observed (directly supported by the repository):

- A Next.js 16 App Router marketing site with six routes: `/` (home), `/stage`, `/services`, `/projects`, `/projects/[slug]` (static-generated per project), and `/contact`.
- All content is code-resident: copy lives in page components; structured data (projects, navigation, client logos, testimonials) lives in `constants/`.
- The project catalog contains four official projects (Cadillac Future IQ + BTS, Polica, Renewal by Andersen), each marked `publishable` with Mux-hosted video.
- A publication-state model (`fixture-valid` → `indexable` → `publishable`) gates search indexing; a readiness checker validates catalog integrity and tracks unapproved content (SEO descriptions, social images, dates, credits, video rights).
- The contact page delivers inquiries via a Resend server action to `info@acmevp.com`.
- SEO plumbing exists: per-page metadata, canonical URLs, OpenGraph/Twitter cards, `robots.txt`, and a readiness-gated sitemap.

Inferred (reasonable interpretation, not verified):

- The site is intended for production deployment at `acmevp.com` via Vercel (metadata, sitemap, and email sender all reference the domain); live deployment status was not verified during initialization.
- The code comments describe a "first publishable draft": the four projects are publishable, but their SEO fields (descriptions, social previews, dates) are not yet filled in.

## Personas and stakeholders

| Persona/stakeholder                       | Goals                                                         | Pain points                                                  | Success looks like                                             |
| ----------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| Prospective client (producer/EP/director) | Evaluate the stage, services, and past work; start an inquiry | Hard to judge scale/quality of an LED volume from text alone | Convincing showcase of specs and work; a clear path to contact |
| Returning client / visitor                | Find contact info; check for new work                         | Stale or hidden work                                         | Current project catalog; visible contact details               |
| ACME content owner (staff)                | Keep copy, projects, and media current                        | Content changes require code edits                           | Predictable, well-mapped places to make changes                |
| Search engines / social previews          | Crawl and index approved content accurately                   | Indexing unapproved or incomplete pages                      | Only approved pages indexed; accurate metadata                 |

## Product description

The ACME Virtual Production website is a public marketing site that presents the studio's stage specifications, service lines, and project portfolio, and converts visitor interest into inquiries via a contact form that delivers email to the studio. Its boundaries: a static-content marketing site with code-resident content — no CMS, no authentication, no booking system, no e-commerce. Major capabilities: marketing pages (home, stage, services), a project showcase (listing + detail pages with video-first content), a contact/inquiry channel, site-wide navigation/branding, and search discoverability with publication gating.

## MVP and boundaries

This is an existing product: the current site is the baseline contract, documented as-is. The terms below apply to future changes.

### Workspace MVP

Not applicable — the workspace (Next.js + pnpm + ESLint + Vercel deployment path) already exists and runs.

### Product MVP

Already delivered in baseline form: all six routes functional, contact form delivering, publication-gated SEO in place. Remaining product-MVP gaps are content approvals (project SEO fields, credits, video rights) rather than capabilities.

### In scope

- The six routes and their current behavior (the baseline contract)
- Contact inquiry delivery via Resend
- Project catalog presentation and its publication-state model
- Search discoverability: metadata, robots, sitemap, indexing gates

### Out of scope

- CMS integration, authentication, client portals
- Booking/scheduling systems, e-commerce, blog
- Any capability not present in the current site unless a future initiative authorizes it

### Initial initiative roadmap

Existing repository — plan as we go. The recommended first initiative (improving the layout of the individual project pages) is recorded in the project manifest's [Decisions and handoff](../project-manifest.md#decisions-and-handoff).

## Success metrics

| Metric                                     | Baseline                                                  | Target                                                     | Measurement method                   |
| ------------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| Site builds and lints clean                | observed passing baseline (not yet executed this session) | `pnpm build` + `pnpm lint` pass after every change         | Automated commands per work order    |
| Contact inquiries arrive                   | form delivers to `info@acmevp.com`                        | inquiries received from real prospects                     | User-observed inbox (manual)         |
| Project pages render approved media        | 4 publishable projects with Mux video                     | all catalog projects render their content blocks correctly | User visual verification             |
| Search engines index only approved content | publication gates implemented                             | no `fixture-valid` page indexed; approved pages indexed    | Sitemap/metadata inspection (manual) |

## Product constraints

- Deployment: Vercel CI/CD triggered by the user's manual push of `master`; agents never push or deploy
- Secrets: `RESEND_API_KEY` required in `.env.local` for the contact form
- Media: project videos hosted on Mux (playback IDs in the catalog); local placeholder fixture exists for draft work
- Stack: preserve Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / pnpm
- Accessibility: reduced-motion support is an existing behavior and must be preserved

## Feature map

- [`marketing-pages.md`](features/marketing-pages.md) — home, stage, and services pages presenting the studio's story, specifications, and service lines
- [`projects-listing.md`](features/projects-listing.md) — the `/projects` grid showcasing the catalog
- [`project-detail.md`](features/project-detail.md) — individual project pages with video/text/image content blocks
- [`contact-inquiry.md`](features/contact-inquiry.md) — contact information and the inquiry form delivering email to the studio
- [`site-chrome.md`](features/site-chrome.md) — navigation, footer, branding, typography, and motion behavior across all pages
- [`seo-discoverability.md`](features/seo-discoverability.md) — metadata, robots, sitemap, and the publication gating that controls indexing

## Open questions

- None blocking initialization. Follow-up candidates recorded in the manifest: unused remnant components; contact-form hardening (no user-facing failure message; unescaped input in HTML email).
