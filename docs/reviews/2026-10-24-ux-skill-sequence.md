# UX skill selection and current audit — 2026-10-24

> Correction after Luca's review: the first delivery below was a partial inspection, prematurely described as a completed audit. The supplemental audit at the end supersedes its coverage limits, contrast uncertainty and footer uncertainty. No intake architecture was executed; that future task remains queued.

> Subsequent correction and status: Luca clarified that opacity is intentional progressive focus, with scroll reveal and restoration of scroll-driven state on pointer exit. The blanket recommendation to remove this behavior and its unconditional priority are withdrawn; numerical measurements below remain state-specific evidence, not approval for a redesign. The intended interaction is recorded in specification §5. After Luca explicitly requested the remaining two skills, both were applied as design proposals: [information architecture](2026-10-24-intake-architecture.md) and [component specifications](2026-10-24-intake-components.md). Earlier “future/queued” statements describe the initial scheduling, not current execution status. Neither proposal is a working form or verified integration.

## State and decision

Reviewed all six requested skill files in full: `information-architecture`, `ux-audit-critique`, `aidesigner-guide`, `ui-ux-help`, `ux-research-plan`, `component-design`. Their methods are guidance, not evidence of user research or approval.

The repository started clean on `main` at `84a7809`, containing the lettering changes through `41aaaf8`. Hero, Process and mobile matrix footer are implemented; `#entrada` and its receiving flow are absent. The product is an existing landing in review, with an incomplete conversion journey, rather than a new visual concept. Production deployment was not inspected.

Exactly three skills selected:

| Order | Skill | Trigger and bounded task | Required output / completion evidence |
| --- | --- | --- | --- |
| Now | `uiuxdesigner:ux-audit-critique` | Inspect the implemented landing and primary conversion path. | This scorecard, prioritized issues, five next actions and explicit verification limits. |
| Future 1 | `uiuxdesigner:information-architecture` | When resuming definition of `#entrada`, before field/component design. | Inventory content; map hero → Process → intake → receipt; group intake questions by the visitor's task; specify desktop/mobile navigation, labels and a tree-test plan. Reconcile with specification §6 and commercial/privacy decisions. |
| Future 2 | `uiuxdesigner:component-design` | After the intake structure and required fields are agreed. | Spec sheet for fields, request selector, submit action and feedback: anatomy, dimensions, responsive behavior, keyboard/focus, default/disabled/loading/error/success, error recovery and preserved input. Check the real receiving integration before claiming delivery. |

Future use is programmed as a dependency-based backlog sequence, not a timed automation. Neither future skill has been executed. No date, background job, recruitment or external service has been scheduled.

Not selected: `aidesigner-guide` introduces a tool-specific generation workflow without a current need; `ui-ux-help` is a capability menu rather than a project deliverable; `ux-research-plan` is valuable for a later concrete user uncertainty, but no interviews, analytics or participant evidence were supplied. Expert inspection below must not be presented as user validation.

## Audit scope and what works

Goal: help a business understand AUGEO's context-first approach and present its business for screening. Audience assumption: a prospective business contact, including someone unsure which service they need; based on the website specification, not interviews.

The hero has a clear headline/primary action and a distinct graphic signature. Process copy explains the sequence and preserves the visitor's decision about contracting. The mobile footer closes the visual composition. Both inspected viewport widths have zero horizontal overflow. The Process cue navigates and moves focus to `#processo`; keyboard Tab exposes a visible 2px accent outline on the brand link.

### Scorecard

Qualitative expert assessment; no numerical usability score or conversion estimate is inferred.

| Dimension | Assessment | Evidence / limitation |
| --- | --- | --- |
| Hierarchy and visual identity | Strong baseline | Opened desktop hero, desktop Process and full mobile captures; headline, CTA and lettering have distinct roles. |
| Message and commercial sequence | Coherent | Hero positioning and three Process steps support the intake journey. Comprehension not tested with users. |
| Primary conversion | Blocked | Clicking hero CTA changes hash to `#entrada`; no target exists, no scroll destination, zero forms. |
| Continuation/navigation | Working in inspected path | Cue click changes hash to `#processo` and focuses that section. |
| Reading accessibility | Needs focused verification | Resting Process text is visibly faint; automated contrast review remains incomplete. |
| Submission/status/recovery | Not implemented | No form, receipt, validation or recovery journey exists. |

### Prioritized issues

