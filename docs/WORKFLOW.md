# Project procedures

Current execution and validation procedures. [AGENTS.md](../AGENTS.md) routes authority, sources and continuity routines. [BACKLOG.md](BACKLOG.md) contains the queue; [history](archive/EXECUTION_HISTORY.md) preserves dated results. A procedure does not prove prior execution.

## Bun and validation

Use Bun for project installation and execution: `bun install --frozen-lockfile`, `bun run dev`, `bun run build` and `bun run preview`. `bunfig.toml` forces Bun for script executables; keep only `bun.lock`.

Luca chose `agent-browser` on 2026-10-24 as the default for agent-driven browser validation, replacing Playwright as the routine execution path. Use the globally installed CLI and official skill; Antigravity CLI discovers the skill in its global skills directory. Read `agent-browser skills get core` for instructions matching the installed version. Existing `tests/*.spec.ts`, `playwright.config.ts` and `bun run test` remain legacy coverage; execute or migrate that suite only when explicitly requested. Do not silently fall back to Playwright, Puppeteer, Unbrowse or another browser tool.

For a local UI change:

1. Start or reuse the project's Vite server and choose an explicit named agent-browser session for this task/agent. Reuse the same session across commands. Let agent-browser discover an existing compatible Chrome/Chromium; use `--executable-path` when discovery fails. Download a browser only if none is available. CDP attachment is optional, not a prerequisite for normal local launch.
2. Navigate to the actual local URL. Prefer compact/scoped snapshots (`snapshot -i`, `snapshot -s <selector>`) and targeted `eval` results over full DOM dumps. Batch independent known actions when no intermediate observation is needed.
3. Exercise the changed behavior with real `click`, `hover`, pointer, scroll or keyboard commands. Wait for an observable condition rather than an arbitrary delay; wait for fonts before layout measurement or captures. Use DOM evaluation for measurements, not as the sole proof that user interaction works.
4. Check the affected desktop/mobile sizes, themes and motion preferences when relevant. Capture and open the pertinent screenshots, inspect geometry/overflow and page errors, and report actual assertions and limits. A snapshot of accessible controls alone does not validate canvas, layout or motion. Keep the coverage pertinent to the change; do not claim the historical suite passed.
5. Close only the named session owned by this task. Do not close another executor's session or the user's browser. Follow the evidence procedure below.

Some executors block sockets or browser launch with `EPERM`, independently of the automation library. Try the required operation once under the current execution policy; if that known restriction occurs, use the executor's approved permission mechanism. Do not repeat IPv4/IPv6, Vite, Node, Python or subprocess probes without new evidence, or change application configuration to bypass the restriction.

## Impeccable

Activation is defined in resolved global governance. Apply this section only when that trigger is met.

- Follow full applicable command/playbook workflows, including those prescribed by the plan and the methodological state in the backlog, and identify the workflow being applied.
- Record required steps, evidence, artifacts and any omissions or pending work. Distinguish reading a playbook, using its guidance, running a CLI tool and completing the full workflow; never claim command completion merely because its playbook was read.
- Preserve confirmed decisions and existing results while completing pending stages. Do not fabricate earlier executions or repeat checks unnecessarily. Consult history for evidence, backlog for the queue and HERO for methodological state, evaluations and block limits.

When resuming visual work, locate the skill available to the executor, read its SKILL.md and load each workflow's playbook before executing it. Run the launcher `impeccable context --target <target>` once per session with this project as cwd; follow the skill's fallback if it fails. The existing summary remains in `docs/PRODUCT.md`, with marker `impeccable:product-schema 1`. Absolute paths recorded in audits identify the original environment, not a guaranteed installation in another agent.

Preserve the existing visual world. Absence of DESIGN.md does not authorize restarting the identity or interview by reflex. Within design work where the skill applies, use `shape` for visual planning and read `craft-floor` before editing as required by the workflow.

