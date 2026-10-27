# Hero - state, decisions and continuity

Current composition reconciled with the committed dev/main source baseline on 2026-10-24. This is source verification, not a new production inspection. Decisions and proposals have explicit states. Execution and queue: [BACKLOG.md](BACKLOG.md). Procedures: [WORKFLOW.md](WORKFLOW.md). Landing requirements: [specification](02-WEBSITE_SPEC.md).

## Concept and hierarchy

AUGEO presents itself through business context and the connection between brand, website, acquisition and digital operations. The hero fulfills the Persuade role: editorial message on the left and AUGEO signature in the matrix field on the right. The composition itself demonstrates direction and execution without adding undocumented clients, metrics or promises.

The [visual direction](02-WEBSITE_SPEC.md#7-visual-direction) is expressed through solid heading, striped lettering, modular grid and localized deformation. Moodboard references: [plan appendix](archive/HERO_AUDIT_2026-10-07.md#anexo-c--moodboard-e-rastreabilidade).

Applied copy (Portuguese, preserved):

- Heading: “Presença digital com direção.”, in three lines.
- Supporting text: “O contexto do seu negócio define como conectamos marca, website, aquisição e operação digital.”
- Conversion button: “Entre em contato”, opening the confirmed [WhatsApp destination](02-WEBSITE_SPEC.md#6-sales-intake-and-form) in a new tab.

The graphic signature counterbalances the heading; supporting text is grouped with the message, and the continuation cue occupies the lower left edge on desktop. The static composition preserves brand readability when the visitor prefers reduced motion.

## Desktop composition

On `dev`, from 1024 px, the hero uses two **44/56** columns with a minimum height of 100dvh. The text column contains symbol, heading, supporting text and CTA; the matrix fills the right panel. Brand, text, CTA and continuation link share a **48 px** inset. The header is absolutely positioned over the text column, with height 96 px and symbol 66 px.

The heading uses local Hanken Grotesk, weight **620**, line-height **1.02** and tracking **−0.035em**. Scale responds to the column's usable width (`clamp(2rem, 19.5cqw, 6rem)`), with three spans, maximum width 11ch and 2 px below for descenders. Supporting text uses line-height 1.5, maximum width 34ch, `text-wrap: pretty` and 18–24 px scale; short windows have dedicated scale and spacing adjustments.

The text panel has 2% white radial illumination over the theme background, with a 1 px vertical divider. The CTA uses inverted theme colors, orange focus, orange light-theme hover, dark-theme hover glow and scale reduction on press. It stays on one line on desktop.

## Mobile composition

On `dev`, below 1024 px, header and hero follow vertical flow. The header is 70 px high with a 58 px symbol and 20 px inset. Copy uses symmetric 20 px insets; heading, supporting text, CTA and `ScrollCue` follow in order. The CTA remains visible with minimum height 44 px and top margin 28 px.

The entire matrix component was moved from the hero to the **site footer** (`.site-mobile-footer`), full width below `#processo` with height `clamp(140px, 22dvh, 180px)`, a 1 px top divider and automatic margin above. Lettering is centered in this panel and uses `min(80.75%, 342px)` with `transform: none`. `touch-action: pan-y` allows vertical scrolling through the matrix area.

The hero on mobile occupies ~65% to 70% of the viewport (~580 px total with header). The `ScrollCue` sits below the CTA with 44 px clearance and 40 px hero bottom padding, pointing down to `#processo` with native smooth scroll navigation. Approved by Luca on 2026-10-24; redesigning the mobile cue/triangle variant remains noted for a future turn.

## Themes and brand

| Element | Light | Dark |
| --- | --- | --- |
| Background | `#f7f7f5` | `#06070a` |
| Text | `#111111` | `#f7f7f5` |
| Supporting text/cue at rest | `#61615d` | `#9e9ea2` |
| Borders | black at 8% | white at 8% |
| Accent/focus | `#ff482c` | `#ff482c` |

System preference and explicit `.light`/`.dark` classes control themes. On the current baseline, the header `[DARK]` / `[LIGHT]` button initializes from those classes or system preference, applies mutually exclusive classes and persists for the current mount. The matrix MutationObserver redraws immediately, including with reduced motion. In dark mode, the symbol is inverted at opacity 0.92 and lettering at 0.88. The matrix CSS background uses the theme token; canvas draws its corresponding surface. The hero CRT layer has subtler scanlines than the demo: 0.03 in light and 0.0567 in dark.

Lettering preserves geometry, proportions, stripes and counters. In the SVG, “A” and “O” declare `fill-rule="evenodd"` directly on paths filled by the CRT pattern. Desktop width is `min(83.6%, 646px)` after the 5% rescale. The heading center is published as `--hero-heading-center-y`; baseline snap uses `122/126` of the artwork height on the 72px grid, with CSS translation `3px` horizontally and `var(--hero-artwork-offset-y) + 4px` vertically. Optical kerning uses separate SVG letter groups; A/E flat bases end at 133u. Alignment observes hero, heading, supporting text and CTA. On mobile, the center is the matrix center.

## Persistent matrix and interaction

`KineticMatrix` remains a shared component with demo at `?demo=matrix`. The hero passes `title="AUGEO"`, `titleArtworkSrc`, `enableArtworkMotion` and `gridSpacing={72}`; the demo default is 58 px. The grid adapts spacing to available dimensions, preserving nodes and links within the visible field.

The hover-reactive composition is already implemented: grid and lettering respond to the same pointer/wave field, with an independent scale for the image. Pointer tracking also operates on the `.hero` ancestor, including the left column; click/touch creates a wave. At interaction end, deformation converges to rest without rebound. Warp uses a horizontal map shared by scanlines to avoid breaking letters, with maximum displacement 6 px and maximum difference 2 px between samples 8 px apart.

The current matrix lifecycle maintains continuous automatic pulses alongside discrete responses. It pauses off-screen and when the document is hidden; reduced motion keeps grid and lettering static. Technical `0x…` labels still appear after prolonged node inspection.

## Continuation cue

On `dev`, the native desktop link to `#processo` implements **Option 3 (CRT Scanline Aperture Array)** (Luca, 2026-10-24), replacing the interim CSS scaffold:
- Rows of 6 and 3 segments funnel to an orange anchor in an 80×63 px link on the 48 px axis.
- Each segment is constructed with microscopic horizontal scanline bars matching the `AUGEO` lettering and CRT matrix.
- Electron beam sweep runs via GSAP timeline: orange light visits each segment in reading order every 220 ms and rests on the anchor for ~1.5 s with a phosphor drop-shadow bloom.
- Hover pulls every segment 35 % toward the anchor using Motion spring physics (`stiffness: 280, damping: 22`).
- Offscreen and tab suspension, reduced-motion static representation, and native `#processo` keyboard navigation are preserved.

The link remains in `.hero-copy` flow after `.hero-content`, on the 48 px axis with minimum 32 px clearance and no flex shrink. It is available below 1024px with the mobile spacing described above. Keyboard focus stays visible and native activation reaches Process. Expanded content grows the hero naturally; matrix height follows it. The commercial CTA opens the confirmed [WhatsApp entry](02-WEBSITE_SPEC.md#6-sales-intake-and-form) in a new tab; its accessible name identifies the destination and new tab.

This supersedes the earlier triangle geometry/contrast decisions the 2026-10-22 rail/pulse/node cue and the interim Striped Shutter for this branch. The lettering's current baseline/optical calibration is described in Themes and brand; recentering the full panel or adding metadata requires a separate direction decision. Evidence: [v3 implementation](reviews/2026-10-22-v3/README.md).

## Implementation sources

- [src/App.tsx](../src/App.tsx): structure, copy, CTA, props, alignment and mounting of `ProcessSection` below `.hero` in the current source baseline.
- [src/styles.css](../src/styles.css): composition, themes, typography, cue animation and `.process-*` styles.
- [src/components/ScrollCue.tsx](../src/components/ScrollCue.tsx): 6 · 3 · 1 segment scaffold, native `#processo` link, pause/resume.
- [src/components/ProcessSection.tsx](../src/components/ProcessSection.tsx): architectural ledger for the three `#processo` steps in the current source baseline.
- [components/ui/kinetic-matrix.tsx](../components/ui/kinetic-matrix.tsx) and [lib/matrix-motion.ts](../lib/matrix-motion.ts): grid, interaction field and warp.
- [src/assets/augeo-lettering.svg](../src/assets/augeo-lettering.svg): striped brand and counters.

## Decisions incorporated into the current baseline

| Decision | Origin and effect | State |
| --- | --- | --- |
| Preserve identity | Refine original symbol, striped lettering, local fonts and modular field; moodboard informs principles rather than a replacement identity | Incorporated |
| Revise heading and supporting text | Adopted message: “Presença digital com direção.”; business context connects brand, website, acquisition and digital operations | Incorporated |
| Keep desktop 44/56 | Matrix field as a graphic counterpoint to text; restored after rejection of the 38/62 experiment | Incorporated |
| Size heading by column | Initial weight 750/line-height 0.98 replaced by Hanken 620/1.02; scale by usable width | Incorporated |
| Calibrate signature | Earlier enlargement followed by the approved experimental 5% rescale, pair kerning and baseline calibration; current values are in Themes and brand | Implemented; no global visual closure inferred |
| Align heading and signature | Lettering center follows desktop heading center; on mobile it follows the matrix | Incorporated |
| Align elements on the 48 px axis | On 09/10, approximately 32 px inset was deemed too close to the edge; user authorized 48 px for brand, heading, supporting text and triangles | Incorporated |
| Increase supporting text presence | 18–24 px scale and 20 px mobile insets; subsequently measure condensed to 34ch and desktop margin to 28 px | Incorporated |
| Remove EXPLORE | After restoring composition, user requested removal of the word and its arrow, retaining triangles | Incorporated |
| Alternate triangle contrast | Enlarge geometry by 50%, reduce frequency to 2.8 s per pass, preserve tip and switch colors each pass | Incorporated |
| Unify themes and extend pointer field | Dark theme also covers text column; hero listeners allow reaching the matrix from the left panel | Incorporated |
| Panel materiality and CTA | Subtle radial illumination, 1 px divider and commercial CTA in the text panel | Incorporated |
| Expose CTA and transform mobile | Entire matrix as rectangular visual footer below copy and conversion button, with symmetric insets and vertical scrolling through the matrix | Incorporated; naming reaffirmed by user on 13/10 |
| Keep continuous mobile background | Background correction behind header approved by user; one panel covers symbol and text | Incorporated and approved |
| Preserve counters | Direct A/O path filling with `evenodd` without changing geometry or interaction | Incorporated |

Implementation does not equal global visual approval. Approval of the mobile background correction is specific and does not close all of block 2.

## Evaluations and decisions still open

| Topic | Remaining decision or evaluation | Limit |
| --- | --- | --- |
| Desktop composition | User evaluation after alignment, larger supporting text, panel and cue | No recorded global visual closure |
| Mobile hero | Check published version on the user's device | Background correction approved; device evaluation is distinct |
| Deployed counters | Visually confirm A/O in the browser and viewport reported on 11/10 | SVG correction already published; no new publication pending for this reason |
| Continuation integration | Evaluate native `<a href="#processo">` link and `#processo` section in a browser | Source is included in the main merge `b107bc5`; deployment not rechecked; preserve the approved Process baseline and do not restore EXPLORE |
| Sales intake | Configure conversational reception and human handoff | Direct WhatsApp links connected on 2026-10-27; automation and handoff remain unconfigured |
| Matrix introduction | Entry completed within four seconds, then rest and discrete responses | Block 3 not yet implemented; current loops continue. Do not extend this proposal to triangles without a separate decision |
| Warp performance | Optimize and compare at DPR 2 while preserving the image | Block 4 depends on evaluation of the previous block |
| System record | Extract `DESIGN.md` from implementation | Block 5 not started; do not replace it with a historical report |
| Finishing | Integrated validation and full `polish` workflow | Block 6 not started |
| 4K scale | Heading/signature limits made composition sparse in the historical iteration | Observation, no new direction authorized |

Block 1 was recorded as complete. Block 2 was implemented and iterated, with visual and methodological items pending. No authorization to automatically advance to block 3. The 07/10 audit is a historical baseline; findings must be reconciled with implementation before guiding a new task.

## Figma proposals - independent workstream

Request on 10/10: invert the hierarchy of the [AUGEO HERO](https://www.figma.com/design/wtc641vxh05ubxXIgrtzMy/AUGEO-HERO?node-id=5-45) reference, with dark left column, light matrix and inverted brand/typography. Dimensions, 44/56 split, positions, typography and masks would be preserved. This edit did not mandate a permanent landing change.

The proposal for two light tones of different intensities in the Figma triangles was neither applied nor evaluated. It does not authorize a new web animation. Local preview used left `#111111`, heading `#f7f7f5`, supporting text `#b7b7b2`, inverted brand and triangles `#e2e2df`/`#858580`. Figma lettering is its own vector; the web preview does not prove pixel-perfect equivalence.

The user authorized preparing local snapshots for manual import, clarifying that the MCP limit did not prevent this route. PNGs missing at the previous check were present locally on 17/10: `docs/refs/figma/augeo-matrix-light-2x.png` and `docs/refs/figma/augeo-hero-dark-left-light-matrix-preview-2x.png`, still untracked by Git. Local availability does not prove provenance, visual equivalence, import into fill `5:30`, vector inversion, evaluation or edit completion. Check artifact suitability before resuming the manual route; technical evidence is in [history](archive/EXECUTION_HISTORY.md).

## Current block plan

This sequence preserves original plan workflows without reviving superseded choices. Procedure: [WORKFLOW](WORKFLOW.md#impeccable); execution scope: AGENTS.

| Block | Workflows and work | State and exit condition |
| --- | --- | --- |
| 1 - Message and integrity | `clarify`, `harden`: truthful copy and removal of the false EXPLORE action | Historical completion for that target; does not certify the current commercial CTA, whose section does not yet exist. |
| 2 - Visual evolution | `shape`, `bolder`, `layout`, `typeset`, `adapt`: hierarchy, typography and responsive composition | Implemented and iterated; global visual evaluation and reconciliation of methodological stages remain pending. |
| 3 - Motion | **Deferred — Luca, 2026-10-24:** the hero typography entrance reveal (and magnetic CTA step) resumes after the Process work. `animate`: matrix entry within four seconds, including pulse termination; then rest with local responses | Not implemented. Do not apply this limit to triangles without a specific decision; preserve ambient demo and allow interaction after introduction. |
| 4 - Performance | `optimize`: locate bottleneck and compare before/after in the same DPR 2, 1440×900 scenario, pointer over lettering + click | Pending after previous block evaluation. Record callback median/p95 and long tasks; preserve resolution, stripes, counters, interpolation and return to rest. |
| 5 - Visual system | `document`: extract system from implementation, with confirmation/refinement and playbook-required artifacts | DESIGN.md, sidecar and formal surface brief pending. This file does not replace them. `extract` only for actual reuse work. |
| 6 - Finishing | `polish`: verify in-scope path and findings still accepted | Pending. No formal critique snapshot; use manual findings and valid evidence without fabricating workflows or an audit score. |

For motion, `motionMode?: 'ambient' | 'intro'` was an interface proposal; it does not exist in the current component and adoption must be evaluated during implementation. For warp, precomputing the horizontal map and reusing buffers are hypotheses to measure, not demonstrated gains.

### Current verification criteria

- Within the hero, preserve identity, 44/56 split, unified themes, legible copy, mobile with lower matrix/visible CTA and decorative cue. Do not restore EXPLORE, mobile side strip, split theme, hidden CTA or rejected 38/62 experiment.
- Compare composition at rest, light/dark and reduced motion before evaluating animation. Cover 1440×900, 900×600, 768×600, 390×844 and 320×740, plus extremes pertinent to the target.
- Content and cue remain separate; desktop may grow and scroll. Text enlargement must not clip content or cause horizontal overflow. Enlarged root font is not native zoom.
- On normal mobile, preserve the full signature on the first screen in existing test contexts; with enlarged text, prioritize reading and natural flow.
- For motion changes, verify introduction/rest/interaction, cancellation, exact return, reduced-motion preference changes, off-screen and hidden-tab states. Preserve touch/scroll, letters and counters.
- Verification procedure and reporting: WORKFLOW; report Chromium/emulation coverage without claiming other engines or physical devices.

Old criteria and the 13/20 score belong to the [historical audit](archive/HERO_AUDIT_2026-10-07.md). Alternatives and their rejection are in [history](archive/EXECUTION_HISTORY.md#alternativas-visuais-superadas). The 16/10 collision correction is implemented/published with user visual evaluation still pending; it does not close block 2.

## Responsive implementation update — 2026-10-21

The desktop/mobile sections above incorporate the Process breakpoint and panel-size update. Dated evidence: [history](archive/EXECUTION_HISTORY.md#2026-10-21--supplied-proportional-grid-explicit-theme-button-and-optical-refinement).

## Open composition scope — 2026-10-21

Post-hero composition and Process experiment are owned by the [specification](02-WEBSITE_SPEC.md#5-public-process).
