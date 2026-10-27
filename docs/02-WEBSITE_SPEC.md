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

**Source state — 2026-10-24:** Header, hero, Process, mobile continuation cue and matrix footer are included in main merge `b107bc5`. WhatsApp intake is approved as a direction but not configured. This reconciles Git/code state; no new production deployment or domain inspection was performed.

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

LV authorized implementation of critique item #1 with Impeccable `layout` and `typeset`, combining the wide opening and smaller editorial-heading approaches. On `polly`, the Process opening spans the section and uses the provisional heading “O seu contexto define o caminho.”; the ordered ledger follows with title/description columns per row on desktop and stacked pairs below 1024px. This is a reviewable experiment, not approval of its final composition or copy.

The section heading is now in normal document flow. Its former sticky/scrub traversal belonged to the replaced topology; removing it is a structural consequence of item #1, not completion of item #2. Cumulative scroll focus, cumulative hover and pointer-exit restoration remain. Resize refresh reconciles the current reading index with the active layout.

**Tracking exploration — LV decisions, 2026-10-25:** The current arrangement reads more intuitively with the available copy, but LV considers it too simple. The original tracking aimed to demonstrate distinctive ways to present information on a website; the next exploration should recover that expressive intent using the current `polly` arrangement as its starting point, not treating simplicity as final approval.

- Do not prescribe an abstract level of motion prominence in advance. LV considers that choice adaptable to the result and the experience's objective; it is not a fixed preference for subtle or protagonist motion.
- Increasing section height and scroll distance is allowed. The site is very short, so preserving the current traversal length is not a requirement. Let the experience justify the space rather than imposing a compactness target.
- LV subsequently selected option 2 from the concrete `shape` brief: titles and explanations find their reading alignment as the visitor scrolls. This selects the mechanism for implementation/review, not approval of the whole item #1 stage. The moving grid marker and per-step sticky-title alternatives were not selected.
- The existing `polly` combines the wide-opening approach with a smaller editorial H2; a separate version B retaining the left introduction/right ledger was explained but has not been implemented. Do not infer a request to build B from that explanation.

**Selected tracking implementation — 2026-10-25:** Each desktop H3 starts displaced toward the column gutter and its explanation starts displaced toward the same gutter from the other side. As the row travels from 90% to 45% of viewport height, the blocks move apart into the established editorial alignment and then stay still for reading. Travel is bounded by the measured unused gap, retaining at least 24px between the blocks; longer/enlarged text reduces travel rather than overlapping. At 1440px with current copy, initial travel is approximately ±95.5px. GSAP uses linear scroll interpolation with 0.35s scrub smoothing. Cumulative focus changes at the 45% row threshold in both directions; hover still overrides focus cumulatively, and pointer exit restores the scroll state.

Narrow layouts retain stacked pairs, with smaller opposing vertical offsets (title −12px, explanation +20px) converging to the existing spacing. Motion-enabled desktop rows grow with their content and have a minimum of `min(48svh, 32rem)`; at 1440×900 the working rows measure 432px. Reduced motion removes spatial transforms, shows all text at full opacity and retains the compact pre-tracking row spacing. MatchMedia cleanup and resize/font/content refresh recalculate travel and reading state. No text, hero/matrix, closing narrative, theme scaffold or channel integration was changed by this tracking delivery. [Tracking evidence](reviews/2026-10-25-polly-process-tracking/README.md).

**LV review correction — 2026-10-26:** The result looks aesthetically clean, but the current motion starts around an arbitrary center-left position, comes from no relevant location and merely settles into the pre-existing layout. The measured free gutter is a collision constraint, not a meaningful origin. Rework the origin and path within item #1; adjusting offset, speed or easing alone does not address this feedback. The earlier selection authorized this experiment, not acceptance of its implemented motion. No replacement mechanism has been selected. LV also has observations mostly related to item #2; their details have not yet been supplied. Do not infer them or begin item #2 from that statement.

**Rejected follow-up hypothesis — 2026-10-26:** LV also rejected as forced the proposal to keep each title stationary while its explanation starts underneath, then moves right and up into the final desktop column. This was a conversational hypothesis only; it was never implemented or selected. Preserve this rejection when resuming; it does not establish a blanket prohibition on typographic motion or reduce the ambition for expressive presentation.

