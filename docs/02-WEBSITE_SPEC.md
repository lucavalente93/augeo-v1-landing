# AUGEO Website - Specification

Requirements and implementation reviewed on 2026-10-13; publication references reconciled on 2026-10-17 against local records and the address provided by the user, without a new remote lookup. This specification defines the complete landing and distinguishes requirements from published state. Hero composition, decisions and proposals: [HERO.md](HERO.md). Queue and latest delivery: [BACKLOG.md](BACKLOG.md). Procedures: [WORKFLOW.md](WORKFLOW.md). Dated evidence: [history](archive/EXECUTION_HISTORY.md).

## 1. Website role

Website purpose and priority: [AUGEO.md](AUGEO.md). The landing explains the context-first commercial model and converts suitable businesses into qualified contacts. Until public case studies exist, evidence comes from page quality, process clarity and precise sales intake. Content boundaries are in section 9.

## 2. First-version scope

### Included in the complete landing

- Header
- Hero
- Process
- Commercial entry through WhatsApp, with short chatbot screening and human handoff
- Mobile visual footer integrated into the hero composition

### Outside this version's scope

- Standalone services or capabilities section
- Portfolio, case studies, clients, metrics and testimonials
- Institutional about/team section
- FAQ
- Internal pages, blog and client area

**Source state — 2026-10-27:** Header, hero, Process, mobile continuation cue and matrix footer are included in `main`/`polly` at `933424f`. WhatsApp intake is approved as a direction but not configured. Git synchronization was freshly verified; Vercel success was previously confirmed for `3e7cb3d`, not for the latest commit. No new production/domain inspection is claimed.

## 3. Architecture and flow

| Layer | Function and state |
|---|---|
| Header | Brand with return to top; implemented. |
| Hero | Positioning, interactive signature and conversion button; implemented. |
| Mobile footer | Matrix and lettering close the composition below copy and CTA; implemented. |
| Process | Explain understanding, direction and proposal; implemented in the current source baseline, preserving its explicit approval/evaluation limits in section 5. |
| Commercial entry | WhatsApp conversation with short chatbot screening and human handoff; approved direction, not implemented. |

“Apresentar negócio” remains the conversion entry. Luca approved WhatsApp as its intended destination on 2026-10-24; current code still uses `href="#entrada"`. No number, automated receiving flow or handoff has been connected. An inline form is no longer required by the current direction.

## 4. Hero

Composition, applied copy, interaction, responsive behavior and continuation/conversion roles are owned by [HERO.md](HERO.md). That document distinguishes the published baseline from the historical Process experiment.

## 5. Public process

The process is the landing's main commercial element. It shows that an initial request is read and prioritized before becoming scope and proposal, without suggesting the agency prevents clients from choosing a solution.

### Public steps

1. **Entrada** - the business presents its current situation, goal and initial request.
2. **Entendimento do cenário** - AUGEO reads context, relationships, priorities and points requiring intervention.
3. **Direcionamento e proposta** - AUGEO returns a path with scope, stages and investment so the client can decide whether to proceed.

### Current experiment — `polly`, critique item #1 — 2026-10-25

**Current implementation reconciled on 2026-10-27:** commit `933424f` is on local and remote `main`/`polly`. LV authorized both promotions; the complete item #1 visual stage remains unapproved. [AUG-12](http://127.0.0.1:3100/AUG/issues/AUG-12) owns its task/review state. Current requirements below supersede the [archived exploration sequence](archive/EXECUTION_HISTORY.md#2026-10-27--superseded-process-exploration-archive); implementation and Git promotion do not imply creative approval.

The full-width opening uses the provisional H2 “O seu contexto define o caminho.” in normal document flow, smaller than the hero heading. Desktop ledger rows place titles left and descriptions right; below1024px each pair stacks. Text stays stationary. Cumulative scroll focus, cumulative hover and pointer-exit restoration remain; resize/font/content refresh reconciles protected reading bands and the active reading index. Reduced motion presents all text at full opacity.

