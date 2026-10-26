# Project backlog

Updated on 2026-10-26. Current state, latest delivery and queue only. Contract: [ORCHESTRATION](ORCHESTRATION.md). Earlier deliveries and evidence: [history](archive/EXECUTION_HISTORY.md).

## Latest delivery — `polly`: scroll-drawn Process lines — 2026-10-26

Corrected the rejected right-edge-only implementation: distributed grid restored at16/30/44/58/72/86%, split around measured title/description reading bands, with full-width row boundaries. Desktop draws segments with scroll; mobile uses a reduced static grid; opening stays clear. No hero changes. [Current requirements](02-WEBSITE_SPEC.md#scroll-drawn-line-direction--lv-2026-10-26); [evidence](reviews/2026-10-26-polly-process-lines/README.md). Earlier edge-only experiment remains historical, not accepted.

Build and detector passed. Fresh Chromium coverage and limits are recorded with the correction evidence. Preview is the existing server at `http://localhost:5173` on `polly`;5174 is no longer running. LV authorized committing the current work and promoting it to `main` on 2026-10-26; Git synchronization is in progress.

**Visibility refinement:** LV requested stronger grid visibility; raised grid alpha to0.14 in both themes and unified horizontal grid strokes with that token, retaining1px thickness and existing motion/layout. Full stage remains unapproved.

**Intersection refinement:** restored exactly two44% “+” joints, after steps1/2; none at the footer. Build/detector passed; Chromium confirmed count, mobile centering and static reduced-motion visibility.

**Accent refinement:** first joint heats from20%, second from25%, both reaching accent at85%. One opacity blink replaces the former glow during85–95%; static mobile/reduced motion remain full-opacity accent.

**Joint visibility correction:** joints now15px/1.5px after LV found2px too heavy and1px too faint, raised blink minimum to55%, and derived a darker local accent from the existing brand token for light-theme contrast. Timing and count unchanged.

**Next action:** LV visual review of item #1 in the preview. Do not infer acceptance from implementation authorization, start #2/#3 or refine unrelated scaffolds.

**Approval gate:** the entire item #1 stage is still unapproved. Only after LV approves it, remind LV and revisit **#2: rules/type relationships** (`layout`/`polish`), then **#3: closing narrative/hierarchy** (`clarify`/`layout`). Do not start or silently close those follow-ups before approval. LV authorized Git promotion to `main`; this does not close the visual approval gate. Current critique snapshot stays historical and is not closed as fully resolved.

## Current state

- Previous work is committed as `b6e2a5c` on `dev`, merged and pushed to `main` as `b107bc5` on 24/10 at Luca's request. This confirms Git synchronization, not Vercel deployment readiness.
- Hero, Process and the mobile matrix footer are included in that source baseline. Lettering rescale/kerning/baseline finish are already committed; old uncommitted summaries belong to history.
- Commercial entry follows the approved [WhatsApp direction](02-WEBSITE_SPEC.md#6-sales-intake-and-form). Current CTA still targets absent `#entrada`; no WhatsApp number, bot, provider or receiving/handoff integration is configured. The inline form is a superseded alternative.
- Process opacity is intentional scroll/hover focus. Preserve Luca's clarification in the [specification](02-WEBSITE_SPEC.md#5-public-process); sampled defocused contrast is not authority to remove the behavior.
- The approved `dev` baseline included Process H2 resize synchronization. In the current `polly` experiment the opening no longer travels; breakpoint refresh instead reconciles cumulative reading focus. Physical qutebrowser/i3wm confirmation remains outside the Chromium evidence.
- Component recommendations are proposals in the [archived component study](archive/2026-10-24-ux-review.md#landing-components), not implemented changes. No form, chatbot or new visual work is authorized by this documentation task.
- Current verification procedure: [WORKFLOW](WORKFLOW.md#bun-and-validation). Historical browser evidence does not validate an untested new change.

## Priority continuity - agent architecture

Paperclip + bridge and shared context are implemented. Last recorded pilot state: AUG-8 blocked after command denial/503 and recovery 409; AUG-9 in review. AUG-5/AUG-6 evaluation remains pending; AUG-7 is unexecuted. Technical write/browser grants were revoked. These are recorded states, not a fresh Paperclip query.

Comparison and limits: [18/10 record](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18). Skill availability and execution boundaries: [ORCHESTRATION](ORCHESTRATION.md#shared-skills---deployed-on-1810). Reconcile preserved evidence before resuming the local pilot; its prior preview address does not establish a running service.

## Queue by workstream

| Workstream | Next action or dependency | Limit |
| --- | --- | --- |
| Documentation | Review the completed output-skill/consolidation delivery; commit and publish only when requested | CLI behavior observed; IDE not exercised. No app edits or publication of this implementation. |
| Agent architecture | Start `AUG-13` (`c4d0c9a7-45a2-44fc-afd2-ca76a925a626`, standby/`backlog`, no assignee) for the Pre-Review Quality Gatekeeper; evaluate AUG-8/AUG-9; keep AUG-7 in backlog | No ticket execution implied by this queue. |
| Hero | Luca's visual evaluation and reconciliation of block 2 methodology | [HERO](HERO.md#current-block-plan); deferred motion and other blocks are not resumed. |
| Landing / intake | When requested, define the WhatsApp conversation, human handoff owner and actual channel setup; connect the CTA only to a real configured destination | [Specification](02-WEBSITE_SPEC.md#6-sales-intake-and-form). No provider, account purchase or form implementation inferred. |
| Components / quality | Review `polly` critique item #1; after full LV approval, remind and revisit #2 then #3 | Dark/light stays a scaffold. No automatic follow-up from the rejected technical experiment. Copy/business-facing text remains provisional. |
| Technical cleanup | Evaluate removing `pixel`, cue scope, splitting legacy specs and moving assets | Separate from completed naming migration; legacy Playwright needs an explicit request. |
| Figma | Check suitability of the local PNGs before resuming manual import | Availability is not provenance, equivalence, import or approval; proposal in HERO. |
| Publication | Define redirection/canonical and metadata when in scope | Vercel Pro purchase remains postponed; WhatsApp channel setup is pending, not implemented. |

The sockets/EPERM diagnosis is closed; fallback is in WORKFLOW. ResizeObserver warnings in old synthetic checks have no isolated cause. Do not reopen those diagnoses without relevant new evidence.
