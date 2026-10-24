# Project backlog

Updated on 2026-10-24. Current queue and latest delivery only. Contract: [ORCHESTRATION](ORCHESTRATION.md). Previous deliveries, commands and results: [history](archive/EXECUTION_HISTORY.md).

## Latest delivery — Experimental `lettering-finish`: linha de apoio óptica — 2026-10-24

- **Acabamento:** Harmonizada a linha de apoio do wordmark: os pés planos de `A` e `E` foram estendidos de `131u` para `133u`, aproximando-os do overshoot natural de `U`, `G` e `O` sem redesenhar as formas.
- **Snap:** O cálculo de baseline em `src/App.tsx` passou de `120/126` para `122/126`, mantendo o conjunto apoiado na malha de 72px e preservando a caixa, a escala e o centro do artwork.
- **Validação:** `xmllint`, `bun run build` e `git diff --check` aprovados; `agent-browser` verificou light/dark em 1440×900, footer mobile escuro em 390×844, `transform: none` no mobile e overflow `0`. [Registro](archive/EXECUTION_HISTORY.md#2026-10-24--experimental-lettering-finish-linha-de-apoio-optica).

Próximo passo: avaliação visual do Luca; esta rodada está no working tree e ainda não foi commitada.

## Latest delivery — Experimental `lettering-polish`: ritmo óptico do wordmark — 2026-10-24

- **Refinamento:** O lettering AUGEO preserva suas formas, scanlines e escala, mas agora usa deslocamentos por par mais perceptíveis na ordem de leitura (`AU`, `UG`, `GE`, `EO`). O espaçamento foi redistribuído para reduzir o vazio entre o `A` e o `U`, aproximar `G`/`E` e manter o `O` integrado sem deslocar o centro óptico do conjunto.
- **Critério:** A largura externa foi mantida centrada; não houve alteração na matriz cinética, na física dos nós, no baseline snap ou no override mobile.
- **Próximo passo:** avaliação visual do Luca em desktop/mobile; permanece no working tree até autorização explícita de commit/publicação. [Registro](archive/EXECUTION_HISTORY.md#2026-10-24--experimental-lettering-polish-ritmo-optico-do-wordmark).

## Latest delivery — Experimental `lettering-rescale`: escala e kerning óptico — 2026-10-24

- **Escala:** O lettering AUGEO foi reduzido em 5% no painel desktop e no footer móvel, preservando o comportamento responsivo existente.
- **Kerning óptico:** O SVG agora separa `A`, `U`, `G`, `E` e `O` em grupos na ordem de leitura e aplica microajustes simétricos de espaçamento, mantendo o centro visual e o padrão CRT.
- **Validação:** `bun run build` e `git diff --check` aprovados; `agent-browser` confirmou as dimensões `606.73px` desktop e `295.53px` mobile, sem overflow. [Registro](archive/EXECUTION_HISTORY.md#2026-10-24--experimental-lettering-rescale-escala-e-kerning-optico).

Próximo passo: avaliação visual do Luca; a experiência segue experimental e permanece no working tree até autorização explícita de commit/publicação.

## Latest delivery — Hero Matrix: Optical Lettering Alignment — 2026-10-24

- **Eixo absoluto da hero:** O lettering desktop foi deslocado `+5px` para que sua borda esquerda repouse no eixo central do viewport (`x=720` em 1440 px), preservando o centro óptico do painel.
- **Apoio na malha:** O conjunto desceu `4px` sobre o snap de linha de base existente, aproximando o lettering da linha inferior sem alterar a matriz cinética ou o mobile footer.
- **Validação:** `bun run build` e `git diff --check` aprovados; inspeção visual com `agent-browser` em Chromium 1440×900, sem overflow horizontal, com override mobile confirmado. [Registro](archive/EXECUTION_HISTORY.md#2026-10-24--calibracao-optica-do-lettering-augeo-na-matriz).

Próximo passo: avaliação visual do Luca; a implementação permanece no working tree até autorização explícita de commit/publicação.

## Latest delivery — Mobile Hero: Shader, Radial Light & Continuous Grid Alignment — 2026-10-24

- **Continuidade Atmosférica e Eliminação do Gap Visual:** Adicionada iluminação radial volumétrica elíptica calibrada (`--hero-vignette-center`, `--hero-vignette-edge`) e grid trilinear contínuo (`--hero-grid-size: calc(100cqw / 3)`) no fundo do Hero móvel (`.hero-copy::before`), abrangendo o header e o conteúdo tipográfico.
- **Alinhamento Perfeito de Colunas:** As linhas verticais do Hero alinham-se exatamente aos pixels das linhas de `#processo`, eliminando o corte seco e unificando a experiência móvel numa única prancheta técnica.
- **Calibração Dark / Light:**
  - Dark: Núcleo luminoso suave `rgba(255, 255, 255, 0.055)`, vinheta de borda `rgba(0, 0, 0, 0.38)` e linhas de grid `rgba(255, 255, 255, 0.045)`.
  - Light: Núcleo luminoso branco `rgba(255, 255, 255, 0.38)`, vinheta suave `rgba(17, 17, 17, 0.048)` e linhas de grid `rgba(17, 17, 17, 0.05)`.
- **Validação:** `bun run build` aprovado; validação visual via `agent-browser` (iPhone 390×844 @2x retina e desktop 1440×900) em modo claro e escuro.

## Previous delivery — ScrollCue: Scanline Raster Geometry & Aperture Refinement — 2026-10-24

- **Eliminação de Defeitos Subpixel:** Removidas espessuras e bordas fracionárias (`1.5px`/`1.25px`, `border-radius: 0.25px`) que causavam serrilhado, moiré e aspecto de ruído sujo.
- **Geometria Crisp em Pixels Inteiros:**
  - Segmentos (`.scroll-cue-seg`): 2 linhas de varredura de `1px` inteiro separadas por fenda de `2px`, com cantos nítidos em container de 8×4px.
  - Âncora (`.scroll-cue-anchor`): 3 linhas de varredura de `2px` inteiro separadas por fendas razor de `1px` (2 + 1 + 2 + 1 + 2 = 8px exatos), criando uma abertura simétrica e calibrada.
- **Micro-Substrato Estrutural:** Adicionado substrato dinâmico com `color-mix(in srgb, currentColor 8%, transparent)` em `.scroll-cue-seg` e 10% na âncora, dando corpo físico de placa de abertura técnica sem fragmentos flutuantes.
- **Validação:** `bun run build` aprovado (0 erros TypeScript, bundle Vite gerado); verificação visual com `agent-browser` em iPhone (390×844 @2x retina) em modo claro e escuro.

## Previous delivery — Mobile Layout: Matrix to Site Footer, Cue Activation & Calibrated Breathing Room — 2026-10-24

- **Matriz no Footer Geral (`.site-mobile-footer`):** No mobile (`< 1024px`), a matriz foi transferida do Hero para o encerramento da landing page (logo após `#processo`), mantendo proporção retangular panorâmica (`clamp(140px, 22dvh, 180px)`), `touch-action: pan-y` e interação por touch/curiosidade ao final da leitura. No desktop, permanece no painel direito de 56%.
- **Ativação e Calibração do Indicador 6 · 3 · 1 no Mobile:** O novo `ScrollCue` (matriz de microaberturas CRT com varredura âmbar GSAP) foi exposto no mobile com respiração equilibrada de 44px abaixo do CTA primário, alinhado à esquerda.
- **Ritmo e Altura Proporcional do Hero:** Sem vácuo artificial de 100dvh nem aperto excessivo: o conjunto Header + Hero ocupa organicamente ~65% a 70% do viewport móvel (altura total ~580px em telas 390×844), permitindo que o início da seção `#processo` já apareça na borda inferior convidando ao scroll, com o indicador conduzindo com clareza a rolagem.
- **Deduplicação de CTA:** CTA duplicado ao final do Processo ocultado no mobile.
- **Validação:** `bun run build` aprovado; validação com `agent-browser` (Chromium 390×844 e 375×667) aprovada com captura de tela e clique navegacional funcional.

## Previous delivery — global agent-browser adopted for Antigravity CLI — 2026-10-24

Luca selected `agent-browser` for routine browser automation instead of Playwright. Installed CLI 0.39.2 globally, installed its official skill and exposed it in Antigravity CLI's global skills directory. An always-loaded global rule and project AGENTS/WORKFLOW now specify that preference; existing Playwright checks are legacy and require an explicit request to run. A real Antigravity CLI verification recognized the global preference, located the skill and executed the installed CLI. Local Chromium smoke checks passed for theme switching, the Process link, desktop/mobile overflow and page errors; both screenshots were opened. [Evidence and limits](archive/EXECUTION_HISTORY.md#2026-10-24--agent-browser-global-installation-and-preference). Next: use this procedure for the next explicitly requested UI check; Luca's Process visual evaluation remains pending.

## Latest delivery — Process Scroll Telemetry & Cumulative Hover on v4 — 2026-10-24

Delivered the calibrated interaction and layout of `#processo` on `v4`:
- **Scroll Focus & Soltura do Lock:** O scroll guia o foco durante a descida pelo ledger; ao atingir a área de fechamento (`.process-closing`), o lock de scroll é automaticamente desengatado, devolvendo todos os steps ao estado estático neutro sem nenhum travado artificialmente.
- **Hover Cumulativo de Processo:**
  - Hover no Step 1: acende o Step 1.
  - Hover no Step 2: acende o Step 2 e o antecedente (1) também acende, visualizando o fluxo do processo construído.
  - Hover no Step 3: acende 1, 2 e 3 simultaneamente.
  - Ao retirar o mouse do grid: todos os steps retornam ao repouso normal. Zero multifoco concorrente.
- **Fechamento e CTA:** Estrutura limpa de fechamento com tipografia concisa (*"A contratação começa pelo diagnóstico."* e sub-statement com minúscula após ponto e vírgula), sem divisores quebrados ou desalinhamentos.
- **Validação:** Build aprovado; suite Playwright completa 33/33 aprovada. `main` intocada. Próximo passo: validação visual pelo Luca.

## Previous decision — Process baseline approved, hero reveal deferred — 2026-10-24

Luca approved the 22/10 corrected Process visual review as the current baseline on `v4`. It will still change, and the changes will be defined together before any implementation. The hero typography entrance reveal and magnetic CTA step are deferred until after `section-process`. [Record](archive/EXECUTION_HISTORY.md#2026-10-24--process-baseline-approved-hero-reveal-deferred). Next: agree on the Process changes with Luca, then implement on `v4`; `main` stays untouched.

## Previous delivery — scroll cue Option 3 CRT scanline array on v4 — 2026-10-24

Luca approved Option 3 (Scanline Ribbon / CRT Diode Array) to replace the flat CSS scaffold on `v4`. Rebuilt `src/components/ScrollCue.tsx` using `motion` (spring hover physics) and `gsap` (electron beam sweep timeline with phosphor decay). Segments are precision micro-scanline apertures with horizontal raster lines matching the `AUGEO` lettering and CRT matrix. Dead CSS `@keyframes` and `calc()` variables removed from `src/styles.css`. Build passed; 14/14 Playwright tests passed. Next: Luca's visual inspection of `ScrollCue`; then Step 2 (Hero typography entrance reveal + magnetic CTA).

## Previous delivery — scroll cue 6 · 3 · 1 scaffold — 2026-10-23

Luca approved the cue **concept and triangle composition**: rows of 6 and 3 segments plus an orange anchor, with an orange light travelling through them and hover compression toward the anchor. The current visual (flat squares hard-coded in CSS) is explicitly a **scaffold** to be rebuilt with better components. It replaces the interim Striped Shutter on `v3`. [Delivery evidence](reviews/2026-10-23-scroll-cue/README.md). Next: rebuild the cue's visual components when requested; behavior and composition are the reference.

## Previous delivery — shared context synchronization — 2026-10-22

Propagated compact instruction routing to `main` and `section-process`, preserving their separate interface implementations and pending evaluations. [Verification and text-size comparison](archive/EXECUTION_HISTORY.md#2026-10-22--context-efficiency-synchronization). Next: continue the explicitly selected workstream; synchronization does not resume pending work.

## Latest delivery — Process grid and datum correction — 2026-10-22

Luca rejected the independent left grid and point–rule–tag datum as unwanted AI slop. Removed the entire datum and redundant stage/index labels; steps begin with their existing titles. One shared vertical grid remains; desktop step boundaries now cross both columns at the same height. First-row opening reserves room below the manifesto. Build passed; pertinent tests 18/18, then final calibrated Process/grid checks 5/5. [Correction evidence](reviews/2026-10-22-process-correction/README.md). Next: Luca's visual evaluation; preserve this rejection rather than restyling the same tag formula.

## Latest delivery — audit rereading implemented on v3 — 2026-10-22

Implemented the supplied rereading: rail/pulse/node continuation, indexed local IBM Plex Mono labels, removed redundant Process lead, shared opening alignment, separated decorative/structural grid, stable hover, corrected light CTA colors and improved paragraph wrapping. Desktop lettering still follows H1; centering direction and `#entrada` remain pending. Build passed; migrated suite 30/30 and additional Process checks 2/2 passed in Chromium. Before/after captures and limits: [delivery evidence](reviews/2026-10-22-v3/README.md). Next: Luca's visual evaluation of `v3`; no creative approval or production publication inferred. Previous documentation consolidation is preserved separately in the workspace.

## Latest delivery — handoff rereading — 2026-10-22

Saved the [technical rereading](reviews/2026-10-22-augeo-audit-releitura.md): implementation choices, dependencies, corrections to the supplied examples and future acceptance criteria. Documentation only; no application changes or new tests/browser run. Font acquisition, rendered calibration and lettering-centering decision remain pending. Next: implement only when requested. Concurrent documentation consolidation preserved.

## Previous delivery — documentation deduplication — 2026-10-22

Consolidated repeated principles in their responsible sources and shortened default context. Documentation/skills only; no interface implementation or creative approval. Checks and measured context reduction: [record](archive/EXECUTION_HISTORY.md#2026-10-22--canonical-instruction-deduplication). Next: the main thread's requested handoff rereading remains separate work.

## Priority continuity - agent architecture

Paperclip + bridge and shared context are implemented. Last recorded pilot state: AUG-8 blocked after command denial/503 and recovery 409; AUG-9 in review. Evaluate the result at `http://127.0.0.1:4174` while the local server is active and reconcile the origin using preserved evidence. AUG-5/AUG-6 evaluation remains pending; AUG-7 is unexecuted. Technical write/browser grants were revoked.

Comparison data and qualifications: [18/10 record](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18). Skill availability and browser limits: [ORCHESTRATION](ORCHESTRATION.md#shared-skills---deployed-on-1810). These are recorded states, not a fresh Paperclip query.

## Current state

- Latest recorded publication: hero CTA/cue fix `aa12d8a`, 16/10; domain and hosting baseline in the specification. Repository remote checked on 18/10: `lucavalente93/augeo-v1-landing`.
- `section-process` contains the experimental Process section and theme/grid changes. Composition authority: [specification](02-WEBSITE_SPEC.md#5-public-process). Hero evaluation and block states: [HERO](HERO.md#current-block-plan).
- Latest visual evidence: refreshed 22/10 captures in `~/augeo-snapshots/2026-10-21/`, desktop 1440×1000 and mobile 390×844; [capture record](archive/EXECUTION_HISTORY.md#2026-10-22--refresh-dos-snapshots-de-playwright).
- Latest code checks: all 30 scenarios have passing evidence across the 21/10 suite and focused rerun, not a single 30/30 full run. [Validation record](archive/EXECUTION_HISTORY.md#2026-10-21--supplied-proportional-grid-explicit-theme-button-and-optical-refinement).

## Queue by workstream

| Workstream | Next action or dependency | Limit |
| --- | --- | --- |
| Agent architecture | Start `AUG-13` (`c4d0c9a7-45a2-44fc-afd2-ca76a925a626`, standby/`backlog`, no `Assignee`) to implement the Pre-Review Quality Gatekeeper (`qualityGate`); evaluate AUG-8/AUG-9; AUG-7 retained in backlog | `AUG-13` prepared without triggering tokens; only the previous fixture title was changed. |
| Hero | User evaluation and reconciliation of block 2 methodology | Sequence and criteria in HERO; do not advance motion, optimization or finishing. |
| Quality | Cover pointer input from the left column in isolation; consider Chromium/emulation limits at closure | No demonstrated physical devices/other engines, native zoom, CLS or hardware frame profiling. |
| Technical cleanup | Evaluate removing `pixel`, cue scope, splitting tests/matrix.spec.ts and moving assets | Separate proposals, outside the completed naming migration. |
| Figma | Check suitability of the two local PNGs before resuming manual import | Still untracked and excluded from the 18/10 push; availability does not prove provenance, equivalence, import or approval. Proposal in HERO. |
| Landing | Visually evaluate `#processo` (`src/components/ProcessSection.tsx`) and the `<a href="#processo">` link in `ScrollCue`, implemented on branch `section-process` (`AUG-12` parent Antigravity / `AUG-11` child Codex); define real form in `#entrada` | Experimental; current composition in the specification, evidence in history. `#entrada` remains pending. |
| Publication | Define redirection/canonical and metadata when in scope | Vercel Pro and WhatsApp Business postponed until website completion; no purchase authorized. |

The sockets/EPERM diagnosis is closed and its fallback is in WORKFLOW. The runner's initial HTTP wait is a separate observation, to investigate only if it again prevents necessary execution. ResizeObserver warnings in the synthetic 16/10 round had no isolated cause and must not be attributed to the correction without evidence.
