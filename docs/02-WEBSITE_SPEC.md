# AUGEO Website - Specification

Requirements and implementation reconciled on 2026-10-30 against `main`/`dev` at `530871f`. This specification defines the complete landing, page-wide visual system and section boundaries, distinguishing current implementation from open approval gates. Hero mechanics, SVG lettering, `KineticMatrix` and `ScrollCue`: [HERO.md](HERO.md). Queue and latest delivery: [BACKLOG.md](BACKLOG.md). Validation and design-skill procedures: [WORKFLOW.md](WORKFLOW.md). Dated evidence: [history](archive/EXECUTION_HISTORY.md).

## 1. Website role

Website purpose and priority: [AUGEO.md](AUGEO.md). The landing explains the context-first commercial model and converts suitable businesses into qualified contacts. Until public case studies exist, evidence comes from page quality, process clarity and precise sales intake. Content boundaries are in section 9.

## 2. First-version scope

### Included in the complete landing

- Header (brand return to top + development theme switch)
- Hero (editorial value proposition + interactive `KineticMatrix` + `ScrollCue`)
- Process (`#processo` scroll-drawn architectural ledger)
- Brand Immersive Stage & Commercial Entry (`#entrada` 4K 3D monolith stage + editorial closing + `ShinyButton` CTA)
- Direct WhatsApp Business conversion (`+55 44 99183-2843`), with planned short chatbot screening and human handoff
- Mobile visual footer (`.site-mobile-footer` integrating the `KineticMatrix` signature below `#entrada`)

### Outside this version's scope

- Standalone services or capabilities catalog
- Fabricated portfolio, case studies, clients, metrics or testimonials
- Institutional about/team section
- FAQ
- Internal pages, blog and client area

**Source state — 2026-10-30:** Header, Hero, `ScrollCue`, `ProcessSection`, `BrandImmersiveStage` (with `ShinyButton` and vertical grid mask) and the restored mobile matrix footer are on local and remote `main`/`dev` at `530871f`. Both conversion CTAs connect to confirmed WhatsApp Business (`WHATSAPP_URL`); automated chatbot screening and human handoff remain unconfigured.

## 3. Architecture and flow

| Layer | Function and state |
|---|---|
| Header | Brand symbol returning to `#inicio` and `[DARK]`/`[LIGHT]` development switch; implemented. |
| Hero | Positioning (`Presença digital com direção.`), interactive `KineticMatrix`, `Entre em contato` CTA and `ScrollCue` to `#processo`; implemented. |
| Process (`#processo`) | Explains understanding, priority definition and validated brief/proposal (`ProcessSection.tsx`); implemented on `main`, awaiting full LV visual review (section 5). |
| Brand stage & commercial entry (`#entrada`) | Full-bleed 3D monogram stage, gradient-masked equilateral grid, closing narrative (`A contratação começa pelo diagnóstico.`) and `ShinyButton` (`Apresentar negócio`); implemented on `main` (sections 6 and 8). |
| Mobile footer | Full-width `KineticMatrix` and `AUGEO` lettering closing the mobile composition below `#entrada` (`< 1024px`); implemented. |

Both CTAs (`Entre em contato` in the hero and `Apresentar negócio` in `#entrada`) open the confirmed WhatsApp Business channel in a new tab. Automated bot reception and human handoff are approved as the next intake step but not yet connected. An inline form is no longer required by the active direction.

## 4. Hero

Composition, applied copy, `KineticMatrix` interaction, `ScrollCue` mechanics and mobile footer behavior are owned by [HERO.md](HERO.md).

## 5. Public process

The process is the landing's main commercial explanation. It shows that an initial request is read and prioritized before becoming scope and proposal, preserving the client's autonomy to decide whether to proceed.

### Public steps

1. **Conhecemos seu negócio (`#processo-01`)** — Investigamos seu momento atual e os obstáculos que motivaram o contato.
2. **Definimos as prioridades (`#processo-02`)** — Analisamos quais mudanças fazem sentido e como as entregas devem trabalhar juntas.
3. **Apresentamos o projeto (`#processo-03`)** — Devolvemos um briefing validado com nossa recomendação, o escopo e o investimento. Você decide sobre a contratação.

### Current experiment — `polly`, critique item #1 — 2026-10-25

**Current implementation reconciled on 2026-10-30:** Promoted to `main`/`dev`, awaiting Luca's full visual review; Git promotion does not imply creative closure. Earlier explorations on superseded branches (`section-process`, `v3`, `polly`) are preserved in the [archived exploration sequence](archive/EXECUTION_HISTORY.md#2026-10-27--superseded-process-exploration-archive).

