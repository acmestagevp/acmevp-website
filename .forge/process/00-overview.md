# Software Forge Process Overview

## Purpose

This directory contains the instructions that agents use to initialize a repository, plan an initiative, execute work orders, validate changes, and close out the resulting branch. The workflow is documentation-driven: agents must read the durable requirements and blueprints before proposing or implementing changes, and must leave an auditable record of decisions and evidence.

The installed workflow begins at [`../_index.md`](../_index.md). This file defines the shared vocabulary, lifecycle, defaults, and project-specific policy that all other process documents inherit.

## Artifact boundaries

- [`../requirements/`](../requirements/) is the durable product definition: what the system should do, for whom, and why.
- [`../blueprints/`](../blueprints/) is the durable technical definition: how the system is organized and how behavior is realized.
- [`../initiatives/`](../initiatives/) contains bounded work. An initiative may update requirements or blueprints only when its work orders explicitly authorize those updates.

Temporary planning notes, agent conversations, and scratchpads are inputs to the workflow, not durable sources of truth. When a decision becomes relevant to future work, record it in the appropriate durable document or initiative log.

## Shared lifecycle

### Initialization

Use [`01-init-new.md`](01-init-new.md) for a new or empty repository and [`01-init-existing.md`](01-init-existing.md) for a repository with existing code or artifacts. Both paths use [`../initialization-record.md`](../initialization-record.md) as the durable questionnaire and produce a product overview, requirements/blueprints baseline, project policy, independent validation findings, and a recommended first initiative.

### Initiative execution

Use [`02-initiative.md`](02-initiative.md) to turn a requested change into a scoped initiative and ordered work orders. Validate the proposed design with [`03-design-review.md`](03-design-review.md), implement each work order with [`04-work-order.md`](04-work-order.md), validate implementation with [`05-implementation-review.md`](05-implementation-review.md), and complete the final reconciliation with [`06-closeout-review.md`](06-closeout-review.md).

### Review routing

Route each review by the artifact and evidence it is authorized to assess.

| Review | Reviews | May run when | Must not assess | Required output |
|---|---|---|---|---|
| Requirements review | Product and feature intent, scope, users, and acceptance criteria | A requirements draft exists and is ready for independent review | Implementation completeness or unauthorized code | `requirements-review.md` in the initiative's `reviews/` directory, or the configured requirements-review location when no initiative exists yet |
| Design review | The initiative plan and its work orders | The plan is `in-review` and design-readiness checks pass | Code or implementation obligations not authorized by the plan | `design-review.md` in the initiative's `reviews/` directory |
| Implementation review | One completed work order, or the configured implementation batch | All implementation-review preconditions below are satisfied | Unimplemented design obligations or future scope | `implementation-review-[work-order-id].md` in the initiative's `reviews/` directory |
| Closeout review | The complete initiative branch, evidence, and follow-up state | All required work-order reviews and gates exist | New scope or redesign | `closeout-review.md` in the initiative's `reviews/` directory |

Requirements review is distinct from design review: it determines whether intent is clear, coherent, and testable before technical planning relies on it. Its outcome is `pass` only when no blocker remains; warnings require the configured owner/approver to accept them. A failed or blocked requirements review returns the requirements artifact to `draft` or `blocked` with a recorded next action and does not authorize design work.

Before dispatching implementation review, the orchestrator must verify that:

1. the work order is marked `in-review` after implementation;
2. the implementer recorded all changed files, including created/deleted files;
3. validation attempts and results, including unavailable or failed checks, are recorded; and
4. a comparable branch diff, file diff, or equivalent evidence exists.

If any precondition is missing, do not dispatch the implementation reviewer. Return the work order to `in-progress` for evidence completion, or mark it `blocked` when the evidence or required gate cannot be obtained. The reviewer assesses only the authorized work-order scope and acceptance criteria. Design deficiencies route to design review unless they appear as an implementation defect against an approved design.

Every review records its result in the initiative's `reviews/` directory and links it from the reviewed artifact and execution log. Each finding includes severity, evidence, recommendation, and required next state.

## Status vocabulary

Use these statuses unless the project policy defines a stricter compatible vocabulary:

| Status | Meaning |
|---|---|
| `draft` | The artifact is being authored and is not ready for execution. |
| `in-review` | A reviewer or human is evaluating the artifact. |
| `approved` | Required approval for the current gate has passed. |
| `in-progress` | Work is actively being performed. |
| `blocked` | Safe progress requires a decision, fix, external action, or manual gate. |
| `complete` | The artifact's scoped work and required validation are complete. |
| `closed` | The initiative has completed closeout and its follow-up state is discoverable. |

