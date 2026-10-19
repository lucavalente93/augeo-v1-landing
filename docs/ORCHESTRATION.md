# Orquestração Antigravity/Codex

Contrato vigente da integração local, atualizado em 2026-10-18. **Leitura compartilhada e piloto técnico de escrita/navegador validados; entregas aguardam revisão humana. Piloto comparativo AUG-8 atingiu o aceite da fixture, mas permanece bloqueado operacionalmente; revisão AUG-9 em avaliação.** A próxima ação está no [backlog](BACKLOG.md#continuidade-prioritária--arquitetura-agêntica); IDs completos, falhas e pesquisa anterior estão no [histórico](archive/EXECUTION_HISTORY.md#escrita-delimitada-navegador-e-revisão-vinculada--2026-10-17).

## Arquitetura e responsabilidades

| Componente | Responsabilidade adotada |
| --- | --- |
| Luca | Direção, prioridades e aprovação criativa; commit, push e publicação dependem de pedido explícito. |
| Antigravity | Execução frontend/visual e coordenação criativa. |
| Codex | Engenharia estrutural e revisão técnica. |
| Paperclip | Painel e autoridade do estado das tarefas. |
| Ponte Bun | Resolve contexto, inicia o CLI atribuído e devolve resultado/evidências ao ticket. |
| Store privado e Obsidian | Markdown canônico da agência; vault, Graph View e Canvas para navegação humana. |
| Repositório do website | Produto, requisitos, decisões locais e procedimentos. |

Paperclip `2026.1012.0` usa adaptador `process` para `agy` e Codex CLI. O código da ponte e seu guia operacional ficam no diretório local `agent-orchestrator`, irmão deste projeto. O painel atende em `http://127.0.0.1:3100`; servidor em foreground, sem serviço de boot. Agentes executam por demanda, sem heartbeats periódicos. Atribuição e passagem são explícitas; não há roteamento automático nem controle deste chat ou de conversas já abertas na IDE.

Um coordenador por demanda e um executor ativo por projeto. Cada tarefa declara seu responsável e escopo; o outro agente pode revisar em leitura. Transferência de coordenação deve ser registrada, sem delegação circular. Antigravity como entrada universal automática continua proposta, não capacidade implantada.

## Contexto compartilhado

`augeo-orchestrator context augeo-website` resolve fontes globais/locais autorizadas, caminhos e SHA-256. Envia o conteúdo de governança, registro global do website, AGENTS e BACKLOG; as demais fontes aparecem em catálogo sem o texto. `--source <fonte-registrada>` acrescenta conteúdo por necessidade; `--all` exige consulta integral explícita. Não há classificação por palavras-chave nem chamada de modelo para selecionar documentos. A configuração do ambiente resolve as raízes; o contrato do repositório não exige caminhos desta máquina. A skill `augeo-context` expõe essa entrada aos executores.

Agência, negócio, marca e governança ficam no `global-context-store` privado. O website mantém suas fontes locais; [AGENTS](../AGENTS.md) define a autoridade de cada módulo. PRODUCT preserva caminho/schema. Material pessoal e credenciais permanecem privados.

Editar os originais; `views/` contém oito cópias derivadas com origem/hash, incluindo ORCHESTRATION agora registrada como fonte selecionável. `views` regenera e `views-check` confere essas cópias. Obsidian não precisa estar aberto para os agentes lerem fontes. Graph View mostra links explícitos; Canvas organiza cartões, sem executar tarefas. Fonte alterada durante uma execução exige reconciliação; snapshots históricos conservam a revisão consumida.

As [duas](refs/stack-referencia-4-camadas.md) [referências](architecture-reference.md) orientaram a adaptação, sem impor ferramentas. PostgreSQL embutido atende apenas ao Paperclip. Banco do website, embeddings, transcrição e serviços externos continuam sem escolha. Maestri e Gemini CLI não são dependências. Instalação de links da skill não comprova descoberta em todas as superfícies gráficas.

## Contrato de execução

### Skills compartilhadas — implantação em 18/10

`augeo-context` e `augeo-react-frontend` têm fonte única no store privado e links para Codex, Antigravity CLI e IDE. O pacote Impeccable existente, com scripts e referências, permanece fonte única e foi ligado aos dois diretórios Antigravity; não houve cópia parcial ou alteração do pacote. A skill React é adaptação local ao stack e ciclo de canvas do projeto, sem importar o conjunto Next.js/Vercel. Fontes e comandos locais ficam no README da ponte.

`AUG-10` confirmou em uma execução CLI real a descoberta das três skills e relatou leitura dos seus SKILL.md e de `reference/shape.md`; os caminhos descobertos foram os links de configuração global. Resultado em `in_review`, com contexto/worktree preservados pela ponte, sem edição de produto ou checks duplicados. Frontmatter, resolução/hash dos links e handshake do launcher também conferidos. Isso não comprova descoberta em uma conversa gráfica da IDE: ela continua pendente de conferência própria.

No diagnóstico, o CLI relatou ausência de ferramenta nativa/MCP de navegador e de gerador direto de imagem; expôs `image-generator` via `invoke_subagent`, sem invocação. `agy mcp list` confirmou nenhum servidor configurado. Disponibilidade declarada não valida geração de imagem, navegação livre ou paridade com Codex. O helper Chromium anteriormente validado mantém seu escopo isolado. Skills de imagem, branding, Figma e estilos adicionais não foram instaladas nesta entrega.

O procedimento em WORKFLOW e na skill compartilhada exige devolver perguntas/opções/brief e a decisão pendente quando um playbook de design precisa de resposta humana. A resposta é registrada no mesmo ticket e a sessão salva só continua por retomada explícita. Gates e artefatos completos do playbook permanecem obrigatórios; não há nova automação de fases, autorização de escrita ou alteração de prazo. Este diagnóstico leu o playbook e executou apenas o handshake técnico `engine-probe` fora do modelo; não executou `context`, `shape`, detector nem um fluxo de design.

### Direção de eficiência confirmada em 17/10

1. Um executor implementa uma entrega delimitada. Seleção implementada: fontes essenciais mais fontes explícitas do bloco opcional `augeo-task` na descrição; catálogo das demais para consulta quando necessária. Governança e AGENTS são preservados. Snapshot integral, hashes e manifesto continuam internos à ponte, sem injetar todos os textos no prompt.
2. Verificações automáticas pertinentes cobrem o comportamento verificável; não repetir testes sem mudança, falha ou preocupação que justifique nova execução. Impeccable aplica-se à concepção/elaboração/rascunho de conceitos visuais de projetos reais trabalhados por etapas de design. Manutenção funcional, troca simples de métrica/rótulo, dashboard operacional e fixtures/pilotos técnicos não o acionam. Preservar a apresentação da interface ao usuário.
3. Revisão por outro agente ocorre quando há motivo técnico concreto; passagem não é etapa obrigatória de toda tarefa. `handoff` exige `--reason` com motivo/foco explícitos e reaproveita fontes/evidências/checks da origem, sem reagendar checks por padrão. Nenhuma revisão é criada automaticamente ao finalizar. Preservar o formato de comunicação input/output, esclarecendo-o ao usuário quando necessário.
4. Resultado e acompanhamento de consumo pertencem ao Paperclip, com limite de execução. Não criar relatório, planilha ou dashboard paralelo, nem exigir do executor relato manual de consumo. Manter os artefatos técnicos necessários à revisão e recuperação.

**Estado do dashboard:** alimentação de uso implantada na ponte em 17/10, após autorização explícita. **Audit → Costs** (`http://127.0.0.1:3100/AUG/costs`) recebe eventos nativos vinculados a agente/tarefa/projeto/run; nove registros históricos aproveitáveis importados e envio automático habilitado. Entrada em cache do Codex é separada; snapshots cumulativos Antigravity viram deltas por sessão. Testes e repetição da sincronização confirmaram ausência de duplicação. Cobertura limitada aos logs preservados; este chat e toda a implantação não estão contabilizados.

O dashboard principal também exibe **Monthly tokens** no lugar de **Month Spend**, somando entrada + cache + saída dos eventos nativos no mês UTC corrente, com atualização a cada 30 segundos. O ajuste anterior cobria somente Audit → Costs; a omissão foi corrigida após Luca apontar o indicador ainda monetário. Carregamento/erro não são exibidos como consumo zero.

Os CLIs atuais não fornecem cobrança efetiva. Eventos usam `costStatus: unpriced`, tipo de cobrança desconhecido e valor zero exigido pelo schema. A exibição local dos indicadores de inferência foi ajustada para tokens (total, ledger, agente e projeto), preservando a seção financeira nativa separada; não converter tokens em dólares. Modelo sem evidência fica desconhecido. Não publicar estimativas como cobranças reais. Recuperação de telemetria usa logs, sem chamar o modelo; POST de resultado incerto exige reconciliação, pois a API nativa não tem idempotência. Recibos internos protegem publicação, sem relatório paralelo. Operação de `usage-sync` e do override reaplicável em `postinstall` no README local da ponte. Os deadlines atuais continuam vigentes; não há novo teto monetário definido.

### Ciclo vigente

Preparação: um bloco opcional `augeo-task` na descrição seleciona `contextSources`, `writePaths` (arquivos existentes autorizados para escrita delimitada no `agy`, persistindo durante todo o ciclo de revisão/correção do ticket no Paperclip) e `checks` nomeados, cada check com motivo. A configuração local define os comandos permitidos; a tarefa não fornece shell arbitrário. Sem seleção, entram as fontes essenciais em leitura e nenhum check da ponte por reflexo. A forma de escrever pedidos humanos permanece livre; detalhes do bloco e comandos ficam no README da integração.

1. Criar tarefa no Paperclip com objetivo, entregável, exclusões, arquivos e critérios de aceite observáveis. Não iniciar outro executor fora da tarefa atribuída.
2. A ponte identifica o ticket pelo run, confere projeto/atribuição, resolve contexto, registra HEAD/diff/status e manifesto dos arquivos — incluindo alterações locais — e adquire trava por projeto.
3. Executa o CLI em leitura por padrão com contexto selecionado e plano de verificação. Retomadas usam a sessão específica da tarefa; nunca `--continue` global ou seleção autônoma de outra tarefa da inbox. Depois que o modelo para, o wrapper executa uma vez os checks selecionados e registrados; não usa outro agente. Modelo/checks compartilham os limites de 3/10 minutos. Falha interrompe a sequência e bloqueia a mesma tarefa para correção explícita, sem retry automático. Checks rodam como subprocessos confiáveis do wrapper no host; a integridade das fontes/código é conferida antes da aceitação.
4. Depois da parada do executor, confere fontes e arquivos, preserva resultado/logs/artefatos e libera a trava. Resultado válido volta para `in_review`, com pedido `human_only` e continuação `none`; falhas recebem impedimento e ação de desbloqueio quando o checkout já ocorreu. Não reassina o ticket durante o próprio run. Quando o operador aciona **Solicitar correção** (`wakeReason: "issue_review_path_lost"`) ou envia comentário humano (`wakeReason: "issue_commented"` / `on_demand` com último comentário de usuário) em um ticket `in_review`, a ponte faz o checkout direto (`expectedStatuses: ['todo', 'in_progress', 'in_review']`) e retoma a sessão da tarefa sem exigir troca manual de status para `todo`; wakes automáticos tardios sem continuação humana explícita continuam ignorados.
5. `handoff` cria ou reutiliza uma tarefa filha para o outro executor, com origem, resultado e evidências. Confere fontes e versão escrita antes da passagem. Revisão técnica não é aprovação criativa ou autorização de publicação.

Paperclip controla o estado; arquivos da ponte guardam continuidade e evidências (`context.json` integral, `execution-plan.json` selecionado, `verification.json` dos checks). Credenciais Paperclip são removidas do ambiente do modelo e dos subprocessos de verificação. A ponte valida seu contrato operacional, sem implementar integralmente todos os campos/schemas propostos na pesquisa arquivada. A redução afeta novos inputs e não apaga o contexto de sessões antigas; economia real de inferência depende da tarefa e será observável no uso efetivo.

## Escrita e recuperação

Escrita está habilitada **somente no Antigravity, vinculada ao projeto/executor e a arquivos existentes** — declarada diretamente em `"writePaths"` no bloco `augeo-task` da descrição do ticket no Paperclip (persistindo entre rodadas de revisão/correção do ticket sem depender de comandos no terminal) ou via `write-grant`/`write-revoke` na CLI local. O roteiro completo está no README da integração.

Bubblewrap monta o filesystem em leitura, com exceções para arquivos autorizados, `artifacts/` do run e runtime do `agy`. Rejeita `.git`, fontes canônicas, traversal, symlinks/hardlinks, diretórios e alvos ausentes. `/tmp` e variáveis temporárias pertencem ao namespace. Scoped-write usa `accept-edits` com permissões normais e isolamento externo, sem sandbox interno duplicado ou flag de ignorar permissões.

O isolamento protege arquivos, mas runtime, rede e sockets do host continuam acessíveis; não constitui sandbox adversarial completo. Arquivos são montados individualmente: editores que exigem rename/substituição atômica podem ser incompatíveis. O padrão de leitura também não deve ser interpretado como prova de isolamento total do CLI.

A ponte registra conteúdo/hash e verifica os demais arquivos do manifesto e o conjunto de arquivos. Fontes/base alteradas exigem reconciliação. Após interrupção, confirmar processo parado e efeitos parciais antes de retomar a mesma sessão; nunca repetir mutações ou reverter trabalho humano automaticamente. Resultado salvo sem recibo requer recuperação, não nova chamada do modelo. Recovery de leitura recusa runs de escrita.

Trava abandonada só é arquivada com PID ausente e run inativo. Respeitar o bloqueio nativo do Paperclip e fornecer evidências reais de reconciliação. Logs e falhas são preservados. Deadlines: três minutos em leitura e dez em escrita; adaptador `agy` configurado para 660 segundos. Comandos de recuperação e backup ficam no README da integração.

Correção de 18/10: a publicação de falha pela identidade do agente deve usar `unblockDescriptor.owner: { agentId: <próprio executor> }`; a API recusa `owner: board` com 403. Isso identifica responsabilidade no ticket, sem autorizar retry autônomo. Corrigido no wrapper e coberto por API simulada com essa restrição; não houve outro run pago para testar a correção.

## Validação registrada e limites

**Apresentação para revisão humana:** antes de pedir avaliação, disponibilizar o resultado executável/visível e explicar o alvo e a mudança concreta. Ticket, diff CSS, relatório e backlog não substituem a apresentação da interface. Correção solicitada por Luca em 17/10: os pilotos não estavam visíveis para avaliação. AUG-5 é uma página demonstrativa isolada, não uma entrega visual da landing; seu botão só atualiza uma mensagem local, sem consultar o contexto compartilhado.

| Prova | Resultado registrado em 17/10 |
| --- | --- |
| Leitura — `AUG-1` a `AUG-4` | Mesmas fontes nos dois CLIs, passagem Antigravity → Codex e retomada da mesma conversa. |
| Escrita/navegador — `AUG-5` | Apenas rótulo em `.orchestration-pilot/index.html`; Chromium desktop, mobile e ampliação CSS 200%, foco após Tab, clique/status, sem overflow horizontal ou pageerror. Antigravity abriu as três capturas. |
| Revisão — `AUG-6` | Codex confirmou alteração exata, snapshot final e outros 82 arquivos preservados; abriu capturas sem executar outro navegador. |
| Ponte | 15 testes Bun, 57 asserções e typecheck aprovados; testes sintéticos distintos dos runs reais. |
| Telemetria nativa posterior | 20 testes/81 asserções e typecheck aprovados; nove eventos reais importados, sincronização repetida sem duplicar, painel aberto em Chromium e captura inspecionada. Não houve nova chamada de modelo. |
| Impeccable | Playbook `clarify`, `craft-floor`, edição e verificação; contexto na sessão principal, fallback no executor. Detector posterior exit 0, `[]`, anexado aos tickets. Não equivale a `clarify` por CLI ou `polish` concluído. |
| Recuperação | Backup PostgreSQL inicial restaurado em banco descartável; backups posteriores e pacote privado preservados. Recuperação integral da instalação não testada. |

No fechamento registrado, os seis tickets estavam em revisão, sem run/bloqueio/trava ativos. Pedidos pendentes da ponte exigiam revisão humana; concessão de escrita de `AUG-5` e allow-rule exclusiva do helper foram revogadas. Aprovação criativa não foi concedida.

Correção posterior de Luca: Impeccable foi acionado indevidamente no piloto técnico e na tentativa de trocar dólares por tokens. Esses registros comprovam o que ocorreu, não adequação do uso ou precedente obrigatório. Gatilho corrigido em AGENTS/WORKFLOW, governança e skill compartilhadas e no prompt da ponte para ambos os executores. Sem nova execução de agentes para validar essa instrução.

O helper de navegador cobre somente a fixture isolada. Não comprova navegação livre, paridade com a IDE, WebKit/Gecko, aparelhos físicos, zoom nativo, ativação por Enter/Espaço ou anúncio por leitor de tela. `dev-browser` não foi localizado e não há MCP de navegador configurado. UI comercial e blocos do hero não foram retomados.

Próximo uso preparado em `AUG-7`: diagnóstico técnico CTA → `#entrada`, somente leitura, em backlog e sem atribuição. O ticket define arquivos de leitura e probe Playwright/Chromium próprio em `artifacts/`; nenhum arquivo de produto autorizado para escrita. Procedimento ainda não executado, sem nova capacidade de navegador demonstrada. Avaliação humana de `AUG-5`/`AUG-6` permanece pendente. A evolução da ponte segue a direção de eficiência acima, mantendo resultados e consumo no Paperclip.

### Comparação dos pontos 3–4 em 18/10

Luca substituiu temporariamente a entrega real por outro piloto similar. AUG-8 mudou apenas o título da fixture e reutilizou os três cenários Chromium; AUG-9 confirmou integridade e aceite técnico sem repetir navegador. Escrita e permissão exclusiva do helper revogadas. Resultado executável em `http://127.0.0.1:4174` enquanto o servidor local estiver ativo.

O primeiro run parou por `git diff` negado, após editar. Retomada na mesma sessão foi reconciliada; navegador e inspeção das três imagens concluíram, mas o CLI retornou ERROR por 503 (`No capacity available`, modelo identificado no log como Gemini 3.8 Flash High). A ponte preservou a falha. Recuperação de estado recusada por 409; AUG-8 segue blocked sob responsabilidade humana, com pedido human_only/none. AUG-9 foi criado explicitamente como revisão de artefatos brutos ligados à origem; não foi um `handoff` normal de resultado aceito. Revisão em in_review não resolve a falha da origem. Logs também expuseram o 403 de publicação de impedimento, corrigido separadamente acima.

Uso automático no Paperclip: execução/retomada 336.845 tokens, revisão 231.627, total 568.472. Equivalente pela fórmula histórica: US$ 0,3314072; reduções observadas de 82,4% em tokens e 79,6% no equivalente ante AUG-5/AUG-6. Não é cobrança efetiva ou experimento que isole contexto: retomadas e preparação diferem, e a origem não fechou pelo caminho normal. Conferência posterior confirmou os mesmos modelos nominais (Gemini 3.8 Flash High e GPT-6.1 Sol medium). Dados completos, testes e limites no [histórico](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18). Nenhum novo relatório/painel de consumo foi criado.