The full-width opening uses the provisional H2 “O seu contexto define o caminho.” in normal document flow, smaller than the hero heading. Desktop ledger rows (`44fr / 56fr`) place step titles left and descriptions right; below `1024px` each pair stacks. Text stays stationary.

- **Progressive reading focus (confirmed by Luca, 2026-10-24):** Upcoming steps rest at `opacity: 0.38`; scrolling through the focal zone (`top 45%`) unlocks steps cumulatively to `opacity: 1.0`. Pointer hover temporarily focuses the cumulative path up to the hovered step and triggers a subtle cell surface tint (`--process-step-hover-bg`: `rgba(255, 255, 255, 0.02)` dark, `rgba(17, 17, 17, 0.025)` light); pointer exit restores the scroll-driven state. Do not treat the defocused resting state (`0.38`) as a permanent contrast defect.
- **Anti-slop boundary on step framing:** The earlier `point–rule–tag` datum (`[■] ── 01 // ENTRADA`) and generic stage-badge scaffolds were rejected by Luca on 2026-10-22 ([correction evidence](reviews/2026-10-22-process-correction/README.md)); do not reintroduce stage-number badges above these steps. Subtle cell-surface hover feedback and structural grid joints remain supported.

### Scroll-drawn line direction — LV, 2026-10-26

The user-selected mechanism is individually controllable background linework driven by **scroll**, not hover. Relationships (content exclusion bands, shared column/intersection anchors, segment axes and timeline intervals) govern coordinates via a declarative segment map (`PROCESS_LINE_SEGMENTS` in `src/components/ProcessSection.tsx`).

| Element | Current behavior |
| --- | --- |
| Grid geometry | Columns at `16/30/44/58/72/86%`, preserving the `14%` rhythm while omitting the `2%` left-edge column. Full-width row boundaries; clear opening. |
| Reading protection | Upper/lower column segments stop around the measured title/description band with `24px` clearance (`--process-reading-start` / `--process-reading-end`). |
| Desktop drawing | From `1024px` with motion enabled, scroll draws upper segments, then lower segments, then the horizontal boundary toward the right (`ease: 'none'`, `scrub: 0.35`, clamped endpoint; reverse scroll retracts). Measurements run on setup/refresh without per-frame layout reads. |
| Grid visibility | `1px` strokes use `--process-grid-line`, alpha `0.14` in both themes. |
| Desktop intersections | Two `15px` SVG “+” joints with `1.5px` stroke on the `44%` anchor after steps 1 and 2 where four arms meet, using `--process-grid-line` and revealing as the next row supplies the fourth arm. No marker at the third row's three-arm junction. |
| Narrow layouts | Below `1024px`, show the static 3-column grid at `16/44/72%` (`calc(100cqw / 3)`); hide both “+” joints. |
| Reduced motion | Completed static grid and full-opacity text (`1.0`); static neutral joints on desktop, hidden on narrow layouts. |