| Issue | Heuristic / impact | Severity | Effort | Recommendation |
| --- | --- | --- | --- | --- |
| Primary CTA points to absent `#entrada` | Match with the real world; status and error prevention. Visitor gets no way to present a business. | Critical | Large | Complete the intake path and actual receipt; settle structure first, components second. |
| Process resting text appears faint | Recognition and minimal design: commercial content must remain readable without hover or scroll activation. | Major risk; contrast failure not yet measured | Small–medium | Measure composited contrast in active/resting states and both themes; adjust only if needed, preserving interaction hierarchy. |
| Mobile theme button is 26px high | Flexibility and user control: small target can hinder touch use. This is below the skill's 44px target guidance, not proof of a WCAG failure. | Minor | Small | Expand hit area to at least 44px without requiring a larger label. |
| Mobile journey ends after Process with no local contact action | Recognition and navigation: once intake exists, returning to the hero should not be necessary to start. The hidden duplicate CTA was an intentional earlier decision. | Minor, conditional on intake layout | Small–medium | Place the planned intake naturally after Process; reassess the ending in that composition rather than restoring the rejected duplicate reflexively. |
| Mobile footer ARIA requires manual review | Consistency and assistive semantics: axe marks `.site-mobile-footer` as incomplete for `aria-prohibited-attr`. | Unconfirmed | Small | Inspect the footer's contextual role and accessible name before deciding whether markup needs correction. |

### Five next actions

1. Run the queued information-architecture task for intake and settle required business decisions.
2. Run the queued component-design task, including receipt/failure states and preserved input.
3. Measure Process contrast across themes and interaction states; preserve a readable resting state.
4. Expand the theme control's touch area while preserving the compact graphic treatment.
5. Resolve the footer's ARIA review and verify the completed primary path with keyboard and mobile input.

Items 1–2 are structural work, not quick fixes. Items 3–5 are the smaller audit follow-ups; none was implemented in this review. A redesigned mockup would be premature before intake structure is defined, so none was generated.

## Nielsen heuristic coverage

| Heuristic | Result |
| --- | --- |
| Visibility of system status | Primary CTA produces only a hash; no intake/receipt status exists. |
| Match with the real world | Commercial Process language is familiar; primary action's destination is missing. |
| User control and freedom | Real Process navigation/focus works; submission/correction cannot yet be assessed. |
| Consistency and standards | Primary CTA label is consistent; footer semantics needs review. |
| Error prevention | Missing intake prevents evaluating field constraints or accidental submission. |
| Recognition rather than recall | Process explains sequence; faint resting copy and absent end-of-flow intake need attention. |
| Flexibility and efficiency | Responsive layout holds at inspected widths; theme target is small. |
| Aesthetic and minimalist design | Strong existing composition; no additional sections or decorative treatment warranted by this audit. |
| Error recognition and recovery | No submission or error journey to evaluate. |
| Help and documentation | Process describes the commercial approach; intake guidance depends on future fields. No FAQ expansion inferred. |

## Evidence and limits

- Local `http://localhost:5173`, Chromium via named `agent-browser` session `augeo-skill-audit`; session closed cleanly.
- Desktop 1440×900 and mobile 390×844; inspected screenshots show light mode. A theme click was exercised, but dark rendering was not captured or verified. No physical device, other engine, reduced-motion, zoom or complete keyboard traversal claimed.
- Hero CTA real click: `location.hash === '#entrada'`, `scrollY === 0`, `document.forms.length === 0`; DOM target absent. Process cue real click: hash and focused element both `processo`.
- Horizontal overflow `0` at both widths. Hero CTA height 46px desktop / 44px mobile; theme control height 26px mobile. Mobile Process CTA is hidden (zero-size box), consistent with prior deduplication decision.
- `agent-browser a11y`: axe-core 4.12.1, 0 confirmed violations, 2 incomplete rule groups, 35 passes. Incomplete: footer ARIA and contrast on 14 nodes. This is not accessibility certification or proof of adequate contrast. `errors` returned no page errors in the inspected session.
- Temporary captures opened: `/tmp/augeo-skill-audit-desktop.png`, `/tmp/augeo-skill-audit-process.png`, `/tmp/augeo-skill-audit-mobile.png`. Necessary observations are retained here; temporary images are not durable deliverables.
- No UI implementation, new user research, external account, timed automation, commit or push. Documentation prepared on `v4`. No build required for documentation-only changes.

## Supplemental audit — completed scoped review after Luca's correction

### Assessment

