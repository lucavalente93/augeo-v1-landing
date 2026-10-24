# Component design — componentes da landing

Aplicação de `uiuxdesigner:component-design`, em 24/10/2026. Escopo: os componentes que já existem na landing e a intenção atual de saída para WhatsApp. Entregável: fichas e decisões de comportamento para revisão; nenhum código foi alterado. O estudo anterior de componentes de formulário continua apenas como alternativa.

## Resultado direto

O site tem três tipos de interação com funções diferentes: o CTA inicia contato; o controle de tema altera a apresentação; o indicador leva ao Processo. As etapas do Processo explicam a sequência e respondem à leitura, mas não são botões. A matriz é a assinatura interativa, não uma segunda navegação.

Manter essa separação evita que todos os elementos recebam o mesmo tratamento de botão ou que um destaque de hover pareça uma seleção comercial.

## 1. CTA “Apresentar negócio”

- **Função:** iniciar o contato comercial. Existe na hero e no fechamento desktop do Processo; a cópia do fechamento permanece oculta no mobile conforme a decisão anterior.
- **Anatomia:** link, texto persistente, seta decorativa. Manter a tipografia e a inversão de cores do tema já existentes. Não adicionar um segundo botão de WhatsApp concorrente na hero.
- **Destino:** a direção aprovada é WhatsApp; o código ainda usa `#entrada`. O número real precisa ser definido antes da ligação. Não inventar contato nem simular chatbot na landing.
- **Dimensões atuais:** CTA hero 46px no desktop comum e mínimo de 44px no mobile. Regras de pouca altura declaram `height: 40px/36px`, mas o `min-height: 44px` compartilhado continua impondo o mínimo; não confundir a declaração isolada com a altura final. CTA do Processo usa 48px. São variações responsivas existentes, não defeitos automaticamente.
- **Estados:** default com contraste de ação primária; hover com tratamento atual por tema; focus com outline visível; active com feedback de pressão existente. Loading, sucesso e erro de triagem pertencem ao canal de conversa, não ao link que apenas o abre. Não exibir “enviado” quando a pessoa só saiu do site.
- **Acessibilidade:** continuar como link nativo, acionável por Enter; seta oculta para leitores de tela. Dar uma indicação visível, discreta, como “A conversa começa no WhatsApp”, para antecipar o destino sem substituir o texto principal.
- **Decisão proposta:** manter a aparência; resolver destino e expectativa de navegação. Não acrescentar botão fixo/flutuante por padrão.

## 2. Controle de tema

- **Função:** alternar claro/escuro. **Anatomia:** botão nativo e indicação atual `[LIGHT]` / `[DARK]`.
- **Dimensões:** altura medida anteriormente de 26px; propor hit area mínima de 44px preservando o pequeno desenho visual e a posição no header. Isso é uma recomendação de conforto, não uma alegação de falha no mínimo AA.
- **Estados:** default mostra o tema atual; hover destaca borda/texto; focus permanece visível; Enter ou Espaço alternam e mantêm o foco. Nenhum loading, disabled ou estado de erro é necessário para uma troca local de tema.
- **Correção proposta:** trocar o nome acessível genérico por uma ação inequívoca: em dark, “Ativar modo claro”; em light, “Ativar modo escuro”. Não combinar essa estratégia com um `aria-pressed` ambíguo.
- **Comportamento responsivo:** mesma função em todos os tamanhos; a área de toque ampliada não pode empurrar marca, alterar altura da hero ou se sobrepor a outros alvos.
- **Limite:** persistência após recarregar é uma decisão separada; a implementação atual aplica o tema durante o mount. Não presumir preferência salva.

## 3. Indicador “Conhecer nosso processo”

