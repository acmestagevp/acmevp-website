# Validation: WO-001 — Short Title

## Validation metadata

- **Review type:** `validation`
- **Status:** `in-review`
- **Validator:** `TODO`
- **Validator session/agent ID:** `TODO` <!-- fresh-context session per the dispatch invariants in [`../../../process/00-overview.md`](../../../process/00-overview.md) -->
- **Session exception:** `none` | `approved and logged` — evidence: `TODO`
- **Date:** `TODO`
- **Initiative:** [`../initiative-slug-v1.md`](../initiative-slug-v1.md) <!-- replace initiative-slug when copying -->
- **Validation file:** `validation-WO-001.md` <!-- replace WO-001 with the validated work order's ID; fix validations append the letter suffix, e.g. `validation-WO-001a.md` -->
- **Validated work order:** [`../work-orders/WO-001-short-title.md`](../work-orders/WO-001-short-title.md) <!-- replace placeholders when copying -->
- **Compared commit/diff:** `TODO`
- **Fix chain:** `none` | `TODO` <!-- for fix validations only: link the original work order, the failing validation, and the fix work order this validation covers -->

Validation files belong in this initiative's `validations/` directory, named
`validation-[work-order-id].md`. Requirements and design reviews are separate
artifacts and live in `reviews/`; use
[`../reviews/review-template.md`](../reviews/review-template.md) for those.

## Authorized scope

`TODO: State the authorized work-order scope and the acceptance criteria assessed. Explicitly exclude unimplemented design obligations and future scope. A design deficiency routes to design review rather than to a fix work order.`

## Validation checklist

- The evidence is real and matches the recorded diff: changed files, validation attempts, and diff or equivalent evidence are consistent with the repository state.
- The diff is limited to the authorized scope and contains no accidental changes.
- The implementation satisfies every applicable acceptance criterion.
- Tests, lint, build, runtime, and manual gates required by policy have evidence.
- Error, security, compatibility, and persistence behavior are appropriate for the change.
- The work order's durable-document impact classification is correct against the actual diff: `update` entries are accurately applied, `verify unchanged` entries match the resulting behavior, and `not applicable` entries carry the required rationale and evidence.
- The work order's out-of-scope boundary was respected.

## Findings

### Blockers

Each blocker must cite the evidence that makes it blocking; do not infer implementation from a plan, conversation, or unchanged files.

- `None or TODO: finding — Severity: blocker; Evidence: TODO; Recommendation: TODO; Required next state: in-progress | blocked`

### Warnings

- `None or TODO: finding — Severity: warning; Evidence: TODO; Recommendation: TODO; Required next state: TODO`

### Notes

- `None or TODO: finding — Severity: note; Evidence: TODO; Recommendation: TODO; Required next state: TODO`

## Decision

- **Outcome:** `pass | pass-with-warnings | fail | blocked`
- **Required next state:** `TODO` <!-- pass → the orchestrator sets the work order to `complete`; fail → a fix work order is created and the loop returns to `execute`; blocked → the initiative applies the `blocked` status -->
- **Fix work order required:** `no` | `yes: WO-001a-short-slug` <!-- letter-suffixed revision of the original per [`../../../process/05-validation.md`](../../../process/05-validation.md) -->
