# Backlog do projeto

Atualizado em 2026-10-18. Fila, dependências e última entrega. Contrato da integração em [ORCHESTRATION](ORCHESTRATION.md); evidências e entregas anteriores no [histórico](archive/EXECUTION_HISTORY.md). Requisitos, hero e procedimentos mantêm suas fontes próprias.

## Continuidade prioritária — arquitetura agêntica

**Estado:** Paperclip + ponte Bun + Antigravity/Codex e contexto privado/Obsidian implantados. Leitura, passagem, retomada e piloto isolado de escrita/navegador validados. Resultados aguardam revisão humana; o padrão é leitura e a concessão temporária de escrita foi revogada.

**Próxima ação:** avaliar o piloto comparativo `AUG-8` e sua revisão `AUG-9`, com resultado visível em `http://127.0.0.1:4174` enquanto o servidor local estiver ativo. A fixture atingiu o aceite técnico; AUG-8 permanece `blocked` após recusa de comando e ERROR/503, com recuperação de estado recusada por 409. AUG-9 está em revisão. Resolver esse estado com evidências preservadas, sem repetir edição/navegador/modelo por reflexo. Pontos 3–4 exercitados em escopo de piloto, substituindo temporariamente a entrega real por pedido de Luca. Avaliação humana de AUG-5/AUG-6 permanece pendente; AUG-7 continua em backlog, sem execução. Não retomar hero ou publicar por continuidade.

