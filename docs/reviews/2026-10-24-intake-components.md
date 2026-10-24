# Entrada comercial — componentes e estados

> Retained alternative: Luca subsequently approved WhatsApp conversational intake with human handoff. These form components are not the current implementation queue. See specification §6 for the active decision.

## Como esse formulário funcionaria

| O que a pessoa encontra | Proposta concreta |
| --- | --- |
| Nome do negócio, nome e e-mail | Campos de uma linha, com o rótulo sempre visível. |
| Situação atual e objetivo | Duas caixas de texto maiores, para responder com as próprias palavras. |
| Pedido inicial | Uma lista de opções; “Ainda não sei; preciso de orientação” é uma resposta válida. |
| Referências | Uma caixa opcional para colar site, perfil ou outros links. |
| Algo obrigatório ficou vazio | Ao tentar enviar, o formulário indica o campo e explica o que falta. As outras respostas permanecem. |
| Envio em andamento | O botão mostra “Enviando apresentação…” e impede envios repetidos. |
| Falha no envio | A mensagem explica a falha, mantém as respostas e permite tentar novamente. |
| Recebimento confirmado | O formulário mostra “Apresentação recebida” e explica que haverá análise antes do retorno. |

No celular, tudo fica em uma coluna, com campos e botão confortáveis para toque. No desktop, a ordem é a mesma. O visual acompanha as fontes, temas e foco já existentes na landing.

Essa é a contribuição de `component-design`: transformar a estrutura em campos e comportamentos definidos, inclusive quando algo dá errado. É uma especificação para construir; não existe formulário funcional nesta entrega. As medidas e regras técnicas abaixo servem à implementação futura.

Status: proposta produzida com `uiuxdesigner:component-design`, em 24/10/2026, sobre a [arquitetura proposta](2026-10-24-intake-architecture.md). Aplicação ao nível de especificação concluída. Não é formulário implementado, desenho visual aprovado ou integração testada.

## Composição e critérios comuns

Reutilizar fontes, cores semânticas, botões e foco da landing. A seção precisa de leitura comercial clara; não repetir a matriz cinética nem transformar cada campo em um card de serviço. Esta especificação define anatomia/comportamento, sem escolher uma nova direção visual.

Proposta de medidas: formulário com largura máxima de 720px, dentro dos insets responsivos existentes; campos empilhados em desktop e mobile para preservar a ordem. Intervalo de 24px entre campos e 40px entre grupos, reduzido para 32px entre grupos no mobile. Labels acima do controle, ajuda abaixo, erro abaixo da ajuda. Altura mínima de 48px nos controles de uma linha; textarea com mínimo de 144px e redimensionamento vertical. Nenhuma largura mínima deve forçar overflow a 320px.

Usar rótulos persistentes, não placeholders como identificação. Marcar os dois campos opcionais em texto; explicar no início que os demais são necessários. Textos de ajuda devem existir antes do erro. Todos os valores abaixo são propostas para implementação/verificação, não medições de uma interface pronta.

## Fichas dos componentes

| Componente | Uso, anatomia e variantes | Tamanho / adaptação | Semântica e comportamento |
| --- | --- | --- | --- |
| Título e introdução | Um H2, explicação curta e indicação de obrigatoriedade; sem badge ou contador de etapas. | Largura de leitura limitada, sem altura fixa. | `section#entrada` nomeada pelo H2; título focável programaticamente após navegação por âncora. |
| Grupo de campos | “Seu negócio”, “Seu pedido”, “Seu contato”; título e respectivos controles. | Uma coluna em todos os tamanhos. | Agrupamento por `fieldset`/`legend` quando adequado; não inventar papel ARIA sobre controles nativos. |
| Campo de texto | Label + input + ajuda opcional + erro. Nome do negócio, nome da pessoa, e-mail. | Mínimo 48px de altura, 100% da largura disponível. | Label associado por id; `autocomplete=organization`, `name`, `email` conforme o campo. E-mail com `type=email`; aceitar nomes com acentos e projetos sem nome formal. |
| Resposta aberta | Label + textarea + ajuda + erro. Contexto/momento e objetivo. | Mínimo 144px, crescimento/redimensionamento vertical; texto nunca cortado. | Não enviar ao pressionar Enter; permitir parágrafos. Sem mínimo longo arbitrário nem bloqueio por pontuação. |
| Pedido inicial | Label + select nativo + ajuda; uma escolha dentre as opções da arquitetura. | Mínimo 48px, texto de opções legível no seletor do dispositivo. | Estado inicial “Ainda não sei; preciso de orientação” é válido. Sem dropdown customizado, sem exigir escolha técnica para prosseguir. |
| Referências | Label + textarea opcional + ajuda. | Mínimo 96px, sem upload nesta proposta. | Aceitar texto com um ou vários links, inclusive `instagram.com/...` sem esquema; não aplicar `type=url` ao bloco inteiro nem buscar links automaticamente. |
| Ação de envio | Botão primário “Enviar apresentação”, rótulo de progresso e feedback adjacente. | Mínimo 48px; largura total no mobile, intrínseca no desktop. | `type=submit`; nenhuma variante destrutiva ou secundária competindo. Durante envio, bloquear apenas novas submissões e explicar o estado. |
| Erro de campo e resumo | Erro junto ao campo e resumo com links aos campos inválidos. | Texto com quebra natural, não tooltip. | `aria-invalid` apenas após validação; `aria-describedby` inclui ajuda/erro. Após submit inválido, focar resumo; links levam ao respectivo campo. |
| Falha de recebimento | Mensagem persistente + tentativa novamente; não apenas toast temporário. | No fluxo, próxima ao envio. | Anunciar falha e manter todas as respostas. Não dizer “não recebemos” quando a rede só deixou o resultado desconhecido. |
| Recibo de sucesso | Título “Apresentação recebida” + explicação da análise e canal de retorno. | Substitui a área do formulário sem modal obrigatório; página continua navegável. | Aparecer apenas após confirmação válida do servidor; foco no recibo. Uma resposta visual simulada não conta como recebimento. |

