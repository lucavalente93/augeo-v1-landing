# Project backlog

Updated on 2026-10-24. Current state, latest delivery and queue only. Contract: [ORCHESTRATION](ORCHESTRATION.md). Earlier deliveries and evidence: [history](archive/EXECUTION_HISTORY.md).

## Latest delivery — Process H2 resize synchronization — 2026-10-24

Fixed the Process H2 losing its GSAP alignment state after a viewport crossed the desktop/mobile breakpoint during i3wm-style tiling. `ProcessSection` now re-reads the current ScrollTrigger layout after the resize frame, clears the desktop transform below 1024px and cleans up the resize/media-query listeners on unmount.

Validation: `bun run build` passed; the named `agent-browser` Chromium session reproduced the breakpoint cycle and then kept the calculated H2 transform at an active Process scroll position; visual capture was inspected and browser `errors` was empty. Approved commit `7b44fb8` was merged into `main` as `b0ad737`, and the public domain now serves the new bundle. qutebrowser itself and physical i3wm window management remain pending Luca's confirmation. The existing documentation worktree changes remain uncommitted and preserved.

## Current state

- Previous work is committed as `b6e2a5c` on `dev`, merged and pushed to `main` as `b107bc5` on 24/10 at Luca's request. This confirms Git synchronization, not Vercel deployment readiness.
- Hero, Process and the mobile matrix footer are included in that source baseline. Lettering rescale/kerning/baseline finish are already committed; old uncommitted summaries belong to history.
- Commercial entry follows the approved [WhatsApp direction](02-WEBSITE_SPEC.md#6-sales-intake-and-form). Current CTA still targets absent `#entrada`; no WhatsApp number, bot, provider or receiving/handoff integration is configured. The inline form is a superseded alternative.
- Process opacity is intentional scroll/hover focus. Preserve Luca's clarification in the [specification](02-WEBSITE_SPEC.md#5-public-process); sampled defocused contrast is not authority to remove the behavior.
- Process H2 resize synchronization is implemented in `src/components/ProcessSection.tsx`; Chromium validation covered the desktop/mobile breakpoint cycle, while qutebrowser/i3wm remains an external confirmation.
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
| Components / quality | Review theme action naming/touch target and footer semantics; cover left-column pointer input when requested | Existing proposals only; no demonstrated physical-device/other-engine, native zoom, CLS or hardware-frame profiling. |
| Technical cleanup | Evaluate removing `pixel`, cue scope, splitting legacy specs and moving assets | Separate from completed naming migration; legacy Playwright needs an explicit request. |
| Figma | Check suitability of the local PNGs before resuming manual import | Availability is not provenance, equivalence, import or approval; proposal in HERO. |
| Publication | Define redirection/canonical and metadata when in scope | Vercel Pro purchase remains postponed; WhatsApp channel setup is pending, not implemented. |

The sockets/EPERM diagnosis is closed; fallback is in WORKFLOW. ResizeObserver warnings in old synthetic checks have no isolated cause. Do not reopen those diagnoses without relevant new evidence.
