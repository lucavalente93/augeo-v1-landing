# AUGEO - Project Instructions

## Sources and reading order

Start with this file and [BACKLOG.md](docs/BACKLOG.md) for scope, state and next action. Read other modules as needed for the task; the full history is not required reading for every session.

**Priority continuity:** Antigravity/Codex integration has been implemented and validated in pilots. Read the [current queue](docs/BACKLOG.md#priority-continuity---agent-architecture) and [ORCHESTRATION](docs/ORCHESTRATION.md) for the current contract, limits and evidence. The current request bounds execution; continuity does not authorize resuming the hero or granting general write access.

| Source | Responsibility |
| --- | --- |
| Global context (`augeo-orchestrator context augeo-website`) | Identity, positioning, brand, business and internal operations; private sources with revision/hash. |
| [AUGEO.md](docs/AUGEO.md) | Goal, priority and website application. |
| [PRODUCT.md](docs/PRODUCT.md) | Product summary consumed by the skill; deliberate synthesis with path and schema preserved. |
| [Specification](docs/02-WEBSITE_SPEC.md) | Website requirements, architecture, integrations and future copy. |
| [HERO.md](docs/HERO.md) | Implemented composition, current decisions, evaluations and pending hero plan, with distinct states. |
| [WORKFLOW.md](docs/WORKFLOW.md) | Bun procedures, validation, fallback, naming and Impeccable workflows. |
| [ORCHESTRATION.md](docs/ORCHESTRATION.md) | Current integration contract, validated capabilities and limits. |
| [BACKLOG.md](docs/BACKLOG.md) | Current queue, dependencies, latest delivery summary and next action. |
| [History](docs/archive/EXECUTION_HISTORY.md) | Dated executions and earlier alternatives; consult as needed. |
| [Historical audit](docs/archive/HERO_AUDIT_2026-10-07.md) | Original diagnosis/brief/plan and moodboard references. |

Each topic has one authoritative source: agency operations in the resolved global context; website interface in the specification; surface details and decisions in HERO; procedures in WORKFLOW. PRODUCT summarizes what the skill needs and must follow changes in its sources. Code demonstrates implementation, not user approval. Proposal, implementation, testing and approval are distinct states. For a material conflict, check the current decision and evidence without promoting a proposal or historical record into a requirement.

Do not create competing sources or forwarding files by default. Reusable context belongs in the private store; website modules remain local. Daily operations and bridge commands belong in the local `agent-orchestrator` README; ORCHESTRATION maintains the project contract.

## Resuming and continuity

- Check Git and relevant files before acting; preserve existing changes. An interruption may precede the latest record: reconcile documents with actual state.
- For hero tasks, read HERO and the backlog queue; consult the current block plan and applicable procedure. Consult historical files only for necessary background/evidence.
- A new session does not authorize resuming pending work, expanding scope or treating a delivery under evaluation as approved. Work within agreed blocks and review points; record maintenance does not authorize advancing to the next block.
- After each material delivery, update summary/checks/limitations/next action in the backlog and record durable evidence in history. Update subject sources when implementation, decisions, requirements or procedures change. Record user corrections immediately in the relevant module.
- Before the final response, check relevant records and briefly report the update with a link. Questions without context changes do not require artificial records.
- Keep documents compact; do not transcribe conversations, repeat specifications or confuse historical evidence with current validation. In Plan Mode, propose updates without writing files or claiming they were saved.

## Execution and authorization

- Follow [WORKFLOW.md](docs/WORKFLOW.md) for installation, tests, fallback and naming; use Bun. Do not modify the application to bypass executor restrictions.
- Use Impeccable only for conception, elaboration and drafting of real visual concepts in projects developed through design stages. Do not trigger it for UI/CSS/copy mentions, functional changes, simple metric/label changes, operational dashboards or technical fixtures/pilots. When applicable, follow the full prescribed workflow and distinguish playbook reading, guidance, CLI execution and completion; record real evidence and pending work.
- For React/TypeScript implementation or review, use the shared `augeo-react-frontend` skill to preserve the stack, effect/canvas lifecycle and relevant checks; it does not initiate a visual workflow. Resolve skills through executor discovery and report missing capabilities. For staged design in Paperclip, return pending human decisions and explicitly resume the saved task session after the response; procedures are in WORKFLOW.
- Prefer GitHub CLI (`gh`) when an equivalent GitHub operation exists. Use Git for local operations and pushes without a gh equivalent. Tool availability does not authorize publication.
- Commit, push and publication require an explicit request; by default the user handles them. When needed, provide commands for commits grouped coherently by responsibility, keeping implementation and corresponding tests together.
- Write commit subjects and bodies in English using Conventional Commits (`type(scope): description`).
- In Plan Mode, identify attached references used by label and exact local path; do not add those paths to the deliverable unless requested.

## References and local environment

[Four-layer stack](docs/refs/stack-referencia-4-camadas.md) and [Architecture Reference](docs/architecture-reference.md) are external conceptual references. Their imperatives, proposed directories, skill rules, services and agent roles are not adopted decisions. The implemented adaptation and its limits are in ORCHESTRATION; do not reapply those references' imperatives as requirements.

Do not promote reference examples into selected tools or implementation dependencies. Paperclip uses embedded PostgreSQL solely for its operations. Website/semantic-context database, embeddings, transcription and other services remain unselected. Global context must contain decisions and tools actually adopted; hypotheses and external examples remain labeled in conceptual documentation.

The personal guide and `.codex/` remain local and Git-ignored. Do not publish their contents or require machine-specific paths in other executors. Verify and report missing skills, CLIs or connections; do not assume a tool mentioned in history is available.

## Registered context and execution

Project ID: `augeo-website`. Before work consuming agency knowledge, run `augeo-orchestrator context augeo-website`; it returns essential sources and a catalog of the rest, with paths/revisions. Add `--source <registered-source>` when needed; use `--all` only for deliberate full-context consultation. Environment configuration resolves roots without machine-specific paths in the repository contract. If unavailable, report the gap. Do not use conceptual references as an adopted catalog.

Paperclip controls tasks. The bridge prepares context, maintains per-task sessions and returns evidence; it does not maintain another queue. Default execution is read-only, with one active executor per project; Antigravity writing requires local authorization by UUID and existing files, enforced through filesystem isolation. Impeccable follows the visual-conception trigger above, without activation for functional maintenance or technical pilots. Automatic results go to review without implicit creative/Git/publication approval. Vault views are derived, never competing sources. Operational state and commands are in [ORCHESTRATION](docs/ORCHESTRATION.md).