The visual baseline is coherent: dominant hero typography, one clear primary action, technical lettering confined to the graphic field, and a Process narrative that leads from understanding to a proposal. Desktop and mobile maintain distinct compositions without horizontal overflow at the inspected widths. There is no evidence here supporting a visual restart or additional decorative components.

The known missing intake blocks conversion. The Process measurements describe defocused states, but Luca clarified that upcoming steps are revealed through scroll and that pointer exit restores the scroll-driven reading state. The earlier interpretation of these measurements as an unconditional reading defect was withdrawn. Any further reading assessment must test the actual reading position and pointer exit rather than treating a defocused snapshot as permanent presentation.

### Measured Process contrast

Browser-computed colors and ancestor opacity were read after CSS transitions settled. Effective text alpha = text color alpha × step opacity. Each text channel was composited as `foreground × alpha + background × (1 − alpha)`, then evaluated using sRGB relative luminance and `(Llighter + .05) / (Ldarker + .05)`.

| Theme / state | Step opacity | Heading over base | Paragraph over base | Assessment |
| --- | --- | --- | --- | --- |
| Light / resting | .38 | 2.141:1 | 1.746:1 | Both below relevant minimums. |
| Light / active | 1 | 15.943:1 | 13.433:1 | Strong contrast over base. |
| Dark / resting | .38 | 2.918:1 | 1.958:1 | Paragraph fails clearly; heading near threshold and depends on position. |
| Dark / active | 1 | 20.144:1 | 13.239:1 | Strong contrast over base. |

Base backgrounds: light `rgb(236,236,232)`, dark `rgb(6,7,10)`. Resting heading colors: light `rgba(17,17,17,.88)`, dark `rgba(255,255,255,.88)`; resting paragraph: light `rgb(90,90,86)`, dark `rgb(158,158,162)`.

These are computed CSS contrast values over the section base, not sampled glyph pixels or an exact per-pixel gradient map. To check whether the vignette could overturn the conclusion, calculations were also made at its maximum center/edge blends: resting light headings 2.116–2.150, paragraphs 1.708–1.762; resting dark headings 2.880–3.008, paragraphs 1.936–2.010. Grid lines and antialiasing were not individually sampled. The paragraph deficit is too large for these background variations to resolve it.

[WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) requires 4.5:1 for normal text and 3:1 for large text. Process paragraphs are essential content, not disabled controls; the inactive-control exception does not apply merely because `data-active` is false. No contrast requirement is being imposed on the AUGEO logotype.

### Priorities, impact and effort

| Priority | Finding and evidence | Heuristic | Severity / effort | Proposed correction and acceptance |
| --- | --- | --- | --- | --- |
| P0 | Hero and desktop Process CTAs reach `#entrada`; target absent. Mouse and Enter reproduce it. | Match with real world; status; error prevention | Critical / large; known incomplete feature | Implement the separately scoped intake journey. Acceptance requires actual receipt, not only an anchor or success animation. |
| Withdrawn as unconditional priority after Luca's clarification | `.process-step { opacity: .38 }` affects sampled defocused states; contrast above. | Recognition; focus hierarchy | State-specific observation; severity not established for actual reading | Preserve progressive focus. Any follow-up must assess scroll-revealed reading and pointer exit before proposing changes. |
| P2 | Theme button uses the same accessible name in both themes and exposes no pressed/switch state; visible LIGHT/DARK text is masked by `aria-label`. | Visibility of status | Minor / small | Use an accessible action label describing the next theme, or a consistent toggle name plus exposed state. Verify keyboard operation and accessible name/state after toggling. |
| P2 | Named footer sits inside `main`, without an explicit role; implicit role is generic. | Consistency and semantics | Minor / small | If only decorative, remove the unsupported name; if a named group is intended, use appropriate group semantics. Preserve matrix internals. |
| P3 | Theme target height is 26px on mobile. | Flexibility and efficiency | Minor ergonomic improvement / small | Aim for a 44px hit area without enlarging the visible label. Its measured width/height exceed the 24×24 AA minimum; do not report this as an AA size failure. |