Latest delivered checks and limits are in the [restrained intersection record](archive/EXECUTION_HISTORY.md#2026-10-27--restrained-process-intersections) and [line review bundle](reviews/2026-10-26-polly-process-lines/README.md).

**Approval gate and next action:** LV reviews the complete item #1 (`#processo`). Only after full approval, remind LV and revisit **#2: rules/type relationships** (`layout`/`polish`), then **#3: closing narrative/hierarchy** (`clarify`/`layout`).

### Disclosure boundary

The website communicates the working model, not the full internal procedure. Initial call, brief structuring, handoffs, validation and second call belong to operations in registered global source `global:business/augeo.md`; show them publicly only when they help the lead decide.

## 6. Sales intake and form

**Current decision — Luca, 2026-10-24 & 2026-10-27:** Commercial entry leads to **WhatsApp Business (`+55 44 99183-2843`)** via `WHATSAPP_URL` (`https://wa.me/5544991832843`) in `lib/contact.ts`, opening in a new tab with an accessible destination announcement.
- **CTA wording:** The hero uses **“Entre em contato”** (avoiding premature commitment before the visitor reads the model); the closing CTA in `#entrada` uses **“Apresentar negócio”** (rendered via `ShinyButton`).
- **Approved conversational direction (pending bot/handoff setup):**
  1. Ask what the business is; accept a site or Instagram link if available.
  2. Ask what brought the person to AUGEO.
  3. Ask a relevant follow-up based on that answer instead of sending a bulk questionnaire.
  4. Confirm the summary and route the contact for human analysis.
  - The automation must identify itself as a bot, provide a clear path to a person, and leave solution recommendations, pricing and commitments to the human team without promising response deadlines or automatic quotes.
- **Retained alternative:** Earlier inline-form studies ([Form architecture](archive/2026-10-24-ux-review.md#intake-architecture), [component specifications](archive/2026-10-24-ux-review.md#intake-components) and [archived form requirements](archive/2026-10-24-ux-review.md#previous-form-requirements)) remain archived alternatives and do not govern the WhatsApp flow.

## 7. Visual direction

### Principle

**Precise structure, unstable behavior.** The language combines controlled architectural systems—grids, vectors, modules, notation and typography—with calibrated interference, kinetic response, material depth and organic/specular forms conditioned by rules.

### Page-wide theme tokens and typography baseline

System preference and explicit `.dark`/`.light` root classes control the active theme across all sections and canvases:

| Token / Role | Dark Mode (`.dark`) | Light Mode (`.light` / `:root`) | Notes |
| --- | --- | --- | --- |
| Primary background (`--background`, `--process-bg`) | `#06070a` | `#e6e6e2` | Unified across Hero, `KineticMatrix` and `ProcessSection` (aligned on 2026-10-28). |
| Brand Stage surface (`.brand-stage` / `.brand-stage-monolith`) | `#06070a` / `#020304` | `#f4f4f0` / `#ebead8` | Monolith backdrop matches the 3D render studio floor in each theme. |
| Primary foreground (`--foreground`, `--process-fg`) | `#f7f7f5` | `#111111` | Active Process headings use `#ffffff` (dark) / `#111111` (light). |
| Muted / supporting text (`--muted-foreground`) | `#9e9ea2` | `#5a5a56` | Active Process body shifts to `#d1d1d6` (dark) / `#222222` (light). |
| Structural hairlines (`--border`) | `rgba(255, 255, 255, 0.08)` | `rgba(17, 17, 17, 0.09)` | Section dividers and structural borders. |
| Architectural grid strokes (`--process-grid-line`) | `rgba(255, 255, 255, 0.14)` | `rgba(17, 17, 17, 0.14)` | Used by Process segments, `+` joints and masked Brand Stage columns. |
| Brand accent & focus ring (`--accent`, `--ring`) | `#ff482c` | `#ff482c` | Soft companion `#ff7a64` used in `ShinyButton` conic sheen. |
| Typography stack | **Headings:** `Hanken Grotesk` (weight 620, tight tracking `-0.03em` to `-0.035em`). **Subheadlines / Body:** `Libre Franklin` (fallback `Archivo`). **Technical / UI mono:** `Share Tech Mono`. |

### Design system boundaries for visual polish and evolution

As the project evolves beyond initial prototyping into high-craft visual polish, agents and design skills (`impeccable`, `high-end-visual-design`, `design-taste-frontend`, `gpt-taste`, `gsap-react`, `motion-framer`) must distinguish **Core Invariants (Tier 1)** from **Contextual / Role-Based Decisions (Tier 2)**:

#### Tier 1 — Core Invariants (Strictly Prohibited)
- **Fabricated social proof:** Never invent case studies, client logos, metrics, testimonials or guaranteed-return claims.
- **Generic SaaS / AI-slop templates:** Avoid 3-column equal service cards, generic SaaS dashboard widgets, neon purple/blue mesh gradients, or the rejected `point–rule–tag` stage-badge formula (`01 // TAG` pills above text rows).
- **Unauthored filler media:** Do not import generic stock photography, unrelated 3D blobs, or decorative tropes disconnected from AUGEO's identity.
- **Compromised active legibility or un-bypassed motion:** Experimentation must not break active reading contrast, keyboard navigation, or `prefers-reduced-motion` static fallbacks.

#### Tier 2 — Contextual & Role-Based Decisions (Not Needed Yet $\neq$ Prohibited)
- **Navigation and wayfinding:** The current header (symbol return-to-top + `[DARK]`/`[LIGHT]` switch) suffices for the 3-section linear narrative. Navbars, section anchors, or detached floating navigation pills are **currently unnecessary, not prohibited**—skills may propose them if page depth or multi-section wayfinding requires them, provided they avoid generic edge-to-edge sticky SaaS bars that clash with the Hero split.
- **Role-based geometry (Orthogonal structure vs. Tactile hardware):** AUGEO does not enforce a monotonous single `border-radius` across every element:
  - *Structural & editorial framing* (section dividers, ledger cells, `ScrollCue` slats, `.hero-cta`): sharp/architectural (`0px–2px`).
  - *High-affinity interactive & conversion hardware* (`ShinyButton` at `12px`, potential pill controls at `9999px`, or nested `button-in-button` / `double-bezel` shells): softer radii and layered hardware enclosures are valid when they increase tactile presence without turning editorial text sections into rounded cards.
- **Continuous grid spine & optical masking:** Grids are a language of structure, response and transition rather than a flat wallpaper. Continuing the proportional column axis (`16/30/44/58/72/86%` desktop, `100cqw/3` mobile) across sections is intentional when each section adapts its behavior and **protects typography** (via measured reading-band exclusions in `#processo` or vertical `mask-image` fade-outs in `.brand-stage-grid`).
- **Ambient micro-motion & progressive focus dimming:** Continuous ambient loops (`KineticMatrix` pulses, `ScrollCue` 6.0s downward cascade, `ShinyButton` 3.0s Houdini conic sweep) and intentional resting-state dimming (`.process-step-body` at `opacity: 0.38` for progressive scroll/hover focus) are core expressive devices, not defects—provided animations pause offscreen/hidden and `prefers-reduced-motion` restores static full-opacity presentation.
- **Dark/Light surface calibration vs. toggle widget scaffold:** Only the rudimentary `[DARK]`/`[LIGHT]` header button widget is a temporary development scaffold (do not spend scope redesigning the toggle button itself unless requested). Calibrating surface tokens, contrast, specular depth, vignettes and hover feedback across both Dark and Light themes **is** an active part of visual polish.

## 8. Assets

### Direction and compatible possibilities

Brand assets, local fonts and `KineticMatrix` anchor the hero; moodboard references ([plan appendix](archive/HERO_AUDIT_2026-10-07.md#anexo-c--moodboard-e-rastreabilidade)) inform geometry and tension. Beyond vector/canvas systems, **authored 3D brand sculptures, programmatic lighting/reflection sequences, shader materiality and purposeful art-directed or GenAI imagery** are supported to give the page physical depth and prevent it from feeling purely vector-bound—provided every asset serves a concrete compositional role and respects loading/accessibility budgets.

### 3D brand imagery exploration — 2026-10-27

LV supplied four local `16:9` PNG source files in `src/assets/logo/3d/` (without filename extensions):

| Original asset | Format / dimensions | File size | Role |
| --- | --- | --- | --- |
| [augeo-169-black](../src/assets/logo/3d/augeo-169-black) | PNG RGB, `1376×768` | `1,022,192` bytes | Initial low-res Light source |
| [augeo-169-black-4k](../src/assets/logo/3d/augeo-169-black-4k) | PNG RGB, `5504×3072` | `14,549,266` bytes | Master Light symbol variant (`#ebead8` stone floor) |
| [augeo-169-white](../src/assets/logo/3d/augeo-169-white) | PNG RGB, `2752×1536` | `4,646,781` bytes | Master Dark base variant (`#020304` floor, front-lit) |
| [augeo-169-white-invert](../src/assets/logo/3d/augeo-169-white-invert) | PNG RGB, `2752×1536` | `4,829,349` bytes | Master Dark inverted variant (sidewalls/bevels lit) |

### Current brand-stage quality and comparison — 2026-10-29

Promoted to `main` (`src/components/BrandImmersiveStage.tsx`). [Investigation and verification evidence](archive/EXECUTION_HISTORY.md#2026-10-29--brand-stage-quality-investigation-and-staticautomatic-comparison-on-dev); earlier initial integration report archived at [2026-10-27-3d-monogram-report.md](archive/2026-10-27-3d-monogram-report.md).

- **Static default (Version A) vs. comparison (Version B):** Default `/#entrada` renders one static image per theme with no negative overlay or pointer tracking. Optional `/?brandReflection=auto#entrada` overlays the Dark negative variant with a 10-second GSAP mask sweep (`-35%` to `135%`, 2s repeat delay, `55%` opacity), pausing offscreen/hidden and disabled under `prefers-reduced-motion`. Light remains static (no inverted Light source exists yet).
- **Lossless WebP delivery pipeline:** Derivatives in `src/assets/logo/3d/webp/` use lossless `VP8L` WebP generated from the PNG masters via Lanczos (`1376×768` mobile, `2752×1536` 2K, and `5504×3072` 4K Light), verified for exact 8-bit RGB parity. Lossless fidelity increases transfer size (`10.46 MB` Light 4K, `3.55 MB` Dark 2K); evaluate delivery compression separately after final render approval.
- **Monolith geometry, crop diagnosis and safe-zone guidance for re-generation:**
  - Container height is `clamp(520px, 72vh, 900px)` on desktop (~`2.22:1` aspect ratio at `1440×900`) and `clamp(340px, 52vh, 460px)` on mobile (`<= 768px`, ~`0.88:1`), using `object-fit: cover` and `object-position: center 38%`.
  - Because the `16:9` source renders are framed tightly (within ~4–5% of top/bottom edges), `cover` crops ~10–12% vertically on desktop and ~40% laterally on mobile.
  - **Follow-up priority (Luca, 2026-10-29):** Establish the new static render first before revisiting reflection mechanics (Version B's screen-space mask was judged superficial by Luca and is not approved). When regenerating renders (see reference prompts in [2026-10-27-3d-monogram-report.md](archive/2026-10-27-3d-monogram-report.md#4-prompts-for-re-generating-monograms-magnific--midjourney--3d-ai)), pull the camera back by **25–30% safe-zone margin** (or render in `21:9`) so `object-fit: cover` preserves the full monogram geometry.

## 9. Copy and content

**LV clarification — 2026-10-25:** All website text and business-facing content remain provisional working material open to revision. Iteration on layout and narrative is permitted provided it does not invent capabilities, operational commitments, client evidence, response-time promises or guaranteed results. Applied hero copy is in [HERO](HERO.md#concept-and-hierarchy); Process copy is in section 5; draft alternatives are in section 11.

## 10. Implementation

### Confirmed requirements

- Responsive, accessible and performant landing.
- Hero and section interactions adapted to mouse, touch and `prefers-reduced-motion`.
- Working WhatsApp conversion destination (`WHATSAPP_URL`), with future conversational screening and human handoff.
- Modular structure prepared to add future case studies and pages without rewriting the core flow.

### Implemented technical baseline

- **Frontend:** React 19 and TypeScript with Vite 8; single-page application.
- **Styles & Motion:** Tailwind CSS 4 + custom CSS in `src/styles.css`, local WOFF2 fonts (`Hanken Grotesk`, `Libre Franklin`, `Archivo`, `Share Tech Mono`), GSAP (`ScrollTrigger`, `useGSAP`), Motion (`motion/react`), and CSS Houdini `@property` (`ShinyButton`).
- **Hero & Shared Components:** `KineticMatrix` (`components/ui/kinetic-matrix.tsx`, physics in `lib/matrix-motion.ts`) shared between `.hero`, `.site-mobile-footer` and `?demo=matrix`; `ScrollCue` (`src/components/ScrollCue.tsx`); `ProcessSection` (`src/components/ProcessSection.tsx`); `BrandImmersiveStage` (`src/components/BrandImmersiveStage.tsx`).
- **Tooling & validation:** Bun 1.4.0 and `agent-browser` ([WORKFLOW](WORKFLOW.md#bun-and-validation)).
- **Hosting & Domain:** Vercel (`augeocreative/augeo-v1-landing`), production on `main` (`lucavalente93/augeo-v1-landing`), custom domain `https://www.augeocreative.com` (DNS at Hostinger; preserve `hello@augeocreative.com` email records). Vercel Pro remains postponed.

### Open technical decisions and integrations

- WhatsApp automation/API integration, conversation script, receiving/handoff owner, storage, abuse protection and failure handling.
- Canonical domain redirection (`www` vs. root) and publication/indexing metadata.
- Technical cleanup of unused CSS selectors (`.brand-stage-cta*`, `.process-cta`, `.process-closing`) and legacy test specs.

## 11. State and copy drafts

Current delivery state and queue: [BACKLOG](BACKLOG.md#current-state). Hero block plan: [HERO](HERO.md#current-block-plan).

### Copy drafts for future or evolving sections

Preserved in Portuguese from initial copywriting studies as optional working material (not mandatory requirements):

- **Header (if navigation links are added later):** `Nosso processo · Apresentar negócio`
- **Processo (draft alternative):** *Nós estruturamos sua presença digital. Conhecemos seu negócio, identificamos o que precisa mudar e propomos um projeto para conectar apresentação e operação.*
- **Entrada comercial (draft alternative):** *Vamos entender o que seu negócio precisa. Compartilhe uma breve apresentação e o motivo do contato. A análise e o direcionamento ficam com a AUGEO.*
- **Footer (draft institutional text if needed later):** *AUGEO Creative — Direção, presença e operação digital. Atendimento remoto.*