LV wants the composition to demonstrate distinctive ways of presenting content while staying readable. Motion prominence may follow the result and objective; it is not preset to subtle or dominant. Additional section height and scroll distance are allowed. All copy is provisional. Preserve the hero/matrix, brand's precise structure/unstable behavior identity and current animation lifecycle. No generic cards, stage-number/tag scaffolds, invented capabilities or evidence. The separate left-introduction/right-ledger version B was never selected or implemented.

### Scroll-drawn line direction — LV, 2026-10-26

The user-selected mechanism is individually controllable background linework driven by **scroll**, not hover. “Tracejar” means drawing a stroke, not necessarily a dashed pattern. Define relationships before coordinates: content exclusion bands, shared column/intersection anchors, segment endpoints/axes and timeline intervals. Use a small declarative arrangement rather than manual per-stroke fixes; no preset catalog or automatic obstacle-routing engine is required.

| Element | Current behavior |
| --- | --- |
| Grid geometry | Columns at16/30/44/58/72/86%, preserving the original14% rhythm while omitting the unwanted2% left-edge column. Full-width row boundaries; clear opening. |
| Reading protection | Upper/lower column segments stop around the measured title/description band with24px clearance. This is one row-wide exclusion band, not per-glyph routing. |
| Desktop drawing | From1024px with motion enabled, scroll draws upper segments, then lower segments, then the boundary toward the right. Linear GSAP timelines,0.35 numeric scrub and clamped final endpoint; reverse scroll retracts. Measurements occur at setup/refresh, without per-frame layout reads or React drawing-progress updates. |
| Grid visibility |1px strokes use `--process-grid-line`, alpha0.14 in both themes. This local adjustment does not authorize theme-scaffold refinement. |
| Desktop intersections | Exactly two15px SVG “+” joints with1.5px stroke on the44% anchor, after steps1/2 where four arms meet. Same color token as the grid; reveal when the following row supplies the fourth arm. No accent heating, blink or glow. No marker at the footer's three-arm junction. |
| Narrow layouts | Below1024px, show the reduced static grid at16/44/72%; hide both “+” joints entirely. |
| Reduced motion | Completed static grid; neutral static joints on desktop, hidden on narrow layouts. No drawing transition. |

