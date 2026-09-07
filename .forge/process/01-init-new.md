# Initialize a New Repository

## Purpose

Use this process when the host repository is empty or has no reliable product/codebase baseline. The goal is not to generate a large speculative architecture or an immediate product MVP; it is to establish enough shared context to start a workspace foundation safely and, when useful, plan the next product stages.

## Read first

Read [`00-overview.md`](00-overview.md), then inspect the host repository and any user-provided notes. Treat technical choices as provisional until implementation validates them.

## Initialization questionnaire

Conduct a short, conversational intake and record the answers in the canonical
[`../initialization-record.md`](../initialization-record.md). Ask grouped questions rather than presenting a rigid form, and use `I don't know yet` when a technical choice is not known. Mark that answer provisional and assign a decision owner and next action.

Capture, at minimum:

- repository state (`new`, `existing`, or `uncertain`) and evidence;
- primary goal, users/stakeholders, expected first outcome, explicit non-goals, and tool-use intent;
- preferred language, framework, runtime, package/build tool, and target platform;
- working preferences, including speed, learning, safety, documentation depth, and review strictness;
- Git installation/repository state, current/default branch, local branch capability, remote expectation, initiative branch policy, and reduced-capability fallback;
- required human, external/manual, and automated gates;
- review configuration: design review requirement, implementation cadence, per-work-order versus batch grouping, and requested depth;
- known, unknown, or unavailable commands; and
- unresolved decisions with owners and next actions, plus the recommended first initiative; and
- whether to plan only the first initiative or a staged roadmap toward the product MVP. If a staged roadmap is requested, capture either the user's intended total number of initiatives or an orchestrator-proposed sequence for user approval. The count is the total number of stages, including the mandatory workspace foundation, and must be at least one.

On resume, update the same record, preserve prior answers, and append a dated
revision entry explaining every changed answer.

## Git and branch capability check

Before recommending the first initiative, establish the repository's branch
capability and record the result in [`../initialization-record.md`](../initialization-record.md).
Use available local inspection commands to determine whether Git is installed,
whether the repository is initialized, the current and default/base branch, and
whether a local initiative branch can be created. Record commands as known,
unknown, or unavailable; do not treat an unavailable check as evidence that a
capability exists. Determine whether a remote is required, available, or
intentionally irrelevant; a remote is not required merely because Git is used.

The default policy for a Git repository with local branch capability is a
dedicated initiative branch named `forge/YYYY-MM-DD-short-slug`. A project may
override the naming convention or choose `optional`, but initialization must
record the selected policy and the limitation. The user may opt out for an
initiative; record the opt-out, base branch, and alternate file/diff evidence.

If Git is unavailable, the repository is not initialized, or local branch
creation is unavailable, label the workflow **reduced capability**. Preserve
file and comparable diff evidence where possible, explicitly state that no
branch-level review occurred, strongly recommend installing and initializing
Git locally where practical, and record the fallback owner and next action.

## Procedure

