# Releitura técnica do handoff AUGEO

Data: 22/10/2026. Estado: preparação para implementação; nenhuma mudança de interface executada.

## 1. Objetivo e interpretação

Transformar a direção visual de `augeo_AUDIT.md`, fornecida por Luca e atribuída ao Antigravity, em uma execução que eu consiga conduzir com decisões explícitas, mudanças pequenas e evidência verificável. O handoff permanece como referência criativa. Este documento registra minha interpretação técnica e suas divergências; não constitui aprovação visual ou substituição da especificação do projeto.

A intenção central é coerente: reduzir ruído, fazer as bordas reais organizarem o Processo, aproximar sua notação da linguagem da matriz e melhorar o ritmo entre as duas seções. Vou conservar essa intenção, mas adaptar exemplos de CSS, medidas pontuais e escolhas que colidem com decisões anteriores.

O pedido atual termina nesta releitura salva. Implementação, aquisição de fonte, execução de testes e novas capturas são etapas futuras.

## 2. Base examinada

- Handoff: `/home/luca/augeo/augeo_AUDIT.md`. SHA256: `4ebf935e0485165e4b3e96e55c070ce6bd7eeea9cd914201b3198024fa73c61a`.
- Projeto: `/home/luca/augeo/modular-bw-landing`, branch `section-process`, HEAD `5e46224456f8212f5437217c8e7c1d6627e7e462`.
- Código lido: `src/App.tsx`, `src/components/ProcessSection.tsx`, `src/components/ScrollCue.tsx`, `src/styles.css`; trechos pertinentes de `components/ui/kinetic-matrix.tsx` e `lib/matrix-motion.ts`.
- Contrato e decisões: `AGENTS.md`, `docs/WORKFLOW.md`, `docs/HERO.md`, partes pertinentes de `docs/BACKLOG.md` e `docs/02-WEBSITE_SPEC.md`; contexto registrado obtido por `augeo-orchestrator context augeo-website`.
- Testes existentes inspecionados por seletores e expectativas: `tests/scroll-cue.spec.ts`, `tests/hero-layout.spec.ts`, `tests/theme-grid.spec.ts` e `tests/matrix.spec.ts`.
- Capturas abertas: `/home/luca/augeo-snapshots/2026-10-21/desktop-full.png`, `mobile-full.png` e `desktop-detail-02.png`. Conferidos manifest e JSONs de CSS renderizado no mesmo diretório. Apesar do nome da pasta, o manifest registra captura em `2026-10-22T15:29:03.392Z`.

As capturas mostram o tema claro em 1440×1000 e 390×844. São evidência estática existente: não executei novamente o navegador, não validei hover, teclado ou animação em runtime e não suponho equivalência entre esses dois viewports e todos os demais. O manifest não vincula as imagens a um hash do código.

Na leitura inicial, apenas BACKLOG e EXECUTION_HISTORY apareciam modificados no Git. Essas alterações são anteriores a esta entrega e devem ser preservadas.

Na gravação final, encontrei uma consolidação documental concorrente já aplicada a AGENTS e módulos de documentação. Ela foi preservada. As referências de governança acima descrevem a leitura realizada antes dessa consolidação; a implementação futura deve reler o contrato vigente. Nenhuma alteração de código apareceu no status final consultado.

O `DESIGN.md` na raiz `/home/luca/augeo` descreve outra composição: HTML único, Manrope e nove seções. Não será usado como contrato desta implementação React. Os registros atuais mantêm a composição posterior à hero experimental; o 44/56 do Processo não é uma regra para o restante do site.

## 3. Ferramentas e recursos escolhidos

| Recurso | Uso concreto |
| --- | --- |
| React 19.2.8 + TypeScript 7.0.2 | Alterações nos componentes existentes, sem nova arquitetura de estado |
| Vite 8.2.2 + Bun | Execução e build pelos scripts existentes |
| CSS existente + Tailwind 4.3.3 | Layout, temas, camadas decorativas e animação do indicador; manter convenções atuais |
| Playwright 1.63.0 / Chromium | Futuras verificações de geometria, estados e capturas comparáveis |
| `rg`, leitura de código e `git diff` | Encontrar consumidores e revisar o alcance das mudanças |
| Visualizador de imagens | Inspeção das capturas existentes e, futuramente, do resultado renderizado |
| IBM Plex Mono Medium | Fonte proposta para os rótulos do Processo; arquivo ainda ausente no projeto |

Versões acima conferidas nos pacotes locais, além de `package.json`. Nenhuma biblioteca de animação, componente ou layout é necessária. O renderer atual permanece responsável pela matriz.

