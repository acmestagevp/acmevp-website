# Feature Blueprint: Contact and Inquiry

> This is the technical counterpart to [`contact-inquiry.md`](../../requirements/features/contact-inquiry.md). It explains how shared capabilities and feature-specific components satisfy the feature requirements.

## Feature Summary

The `/contact` page is a client component presenting contact channels and an inquiry form wired to the `sendEmail` server action via `useActionState`. Submission state flows through React: `useFormStatus` drives the pending button, and a successful result replaces the form with a confirmation panel. Delivery is delegated to the Resend SDK inside the server action.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Requirements:** [`../../requirements/features/contact-inquiry.md`](../../requirements/features/contact-inquiry.md)

## Component Blueprint Composition

Composes @Presentation Foundation (#Section, #ContentWrapper wide, #AnimateIn) for layout. The form uses `control-surface` styling tokens from [`app/globals.css`](../../../app/globals.css).

## Feature-Specific Components

```component
name: ContactPage
container: Next.js Web App
responsibilities:
	- Client component: contact channels (mailto/tel) + inquiry form
	- useActionState(sendEmail) drives form vs. confirmation rendering
```

```component
name: SubmitButton
container: Next.js Web App
responsibilities:
	- useFormStatus pending state: disabled + "Sending..." label while in flight
```

```component
name: sendEmail
container: Next.js Web App
responsibilities:
	- Server action: parse FormData (name, email, subject, message)
	- Send via Resend: fixed sender, to info@acmevp.com, CC list, reply-to visitor, subject from form
	- try/catch → { success: boolean }; console logging only
```

## Models and contracts

```model
name: InquiryForm
store: FormData (unpersisted)
description: Four required fields submitted to the server action
fields:
	- name, email, subject, message
constraints:
	- All fields required; email type-validated by the input
	- No server-side validation or sanitization (known follow-up candidate)
```

### Key Contracts

- `sendEmail(prevState: { success: boolean }, formData) → { success: boolean }` — the only server boundary; requires `RESEND_API_KEY`.
- Success replaces the form with a `role="status" aria-live="polite"` confirmation panel.
- Failure returns `{ success: false }` with no user-facing error surface (follow-up candidate).

### Integration Contracts

- Resend sender identity is fixed (`no-reply@acmevp.com`); recipients/CCs are hardcoded in the action.

## Requirement alignment

- `REQ-CONTACT-001` → ContactPage left column: mailto + tel links
- `REQ-CONTACT-002` → form fields with `htmlFor`-associated labels; required + email type
- `REQ-CONTACT-003` → #sendEmail server action + Resend
- `REQ-CONTACT-004` → #SubmitButton pending state + success confirmation panel

## Architecture Decision Records

### ADR-001: Server action instead of an API route

**Context:** The form needs email delivery without a custom endpoint.

**Decision:** `"use server"` action in [`utils/sendEmail.ts`](../../../utils/sendEmail.ts), integrated with `useActionState`/`useFormStatus`.

**Consequences:** No API surface to secure or version; failure handling is currently minimal (recorded as a follow-up candidate in the manifest).
