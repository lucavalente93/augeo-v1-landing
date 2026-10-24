# AUGEO - Project Instructions

## Sources and reading order

Project ID: `augeo-website`. Start here and read the current queue in [BACKLOG.md](docs/BACKLOG.md). Load other sources only for the task; historical deliveries are not default context. Use `augeo-context` to resolve agency sources and revisions.

| Source | Sole responsibility / when to read |
| --- | --- |
| Resolved global governance | Authority, creative approval, publication permission and Impeccable activation. |
| Resolved agency, business and brand sources | Agency identity, positioning, operations and brand commitments. |
| [AUGEO.md](docs/AUGEO.md) | Website goal and priority. |
| [Specification](docs/02-WEBSITE_SPEC.md) | Landing requirements, Process/form, assets and technical baseline. |
| [HERO.md](docs/HERO.md) | Hero composition, decisions, evaluations and block plan. |
| [WORKFLOW.md](docs/WORKFLOW.md) | Checks, evidence, naming and applicable design procedures. |
| [ORCHESTRATION.md](docs/ORCHESTRATION.md) | Paperclip/bridge execution, permissions and recovery; read for orchestrated work. |
| [PRODUCT.md](docs/PRODUCT.md) | Impeccable schema entry point to the sources above; read when the skill needs it. |
| [History](docs/archive/EXECUTION_HISTORY.md) | Dated evidence; consult the relevant entry only. |
| [Historical audit](docs/archive/HERO_AUDIT_2026-10-07.md) | Original hero diagnosis and moodboard references. |

Code demonstrates implementation, not approval. Resolve conflicts against current decisions and evidence; historical proposals are not current requirements. Keep each principle in its responsible source, linking only where navigation needs it.

## Resuming and continuity

- Before producing or updating project documentation, plans, handoffs or delivery artifacts (including Antigravity's internal session artifacts), load [augeo-project-output](.agents/skills/augeo-project-output/SKILL.md). It is the shared project-local output procedure; no manual invocation or global installation is required in each session.
- Check Git and relevant files before acting; preserve existing changes and reconcile interruptions with actual state.
- The current request bounds execution. A new session or documentation update does not authorize pending work or the next hero block.
- After a material delivery, update the backlog's latest summary/next action and append durable evidence to history. Update the responsible source when a decision changes; record user corrections there. Report links in the final response. Questions without context changes need no artificial records.
- In Plan Mode, propose edits without writing. Identify attached references by label and exact local path in the plan, without adding those paths to the deliverable unless requested.

## Execution and local environment

- Use `agent-browser` as the default for browser automation, local interaction checks and screenshots, in preference to Playwright. Antigravity CLI uses the globally installed CLI and its global `agent-browser` skill. The procedure and legacy-suite policy are in [WORKFLOW](docs/WORKFLOW.md#bun-and-validation).
- For React/TypeScript implementation or review, use `augeo-react-frontend`. For design procedure and verification, follow the relevant WORKFLOW section.
- Prefer `gh` for equivalent GitHub operations; use Git for local operations and pushes. Permission comes from global governance. Commit subjects/bodies use English Conventional Commits (`type(scope): description`); group implementation with its tests.
- [Four-layer stack](docs/refs/stack-referencia-4-camadas.md) and [Architecture Reference](docs/architecture-reference.md) are conceptual inputs, not adopted tools or requirements. Adopted integration is in ORCHESTRATION.
- The personal guide and `.codex/` stay local and Git-ignored. Do not publish their contents or require machine-specific paths in another executor.
- Verify required skills, CLIs and connections in the current executor; report missing capabilities rather than inferring availability from history.
