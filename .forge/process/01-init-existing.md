# Initialize an Existing Repository

## Purpose

Use this process when `.forge/` is added to a repository containing source code, configuration, documentation, or an existing product. The goal is to create a trustworthy baseline of what exists before proposing changes.

## Read first

Read [`00-overview.md`](00-overview.md), then inspect the repository without modifying source code. Classify findings as **observed** (directly supported by files or executed commands), **inferred** (reasonable interpretation), or **desired** (requested future behavior).

## Initialization questionnaire

Conduct the same short, conversational intake used for new repositories and
record it in the canonical [`../initialization-record.md`](../initialization-record.md). Ask grouped questions and preserve the distinction between observed facts, inferred choices, desired outcomes, and provisional answers. Offer `I don't know yet` for technical choices; record it as provisional with a decision owner and next action.

Capture, at minimum:

- repository state (`new`, `existing`, or `uncertain`) and inventory evidence;
- primary goal, users/stakeholders, expected first outcome, explicit non-goals, and tool-use intent;
- preferred language, framework, runtime, package/build tool, and target platform;
- working preferences, including speed, learning, safety, documentation depth, and review strictness;
- Git installation/repository state, current/default branch, local branch capability, remote expectation, initiative branch policy, and reduced-capability fallback;
- required human, external/manual, and automated gates;
- review configuration: design review requirement, implementation cadence, per-work-order versus batch grouping, and requested depth;
- known, unknown, or unavailable commands; and
- unresolved decisions with owners and next actions, plus the recommended first initiative.

On resume, update the same record, preserve prior answers, and append a dated
revision entry explaining every changed answer.

## Git and branch capability check

During the repository inventory, establish and record in
[`../initialization-record.md`](../initialization-record.md) whether Git is
installed and initialized, the current and default/base branch, whether a
local initiative branch can be created, and whether a remote is required,
available, or intentionally irrelevant. Record the evidence or check result;
an unknown or unavailable command is not evidence of capability.

For a Git repository with local branch capability, use a dedicated initiative
branch by default, named `forge/YYYY-MM-DD-short-slug`, unless the project
policy records a different naming convention. The user may select `optional`
branching or opt out for an initiative, but the initiative must record the
limitation, base branch, and alternate file/diff evidence. A remote is never
required solely to use local branches.

If Git, repository initialization, or local branch creation is unavailable,
label the workflow **reduced capability**. Preserve file and comparable diff
evidence where possible, state explicitly that branch-level review did not
occur, strongly recommend installing and initializing Git locally where
practical, and record the fallback owner and next action.

## Procedure

1. **Inventory the repository.** Identify languages, frameworks, package managers, entry points, deployment files, tests, generated files, and important directories.
2. **Determine runnable state.** Locate documented commands, install dependencies when permitted, run the safest available checks, and record failures verbatim. Do not assume a failing or missing command is a green gate.
3. **Recover product intent.** Read existing documentation and ask only the questions needed to distinguish intended behavior from current behavior.
4. **Draft product overview.** Populate [`../requirements/product-overview.md`](../requirements/product-overview.md), separating current state, desired outcomes, stakeholders, constraints, and known gaps.
5. **Extract feature requirements.** Create or update files under [`../requirements/features/`](../requirements/features/). Use stable IDs and preserve observed behavior when it is part of the current contract.
6. **Review requirements.** Set the requirements artifact to `in-review` and route a fresh-context requirements reviewer using [`00-overview.md`](00-overview.md). Record `requirements-review.md` (or the configured equivalent), identify ambiguity, unsupported claims, conflicts, and missing acceptance criteria, and resolve blockers before blueprinting. Do not treat this as a design review.
7. **Map the technical system.** Populate [`../blueprints/technical-context.md`](../blueprints/technical-context.md) from repository evidence. Add container, component, and feature blueprints with links to real paths or symbols where useful.
8. **Review blueprints.** Spawn a fresh-context reviewer to compare documented architecture with repository evidence and the requirements. Record discrepancies rather than silently correcting them.
9. **Configure policy.** Replace the `TODO` values in [`00-overview.md`](00-overview.md) with verified commands, branch expectations, manual gates, tools, and parallelism rules.
10. **Finalize initialization.** If the repository is broken, prioritize restoring a runnable baseline. Otherwise recommend the smallest valuable change that exercises the documented workflow. Set the record to `complete` only with linked completion evidence, including the branch capability decision; if the repository cannot be safely understood or validated, set it to `blocked` with the blocking reason, decision needed, owner, and next action.

## Required completion evidence

- Repository inventory and runnable-state evidence are recorded.
- Observed, inferred, and desired behavior are distinguishable in durable documents.
- Requirements and blueprints have independent review findings.
- Project policy contains verified commands where available and named owners for unknowns.
- The first initiative addresses the highest-value baseline gap or delivers a small vertical slice.
- [`../initialization-record.md`](../initialization-record.md) is `complete` or `blocked`; a complete record links the generated product overview, technical context, policy, review findings, and first-initiative handoff.

## Handoff

Point the orchestrator to [`02-initiative.md`](02-initiative.md). If the repository cannot be safely understood or validated, mark initialization `blocked` and recommend a discovery or recovery initiative rather than guessing.
