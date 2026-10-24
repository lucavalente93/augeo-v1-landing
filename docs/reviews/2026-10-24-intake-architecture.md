# Entrada comercial — arquitetura da informação

> Superseded as the active channel proposal: Luca approved WhatsApp chatbot intake with human handoff on 24/10/2026. This form study remains an alternative only; the current direction is in specification §6. Its fields are not a script to send as a questionnaire in WhatsApp.

## A proposta, de forma direta

A pessoa lê a hero, conhece o Processo e chega a um formulário para apresentar o negócio. Ao clicar em “Apresentar negócio”, vai direto para esse mesmo formulário. No celular, a matriz continua encerrando a página, depois dele.

O formulário apareceria assim, em uma única seção:

> **Vamos entender o que seu negócio precisa.**
>
> Conte um pouco sobre seu momento e o motivo do contato. Vamos analisar as informações antes de retornar.
>
> **Seu negócio**
>
> Nome do negócio
>
> Como está seu negócio hoje?
>
> O que você quer mudar ou alcançar?
>
> **Seu pedido**
>
> Você já tem um pedido em mente? *(opcional)*
>
> Links e referências *(opcional)*
>
> **Seu contato**
>
> Seu nome
>
> E-mail para retorno
>
> **[Enviar apresentação]**

Os três grupos ficam visíveis na mesma página; não são três telas. Quem não sabe o que contratar pode indicar “Ainda não sei; preciso de orientação”. A escolha do pedido não significa contratar um pacote.

Essa é a contribuição de `information-architecture`: definir o lugar do formulário, a ordem das informações e o caminho até ele. É uma proposta para a página; nada foi implementado. Os detalhes e limites seguem abaixo.

Status: proposta de estrutura produzida com `uiuxdesigner:information-architecture`, em 24/10/2026. Aplicação da metodologia concluída nesta proposta; testes com participantes e aprovação da estrutura não realizados. Não é implementação do formulário.