**Referência para a próxima comparação:** piloto AUG-5 + revisão AUG-6 = **US$ 1,63 em equivalente de API**, normalizado para GPT-6.1 Sol Standard; não é cobrança efetiva. Contadores, fórmula fixa, evidências e limites no [histórico](archive/EXECUTION_HISTORY.md#referência-de-custo-do-piloto-para-comparação-futura--2026-10-17). Comparar pelo uso da tarefa no Paperclip, distinguindo escopo e revisão/retomadas; o total mensal inclui outros pilotos.

**Comparação observada em 18/10:** AUG-8 + AUG-9 = **568.472 tokens / US$ 0,3314072 equivalente**, contra 3.233.206 / US$ 1,625149: reduções de **82,4% em tokens** e **79,6% no equivalente**. Inclui as duas tentativas Antigravity e a revisão Codex; não somar novamente a tarefa filha ao total da árvore. Mesmo tipo de alteração e helper Chromium, mas histórico de retomadas, preparação e estado operacional diferem; modelos nominais e esforço Codex foram conferidos iguais; não atribuir toda a redução ao contexto selecionado. Detalhes no [registro comparativo](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18).

**Direção implementada:** um executor por entrega, quatro fontes essenciais mais fontes selecionadas por tarefa, checks nomeados/justificados executados pela ponte após o modelo parar e segundo agente apenas por passagem explícita com motivo/foco. Hashes/snapshots integrais, permissões e revisão humana preservados. Dashboard recebe tokens automaticamente e exibe consumo; cobrança efetiva continua indisponível. Sem relatório paralelo. Impeccable restrito à concepção visual real por etapas, conforme [ORCHESTRATION](ORCHESTRATION.md#direção-de-eficiência-confirmada-em-1710).

## Estado atual

**Skills em 18/10:** Impeccable e `augeo-react-frontend` compartilhadas por links com Antigravity CLI/IDE; React também exposta ao Codex. `AUG-10` confirmou descoberta/leitura das três skills no CLI e voltou a `in_review`, com fontes/arquivos preservados. Gates humanos por etapa documentados, sem execução de design. Descoberta na IDE e geração real de imagem seguem sem prova; CLI relatou `image-generator` disponível via subagente e nenhum navegador nativo. Contrato em ORCHESTRATION e evidências no histórico. Essa entrega não resolve os estados anteriores de AUG-8/AUG-9 nem autoriza trabalho no hero.

- Website informado pelo usuário: `https://www.augeocreative.com`. Hero, CTA e matriz publicados; Processo e formulário ainda previstos. Domínio informado não comprova redirecionamento canônico.
- Última publicação registrada: reparo de colisão CTA/indicativo em `aa12d8a`, deploy Production confirmado em 16/10. Última suíte registrada: 26/26 em 1,5 min e build aprovado; são evidências daquele código, sem nova execução nesta modularização.
- Hero: bloco 2 implementado, com avaliação visual global e fechamento metodológico pendentes. Aprovação do fundo mobile foi específica. A correção de 16/10 não encerra o bloco 2; não há autorização automática para blocos 3–6.
- Repositório: `lucavalente93/augeo-v1-landing`; remoto local `origin` conferido em 18/10 com esse endereço. Fetch aprovado; base local e `origin/main` coincidentes antes dos commits desta entrega.

## Fila por frente

| Frente | Próxima ação ou dependência | Limite |
| --- | --- | --- |
| Arquitetura agêntica | Iniciar `AUG-13` (`c4d0c9a7-45a2-44fc-afd2-ca76a925a626`, em standby/`backlog`, sem `Assignee`) para implementar o Gatekeeper de Qualidade Pré-Revisão (`qualityGate`); avaliar AUG-8/AUG-9; AUG-7 preservado em backlog | `AUG-13` preparado sem disparo de tokens; na fixture anterior, apenas título alterado. |
| Hero | Avaliação do usuário e reconciliação das etapas metodológicas do bloco 2 | Sequência e critérios em HERO; não antecipar movimento, otimização ou acabamento. |
| Qualidade | Cobrir isoladamente o ponteiro vindo da coluna esquerda; considerar limites de Chromium/emulação no fechamento | Sem aparelhos físicos/outros motores, zoom real, CLS ou perfil de frames em hardware comprovados. |
| Limpeza técnica | Avaliar remoção de `pixel`, escopo do cue, divisão de tests/matrix.spec.ts e movimentação de assets | Propostas separadas; não são parte da migração nominal concluída. |
| Figma | Conferir adequação dos dois PNGs locais antes de retomar importação manual | Ainda não rastreados e excluídos do envio de 18/10; disponibilidade não comprova origem, equivalência, importação ou aprovação. Proposta em HERO. |
| Landing | Avaliar visualmente `#processo` (`src/components/ProcessSection.tsx`) e o link `<a href="#processo">` em `ScrollCue` implementados na branch `section-process` (`AUG-12` pai Antigravity / `AUG-11` filho Codex); definir formulário real em `#entrada` | Implementado e validado (`27/27` Playwright, build e detector `[]`) em `section-process`, sem alteração em `main`. Preservar footer visual mobile e manter `#entrada` pendente. |
| Publicação | Definir redirecionamento/canonical e metadados quando em escopo | Pro da Vercel e WhatsApp Business adiados até concluir o site; nenhuma contratação autorizada. |

O diagnóstico de sockets/EPERM está encerrado e seu fallback está em WORKFLOW. A espera HTTP inicial do runner é uma observação distinta, a investigar somente se voltar a impedir execução necessária. Avisos ResizeObserver na rodada sintética de 16/10 não tiveram causa isolada e não devem ser atribuídos à correção sem evidência.

## Última entrega — implementação Impeccable da seção PROCESSO e revisão pós-implementação no Paperclip (`section-process`) — 2026-10-18

- Isolamento Git preservado: todo o trabalho permanece na branch `section-process` (criada a partir de `d284b62`), mantendo `main` intacta e `docs/refs/figma/` não rastreado.
- Rastreabilidade e revisão real no Paperclip estruturadas em árvore pai/filho:
  - Ticket pai `AUG-12` (`bcabbd93-a912-45e1-a6cf-01928244795f`, `Assignee: Antigravity`, `in_review`): direção visual Impeccable e implementação de UI. Após rejeição humana da 1ª composição (por monotonia proporcional `44fr / 56fr`, diagramas/animações primitivas, CTA dentro do bento grid e AI slop de tag no 1º grid), `AUG-12` foi reconciliado (removida `executionPolicy` de estágios criada ao editar Reviewers/Approvers na UI), recebeu `write-grant` delimitado e executou o retrabalho em `57d00c29-637e-46e9-a971-e57354727458` seguido do run final de verificação da ponte `9ed78be0-c25e-47eb-b07a-f124b8c9815a` (`succeeded`, `build: exit 0`, `test: exit 0`, `write-grant` revogado).
  - Ticket filho `AUG-11` (`90b13a80-fc32-44b1-b8d9-f3400bd88b42`, `Assignee: Codex`, `in_review`, `parentId: bcabbd93-a912-45e1-a6cf-01928244795f`): dois runs reais na ponte (`59ba583b-acca-40ee-b011-47b9811c1907` para definição arquitetural pré-implementação e `75a74af5-45c5-4dd3-86ba-b1f2d7d70652`, sessão retomada `01a15147-2382-70b2-96d4-0c49c6257cef`, para auditoria pós-implementação).
- Redesenho da seção `#processo` conforme feedback humano:
  - Removidas todas as tags/badges de AI slop (`.process-coordinate`, `.process-step-tag`) e os SVGs/animações primitivas (`StepDiagram`).
  - Substituída a repetição mecânica `44fr / 56fr` por malha arquitetônica assimétrica de 12 colunas no desktop (`.process-header` `1/8` + `8/13`; etapa `01` em `1/6`; etapa `02` em `6/13` com progressão diagonal e escala intermediária; etapa `03` em largura total `1/13` com sub-grade `1/5` + `5/12` e maior peso tipográfico), preservando integralmente a explicação e o ritmo da copy (incluindo menção ao briefing validado na etapa 03).
  - Retirado o CTA (`a.process-cta[href="#entrada"]`) de dentro do grid das etapas para um rodapé próprio (`footer.process-closing`) ao final da seção.
  - Mantidos `ScrollCue` como `<a className="scroll-cue" href="#processo" aria-label="Conhecer nosso processo">`, `--process-inset` (`20px` mobile, `48px` desktop) sem mutar `--hero-copy-inset`, temas claro/escuro e `prefers-reduced-motion: reduce`.
- Verificação executada pela ponte no run `9ed78be0-c25e-47eb-b07a-f124b8c9815a`: `bun run build` aprovado (`exit 0`), `bun run test` aprovado (**27/27 testes**, `exit 0`) e `impeccable detect --json src/App.tsx src/components/ProcessSection.tsx src/components/ScrollCue.tsx src/styles.css` = `[]`.
- Ajuste na ponte (`agent-orchestrator/src/paperclip.ts`, `src/task-policy.ts`, `src/access.ts`, `src/grant.ts` e suíte `tests/`): (1) tickets em `in_review` despertados por rejeição humana explícita (**Solicitar correção**, `wakeReason: "issue_review_path_lost"`) ou por comentário de usuário no chat (`wakeReason: "issue_commented"` / `on_demand` com último comentário `authorType: "user"`) fazem checkout direto (`expectedStatuses: ['todo', 'in_progress', 'in_review']`) e retomam a sessão salva da tarefa sem exigir troca manual de status para `todo`; (2) o bloco `augeo-task` na descrição do ticket passa a aceitar `"writePaths"` (aplicando todas as travas Bubblewrap contra `.git`/fontes canônicas/symlinks), persistindo durante todo o ciclo de revisão/correção do ticket no Paperclip sem depender de comandos manuais de `write-grant` no terminal. `bun run typecheck` e `bun test` aprovados em `agent-orchestrator` (**28/28 testes, 131 asserções**).
- Preparada em standby no Paperclip a tarefa `AUG-13` (`c4d0c9a7-45a2-44fc-afd2-ca76a925a626`, `status: "backlog"`, sem `Assignee`) especificando o **Gatekeeper de Qualidade Pré-Revisão (`qualityGate`)** em 2 camadas (checks determinísticos + 1 passe crítico anti-slop com limite máximo de 1 auto-correção antes de `in_review`), sem consumo de tokens até ser acionada.
- A pedido explícito de Luca, implementação/testes e documentação foram commitados separadamente na branch `section-process` e enviados para `origin/section-process` (`main` preservada intacta em `d284b62` e `docs/refs/figma/` mantido não rastreado). Próxima ação: avaliar visualmente e iterar sobre `#processo` em `AUG-12` (`section-process`) diretamente pelo Paperclip e iniciar `AUG-13` quando desejar.

## Entrega anterior — preparação de commit e push — 2026-10-18

- Pedido explícito de atualizar o repositório com push. Fixture comparativa preservada em `de2d079`; documentação de integração, skills, procedimentos e evidências reunida em commit separado. Sem execução de outras pendências.
- `git fetch origin` aprovado; base inicial `f061462` coincidia com `origin/main`. Conferidos 57 links locais e 12 âncoras dos cinco documentos alterados; `git diff --check` aprovado. Sem nova suíte/build ou navegador: nenhuma alteração da landing e evidências históricas do piloto preservadas.
- Dois PNGs Figma continuam locais, sem rastreamento, conforme exclusão anterior e avaliação pendente. Store privado, guia pessoal e código da ponte fora deste repositório não fazem parte do envio. Push e igualdade do SHA remoto serão conferidos antes da resposta final; não há novo aceite criativo ou comando de deploy.
- Próxima ação funcional permanece a avaliação humana dos pilotos e reconciliação de AUG-8, sem retomada automática.

## Entrega anterior — skills compartilhadas com Antigravity — 2026-10-18

- Impeccable completo ligado aos diretórios CLI/IDE, preservando a fonte instalada. Criada `augeo-react-frontend` no store privado e ligada aos três destinos; `augeo-context` e README da ponte orientam uso, limitações e retomada por decisão humana. AGENTS/WORKFLOW/contrato atualizados, sem instalar o restante do catálogo.
- Validação: três SKILL.md aprovados pelo validador; caminhos reais/hashes idênticos nas três superfícies; launcher respondeu `impeccable-engine 0.1.11`. Instalação verificou conflitos/hashes e preservou originais/manifesto. `AUG-10` confirmou catálogo/leitura e interpretação de `shape`; ponte confirmou contexto/worktree intactos, nenhum check selecionado e retorno para revisão humana.
- Diagnóstico somente leitura; sem comandos do executor, design, navegador, geração de imagem ou segundo agente. CLI sem MCP configurado; declarou `image-generator` via `invoke_subagent`, sem execução, e nenhum navegador nativo. IDE gráfica não exercitada; skills não concedem paridade de ferramentas. Runtime probe não é fluxo Impeccable.
- Nenhuma alteração da landing, nova concessão de escrita, aceite humano, commit, push ou publicação. Próximo uso: aplicar as skills à tarefa explicitamente escolhida, respeitando gates/escopo; avaliação de AUG-10 e limitações acima permanecem visíveis, sem retomar outras pendências por continuidade.

## Entrega anterior — piloto comparativo dos pontos 3–4 — 2026-10-18

- AUG-8 alterou somente o h1 da fixture para “Contexto compartilhado — piloto comparativo”; mesmo helper Chromium do piloto anterior, uma execução em três cenários e capturas abertas. AUG-9 confirmou substituição exata, outros 82 arquivos preservados e aceite técnico; revisão reaproveitou evidências sem repetir navegador/checks. Sem Impeccable.
- Contexto selecionado: cinco fontes, 29.175 de 93.248 caracteres de conteúdo canônico; isso mede seleção textual, não inferência. Tokens publicados automaticamente nos três runs, inclusive falhas; comparação no Paperclip e no histórico, sem painel/relatório paralelo ou cobrança estimada lançada no backend.
- Primeira tentativa recusou `git diff`; retomada explícita na mesma sessão, com edição reconciliada. Segunda realizou navegador/inspeção, mas CLI retornou ERROR devido a 503 por capacidade do modelo. Recuperação recusada por 409; fonte permanece blocked, sob responsabilidade humana, e revisão filha in_review. Não declarar handoff normal ou recuperação automática concluídos.
- Corrigido 403 independente na publicação de falhas da ponte: `unblockDescriptor.owner` agora identifica o próprio agente, conforme a API. Mock passou a impor a restrição. `bun test` fora do sandbox: 28/28, 126 asserções, seis arquivos, 5,03 s; typecheck aprovado. Primeira tentativa no sandbox: 19/28, nove falhas EPERM de sockets. Correção sem nova inferência; não validada por outro run real.
- Fixture servida em loopback 4174 para avaliação. Concessão de escrita e regra exclusiva do helper revogadas; trabalho anterior preservado. Sem alteração da landing, aceite humano, commit, push ou publicação. Próxima ação: avaliação e reconciliação do estado, sem nova chamada de modelo por reflexo.

## Entrega anterior — contexto enxuto e fluxo de execução — 2026-10-17

- Pedido limitado aos pontos 1–2. Seleção explícita de contexto: governança, registro do website, AGENTS e BACKLOG sempre enviados; catálogo das demais fontes e acréscimos por tarefa. Snapshot e integridade de todas as fontes preservados; ORCHESTRATION registrada como selecionável, oito vistas derivadas.
- Checks escolhidos na descrição do ticket por ID/motivo, restritos à configuração local, executados uma vez após o modelo parar e dentro do prazo compartilhado. Falha bloqueia a mesma tarefa para correção; nenhum retry ou segundo agente automático. Handoff exige motivo/foco e reaproveita evidências, sem repetir checks da origem por padrão.
- Verificação final: `bun test` 28/28, 125 asserções, seis arquivos, 5,08 s; typecheck aprovado. Executores e API simulados nos testes, sem novo run real ou chamada paga. CLI/contexto real conferido sem executar modelo.
- Guias/skill/contrato atualizados; permissões, revisão humana, dashboard e trabalho existente preservados. Aguardar tarefa de Luca. Sem mudança da landing, aceite dos pilotos, commit, push ou publicação.

## Entrega anterior — gatilho de ferramentas e exibição em tokens — 2026-10-17

- Correção explícita de Luca aplicada em AGENTS/WORKFLOW, governança e skill de contexto compartilhadas e no prompt da ponte usado por Antigravity/Codex. Impeccable não é requisito de toda alteração de UI; uso no piloto e tentativa na manutenção do painel identificados como indevidos, sem apagar o histórico.
- Indicadores de inferência do Paperclip (card, ledger, totais por agente/projeto) trocados de dólares para tokens. Layout e seção financeira preservados. Override local versionado no código da ponte, reaplicável em `postinstall`, com guarda de versão/estrutura e backup do bundle. Abas existentes precisam de recarga forçada por cache upstream.
- Correção adicional: o card `Month Spend` do dashboard principal havia ficado fora do ajuste. Agora mostra `Monthly tokens`, com soma dos eventos nativos no mês UTC e atualização a cada 30 segundos; carregamento/falha não inventa zero. Mesmo override persistente, sem alteração de valores financeiros.
- `bun test`: 20 testes/81 asserções e typecheck aprovados. Regra nova conferida na composição de prompt, sem invocar outro agente; reaplicação do override não altera novamente o arquivo. Conferência de navegador desktop/mobile e limitações registradas no histórico.
- Sem retomada do hero, escrita de produto, aceite dos pilotos, commit, push ou publicação. Seleção de contexto permanece pendente.

## Entrega anterior — direção de eficiência e dashboard nativo — 2026-10-17

- Direção confirmada nos quatro pontos acima, preservando input/output entre agentes. Nenhum segundo relatório/dashboard criado; AUG-7 deixou de exigir relato manual de consumo.
- Ponte ajustada para publicar uso real recuperável no Paperclip após execução, inclusive falhas com contadores; sincronização histórica sem nova chamada de modelo. Nove eventos importados; segunda sincronização reutilizou os nove recibos sem duplicar totais. Não houve atribuição ou execução de AUG-7 nem avaliação dos pilotos.
- `bun test`: 20 testes/81 asserções; `bun run typecheck` aprovado. API e página **Audit → Costs** conferidas em Chromium, captura aberta. Importação limitada aos logs existentes; cobrança e modelo sem evidência ficam desconhecidos. Seleção de contexto ainda não implementada.
- Código e guia operacional no pacote local `agent-orchestrator`; contrato em ORCHESTRATION e evidências no histórico. Produto, fixture e PNGs preservados; sem commit, push ou publicação.

## Entrega anterior — preparação da primeira tarefa real — 2026-10-17

- Contexto resolvido pela skill `augeo-context`; API confirmou `AUG-1`–`AUG-6` em revisão, agentes ociosos, sem execução/bloqueio ativo; `AUG-5`/`AUG-6` mantêm pedidos `human_only`/`none`. Concessões `writeTasks` vazias e nenhuma trava encontrada.
- Conferidos resultados/recibos dos pilotos, JSON de navegador e complemento do detector; hash atual da fixture coincide com o registrado. Não houve nova execução dos pilotos, navegador, detector ou suíte.
- Criada `AUG-7` (`d555ad7b-2490-4f82-a5b7-425c7cdf426d`) em backlog, sem atribuição. Define leitura de arquivos, probe transitório Playwright/Chromium em artefatos, clique/Tab/Enter em desktop/mobile, integridade e medição; nenhum arquivo do produto liberado para escrita.
- A ausência de `#entrada` no código é coerente com o formulário previsto na especificação; falta observação do percurso em navegador. Sem avaliação visual ou fluxo Impeccable iniciado. `dev-browser` não localizado nos diretórios de skills consultados nem no PATH; MCP de navegador não exposto nesta sessão.
- Documentação e vistas atualizadas; alterações anteriores, fixture e PNGs preservados. Preparação não significa execução de AUG-7 ou avaliação humana dos pilotos.

## Entrega anterior — escrita delimitada e ciclo de navegador — 2026-10-17

- `AUG-5`: Antigravity alterou apenas o rótulo de uma fixture, executou Chromium e abriu capturas desktop/mobile/ampliação CSS 200%. `AUG-6`: Codex conferiu edição, arquivos e evidências. No fechamento, ambos estavam em revisão, sem execução/bloqueio/trava ativos.
- Ponte: concessão/revogação por UUID e arquivo, isolamento Bubblewrap, mudanças rastreáveis e revisão `human_only`. Permissão do piloto revogada; falhas e retomadas reconciliadas, sem repetir a edição.
- Verificação registrada: 15 testes/57 asserções e typecheck aprovados. Impeccable por playbook, com fallback no executor e detector final `[]`; não declarar `clarify` por CLI ou `polish` completo. Limites de navegador e recuperação em [ORCHESTRATION](ORCHESTRATION.md).
- Documentação consolidada: contrato vigente em ORCHESTRATION, operação no README local da integração, pesquisa/entregas anteriores no histórico. Consolidação documental não constitui novo teste da ponte ou da landing, aprovação criativa, commit, push ou publicação.
