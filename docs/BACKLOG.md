# Project backlog

Updated on 2026-10-19. Queue, dependencies and latest delivery. Integration contract in [ORCHESTRATION](ORCHESTRATION.md); evidence and earlier deliveries in [history](archive/EXECUTION_HISTORY.md). Requirements, hero and procedures retain their own sources.

## Latest delivery - English documentation and readable Obsidian names - 2026-10-19

- Translated the eight registered website sources (including this backlog), the six global context sources and the bridge README into English. Preserved Portuguese public copy/drafts, actual Paperclip labels, structured identifiers, historical records and existing work. Shared context guidance now distinguishes registered IDs from resolved physical paths.
- Renamed agency/business/brand notes and the context index; eight website views now use `Website - Subject.md`, with `Website - Documentation Index.md`. Updated Markdown links, translated-section anchors, Canvas file references and saved Obsidian file paths. Source frontmatter and registered IDs remain stable through optional project `sourcePaths` mappings. View generation/verification share one naming map, encode spaces, preserve external file links and refuse to overwrite manual notes; recognized obsolete generated copies were removed.
- Canonical-source write protection now checks resolved physical paths, including renamed global/local sources. `bun test` in the bridge passed 32/32 tests and 161 assertions across six files. After the final external-link adjustment, targeted core/access tests passed 13/13 with 53 assertions; `bun run typecheck` passed. Integration tests use fake executors, with no paid model call. Documentation links/anchors, Canvas targets, source-ID stability, regeneration and `git diff --check` are checked as part of migration closure; durable technical evidence is under the bridge state `documentation-migrations/2026-10-19/`.
- Started the existing Paperclip server at the user's request; health is `ok`. The abandoned project lock belonged to run `f441a400-5bd8-4ae5-b096-8a1dba72757b`, confirmed `cancelled` by the API with no owner process. Archived through `bun src/unlock.ts augeo-website`, preserving its recovery evidence. No task/model rerun, ticket edits, database migration, product changes, Impeccable workflow, commit, push or publication.
- Next action: use the regenerated vault and English sources in the next explicitly selected task. Earlier snapshots/sessions remain unchanged; handoff/recovery against renamed or translated sources requires reconciliation. Human evaluation of the Obsidian rendering was not performed in the desktop app. Existing pilot, hero and quality-gate work remains pending under its own scope.

## Latest delivery - Paperclip completion and correction - 2026-10-19

- Bridge updated: new deliveries create a native completion review; **Entrega avaliada** closes as `done`, while submitting **Solicitar correção** returns to `todo` and requests explicit resumption. The reason from run context enters the prompt with the saved session and a new response/review; approval does not authorize publication.
- `bun test`: 29/29, 139 assertions; typecheck passed. Simulated API and fake executors prove reason propagation, resumption, new response and prevention of execution after completion. An opt-in test of the installed backend was created but blocked by `listen EPERM` before PostgreSQL startup: no end-to-end proof with the real server in that session.
- Old cards retain their payload. Local receipts identify candidates AUG-1/4/5/6/9/10/11/12/14 without confirming which remain pending; API consultation was blocked by socket restrictions. Next check: `bun run test:paperclip-review` in the bridge with sockets available and individual inspection of legacy cards, without bulk completion. Contract and README updated; no product edit, paid call, commit, push or publication.

## Priority continuity - agent architecture

**State:** Paperclip + Bun bridge + Antigravity/Codex and private context/Obsidian implemented. Reading, handoff, resumption and isolated write/browser pilot validated. Results await human review; read-only is the default and the temporary write grant was revoked.

**Next action:** Evaluate comparative pilot `AUG-8` and its review `AUG-9`, with the result visible at `http://127.0.0.1:4174` while the local server is active. The fixture met technical acceptance; AUG-8 remains `blocked` after command denial and ERROR/503, with state recovery refused with 409. AUG-9 is in review. Resolve this state with evidence preserved, without reflexively repeating edit/browser/model. Points 3-4 were exercised as a pilot, temporarily replacing the real delivery at Luca's request. Human evaluation of AUG-5/AUG-6 remains pending; AUG-7 stays in backlog, unexecuted. Do not resume hero or publish based on continuity.

