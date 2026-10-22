# AUGEO Website - Specification

Requirements and implementation reviewed on 2026-10-13; publication references reconciled on 2026-10-17 against local records and the address provided by the user, without a new remote lookup. This specification defines the complete landing and distinguishes requirements from published state. Hero composition, decisions and proposals: [HERO.md](HERO.md). Queue and latest delivery: [BACKLOG.md](BACKLOG.md). Procedures: [WORKFLOW.md](WORKFLOW.md). Dated evidence: [history](archive/EXECUTION_HISTORY.md).

## 1. Website role

Website purpose and priority: [AUGEO.md](AUGEO.md). The landing explains the context-first commercial model and converts suitable businesses into qualified contacts. Until public case studies exist, evidence comes from page quality, process clarity and precise sales intake. Content boundaries are in section 9.

## 2. First-version scope

### Included in the complete landing

- Header
- Hero
- Process
- Intake and screening form
- Mobile visual footer integrated into the hero composition

### Outside this version's scope

- Standalone services or capabilities section
- Portfolio, case studies, clients, metrics and testimonials
- Institutional about/team section
- FAQ
- Internal pages, blog and client area

**Published state:** Header, hero with copy and “Apresentar negócio” conversion button, hover-reactive matrix and desktop cue. On mobile, the entire matrix component was repositioned as a visual footer below copy and CTA. Process and intake form remain planned.

## 3. Architecture and flow

| Layer | Function and state |
|---|---|
| Header | Brand with return to top; implemented. |
| Hero | Positioning, interactive signature and conversion button; implemented. |
| Mobile footer | Matrix and lettering close the composition below copy and CTA; implemented. |
| Process | Explain understanding, direction and proposal; planned. |
| Form | Receive business context for screening; planned at `#entrada`. |

“Apresentar negócio” is the conversion entry already present in the composition. The next step is connecting its destination to the real form; current code uses `href="#entrada"`.

## 4. Hero

Composition, applied copy, interaction, responsive behavior and continuation/conversion roles are owned by [HERO.md](HERO.md). That document distinguishes the published baseline from the `section-process` experiment.

## 5. Public process

The process is the landing's main commercial element. It shows that an initial request is read and prioritized before becoming scope and proposal, without suggesting the agency prevents clients from choosing a solution.

### Public steps

1. **Entrada** - the business presents its current situation, goal and initial request.
2. **Entendimento do cenário** - AUGEO reads context, relationships, priorities and points requiring intervention.
3. **Direcionamento e proposta** - AUGEO returns a path with scope, stages and investment so the client can decide whether to proceed.

### Disclosure boundary

The website communicates the working model, not the full internal procedure. Initial call, brief structuring, handoffs, validation and second call belong to operations and are documented in registered global source `global:business/augeo.md`, resolved through `augeo-orchestrator context augeo-website`; show them publicly only when they help the lead decide.

## 6. Sales intake and form

The complete landing will have one intake form, not yet implemented. It does not create two separate journeys or require visitors to know which service to buy.

### Form role

- Collect enough information for initial screening.
- Allow leads to present an objective request or a still-undefined need.
- Prepare the initial conversation without preemptively promising a proposal or engagement.

### Minimum structure

- Identification and return contact channel.
- Business name and context.
- Goal or problem motivating contact.
- Current stage/situation.
- Existing links, references or materials, if available.
- Field to select or describe the initial request.
- Budget/investment range only if a later commercial decision confirms it should be collected at intake.

### Requests the form must accommodate

- Identity or visual direction.
- Website.
- Acquisition through Meta Ads.
- CRM, automation or integration.
- Help understanding which path makes sense.

These options qualify contact; they are not a catalog, fixed package or commitment to standalone engagement.

### Planned post-submission behavior

After submission, the interface confirms receipt and explains that AUGEO will perform an initial review before responding. The message must follow the screening/response policy in the same registered global source `global:business/augeo.md`, without assuming a deadline, automatic quote or guaranteed meeting.

## 7. Visual direction

### Principle

**Precise structure, unstable behavior.** The language combines controlled systems - grids, vectors, modules, notation and typography - with deformation, interference and organic forms conditioned by rules.

### Established foundations

- Existing hero typography/colors/theme behavior: [HERO](HERO.md#themes-and-brand). Archivo remains a declared alternative; Share Tech Mono is used in component/demo. The full system for future sections still needs consolidation.
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

Applied hero copy is maintained in [HERO](HERO.md#concept-and-hierarchy). Process copy and client decision autonomy are defined in section 5; form submission states remain draft below. Messaging explains direction, presence and digital operations without turning the website into a service catalog.

Avoid promises of results, quick returns, formulas, total solutions without context, and any claims about nonexistent case studies, clients or metrics.

## 10. Implementation

### Confirmed requirements

- Responsive, accessible and performant landing.
- Hero interaction adapted to mouse, touch and reduced motion.
- Form with validation, submission confirmation and routing to sales screening.
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

- Required form fields and validation; receiving backend/service, storage, abuse protection and failure handling.
- Data processing, privacy information and operational screening/response parameters.
- CMS only if a real content-editing need arises; no adoption decided.
- Analytics and tracking when a measurement goal is defined, respecting applicable privacy and consent.
- Canonical address and redirection between root domain and `www`, without confirmed configuration yet.
- Technical owner for maintenance/publication, not yet defined operationally.

Stack, hosting, domain and initial matrix interaction were defined and implemented. Choose future commercial integrations according to intake flow and operations without reopening these foundations by default.

## 11. State and next decisions

Current delivery state and next action: [BACKLOG](BACKLOG.md#current-state). Hero refinements and evaluation: [HERO](HERO.md#current-block-plan).

### To finish the complete landing

- Structure Process and form with copy consistent with positioning. Preserve the implemented mobile footer.
- Finalize required fields, receiving tool, data handling, screening owner and success/error messages.
- Implement `#processo` and `#entrada`, integrate navigation/continuation and connect CTA to the working form.
- Define placement of public channels using the existing email; WhatsApp Business depends on future setup.
- Validate the complete experience: responsiveness, keyboard/focus, contrast, reduced motion, loading, submission, failures and actual receipt for screening.
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
