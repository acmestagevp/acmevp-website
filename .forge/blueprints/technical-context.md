# Technical Context — Minneapolis LED Volume Website

## Document status

- **Status:** `in-review`
- **Owner:** ACME website team
- **Last updated:** 2026-08-31
- **Evidence basis:** observed repository structure, package manifest, and inferred deployment policy

## Repository map

| Area | Path/signpost | Responsibility |
|---|---|---|
| Application routes | `app/` | Next.js App Router pages, metadata, sitemap, robots, and global CSS |
| Shared layout | `components/layout/`, `components/ui/` | Content wrappers, sections, header, navigation, footer |
| Feature presentation | `components/`, `components/project/`, `components/decoration/` | Content composition, project blocks, animation, backgrounds, logos, testimonials |
| Content constants | `constants/` | Navigation, logos, projects, testimonials; primary structured content source |
| Server integration | `utils/sendEmail.ts` | Resend-backed server action for contact submissions |
| Static media | `public/images/`, `public/background/`, `public/ACME_Stage_Floor_Plan.pdf` | Public image, background, and facility assets |
| Tooling/configuration | `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs` | Dependencies, TypeScript, Next, lint, and Tailwind/PostCSS configuration |

## Runtime and deployment topology

The system is a single Next.js web application. Development runs with `pnpm dev` and serves `http://localhost:3000`; production is built with `pnpm build` and run with `pnpm start`. Deployment is intended for Vercel or an equivalent Next.js host (provisional until the deployment project is verified). Browser clients receive statically rendered/server-rendered route output, public assets, and client-side behavior where components opt into it. The Contact route invokes a server action that sends email through Resend.

## Technology baseline

| Concern | Choice | Version/constraint | Confidence |
|---|---|---|---|
| Language | TypeScript | `^5` | observed |
| Framework | Next.js App Router | `16.1.6` | observed |
| UI runtime | React and React DOM | `19.2.3` | observed |
| Package manager | pnpm | lockfile and workspace file present | observed |
| Styling | Tailwind CSS with PostCSS | Tailwind `^4`, `@tailwindcss/postcss` `^4` | observed |
| Animation | Framer Motion plus browser APIs | Framer Motion `^12.38.0` | observed |
| Email | Resend server SDK | `^6.10.0`; `RESEND_API_KEY` required | observed |
| Deployment | Vercel or equivalent | Project/environment not yet verified | provisional |

## Cross-cutting concerns

- **Configuration and secrets:** Environment variables are accessed server-side for Resend; API keys must remain outside source control.
- **Authentication/authorization:** None observed; all routes are public.
- **Errors and retries:** Contact send failures return an unsuccessful action state and log server-side; retry/operational alerting is not observed.
- **Logging and observability:** Browser console/network checks and build/lint are the current validation mechanisms; production observability is unknown.
- **Persistence and migrations:** No application database or migration system observed.
- **Testing strategy:** No test suite is declared in `package.json`; use lint, build, route smoke checks, responsive checks, keyboard checks, and reduced-motion checks.

## Boundary inventory

- [`next-web-application.md`](containers/next-web-application.md) — Deployable Next.js site, public routes, static assets, and contact server action.

## Architectural risks and unknowns

- Several marketing copy blocks are inline in route files, so the constants source-of-truth is incomplete.
- `utils/componentMap.ts` contains mostly commented mappings and is not the active composition mechanism; do not treat it as authoritative without verification.
- Project records include fixture-like video IDs and publication-state support; public approval and media ownership need confirmation.
- External video embeds and Resend introduce network/runtime dependencies.
- Git branch/default-branch capability could not be verified through the available repository inspection tools and remains an initialization unknown.
