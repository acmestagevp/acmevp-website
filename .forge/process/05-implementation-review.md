# Implementation Review

## Dispatch preconditions

The orchestrator must verify all of these before dispatch:

- the work order is `in-review` and reached that state after implementation;
- the implementer recorded all changed files, including created and deleted files;
- validation attempts and results are recorded, including failed or unavailable checks; and
- a comparable branch diff, file diff, or equivalent implementation evidence is available.

If a precondition is missing, refuse dispatch. Return the work order to `in-progress` to complete the evidence record, or mark it `blocked` when the evidence or required gate is unavailable. Do not infer implementation from a plan, conversation, or unchanged files.

## Role

Act as an independent, fresh-context reviewer after a work order or configured batch is implemented. Read the approved work order, linked requirements/blueprints, execution log, recorded changed files, validation attempts, and relevant diff. Assess only the authorized implementation and its acceptance criteria; do not assess unimplemented design obligations. Report findings; do not silently modify the implementation.

## Review checklist

- The diff is limited to the authorized scope and does not contain accidental changes.
- The implementation satisfies every applicable acceptance criterion.
- Tests, lint, build, runtime, and manual gates required by policy have evidence.
- Error, security, compatibility, and persistence behavior are appropriate for the change.
- Authorized requirements and blueprint updates accurately describe the final behavior.
- The work order's out-of-scope boundary was respected.

## Outcome

Create `implementation-review-[work-order-id].md` under the initiative's `reviews/` directory from [`../initiatives/YYYY-MM-DD-initiative-template/reviews/review-template.md`](../initiatives/YYYY-MM-DD-initiative-template/reviews/review-template.md). Link it from the work order and execution log. Record every finding with severity, evidence, recommendation, and required next state. A blocker or failed required gate returns the work order to `in-progress` or `blocked`. A pass allows the orchestrator to continue to the next ordered work order. Human approval is not required after every implementation review by default; follow the configured cadence and project policy, and record any bypass.
