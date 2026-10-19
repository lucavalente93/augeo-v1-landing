# Antigravity/Codex orchestration

Current local integration contract, updated on 2026-10-18. **Shared reading and the technical write/browser pilot are validated; deliveries await human review. Comparative pilot AUG-8 met fixture acceptance but remains operationally blocked; review AUG-9 is under evaluation.** Next action is in the [backlog](BACKLOG.md#priority-continuity---agent-architecture); full IDs, failures and earlier research are in [history](archive/EXECUTION_HISTORY.md#escrita-delimitada-navegador-e-revisão-vinculada--2026-10-17).

## Architecture and responsibilities

| Component | Adopted responsibility |
| --- | --- |
| Luca | Direction, priorities and creative approval; commit, push and publication require an explicit request. |
| Antigravity | Frontend/visual execution and creative coordination. |
| Codex | Structural engineering and technical review. |
| Paperclip | Dashboard and authority for task state. |
| Bun bridge | Resolves context, starts the assigned CLI and returns results/evidence to the ticket. |
| Private store and Obsidian | Canonical agency Markdown; vault, Graph View and Canvas for human navigation. |
| Website repository | Product, requirements, local decisions and procedures. |

Paperclip `2026.1012.0` uses the `process` adapter for `agy` and Codex CLI. Bridge code and its operational guide live in the local `agent-orchestrator` directory, a sibling of this project. The dashboard serves `http://127.0.0.1:3100`; the server runs in the foreground without a boot service. Agents execute on demand without periodic heartbeats. Assignment and handoff are explicit; there is no automatic routing or control over this chat or conversations already open in the IDE.

One coordinator per request and one active executor per project. Each task declares its owner and scope; the other agent may review read-only. Coordination transfers must be recorded without circular delegation. Antigravity as an automatic universal entry point remains a proposal, not an implemented capability.

## Shared context

`augeo-orchestrator context augeo-website` resolves authorized global/local sources, paths and SHA-256. It sends governance, the global website record, AGENTS and BACKLOG content; other sources appear in a catalog without their text. `--source <registered-source>` adds content as needed; `--all` requires explicit full-context consultation. There is no keyword classification or model call to select documents. Environment configuration resolves roots; the repository contract does not require this machine's paths. The `augeo-context` skill exposes this entry point to executors.

Agency, business, brand and governance belong in the private `global-context-store`. The website keeps its local sources; [AGENTS](../AGENTS.md) defines each module's authority. PRODUCT preserves its path/schema. Personal material and credentials remain private.

Edit originals; `views/` contains eight derived copies with origin/hash, including ORCHESTRATION, now registered as a selectable source. `views` regenerates and `views-check` verifies those copies. Obsidian need not be open for agents to read sources. Graph View shows explicit links; Canvas arranges cards without executing tasks. Source changes during a run require reconciliation; historical snapshots retain the revision consumed.

The [two](refs/stack-referencia-4-camadas.md) [references](architecture-reference.md) informed the adaptation without imposing tools. Embedded PostgreSQL serves only Paperclip. Website database, embeddings, transcription and external services remain unselected. Maestri and Gemini CLI are not dependencies. Installing skill links does not prove discovery in every graphical surface.

### Documentation language and vault names - 19/10

Active technical sources are in English; public Portuguese copy, actual UI labels, historical records and execution evidence retain their original language. The bridge still requests concise Portuguese responses. Global notes use `AUGEO - Agency`, `AUGEO - Business` and `AUGEO - Brand`; derived website notes use `Website - Subject`, with a simple hyphen separator. The eight sources and their registered IDs remain unchanged.

Optional per-project `sourcePaths` configuration maps a fully qualified source ID to its physical path, confined to the original authorized root. This preserves task `contextSources`, source frontmatter IDs and context-selection behavior while allowing readable filenames. Canonical-source write protection follows the resolved physical paths. The view generator shares a single naming map with verification, updates internal links and preserves fragments; Markdown destinations encode spaces. Regeneration preserves source IDs/hashes and refuses to overwrite manual notes. Only recognized obsolete generated files are removed.

Snapshots, sessions and tickets are not rewritten. Old handoff/recovery evidence still describes its original revision; changed content or missing old paths requires reconciliation, not hash replacement or an automatic model rerun. Operation and migration verification are documented in the bridge README and backlog.

## Execution contract

### Shared skills - deployed on 18/10

`augeo-context` and `augeo-react-frontend` each have one source in the private store and links for Codex, Antigravity CLI and IDE. The existing Impeccable package, including scripts and references, remains the single source and was linked into both Antigravity directories; there was no partial copy or package modification. The React skill is a local adaptation to this project's stack and canvas lifecycle, without importing the Next.js/Vercel collection. Local sources and commands are in the bridge README.

`AUG-10` confirmed discovery of all three skills in a real CLI run and reported reading their SKILL.md files and `reference/shape.md`; discovered paths were global configuration links. Result is `in_review`, with context/worktree preserved by the bridge, no product edits or duplicated checks. Frontmatter, link resolution/hashes and launcher handshake were also checked. This does not prove discovery in an IDE graphical conversation, which still requires its own check.

During diagnosis, the CLI reported no native/MCP browser tool or direct image generator; it exposed `image-generator` through `invoke_subagent` without invoking it. `agy mcp list` confirmed no configured servers. Declared availability does not validate image generation, unrestricted browsing or parity with Codex. The previously validated Chromium helper retains its isolated scope. Image, branding, Figma and additional style skills were not installed in this delivery.

The procedure in WORKFLOW and the shared skill requires returning questions/options/brief and the pending decision when a design playbook needs a human response. Record the answer on the same ticket; the saved session continues only through explicit resumption. Complete playbook gates and artifacts remain mandatory; there is no new phase automation, write authorization or deadline change. This diagnosis read the playbook and ran only the technical `engine-probe` handshake outside the model; it did not run `context`, `shape`, detector or a design workflow.

### Efficiency direction confirmed on 17/10

1. One executor implements a bounded delivery. Implemented selection: essential sources plus explicit sources from the optional `augeo-task` description block; catalog of the rest for consultation when needed. Governance and AGENTS are retained. Full snapshot, hashes and manifest remain internal to the bridge without injecting all text into the prompt.
2. Pertinent automatic checks cover verifiable behavior; do not repeat tests without a change, failure or concern warranting another run. Impeccable applies to conception/elaboration/drafting of real visual concepts in projects developed through design stages. Functional maintenance, simple metric/label changes, operational dashboards and technical fixtures/pilots do not trigger it. Preserve presentation of the interface to the user.
3. Another agent reviews when there is a concrete technical reason; handoff is not mandatory for every task. `handoff` requires `--reason` with explicit reason/focus and reuses source context/evidence/checks without rescheduling checks by default. No review is created automatically on completion. Preserve the input/output communication format and explain it to the user when needed.
4. Results and usage tracking belong in Paperclip, with execution limits. Do not create a parallel report, spreadsheet or dashboard or require manual usage reporting from the executor. Keep technical artifacts needed for review and recovery.

**Dashboard state:** Usage reporting was implemented in the bridge on 17/10 following explicit authorization. **Audit → Costs** (`http://127.0.0.1:3100/AUG/costs`) receives native events linked to agent/task/project/run; nine usable historical records were imported and automatic reporting enabled. Codex cached input is separate; cumulative Antigravity snapshots become per-session deltas. Tests and repeated synchronization confirmed no duplicates. Coverage is limited to preserved logs; this chat and the entire implementation are not accounted for.

The main dashboard also displays **Monthly tokens** instead of **Month Spend**, summing input + cache + output from native events in the current UTC month, refreshing every 30 seconds. The earlier change covered only Audit → Costs; the omission was corrected after Luca pointed out the still-monetary indicator. Loading/errors are not displayed as zero usage.

Current CLIs do not provide actual billing. Events use `costStatus: unpriced`, unknown billing type and the zero value required by the schema. Local inference indicators were changed to tokens (total, ledger, agent and project), preserving the separate native financial section; do not convert tokens into dollars. A model without evidence remains unknown. Do not publish estimates as actual charges. Telemetry recovery uses logs without calling the model; an uncertain POST requires reconciliation because the native API has no idempotency. Internal receipts protect publication without a parallel report. `usage-sync` operation and the override reapplied in `postinstall` are documented in the bridge's local README. Existing deadlines remain in force; no new monetary cap has been defined.

### Current cycle

Preparation: an optional `augeo-task` description block selects `contextSources` and named `checks`, each with a reason. Local configuration defines allowed commands; tasks do not supply arbitrary shell or write authorization. Without selection, essential sources enter read-only with no reflexive bridge checks. Human requests remain free-form; block details and commands are in the integration README.

1. Create a Paperclip task with goal, deliverable, exclusions, files and observable acceptance criteria. Do not start another executor outside the assigned task.
2. The bridge identifies the ticket from the run, checks project/assignment, resolves context, records HEAD/diff/status and file manifest - including local changes - and acquires a project lock.
3. It runs the CLI read-only by default with selected context and verification plan. Resumptions use the task-specific session; never global `--continue` or autonomous selection of another inbox task. After the model stops, the wrapper runs selected, registered checks once without another agent. Model/checks share the 3/10-minute limits. Failure stops the sequence and blocks the same task for explicit correction without automatic retry. Checks run as trusted wrapper subprocesses on the host; source/code integrity is checked before acceptance.
4. After the executor stops, the bridge checks sources/files, preserves results/logs/artifacts and releases the lock. A valid result returns to `in_review` with a `human_only` request and `none` continuation; failures receive an impediment and unblock action when checkout has already occurred. Do not reassign the ticket during its own run.
5. `handoff` creates or reuses a child task for the other executor with origin, result and evidence. It checks sources and the written version before handoff. Technical review is not creative approval or publication authorization.

Paperclip controls state; bridge files store continuity and evidence (full `context.json`, selected `execution-plan.json`, check results in `verification.json`). Paperclip credentials are removed from model and verification subprocess environments. The bridge validates its operational contract without fully implementing every field/schema proposed in archived research. Reduction affects new inputs and does not erase context from old sessions; actual inference savings depend on the task and will be observable in real usage.

## Writing and recovery

Writing is enabled **only in Antigravity, by local authorization bound to UUID/project/executor and existing files**. Ticket prose does not grant access. `write-grant` validates the task/files and stores the grant; `write-revoke` removes it. Both require no active checkout/run and do not start execution. The complete procedure is in the integration README.

Bubblewrap mounts the filesystem read-only except authorized files, run `artifacts/` and the `agy` runtime. It rejects `.git`, canonical sources, traversal, symlinks/hardlinks, directories and missing targets. `/tmp` and temporary variables belong to the namespace. Scoped-write uses `accept-edits` with normal permissions and external isolation, without a duplicated inner sandbox or skip-permissions flag.

Isolation protects files, but runtime, network and host sockets remain accessible; it is not a complete adversarial sandbox. Files are mounted individually: editors requiring rename/atomic replacement may be incompatible. Read-only mode must not be interpreted as proof of total CLI isolation either.

The bridge records content/hash and checks other manifest files and the file set. Changed sources/baseline require reconciliation. After interruption, confirm the process stopped and inspect partial effects before resuming the same session; never automatically repeat mutations or revert human work. A saved result without a receipt requires recovery, not another model call. Read-only recovery refuses write runs.

An abandoned lock is archived only with an absent PID and inactive run. Respect Paperclip's native lock and provide real reconciliation evidence. Logs and failures are preserved. Deadlines: three minutes read-only and ten minutes for writing; `agy` adapter configured to 660 seconds. Recovery and backup commands are in the integration README.

Correction on 18/10: Failure publication under the agent identity must use `unblockDescriptor.owner: { agentId: <executor itself> }`; the API rejects `owner: board` with 403. This identifies ticket responsibility without authorizing autonomous retry. Corrected in the wrapper and covered by a simulated API enforcing this restriction; no additional paid run tested the correction.

## Recorded validation and limits

**Presentation for human review:** Before requesting evaluation, provide the runnable/visible result and explain the target and concrete change. Ticket, CSS diff, report and backlog do not replace interface presentation. Correction requested by Luca on 17/10: pilots were not visible for evaluation. AUG-5 is an isolated demo page, not a visual landing delivery; its button only updates a local message without querying shared context.

| Evidence | Result recorded on 17/10 |
| --- | --- |
| Reading - `AUG-1` through `AUG-4` | Same sources in both CLIs, Antigravity → Codex handoff and resumption of the same conversation. |
| Write/browser - `AUG-5` | Label only in `.orchestration-pilot/index.html`; Chromium desktop, mobile and CSS enlargement at 200%, focus after Tab, click/status, no horizontal overflow or pageerror. Antigravity opened all three screenshots. |
| Review - `AUG-6` | Codex confirmed exact edit, final snapshot and preservation of 82 other files; opened screenshots without another browser run. |
| Bridge | 15 Bun tests, 57 assertions and typecheck passed; synthetic tests distinct from real runs. |
| Subsequent native telemetry | 20 tests/81 assertions and typecheck passed; nine real events imported, repeated synchronization without duplicates, dashboard opened in Chromium and screenshot inspected. No new model call. |
| Impeccable | `clarify` playbook, `craft-floor`, edit and verification; context in main session, fallback in executor. Later detector exit 0, `[]`, attached to tickets. Does not equal CLI `clarify` or completed `polish`. |
| Recovery | Initial PostgreSQL backup restored into a disposable database; later backups and private package preserved. Full installation recovery not tested. |

At recorded closure, all six tickets were in review with no active run/impediment/lock. Pending bridge requests required human review; the `AUG-5` write grant and helper-only allow-rule were revoked. Creative approval was not granted.

Luca's later correction: Impeccable was triggered inappropriately in the technical pilot and the attempt to change dollars into tokens. These records prove what happened, not appropriate use or a mandatory precedent. Trigger corrected in AGENTS/WORKFLOW, shared governance/skill and the bridge prompt for both executors. No new agent run validated this instruction.

The browser helper covers only the isolated fixture. It does not prove unrestricted browsing, IDE parity, WebKit/Gecko, physical devices, native zoom, Enter/Space activation or screen-reader announcements. `dev-browser` was not found and no browser MCP is configured. Commercial UI and hero blocks were not resumed.

Next use prepared in `AUG-7`: read-only technical diagnosis CTA → `#entrada`, in backlog and unassigned. The ticket specifies reading files and a dedicated Playwright/Chromium probe in `artifacts/`; no product file is authorized for writing. Procedure not yet executed, no new browser capability demonstrated. Human evaluation of `AUG-5`/`AUG-6` remains pending. Bridge evolution follows the efficiency direction above, keeping results and usage in Paperclip.

### Comparison of points 3-4 on 18/10

Luca temporarily replaced the real delivery with another similar pilot. AUG-8 changed only the fixture title and reused all three Chromium scenarios; AUG-9 confirmed integrity and technical acceptance without repeating the browser. Write access and the helper-only permission were revoked. Runnable result at `http://127.0.0.1:4174` while the local server is active.

The first run stopped after denied `git diff`, following the edit. Resumption in the same session was reconciled; browser work and inspection of all three images completed, but the CLI returned ERROR due to 503 (`No capacity available`, model identified in the log as Gemini 3.8 Flash High). The bridge preserved the failure. State recovery was refused with 409; AUG-8 remains blocked under human responsibility with a human_only/none request. AUG-9 was created explicitly to review raw artifacts linked to the origin; it was not a normal `handoff` of an accepted result. Review in in_review does not resolve the origin failure. Logs also exposed the impediment-publication 403 corrected separately above.

Automatic Paperclip usage: execution/resumption 336,845 tokens, review 231,627, total 568,472. Equivalent under the historical formula: US$ 0.3314072; observed reductions of 82.4% in tokens and 79.6% in the equivalent versus AUG-5/AUG-6. This is not actual billing or an experiment isolating context: resumptions and preparation differ, and the origin did not close through the normal path. Later checks confirmed the same nominal models (Gemini 3.8 Flash High and GPT-6.1 Sol medium). Full data, tests and limits are in [history](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18). No new usage report/dashboard was created.
