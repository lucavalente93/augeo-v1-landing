# Project procedures

Current execution and validation procedures. [AGENTS.md](../AGENTS.md) defines authorization, sources and continuity routines. [BACKLOG.md](BACKLOG.md) contains the queue; [history](archive/EXECUTION_HISTORY.md) preserves dated results. A procedure does not prove prior execution.

## Bun and validation

Use Bun for installation and execution: `bun install --frozen-lockfile`, `bun run dev`, `bun run build`, `bun run preview` and `bun run test` (Playwright). `bunfig.toml` forces Bun for script executables; keep only `bun.lock`. To install Chromium, use `bunx --bun playwright install chromium`.

Some executors block sockets with `EPERM`, independently of Playwright. Try `bun run test` in the sandbox once per validation block; if this known error occurs at server startup, request approved execution outside it. Do not repeat IPv4/IPv6, Vite, Node, Python or subprocess probes without new evidence, or change configuration to bypass the restriction. Record command, count, result and context in history, with the block summary in `docs/BACKLOG.md`. Use `bun run test` for functional regressions and `dev-browser` for visual/interactive inspection, each with its own execution procedures. Reopen investigation if repeated approvals significantly impede development.

## Impeccable

**Current trigger - Luca's correction on 17/10:** The skill serves conception, elaboration and drafting of real visual concepts in projects requiring staged work and a design methodology. It is not required for every interface edit: simple metric/label changes, functional maintenance, operational dashboards and technical fixtures/pilots receive pertinent implementation and verification, without reflexive launcher, playbook or detector use. CSS, text or browser involvement does not authorize activation. Its use in pilot AUG-5 and the attempt during the dollars → tokens change were inappropriate; preserve those records as historical facts without turning them into mandatory precedents.

- Follow full applicable command/playbook workflows, including those prescribed by the plan and the methodological state in the backlog, and identify the workflow being applied.
- Record required steps, evidence, artifacts and any omissions or pending work. Distinguish reading a playbook, using its guidance, running a CLI tool and completing the full workflow; never claim command completion merely because its playbook was read.
- Preserve confirmed decisions and existing results while completing pending stages. Do not fabricate earlier executions or repeat checks unnecessarily. Consult history for evidence, backlog for the queue and HERO for methodological state, evaluations and block limits.

When resuming visual work, locate the skill available to the executor, read its SKILL.md and load each workflow's playbook before executing it. Run the launcher `impeccable context --target <target>` once per session with this project as cwd; follow the skill's fallback if it fails. The existing summary remains in `docs/PRODUCT.md`, with marker `impeccable:product-schema 1`. Absolute paths recorded in audits identify the original environment, not a guaranteed installation in another agent.

Preserve the existing visual world. Absence of DESIGN.md does not authorize restarting the identity or interview by reflex. Within design work where the skill applies, use `shape` for visual planning and read `craft-floor` before editing as required by the workflow. Documentation review and functional maintenance do not initiate visual workflows.

