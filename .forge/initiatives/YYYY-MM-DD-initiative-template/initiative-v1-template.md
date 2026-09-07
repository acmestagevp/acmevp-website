# Initiative: Short Slug

> Copy this directory to `.forge/initiatives/YYYY-MM-DD-short-slug/`, rename this file to `short-slug-v1.md`, and replace `initiative-slug`/`short-slug` placeholders in copied links. Keep superseded plan versions for history, but identify only one version as authoritative. The source template directory and its descriptive filename are not renamed.

## Initiative metadata

- **Status:** `draft`
- **Owner/orchestrator:** `TODO`
- **Created:** `TODO`
- **Updated:** `TODO`
- **Current gate:** `planning`
- **Authoritative version:** `v1`
- **Base/default branch:** `TODO`
- **Initiative branch:** `TODO` <!-- branch name, or `none` in reduced-capability/opt-out mode -->
- **Branch policy:** `required` | `optional` | `user opt-out` — selected: `TODO`
- **Branch naming convention:** `forge/YYYY-MM-DD-short-slug` or project override: `TODO`
- **Branch capability/evidence:** `TODO`
- **Reduced-capability fallback or opt-out evidence:** `TODO` <!-- include explicit no-branch review notice when applicable -->
- **Branch creation failure:** `none` | `recorded below` — `TODO`

## Standard artifact locations

- **Authoritative plan:** `[initiative-slug]-v1.md`
- **Design review:** [`reviews/design-review.md`](reviews/design-review.md)
- **Implementation reviews:** `reviews/implementation-review-[work-order-id].md`
- **Closeout review:** [`reviews/closeout-review.md`](reviews/closeout-review.md)
- **Execution log:** [`execution-log.md`](execution-log.md)
- **Work orders:** [`work-orders/`](work-orders/)

## Outcome

`TODO: What valuable, observable outcome will this initiative deliver?`

## Initiative boundary and sizing

- **Parent roadmap or product goal:** `TODO: link the roadmap or broader goal; identify the staged MVP step if applicable`
- **Initiative type:** `workspace foundation` | `product MVP stage` | `A/B experiment` | `plausibility branch` | `other` — selected: `TODO`
- **Single observable outcome:** `TODO: state the one outcome that makes this initiative complete`
- **Validation boundary:** `TODO: name the independent review, test, demonstration, or manual check that determines whether the outcome is met`
- **Split assessment:** `keep as one initiative` | `split into linked initiatives` — decision: `TODO`
- **If split, traceability and dependencies:** `TODO: record resulting initiative slugs, dependency order, and how each remains independently reviewable`

Use the sizing guidance in [`02-initiative.md`](../../process/02-initiative.md). This is advisory: a coherent initiative may remain one initiative regardless of duration or work-order count. Consider splitting when outcomes are unrelated, there is no single validation boundary, several independent product decisions are required, or future work is being treated as present.

## Scope

### In scope

- `TODO`

### Out of scope

- `TODO`

## Context and motivation

`TODO: Explain the problem and link the relevant durable documents.`

## Requirements and blueprint references

- **Requirements:** `TODO: relative links and IDs`
- **Blueprints:** `TODO: relative links`

## Proposed design

`TODO: Describe the intended approach, key flows, and architectural decisions without turning this into a line-by-line implementation plan.`

## Work-order plan

| Order | Work order | Purpose | Dependencies | Review cadence |
|---|---|---|---|---|
| 1 | [`work-orders/WO-001-short-title.md`](work-orders/WO-001-short-title.md) <!-- replace with the generated work-order filename --> | `TODO` | `none` | `per work order` |

## Risks and decisions

- **Risk:** `TODO` — **Mitigation:** `TODO`
- **Decision needed:** `TODO` — **Owner:** `TODO`

## Design readiness checklist

- [ ] Scope and exclusions are explicit.
- [ ] The initiative has one observable outcome and one named validation boundary.
- [ ] The initiative is traceable to its roadmap or parent product goal, including any staged MVP relationship.
- [ ] The advisory split assessment is recorded; any split initiatives have distinct outcomes, dependencies, and review/closeout boundaries.
- [ ] Requirements and blueprints are linked.
- [ ] Work orders are independently executable and ordered.
- [ ] Validation commands and manual gates are identified.
- [ ] Required human approval has been obtained or is pending at the documented gate.
