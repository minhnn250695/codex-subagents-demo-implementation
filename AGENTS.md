# Reporting app agent workflow

For every implementation checkpoint, delegate analysis, implementation, testing,
and review to specialist agents. The coordinating agent owns the checkpoint and
the final verification. Use the agent roles below when available.

1. **Analysis · frontend designer or explorer.** Use the frontend designer for
   UI behavior, layout, and accessibility. Use an explorer for specific
   repository questions. Ask the analyst to identify acceptance criteria,
   existing code to reuse, and the proposed file scope.
2. **Implementation · worker.** Give each worker explicit file ownership and
   the acceptance criteria. Tell workers they share the workspace and must
   preserve other contributors' changes. Use the Angular developer skill for
   Angular changes and the frontend UI engineering skill for UI changes. Run
   independent work in parallel when file ownership and dependencies allow it.
3. **Testing · frontend tester.** After implementation, run the checks relevant
   to the checkpoint and report the commands, results, and coverage gaps.
   Verify the dashboard flow in a browser once all features are connected.
   Defer adding or rewriting automated tests until the complete dashboard has
   been verified end to end, per the current project agreement.
4. **Review · frontend reviewer.** Use a reviewer separate from the implementer.
   Review the checkpoint diff against its acceptance criteria and report
   actionable findings with file references. For UI changes, check
   accessibility, responsive behavior, and loading, empty, and error states.
   Testing and review can run in parallel after implementation.

If a specialist role is unavailable, assign the same responsibility to a general
agent. If delegation itself is unavailable, report the limitation and identify
which checks were performed directly.

Resolve actionable findings and rerun affected checks before handing back the
checkpoint. Summarize the changed files, the roles used, and what was verified.
Leave changes uncommitted for the user and wait for them to request the next
checkpoint.