1. **Establish context.** Confirm the repository root, available tools, constraints, target platform, and what “empty” means. Record unknowns rather than inventing facts.
2. **Elicit product intent.** Collaborate with the user on the problem, target users, desired outcome, product MVP boundary, non-goals, and success measures. Distinguish the product MVP from the workspace MVP described below.
3. **Choose the initial roadmap shape.** Ask whether the user wants one first initiative or a sequence toward the product MVP. Accept a count of one or greater, or let the orchestrator propose a provisional sequence for approval. A count is a planning target, not a commitment to create or execute every stage immediately. If the user does not want later stages preplanned, record that the roadmap remains open for replanning after the workspace foundation.
4. **Draft product overview.** Populate [`../requirements/product-overview.md`](../requirements/product-overview.md), clearly marking provisional decisions and distinguishing workspace MVP from product MVP.
5. **Define initial features.** Create one file per cohesive feature under [`../requirements/features/`](../requirements/features/) using the feature template. Use testable requirement and acceptance-criterion IDs.
6. **Review requirements.** Set the requirements artifact to `in-review` and route a fresh-context reviewer using the requirements-review row in [`00-overview.md`](00-overview.md). Record `requirements-review.md` (or the configured equivalent) and resolve blockers before continuing; do not treat this as a design review.
7. **Choose a technical baseline.** Based on requirements and user constraints, document runtime, technology, dependency, and validation assumptions in [`../blueprints/technical-context.md`](../blueprints/technical-context.md).
8. **Create blueprints.** Add only the container, component, and feature blueprints needed to make the next approved initiative implementable. Mark uncertain architecture as provisional.
9. **Review blueprints.** Spawn a fresh-context reviewer to compare the blueprints with requirements and the stated technical constraints. Resolve blockers.
10. **Configure policy.** Replace the `TODO` values in the project-specific policy section of [`00-overview.md`](00-overview.md), including setup, build, test, run, gate, tool, and parallelism rules.
11. **Finalize initialization.** Set the record to `complete` only when completion evidence links the product overview, technical context, policy, reviews, branch capability decision, and first-initiative recommendation/roadmap. If a required decision or validation is unavailable, set it to `blocked` and record the blocking reason, decision needed, owner, and next action. Do not write individual product initiatives or begin implementation in this initialization step.

## Workspace-to-product roadmap

Initiative 1 for every new codebase is the **workspace MVP**: the smallest runnable and verifiable environment that confirms the selected (or intentionally provisional) language/toolset and development loop. It establishes only the agreed starter structure, setup instructions, a baseline check, and a smoke or manual verification path. Examples include a minimal Pixi Python app, a Next.js application with its selected backend boundary, or a UE5 plugin with its build/editor setup. It is not the product feature MVP.

The **product MVP** is the smallest useful product outcome for its intended users. Intermediate initiatives may establish application structure, navigation and footer, componentization, styling/CSS, or other independently valuable foundations before later initiatives deliver product behavior. Do not silently choose a toolset when it is unknown: include a short choice/discovery step in the workspace initiative and keep the decision provisional until resolved.

For each proposed stage, record a slug, purpose, dependency, observable outcome, validation boundary, and relationship to the product MVP in [`../initialization-record.md`](../initialization-record.md). Each stage must be independently reviewable. Preserve the option to stop after the workspace MVP, choose fewer or more later stages, or revise the roadmap after each completed initiative. Do not create placeholder initiatives merely to satisfy a count.

For example, a four-stage web-app plan can remain bite-sized while moving toward
the product MVP:

| Stage | Example scope | Distinct validation boundary |
|---|---|---|
| 1 | Workspace setup and toolchain baseline | A clean setup, baseline check, and smoke path run successfully. |
| 2 | Application structure, navigation, footer, and componentization | The agreed routes render through the component structure with a manual navigation check. |
| 3 | Styling/CSS foundation | The agreed structural screens satisfy the documented styling checks at the target viewport(s). |
| 4 | First product behavior | The selected user flow satisfies its requirements and acceptance criteria without treating later behavior as present. |

The example is illustrative, not a required architecture or fixed number of
stages.

## Required completion evidence

- Product overview exists and has an explicit MVP boundary.
- Each initial feature has testable requirements or is explicitly deferred.
- Technical context and necessary blueprints exist, with provisional choices labeled.
- Requirements and blueprint review findings are recorded and resolved or accepted.
- Project-specific policy is populated or its unknowns are explicitly assigned.
- A workspace MVP is recommended as the first initiative, with rationale, scope, expected validation, and a linked configurable roadmap or explicit open-replanning decision.
- [`../initialization-record.md`](../initialization-record.md) is `complete` or `blocked`; a complete record links the generated product overview, technical context, policy, review findings, and first-initiative handoff.

## Handoff

Tell the user or orchestrator that initialization is complete and point to [`02-initiative.md`](02-initiative.md). If a required decision remains unresolved, mark initialization `blocked` and record the decision needed instead of starting implementation.