Li e apliquei as orientações de `augeo-context` e `augeo-react-frontend` nesta revisão. Não iniciei Impeccable: o trabalho é uma releitura técnica de direção fornecida, não uma nova concepção visual. Se uma etapa futura passar a criar alternativas de composição, o roteamento deve seguir o SKILL.md instalado e os playbooks aplicáveis. Não executei CLI ou workflow Impeccable nem deleguei a outro executor.

## 4. Decisões por item do handoff

### 4.1 Indicador de scroll: adotar a linguagem, preservar o ciclo de vida

**Decisão proposta:** trocar os triângulos por trilho, pulso e nó no componente `ScrollCue`, conservando o link nativo para `#processo`, o nome acessível e sua participação no fluxo da hero.

Usarei um trilho de 1×52 px, pulso de 20 px, intervalo de 4 px e nó de 5×5 px. O desenho soma 61 px. Como ponto de partida, manterei o invólucro atual de 36×63 px, com desenho centralizado, para preservar área de interação e espaço reservado. O exemplo de 16 px de largura do handoff não será copiado literalmente. O invólucro continuará no eixo de 48 px, abaixo do CTA, com margem mínima de 32 px e sem encolher no flex.

O novo desenho permanece oculto abaixo de 1024 px. A regra `display: inline-flex` do exemplo, fora desse recorte, poderia reintroduzi-lo no mobile. O recorte do pulso ficará no trilho; o foco do link deve continuar visível.

O `IntersectionObserver` e o listener de `visibilitychange` existentes já pausam o indicador. Serão reaproveitados com seus cleanups. Como haverá um elemento intermediário entre link e pulso, a propagação de `animation-play-state` precisará ser explícita no trilho e no pulso. Com movimento reduzido, o desenho será estático. Os spans decorativos terão `aria-hidden`.

O ciclo CSS proposto de 2,4 s é um ponto de partida visual. **Ele não reproduz exatamente a física da matriz.** O canvas usa duração variável de 1,3–2,1 s, interpolação com 12% de progressão em degraus e rastro proporcional ao percurso. A frase “exatamente essa física” e o exemplo de easing do handoff não são equivalentes. Minha escolha é um análogo visual em CSS, sem acoplar o indicador à simulação. Essa diferença será apresentada como decisão de implementação.

Também não há prova de que o indicador esteja escapando de seu contêiner: na captura intermediária ele ainda ocupa a faixa final da hero. A substituição reduz o peso visual, mas não autoriza adicionar um desaparecimento por scroll ou novo posicionamento absoluto.

**Aceite futuro:** link operável por teclado; pausa fora da tela e em aba oculta; retomada sem reinício indevido; estático com movimento reduzido; sem colisão com CTA ou aparecimento no mobile.

### 4.2 Cabeçalho secundário: remover e reconstruir a relação de alinhamento

**Decisão proposta:** remover `.process-header-secondary` e seu parágrafo da coluna direita. Sua função comercial é coberta pelos três passos. Não o moverei automaticamente para a esquerda: isso aumentaria a altura do bloco sticky e conservaria a repetição identificada no handoff.

No snapshot desktop, o bloco mede 186,625 px. O H2 começa em y=1113, enquanto o primeiro H3 começa em y=1306,625. Ao apenas remover o bloco, o H3 passaria aproximadamente para y=1120, ainda 7 px abaixo do H2. Portanto, y=1001 é o topo da lista, não o topo do título. A promessa de alinhamento imediato no handoff precisa dessa correção.

A troca do rótulo também modifica a conta: o atual tem 23 px de altura, incluindo borda e padding. Fonte, rótulo e alinhamento devem ser resolvidos no mesmo bloco de trabalho.

Usarei uma referência compartilhada de abertura desktop, inicialmente o atual `clamp(72px, 8vw, 112px)`. A primeira etapa terá seu padding superior relacionado a essa referência, à altura de linha do datum e ao intervalo de 24 px até o H3. A relação desejada é:

`topo do H2 = topo da primeira etapa + padding superior do datum + altura do datum + intervalo até H3`.

Definirei essa relação por tokens CSS e conteúdo em fluxo; não por `top` ou `translateY` corretivo no título. A aproximação óptica será conferida após carregamento da fonte. Se o rótulo quebrar, o conteúdo poderá crescer; a igualdade de coordenadas não deve produzir sobreposição.