**Approval gate:** only after LV approves this entire item #1 stage, remind LV and revisit critique item **#2** (rules/headline relationships across the new composition, `layout`/`polish`) and then **#3** (closing message and hierarchy, `clarify`/`layout`). Do not execute those stages or mark them approved before that gate. The existing closing content, WhatsApp dependency and dark/light scaffold are outside this implementation.

Evidence: [polly stage 1](reviews/2026-10-25-polly-process-stage-1/README.md). Earlier Process approval applies to the prior baseline, not this experiment.

### Scroll-drawn line direction — LV, 2026-10-26

LV confirmed exploration of individually controlled background lines driven by scroll, explicitly correcting the earlier hover wording. “Tracejar” means drawing a stroke, not necessarily a dashed pattern. Control must support line placement/omission, independent drawing and a clear headline region. No replacement animation has been implemented or visually approved.

**Required before implementation:** describe line relationships semantically to reduce arrangement overhead. Define protected content regions, available drawing corridors, shared anchors/junctions, segment dependencies and scroll intervals before assigning coordinates. Use shared layout references rather than disconnected pixel values. A headline-left/description-right arrangement should express its exclusion region without manually repairing each stroke; an unobstructed background can permit both axes. A preset catalog is optional, not requested. Responsive layouts must resolve their own anchors and protected regions.

