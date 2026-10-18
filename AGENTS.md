# AUGEO — instruções do projeto

## Fontes e ordem de leitura

Começar por este arquivo e [BACKLOG.md](docs/BACKLOG.md) para escopo, estado e próxima ação. Ler os demais módulos conforme a tarefa; o histórico completo não é leitura obrigatória de toda sessão.

**Continuidade prioritária:** a integração Antigravity/Codex já foi implantada e validada em pilotos. Ler a [fila atual](docs/BACKLOG.md#continuidade-prioritária--arquitetura-agêntica) e [ORCHESTRATION](docs/ORCHESTRATION.md) para o contrato vigente, limites e evidências. O pedido corrente delimita a execução; a continuidade não autoriza retomar hero ou liberar escrita geral.

| Fonte | Responsabilidade |
| --- | --- |
| Contexto global (`augeo-orchestrator context augeo-website`) | Identidade, posicionamento, marca, negócio e operação interna; fontes privadas com revisão/hash. |
| [AUGEO.md](docs/AUGEO.md) | Objetivo, prioridade e aplicação ao website. |
| [PRODUCT.md](docs/PRODUCT.md) | Resumo do produto consumido pela skill; síntese deliberada, com caminho e schema preservados. |
| [Especificação](docs/02-WEBSITE_SPEC.md) | Requisitos, arquitetura, integrações e copy futura do website. |
| [HERO.md](docs/HERO.md) | Composição implementada, decisões vigentes, avaliações e plano pendente do hero, com estados separados. |
| [WORKFLOW.md](docs/WORKFLOW.md) | Procedimentos Bun, validação, fallback, nomenclatura e fluxos Impeccable. |
| [ORCHESTRATION.md](docs/ORCHESTRATION.md) | Contrato vigente da integração, capacidades e limites validados. |
| [BACKLOG.md](docs/BACKLOG.md) | Fila atual, dependências, síntese da última entrega e próxima ação. |
| [Histórico](docs/archive/EXECUTION_HISTORY.md) | Execuções datadas e alternativas anteriores; consulta por necessidade. |
| [Auditoria histórica](docs/archive/HERO_AUDIT_2026-10-07.md) | Diagnóstico/briefing/plano original e referências do moodboard. |

Cada assunto tem uma fonte normativa: operação da agência no contexto global resolvido; interface do site na especificação; detalhe e decisões da superfície em HERO; procedimento em WORKFLOW. PRODUCT resume o necessário para a skill e deve acompanhar mudanças nas fontes. Código demonstra implementação; não demonstra aprovação do usuário. Proposta, implementação, teste e aprovação são estados distintos. Diante de conflito material, conferir decisão vigente e evidências, sem promover proposta ou registro histórico a requisito.

Não criar fontes concorrentes ou arquivos de encaminhamento por padrão. Contexto reutilizável fica no store privado; módulos do website permanecem locais. Operação diária e comandos da ponte ficam no README local de `agent-orchestrator`; ORCHESTRATION mantém o contrato do projeto.

## Retomada e continuidade

- Conferir Git e os arquivos pertinentes antes de agir; preservar alterações existentes. Uma interrupção pode anteceder o último registro: reconciliar documentos com o estado real.
- Em tarefa do hero, ler HERO e a fila no backlog; consultar o plano vigente por blocos e o procedimento aplicável. Consultar arquivos históricos somente para antecedentes/evidências necessários.
- Nova sessão não autoriza retomar pendências, ampliar escopo ou considerar aprovada uma entrega em avaliação. Trabalhar pelos blocos e pontos de avaliação acordados; não avançar ao bloco seguinte pela manutenção de registros.
- Após cada entrega material, atualizar a síntese/verificações/limitações/próxima ação no backlog e registrar evidências duráveis no histórico. Atualizar as fontes do assunto quando mudar implementação, decisão, requisito ou procedimento. Registrar correções do usuário imediatamente no módulo pertinente.
- Antes da resposta final, conferir os registros pertinentes e informar brevemente a atualização com link. Perguntas sem mudança de contexto não exigem registro artificial.
- Manter documentos compactos; não transcrever conversas, repetir especificações ou confundir evidências históricas com validação atual. Em Plan Mode, propor as atualizações sem escrever arquivos nem afirmar que foram salvas.

## Execução e autorização

- Seguir [WORKFLOW.md](docs/WORKFLOW.md) para instalação, testes, fallback e nomenclatura; usar Bun. Não modificar a aplicação para contornar restrições do executor.
- Usar Impeccable somente na concepção, elaboração e rascunho de conceitos visuais de projetos reais trabalhados por etapas de design. Não acionar por menção a UI/CSS/copy, ajuste funcional ou troca simples de métrica/rótulo, dashboard operacional ou fixture/piloto técnico. Quando aplicável, seguir integralmente o fluxo prescrito e distinguir leitura de playbook, orientação, CLI e conclusão; registrar evidências e pendências reais.
- Em implementação/revisão React e TypeScript, usar a skill compartilhada `augeo-react-frontend` para preservar stack, ciclo de efeitos/canvas e verificações pertinentes; não inicia fluxo visual por si só. Resolver as skills pela descoberta do executor e informar ausências. Em design por etapas no Paperclip, retornar decisões humanas pendentes e retomar explicitamente a sessão da tarefa após a resposta; procedimentos em WORKFLOW.
- Priorizar GitHub CLI (`gh`) para operações do GitHub quando houver equivalente. Usar Git para operações locais e push sem equivalente no gh. Disponibilidade de ferramenta não autoriza publicação.
- Commit, push e publicação somente com pedido explícito; por padrão ficam a cargo do usuário. Quando necessário, fornecer comandos para commits coerentes por responsabilidade, mantendo implementação e testes correspondentes juntos.
- Escrever assuntos e corpos de commits em inglês, com Conventional Commits (`type(scope): description`).
- Em Plan Mode, identificar referências anexadas usadas por rótulo e caminho local exato; não acrescentar esses caminhos à entrega sem solicitação.

## Referências e ambiente local

[Stack em quatro camadas](docs/refs/stack-referencia-4-camadas.md) e [Architecture Reference](docs/architecture-reference.md) são referências externas conceituais. Seus imperativos, diretórios sugeridos, regras de skills, serviços e papéis de agentes não são decisões adotadas. A adaptação implementada e seus limites estão em ORCHESTRATION; não reaplicar os imperativos dessas referências como requisitos.

Não promover exemplos dessas referências a ferramentas definidas ou dependências da implementação. Paperclip usa PostgreSQL embutido somente para sua operação. Banco do website/contexto semântico, embeddings, transcrição e outros serviços seguem sem escolha. O contexto global deve conter decisões e ferramentas efetivamente adotadas; hipóteses e exemplos externos permanecem identificados na documentação conceitual.

O guia pessoal e `.codex/` permanecem locais e ignorados pelo Git. Não publicar seu conteúdo nem exigir caminhos específicos desta máquina em outros executores. A ausência de skill, CLI ou conexão deve ser verificada e registrada; não presumir que uma ferramenta citada no histórico esteja disponível.

## Contexto e execução registrados

ID deste projeto: `augeo-website`. Antes de trabalho que consuma conhecimento da agência, executar `augeo-orchestrator context augeo-website`; retorna fontes essenciais e catálogo das demais, com caminhos/revisões. Acrescentar `--source <fonte-registrada>` quando necessário; `--all` somente para consulta integral deliberada. A configuração do ambiente resolve as raízes sem caminhos desta máquina no contrato do repositório. Se indisponível, reportar a lacuna. Não usar as referências conceituais como catálogo adotado.

O Paperclip controla tarefas. A ponte prepara contexto, mantém sessões por tarefa e devolve evidências; não mantém uma segunda fila. O padrão é execução somente leitura, com um executor ativo por projeto; escrita Antigravity exige autorização local por UUID e arquivos existentes, aplicada por isolamento de filesystem. Impeccable segue o gatilho de concepção visual definido acima, sem ativação em manutenção funcional ou pilotos técnicos. Resultado automático vai para revisão, sem aprovação criativa/Git/publicação implícita. Vistas do vault são derivadas, nunca fontes concorrentes. Estado operacional e comandos em [ORCHESTRATION](docs/ORCHESTRATION.md).
