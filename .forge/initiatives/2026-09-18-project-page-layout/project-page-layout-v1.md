# Initiative: Project Page Layout

## Initiative metadata

- **Phase:** `draft` | `plan` | `review` | `execute` | `validate` | `closeout` — selected: `draft`
- **Status:** `active` | `blocked` | `closed` — selected: `active`
- **Owner/orchestrator:** John Wildauer (owner) / Zoo architect session (orchestrator during draft)
- **Created:** 2026-09-18
- **Updated:** 2026-09-18
- **Authoritative version:** `v1`
- **Initiative mode:** `standard` | `rapid` — selected: `standard`
- **Mode requested by:** `project policy` — standard is the default; no rapid request was made for this initiative
- **Mode confirmation:** standard requires none. The user's standing preference is to be offered rapid when eligible; it may be offered once the layout scope converges to something small and well understood.
- **Rapid-mode eligibility:** `not eligible` — the desired layout changes are not yet described; eligibility is assessed after convergence
- **Base/default branch:** `master`
- **Initiative branch:** `dev/2026-09-18-project-page-layout` <!-- evidence recorded below after branch creation -->
- **Branch policy:** `required` — selected: `required` (local only; agents never push)
- **Branch naming convention:** `dev/YYYY-MM-DD-short-slug` — no override
- **Branch capability/evidence:** `pending git dispatch` <!-- replaced with commit/branch evidence after the execution-capable session runs -->
- **Reduced-capability fallback or opt-out evidence:** not applicable — Git fully available; CLI authority routes to coding sessions per manifest policy
- **Branch creation failure:** `none` | `recorded below` — `none` (pending)
- **Validation cadence:** `per work order` | `consolidated` | `custom` — selected: `per work order`
- **Phase transition evidence:** initiative created 2026-09-18 from the initialization handoff (manifest status `complete`; recommended first initiative recorded in [Decisions and handoff](../../project-manifest.md#decisions-and-handoff))
- **Direct-translation confirmation:** `not needed` | `requested and confirmed` — evidence: `not needed` (initial prompt was a focus area, not a broad authorization; scope converges with the user)

## Standard artifact locations

- **Authoritative plan:** [`project-page-layout-v1.md`](project-page-layout-v1.md)
- **Design review:** [`reviews/design-review.md`](reviews/design-review.md)
- **Validations:** `validations/validation-[work-order-id].md`
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/)

## Outcome

A refined layout for the individual project pages (`/projects/[slug]`), approved by the user. **Draft — the specific observable outcome converges with the user before work orders are created.**

## Initiative boundary and sizing

- **Parent roadmap or product goal:** ongoing maintenance and polish of the ACME marketing site (see [Product overview](../../requirements/product-overview.md)); first initiative per the initialization handoff
- **Initiative type:** `workspace foundation` | `product MVP stage` | `A/B experiment` | `plausibility branch` | `other` — selected: `other` (baseline-contract refinement of an existing feature)
- **Single observable outcome:** the project detail pages present ACME's work in an improved layout that the user approves
- **Validation boundary:** `pnpm build` + `pnpm lint` pass, plus the user's visual verification of the affected pages (per manifest policy)
- **Split assessment:** `keep as one initiative` | `split into linked initiatives` — decision: `keep as one initiative` (single page family, single outcome)
- **If split, traceability and dependencies:** not applicable

## Scope

### In scope

- Provisional (until convergence): the project detail route presentation — [`app/projects/[slug]/page.tsx`](../../../app/projects/[slug]/page.tsx), [`components/project/`](../../../components/project/) components, and related styling/tokens

### Out of scope

- Provisional (until convergence): catalog data-model changes, other pages, SEO/metadata behavior, and the remnant-component cleanup (separate follow-up)

## Context and motivation

The user identified the individual project pages as the first area to improve. The current baseline is documented in [`requirements/features/project-detail.md`](../../requirements/features/project-detail.md) and [`blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md): a title header, ordered content blocks (video-first today), and a closing CTA.

## Exploration scratchpad

### Initial findings

- All four catalog projects are single-video pages: a lone Mux video block, auto-featured full-bleed (`md:h-[85vh]`), with credits text blocks commented out in the catalog ([`constants/projects.ts`](../../../constants/projects.ts)).
- `ProjectContent` computes composition archetypes (`film-first`, `case-study`, `behind-the-scenes`) and applies a `composition-*` class, but only `film-first` is exercised by current data.
- The page closes with a "Discuss a project" CTA and a "Back to Projects" link.
- Baseline checks (2026-09-18): `pnpm build` passes; `pnpm lint` fails only in remnant files unrelated to this initiative.

### Questions and hypotheses

- What specifically does the user want improved: header treatment, media framing/scale, spacing/rhythm, credits presentation, or the closing section?
- Should the commented-out credits blocks return as part of the new layout?
- Are there reference pages (internal or external) that express the target look?

### Options considered

| Option            | Benefits | Costs/risks | Current direction                 |
| ----------------- | -------- | ----------- | --------------------------------- |
| TBD with the user | —        | —           | awaiting convergence conversation |

### Decisions and discussion notes

- 2026-09-18: user selected project page layout as the first initiative focus during initialization intake.

### Next investigation or conversation focus

- Converge with the user on the specific layout changes, reference examples, and whether credits return; then formalize scope and work orders.

## Requirements and blueprint references

- **Requirements:** [`requirements/features/project-detail.md`](../../requirements/features/project-detail.md) — REQ-PDET-001…004 (this initiative will likely revise the presentation requirements; durable-document impact classified per work order)
- **Blueprints:** [`blueprints/features/project-detail.md`](../../blueprints/features/project-detail.md); [`blueprints/components/presentation-foundation.md`](../../blueprints/components/presentation-foundation.md); [`blueprints/components/media-delivery.md`](../../blueprints/components/media-delivery.md)

## Proposed design

To be authored during convergence with the user.

## Work-order plan

Work orders are not created during initial exploration. Once the user confirms
the initiative is ready for formal design preparation, create the generated
work-order files here and replace this note with the ordered plan.

_No work orders created yet._

## Risks and decisions

- **Risk:** layout changes may alter documented baseline behavior — **Mitigation:** work orders classify requirements/blueprint impact and update [`project-detail.md`](../../requirements/features/project-detail.md) as authorized
- **Decision needed:** the concrete layout direction — **Owner:** John Wildauer

## Design readiness checklist

- [ ] Scope and exclusions are explicit.
- [ ] The initiative has one observable outcome and one named validation boundary.
- [ ] The initiative is traceable to its roadmap or parent product goal, including any staged MVP relationship.
- [ ] The advisory split assessment is recorded; any split initiatives have distinct outcomes, dependencies, and review/closeout boundaries.
- [ ] Requirements and blueprints are linked.
- [ ] Work orders are independently executable and ordered.
- [ ] Every work order carries a durable-document impact classification per [`00-overview.md`](../../process/00-overview.md).
- [ ] Initiative mode metadata (mode, requested by, confirmation, eligibility) is recorded.
- [ ] Phase transition evidence and the direct-translation confirmation (when applicable) are recorded.
- [ ] Validation cadence is recorded.
- [ ] Validation commands and manual gates are identified.
- [ ] Required human approval has been obtained or is pending at the documented gate.
