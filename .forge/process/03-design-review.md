# Design Review

## Dispatch conditions

Do not dispatch this review during the open-ended planning conversation. The
initiative must have completed its exploration/convergence loop, passed the
`draft -> plan` exit gate, moved to `plan` with its work orders created, and
reached the `review` phase: the user or authorized orchestrator must have
explicitly requested formal design preparation or agreed that the plan is ready
for review. The initiative plan must identify one outcome, scope boundaries, a
proposed approach, validation boundary, and the work orders created from that
agreed design. Dispatch this review to a separate fresh-context session per the
dispatch invariants in [`00-overview.md`](00-overview.md).

## Role

Act as a fresh-context reviewer. Read the initiative, all generated work
orders, relevant requirements, blueprints, and [`00-overview.md`](00-overview.md).
Do not implement or silently rewrite the design under review. You are a
consistency and risk gate over the converged plan, not a scope author: test the
selected work orders against the converged initiative outcome, explicit user
decisions, and durable project direction. Do not reconstruct discarded
exploratory possibilities as omissions, and do not invent requirements the
work-order plan does not carry forward. If the initiative is still exploratory,
lacks generated work orders, or has no explicit readiness signal, return it to
planning rather than treating the missing artifacts as review findings.

## Authority: block versus warn

The reviewer may block the initiative only for:

- contradiction with the converged initiative outcome or an explicit user decision;
- missing acceptance coverage for an obligation the converged plan actually commits to;
- unsafe or impossible dependency or order assumptions;
- material conflict with the durable project direction;
- a missing required documentation impact classification;
- missing validation or a required project gate; or
- a policy violation that cannot be accepted by the authorized approver.

The reviewer may warn, but must not block, for:

- a reasonable reduction from exploratory possibilities to executable scope;
- a work order that updates a durable document as authorized; or
- a sub-blueprint implementation change whose parent blueprint remains accurate
  and whose `not applicable` rationale is sound.

## Review questions

1. Does the initiative solve a real product or repository need documented in requirements?
2. Is the converged scope coherent, bounded, and free of unrelated work?
3. Does every obligation the converged plan commits to have a plausible blueprint and work-order path with acceptance coverage?
4. Are work orders independently executable, ordered, and free of hidden or impossible dependencies?
5. Does every work order carry a correct durable-document impact classification, and are authorized documentation updates explicitly owned?
6. Are automated, manual, external, and human approval gates identified?
7. Are risks, rollback/recovery, security, compatibility, and failure behavior addressed where relevant?
8. Does the proposed parallelism comply with project policy and the dispatch invariants in [`00-overview.md`](00-overview.md)?

## Output

Create a review using [`../initiatives/YYYY-MM-DD-initiative-template/reviews/review-template.md`](../initiatives/YYYY-MM-DD-initiative-template/reviews/review-template.md). Classify findings as blockers, warnings, or notes and include evidence and required action. Every blocker must cite the converged plan, requirement, policy rule, or evidence that makes it blocking.

The outcome is `pass` only when no blocker remains. Warnings may pass only when
the initiative owner and required human approver explicitly accept them. A
failed review returns the initiative to `plan` and must be logged; when the
direction itself is unsettled, it returns to `draft`. A review that finds the
initiative premature returns it to `draft`; it does not authorize work-order
execution. A passing review, together with the recorded human design approval,
is the `review -> execute` gate per [`00-overview.md`](00-overview.md).