**Working arrangement for review, not a selected path:** keep the current full-width opening and row composition. Protect the H2 and step text; reserve the right outer corridor for a vertical connecting stroke, with horizontal branches in the actual gaps between rows extending toward the right edge. Each branch meets the same vertical corridor. Scroll draws the connector toward the next boundary, then the corresponding horizontal branch outward; reverse scroll retracts it. Exact segment extents, direction and reading synchronization remain review choices. This does not authorize the deferred rules/type audit (#2), a restored split/sticky H2, or any UI edit.

**Engineering proposal:** a small declarative segment map (anchor endpoints, axis, predecessor and scroll interval), resolved from shared layout landmarks at setup/refresh; thin decorative elements animated with the installed GSAP stack. Avoid per-frame layout measurement, React state updates for drawing progress, continuous idle loops and a new rendering dependency. Transform-based drawing is a candidate, not measured performance evidence. Narrow layouts need fewer segments in remaining margins; reduced motion presents the completed arrangement without spatial drawing. Preserve existing cumulative reading/hover behavior independently of this scroll-only drawing mechanism.

**Implementation authorized and completed locally — 2026-10-26:** LV requested implementation on `polly`, with a simple static final arrangement on mobile. Replaced the rejected text displacement with stationary text and six decorative segments: one right-corridor connector and one outward boundary branch per row. A typed segment map declares endpoints, axis, predecessor and duration; CSS owns the shared content inset/corridor geometry. No general automatic obstacle-routing engine or preset catalog was added. The opening remains full-width and clear of linework. Removed the repeating vertical background and former full-width row rules/crosshair topology for this experiment. Cumulative text focus and temporary cumulative hover remain separate from line drawing. Desktop timelines use linear easing, numeric scrub, sequential row boundaries and a clamped final scroll endpoint; mobile and reduced motion show completed lines. No new dependency, per-frame layout reads or React progress updates. Visual approval of item #1 and measured physical-device performance remain pending. [Evidence](reviews/2026-10-26-polly-process-lines/README.md).

**LV correction and replacement — 2026-10-26:** LV rejected the implemented right-edge-only stroke: it removed roughly95% of the original grid rather than making that grid controllable. The right-corridor arrangement above is superseded, not approved. Restored a distributed grid using the original14% rhythm at16/30/44/58/72/86% (the unwanted2% left-edge column remains omitted). Each row has six upper/lower column pairs and a full-width boundary. Shared protected reading bands, measured from actual title/description bounds with24px clearance, interrupt vertical strokes around content. The opening remains clear. Explicit endpoints and timeline phases preserve semantic orchestration; CSS owns column geometry and measured row variables own exclusions. This is a simple row-wide exclusion band, not automatic pathfinding or per-glyph avoidance. Desktop scroll draws upper columns, lower columns, then the boundary toward the right; mobile uses a reduced static column set and reduced motion shows completed strokes. Measurements happen on setup/refresh rather than every animation frame. Superseded edge-only captures remain historical evidence. Item #1 still needs LV visual approval.

**Visibility refinement — LV, 2026-10-26:** LV found the distributed grid direction acceptable to continue and requested stronger visibility, without approving the entire stage. Grid stroke alpha increased from0.045 dark/0.05 light to0.14 in both themes; horizontal grid boundaries now use the same grid token. Retained1px stroke thickness, exclusions, geometry and scroll behavior. This is local grid visibility tuning, not dark/light scaffold refinement.

**Intersection markers — LV, 2026-10-26:** Restore exactly two11px “+” joints at the shared44% vertical grid column: boundaries after steps1 and2 only, where the neighboring rows provide all four arms. No marker after step3 or at the closing/footer three-arm junction. Desktop reveals each marker as the next row draws its upper arm; mobile/reduced motion show it statically. Shared grid anchor and half-pixel centering align marker centers to the1px strokes. This scoped restoration does not approve item #1 or start the deferred #2 audit.

**Scroll-heated joints — LV, 2026-10-26:** Both markers remain neutral through30% of their individual activation timeline (the following row's scroll range), then interpolate toward the existing AUGEO `--accent` over the remaining70%. Reverse scroll cools them back to neutral. A local percentage property drives CSS `color-mix` between live neutral/theme and accent tokens; no duplicated orange literal. Mobile/reduced motion retain the static final state, now accent-colored. Geometry, count and grid colors are unchanged.

**Ignition legibility refinement — LV, 2026-10-26:** Heating now begins at25% of the joint activation range and reaches full accent at85%. A small cross-shaped accent drop-shadow grows during70–85% (maximum4px blur/75% accent) and subsides during85–100%. This bounded scroll-scrubbed flare is explicitly requested, reverses with scroll and has no idle loop. Mobile/reduced-motion states keep the completed accent without flare. This supersedes the earlier30% threshold/100% color-arrival timing; count, anchors and grid behavior remain unchanged.

**Blink replacement — LV, 2026-10-26:** First joint heating now starts at20%; second retains25%. Both reach full accent at85%. Replaced the preceding glow with a single scroll-scrubbed blink: opacity1→0.15 during85–90%, then0.15→1 during90–95%, steady afterward. No drop-shadow/filter or repeating flash. Reverse scroll retraces the sequence. Mobile/reduced motion remain static full-opacity accent. This supersedes the glow instruction above; count and placement are unchanged.

**Joint visibility correction — LV, 2026-10-26:** LV found the small markers hard to see, especially on light. Increased their SVG viewport11→17px and actual strokes to15px length/2px thickness. Raised blink minimum opacity0.15→0.55 so ignition no longer nearly erases the symbol. A local `--process-joint-accent` retains `--accent` in dark and derives an85% accent/15% foreground mix in light for stronger contrast; the global brand token is unchanged. Timing20%/25%, two-marker count and shared centers remain unchanged. This supersedes the earlier11px/1px marker and low-opacity blink values.

**Stroke coherence correction — LV, 2026-10-26:** LV found the heavier marker inconsistent with the page linework. Markers now use15px viewport/15px arms with1px strokes matching the grid, superseding17px/2px. Retained the improved light accent,55% blink floor and20%/25% timing; visibility must come from color/activation rather than a heavier drawing language.

**Intermediate marker weight — LV, 2026-10-26:** LV found the restored1px markers too faint. Use1.5px stroke on the same15px shape as an intermediate between the rejected2px weight and faint1px. All color, timing, opacity and placement remain unchanged; visual review remains pending.

**Restrained intersections — LV, 2026-10-27:** Keep the two desktop joints in the same `--process-grid-line` color as their surrounding strokes, retaining15px/1.5px geometry and the initial reveal when the fourth arm forms. Remove accent heating and blink entirely. Hide both joints below1024px; retain the static mobile grid. Reduced-motion desktop keeps neutral static joints. This supersedes all earlier marker color/blink/mobile-visibility decisions; item #1 remains pending visual approval.

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
- Hosting: Vercel, team `augeocreative`, production on `main` with push-triggered deployment integration. The 16/10 record identifies GitHub repository `lucavalente93/augeo-v1-landing`; the local remote still uses earlier name `lucavalente93/augeo-grid-hero`. Vercel project was identified as `augeo-grid-hero` in 13/10 records; its current name was not reconfirmed in that review. No configuration or remote was changed.
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