## Estados por família

| Estado | Inputs, textarea e select | Botão / feedback |
| --- | --- | --- |
| Default | Superfície do tema, borda distinguível, label e ajuda persistentes. | Ação primária disponível; dados incompletos geram validação ao tentar enviar, não botão inexplicavelmente desativado. |
| Hover | Mudança discreta de borda; nunca requisito para ler ou descobrir instruções. | Manter tratamento de hover existente, verificando contraste do rótulo. |
| Focus | Outline de 2px no acento, afastamento de 3px, sem deslocar layout; não remover outline nativo sem equivalente. | Mesmo critério e estado acessível coerente. |
| Active / editing | Edição normal; sem mover label, selecionar texto à força ou mudar de etapa. | Pressionamento pode usar feedback existente, respeitando redução de movimento. |
| Disabled | Só quando indisponibilidade real exigir; motivo explícito. Não desativar campos por ausência de decisão sobre um serviço. | Durante envio, evitar duplicação; manter o botão/foco estável e anunciar progresso. Se usado `aria-disabled`, bloquear a ativação no código também. |
| Loading | Respostas ficam visíveis; congelar edição durante a requisição para evitar divergência entre recibo e payload. Remover bloqueio ao falhar. | “Enviando apresentação…”; `aria-busy` no formulário e mensagem de status. Spinner opcional, nunca único indicador. |
| Error | Borda + texto de erro, não só cor. Validar obrigatórios ao enviar; depois revalidar campo corrigido sem anunciar a cada tecla. | Mostrar erro apropriado ao resultado e permitir nova tentativa após falha. |
| Success | Não apagar respostas antes de haver aceite; após aceite, sair da edição e mostrar recibo. | “Apresentação recebida”; não inventar protocolo ou prazo. |

## Microcopy de validação e recuperação

| Situação | Texto proposto |
| --- | --- |
| Nome do negócio vazio | “Informe o nome do negócio ou projeto.” |
| Contexto vazio | “Conte brevemente como está seu negócio hoje.” |
| Objetivo vazio | “Conte o que você quer mudar ou entender.” |
| Nome da pessoa vazio | “Informe seu nome.” |
| E-mail vazio / inválido | “Informe um e-mail para retorno.” / “Confira o e-mail informado.” |
| Resumo após tentativa inválida | “Confira os campos indicados antes de enviar.” + links aos campos. |
| Falha confirmada | “Não foi possível enviar agora. Suas respostas continuam aqui. Tente novamente.” |
| Resultado desconhecido por interrupção | “Não conseguimos confirmar o recebimento. Suas respostas continuam aqui.” + ação de nova tentativa com deduplicação no servidor. |
| Recebimento confirmado | “Recebemos sua apresentação. Vamos analisar as informações antes de retornar pelo e-mail indicado.” |

Não validar referências opcionais como uma URL única. Não exigir telefone, orçamento, cadastro, senha, aceite de marketing ou compromisso comercial. Informação de uso dos dados deve explicar a finalidade e apontar o canal/política definidos pela operação; não inserir checkbox de consentimento genérico sem decisão sobre o tratamento.

## Contrato de envio necessário à implementação

Fluxo: edição → validação → envio → recibo confirmado ou retorno à edição com feedback. A validação também precisa acontecer no servidor. Durante a requisição, impedir submissões paralelas; para timeout/resultado desconhecido, prever chave de idempotência ou mecanismo equivalente antes de oferecer retry seguro.

Manter respostas em memória durante erro, mudança de tema e navegação interna. Não persistir contato/contexto em URL ou armazenamento local por padrão. Recarregar/fechar a página pode perder o rascunho; persistência além da sessão de edição é decisão separada. Não prometer recuperação após reload.

O servidor precisa definir o que seu aceite garante: registro durável ou entrega ao destino operacional. Uma animação, resposta fictícia ou simples encerramento da requisição não basta para exibir “Recebemos”. Destino, responsável e política de falhas ainda não estão definidos; não há integração validada nesta entrega.

## Aceitação e verificação futura

1. Percorrer os sete campos, envio, resumo de erros e recibo por teclado; manter foco previsível e nenhuma armadilha. Testar rótulos/erros com leitor de tela real.
2. Verificar 320px, 390px e desktop nos dois temas, teclado virtual e texto ampliado. Confirmar ausência de overflow e conteúdo coberto.
3. Medir texto/fundo dos controles, ajuda e erros em todos os estados relevantes; não copiar opacidade de foco do Processo para campos ou instruções.
4. Exercitar envio vazio, e-mail inválido, pedido indefinido válido, múltiplos links, erro de servidor, timeout, retry e clique repetido; nenhuma resposta se perde em erro.
5. Verificar que o recibo corresponde ao registro realmente recebido pela triagem e que repetir uma tentativa não duplica o contato.
6. Confirmar redução de movimento, alvos de toque e manutenção do rascunho durante troca de tema/âncoras.

Esses são critérios propostos, não testes executados. Não foi produzido HTML/CSS demonstrativo porque os contratos de conteúdo e estados podem ser revisados diretamente; um protótipo sem recebimento poderia confundir aparência pronta com fluxo funcional. Implementação visual e backend continuam como etapas distintas.
