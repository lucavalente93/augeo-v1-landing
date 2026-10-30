# Hero - state, decisions and continuity

Current composition reconciled with the committed `main`/`dev` source baseline on 2026-10-30 (`530871f`). Execution and queue: [BACKLOG.md](BACKLOG.md). Validation and design skills: [WORKFLOW.md](WORKFLOW.md). Page-wide visual system and landing requirements: [specification](02-WEBSITE_SPEC.md).

## Concept and hierarchy

AUGEO presents itself through business context and the connection between brand, website, acquisition and digital operations. The hero fulfills the Persuade role: editorial message on the left and AUGEO signature in the matrix field on the right. The composition itself demonstrates direction and execution without adding undocumented clients, metrics or promises.

The [visual direction](02-WEBSITE_SPEC.md#7-visual-direction) is expressed through solid heading, striped lettering, modular grid and localized deformation. Moodboard references: [plan appendix](archive/HERO_AUDIT_2026-10-07.md#anexo-c--moodboard-e-rastreabilidade).

Applied copy (Portuguese, preserved):

- Heading: “Presença digital com direção.”, in three lines.
- Supporting text: “O contexto do seu negócio define como conectamos marca, website, aquisição e operação digital.”
- Conversion button: “Entre em contato”, opening the confirmed [WhatsApp destination](02-WEBSITE_SPEC.md#6-sales-intake-and-form) in a new tab.

The graphic signature counterbalances the heading; supporting text is grouped with the message, and the continuation cue occupies the lower left edge on desktop. The static composition preserves brand readability when the visitor prefers reduced motion.

## Desktop composition

From `1024px`, the hero uses two **44/56** columns with a minimum height of `100dvh`. The text column contains symbol, heading, supporting text and CTA; the matrix fills the right panel. Brand, text, CTA and continuation link share a **48px** inset. The header is absolutely positioned over the text column, with height `96px` and symbol `66px` (plus the `[DARK]`/`[LIGHT]` development switch). Compact desktop heights (`<= 768px`) place `ScrollCue` in normal flow after the CTA (`margin-top: 32px`) so controls never overlap.

The heading uses local `Hanken Grotesk`, weight **620**, line-height **1.02** and tracking **−0.035em**. Scale responds to the column's usable width (`clamp(2rem, 19.5cqw, 6rem)`), with three spans, maximum width `11ch` and `2px` below for descenders. Supporting text uses `Libre Franklin`, line-height `1.5`, maximum width `34ch`, `text-wrap: pretty` and `18–24px` scale (`clamp(1.125rem, 1.6vw, 1.5rem)`).

The text panel has subtle radial illumination over `--background`, with a `1px` vertical divider. The `.hero-cta` uses inverted theme colors (`border-radius: 2px`), `cubic-bezier(0.16, 1, 0.3, 1)` transitions, `4px` trailing arrow translation on hover, orange hover in Light mode (`#ff482c`), tactile radial glow in Dark mode (`box-shadow: 0 0 28px rgba(255, 255, 255, 0.22)`), and `scale(0.98)` on press.

## Mobile composition

Below `1024px`, header and hero follow vertical flow. The header is `70px` high with a `58px` symbol and `20px` inset; `.hero-copy::before` extends `-70px` upward to unify header and hero in one continuous panel with radial vignette and a 3-column grid (`calc(100cqw / 3)`) aligned with `#processo`. Copy uses symmetric `20px` insets; heading, supporting text, CTA (`min-height: 44px`, `margin-top: 28px`) and `ScrollCue` follow in order, occupying ~65–70% of the initial viewport.

The full `KineticMatrix` component renders as the **site mobile footer** (`.site-mobile-footer`), full width at the end of `<main>` below `#entrada` (`BrandImmersiveStage`) with height `clamp(140px, 22dvh, 180px)`, `display: block`, `container-type: inline-size`, a `1px` top divider and `touch-action: pan-y`. Lettering is centered in this panel at `min(80.75%, 342px)` with `transform: none`.

## Themes and brand

Page-wide theme tokens (`#06070a` dark, `#e6e6e2` light, `#ff482c` accent) and design boundaries are owned by [specification §7](02-WEBSITE_SPEC.md#7-visual-direction). Within the hero and `KineticMatrix`:

| Hero / Matrix Element | Light (`.light`) | Dark (`.dark`) |
| --- | --- | --- |
| Surface (`--background` & canvas) | `#e6e6e2` | `#06070a` |
| Foreground (`--foreground`) | `#111111` | `#f7f7f5` |
| Supporting text (`--muted-foreground`) | `#5a5a56` | `#9e9ea2` |
| CRT scanline alpha (`--crt-line` in `.hero-matrix`) | `0.03` (`0.028` in demo) | `0.0567` (`0.085` in demo) |
| Symbol / lettering inversion | `filter: none`, opacity `1` | `filter: invert(1)`, symbol `0.92` / lettering `0.88` |

The matrix `MutationObserver` redraws immediately on root class changes, including under reduced motion.

Lettering (`src/assets/augeo-lettering.svg`) preserves geometry, proportions, stripes and counters (`fill-rule="evenodd"` on “A” and “O”). Desktop width is `min(83.6%, 646px)`. The heading center is published as `--hero-heading-center-y`; baseline snap uses `122/126` of the artwork height on the `72px` grid, with CSS translation `3px` horizontally and `calc(var(--hero-artwork-offset-y, 0px) + 4px)` vertically. Optical kerning uses separate SVG letter groups (`A·U·G·E·O`); flat bases of `A` and `E` end at `133u`. On mobile, lettering centers inside `.site-mobile-footer`.

## Persistent matrix and interaction

`KineticMatrix` (`components/ui/kinetic-matrix.tsx`) is shared between `.hero`, `.site-mobile-footer` and `?demo=matrix`. The hero and mobile footer pass `title="AUGEO"`, `titleArtworkSrc={augeoLettering}`, `enableArtworkMotion` and `gridSpacing={72}` (demo default is `58`).

Grid and lettering respond to the shared pointer/wave field (`lib/matrix-motion.ts`). Pointer tracking operates across the `.hero` ancestor (including the left text column); click/touch emits a radial wave. At interaction end, deformation converges smoothly to rest. Horizontal scanline warp is capped at `6px` maximum displacement (`2px` max delta across `8px` vertical intervals) to preserve letter integrity.

The matrix lifecycle maintains continuous ambient pulses alongside pointer/click waves, pausing automatically when off-screen (`IntersectionObserver`) or when the tab is hidden (`visibilitychange`), and remaining completely static under `prefers-reduced-motion: reduce`. Technical `0x…` node coordinates appear on prolonged node inspection.

## Continuation cue

The native link to `#processo` (`src/components/ScrollCue.tsx`) implements the **8-segment CRT Scanline Modular Arrow** (overhauled on 2026-10-28, superseding the earlier `6 · 3 · 1` triangle and Striped Shutter scaffolds):
- **Geometry (`76×82px` link, `68×74px` drawing field):** 3 vertical shaft slats (`16×6px`, 2 scanlines each at `y = 0, 15, 30`), 4 symmetric 45° diagonal wing slats (`16×6px` outer pair at `y = 38`, inner pair at `y = 50`), and 1 apex tip anchor (`16×9px`, 3 scanlines at `y = 62`), all rendered at integer pixel coordinates with a `10–12%` `currentColor` aperture plate.
- **Downward cascade & echo (`6.00s` persistent GSAP cycle):**
  1. *Phase 1 (`0.00s → 0.86s`):* Energy sweeps down the shaft and wing pairs (`0.18s` stagger) with `--cue-mix: 1` (`#ff482c` accent) and orange phosphor `drop-shadow`.
  2. *Phase 2 (`0.86s → 1.10s`):* Apex tip strikes full orange (`TIP_GLOW`) and micro-compresses downward (`y: 1.5px`), settling back to `y: 0` by `1.60s`.
  3. *Phase 3 (`1.10s → 2.50s`):* Tip holds and slowly fades orange into resting theme color (`power2.out`), while wings and shaft echo in regular `currentColor` opacity with a subtle upward gravity pull (`y: -1.0px` to `-1.5px`).
  4. *Phase 4 (`2.50s → 6.00s`):* Anchored rest at `0.45` slat / `0.80` tip opacity, with a subtle pre-charge blip on `shaft-0` at `5.70s`.
- **Hover decoupling & theme resilience:** Framer Motion hover spring (`y: 5`, `stiffness: 320, damping: 24`) is lifted to the parent `.scroll-cue-field` container so Motion and GSAP never contend over segment `transform`. Theme toggles update CSS variables via `color-mix` without recreating or leaking the GSAP timeline. Offscreen/tab suspension and `prefers-reduced-motion` static fallback (`tip` at opacity `1` in `--accent`) are preserved.

## Implementation sources

- [src/App.tsx](../src/App.tsx): page shell, theme state, hero baseline observer and mounting of `ProcessSection`, `BrandImmersiveStage` and `.site-mobile-footer`.
- [src/styles.css](../src/styles.css): tokens, themes, hero/mobile-footer rules, `.scroll-cue*`, `.process-*` and `.brand-stage*`.
- [src/components/ScrollCue.tsx](../src/components/ScrollCue.tsx): 8-segment CRT modular arrow, GSAP cascade and Motion hover spring.
- [components/ui/kinetic-matrix.tsx](../components/ui/kinetic-matrix.tsx) and [lib/matrix-motion.ts](../lib/matrix-motion.ts): grid, interaction field and scanline warp.
- [src/assets/augeo-lettering.svg](../src/assets/augeo-lettering.svg): striped wordmark, optical kerning groups and counters.

## Decisions incorporated into the current baseline

| Decision | Origin and effect | State |
| --- | --- | --- |
| Preserve identity | Refine original symbol, striped lettering, local fonts and modular field | Incorporated |
| Revise heading and supporting text | “Presença digital com direção.” + context-first subheadline | Incorporated |
| Keep desktop 44/56 & 48px axis | Matrix field as graphic counterpoint; `48px` left inset for brand, copy, CTA and cue | Incorporated |
| Size heading by column | `Hanken Grotesk` 620 / `1.02` line-height / `-0.035em` tracking | Incorporated |
| Calibrate signature | 5% rescale (`min(83.6%, 646px)`), `A·U·G·E·O` optical kerning and `122/126` grid baseline snap | Incorporated |
| Unify themes and extend pointer field | Root `.dark`/`.light` classes cover all sections (`#e6e6e2` light / `#06070a` dark); hero pointer listeners reach matrix from left panel | Incorporated |
| Panel materiality and CTA | Radial vignette, `1px` divider, WhatsApp `Entre em contato` CTA with `cubic-bezier(0.16, 1, 0.3, 1)` and Dark hover glow | Incorporated |
| Mobile flow and matrix footer | Continuous header/hero shader + 3-column grid; full `KineticMatrix` restored in `.site-mobile-footer` below `#entrada` (`2727535`) | Incorporated |
| Modular CRT arrow (`ScrollCue`) | 8-segment shaft+wings+tip arrow (`76×82px`) with 6.00s downward sweep and upward gravity echo (`2026-10-28`) | Incorporated |

## Evaluations and decisions still open

| Topic | Remaining decision or evaluation | Limit |
| --- | --- | --- |
| Desktop & mobile visual evaluation | Holistic user evaluation across devices | Specific component fixes are approved; global block closure remains with Luca |
| Hero entrance reveal & magnetic CTA | Deferred by Luca on 2026-10-24 until after Process work | Optional future motion enhancement; ambient matrix/cue loops remain active |
| Warp performance | Measure and optimize only if DPR 2 interaction bottlenecks appear (`Block 4`) | Current RAF and offscreen suspension are stable |
| System record | Extract `DESIGN.md` when visual system stabilizes (`Block 5`) | `02-WEBSITE_SPEC.md` §7 currently holds canonical tokens and rules |

## Figma proposals - independent workstream

Request on 10/10: invert the hierarchy of the [AUGEO HERO](https://www.figma.com/design/wtc641vxh05ubxXIgrtzMy/AUGEO-HERO?node-id=5-45) reference (dark left column, light matrix). Local untracked snapshots exist at `docs/refs/figma/augeo-matrix-light-2x.png` and `docs/refs/figma/augeo-hero-dark-left-light-matrix-preview-2x.png`. Verify artifact suitability before resuming manual Figma import; this independent study does not alter the web landing's unified theme architecture. Technical evidence: [history](archive/EXECUTION_HISTORY.md).

## Current block plan

Procedure: [WORKFLOW](WORKFLOW.md#impeccable); execution scope: [AGENTS](../AGENTS.md).

| Block | Workflows and work | State and exit condition |
| --- | --- | --- |
| 1 - Message and integrity | `clarify`, `harden`: truthful copy, removal of false `EXPLORE`, live WhatsApp CTA | Completed on `main`. |
| 2 - Visual evolution | `shape`, `bolder`, `layout`, `typeset`, `adapt`: hierarchy, optical calibration, responsive composition and `ScrollCue` overhaul | Implemented and iterated on `main`; holistic multi-device sign-off remains with Luca. |
| 3 - Motion | **Deferred — Luca, 2026-10-24:** optional hero typography entrance reveal and magnetic CTA | Deferred until after Process review. Note: the early 07/10 proposal to terminate matrix pulses after 4s is superseded by the approved continuous ambient lifecycle (with offscreen/tab pause). |
| 4 - Performance | `optimize`: DPR 2 `1440×900` lettering warp profiling if needed | Pending on demand. Preserve resolution, stripes, counters and return to rest. |
| 5 - Visual system | `document`: extract formal `DESIGN.md` once all sections settle | Pending; active tokens and 3-tier rules live in [specification §7](02-WEBSITE_SPEC.md#7-visual-direction). |
| 6 - Finishing | `polish`: final integrated pass across the complete landing | Pending completion of Process and Brand Stage render updates. |

### Current verification criteria

- Preserve hero identity, desktop `44/56` split, unified themes, legible copy, `ScrollCue` cascade and `.site-mobile-footer` below `#entrada` on viewports `< 1024px`.
- Check composition across `1440×900`, `1024×600`, `768×1024`, `390×844` and `320×740` in Dark, Light and `prefers-reduced-motion: reduce`.
- Ensure content and `ScrollCue` never collide on compact heights (`<= 768px`) or under 200% root-font enlargement, with zero horizontal overflow.
- For motion changes, verify active loop, pointer/touch response, off-screen and hidden-tab suspension, and reduced-motion static states via `agent-browser` ([WORKFLOW](WORKFLOW.md#bun-and-validation)).
