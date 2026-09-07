# Feature Requirements: Contact Inquiry

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/contact-inquiry.md`](../../blueprints/features/contact-inquiry.md)

## Overview

The Contact experience converts interest into a direct project conversation. It provides visible contact details and a simple inquiry form, communicates submission state, and must never claim success when delivery fails.

## Requirements

### REQ-CONTACT-001: Start an inquiry

**User Story:** As a prospective client, I want to submit basic project information, so that ACME can follow up about my production.

**Acceptance Criteria:**

- **AC-CONTACT-001.1:** The form collects name, email, subject, and message.
- **AC-CONTACT-001.2:** Required fields and email format are enforced before or during submission.
- **AC-CONTACT-001.3:** A successful submission presents an explicit confirmation state.

### REQ-CONTACT-002: Handle delivery failure honestly

**User Story:** As a prospective client, I want accurate feedback about my inquiry, so that I know whether ACME received it.

**Acceptance Criteria:**

- **AC-CONTACT-002.1:** The interface does not show success when the email provider reports failure.
- **AC-CONTACT-002.2:** The contact path includes a direct email or phone alternative.

## Non-functional requirements

- **NFR-CONTACT-001:** Form labels, focus states, pending state, and status messaging are accessible by keyboard and assistive technology.
- **NFR-CONTACT-002:** Provider credentials and recipient configuration remain server-side.

## Out of scope

- CRM integration, account creation, spam platform selection, or analytics implementation unless separately authorized.

## Traceability notes

- **Related product goal:** Turn qualified interest into a studio conversation.
- **Dependencies:** Resend, `RESEND_API_KEY`, server action, and shared CTA patterns.
- **Known risks:** Delivery configuration and production observability are not verified.