Do not mark an artifact `complete` merely because an agent stopped working. Record the evidence and gate outcome that support the status transition.

## Default roles

- **Orchestrator:** owns the initiative state, dispatches agents, enforces gates, and maintains the execution log.
- **Architect/planner:** collaborates on intent, constraints, design, and work-order decomposition.
- **Implementer:** executes one assigned work order and records the resulting changes.
- **Reviewer:** evaluates an artifact or implementation with fresh context and reports findings without silently changing the reviewed work.
- **Human approver:** resolves decisions and approvals required by the project policy.

One agent may perform more than one role only when the project policy permits it. A reviewer must not approve its own implementation work.

## Default gate policy

The default is human approval after design review. Human approval is not required after every implementation review unless the project policy says so; implementation reviews still run according to the configured cadence, which defaults to one review per work order. Closeout is mandatory. These defaults must be recorded in the initialization record when no project-specific configuration exists.

An automated bypass is valid only when it is documented in this policy section or in an initiative-specific decision that is stricter than the policy. Every bypass must identify the policy basis, approver or standing authority, and validation evidence.

## Project-specific policy

Initialization must replace the placeholders in this section with facts for the host repository. Until that happens, use the defaults above and treat unknown commands or gates as unknown—not as permission to skip validation.

### Repository and branch

- **Repository type:** Existing TypeScript/Next.js App Router marketing website for ACME Virtual Production's Minneapolis LED volume.
- **Default branch:** `master` — described by the stakeholder as the CD/CI master branch; verify its exact remote name before merge.
- **Initiative branch policy:** Current work may remain on its existing branch during documentation; future initiatives use a dedicated branch and merge back to the CD/CI `master` branch when approved.
- **Commit/pull-request policy:** Remote/PR is expected; human design approval, one implementation review per work order, and closeout are required. No initiative or implementation is active in this initialization.

### Commands

- **Install/setup:** `pnpm install` (lockfile-backed; not run during documentation-only initialization)
- **Format:** No formatter script configured; preserve existing formatting and use review/build checks.
- **Lint/static analysis:** `pnpm lint`
- **Unit/integration tests:** No test script or test suite observed; use route smoke and browser checks.
- **Build/package:** `pnpm build`
- **Run/manual verification:** `pnpm dev` then Playwright at `http://localhost:3000`; use `pnpm start` for production-mode verification when required.

### Gates and intervention

- **Design approval:** `human approval required by default`
- **Implementation review cadence:** `one review per work order by default`
- **Manual/external gates:** Human design approval; stakeholder approval of public claims/project publication; verify Vercel/equivalent deployment and Resend configuration before release.
- **Automation bypasses:** None. Missing checks are recorded as unknown or blocked, never treated as passing.
- **Network or destructive-action restrictions:** Do not expose secrets or perform destructive actions; external embeds and email delivery require runtime-aware validation.

### Tools and parallelism

- **Required tools/MCP servers:** Repository file inspection, patch-based Markdown editing, and Playwright MCP for browser validation.
- **Optional tools/MCP servers:** None required; shell/Git capability should be used when available to verify branch state and commands.
- **Default parallelism:** `sequential work orders`
- **Permitted parallelism:** Documentation-only inventory may be parallelized by artifact; implementation work orders remain sequential unless file ownership is explicitly disjoint.

### Failure and recovery

When a review or command fails, the orchestrator must record the exact finding, affected artifact, attempted remediation, evidence, decision-maker, and next state in the initiative execution log. A failed gate blocks completion until it is fixed, explicitly waived under this policy, or tabled as follow-up work.

## Authoring rules shared by all processes

1. Read the relevant process file, initiative artifacts, requirements, and blueprints before acting.
2. Prefer evidence from the repository over assumptions. Label observed, inferred, desired, and provisional information where relevant.
3. Keep scope explicit. Every work order must state what is in scope and out of scope.
4. Preserve traceability from work order to requirements/blueprints and from implementation back to the work order.
5. Make the smallest durable documentation update that accurately reflects the resulting system.
6. Append execution events; do not rewrite history to hide failed attempts or discarded decisions.
7. Stop and mark the work `blocked` when required information or validation is unavailable.