Manterei o sticky existente como ponto de partida, conferindo sua chegada, permanência e saída antes do footer. Os 186 px desktop e 84,5 px mobile são medidas do conteúdo removido, não economia final garantida: tipografia, abertura e quebra de texto também mudarão.

### 4.3 Malha: separar decoração de estrutura

**Decisão proposta:** conservar o passo horizontal desktop de `14cqw` e sua origem de `2cqw - 1px`, mas retirar horizontais periódicas e nós da área direita. As únicas horizontais ali serão as bordas reais dos passos e do fechamento.

Implementação escolhida em `src/styles.css`:

1. O painel mantém as linhas verticais como background comum.
2. Uma camada decorativa absoluta do painel desenha horizontais e nós somente na área esquerda, recortada na divisória de 44% da composição atual.
3. Essa camada acompanha o painel completo, inclusive a área esquerda do fechamento. Ela não fica dentro do cabeçalho sticky, para não rolar junto com o título.
4. A decoração fica atrás do conteúdo, com `pointer-events: none`; bordas reais permanecem nos elementos estruturais.
5. Preservar os contêineres inline-size de section e panel. Uma malha reaplicada diretamente na coluna direita resolveria `cqw` contra outra largura e perderia o módulo original.

Não tentarei igualar alturas variáveis de passos a quadrados de 201,6 px. O conteúdo determina altura. Não usarei apenas uma camada semitransparente sobre o quadriculado atual, pois ela deixaria linhas horizontais vazarem no hover.

No mobile, a proposta inicial é `calc(100cqw / 3)`, com nós claros a 0,14. O ritmo vertical decorativo ficará na abertura; a lista usará verticais discretas e bordas dos passos. Isso evita aumentar o quadrado e continuar desenhando horizontais arbitrárias atrás dos textos. É uma adaptação explícita das propostas 3 e 5E do handoff. Conferirei os tokens escuros separadamente; 0,14 não será aplicado por substituição indiscriminada.

**Aceite futuro:** alinhamento da divisória em contêiner menor que o viewport; ausência de horizontais decorativas nos passos; nenhuma borda duplicada; nenhuma camada tapando texto, foco ou interação; continuidade do fundo ao rolar o sticky.

### 4.4 Hover: remover o conjunto de efeitos concorrentes

O problema não está apenas no `text-shadow`. O CSS também muda tracking do título, desloca o rótulo em −6 px, gira o quadrado e adiciona glows na linha e no nó.

**Decisão proposta:** remover esse conjunto nos passos. Manter fundo suave da célula, filete interno de 2 px em `var(--accent)`, aumento discreto do contraste da linha e rótulo em foreground. Título e rótulo não se deslocam nem mudam largura no hover. O quadrado permanece quadrado.

O hover continuará limitado a `(hover: hover) and (pointer: fine)`. Os passos são conteúdo, não controles: não adicionarei `tabIndex`, clique ou cursor de botão para fabricar um estado de foco. `:focus-within` só teria função se houver um controle real dentro do passo; hoje não há. O foco do link de continuação e dos CTAs permanece tratado diretamente.

### 4.5 Rótulos e tipografia: usar dados existentes e uma fonte local

**Decisão proposta:** IBM Plex Mono Medium 500, começando em 12 px equivalentes a `0.75rem`, line-height 1,25 e tracking menor que o atual. Usarei `step.index`, já presente no tipo e nos três registros, para renderizar `01 // ENTRADA`, `02 // ENTENDIMENTO DO CENÁRIO` e `03 // DIRECIONAMENTO E PROPOSTA`.

O rótulo perde caixa, borda e fundo; o texto fica no token muted. O quadrado de 5 px fornece o acento laranja. A linha intermediária passa a sólida. A estrutura continua um `ol` com três `li`; não haverá numeração derivada de strings duplicadas ou estado React.

