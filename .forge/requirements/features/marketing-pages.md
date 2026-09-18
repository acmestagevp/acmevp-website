# Feature Requirements: Marketing Pages

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/marketing-pages.md`](../../blueprints/features/marketing-pages.md)

## Overview

The marketing pages — home (`/`), stage (`/stage`), and services (`/services`) — tell the studio's story: what the LED volume is capable of, what services ACME provides end to end, and why past clients trust the stage. They are the primary persuasion surface for prospective clients and drive traffic toward the contact page. Content is code-resident; these requirements document the current behavior as the baseline contract.

## Terminology

| Term            | Definition                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------- |
| Hero            | The full-viewport opening section of a page, combining headline copy over a background image |
| Content section | A two-column editorial block pairing copy with an image (order reversible)                   |
| CTA             | Call-to-action link styled as a button, directing visitors to `/contact`                     |

## Requirements

### REQ-MKTG-001: Home page presents the studio's story and entry points

**User Story:** As a prospective client, I want a landing page that shows what ACME offers, so that I can decide whether to explore further.

**Acceptance Criteria:**

- **AC-MKTG-001.1:** The home page shall open with a hero containing the studio name, a positioning line ("Virtual Production"), and introductory copy over the hero image.
- **AC-MKTG-001.2:** The home page shall include editorial sections teasing the Stage and Services pages, each linking to its page.
- **AC-MKTG-001.3:** The home page shall display a "Trusted By" row of client logos drawn from the client-logo data.
- **AC-MKTG-001.4:** The home page shall display a scrolling testimonial region drawn from the testimonial data.
- **AC-MKTG-001.5:** The home page shall end with a closing CTA linking to `/contact`.

### REQ-MKTG-002: Stage page presents the LED volume's specifications

**User Story:** As a prospective client, I want the stage's technical specifications with supporting imagery, so that I can judge whether the volume fits my production.

**Acceptance Criteria:**

- **AC-MKTG-002.1:** The stage page shall open with a hero panel introducing the volume and its headline dimensions (60 ft width, 16.5 ft height, 2.5° curve).
- **AC-MKTG-002.2:** The stage page shall present specification sections — Panels, Tracking, Compute, Media, Floorplan, Amenities — each pairing copy with an image and a spec list.
- **AC-MKTG-002.3:** The Floorplan section shall offer a downloadable PDF of the stage floor plan.
- **AC-MKTG-002.4:** The stage page shall end with a closing CTA linking to `/contact`.

### REQ-MKTG-003: Services page presents the service lines

**User Story:** As a prospective client, I want a clear picture of ACME's service lines, so that I know what I can book under one roof.

**Acceptance Criteria:**

- **AC-MKTG-003.1:** The services page shall open with a hero introducing the full-service production team.
- **AC-MKTG-003.2:** The services page shall present the four active service lines — Studio, Gear, Virtual Art Department, Post-Production — each pairing copy with an image.
- **AC-MKTG-003.3:** The Studio section shall link to the stage page.
- **AC-MKTG-003.4:** The services page shall end with a closing CTA linking to `/contact`.

## Non-functional requirements

- **NFR-MKTG-001:** All marketing layouts shall be responsive from mobile through desktop breakpoints.
- **NFR-MKTG-002:** Entrance animations shall respect the user's reduced-motion preference.
- **NFR-MKTG-003:** All content images shall carry meaningful alternative text.

## Out of scope

- An Education/Workshops service section (exists in code as a commented-out draft; not part of the current contract).
- Any CMS-driven content editing.

## Traceability notes

- **Related product goal:** primary inbound channel for prospective clients (see [Product overview](../product-overview.md)).
- **Dependencies:** site chrome (navigation, layout primitives, animation) — [`site-chrome.md`](site-chrome.md).
- **Known risks:** copy changes require code edits; the commented-out Education section may be reactivated by a future initiative, which must update this file.
