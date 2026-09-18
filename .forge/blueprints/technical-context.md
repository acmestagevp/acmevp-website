# Technical Context

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Evidence basis:** `observed`

## Repository map

| Area               | Path/signpost                                            | Responsibility                                                                                                                           |
| ------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| App routes         | [`app/`](../../app/)                                     | Next.js App Router: home, stage, services, projects, project detail, contact; plus root layout, global styles, `robots.ts`, `sitemap.ts` |
| UI chrome          | [`components/ui/`](../../components/ui/)                 | `NavBar` (fixed responsive nav), `Footer`, `Header` (hero section with image variants)                                                   |
| Layout primitives  | [`components/layout/`](../../components/layout/)         | `Section` (mode/variant/border/atmosphere), `ContentWrapper` (default/wide/narrow/full/bleed widths)                                     |
| Project content    | [`components/project/`](../../components/project/)       | `ProjectContent` block dispatcher; `VideoBlock`, `TextBlock`, `ImageBlock`                                                               |
| Decoration         | [`components/decoration/`](../../components/decoration/) | `AnimateIn` (reduced-motion-aware entrance animation), `Background` (glow + noise layers)                                                |
| Content components | [`components/`](../../components/)                       | `Content` (two-column editorial block), `ProjectCard`, `Testimonials` (marquee), `Logo`                                                  |
| Data               | [`constants/`](../../constants/)                         | `projects.ts` (catalog + types + publication states), `nav.ts`, `logos.ts`, `testimonials.ts`                                            |
| Server utilities   | [`utils/`](../../utils/)                                 | `sendEmail.ts` (Resend server action), `projectReadiness.ts` (catalog validation + readiness report)                                     |
| Static assets      | [`public/`](../../public/)                               | Images, background layers, stage floor-plan PDF                                                                                          |
| Video records      | [`videos/`](../../videos/)                               | next-video JSON records for local video fixtures                                                                                         |
| Styling            | [`app/globals.css`](../../app/globals.css)               | Tailwind CSS 4 entry; design tokens (CSS custom properties), layout wrappers, surface classes                                            |

## Runtime and deployment topology

A single Next.js application. Development: `pnpm dev` at `http://localhost:3000`. Production: `pnpm build` statically generates all routes (project detail pages via `generateStaticParams`); the user pushes `master` to GitHub, which triggers Vercel CI/CD deployment to `acmevp.com`. External services: Mux (project video playback), Resend (contact-form email delivery). No server-side persistence — all data is code-resident in `constants/`. The contact form's server action runs on the server at request time; everything else is static.

## Technology baseline

| Concern         | Choice                                                 | Version/constraint             | Confidence |
| --------------- | ------------------------------------------------------ | ------------------------------ | ---------- |
| Language        | TypeScript                                             | 5.x                            | observed   |
| Framework       | Next.js (App Router)                                   | 16.1.6                         | observed   |
| UI library      | React                                                  | 19.2.3                         | observed   |
| Styling         | Tailwind CSS                                           | 4 (via `@tailwindcss/postcss`) | observed   |
| Animation       | framer-motion                                          | ^12.38.0                       | observed   |
| Video           | next-video + Mux playback                              | ^2.8.1                         | observed   |
| Email           | Resend SDK                                             | ^6.10.0                        | observed   |
| Package manager | pnpm                                                   | workspace + lockfile           | observed   |
| Linting         | ESLint + eslint-config-next                            | 9                              | observed   |
| Fonts           | next/font/google — Gilda Display (serif), Inter (sans) | —                              | observed   |
| Runtime         | Node.js                                                | version not pinned             | inferred   |

## Cross-cutting concerns

- **Configuration and secrets:** `RESEND_API_KEY` in `.env.local` (gitignored) — required for the contact form. No other environment variables. The site URL `https://acmevp.com` is hardcoded in layout metadata, sitemap, robots, and project-page metadata.
- **Authentication/authorization:** none — fully public site; no user accounts or protected areas.
- **Errors and retries:** `sendEmail` wraps delivery in try/catch and returns `{ success: false }` on failure with `console.error`; no retries, no user-facing error message. Readiness checking throws nothing — it collects issues into a report.
- **Logging and observability:** `console.log`/`console.error` in the server action only; no logging framework, no analytics.
- **Persistence and migrations:** none. Content lives in `constants/`; next-video keeps JSON records in `videos/` for local fixtures.
- **Testing strategy:** none. Verification is `pnpm build` + `pnpm lint` plus the user's manual visual checks (see project manifest policy).

## Boundary inventory

- [`containers/nextjs-web-app.md`](containers/nextjs-web-app.md) — the single deployable boundary: the Next.js site including its server action, static generation, and external service calls

## Architectural risks and unknowns

- **Unused remnant components** — `components/Banner.tsx`, `components/decoration/BrushReveal.tsx`, `components/Project.tsx`, `utils/componentMap.ts` have no importers. User-confirmed dead ends from past UI trials; intentionally excluded from requirements and component blueprints. Removal is a follow-up candidate, not authorized work. The same remnant set includes the unused `VideoPlatform` type export in `constants/projects.ts` and four unreferenced next-video JSON records in `videos/` (future-iq, future-iq-bts, polica-wasted-me, rba-awit — blueprint review B-4).
- **Contact-form hardening** — no user-facing failure feedback; form input is interpolated unescaped into the HTML email body. Follow-up candidate recorded in the manifest.
- **No test suite, no formatter** — verification depends entirely on build, lint, and manual visual checks.
- **Outstanding SEO content gates** — the four catalog projects are `publishable` but lack approved SEO descriptions, social images, and dates; the readiness report flags these deliberately.
- **Per-route canonical gap** — only home and project pages define canonical URLs (requirements review F-1).
- **Node version unpinned** — no `.nvmrc`/engines field; Vercel build uses its default Node version.
