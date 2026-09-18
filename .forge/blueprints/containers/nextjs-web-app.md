# Container Blueprint: Next.js Web App

## Container Summary

The single deployable boundary of this repository: the ACME Virtual Production marketing website. A statically generated Next.js application serving six public routes, one server action (contact email), and generated `robots.txt`/`sitemap.xml`. Consumers: public visitors, search engines, and the studio's email inbox (via the inquiry form).

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Technical context:** [`../technical-context.md`](../technical-context.md)

## Infrastructure

- **Technology/runtime:** Next.js 16.1.6 (App Router) on Node.js; React 19.2.3; TypeScript 5
- **Build/package:** `pnpm build` (static generation for all routes; project pages via `generateStaticParams`); pnpm workspace
- **Deployment/distribution:** Vercel CI/CD, triggered by the user's manual push of `master` to `origin` (github.com/acmestagevp/acmevp-website); production domain `acmevp.com`
- **Configuration:** `.env.local` with `RESEND_API_KEY`; site URL hardcoded as `https://acmevp.com`
- **Dependencies:** framer-motion (animation), next-video + Mux (video playback), resend (email delivery), Tailwind CSS 4 (styling)

## Entry points and boundaries

- **Inputs:** HTTP GET for `/`, `/stage`, `/services`, `/projects`, `/projects/[slug]`, `/contact`, `/robots.txt`, `/sitemap.xml`; POST of the contact form to the `sendEmail` server action
- **Outputs:** static HTML pages with metadata; generated robots/sitemap; email messages via Resend
- **External systems:** Mux (video playback by ID), Resend (email delivery), Vercel (hosting/CDN)
- **Internal areas:** [`app/`](../../../app/) routes; [`components/`](../../../components/) presentation; [`constants/`](../../../constants/) data; [`utils/`](../../../utils/) server utilities; [`public/`](../../../public/) assets

## System Contracts

### Key Contracts

- **Catalog types** ([`constants/projects.ts`](../../../constants/projects.ts)): `Project` (slug, title, subtitle, thumbnail, content blocks, publicationState, seo), `ContentBlock` union (`video` | `text` | `image`), `ProjectVideoSource` union (`local-fixture` | `mux`). The catalog is the single source of truth; slugs must be URL-safe and unique.
- **Publication states:** `fixture-valid` → `indexable` → `publishable`. Indexing and sitemap inclusion require `indexable` or `publishable`.
- **Readiness report** ([`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts)): pure function over the catalog returning `{ fixtureValid, indexable, publishable, technicalFailures, contentGates }`; filesystem checks (`existsInPublic`) require server/build context.
- **Server action** ([`utils/sendEmail.ts`](../../../utils/sendEmail.ts)): `sendEmail(prevState, formData) → { success: boolean }`; requires `RESEND_API_KEY`; catches all delivery errors.

### Integration Contracts

- **Mux:** playback IDs embedded in the catalog; rendered by next-video's `<Video playbackId=…>`; ID shape validated by the readiness checker.
- **Resend:** fixed sender `ACME Virtual Production <no-reply@acmevp.com>`, recipient `info@acmevp.com`, CC list, reply-to the visitor.
- **Vercel:** build output deployed on push of `master` by the user; no agent-initiated pushes or deployments.

## Architecture Decision Records

### ADR-001: Code-resident content, no CMS

**Context:** The site's content (copy, projects, logos, testimonials) changes infrequently and is owned by a technical user.

**Decision:** All content lives in page components and `constants/` TypeScript modules; no CMS or database.

**Consequences:** Content changes are code changes (versioned, type-checked, require build+deploy); no editor interface for non-technical contributors.

### ADR-002: Publication-state gating for search exposure

**Context:** Projects move from draft fixtures to approved publishable media; unapproved work must not leak into search indexes.

**Decision:** Each catalog project carries a `publicationState`; metadata robots directives and sitemap inclusion derive from it, backed by a readiness report that separates technical failures from content-approval gates.

**Consequences:** Draft work can ship in code without becoming public in search; approvals are explicit data, not comments.

### ADR-003: Contact form as a server action

**Context:** The inquiry form needs server-side email delivery without building an API route.

**Decision:** Use a Next.js server action (`"use server"` in `utils/sendEmail.ts`) integrated with `useActionState`/`useFormStatus` on the client.

**Consequences:** No custom API surface; state management stays in React; delivery failures currently surface only as a silent non-success state (follow-up candidate).
