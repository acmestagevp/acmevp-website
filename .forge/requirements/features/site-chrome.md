# Feature Requirements: Site Chrome

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/site-chrome.md`](../../blueprints/features/site-chrome.md)

## Overview

Site chrome is the shared frame around every page: the fixed navigation bar with logo and menu, the footer with address and contact details, the decorative background layers, the typography pairing, and the scroll-triggered entrance animations. It carries the brand and keeps navigation consistent across all six routes.

## Terminology

| Term               | Definition                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Chrome             | The persistent UI frame: navigation, footer, background, and global typography            |
| Entrance animation | A scroll-triggered reveal (slide-up/opacity) applied to content as it enters the viewport |
| Reduced motion     | The user's OS/browser preference for minimized animation, which the site must respect     |

## Requirements

### REQ-CHROME-001: Primary navigation is fixed, responsive, and accessible

**User Story:** As a visitor, I want consistent navigation on every page, so that I can move around the site from anywhere.

**Acceptance Criteria:**

- **AC-CHROME-001.1:** A fixed top navigation bar shall appear on every page, with the ACME logo linking to the home page.
- **AC-CHROME-001.2:** Desktop navigation shall show the five nav items (Home, Stage, Services, Projects, Contact), with Contact styled as a CTA.
- **AC-CHROME-001.3:** The current page's nav item shall be indicated (programmatically, via `aria-current`).
- **AC-CHROME-001.4:** After scrolling past the threshold, the bar shall gain a solid background and border; at the top it shall be transparent.
- **AC-CHROME-001.5:** On screens below the desktop breakpoint, navigation shall collapse into a toggleable menu that closes on Escape (returning focus to the toggle), on outside pointer press, and on resize to desktop.

### REQ-CHROME-002: Footer presents studio identity and contact

**User Story:** As a visitor at the end of any page, I want the studio's address and contact details, so that I can reach ACME even without visiting the contact page.

**Acceptance Criteria:**

- **AC-CHROME-002.1:** Every page shall end with a footer containing the studio name, street address linking to Google Maps, email, and phone.
- **AC-CHROME-002.2:** The footer shall repeat the five nav links and the copyright line.

### REQ-CHROME-003: Global decoration and motion respect user preference

**User Story:** As a visitor, I want a polished but respectful experience, so that the site feels alive without being intrusive.

**Acceptance Criteria:**

- **AC-CHROME-003.1:** A decorative background (glow + noise layers) shall render behind all content, hidden from assistive technology.
- **AC-CHROME-003.2:** Content entrance animations shall respect the reduced-motion preference (no animation when requested).
- **AC-CHROME-003.3:** The testimonial marquee shall pause/slow on hover and shall not animate under reduced motion.

### REQ-CHROME-004: Typography and page titles follow the site standard

**User Story:** As a visitor, I want consistent branding across pages and accurate browser tab titles, so that the site feels coherent and bookmarks read well.

**Acceptance Criteria:**

- **AC-CHROME-004.1:** Display headings shall use the serif display font; body copy shall use the sans font.
- **AC-CHROME-004.2:** Page titles shall follow the site template (page name, then site name) with a sensible default for the home page.

## Non-functional requirements

- **NFR-CHROME-001:** Navigation and menu interactions shall be keyboard-accessible with visible focus states.

## Out of scope

- Theme switching (light/dark) — the site is dark-only by design.
- Internationalization.

## Traceability notes

- **Related product goal:** coherent, credible brand presence on every page.
- **Dependencies:** none — this is the shared foundation other features compose.
- **Known risks:** none specific; the unused `BrushReveal` decoration component is a remnant and is intentionally not part of this contract.
