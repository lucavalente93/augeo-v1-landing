---
name: augeo-project-output
description: Organize documentation, implementation plans, handoffs and delivery artifacts for the augeo-website project, including Antigravity session artifacts. Use when producing or updating these outputs; ordinary answers do not require a new document.
---

# AUGEO project output

Keep durable project knowledge in its responsible source and session working material in the session. This skill is project-local, shared by Antigravity and Codex; it does not configure other projects or grant publication authority.

## Choose a destination before writing

Read the repository-root AGENTS source map and current BACKLOG. Reuse their relevant sources instead of loading the complete archive. Resolve paths against this checkout, not a personal home directory.

- Put current decisions and requirements in the responsible canonical source from AGENTS. Link to that source rather than repeating its rules in a report.
- BACKLOG contains current state, one latest-delivery summary and the next action/queue. Replace the previous summary; preserve new facts in execution history before removing obsolete summaries. Do not accumulate multiple “Latest delivery” blocks or contradictory next actions.
- Append dated execution evidence to history: what happened, actual checks, limits and the relevant artifacts. Past execution is not proof of current verification or approval.
- `docs/reviews/YYYY-MM-DD-<topic>/` is for a concrete review/evidence bundle, such as comparable screenshots with a short README. A routine delivery does not need a new review report.
- Put superseded proposals and substantial historical narratives in `docs/archive/YYYY-MM-DD-<topic>.md` only when their detail is useful beyond the execution-history entry. Clearly distinguish proposal, user decision, implementation and verification. Do not keep an active second source for the same subject.

Before creating another Markdown file, identify why an existing canonical source or session artifact cannot serve the task. A skill's requested deliverable is not automatically a requirement for a new repository file. Preserve genuinely required native/skill artifacts, including their expected names and schemas; integrate them by reference instead of breaking their consumers.

## Naming and content

Keep established canonical filenames and registered source IDs. Use lowercase English kebab-case for new free-form topic names, with the date only for evidence/archive records. Do not apply Obsidian's derived `Website - Subject` naming to canonical files; derived views are regenerated, not edited independently.

Active technical guidance is English. Public copy, actual UI labels and user-facing replies remain Portuguese unless requested otherwise. Preserve original language and factual meaning in historical evidence. Avoid machine-specific paths in reusable instructions; original evidence paths may remain explicitly historical or temporary.

## Antigravity internal artifacts

Apply the same contract to new session artifacts while working in this project; do not rewrite old conversations or modify global runtime/skill files.

- Reuse one current plan per work item, named `implementation-plan.md` when freely selectable. Update it as the task evolves instead of creating `plan-<variation>.md` siblings. A genuinely separate work item can have its own plan.
- Use `task.md` only when a persistent checklist is useful, and `walkthrough.md` for the final session report. If the tool requires a native filename, retain that filename and apply the content contract.
- Plan content: goal/scope, settled decisions and open choices, intended changes, verification plan. Mark pending choices instead of implying approval.
- Walkthrough content: result, checks actually executed, limits/pending work, links to the canonical updates and evidence. Do not paste complete requirements or make the walkthrough a competing project source.
- Write internal technical plans/checklists/walkthroughs in English; Portuguese belongs to the final user-facing reply and quoted UI copy. A request for a Portuguese reply does not change the language of those technical artifacts unless the user explicitly requests that too.
- Keep these artifacts in the runtime-owned session area through the available artifact mechanism. Do not invent a home path, copy the session directory into Git or create a repository report just to mirror the internal artifact.

An existing conversation may need to reload this skill; a fresh checkout includes it without a global installation. Discovery is not proof of compliance: distinguish seeing the skill, reading it and observing its output on a real task.

## Close the delivery

Give a concise user-facing result, actual verification and material pending work. Link only the useful canonical source or review artifact; do not automatically produce a plan, report and handoff for the same result. Follow the user's requested output, including the preference against promotional/affiliate footers.

For consolidation, first preserve the content and status of the records, update incoming/relative links and anchors, then remove superseded files. Keep original evidence and approval boundaries. Report removals/relocations and recoverability. Check `git diff --check`, local Markdown links/anchors and active references; for canonical-source changes, refresh and verify derived views through the project's existing context procedure. A documentation-only change does not require application builds or browser suites.