Footer conclusion is based on the actual ancestor relationship and [W3C ARIA in HTML](https://www.w3.org/TR/html-aria/#el-footer): a footer inside main has generic semantics, for which naming is prohibited. This resolves the earlier uncertainty by markup/specification inspection; axe itself still reported an incomplete check, not a confirmed violation. No screen-reader session was run.

[W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) distinguishes the 24×24 minimum from larger ergonomic targets.

### Five small follow-ups, separate from building intake

1. Original opacity-removal suggestion withdrawn after Luca's clarification; preserve focus behavior and assess any future concern in the actual reading state.
2. Expose the theme action/state to assistive technology.
3. Correct the named generic footer semantics.
4. Expand the theme control's hit area while preserving its visual proportions.
5. Reconcile active documentation with current behavior: the Process closing trigger sets all steps active; earlier backlog wording says closing returns them to neutral. Preserve the implementation until Luca decides the intended behavior; documentation is not approval to change it.

The missing intake is the larger conversion task, not a quick win. Its previously queued architecture and component work remain future tasks. No mockup was generated because this audit identifies specific behavior/style corrections without requiring a new composition.

### Interaction and coverage evidence

- Session `augeo-audit-complete`, actual local Vite page, same `v4` application baseline. Closed cleanly. No application edits.
- Desktop light/dark at 1440×900; mobile light/dark at 390×844. Additional 320×568 geometry check: overflow 0. Both principal widths also overflow 0. This narrow check is not native zoom or a physical-device test.
- Desktop sequential Tab traversal observed brand → theme → hero CTA → Process cue → closing CTA → document. All five controls exposed a 2px accent focus outline. Direct focus positioning followed by Tab/Enter confirmed hero CTA activation, Process cue activation/focus transfer and closing CTA activation. Mobile skips the hidden closing CTA; after Process focus, Tab returns to the next page control in document order. No focus trap observed in these paths; reverse-tab and a real screen reader were not tested.
- Real hover of step 2 in both themes activates steps 1–2, leaving step 3 resting; the captured comparison and computed styles agree. Mobile real scrolling to `scrollY=700` activates all three steps and exposes readable active copy. This does not excuse resting-state contrast.
- At the desktop end, all three steps can be active, matching the current `onEnter: () => setUnlockedStepIndex(PROCESS_STEPS.length - 1)` closing trigger. Earlier documentation claiming neutral closing does not match this source/observation. An initial wait for `scrollY > 1300` was invalid because maximum scroll was 1185 at 1440×900; it timed out and was replaced by actual scroll geometry. No scroll failure inferred from that timeout.
- Emulated `prefers-reduced-motion: reduce` produced opacity 1 for all three resting Process rows. This verifies the CSS reading fallback only. The GSAP Process matchMedia branches are keyed to viewport width rather than reduced-motion; a full motion-policy review remains pending, and animation disablement is not claimed.
- axe mobile rerun: 0 confirmed violations, 2 incomplete groups, 35 passes. Manual contrast and footer conclusions above supplement this result; no accessibility certification inferred. Browser `errors` returned no errors in the inspected session.
- Settled captures opened: `/tmp/augeo-audit-final-mobile-light.png`, `/tmp/augeo-audit-final-mobile-dark.png`, `/tmp/augeo-audit-final-desktop-dark.png`, `/tmp/augeo-audit-mobile-dark-reading.png`. Active comparisons opened: `/tmp/augeo-audit-light-active.png`, `/tmp/augeo-audit-dark-active.png`. Earlier theme-switch captures showed transitional colors or mislabeled filenames; they were replaced and are not final visual evidence. Final desktop dark capture used reduced-motion; active comparisons used ordinary motion preference.
- No production inspection, performance profiling, real submission, real device, other engine, user study, complete motion audit or full contrast inventory beyond Process. These limits do not prevent a scoped heuristic/design audit; they prevent claims of comprehensive compliance or production readiness.

### Updated heuristic scorecard

| Heuristic | Conclusion after supplemental review |
| --- | --- |
| Status visibility | Theme action works, but accessible state is missing; intake feedback is absent with the feature. |
| Real-world match | Positioning and Process copy are coherent; contact action has no destination. |
| User control | Inspected navigation and focus transfer work; no trap observed. |
| Consistency | CTA names are consistent; footer semantics and stale closing documentation need correction. |
| Error prevention | Broken conversion destination confirmed; form validation not assessable. |
| Recognition | Process explains the journey; defocused contrast measurements require the subsequent user clarification about progressive reading focus. |
| Flexibility | Narrow layout and keyboard paths work; touch-target improvement recommended. |
| Minimalist/aesthetic design | Existing hierarchy, typography and technical signature are worth preserving. |
| Error recovery | No submission implementation to evaluate; not scored as an implemented recovery defect. |
| Help | Process gives useful context; no evidence warrants adding an FAQ or another section. |
