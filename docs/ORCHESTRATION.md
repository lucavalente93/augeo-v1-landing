# Antigravity/Codex CLI coordination and shared context

Updated on 2026-10-30. Direct CLI workflow and shared context contract. Current project state and queue: [backlog](BACKLOG.md#current-state). Historical orchestration pilots: [history](archive/EXECUTION_HISTORY.md#escrita-delimitada-navegador-e-revisão-vinculada--2026-10-17).

## Architecture and responsibilities

**Active workflow (Luca's decision, 2026-10-30):** Paperclip (`127.0.0.1:3100`), its task-runner bridge and `AUG-*` ticket state tracking are **not used**. Luca coordinates all work directly through separate **Antigravity (`agy`)** and **Codex (`codex`)** CLI sessions operating on the local Git repository (`main` and `dev`).

| Component | Active responsibility |
| --- | --- |
| Luca | Direction, task assignment, creative approval and commit/push authorization (defined in global governance). |
| Antigravity (`agy`) | Frontend/visual execution, browser verification (`agent-browser`), design polish and documentation. |
| Codex (`codex`) | Structural engineering, refactors and technical review when invoked by Luca in its own CLI session. |
| `augeo-orchestrator` (`context` / `views`) | Local CLI utility used strictly to resolve shared agency Markdown (`augeo-orchestrator context augeo-website`) and synchronize derived Obsidian views (`augeo-orchestrator views augeo-website`). |
| Private store and Obsidian | Canonical agency Markdown (`/home/luca/augeo/global-context-store/`); vault, Graph View and Canvas for human navigation. |
| Website repository | Product code, canonical specifications (`docs/`), project-local output skill (`augeo-project-output`) and backlog queue (`docs/BACKLOG.md`). |

One CLI agent acts at a time per user request. Always check `git status`, current branch and recent commits before editing so work across separate CLI sessions reconciles cleanly without overwriting uncommitted changes.

## Shared context

Source-resolution commands and derived-view maintenance belong in `augeo-context`; module ownership is mapped in [AGENTS](../AGENTS.md). Running `augeo-orchestrator context augeo-website` returns governance, the global website record, `AGENTS.md`, `docs/BACKLOG.md`, canonical paths, SHA256 revisions and the catalog of additional sources (`docs/02-WEBSITE_SPEC.md`, `docs/HERO.md`, `docs/WORKFLOW.md`, `docs/PRODUCT.md`, `docs/AUGEO.md`).

Obsidian need not be open. Graph View reflects explicit Markdown links; there are no vector embeddings, external databases or background daemons required for project work.

### Current work and historical knowledge

[BACKLOG.md](BACKLOG.md#queue-by-workstream) is the single canonical queue and state summary. Read `docs/02-WEBSITE_SPEC.md` for page-wide requirements and visual rules, `docs/HERO.md` for Hero composition, and `docs/WORKFLOW.md` for validation and design-skill procedures.

Historical learning, rejected concepts and dated verification live in `docs/archive/` and `docs/reviews/`, linked from canonical sources and navigable through derived Obsidian views. Consult them on demand rather than injecting them as current requirements.

### Documentation language and vault names

Active technical sources are written in English; public Portuguese copy, UI labels, user-facing replies and historical Portuguese records retain their original language. Global notes use `AUGEO - Agency`, `AUGEO - Business` and `AUGEO - Brand`; derived website notes in Obsidian use `Website - Subject`.

After editing any of the 8 registered project sources (`AGENTS.md`, `docs/AUGEO.md`, `docs/PRODUCT.md`, `docs/02-WEBSITE_SPEC.md`, `docs/HERO.md`, `docs/WORKFLOW.md`, `docs/BACKLOG.md`, `docs/ORCHESTRATION.md`) or global sources, refresh and verify derived Obsidian views:

```bash
augeo-orchestrator views augeo-website
augeo-orchestrator views-check augeo-website
```

## Execution contract

### Shared skills

- **Project-local output procedure:** [augeo-project-output](../.agents/skills/augeo-project-output/SKILL.md) lives in the repository and governs documentation updates, consolidation and internal session artifacts across both CLIs.
- **Shared global skills:** `augeo-context`, `augeo-react-frontend`, `agent-browser` and design/motion skills (`impeccable`, `high-end-visual-design`, `design-taste-frontend`, `gpt-taste`, `gsap-react`, `motion-framer`) are resolved directly by each CLI from its local skill directory. Design gates and translation rules are defined in [WORKFLOW](WORKFLOW.md#shared-skills-and-design-stages).

### Current cycle

1. **Direct CLI prompt:** Luca initiates a task directly in the chosen CLI (`agy` or `codex`).
2. **State check & context load:** The agent inspects `git status` / `git branch`, reads the relevant canonical sources mapped in `AGENTS.md`, and resolves shared agency context via `augeo-orchestrator context augeo-website` when cross-project brand/business context is needed.
3. **Implementation & verification:** The agent executes the requested code or documentation work within the scope of Luca's prompt, running appropriate verification (`bun run build`, `bun run test:unit`, `agent-browser` visual/interaction checks, or link/`views-check` for documentation).
4. **Delivery & Git gates:** The agent reports results concisely to Luca. Commits, branch merges (`dev` → `main`) and remote pushes happen only when explicitly requested by Luca.

## Legacy Paperclip orchestration archive

### Paperclip test branch — `pclip`

Between 2026-10-16 and 2026-10-27, the project evaluated a local Paperclip dashboard (`http://127.0.0.1:3100`, issues `AUG-1` through `AUG-27`), a Bun wrapper/bridge (`agent-orchestrator`), Bubblewrap scoped `writePaths` grants and a dedicated `pclip` test branch. That orchestration layer is now **inactive**. Do not query `127.0.0.1:3100`, require Paperclip ticket locks, or switch to `pclip` unless Luca explicitly asks to inspect historical orchestration artifacts. Complete architectural records, telemetry experiments and pilot logs from that phase are preserved in [execution history](archive/EXECUTION_HISTORY.md#escrita-delimitada-navegador-e-revisão-vinculada--2026-10-17) and [comparative pilot](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18).
