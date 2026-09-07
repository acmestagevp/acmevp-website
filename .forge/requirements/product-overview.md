# Product Overview — Minneapolis LED Volume Website

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Evidence basis:** repository observation and stakeholder direction

## Business problem

Production clients in Minneapolis and the wider Midwest need a credible way to evaluate an LED volume, understand the available production services, see representative work, and start a conversation with the studio. The website is the studio's public sales and qualification surface; unclear capability information, stale project content, or a difficult inquiry path can lose prospective work.

## Current state

**Observed:** This existing Next.js site presents ACME Virtual Production as a Minneapolis, Minnesota virtual production studio. It exposes Home, Stage, Services, Projects, project-detail, and Contact routes. The site includes stage specifications, service descriptions, client logos, testimonials, project media, and a contact form.

**Observed:** Shared navigation, layout, visual, project rendering, and animation components are present under `components/`. Reusable content is partly centralized in `constants/nav.ts`, `constants/logos.ts`, `constants/projects.ts`, and `constants/testimonials.ts`; several page sections remain inline in route files.

**Inferred:** The primary content-maintenance need is to make approved copy, projects, testimonials, navigation, and related structured content editable in stable constants/data modules without duplicating edits across pages.

## Personas and stakeholders

| Persona/stakeholder | Goals | Pain points | Success looks like |
|---|---|---|---|
| Production client / agency producer | Quickly assess fit, capability, proof, and availability | Technical details and service scope may be scattered | Can understand the offer and submit a qualified inquiry |
| Director, DP, or creative lead | Determine whether the volume supports the desired creative | Needs credible visuals, specs, and examples | Can evaluate the stage and imagine a project |
| ACME website/content team | Keep public content accurate and current | Repeated page edits create drift and maintenance cost | One approved content source updates every intended consumer |
| ACME production team | Convert interest into a project conversation | Lost or incomplete inquiries reduce follow-up quality | Contact path is obvious and submissions reach the team |

## Product description

The website is a cinematic, technically credible public presentation for ACME Virtual Production. It combines a marketing home page, facility and services information, a project portfolio with detail pages, testimonials and trusted-client proof, and a contact/inquiry path. Shared navigation and presentation patterns keep the experience coherent across routes, while centralized structured content is the durable source for reusable editorial data.

## MVP and boundaries

### Product MVP

The current product MVP is a trustworthy public website that communicates the Minneapolis LED volume's differentiators, explains services, demonstrates work, and provides a working path to contact ACME.

### In scope

- Public route presentation for Home, Stage, Services, Projects, project details, and Contact.
- Stage capability and facility information, including media and technical specifications.
- Service and production-support explanation.
- Portfolio listing and structured project detail content with video, text, and image blocks.
- Testimonials, client logos, shared navigation, and contact conversion path.
- Centralized content/data sources for reusable navigation, projects, testimonials, logos, and future approved content.
- Responsive, accessible, performant presentation appropriate for production clients.

### Out of scope

- A CMS, authenticated editorial dashboard, or non-developer publishing workflow.
- Booking, quoting, payment, account management, or project-management features.
- Changes to visual design or site behavior as part of initialization.
- Replacing existing fixtures or making unapproved claims about clients, capabilities, or project publication readiness.

## Success metrics

| Metric | Baseline | Target | Measurement method |
|---|---|---|---|
| Core routes render successfully | Existing route set is present; runtime validation pending | All documented routes render without blocking console/runtime errors | Playwright route smoke checks and build |
| Inquiry path discoverability | Contact CTA appears in shared/site content | Primary routes expose an obvious path to Contact | Route/content review |
| Content maintenance locality | Central constants exist, but some copy is inline | New/editable project, testimonial, logo, and navigation content has one documented source of truth | Static repository review |
| Responsive usability | Existing responsive classes are present; full matrix pending | Desktop, tablet, and mobile checks pass for affected routes | Playwright viewport checks |

## Product constraints

- Brand and claims must remain accurate to ACME Virtual Production and the Minneapolis LED volume.
- Initialization and documentation must not modify application source, content, assets, or runtime behavior.
- Content changes should use existing typed structures and shared components where applicable.
- Public media is served from `public/`; embedded project video depends on external YouTube/Vimeo availability.
- Contact delivery depends on the Resend API and `RESEND_API_KEY`; secrets must not be committed.
- Accessibility includes semantic navigation/forms, keyboard operation, and respect for reduced-motion preferences.

## Feature map

- [`site-navigation-and-presentation.md`](features/site-navigation-and-presentation.md) — Public route discovery, shared shell, and responsive presentation.
- [`facility-services-proof.md`](features/facility-services-proof.md) — Stage, services, client proof, and testimonials that qualify the studio.
- [`project-showcase.md`](features/project-showcase.md) — Portfolio index and structured project detail pages.
- [`contact-inquiry.md`](features/contact-inquiry.md) — Contact conversion and inquiry submission flow.
- [`centralized-content-maintenance.md`](features/centralized-content-maintenance.md) — Durable content-source expectations for the website team.

## Open questions

- Confirm the production deployment project and environment-variable ownership in the first implementation initiative.
- Confirm which current project records are approved for public indexing versus fixture/demo use.
- Decide whether future content should remain TypeScript constants or graduate to a CMS; no CMS is assumed for initialization.