The hero sequence, states and criteria are in [HERO.md](HERO.md#current-block-plan). `document` must extract the implementation and fulfill its artifacts/validation; do not copy an audit or hypotheses as approved tokens. No formal critique snapshot has been recorded; a future execution must follow the full workflow. Do not update a historical score without a new audit.

## Shared skills and design stages

React implementation guidance belongs in `augeo-react-frontend`; source resolution belongs in `augeo-context`. Resolve installed skills through discovery. For Impeccable, use its single entry skill and routed subcommands/references; do not assume separately installed `/shape` or `/audit` skills.

When an applicable playbook requires a human decision, return its questions/options/brief and the exact pending decision. In Paperclip, record the answer on the same ticket and explicitly resume the saved session. Keep discovery, concept selection, implementation and review distinct; gates/artifacts come from the installed playbook. Interactive conversations use those same gates. Do not cross a gate by extending time limits, starting another executor or repeating checks.

Present a usable preview for interface evaluation. Verify skill discovery, launcher, browser and image-generation availability separately; an `engine-probe` proves only runtime access.

## Naming

Apply `coding-standards` from `affaan-m/ECC`, reading the [original SKILL.md](https://raw.githubusercontent.com/affaan-m/ECC/main/skills/coding-standards/SKILL.md) before refactoring. Remote reading does not equal local installation. The 13/10 migration was implemented; earlier diagnosis tables are in history and are not a renaming queue.

Apply naming guidance within the React skill's architecture and lifecycle constraints.

1. Record current → proposed names per block and find all uses before editing. Rename identifiers respecting scope and types; do not globally replace words such as `step`, `title`, `from`, `to` or `source`.
2. Migrate declarations and consumers together: imports/exports, props, landing and `?demo=matrix` demo, CSS and browser-check selectors (including retained legacy tests), DOM queries, custom properties and operational references. Preserve the current `.hero-page` scope during renaming; removing it requires separate analysis.
3. A naming-only migration preserves behavior and values; adding a unit to a name does not convert its value. The matrix API remains generic.
4. Separate proposals beyond renaming: removing `pixel`, eliminating CSS scopes, reorganizing tests, moving assets or extracting functions. Do not optimize warp, change timings or advance visual blocks during a naming migration.
5. For naming migrations, run build and regression checks before and after changes; reuse applicable baseline evidence and respect bridge check ownership below. Migrate pertinent test references while preserving assertions.
6. If classes, selectors or paths change, compare equivalent before/after screenshots of landing and demo across pertinent themes, motion preferences and viewports. Build does not detect a CSS selector that no longer matches; visual review complements tests.
7. Review the diff and search active files for old references. Preserve old names in historical evidence when they describe code from that date; do not rewrite history as if the migration already existed. Follow the evidence procedure below.

### Naming conventions

1. Name the concept and role: index, bounds, timestamp, buffer, query or observer when it removes ambiguity.
2. Use verbs in functions (`update`, `read`, `draw`, `create`, `advance`) with the action's object when scope does not make it clear.
3. Name booleans as questions/states (`isMatrixInViewport`) and configuration flags as enabled actions (`enableArtworkMotion`).
4. Make units explicit at boundaries between seconds/milliseconds and CSS/bitmap pixels. Do not mix time and distance names such as `step`.
5. Use consistent vocabulary: matrix/grid → nodes and links; a pulse travels along a link; a wave starts from interaction; artwork is the generic image, AUGEO lettering is its hero use.
6. Preserve conventional names and mathematical abbreviations in short scopes. Avoid prefixing everything with AUGEO or creating huge names.

## Evidence and records

For bridge-managed checks, follow [execution ownership](ORCHESTRATION.md#current-cycle). Repeat checks only for new changes, failures or unresolved concerns.

Record the command actually run, count/result, context, limitations and relevant artifacts. Identify screenshots in `/tmp` and `test-results/` as temporary and preserve necessary facts in history; do not rely solely on those files. Update the block summary and next action in the backlog.

Run `git diff --check`. Checks must match the target: documentation-only changes require checking content, links, anchors, active references and diff; do not repeat build/functional suites without a relevant change or concern. For code, run pertinent checks; for visual changes, also inspect rendering and interaction. History does not automatically validate current code.