**Reference for the next comparison:** Pilot AUG-5 + review AUG-6 = **US$ 1.63 API equivalent**, normalized to GPT-6.1 Sol Standard; not actual billing. Counters, fixed formula, evidence and limits in [history](archive/EXECUTION_HISTORY.md#referência-de-custo-do-piloto-para-comparação-futura--2026-10-17). Compare using task usage in Paperclip, distinguishing scope and review/resumptions; monthly totals include other pilots.

**Comparison observed on 18/10:** AUG-8 + AUG-9 = **568,472 tokens / US$ 0.3314072 equivalent**, versus 3,233,206 / US$ 1.625149: reductions of **82.4% in tokens** and **79.6% in equivalent cost**. Includes both Antigravity attempts and Codex review; do not add the child task again to the tree total. Same type of change and Chromium helper, but resumption history, preparation and operational state differ; nominal models and Codex effort were checked to match; do not attribute all reduction to selected context. Details in the [comparison record](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18).

**Implemented direction:** One executor per delivery, four essential sources plus task-selected sources, named/justified checks run by the bridge after the model stops, and a second agent only through explicit handoff with reason/focus. Full hashes/snapshots, permissions and human review preserved. The dashboard automatically receives tokens and displays usage; actual billing remains unavailable. No parallel report. Impeccable restricted to real staged visual conception, per [ORCHESTRATION](ORCHESTRATION.md#efficiency-direction-confirmed-on-1710).

## Current state

**Skills on 18/10:** Impeccable and `augeo-react-frontend` shared through links with Antigravity CLI/IDE; React also exposed to Codex. `AUG-10` confirmed discovery/reading of all three skills in the CLI and returned to `in_review`, with sources/files preserved. Human gates per stage documented without design execution. IDE discovery and actual image generation remain unproven; CLI reported `image-generator` available through a subagent and no native browser. Contract in ORCHESTRATION and evidence in history. This delivery does not resolve earlier AUG-8/AUG-9 states or authorize hero work.

- Website provided by the user: `https://www.augeocreative.com`. Hero, CTA and matrix published; Process and form still planned. A provided domain does not prove canonical redirection.
- Latest recorded publication: CTA/cue collision fix in `aa12d8a`, Production deployment confirmed on 16/10. Latest recorded suite: 26/26 in 1.5 minutes and build passed; evidence applies to that code, with no new execution during this modularization.
- Hero: block 2 implemented, global visual evaluation and methodological closure pending. Mobile background approval was specific. The 16/10 correction does not close block 2; no automatic authorization for blocks 3-6.
- Repository: `lucavalente93/augeo-v1-landing`; local `origin` remote checked on 18/10 against this address. Fetch passed; local baseline and `origin/main` matched before that delivery's commits.

## Queue by workstream

| Workstream | Next action or dependency | Limit |
| --- | --- | --- |
| Agent architecture | Evaluate AUG-8/AUG-9 and reconcile AUG-8 operational block; retain AUG-7 in backlog | Fixture title only; no product file authorized; temporary write/helper grant revoked. |
| Hero | User evaluation and reconciliation of block 2 methodology | Sequence and criteria in HERO; do not advance motion, optimization or finishing. |
| Quality | Cover pointer input from the left column in isolation; consider Chromium/emulation limits at closure | No demonstrated physical devices/other engines, native zoom, CLS or hardware frame profiling. |
| Technical cleanup | Evaluate removing `pixel`, cue scope, splitting tests/matrix.spec.ts and moving assets | Separate proposals, outside the completed naming migration. |
| Figma | Check suitability of the two local PNGs before resuming manual import | Still untracked and excluded from the 18/10 push; availability does not prove provenance, equivalence, import or approval. Proposal in HERO. |
| Landing | Define Process copy and implement the real form in `#entrada` | Resolve fields, receiving/storage, privacy, screening and response per spec; preserve the mobile visual footer. |
| Publication | Define redirection/canonical and metadata when in scope | Vercel Pro and WhatsApp Business postponed until website completion; no purchase authorized. |

The sockets/EPERM diagnosis is closed and its fallback is in WORKFLOW. The runner's initial HTTP wait is a separate observation, to investigate only if it again prevents necessary execution. ResizeObserver warnings in the synthetic 16/10 round had no isolated cause and must not be attributed to the correction without evidence.

## Previous delivery - commit and push preparation - 2026-10-18

- Explicit request to update the repository with a push. Comparative fixture preserved in `de2d079`; integration documentation, skills, procedures and evidence gathered in a separate commit. No other pending work executed.
- `git fetch origin` passed; initial baseline `f061462` matched `origin/main`. Checked 57 local links and 12 anchors in the five changed documents; `git diff --check` passed. No new suite/build or browser: no landing changes, pilot historical evidence preserved.
- Two Figma PNGs remain local and untracked according to the earlier exclusion and pending evaluation. Private store, personal guide and bridge code outside this repository are not part of the push. Push and remote SHA equality were to be checked before the final response; no new creative acceptance or deployment command.
- Functional next action remains human pilot evaluation and AUG-8 reconciliation, without automatic resumption.

## Previous delivery - shared skills with Antigravity - 2026-10-18

- Complete Impeccable linked into CLI/IDE directories, preserving its installed source. Created `augeo-react-frontend` in the private store and linked to all three destinations; `augeo-context` and bridge README guide use, limitations and resumption following human decisions. AGENTS/WORKFLOW/contract updated without installing the rest of the catalog.
- Validation: three SKILL.md files passed the validator; identical real paths/hashes across the three surfaces; launcher returned `impeccable-engine 0.1.11`. Installation checked conflicts/hashes and preserved originals/manifest. `AUG-10` confirmed catalog/reading and interpretation of `shape`; bridge confirmed context/worktree intact, no selected checks and return to human review.
- Read-only diagnosis; no executor commands, design, browser, image generation or second agent. CLI had no configured MCP; declared `image-generator` through `invoke_subagent` without execution and no native browser. Graphical IDE not exercised; skills do not grant tool parity. Runtime probe is not an Impeccable workflow.
- No landing change, new write grant, human acceptance, commit, push or publication. Next use: apply skills to the explicitly chosen task, respecting gates/scope; AUG-10 evaluation and limitations above remain visible, without resuming other pending work through continuity.

## Previous delivery - comparative pilot of points 3-4 - 2026-10-18

- AUG-8 changed only the fixture h1 to “Contexto compartilhado — piloto comparativo”; same Chromium helper as the earlier pilot, one execution in three scenarios with screenshots opened. AUG-9 confirmed exact replacement, preservation of 82 other files and technical acceptance; review reused evidence without repeating browser/checks. No Impeccable.
- Selected context: five sources, 29,175 of 93,248 canonical-content characters; this measures text selection, not inference. Tokens automatically published for all three runs including failures; comparison in Paperclip and history, without a parallel dashboard/report or estimated billing posted to the backend.
- First attempt denied `git diff`; explicit resumption in the same session with edit reconciled. Second performed browser/inspection but CLI returned ERROR due to model-capacity 503. Recovery refused with 409; origin remains blocked under human responsibility, child review in_review. Do not claim normal handoff or completed automatic recovery.
- Corrected independent 403 in bridge failure publication: `unblockDescriptor.owner` now identifies the agent itself as required by the API. Mock now enforces the restriction. `bun test` outside sandbox: 28/28, 126 assertions, six files, 5.03 s; typecheck passed. First sandbox attempt: 19/28, nine socket EPERM failures. Correction without new inference, not validated through another real run.
- Fixture served on loopback 4174 for evaluation. Write grant and helper-only rule revoked; earlier work preserved. No landing change, human acceptance, commit, push or publication. Next action: evaluation and state reconciliation without a reflexive new model call.

## Previous delivery - compact context and execution flow - 2026-10-17

- Request limited to points 1-2. Explicit context selection: governance, website record, AGENTS and BACKLOG always sent; catalog of other sources and task-specific additions. Full source snapshot and integrity preserved; ORCHESTRATION registered as selectable, eight derived views.
- Checks selected in the ticket description by ID/reason, restricted to local configuration, executed once after the model stops within the shared deadline. Failure blocks the same task for correction; no automatic retry or second agent. Handoff requires reason/focus and reuses evidence without repeating source checks by default.
- Final verification: `bun test` 28/28, 125 assertions, six files, 5.08 s; typecheck passed. Executors and API simulated in tests without a new real run or paid call. Real CLI/context checked without executing a model.
- Guides/skill/contract updated; permissions, human review, dashboard and existing work preserved. Await Luca's task. No landing change, pilot acceptance, commit, push or publication.

## Previous delivery - tool trigger and token display - 2026-10-17

- Luca's explicit correction applied to AGENTS/WORKFLOW, shared governance/context skill and the Antigravity/Codex bridge prompt. Impeccable is not required for every UI change; use in the pilot and attempted dashboard maintenance identified as inappropriate without erasing history.
- Paperclip inference indicators (card, ledger, agent/project totals) changed from dollars to tokens. Layout and financial section preserved. Local override versioned in bridge code, reapplied in `postinstall`, with version/structure guard and bundle backup. Existing tabs require a hard reload due to upstream cache.
- Additional correction: the main dashboard's `Month Spend` card had been omitted. It now shows `Monthly tokens`, summing native events in the UTC month and refreshing every 30 seconds; loading/failure does not invent zero. Same persistent override without changing financial values.
- `bun test`: 20 tests/81 assertions and typecheck passed. New rule checked in prompt composition without invoking another agent; reapplying the override does not modify the file again. Desktop/mobile browser check and limitations recorded in history.
- No hero resumption, product writing, pilot acceptance, commit, push or publication. Context selection remained pending at that stage.

## Previous delivery - efficiency direction and native dashboard - 2026-10-17

- Direction confirmed in the four points above, preserving input/output between agents. No second report/dashboard created; AUG-7 stopped requiring manual usage reporting.
- Bridge updated to publish recoverable real usage in Paperclip after execution, including failures with counters; historical synchronization without a new model call. Nine events imported; second synchronization reused all nine receipts without duplicating totals. No assignment/execution of AUG-7 or pilot evaluation.
- `bun test`: 20 tests/81 assertions; `bun run typecheck` passed. API and **Audit → Costs** page checked in Chromium, screenshot opened. Import limited to existing logs; billing and models without evidence remain unknown. Context selection was not yet implemented.
- Code and operational guide in the local `agent-orchestrator` package; contract in ORCHESTRATION and evidence in history. Product, fixture and PNGs preserved; no commit, push or publication.

## Previous delivery - first real task preparation - 2026-10-17

- Context resolved through `augeo-context`; API confirmed `AUG-1`–`AUG-6` in review, agents idle and no active execution/impediment; `AUG-5`/`AUG-6` retain `human_only`/`none` requests. Empty `writeTasks` grants and no lock found.
- Checked pilot results/receipts, browser JSON and detector supplement; current fixture hash matches its record. No new pilots, browser, detector or suite execution.
- Created `AUG-7` (`d555ad7b-2490-4f82-a5b7-425c7cdf426d`) in backlog, unassigned. Defines file reading, transient Playwright/Chromium probe in artifacts, desktop/mobile click/Tab/Enter, integrity and measurement; no product file granted for writing.
- Absence of `#entrada` in code matches the form planned in the specification; browser observation of the path remains missing. No visual evaluation or Impeccable workflow started. `dev-browser` not found in consulted skill directories or PATH; no browser MCP exposed in that session.
- Documentation and views updated; earlier changes, fixture and PNGs preserved. Preparation does not constitute AUG-7 execution or human pilot evaluation.

## Previous delivery - scoped writing and browser cycle - 2026-10-17

- `AUG-5`: Antigravity changed only a fixture label, ran Chromium and opened desktop/mobile/CSS 200% enlargement screenshots. `AUG-6`: Codex checked edit, files and evidence. At closure, both were in review with no active run/impediment/lock.
- Bridge: UUID/file grants and revocation, Bubblewrap isolation, traceable changes and `human_only` review. Pilot permission revoked; failures and resumptions reconciled without repeating the edit.
- Recorded verification: 15 tests/57 assertions and typecheck passed. Impeccable through playbook, with executor fallback and final detector `[]`; do not claim CLI `clarify` or complete `polish`. Browser and recovery limits in [ORCHESTRATION](ORCHESTRATION.md).
- Documentation consolidated: current contract in ORCHESTRATION, operations in the local integration README, research/earlier deliveries in history. Documentation consolidation does not constitute another bridge/landing test, creative approval, commit, push or publication.
