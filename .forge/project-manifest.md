# Project Manifest

This file is the durable record of project-specific state for this repository:
intake answers, repository baseline, working agreement, project policy, and the
initiative roadmap. Process documents under [`process/`](process/) are generic
and swappable — they may be updated or replaced wholesale without
re-initialization. This manifest is the stable contract they read for every
project-specific fact.

## Metadata

- **Status:** `complete`
- **Path type:** `existing`
- **Initialized on:** 2026-09-18
- **Last revised:** 2026-09-18
- **Record owner:** John Wildauer (user)

> **Process-doc compatibility:** when a process document requires a field this
> manifest does not contain, ask the user one targeted question, record the
> answer in the matching section, and append a revision-history entry. Do not
> re-run initialization to add fields.

## Project intake

- **What is this project called?** ACME Virtual Production website (repository `acme-website`; production domain `acmevp.com`).
- **What are you creating — or keeping created — and who is it for?** The marketing website for ACME Virtual Production, a full-service virtual production studio in Minneapolis, MN. Primary audience: prospective and current production clients (commercials, music videos, branded content) evaluating the stage, services, and past work. Secondary audience: search engines and social previews.
- **What problem or opportunity is driving this work?** Ongoing maintenance and polish of the existing site — content updates, refinements, and small improvements.
- **What would make the first pass successful?** The Forge workflow is fully set up and the first initiative is initiated successfully (ready for the planning stage). That first initiative improves the layout of the individual project pages.
- **Is there anything to explicitly avoid right now?** No agent-initiated pushes to GitHub and no deployments — Vercel CI/CD deploys from `master` when the user pushes it manually. No other non-goals stated.
- **Where should the first initiative focus, if you already know?** Improving the layout of the individual project pages (`/projects/[slug]`).
- **How should we plan the work: just the first initiative, a suggested sequence, or plan as we go?** Plan as we go — maintenance-driven, one initiative at a time, replanned after each.
- **Where do you want to personally check the work, if at all — after the plan is reviewed, after each piece is implemented, at the very end, or never?** After the plan is reviewed — the user approves before implementation starts; independent checks carry the work through afterward.
- **How would you like to work with the agents?** Hands-on: consult the user on technical specifics, not just outcomes. Light-touch reviews: enough to confirm plans and work orders execute in the intended direction.
- **Any technology you already know you want (language, framework, tools) or must preserve? Known setup, test, build, or run commands? Important security, privacy, compatibility, budget, or accessibility constraints?** Preserve the existing stack (see Technical preferences). Commands: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm start`. No test suite and no formatter exist. `RESEND_API_KEY` must remain configured in `.env.local` for the contact form.
- **Anything else the agent should know before init begins?** Agents run in Zoo inside VS Code with a CMD shell (not PowerShell). Architect and Orchestrator sessions have no CLI authority: any terminal or git command must be executed by a coding agent (Code mode) or run manually by the user from supplied exact commands. Unused components (`components/Banner.tsx`, `components/decoration/BrushReveal.tsx`, `components/Project.tsx`, `utils/componentMap.ts`) are remnants of past UI trials — record them as known dead ends, but do not codify them in requirements or blueprints.

## Involvement level

- **Level:** `direct` — selected: `direct`
- **Decided by:** `asked directly` — evidence: user chose "Hands-on: consult me on specifics" when offered the three levels.

The level changes **who supplies the answers, not what gets recorded**: every
manifest field is completed at every level, and all gates, reviews, and
validation still run. Agents never weaken diligence because the user is less
involved. Revise the level at any time through a revision-history entry.

## Technical preferences

- **Language:** TypeScript 5 — state: `confirmed` (the running site is TypeScript; the user directs maintenance of the existing stack)
- **Framework:** Next.js 16.1.6 (App Router) with React 19.2.3 — state: `confirmed`
- **Runtime:** Node.js (version not pinned in the repository) — state: `confirmed`
- **Package/build tool:** pnpm (workspace + lockfile present) — state: `confirmed`
- **Target platform:** web browsers; deployed to Vercel from `master` — state: `confirmed`
- **Technical constraints or preferences:** Tailwind CSS 4 for styling; framer-motion for animation (with reduced-motion support); next-video with Mux playback for project videos; Resend for contact-form email; static project catalog in `constants/projects.ts` with a publication-state model; no CMS.

## Working agreement

- **How the user wants to work:** hands-on and direct; light-touch reviews; concise durable documentation.
- **Preferred communication/decision style:** consult the user on technical specifics; plain language for workflow concepts.
- **Ideal user/agent development cycle:** user approves the reviewed initiative plan before implementation; each work order then gets an independent validation; the user personally performs visual verification of results.
- **Rapid-mode preference:** `offer when eligible` — details: offer the rapid path for small, well-understood changes; every work order still receives its own independent validation.
- **Review configuration:**
  - Design review required: `yes` — rationale/authority: user decision at intake; light-touch depth.
  - Validation cadence: `per work order`
  - Requested review depth: `light-touch` — confirm plans and work orders execute in the intended direction; not exhaustive audits.
  - Initialization review location: [`reviews/`](reviews/) at the forge root (user-confirmed 2026-09-18); later initiatives use their own `reviews/` directories.

## Repository baseline

- **Repository state and evidence:** `existing` — full Next.js 16 App Router application (routes, components, constants, utils, public assets) observed directly.
- **Git installed:** `yes` — evidence: `.git/` directory with complete structure (HEAD, refs, objects, logs).
- **Git repository initialized:** `yes` — evidence: `.git/HEAD` → `ref: refs/heads/master`.
- **Current branch:** `master`
- **Default/base branch:** `master` (tracks `origin/master` per `.git/config`)
- **Local initiative branches available:** `yes` — evidence: existing local branches `roo/chatgpt-2026-03-18` and `roo/sonnet-2026-03-18`.
- **Remote:** `available` — details: `origin` → `https://github.com/acmestagevp/acmevp-website.git`. The workflow keeps initiative branches local; the user pushes `master` manually, which triggers Vercel CI/CD.
- **Initiative branch policy:** `required` — selected: local-only branches; agents never push.
- **Default initiative branch naming convention:** `dev/YYYY-MM-DD-short-slug` — override: none.
- **Commit/pull-request policy:** commits land on the initiative branch and merge to `master` at closeout; no pull requests (local-only flow); agents never push to the remote.
- **Reduced-capability fallback:** not needed for Git (fully available). Capability routing applies instead: Architect/Orchestrator sessions cannot execute terminal commands; git and terminal actions are dispatched to a Code-mode session or supplied as exact commands to the user, with results recorded as evidence.
- **Branch capability decision owner/next action:** John Wildauer (user); no action pending.

