# Feature Blueprint: Contact Inquiry

## Feature Summary

`app/contact/page.tsx` is a client component using React form state and a server action from `utils/sendEmail.ts`. The action reads form fields and sends through Resend using a server-side API key, returning success/failure state to the page.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Requirements:** [`../../requirements/features/contact-inquiry.md`](../../requirements/features/contact-inquiry.md)

## Component Blueprint Composition

Compose [#Shared Site Shell](../components/shared-site-shell.md) with Contact page form composition and the Resend server integration.

## Feature-Specific Components

```component
name: ContactInquiryFlow
container: Next.js Web Application
responsibilities:
  - Render labeled required fields and pending/success states.
  - Invoke the server action and expose status feedback.
```

```component
name: ResendEmailAdapter
container: Next.js Web Application
responsibilities:
  - Translate validated form data into a Resend email request.
  - Return failure when provider delivery throws or reports failure.
```

## Requirement alignment

- `REQ-CONTACT-001` → Contact form, `useActionState`, and `sendEmail`.
- `REQ-CONTACT-002` → Action result controls the confirmation state; direct email/phone are rendered alongside the form.

## Architecture Decision Records

### ADR-001: Keep email delivery server-side

**Context:** Resend requires a secret API key and the contact flow does not need a client-side provider SDK.

**Decision:** Keep provider calls in the server action and expose only a boolean outcome to the client form.

**Consequences:** Secrets stay out of browser bundles; production delivery configuration must be verified separately.