Fontes responsáveis: [escopo e entrada comercial](../02-WEBSITE_SPEC.md#6-sales-intake-and-form), [objetivo do site](../AUGEO.md) e fonte comercial global resolvida pelo projeto. Esta proposta detalha essas fontes sem estabelecer novas políticas comerciais.

## Diagnóstico e decisão

A página já apresenta posicionamento e processo. O conteúdo faltante é o necessário para o visitante se apresentar e saber o que acontece após o envio. Não há justificativa para ampliar o menu, adicionar páginas de serviços ou repetir o Processo dentro do formulário.

Recomendação: uma única seção `#entrada`, com formulário visível na página e três grupos sem etapas bloqueadas. O visitante pode entender todas as perguntas antes de começar, revisar qualquer resposta e enviar uma vez. Um modal esconderia o contexto; um wizard acrescentaria navegação sem uma dependência real entre perguntas.

Não aplicar mecanicamente a sugestão genérica da skill de 5–7 itens de navegação: esta landing tem duas ações úteis, conhecer o processo e apresentar o negócio.

## Inventário e árvore proposta

```text
Landing /
├── Cabeçalho
│   ├── Marca → #inicio
│   └── Alternância de tema
├── Hero #inicio
│   ├── Posicionamento + explicação
│   ├── Apresentar negócio → #entrada
│   └── Conhecer nosso processo → #processo
├── Processo #processo
│   ├── Conhecemos seu negócio
│   ├── Definimos as prioridades
│   ├── Apresentamos o projeto
│   └── Fechamento → #entrada no desktop
├── Entrada #entrada [proposta]
│   ├── Convite + explicação da análise inicial
│   ├── Seu negócio: nome, contexto/momento, objetivo
│   ├── Seu pedido: direção inicial e links opcionais
│   ├── Seu contato: nome e e-mail
│   ├── Informação de uso dos dados
│   └── Enviar apresentação
│       ├── Erros de preenchimento → corrigir sem perder respostas
│       ├── Falha de envio → manter respostas e permitir nova tentativa
│       └── Recebimento confirmado → explicar análise antes do retorno
└── Assinatura visual mobile existente
```

Ordem recomendada: Processo → Entrada → assinatura visual mobile. Mantém a matriz como encerramento geral já escolhido por Luca; não transforma a assinatura em interrupção antes do formulário. No desktop, a matriz continua na hero. A colocação de Entrada é uma proposta, não uma alteração já aplicada.

## Modelo de conteúdo e ordem de leitura

| Grupo / ordem | Rótulo proposto | Obrigatoriedade proposta | Por que está aqui |
| --- | --- | --- | --- |
| Negócio / 1 | Nome do negócio | Obrigatório | Identifica o contexto da conversa; aceitar projeto ainda sem marca formal. |
| Negócio / 2 | Como está seu negócio hoje? | Obrigatório | Contexto e estágio atual em uma resposta; evitar um segundo questionário sobre porte/faturamento. |
| Negócio / 3 | O que você quer mudar ou alcançar? | Obrigatório | Objetivo ou problema, sem exigir diagnóstico técnico. |
| Pedido / 4 | Você já tem um pedido em mente? | Opcional | Conhecer a intenção inicial sem convertê-la em compra de pacote. |
| Pedido / 5 | Links e referências | Opcional | Site, perfil ou material acessível; não exigir site existente nem upload. |
| Contato / 6 | Seu nome | Obrigatório | Identifica quem iniciou a conversa. |
| Contato / 7 | E-mail para retorno | Obrigatório, proposto | Um canal basta; não exigir também telefone. A adoção do e-mail precisa de confirmação operacional. |

Há sete campos, sendo cinco obrigatórios. Contexto/momento compartilham um campo; referências compartilham outro. Não há requisito de mínimo de caracteres longo: respostas curtas podem ser suficientes. Orçamento fica fora conforme a decisão comercial ainda pendente; não publicar a referência interna de preços.

Pedido inicial: seleção simples com “Ainda não sei; preciso de orientação” como estado inicial válido, seguida de “Identidade ou direção visual”, “Website”, “Aquisição com Meta Ads”, “CRM, automação ou integração”, “Mais de uma dessas frentes” e “Outro pedido”. Não abrir campos extras obrigatórios; contexto e objetivo já permitem explicar combinações e outros pedidos.

Justificativa da seleção simples: nesta entrada se coleta a intenção inicial, não um escopo exaustivo. Se a triagem precisar registrar várias áreas separadamente, revisar este modelo antes de substituir o controle por múltipla seleção.

## Rótulos e microcopy

- Seção: “Vamos entender o que seu negócio precisa.”
- Introdução: “Conte um pouco sobre seu momento e o motivo do contato. Vamos analisar as informações antes de retornar.”
- Grupo 1: “Seu negócio”. Grupo 2: “Seu pedido”. Grupo 3: “Seu contato”. São rótulos de agrupamento, não três telas nem novos passos do Processo.
- Ajuda de contexto: “Conte o que o negócio faz e como está sua presença digital hoje.”
- Ajuda de objetivo: “Pode ser um problema concreto ou algo que você ainda precisa entender.”
- Ajuda do pedido: “É um ponto de partida para a conversa, não a escolha de um pacote.”
- Ajuda de referências: “Se tiver, compartilhe site, perfil ou links de materiais.”
- Ação final: “Enviar apresentação”. Diferencia o envio real do CTA “Apresentar negócio”, que apenas leva à seção.
- Confirmação, somente após aceite verificável do recebimento: “Recebemos sua apresentação. Vamos analisar as informações antes de retornar pelo e-mail indicado.”

Não prometer prazo, reunião garantida, orçamento automático nem diagnóstico gratuito. Se o canal de retorno mudar, revisar os textos relacionados de forma consistente.

## Navegação por plataforma

Desktop: manter os links existentes; CTAs convergem para a mesma seção. Entrada em fluxo normal, sem painel fixo cobrindo conteúdo. Não acrescentar menu para sete campos. Ao ativar um CTA, alcançar e focar o título da Entrada, não inserir o cursor inesperadamente no primeiro campo.

Mobile: mesma ordem de conteúdo em uma coluna. O formulário já vem depois do fechamento do Processo; preservar a decisão de não restaurar um CTA duplicado só para repetir a ação. Sem barra fixa de envio cobrindo o teclado ou o conteúdo. A marca continua oferecendo retorno ao início.

Em ambas: permitir entrada direta por `/#entrada`; preservar respostas ao navegar entre âncoras ou alternar o tema. Erros não devem levar a outra página. Sucesso permanece dentro da seção, sem promessa de agenda ou contratação.

## Validação da arquitetura com pessoas — plano, não execução

Fazer um teste curto de árvore com 5–8 potenciais contatos, incluindo pessoas com pedido definido e pessoas que procuram orientação. Mostrar a hierarquia textual sem decoração e sem explicar onde clicar.

Tarefas: (1) descobrir como a contratação começa; (2) apresentar um negócio sem saber qual serviço precisa; (3) informar um pedido de website; (4) descobrir o que acontece depois do envio; (5) localizar onde corrigir o contato antes de enviar.

Registrar primeiro caminho, chegada independente ao destino, interpretações dos rótulos e pontos de hesitação. Critério exploratório proposto: pelo menos 4 de 5 pessoas devem encontrar cada destino principal sem ajuda; qualquer interpretação recorrente de “pedido” como compra imediata exige revisão, mesmo se encontrarem o campo. Isso não estima taxa de conversão populacional.

Complemento: apresentar cartões com negócio/momento/objetivo/pedido/referências/nome/contato e pedir agrupamento aberto. Comparar com os três grupos propostos; ajustar se o modelo mental das pessoas divergir. Nenhum recrutamento ou contato foi realizado.

## Dependências reais

O desenho não depende de escolher um fornecedor agora. Publicação funcional depende de destino de recebimento, responsável pela triagem, canal de retorno e informação de uso dos dados. Retenção, acesso, tratamento de duplicatas e recuperação precisam ser definidos com a operação; não inventar compromissos em microcopy.

Próxima camada já detalhada: [componentes e estados](2026-10-24-intake-components.md). Ambas são propostas concretas de design para revisão; nenhum campo novo se torna requisito aprovado apenas por aparecer aqui.
