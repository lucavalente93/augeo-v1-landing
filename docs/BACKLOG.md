# Project backlog

Updated on 2026-10-30. Current state, latest delivery and active workstream queue for direct CLI sessions (`agy` and `codex`). Coordination and context contract: [ORCHESTRATION](ORCHESTRATION.md). Earlier deliveries and evidence: [history](archive/EXECUTION_HISTORY.md).

## Latest delivery — Conceptual rules recalibration, documentation consolidation & direct CLI workflow — 2026-10-30

1. **Task-isolated promotion to `main` & `dev` (`2727535` → `530871f`):**
   - Restored `.site-mobile-footer` (`2727535`) below `1024px` (`display: block; container-type: inline-size;`).
   - Added vertical gradient mask to `.brand-stage-grid` (`1b984f0`), refined `:is(.hero-cta, .process-cta)` `cubic-bezier(0.16, 1, 0.3, 1)` transitions and Dark hover glow (`76f0001`), and defined `--process-step-hover-bg` (`326684c`). Pushed to `origin/main` and `origin/dev`.
2. **Conceptual rules recalibration & documentation deduplication:**
   - **Three-tier design boundaries ([specification §7](02-WEBSITE_SPEC.md#7-visual-direction)):** Separated **Tier 1 Core Invariants** (no fabricated proof, no 3-card SaaS templates or `point–rule–tag` stage badges, no unauthored stock/3D filler, and no stacking redundant `double-bezel` sleeves or `button-in-button` icon boxes onto self-contained optical/kinetic components like `ShinyButton` or `.hero-cta`) from **Tier 2 Contextual / Role-Based Decisions** (navbars/floating pills are currently unnecessary rather than prohibited; role-based geometry pairs `0–2px` structural grids with `12px` self-contained optical hardware; continuous ambient loops and `0.38` progressive focus dimming are intentional; only the header `[DARK]`/`[LIGHT]` toggle widget is a scaffold while Dark/Light surface calibration is active polish).
   - **Design-skill translation protocol ([WORKFLOW](WORKFLOW.md#shared-skills-and-design-stages)):** Documented how opinionated taste and motion skills (`high-end-visual-design`, `design-taste-frontend`, `gpt-taste`, `impeccable`) propose ideas without self-censorship while translating generic bans into AUGEO's architectural language.
   - **Canonical deduplication & direct CLI workflow:** Consolidated `docs/3D_MONOGRAM_REPORT.md` into [specification §8](02-WEBSITE_SPEC.md#current-brand-stage-quality-and-comparison--2026-10-29) (archiving the dated report at [2026-10-27-3d-monogram-report.md](archive/2026-10-27-3d-monogram-report.md)), merged duplicate `docs/architecture-reference.md` into [stack-referencia-4-camadas.md](refs/stack-referencia-4-camadas.md), reconciled `ScrollCue` (8-segment arrow, `6.00s` cascade) and theme tokens (`#e6e6e2` light) in [HERO.md](HERO.md), and retired Paperclip ticket/dashboard tracking in favor of direct execution across separate CLI agent sessions ([ORCHESTRATION.md](ORCHESTRATION.md)).

**Next action:** Await Luca's visual evaluation of Process critique item #1 (`#processo`). Only after full approval, revisit **#2 (rules/type relationships)** and then **#3 (closing narrative/hierarchy)**. Monolith 3D static render revision (`#entrada`) awaits Luca's new camera/safe-zone renders (25–30% margin).

## Current state

This file is the canonical project queue and state summary, coordinated directly by Luca across separate CLI agent sessions (`agy` and `codex`). Current requirements live in the registered [specification](02-WEBSITE_SPEC.md), [Hero](HERO.md) and [workflow](WORKFLOW.md); historical learning and dated verification stay in the archive/review system and remain navigable through derived Obsidian views. Read [ORCHESTRATION](ORCHESTRATION.md#current-work-and-historical-knowledge) for source resolution and view synchronization.

- Hero/matrix identity, 8-segment `ScrollCue`, scroll-drawn Process grid with quiet desktop `+` joints ([specification §5](02-WEBSITE_SPEC.md#5-public-process)), `BrandImmersiveStage` (`#entrada`) and `.site-mobile-footer` are live on `main`/`dev`.
- Only the header `[DARK]`/`[LIGHT]` toggle button is a development scaffold; Dark and Light theme surfaces, contrasts and hover states are actively calibrated. Copy remains provisional.
- WhatsApp Business direct contact (`+55 44 99183-2843`) is connected through both conversion CTAs; chatbot automation and human handoff remain unconfigured ([specification §6](02-WEBSITE_SPEC.md#6-sales-intake-and-form)).
- Earlier [archived Process explorations](archive/EXECUTION_HISTORY.md#2026-10-27--superseded-process-exploration-archive) and [restrained intersection checks](archive/EXECUTION_HISTORY.md#2026-10-27--restrained-process-intersections) remain documented in execution history.

## Priority continuity - agent architecture

**Updated on 2026-10-30:** Paperclip (`127.0.0.1:3100`), its task-runner bridge and `AUG-*` ticket tracking are retired from active operation. Luca runs and coordinates tasks directly in separate Antigravity (`agy`) and Codex (`codex`) CLI sessions over local Git branches (`main` and `dev`), using `augeo-orchestrator context` / `views` strictly for shared Markdown context resolution and Obsidian view synchronization. Historical pilot findings (`AUG-1` through `AUG-13`) remain archived in [history](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18).

## Queue by workstream

Approval gates and task ordering are directed by Luca in the CLI workflow and recorded here.

| Workstream | Current status / gate | Canonical source / next dependency |
| --- | --- | --- |
| Process #1 | Implemented on `main`, awaiting Luca's visual review | [Specification §5](02-WEBSITE_SPEC.md#5-public-process); full visual review of scroll-drawn lines and `+` joints pending. |
| Process #2 | Queued (`layout`/`polish`) | Rules/type relationships; gated on full approval of Process #1. |
| Process #3 | Queued (`clarify`/`layout`) | Closing narrative/hierarchy; gated on Process #1 and #2. |
| Brand imagery / stage | Awaiting new 3D renders | [Brand Stage quality & safe-zone brief](02-WEBSITE_SPEC.md#3d-brand-imagery-exploration--2026-10-27); new static render with 25–30% safe zone prioritized before reflection. |
| Hero | Block 2 live on `main`; Block 3 deferred | [HERO](HERO.md#current-block-plan); holistic multi-device sign-off with Luca; optional entrance/magnetic motion deferred until after Process. |
| Landing / intake | Direct WhatsApp live; bot pending | [Specification §6](02-WEBSITE_SPEC.md#6-sales-intake-and-form); define conversational bot automation and human handoff. |
| Technical cleanup | Backlog | [Specification §10](02-WEBSITE_SPEC.md#10-implementation); evaluate unused CSS selectors (`.brand-stage-cta*`, `.process-cta`, `.process-closing`) and legacy specs when requested. |
| Figma | Independent study paused | [HERO proposals](HERO.md#figma-proposals---independent-workstream); verify PNG suitability/provenance before resuming manual Figma import. |
| Publication | Live on Vercel (`main`); metadata pending | [Technical baseline](02-WEBSITE_SPEC.md#10-implementation); canonical/redirect/metadata decisions pending, Vercel Pro postponed. |