A família proposta ainda não está em `src/assets/fonts`. A distribuição oficial oferece arquivos web e instalação manual, e o projeto IBM Plex informa licença OFL: [documentação de IBM Plex Mono](https://github.com/IBM/plex/blob/master/packages/plex-mono/README.md) e [repositório oficial](https://github.com/IBM/plex/). Na implementação, obterei o WOFF2 Medium com cobertura dos caracteres portugueses e sua licença, registrando origem e versão. Destinos propostos: `src/assets/fonts/IBMPlexMono-Medium.woff2` e `OFL-IBMPlexMono.txt`, com `@font-face` e `font-display: swap`. Os nomes locais são propostos; o binário ainda não foi adquirido ou validado.

O token será específico do Processo (`--process-font-mono`). Share Tech Mono também é usada no botão de tema: não farei uma substituição global por acidente. Os labels do canvas usam outra pilha monospace e não dependem desse arquivo.

No mobile, texto longo deve poder quebrar sem comprimir a linha a ponto de produzir overflow. A linha decorativa pode encolher até zero; o rótulo terá `min-width: 0` e quebra normal por palavras. A legibilidade prevalece sobre manter tudo em uma linha. Não tratarei a troca por uma fonte de fallback como conclusão visual equivalente.

### 4.6 CTA claro: corrigir também a combinação de cores sugerida

Confirmado no CSS: o hover genérico aplica branco ao fundo dos dois CTAs, e a exceção clara cobre apenas `.process-cta`.

**Decisão proposta:** unificar a exceção clara com `:root.light :is(.hero-cta, .process-cta):hover`, usando fundo `var(--accent)` e texto `var(--accent-foreground)`, atualmente `#111`. O texto branco sugerido pelo handoff sobre `#ff482c` resulta em contraste aproximado de 3,38:1; `#111` resulta em 5,59:1. Valores calculados localmente a partir das cores sRGB.

Isso preserva o destaque laranja e melhora a legibilidade do texto pequeno. Conferir foco, hover e press nos dois temas; manter destinos atuais. O formulário `#entrada` continua ausente e não será inventado para fechar esta revisão visual.

### 4.7 Parágrafo da hero: melhorar a quebra sem fixar linhas

A captura desktop confirma “digital.” isolada. **Primeira mudança proposta:** `text-wrap: pretty` mantendo `max-width: 34ch`. Não reduzir diretamente para 31–32ch sem medir: estreitar o bloco pode aumentar a altura e deslocar o grupo inteiro da hero.

Se o navegador ainda produzir a órfã no viewport de referência, ajustar a largura em comparação renderizada. Não inserir `<br>` fixo no texto comercial. Conferir também desktop baixo, tablet, 320 px e texto ampliado. O observador de alinhamento atual já observa o parágrafo e o CTA; seu comportamento deverá permanecer íntegro.

### 4.8 Centro do lettering: pendência de direção, não bug automático

O vazio inferior é visível nas capturas, mas a posição do lettering segue uma decisão registrada: seu centro acompanha o H1 desktop. Trocar a altura de `.matrix-title` por 100% muda essa relação. O centro geométrico do painel também não prova centro óptico.

**Recomendação nesta releitura:** preservar o alinhamento com H1 na primeira implementação dos demais itens e reavaliar o equilíbrio depois da nova quebra de texto e do indicador. Não adicionar a barra de metadados sugerida apenas para ocupar espaço; ela acrescentaria um elemento editorial ainda não selecionado.

Este item do handoff fica explicitamente pendente. Se a direção escolhida for centralizar o lettering, a mudança deve incluir a dependência em `App.tsx`, o token `--hero-heading-center-y`, os testes de alinhamento e a origem usada pelo renderer reativo. O componente observa o frame `.matrix-title`; uma alteração de posição deve ser conferida junto com hover, click e retorno ao repouso. Não será apresentada como uma correção isolada de uma linha de CSS.

### 4.9 Nota de fechamento: ampliar a medida sem prometer duas linhas

**Decisão proposta:** partir de `max-width: 48ch`, limitado pelo espaço real da coluna, e usar `text-wrap: pretty`. O snapshot registra 380 px para a nota e cerca de 538 px disponíveis no bloco esquerdo. `48ch` não equivale automaticamente à largura inteira da coluna.

Conferir a nota depois de estabilizar a abertura e o footer. A meta é eliminar uma última palavra isolada e equilibrar o fechamento, sem forçar duas linhas em toda largura ou alterar o conteúdo comercial.

## 5. Mapa de alterações futuras

| Arquivo | Alteração prevista |
| --- | --- |
| `src/components/ScrollCue.tsx` | Substituir os dois SVGs por trilho/pulso/nó; preservar link e ciclo de pausa |
| `src/components/ProcessSection.tsx` | Retirar lead redundante; mostrar `step.index`; conservar conteúdo dos passos e CTA no footer |
| `src/styles.css` | Camadas da malha, datum, alinhamento inicial, estados de hover, fonte, cue, quebra dos parágrafos e CTA claro |
| `src/assets/fonts/` | Novo arquivo de fonte local e licença, após aquisição verificada |
| `tests/scroll-cue.spec.ts` | Migrar expectativas de dois triângulos, cores e fases para pulso; atualizar rótulos e retirada do lead |
| `tests/matrix.spec.ts` | Atualizar verificações específicas do desenho do cue; conservar integridade e alinhamento da matriz |
| `tests/hero-layout.spec.ts` | Adaptar fixture que esconde SVGs; conservar invariantes de separação CTA/cue e crescimento de conteúdo |
| `tests/theme-grid.spec.ts` | Atualizar módulo mobile e leitura das camadas; preservar prova em contêiner estreito e troca de tema |
| `docs/HERO.md`, `docs/BACKLOG.md`, histórico | Registrar apenas o que for implementado e verificado, mantendo pendências distintas |

`src/App.tsx`, `components/ui/kinetic-matrix.tsx` e `lib/matrix-motion.ts` são dependências examinadas, sem alteração planejada na primeira passagem. O item 4.8 seria uma decisão separada. Remover CSS obsoleto junto de seus consumidores; não acumular overrides contraditórios no fim da folha.

## 6. Sequência de execução proposta

1. Reconciliar branch e diff novamente antes de editar. Preservar trabalho do usuário e registrar baseline visual atual em ambos os temas, se a implementação for iniciada.
2. Obter e conferir a fonte. Implementar conjuntamente rótulos, retirada do lead, abertura da primeira etapa e hover: essas mudanças compartilham geometria.
3. Separar as camadas da malha desktop/mobile e verificar a relação com as bordas reais e o sticky.
4. Trocar o indicador preservando seu invólucro, fluxo e pausa. Migrar as expectativas que especificavam os triângulos.
5. Aplicar correções de CTA e quebra de texto; conferir efeitos sobre a posição do H1/lettering e o footer.
6. Executar validação pertinente, inspecionar capturas e apresentar o resultado com as divergências desta releitura. O item de centralização do lettering permanece identificado, sem desaparecer do escopo por omissão.

Não há necessidade de subagentes para essa sequência. O benefício da divisão entre Antigravity e esta execução está em conservar sua leitura visual e traduzi-la em dependências e critérios técnicos. Um novo parecer visual só deve entrar com foco concreto após existir resultado comparável.

## 7. Critérios de validação para a implementação

As verificações a seguir estão planejadas, não executadas nesta entrega:

- `bun run build` e suíte pertinente via `bun run test`, depois de migrar expectativas realmente substituídas. Não apagar testes de ciclo de vida para acomodar o novo desenho.
- Desktop de referência 1440×1000 para comparação com o handoff; 1440×900 e 1024×600 para limites de altura; 1023 px para a transição; 390×844 e 320×740 para telas estreitas; contêiner mais estreito que o viewport.
- Temas claro/escuro, movimento normal/reduzido, teclado, hover com ponteiro fino, scroll na transição hero/Processo e texto ampliado. Captura estática não substitui essas interações.
- Fonte realmente carregada antes de medir; datum longo sem overflow; H2 e primeiro H3 relacionados pela abertura; conteúdo sem clipping; sticky terminando sem cobrir o footer.
- Bordas estruturais legíveis sem horizontais decorativas atravessando a lista; cue sem interferência no CTA; foco visível; matriz sem remontagem indevida ou regressão de warp.
- Capturas antes/depois com mesmo viewport, tema e estado de movimento. Build aprovado não será prova de qualidade visual.

O projeto já registra restrições de sandbox para sockets/Chromium. A disponibilidade instalada foi conferida; a execução de navegador desta sessão não foi provada. Se a validação futura for bloqueada, registrar o erro e a cobertura faltante, sem alterar a aplicação para contornar o ambiente.

## 8. Resultado desta releitura e pendências

A estratégia de implementação está definida: componentes atuais, CSS em camadas, fonte mono local, dados existentes e preservação do lifecycle. As principais adaptações ao handoff são o cálculo real de alinhamento, o tratamento conjunto dos efeitos de hover, a correção de contraste, a distinção entre pulso CSS e física do canvas e a preservação provisória do lettering alinhado ao H1.

Permanecem pendentes: aquisição e conferência da fonte; ajuste óptico após renderização; decisão sobre o novo centro do lettering ou metadados; implementação; testes e revisão visual do resultado. Essas pendências não impedem a entrega da releitura, mas impedem afirmar fidelidade visual ou conclusão da implementação.

Nesta etapa foram feitas leitura de arquivos, inspeção das três imagens existentes, consulta às métricas salvas, cálculo de contraste e consulta à distribuição oficial da fonte. Não foram alterados componentes, estilos, fontes ou testes; não houve build, execução de suíte, nova captura, commit, push ou publicação.