## Project policy

This section is the single source of project-specific policy. Process
documents and initiatives read it and must not duplicate it elsewhere.

### Commands

- **Install/setup:** `pnpm install` — `known`
- **Format:** `unavailable` — no formatter configured (owner: user; next action: adopt one only if requested)
- **Lint/static analysis:** `pnpm lint` (ESLint 9 + eslint-config-next) — `known` — baseline status: **FAIL** (1 error, 1 warning, both confined to remnant files; see completion evidence)
- **Unit/integration tests:** `unavailable` — no test suite exists (owner: user; next action: none requested; verification relies on build + lint plus the user's visual checks)
- **Build/package:** `pnpm build` — `known`
- **Run/manual verification:** `pnpm dev` (dev server at `http://localhost:3000`); `pnpm start` (production server after build) — `known`

### Gates and intervention

- **Design approval:** `human approval required by default` — the user approves the reviewed initiative plan before execution begins.
- **Validation cadence:** `per work order`
- **Manual/external gates:** the user performs visual verification of affected pages after implementation (build + lint are the automated checks); Vercel deployment occurs only when the user pushes `master`.
- **Automation bypasses:** none.
- **Network or destructive-action restrictions:** agents must never push to the remote, never trigger deployments, and never mutate the remote repository unless the user explicitly instructs it within an initiative.

### Tools and parallelism

- **Required tools/MCP servers:** none
- **Optional tools/MCP servers:** Playwright MCP — permitted for optional automated visual verification when the user requests it. (ue5-clangd MCP is not applicable to this TypeScript project.)
- **Default parallelism:** `sequential work orders`
- **Permitted parallelism:** none — sequential only (small site; avoids merge overhead)

### Failure and recovery

When a review or command fails, the orchestrator records the exact finding,
affected artifact, attempted remediation, evidence, decision-maker, and next
state in the initiative execution log. A failed gate blocks completion until it
is fixed, explicitly waived under this policy, or tabled as follow-up work.

## Decisions and handoff

- **Unresolved decisions:** none blocking. Follow-up candidates (not authorized work): remove or reintegrate the unused components listed in Project intake — they are the sole cause of the current `pnpm lint` failure; harden the contact form (no user-facing error message on send failure; unescaped form input interpolated into HTML email); add per-route canonical URLs for `/stage`, `/services`, `/projects`, and `/contact` (requirements review F-1); normalize the footer `tel:` URI formatting (requirements review F-3).
- **Recommended first initiative:** "Project page layout improvement" — improve the layout of the individual project pages (`/projects/[slug]`). Outcome: a refined project-detail layout approved by the user. Scope: the project detail route and its content-block presentation. Validation: `pnpm build` + `pnpm lint` pass and the user's visual verification.
- **Next initiative or roadmap handoff:** begin at [`process/02-initiative.md`](process/02-initiative.md) with the project-page layout initiative.

## New-codebase initiative roadmap

Not applicable — this is an `existing` repository. Roadmap mode: plan as we go; the next initiative is recommended in [Decisions and handoff](#decisions-and-handoff) and replanned after each closeout.

## Completion evidence

- Product overview: [`requirements/product-overview.md`](requirements/product-overview.md)
- Technical context: [`blueprints/technical-context.md`](blueprints/technical-context.md)
- Project policy: the [Project policy section](#project-policy) of this manifest
- First-initiative recommendation: recorded in [Decisions and handoff](#decisions-and-handoff)
- Requirements review findings: [`reviews/requirements-review.md`](reviews/requirements-review.md) — result `pass` (0 blockers, 1 warning, 3 notes). Warning F-1 fixed in [`requirements/features/seo-discoverability.md`](requirements/features/seo-discoverability.md); note F-2 fixed in [`requirements/features/contact-inquiry.md`](requirements/features/contact-inquiry.md); F-3 recorded as follow-up. All seven requirements artifacts set `approved` 2026-09-18.
- Blueprint review findings: [`reviews/blueprint-review.md`](reviews/blueprint-review.md) — result `pass` (0 blockers, 2 warnings, 3 notes). Warnings B-1/B-2 and notes B-3/B-4/B-5 corrected in the blueprints (plus AC-SEO-005.3 in requirements). All ten blueprint artifacts set `approved` 2026-09-18.
- Validation evidence and gate outcomes (2026-09-18, executed by a dispatched coding session): `pnpm install` not needed (`node_modules` present); `pnpm build` **PASS** — compiled successfully, 14/14 static pages generated, 10 routes including all four project slugs; `pnpm lint` **FAIL** — verbatim: `utils/componentMap.ts:9 error @typescript-eslint/no-explicit-any "Unexpected any. Specify a different type"` and `components/Banner.tsx:12 warning @typescript-eslint/no-unused-vars "'isReversed' is assigned a value but never used"`. Both findings are confined to the remnant dead-end files; recorded, not remediated. Baseline implication: future work orders cannot claim a green lint gate until the remnant cleanup lands.
- Branch capability decision: recorded in [Repository baseline](#repository-baseline) — local initiative branches (`dev/YYYY-MM-DD-short-slug`), agents never push.

## Revision history

| Date       | Changed answer                 | Previous answer | New answer                                                                             | Why                                                                                                       | Owner                      |
| ---------- | ------------------------------ | --------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------- |
| 2026-09-18 | Manifest initialization        | empty template  | all intake, involvement, preference, baseline, and policy fields populated             | Existing-repository initialization per [`process/01-init-existing.md`](process/01-init-existing.md)       | John Wildauer + init agent |
| 2026-09-18 | Initialization review location | unconfigured    | [`reviews/`](reviews/) at the forge root                                               | Process required a configured location for reviews when no initiative exists; user confirmed              | John Wildauer              |
| 2026-09-18 | Requirements review outcome    | unreviewed      | `pass` (0 blockers, 1 warning fixed, 3 notes); all 7 artifacts `approved`              | Fresh-context requirements review per [`process/01-init-existing.md`](process/01-init-existing.md) step 6 | init agent                 |
| 2026-09-18 | Blueprint review outcome       | unreviewed      | `pass` (0 blockers, 2 warnings fixed, 3 notes fixed); all 10 artifacts `approved`      | Fresh-context blueprint review per [`process/01-init-existing.md`](process/01-init-existing.md) step 8    | init agent                 |
| 2026-09-18 | Runnable-state evidence        | unknown         | build PASS (14/14 pages, 10 routes); lint FAIL (remnant files only, recorded verbatim) | Safest available checks executed by a dispatched coding session per step 2                                | init agent                 |
| 2026-09-18 | Manifest status                | `draft`         | `complete`                                                                             | All completion evidence linked; both independent reviews passed                                           | init agent                 |
