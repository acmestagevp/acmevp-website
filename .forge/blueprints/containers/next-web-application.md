# Container Blueprint: Next.js Web Application

## Container Summary

The single public website container presents ACME Virtual Production's Minneapolis LED volume, services, portfolio, proof, and contact path. It is consumed by production clients and maintained by the ACME website team.

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Technical context:** [`../technical-context.md`](../technical-context.md)

## Infrastructure

- **Technology/runtime:** Next.js 16 App Router, React 19, TypeScript 5
- **Build/package:** pnpm; `pnpm lint`, `pnpm build`, `pnpm dev`, `pnpm start`
- **Deployment/distribution:** Vercel or equivalent Next.js host, provisional
- **Configuration:** Next metadata/configuration; `RESEND_API_KEY` for server-side email
- **Dependencies:** React, Framer Motion, Resend, Tailwind/PostCSS, YouTube/Vimeo embeds, public media

## Entry points and boundaries

- **Inputs:** Browser requests to `/`, `/stage`, `/services`, `/projects`, `/projects/[slug]`, and `/contact`; content edits to constants and public assets; contact form submissions.
- **Outputs:** Rendered HTML/React UI, metadata, sitemap/robots responses, public assets, and Resend email requests.
- **External systems:** Vercel/equivalent host, Resend, YouTube, Vimeo, and browser APIs such as IntersectionObserver/requestAnimationFrame/media queries.
- **Internal areas:** `app/` routes, `components/`, `constants/`, `utils/`, and `public/`.

## System Contracts

### Key Contracts

- Route pages compose shared layout primitives and preserve accessible names/links/forms.
- `constants/projects.ts` project slugs are URL-safe and are the source for generated project params and detail rendering.
- Public-relative asset paths resolve beneath `public/`.
- Contact credentials are server-only; failed delivery must not be represented as success.

### Integration Contracts

- Project content blocks are dispatched by their discriminated `type` to video, text, or image presentation.
- Contact form fields are `name`, `email`, `subject`, and `message`; the server action sends them through Resend.
- Navigation items provide `label` and `href` and are consumed by desktop and mobile navigation.

## Architecture Decision Records

### ADR-001: Keep the website as one Next.js container

**Context:** The repository is a small marketing site with route-level rendering, static media, and one server-side email integration.

**Decision:** Maintain a single deployable Next.js application; do not introduce separate services during initialization.

**Consequences:** Shared components and constants remain easy to discover. External service failures and deployment configuration remain explicit operational dependencies.
