# Feature Requirements: Contact and Inquiry

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Product overview:** [`../product-overview.md`](../product-overview.md)
- **Blueprint counterpart:** [`../../blueprints/features/contact-inquiry.md`](../../blueprints/features/contact-inquiry.md)

## Overview

The `/contact` page is the conversion point: it shows the studio's email and phone prominently and offers an inquiry form (name, email, subject, message). Submission sends an email to the studio via the Resend service, with the visitor's address as reply-to. This is the only interactive form on the site and the primary lead-capture mechanism.

## Terminology

| Term          | Definition                                                                             |
| ------------- | -------------------------------------------------------------------------------------- |
| Inquiry       | A form submission containing name, email, subject, and message                         |
| Server action | A Next.js server-side function handling the form submission without a custom API route |

## Requirements

### REQ-CONTACT-001: Contact page shows direct contact channels

**User Story:** As a visitor, I want the studio's email and phone visible, so that I can reach out through my preferred channel.

**Acceptance Criteria:**

- **AC-CONTACT-001.1:** The contact page shall display the studio email (`info@acmevp.com`) as a mailto link.
- **AC-CONTACT-001.2:** The contact page shall display the studio phone number as a tel link.

### REQ-CONTACT-002: Inquiry form collects the required fields

**User Story:** As a prospective client, I want a simple form, so that I can start a conversation without friction.

**Acceptance Criteria:**

- **AC-CONTACT-002.1:** The form shall collect name, email, subject, and message; all fields required.
- **AC-CONTACT-002.2:** Each field shall have a programmatic label associated with its input.
- **AC-CONTACT-002.3:** The email field shall validate as an email address.

### REQ-CONTACT-003: Submissions deliver email to the studio

**User Story:** As the studio owner, I want inquiries delivered to the studio inbox, so that my team can respond.

**Acceptance Criteria:**

- **AC-CONTACT-003.1:** A successful submission shall send an email from the studio's no-reply sender to `info@acmevp.com`, with the studio's CC recipients included.
- **AC-CONTACT-003.2:** The email shall use the visitor's email as reply-to, the submitted subject as the email subject line, and include the submitted name, email, and message.
- **AC-CONTACT-003.3:** Delivery shall require the Resend API key to be configured in the environment.

### REQ-CONTACT-004: The form communicates state to the visitor

**User Story:** As a visitor, I want to know what happened after I submitted, so that I'm not left guessing.

**Acceptance Criteria:**

- **AC-CONTACT-004.1:** While sending, the submit button shall be disabled and indicate progress ("Sending...").
- **AC-CONTACT-004.2:** On success, the form shall be replaced by a confirmation panel announcing that the message was received.

## Non-functional requirements

- **NFR-CONTACT-001:** Submission state shall be communicated accessibly (the confirmation uses a live region).

## Out of scope

- Spam protection (e.g., CAPTCHA, rate limiting) — not present in the baseline.
- Saving inquiries to a database — delivery is email-only.
- A project-type dropdown (exists in code as a commented-out draft; not part of the current contract).

## Traceability notes

- **Related product goal:** conversion of visitor interest into inquiries.
- **Dependencies:** site chrome; Resend service availability; `RESEND_API_KEY` secret.
- **Known risks (recorded as follow-up candidates in the manifest):** on send failure the form silently remains with no user-facing error message; form input is interpolated unescaped into the HTML email body. Both are hardening candidates for a future initiative — not part of the baseline contract.