The hero sequence, states and criteria are in [HERO.md](HERO.md#current-block-plan). `document` must extract the implementation and fulfill its artifacts/validation; do not copy an audit or hypotheses as approved tokens. No formal critique snapshot has been recorded; a future execution must follow the full workflow. Do not update a historical score without a new audit.

## Shared skills and design stages

`augeo-context` resolves context and limits; `augeo-react-frontend` guides implementation/review of React/TypeScript components and interactions. The latter preserves Vite/Bun, existing conventions, cleanup of listeners/observers/frames, intentional mutable buffers and reduced motion. It does not adopt Next.js recommendations, new libraries or memoization by reflex. Sources are shared through links; local installation details belong in the bridge README. Installation does not prove IDE discovery or tool parity.

For applicable visual design, preserve complete Impeccable commands/playbooks and their gates. In Paperclip, bound the current stage: discovery/brief, concept selection, authorized implementation or presentation/verification. If the stage requires a response, the executor returns questions/options/brief, identifies the pending decision and ends the turn for review without assuming approval. The answer stays on the same ticket and explicit continuation resumes the saved session. Concrete gates/artifacts come from the playbook, including intermediate evaluations where required; this division does not replace them. Interactive conversations perform the same gates and record decisions on the tracked ticket.

Implementation begins only after required decisions and authorized write scope are in place. Do not extend time limits, start a second agent or repeat checks to cross a stage automatically. Final presentation includes a usable preview and real evidence. Validate discovery, launcher access, browser and image generation separately; a skill does not install the tool. An `engine-probe` proves only the runtime, without executing `context`, `shape`, a detector or any design workflow.

## Naming

Apply `coding-standards` from `affaan-m/ECC`, reading the [original SKILL.md](https://raw.githubusercontent.com/affaan-m/ECC/main/skills/coding-standards/SKILL.md) before refactoring. Remote reading does not equal local installation. The 13/10 migration was implemented; earlier diagnosis tables are in history and are not a renaming queue.

The skill provides general guidance: its examples of Next.js, immutability, memoization and filenames do not authorize replacing the stack, mutable buffers, physics or canvas lifecycle. Preserve existing conventions and intentional mutation for performance.

1. Record current → proposed names per block and find all uses before editing. Rename identifiers respecting scope and types; do not globally replace words such as `step`, `title`, `from`, `to` or `source`.
2. Migrate declarations and consumers together: imports/exports, props, landing and `?demo=matrix` demo, CSS/Playwright selectors, DOM queries, custom properties and operational references. Preserve the current `.hero-page` scope during renaming; removing it requires separate analysis.
3. Preserve values, formulas, actual units, drawing/listener order, observer cleanup, DOM structure, dimensions, themes, reduced motion, touch/scroll and link destinations. Adding a unit to a name does not authorize converting its value. The matrix API remains generic.
4. Separate proposals beyond renaming: removing `pixel`, eliminating CSS scopes, reorganizing tests, moving assets or extracting functions. Do not optimize warp, change timings or advance visual blocks during a naming migration.
5. Run `bun run build` and `bun run test` before and after changes. Preserve existing assertions and contexts; update only pertinent references/descriptions. Investigate failures rather than relaxing assertions or shrinking the suite to pass.
6. If classes, selectors or paths change, compare equivalent before/after screenshots of landing and demo across pertinent themes, motion preferences and viewports. Build does not detect a CSS selector that no longer matches; visual review complements tests.
7. Review the diff and search active files for old references. Preserve old names in historical evidence when they describe code from that date; do not rewrite history as if the migration already existed. Run `git diff --check` and record results/limits in the backlog according to current user guidance.

### Naming conventions

1. Name the concept and role: index, bounds, timestamp, buffer, query or observer when it removes ambiguity.
2. Use verbs in functions (`update`, `read`, `draw`, `create`, `advance`) with the action's object when scope does not make it clear.
3. Name booleans as questions/states (`isMatrixInViewport`) and configuration flags as enabled actions (`enableArtworkMotion`).
4. Make units explicit at boundaries between seconds/milliseconds and CSS/bitmap pixels. Do not mix time and distance names such as `step`.
5. Use consistent vocabulary: matrix/grid → nodes and links; a pulse travels along a link; a wave starts from interaction; artwork is the generic image, AUGEO lettering is its hero use.
6. Preserve conventional names and mathematical abbreviations in short scopes. Avoid prefixing everything with AUGEO or creating huge names.

## Evidence and records

Record the command actually run, count/result, context, limitations and relevant artifacts. Identify screenshots in `/tmp` and `test-results/` as temporary and preserve necessary facts in history; do not rely solely on those files. Update the block summary and next action in the backlog.

Checks must match the target: documentation-only changes require checking content, links, anchors, active references and diff; do not repeat build/functional suites without a relevant change or concern. For code, run pertinent checks; for visual changes, also inspect rendering and interaction. History does not automatically validate current code.
