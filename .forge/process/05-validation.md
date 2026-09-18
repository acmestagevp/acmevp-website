# Validation

## Purpose

Validation verifies that a work order was **completed as reported and did not go
rogue**: the recorded evidence is real and matches the diff, the change stays
inside the authorized scope, the acceptance criteria are met, and the
durable-document impact classification is accurate. Validation does not by
default certify user-facing success. Projects that require manual verification
or compilation (C++, game-engine codebases, device targets) configure **user
gates** at validation; the gating procedure and review intention are sorted out
per project during forge initialization and recorded in the project manifest.

## Dispatch preconditions

The orchestrator must verify all of these before dispatch:

- the work order is `in-review` and reached that state after implementation;
- the implementer recorded all changed files, including created and deleted files;
- validation attempts and results are recorded, including failed or unavailable checks; and
- a comparable branch diff, file diff, or equivalent implementation evidence is available.

If a precondition is missing, refuse dispatch. Return the work order to
`in-progress` to complete the evidence record, or mark it `blocked` when the
evidence or required gate is unavailable. Do not infer implementation from a
plan, conversation, or unchanged files.

## Dispatch checklist

Before dispatching a validation, the orchestrator must confirm:

- a separate fresh-context validation session is confirmed for this validation;
- the role and work-order/validation identifier are recorded in the execution log with the session/agent identifier;
- prior work from the same initiative is supplied as artifacts, not assumed conversational memory; and
- any exception to session separation is explicitly approved by the user and logged with reduced-confidence evidence.

## Role

Act as an independent, fresh-context validator in a separate validation session
after a work order is implemented. Read the approved work order, linked
requirements/blueprints, execution log, recorded changed files, validation
attempts, and relevant diff. Assess only the authorized implementation and its
acceptance criteria; do not assess unimplemented design obligations. Report
findings; do not silently modify the implementation.

## Validation checklist

- The evidence is real and matches the recorded diff: changed files, validation attempts, and diff or equivalent evidence are consistent with the repository state.
- The diff is limited to the authorized scope and does not contain accidental changes.
- The implementation satisfies every applicable acceptance criterion.
- Tests, lint, build, runtime, and manual gates required by policy have evidence.
- Error, security, compatibility, and persistence behavior are appropriate for the change.
- The work order's durable-document impact classification is correct against the actual diff: `update` entries are accurately applied, `verify unchanged` entries match the resulting behavior, and `not applicable` entries carry the required rationale and evidence.
- Authorized requirements and blueprint updates accurately describe the final behavior. The work order is never rejected merely because it updates a requirements or blueprint document; correction is required only when the classification or update is inaccurate.
- The work order's out-of-scope boundary was respected.

## Outcome

Create `validation-[work-order-id].md` under the initiative's `validations/`
directory from [`../initiatives/YYYY-MM-DD-initiative-template/validations/validation-template.md`](../initiatives/YYYY-MM-DD-initiative-template/validations/validation-template.md).
Link it from the work order and execution log. Record every finding with
severity, evidence, recommendation, and required next state.

- **Pass:** the orchestrator sets the work order to `complete` and proceeds to
  the next ordered work order. A `complete` work order was completed as
  reported; completion comes from a passed validation, not from the implementer.
- **Fail:** the orchestrator creates a fix work order (below) and loops back to
  `execute`. A blocker or failed required gate also returns the work order to
  `in-progress` or `blocked` when no fix work order applies.
- **Blocked:** record the blocker, apply the `blocked` status, and stop until it
  is resolved.

A finding that reveals a design deficiency rather than an implementation defect
routes to design review (back to `review` or `plan`), not to a fix work order.
Human approval is not required after every validation by default; follow the
configured validation cadence and project policy, and record any bypass.

## Fix work orders

When a validation fails, the orchestrator creates a **fix work order** rather
than reopening the original:

- **Naming:** letter-suffixed revision of the original — `WO-001a-short-slug.md`,
  then `WO-001b-short-slug.md`, and so on.
- **Content:** links the original work order and the failing validation
  (`validation-WO-001.md`), carries the validator's findings and required fixes,
  and states the fix scope within the original's boundaries.
- **Dispatch:** a **new** implementer session — the fresh-session invariant
  applies to fixes — followed by a fresh validation session
  (`validation-WO-001a.md`).
- **Completion:** the original work order is set to `complete` only when one of
  its fix work orders passes validation, with the fix chain linked as evidence.

## Validation cadence

The default is the **per-work-order loop**: the orchestrator dispatches a fresh
implementer session, receives completion, dispatches a fresh validation session,
and receives the result — repeated for each work order in dependency order (see
the execution loop in [`00-overview.md`](00-overview.md)). The initiative's
phase alternates `execute` and `validate` with each dispatch.

**Consolidated validation is opt-in only.** Validation after all work orders are
implemented happens solely at the user's behest, when the user judges the work
orders discrete enough that cascade failure is low risk and explicitly requests
it. The agent must warn the user when it has high confidence that cascade
failure is probable without per-work-order validation. Even when consolidated,
validations run per work order from separate fresh validation sessions. Even in
rapid mode, validation occurs per work order from a different validation agent;
rapid mode changes the draft phase, not the validation loop.