Latest delivered checks and limits are in the [restrained intersection record](archive/EXECUTION_HISTORY.md#2026-10-27--restrained-process-intersections); broader prior coverage is in the [line review bundle](reviews/2026-10-26-polly-process-lines/README.md). Historical checks do not validate future changes. Physical devices, other engines and measured production performance remain unverified.

**Approval gate and next action:** LV reviews the complete item #1 in [AUG-12](http://127.0.0.1:3100/AUG/issues/AUG-12). Only after full approval, remind LV and revisit **#2: rules/type relationships** ([AUG-19](http://127.0.0.1:3100/AUG/issues/AUG-19), `layout`/`polish`), then **#3: closing narrative/hierarchy** ([AUG-20](http://127.0.0.1:3100/AUG/issues/AUG-20), `clarify`/`layout`). LV's observations mostly concern #2 but their details have not been supplied. Do not start those follow-ups, infer approval, refine dark/light scaffolding or treat the known WhatsApp dependency as a new audit finding.

### Disclosure boundary

The website communicates the working model, not the full internal procedure. Initial call, brief structuring, handoffs, validation and second call belong to operations and are documented in registered global source `global:business/augeo.md`, resolved through `augeo-orchestrator context augeo-website`; show them publicly only when they help the lead decide.

### Plan, architecture and implementation of `#processo` (historical branch `section-process`)

Visual planning structured with Impeccable (`shape` + surface extension in `new-work`, followed by `clarify`, `harden`, `layout`, `typeset`, `adapt`, `animate`, `polish`), owned by **Antigravity** (parent ticket `AUG-12`, `bcabbd93-a912-45e1-a6cf-01928244795f`) and technically reviewed by **Codex** in Paperclip (child ticket `AUG-11`, `90b13a80-fc32-44b1-b8d9-f3400bd88b42`), with decisions confirmed by the user and implemented on branch `section-process` on 18/10 (`main` preserved intact):

**Historical experimental status — Luca, 2026-10-21:** Layout decisions after the hero remained open on the deleted `section-process` branch. Neither a repeated hero ratio nor the previous 12-column alternative was a final requirement. The sticky Process implementation was an experiment, not a template for subsequent sections. Historical compositions and evaluations remain evidence in the execution history.

- **Historical experiment on deleted `v3` — corrected after Luca's review, 2026-10-22:** Theme-controlled surfaces, sticky desktop introduction beside three steps that begin directly with their titles/descriptions, and a separate closing area. **User correction:** the point–rule–tag datum and generic stage labels are rejected AI slop; do not reintroduce this formula under another font or label treatment. Removed the redundant stage/index data and accent hover strip; hover retains only a subtle cell surface. Composition remains experimental.
- **Grid implementation:** One common vertical grid: mobile `calc(100cqw / 3)`, desktop 14cqw at `2cqw - 1px`. Each desktop step boundary extends across the full panel, aligning both columns to actual row heights. Removed independent left/mobile-opening horizontals and nodes. Shared opening padding aligns H2/first H3; the first step has `min-height: max(24rem, 28cqw)` and grows with content. Footer spans both columns. [Correction evidence](reviews/2026-10-22-process-correction/README.md).
- **Visual review approved as baseline — Luca, 2026-10-24:** The 22/10 corrected Process is approved as the current baseline on `dev`. It will still change; the changes are to be defined together with Luca before implementation. The datum/stage-label rejection above still applies.
- **Implementation boundary:** Preserve content, semantic navigation, responsive readability, accessible interaction and reduced-motion behavior while exploring alternatives.

- **Interaction clarification — Luca, 2026-10-24:** Step opacity belongs to progressive focus: scrolling reveals the reading steps; pointer hover temporarily focuses the cumulative path, and leaving the ledger restores the scroll-driven state. Do not treat a deliberately defocused upcoming step as the permanent reading presentation or infer approval to remove this interaction from an audit of that state. Evaluate legibility at the actual reading position, including pointer exit. The blanket opacity-removal recommendation in the 24/10 audit was withdrawn; computed measurements remain observations of their sampled states.

- **Three-step copy (implemented on the historical `section-process` branch):** Keeps draft steps 1 and 2 and refines step 3 (*“Devolvemos um briefing validado com nossa recomendação, o escopo e o investimento. Você decide sobre a contratação.”*) to explicitly deliver the validated brief alongside recommendation, scope and investment, preserving client decision autonomy.
- **Technical structure:** `src/components/ProcessSection.tsx`, `<section id="processo" aria-labelledby="process-title" tabIndex={-1}>` after `.hero` inside `<main>`, with ordered `.process-ledger` steps and IDs `processo-01`, `processo-02`, `processo-03`. Continuation link: [HERO](HERO.md#continuation-cue). Dated implementation and test evidence: history.

## 6. Sales intake and form

**Current decision — Luca, 2026-10-24:** “Apresentar negócio” will lead to WhatsApp. A chatbot receives and organizes the initial contact through a short contextual conversation, then hands it to a person. This supersedes the inline-form proposal; the form is retained as a possible alternative, not required work. Visitors can arrive with a defined request or ask for guidance.

### Approved conversational direction

1. Ask what the business is; accept a site or Instagram link if available.
2. Ask what brought the person to AUGEO.
3. Ask a relevant follow-up based on that answer, instead of sending the whole questionnaire at once.
4. Confirm the summary and route the contact for human analysis.

The bot's role is reception, understanding and organization. Recommendations of a solution, price and commitment to a project remain with the human team. Provide a clear way to request a person. Do not promise response deadlines, automatic quotes or guaranteed meetings. The automation must identify itself as such rather than impersonating the team.

### Implementation status and next decisions

No WhatsApp number, automation provider, account/API integration, receiving destination or human owner has been configured or selected. Define the conversation script, number, handoff owner and data handling before implementing. No tool purchase, account provisioning or publication is authorized by this direction alone.

### Previous form proposal — retained alternative

The material below describes the earlier form study, not the active channel decision or a required section of the landing.

**Earlier design studies — 2026-10-24:** [Form architecture](archive/2026-10-24-ux-review.md#intake-architecture) and [component specifications](archive/2026-10-24-ux-review.md#intake-components) remain alternative material. Their seven fields and e-mail channel do not govern the WhatsApp conversation. No form or receiving integration was implemented.

The previous form's role, field inventory and submission copy are preserved in the [archived form requirements](archive/2026-10-24-ux-review.md#previous-form-requirements). They do not define the WhatsApp conversation.

## 7. Visual direction

### Principle

**Precise structure, unstable behavior.** The language combines controlled systems - grids, vectors, modules, notation and typography - with deformation, interference and organic forms conditioned by rules.

### Established foundations

- Existing hero typography/colors/theme behavior: [HERO](HERO.md#themes-and-brand). Archivo remains a declared alternative; Share Tech Mono is used in component/demo. The full system for future sections still needs consolidation.
- Luca clarified on 2026-10-25 that the dark/light control is a scaffold. Refining it is not current scope unless explicitly requested.
- Brand identity and asset commitments come from the registered global brand source.
- Hero contrasts human/commercial presence with the technical field; do not mechanically repeat this split throughout the page.
- Typography must support impact and commercial clarity; experimentation must not compromise content, form or navigation readability.

### Grid and abstraction use

Grids and graphic systems should act as a language of structure, response and transition, not a repeated texture in every section. Visual abstraction must reinforce composition and rhythm without artificially demonstrating technical capability.

### Avoid

- Deteriorated or illegible typography in commercial content.
- SaaS dashboard appearance, generic bento grids and standardized service cards.
- 3D, wireframes, fashion, futuristic cars or editorial images as generic agency decoration.
- Excessive thin lines, repeated black grids or purposeless scroll kinetics.
- Neon gradients, corporate Memphis, minimalism without typographic construction and generic AI aesthetics.
- Any reduction in contrast, accessibility or performance to preserve an effect.

### Visual consolidation still pending

- Extend existing typographic roles and tokens to Process and form.
- Structure and evaluate those sections without mechanically repeating the hero.
- Record the system in `DESIGN.md` per the planned hero workstream.
- Define motion outside the hero and additional assets when they have a concrete purpose.
- Complete hero evaluations and refinements recorded in HERO.md.

Current fonts, colors and composition are the existing baseline, not open initial choices. This does not equal global visual approval or completion of the system for the full landing.

## 8. Assets

### Direction

Brand, lettering, local fonts and matrix are incorporated into the hero. The moodboard informs direction and geometry; its images are not decoration to import into the page. Define additional assets according to future section needs. There is no requirement to fill the page with 3D objects to compensate for a missing portfolio.

### Priorities

1. Preserve the interactive component and brand assets implemented in the hero; pending refinements must respect this baseline.
2. A graphic system accompanying process reading, if needed by the design.
3. Selective assets supporting composition and rhythm.

### Compatible possibilities

- Kinetic and diagrammatic graphics.
- Abstract objects or shapes subject to visual-system rules.
- Large-scale typography and modular interfaces.
- A single controlled editorial image with a concrete purpose.

Each asset needs a compositional, narrative or interactive purpose, must satisfy contrast and accessibility, and must have loading cost proportional to visual benefit.

### 3D brand imagery exploration — 2026-10-27

LV supplied four local raster files for a **feasibility study**, tracked in [AUG-27](http://127.0.0.1:3100/AUG/issues/AUG-27). Explore placement/layout adaptations that give the imagery a concrete role and make the page less entirely vector-based while preserving the established visual language. No placement, replacement composition or animation technique is approved.

Asset directory: `src/assets/logo/3d/`, relative to the repository root resolved by `augeo-context`. The files are PNGs without filename extensions; keep the exact names during analysis. Links below open the original local assets; the existing Obsidian view generator carries these links into `Website - Specification.md`, without copying images or creating another asset store.

| Original asset | Format / dimensions | File size |
| --- | --- | --- |
| [augeo-169-black](../src/assets/logo/3d/augeo-169-black) | PNG RGB,1376×768 |1,022,192 bytes |
| [augeo-169-black-4k](../src/assets/logo/3d/augeo-169-black-4k) | PNG RGB,5504×3072; LV identifies it as the Light symbol variant |14,549,266 bytes |
| [augeo-169-white](../src/assets/logo/3d/augeo-169-white) | PNG RGB,2752×1536 |4,646,781 bytes |
| [augeo-169-white-invert](../src/assets/logo/3d/augeo-169-white-invert) | PNG RGB,2752×1536 |4,829,349 bytes |

The added `augeo-169-black-4k` is the user-designated high-resolution symbol for Light. Compare it with the lower-resolution version; assess downsampling/delivery cost rather than assuming native-size loading.

These are user-supplied source assets, not optimized delivery assets, a verified animation sequence or available 3D models. Actual visual compatibility must be assessed by opening them, not inferred from filenames or metadata. Do not rename, compress, import or replace them as part of registration.

The longer-term direction is a programmatically controlled sequence using variants to suggest changing reflections and related effects instead of a prerecorded animation video. Assess whether the supplied variants can support that direction, what additional assets may be needed, and loading/decoding/memory, responsive, readability, accessibility and reduced-motion trade-offs. Do not assume continuous frame compatibility or a specific renderer.

Deliver a concise feasibility assessment with two or three concrete layout-integration options, trade-offs and a recommendation; distinguish observations from prototype hypotheses. Use the installed Impeccable entry and applicable shape/concept references when the exploration is executed. Explain the direction and obtain LV approval before UI changes or animation implementation. This user-directed study does not authorize generic 3D decoration, replacement of the hero/matrix, theme refinement or closure of the Process approval gate.

Work only on `pclip`, under the [Paperclip test-branch contract](ORCHESTRATION.md#paperclip-test-branch--pclip). The full English execution brief and registered source selection are in AUG-27. LV requested taking it out of backlog and assigning the original Antigravity executor at Medium. The study retains `mode: plan`, no write grants and no automatic checks; implementation still requires concept approval. Live execution state is owned by the ticket.

## 9. Copy and content

**LV clarification — 2026-10-25:** Final website copy has not yet been supplied. All website text and business-facing content remain provisional and open to substantial revision. Existing strings are working material for composition and should not be treated as approved final messaging. This permits iteration on the website narrative; it does not invent new agency capabilities, operational commitments, client evidence or claims. The current `polly` stage tests layout/type with a provisional Process opening while the later closing stage remains gated above.

Applied hero copy is maintained in [HERO](HERO.md#concept-and-hierarchy). Process copy and client decision autonomy are defined in section 5; form submission states remain draft below. Messaging explains direction, presence and digital operations without turning the website into a service catalog.

Avoid promises of results, quick returns, formulas, total solutions without context, and any claims about nonexistent case studies, clients or metrics.

## 10. Implementation

### Confirmed requirements

- Responsive, accessible and performant landing.
- Hero interaction adapted to mouse, touch and reduced motion.
- Working WhatsApp conversion destination, conversational screening and reliable human handoff, with clear status/failure handling.
- Structure prepared to add future case studies and pages without rewriting the main flow.

### Implemented technical baseline

- Frontend: React 19 and TypeScript with Vite 8; single-page application without implemented router or CMS.
- Styles: Tailwind CSS 4 integrated with Vite and custom CSS in `src/styles.css`, with local fonts, tokens and themes.
- Hero: `KineticMatrix` shared between landing and `?demo=matrix` demo, with physics/warp in `lib/matrix-motion.ts`; cue in `ScrollCue`.
- Tooling and verification commands: [WORKFLOW](WORKFLOW.md#bun-and-validation).
- Hosting: Vercel, team `augeocreative`, production on `main` with push-triggered deployment integration. The current local remote and freshly queried GitHub repository are `lucavalente93/augeo-v1-landing`. The 26/10 successful deployment of `3e7cb3d` was linked to Vercel team/project `augeocreative/augeo-v1-landing`. Deployment of `933424f` was not checked during the 27/10 documentation sync. No hosting configuration or remote was changed.
- Custom domain: current address supplied by user on 17/10, `https://www.augeocreative.com`. Historical records confirm HTTPS on root and `www`; DNS/HTTPS and publication evidence belong in [history](archive/EXECUTION_HISTORY.md). Earlier alias `augeo-grid-hero.vercel.app` is a historical reference without availability reconfirmed in that review.
- DNS managed at Hostinger; existing business email `hello@augeocreative.com`, independent of deployment. Preserve email records when changing website routing.
- Current Vercel plan retained by user decision; Pro purchase and WhatsApp Business setup postponed until website completion. They do not block development or constitute authorized tasks in that review.

### Open technical decisions and integrations

- WhatsApp number/channel, conversation script, receiving/handoff owner, storage, abuse protection and failure handling; inline-form requirements are historical alternatives.
- Data processing, privacy information and operational screening/response parameters.
- CMS only if a real content-editing need arises; no adoption decided.
- Analytics and tracking when a measurement goal is defined, respecting applicable privacy and consent.
- Canonical address and redirection between root domain and `www`, without confirmed configuration yet.
- Technical owner for maintenance/publication, not yet defined operationally.

Stack, hosting, domain and initial matrix interaction were defined and implemented. Choose future commercial integrations according to intake flow and operations without reopening these foundations by default.

## 11. State and next decisions

Current delivery state and next action: [BACKLOG](BACKLOG.md#current-state). Hero refinements and evaluation: [HERO](HERO.md#current-block-plan).

### To finish the complete landing

- Keep Process and the implemented mobile footer; align commercial-entry copy with WhatsApp screening.
- Define the WhatsApp script, number/tool, data handling, screening owner and handoff/failure messages.
- Connect conversion CTAs to the configured WhatsApp destination and validate screening through human receipt; do not implement `#entrada` as a form merely to satisfy the superseded proposal.
- Define placement of public channels using the existing email; WhatsApp Business depends on future setup.
- Validate responsiveness, keyboard/focus, contrast, reduced motion, WhatsApp navigation and actual conversation receipt/handoff; test failures for the integration selected.
- Define domain redirection/canonical policy and publication/indexing metadata; maintain valid HTTPS on both addresses before closing the complete delivery.

Scheduling belongs in BACKLOG; scope and authority follow AGENTS and resolved governance.

### Future, after the first complete version

- Evaluate case studies, portfolio, social proof, FAQ and internal pages based on real work and objections.
- Complement visual abstractions with published-work evidence when suitable material exists, preserving the graphic signature already built.

## Copy drafts for future sections

Material previously in `copywriting.md`, not yet applied to the website or recorded as approved final copy. Preserved in Portuguese as a starting point for Header, Process, sales intake and footer; does not replace implemented hero copy in HERO.

### Header

Nosso processo · Apresentar negócio

### Processo

**Nós estruturamos sua presença digital.**

Conhecemos seu negócio, identificamos o que precisa mudar e propomos um projeto para conectar apresentação e operação.

#### 1. Conhecemos seu negócio

Investigamos seu momento atual e os obstáculos que motivaram o contato.

#### 2. Definimos as prioridades

Analisamos quais mudanças fazem sentido e como as entregas devem trabalhar juntas.

#### 3. Apresentamos o projeto

Explicamos nossa recomendação, o escopo e o investimento. Você decide sobre a contratação.

**Apresentar negócio**

### Entrada comercial

**Vamos entender o que seu negócio precisa.**

Compartilhe uma breve apresentação e o motivo do contato. A análise e o direcionamento ficam com a AUGEO.

**Apresentar negócio**

#### Após o envio

Recebemos sua apresentação. Vamos analisar as informações antes de retornar pelo contato indicado.

### Footer

AUGEO Creative

Direção, presença e operação digital.

Atendimento remoto.
