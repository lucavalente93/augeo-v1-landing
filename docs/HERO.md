# Hero - state, decisions and continuity

Implementation checked against code on 2026-10-16; documentation reorganized on 2026-10-17. Composition sections describe what exists; decisions and proposals have explicit states. Execution and queue: [BACKLOG.md](BACKLOG.md). Procedures: [WORKFLOW.md](WORKFLOW.md). Landing requirements: [specification](02-WEBSITE_SPEC.md).

## Concept and hierarchy

AUGEO presents itself through business context and the connection between brand, website, acquisition and digital operations. The hero fulfills the Persuade role: editorial message on the left and AUGEO signature in the matrix field on the right. The composition itself demonstrates direction and execution without adding undocumented clients, metrics or promises.

The language combines **precise structure and unstable behavior**: solid, legible heading, striped lettering, modular grid and localized deformation. Symbol, lettering and local fonts support the identity. The moodboard guides geometry, rhythm and hierarchy; its images are not decoration to incorporate into the page. References are in the [plan appendix](archive/HERO_AUDIT_2026-10-07.md#anexo-c--moodboard-e-rastreabilidade).

Applied copy (Portuguese, preserved):

- Heading: “Presença digital com direção.”, in three lines.
- Supporting text: “O contexto do seu negócio define como conectamos marca, website, aquisição e operação digital.”
- Conversion button: “Apresentar negócio”, targeting `#entrada`.

The graphic signature counterbalances the heading; supporting text is grouped with the message, and the continuation cue occupies the lower left edge on desktop. The static composition preserves brand readability when the visitor prefers reduced motion.

## Desktop composition

From 768 px, the hero uses two **44/56** columns with a minimum height of 100dvh. The text column contains symbol, heading, supporting text and CTA; the matrix fills the right panel. Brand, text, CTA and triangles share a **48 px** inset. The header is absolutely positioned over the text column, with height 96 px and symbol 66 px.

The heading uses local Hanken Grotesk, weight **620**, line-height **1.02** and tracking **−0.035em**. Scale responds to the column's usable width (`clamp(2rem, 19.5cqw, 6rem)`), with three spans, maximum width 11ch and 2 px below for descenders. Supporting text uses line-height 1.5, maximum width 34ch and 18–24 px scale; short windows have dedicated scale and spacing adjustments.

The text panel has 2% white radial illumination over the theme background, with a 1 px vertical divider. The CTA uses inverted theme colors, orange focus, hover glow and scale reduction on press. It stays on one line on desktop.

## Mobile composition

Below 768 px, header and hero follow vertical flow. The header is 70 px high with a 58 px symbol and 20 px inset. Copy uses symmetric 20 px insets; heading, supporting text and CTA precede the matrix. The CTA remains visible with minimum height 44 px and top margin 24 px.

The entire matrix was repositioned as the **mobile hero's visual footer**, full width with height `clamp(140px, 22dvh, 180px)`, a 1 px top divider and automatic margin above. Lettering is centered in this panel and uses `min(85%, 360px)`. `touch-action: pan-y` allows vertical scrolling through the matrix area.

The copy surface extends across the header's 70 px: a single background covers symbol and text down to the matrix without restarting illumination at the header/hero boundary. The triangle cue is hidden on mobile.

## Themes and brand

| Element | Light | Dark |
| --- | --- | --- |
| Background | `#f7f7f5` | `#06070a` |
| Text | `#111111` | `#f7f7f5` |
| Supporting text/cue at rest | `#61615d` | `#9e9ea2` |
| Borders | black at 8% | white at 8% |
| Accent/focus | `#ff482c` | `#ff482c` |

System preference and explicit `.light`/`.dark` classes control themes. In dark mode, the symbol is inverted at opacity 0.92 and lettering at 0.88. The matrix CSS background uses the theme token; canvas draws its corresponding surface. The hero CRT layer has subtler scanlines than the demo: 0.03 in light and 0.0567 in dark.

Lettering preserves geometry, proportions, stripes and counters. In the SVG, “A” and “O” declare `fill-rule="evenodd"` directly on paths filled by the CRT pattern. Desktop width is `min(88%, 680px)`; vertical center follows the heading center, measured in the hero and published as `--hero-heading-center-y`. Alignment observes hero, heading, supporting text and CTA. On mobile, the center is the matrix center.

## Persistent matrix and interaction

`KineticMatrix` remains a shared component with demo at `?demo=matrix`. The hero passes `title="AUGEO"`, `titleArtworkSrc`, `enableArtworkMotion` and `gridSpacing={72}`; the demo default is 58 px. The grid adapts spacing to available dimensions, preserving nodes and links within the visible field.

The hover-reactive composition is already implemented: grid and lettering respond to the same pointer/wave field, with an independent scale for the image. Pointer tracking also operates on the `.hero` ancestor, including the left column; click/touch creates a wave. At interaction end, deformation converges to rest without rebound. Warp uses a horizontal map shared by scanlines to avoid breaking letters, with maximum displacement 6 px and maximum difference 2 px between samples 8 px apart.

The current matrix lifecycle maintains continuous automatic pulses alongside discrete responses. It pauses off-screen and when the document is hidden; reduced motion keeps grid and lettering static. Technical `0x…` labels still appear after prolonged node inspection.

## Continuation cue

Two solid triangles communicate downward direction on desktop: each measures 36×27 px, the second 18 px below the first with 9 px overlap. The 36×45 px pair is centered in a 36×63 px container. Separate SVGs ensure the active tip is fully painted at the intersection.

One pass occurs every **2.8 s**, with a **980 ms** offset between triangles. The 5.6 s CSS cycle contains two passes: light upper/dark lower, then dark upper/light lower, using `#e2e2df` and `#20201f`. Initial delays are 300/1280 ms. The change affects fill and paint order while keeping geometry stationary. Pausing off-screen/with a hidden tab preserves time and phase; reduced motion uses static gray.

On desktop, the cue participates in `.hero-copy` flow after the `.hero-content` group (heading, supporting text and CTA). Automatic vertical margins center this group in available space; the cue sits near the panel base with minimum top margin 32 px and bottom inset 28 px. It does not shrink in flex: larger or intrinsically sized variants reserve their own space. When content exceeds window height, the hero grows and the page scrolls; no viewport-based vertical coordinate or duplicated cue height in clearance calculations. The matrix follows hero height.

On `main`, the cue remains decorative (`aria-hidden`, no click or focus). On branch `section-process`, with `#processo` implemented (`src/components/ProcessSection.tsx`), `ScrollCue` was activated on desktop as a native link `<a className="scroll-cue" href="#processo" aria-label="Conhecer nosso processo">`, preserving geometry, `aria-hidden="true"` SVGs, Web Animations lifecycle and mobile hiding. Its meaning remains scroll continuation to Process; the commercial CTA still targets `#entrada` (section not yet implemented). EXPLORE and the earlier arrow are not part of the hero.

## Implementation sources

- [src/App.tsx](../src/App.tsx): structure, copy, CTA, props, alignment and mounting of `ProcessSection` below `.hero` on `section-process`.
- [src/styles.css](../src/styles.css): composition, themes, typography, cue animation and `.process-*` styles.
- [src/components/ScrollCue.tsx](../src/components/ScrollCue.tsx): triangles, native `#processo` link on `section-process`, pause/resume.
- [src/components/ProcessSection.tsx](../src/components/ProcessSection.tsx): architectural ledger for the three `#processo` steps on branch `section-process`.
- [components/ui/kinetic-matrix.tsx](../components/ui/kinetic-matrix.tsx) and [lib/matrix-motion.ts](../lib/matrix-motion.ts): grid, interaction field and warp.
- [src/assets/augeo-lettering.svg](../src/assets/augeo-lettering.svg): striped brand and counters.

## Decisions incorporated into the current baseline

| Decision | Origin and effect | State |
| --- | --- | --- |
| Preserve identity | Refine original symbol, striped lettering, local fonts and modular field; moodboard informs principles rather than a replacement identity | Incorporated |
| Revise heading and supporting text | Adopted message: “Presença digital com direção.”; business context connects brand, website, acquisition and digital operations | Incorporated |
| Keep desktop 44/56 | Matrix field as a graphic counterpoint to text; restored after rejection of the 38/62 experiment | Incorporated |
| Size heading by column | Initial weight 750/line-height 0.98 replaced by Hanken 620/1.02; scale by usable width | Incorporated |
| Enlarge signature | Lettering moved from a 527 px limit to `min(88%, 680px)` in desktop hero, preserving SVG and proportions | Incorporated |
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
| Continuation integration | Evaluate native `<a href="#processo">` link and `#processo` section implemented on branch `section-process` in a browser | Implemented on `section-process` (`AUG-12`/`AUG-11`); `main` remains without `#processo` until approval; do not restore EXPLORE |
| Sales intake | Connect “Apresentar negócio” to the real `#entrada` form | CTA and continuation have different destinations; section still absent |
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

This sequence preserves original plan workflows without reviving superseded choices. Read the applicable playbook in full during execution, per [WORKFLOW.md](WORKFLOW.md#impeccable). Do not execute pending blocks merely because they are documented.

| Block | Workflows and work | State and exit condition |
| --- | --- | --- |
| 1 - Message and integrity | `clarify`, `harden`: truthful copy and removal of the false EXPLORE action | Historical completion for that target; does not certify the current commercial CTA, whose section does not yet exist. |
| 2 - Visual evolution | `shape`, `bolder`, `layout`, `typeset`, `adapt`: hierarchy, typography and responsive composition | Implemented and iterated; global visual evaluation and reconciliation of methodological stages remain pending. |
| 3 - Motion | `animate`: matrix entry within four seconds, including pulse termination; then rest with local responses | Not implemented. Do not apply this limit to triangles without a specific decision; preserve ambient demo and allow interaction after introduction. |
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
- For functional changes, run pertinent build and suite per WORKFLOW; for visuals, use rendered inspection and the applicable detector. Chromium/emulation results do not prove physical devices or other engines.

Old criteria and the 13/20 score belong to the [historical audit](archive/HERO_AUDIT_2026-10-07.md). Alternatives and their rejection are in [history](archive/EXECUTION_HISTORY.md#alternativas-visuais-superadas). The 16/10 collision correction is implemented/published with user visual evaluation still pending; it does not close block 2.

## Responsive implementation update — 2026-10-21

At Luca's explicit request on branch `section-process`, the hero's two-column layout now starts at 1024px. Below that breakpoint the existing stacked copy/matrix composition extends to tablets, and the matrix panel uses `clamp(220px, 35dvh, 340px)` with a 220px minimum. The continuation cue now shares the 1024px desktop threshold (updated by the subsequent theme/grid request). These scoped changes supersede earlier panel dimensions/breakpoints; they do not close the pending global hero evaluation.

The supplied Antigravity blueprint and subsequent theme/grid refinement produced the current experiment in `#processo`: adaptive Dark AUGEO / Full White surfaces, proportional grid with intersection nodes, unnumbered stages, theme-calibrated chromatic hover and a desktop 44/56 sticky manifesto beside the scrolling lead and steps. The header now exposes a rudimentary `[DARK]` / `[LIGHT]` button; state initially follows existing root classes or system preference, then applies mutually exclusive root classes. The existing matrix MutationObserver immediately redraws theme colors, including with reduced motion. The grid uses 25cqw below 1024px and 14cqw with a 2cqw horizontal offset on desktop; both section and panel establish inline-size containers so the panel background resolves against actual section width. Real ledger/footer borders replace the simulated divider; the lead receives 12px optical compensation. The footer remains below both columns. Reduced-motion transition suppression and touch scrolling are preserved. This is implementation of the supplied direction, pending human visual evaluation; no new Impeccable conception workflow was initiated.


## Open composition scope — 2026-10-21

Luca clarified that all compositions after the hero remain experimental. The current Process proportions and the earlier 12-column alternative are neither final requirements nor templates for the rest of the landing. Hero-specific constraints apply to the hero only; subsequent sections may explore independent proportions, alignments and hierarchy.
