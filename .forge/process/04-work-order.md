# Execute a Work Order

## Role and scope

Act as the implementer for one assigned work order. Read [`00-overview.md`](00-overview.md), the initiative plan, the work order, linked requirements, blueprints, and prior execution-log entries before changing code. Do not expand scope without updating the work order and obtaining the required approval.

## Procedure

1. Confirm the work order is approved/ready, its dependencies are complete, and the working branch is correct.
2. Inspect the current code and verify the work-order assumptions. Record material discrepancies before implementation.
3. Implement the smallest coherent change within scope.
4. Update requirements or blueprints only when explicitly authorized by the work order. Keep documentation aligned with the resulting behavior.
5. Run the commands and manual checks required by the work order and project policy. Preserve useful evidence, including failures.
6. Record changed files (including created/deleted files), validation attempts and results, comparable diff or equivalent evidence, and follow-up in the work order and execution log. Set the work order to `in-review` only after implementation and this evidence record are complete.
7. Apply the implementation-review cadence configured in the initialization record. Before dispatching [`05-implementation-review.md`](05-implementation-review.md), verify every precondition in [`00-overview.md`](00-overview.md); if one is missing, return the work order to `in-progress` or mark it `blocked` and do not dispatch the reviewer. Do not mark it complete until the configured review and gates pass, and link the review result from the work order and execution log.

## Blocking conditions

Stop and mark the work order `blocked` when requirements are contradictory, a dependency is missing, a required command cannot run, a manual gate is unavailable, or safe implementation would exceed scope. Record the exact issue and proposed next action.
