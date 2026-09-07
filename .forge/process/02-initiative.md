# Plan and Design an Initiative

## Purpose

This process turns a user request or product goal into one bounded initiative and an ordered set of executable work orders. It is the planning/design phase; implementation begins only after [`03-design-review.md`](03-design-review.md) passes and the required human design approval is recorded.

## Define the initiative boundary

An initiative is a coherent sprint/branch of work with one observable outcome, a small set of related work orders, and a finishable review and closeout boundary. It is a planning boundary, not a duration, staffing, or story-point estimate: an initiative may take longer than one day when its outcome remains coherent, and it need not constitute a complete product release. An initiative may also represent an A/B experiment, a plausibility branch, a workspace foundation, or one staged step toward an MVP. Staged initiatives must link each step to the roadmap or parent product goal while remaining independently reviewable.

Treat the following as advisory signals to split an initiative into smaller initiatives before design review:

- it combines multiple unrelated observable outcomes;
- it has no single validation boundary at which the stated outcome can be assessed;
- it requires several independent product decisions that could change the direction of separate work;
- it combines structure or componentization, styling, and unrelated product behavior without a clear shared outcome; or
- review would require treating future work, unapproved scope, or a later stage as if it were already present.

When a split is useful, preserve traceability by recording the roadmap or parent product goal, the dependency between the resulting initiatives, and each initiative's distinct outcome and validation boundary. Do not split solely because an initiative is large in duration or contains more than a fixed number of work orders. Keep a reasonable larger initiative intact when it has one coherent outcome and one reviewable validation boundary.

## Create the initiative

1. Read [`00-overview.md`](00-overview.md), the relevant requirements and blueprints, and the initiative template at [`../initiatives/YYYY-MM-DD-initiative-template/`](../initiatives/YYYY-MM-DD-initiative-template/).
2. Create a dated, short-slug directory under [`../initiatives/`](../initiatives/). Copy the template contents, rename the copied plan to `[initiative-slug]-v1.md`, rename `execution-log-template.md` to `execution-log.md`, and copy/rename each work-order and review template when creating its generated artifact. Replace the initiative-slug, title, work-order, and other placeholders in the copied documents. Do not rename the source template directory.
   The resulting layout is:

   ```text
   .forge/initiatives/YYYY-MM-DD-short-slug/
     short-slug-v1.md
     execution-log.md
     reviews/
     work-orders/
   ```

   Keep the plural `reviews/` directory. Name review artifacts `design-review.md`,
   `implementation-review-[work-order-id].md`, or `closeout-review.md`, as
   applicable, and keep each review inside this initiative's `reviews/` directory.
   Update copied links so they target the generated `[initiative-slug]-v1.md`,
   generated work orders, and these review filenames rather than the source
   template names.
3. Resolve the branch decision before dispatching any implementation work. Read the
   branch policy in the initialization record and project policy, then:
   - when Git and local branches are available and policy is `required` or
     `optional`, create the dedicated branch by default using
     `forge/YYYY-MM-DD-short-slug` (or the recorded project override), based on
     the recorded current/default branch;
   - when the user opts out or policy permits no branch, record the opt-out,
     base branch, and the comparable file/diff evidence that will replace
     branch evidence;
   - when Git or branch capability is unavailable, mark the initiative as
     reduced capability, record the no-branch review notice and Git
     recommendation, and use the named fallback evidence.

   Record the base branch, initiative branch (or `none`), policy, opt-out, and
   evidence in the initiative metadata. A remote is not required unless the
   recorded project policy says it is.

   If a branch is required and creation fails, set the initiative to `blocked`,
   record the failed operation and evidence, name the owner and next action, and
   do not dispatch implementation. If policy is optional, log the failure and
   continue only with an explicitly named reduced-capability fallback; never
   imply that branch-level review occurred.
4. Start the execution log before any agent is dispatched, including the branch
   decision and any failure or fallback evidence.

## Planning loop

The orchestrator may dispatch one or more architect agents to collaborate with the user. The planner must:

- define the outcome, scope, non-goals, constraints, risks, and success measures;
- link the relevant requirements and blueprints;
- identify required durable-document updates;
- state assumptions and unresolved decisions;
- describe the intended technical approach without prescribing every line of code; and
- update the initiative plan version when material design changes occur.

## Decompose into work orders

Create work orders from the approved design. Each work order must have one clear owner and outcome, explicit in/out-of-scope boundaries, verbatim applicable requirements, blueprint references, implementation guidance, files/systems likely to change, validation steps, and documentation obligations.

Work orders should be independently reviewable and ordered by dependency. Sequential execution is the default. Parallel work requires non-overlapping ownership or a documented merge strategy in the initiative plan.

## Design readiness

Before requesting review, confirm that the plan has no unresolved blocker, every requirement has a technical path, every work order has validation, and project-specific gates are identified. Set the initiative to `in-review` and dispatch [`03-design-review.md`](03-design-review.md). This is a design review of the plan and work orders, not an implementation review; requirements concerns that are not implementation defects route to requirements review.

## Rework and approval

If design review fails, record the findings, return the initiative to `draft` or `in-progress`, and revise the plan/work orders. Do not implement around a failed design gate. When the review passes, obtain the required human approval and set the initiative to `approved` before dispatching implementation.