- **Função:** continuação da leitura até `#processo`, distinta de iniciar contato.
- **Anatomia:** link 80×63px, desenho 6 · 3 · 1 em scanlines, nome acessível e ornamentação oculta para leitores de tela. A área clicável é o link inteiro, não cada segmento.
- **Estados:** repouso e varredura existentes; hover comprime a composição; focus mostra outline; active dá feedback de pressão; Enter navega como o clique. Em reduced-motion, preservar a alternativa estática prevista. Loading/error/disabled não se aplicam à navegação interna disponível.
- **Decisão proposta:** preservar desenho e interação aprovados. Não trocar pelo botão comercial nem adicionar rótulos técnicos ao conteúdo da página.
- **Verificação futura se houver edição:** destino/foco continuam chegando ao Processo; a versão móvel permanece disponível; a animação não é requisito para reconhecer o link via teclado/leitor de tela.

## 4. Etapas do Processo

- **Função:** explicar entendimento → prioridades → proposta. **Anatomia:** lista ordenada, título e descrição por etapa, divisores e estados de foco progressivo.
- **Geometria existente:** título de 28–40px, espaçamento título/descrição de 16px, padding mobile de 40px com inset existente. Desktop usa o ledger compartilhado; não converter as etapas em cards independentes ou redesenhar a malha.
- **Estados:** defocado (`opacity .38`); revelado pelo scroll (`opacity 1`); hover cumulativo até a etapa apontada; saída do mouse restaura o estado guiado pelo scroll. Com reduced-motion, CSS mantém as etapas em opacidade 1.
- **Acessibilidade e semântica:** não adicionar `role=button`, tabulação ou estados de “selecionado” a conteúdo que não executa uma ação. A leitura continua em ordem pelo documento. Avaliar legibilidade durante a leitura real, considerando reveal e saída do ponteiro.
- **Estados não aplicáveis:** pressed/disabled/loading/error de formulário não pertencem a essas etapas. Hover é ênfase temporária, não escolha de serviço.
- **Decisão:** preservar o comportamento explicado por Luca. As medições de estados defocados não autorizam sua remoção. O estado final do fechamento continua como implementado até que se peça outra coisa.

## 5. Marca e assinatura matricial

A marca no cabeçalho é um link de retorno ao início, com nome acessível e foco visível; não precisa de loading/disabled. A matriz e o lettering mantêm sua função de assinatura reativa, sem aparentar um CTA adicional. Preservar posição desktop/footer mobile, escala e kerning existentes. Nenhuma alteração em física, nós, espaçamento ou código interno da matriz faz parte desta aplicação.

O footer dentro de `main` usa nome em um papel genérico. A correção semântica proposta é remover o nome se for apenas uma assinatura decorativa, ou explicitar um agrupamento nomeável se houver propósito real de agrupamento. Não mover a matriz nem acrescentar um landmark artificial só para manter o atributo.

## O que esta aplicação recomenda mudar

1. Quando houver número definido, ligar os CTAs ao WhatsApp e antecipar esse destino com texto curto.
2. Tornar o nome acessível do controle de tema específico à próxima ação e ampliar sua área de toque.
3. Corrigir a semântica do nome do footer conforme sua função.

Os demais componentes ficam como baseline preservado. As recomendações são locais; não há proposta de novo sistema visual, formulário ou implementação do bot neste documento.

## Evidência e conclusão do workflow

Inspeção atual de `src/App.tsx`, `src/components/ScrollCue.tsx`, `src/components/ProcessSection.tsx` e regras pertinentes de `src/styles.css`. Dimensão medida do controle de tema e funcionamento de foco/navegação vêm da [auditoria registrada](2026-10-24-ux-skill-sequence.md), não de um novo teste nesta rodada. Não foi executado navegador, build ou teste de WhatsApp.

As fichas cobrem finalidade, anatomia, tamanhos, variantes, estados aplicáveis, adaptação e teclado/semântica. Não foi gerado HTML/CSS substituto porque os componentes já existem e alterações de implementação não foram solicitadas. Após implementação autorizada, verificar temas, teclado, touch, reduced-motion e navegação no destino real conforme o escopo alterado; não confundir especificação pronta com interface modificada.
