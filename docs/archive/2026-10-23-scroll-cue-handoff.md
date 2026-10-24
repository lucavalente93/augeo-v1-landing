# Handoff de Especificação Técnica: Indicador de Continuação (.scroll-cue)
## Conceito: Striped Shutter / Scanline Cascade

- **Data:** 23/10/2026
- **Status:** Superado em 23/10/2026 pelo conceito 6 · 3 · 1 aprovado por Luca (implementação atual é scaffold). As seções abaixo são a proposta original — valores implementados e correções em [evidência da entrega](../reviews/2026-10-23-scroll-cue/README.md).
- **Branch alvo:** `v3`
- **Contexto:** Hero Section da Augeo Creative (`augeo-website`)

---

## 1. Contexto e Diagnóstico de Design

### 1.1 O que foi rejeitado e o que aprendemos
1. **Rejeição das Telemetrias Monospace e Tags Artificiais:** Não incluir rótulos, índices numéricos ou tags estilizadas (`01 // PROCESSO`, `INDEX`, etc.). São adereços cosméticos que adicionam ruído visual e violam o princípio anti-AI-slop do projeto.
2. **Rejeição do "Big-Boy Thick Datum":** Engrossar a linha existente de 1px para 3px/4px com um bloco quadrado maior não resolve a affordance. Transforma um fio frágil em um toco arbitrário, comunicando "término/parada" em vez de continuidade.
3. **Rejeição de Setas Convencionais (Chevron/Arrow):** Uma seta tradicional (`V` ou `↓`) é a resposta mais preguiçosa e comum do web design. Abandona o sistema visual sob medida da Augeo em favor de um clichê de template SaaS.

### 1.2 O Conceito Escolhido: Striped Shutter / Scanline Cascade
O elemento indicador de continuidade precisa **rimar visualmente** com a página sem ser um clichê.
A identidade gráfica da Augeo já possui um elemento central de forte presença visual: **as listras paralelas horizontais do lettering `AUGEO`** e a malha do CRT overlay.

O **Striped Shutter** traduz essa mesma linguagem em um dispositivo editorial vertical:
* Uma cascata vertical de **lâminas horizontais de largura decrescente** (pirâmide escalonada invertida / funil arquitetônico).
* A geometria cria **direcionamento óptico natural para baixo** pelo afunilamento rítmico das barras, sem desenhar setas.
* O movimento cinético não é um bloco deslizando, mas uma **onda de varredura (scanline cascade)** que acende as lâminas em sequência, culminando em um pulso no nó de ancoragem inferior.

---

## 2. Especificação Geométrica e Estrutural

```text
       ┌───────────────┐        <-- Lâmina 1: 20px × 2px
       └───────────────┘
         ┌───────────┐          <-- Lâmina 2: 15px × 2px
         └───────────┘
           ┌───────┐            <-- Lâmina 3: 10px × 2px
           └───────┘
             ┌───┐              <-- Lâmina 4: 5px × 2px
             └───┘
              ▪                 <-- Nó de ancoragem: 3px × 3px
```

### 2.1 Dimensões e Espaçamentos
* **Bounding Box do Link (`.scroll-cue`):** `width: 36px; height: 64px;`
  * Preserva uma área de toque/clique confortável e estável.
  * Mantém o alinhamento no eixo de 48px na coluna esquerda da hero (`.hero-copy`).
  * `margin-top: 32px; flex-shrink: 0; align-self: flex-start;`
  * Oculto em mobile (`display: none`), ativo a partir de 1024px (`display: inline-flex`).
* **Lâminas Horizontais (`.scroll-cue-slat`):**
  * **Lâmina 1 (Topo):** `20px` largura × `2px` altura
  * **Lâmina 2:** `15px` largura × `2px` altura
  * **Lâmina 3:** `10px` largura × `2px` altura
  * **Lâmina 4:** `5px` largura × `2px` altura
  * **Raio de borda:** `0px` (brutalismo geométrico estrito, combinando com a grade).
  * **Espaçamento entre lâminas (gap):** `5px`.
* **Nó Terminal de Ancoragem (`.scroll-cue-anchor`):**
  * `3px × 3px` quadrado, posicionado a `5px` abaixo da Lâmina 4.
  * Altura total do conjunto visual: `(4 × 2px) + (4 × 5px) + 3px = 31px`, centralizado verticalmente no container de 64px.

---

## 3. Comportamento Cromático e Temas

| Elemento | Estado | Modo Claro (`.light`) | Modo Escuro (`.dark`) |
| :--- | :--- | :--- | :--- |
| **Lâminas (Repouso)** | Inativo | `rgba(17, 17, 17, 0.18)` | `rgba(255, 255, 255, 0.16)` |
| **Lâmina em Ativação (Onda)** | Pico da onda | `#111111` (`var(--foreground)`) | `#f7f7f5` (`var(--foreground)`) |
| **Nó Terminal (Repouso)** | Inativo | `rgba(17, 17, 17, 0.35)` | `rgba(255, 255, 255, 0.30)` |
| **Nó Terminal (Impacto)** | Pico da onda | `#ff482c` (`var(--accent)`) + glow | `#ff482c` (`var(--accent)`) + glow |
| **Hover Global (`:hover`)** | Interativo | Lâminas em `#111111`, nó em `#ff482c` | Lâminas em `#ffffff`, nó em `#ff482c` |

---

## 4. Cinemática e Movimento (Scanline Cascade)

### 4.1 Ciclo da Onda (`@keyframes cue-cascade`)
O ciclo total dura **2.4s** com repetição infinita. O movimento é um rastro de iluminação em cascata de cima para baixo:

1. **`0.0s – 0.20s`:** A Lâmina 1 acende (transição para opacidade 1.0 e cor de primeiro plano).
2. **`0.15s – 0.35s`:** A Lâmina 2 acende; a Lâmina 1 inicia decaimento suave para o repouso.
3. **`0.30s – 0.50s`:** A Lâmina 3 acende; a Lâmina 2 inicia decaimento.
4. **`0.45s – 0.65s`:** A Lâmina 4 acende; a Lâmina 3 inicia decaimento.
5. **`0.60s – 0.85s`:** O Nó Terminal recebe o impacto: acende em laranja Augeo (`#ff482c`) com leve dispersão (`box-shadow: 0 0 6px var(--accent)`).
6. **`0.85s – 2.40s`:** **Pausa estrutural de respiração (1.55s).** O componente retorna ao repouso calmo antes da próxima varredura. Esse silêncio rítmico evita frenesi e preserva a sofisticação editorial da página.

### 4.2 Estado com Movimento Reduzido (`prefers-reduced-motion: reduce`)
* As animações de `@keyframes` são totalmente desativadas (`animation: none`).
* O conjunto é exibido estático em gradiente óptico equilibrado:
  * Lâmina 1: opacidade 0.25
  * Lâmina 2: opacidade 0.40
  * Lâmina 3: opacidade 0.55
  * Lâmina 4: opacidade 0.75
  * Nó Terminal: sólido em `var(--foreground)` ou `var(--accent)`.
* Continua comunicando a afunilação geométrica sem nenhuma pulsação temporal.

---

## 5. Estados Interativos e Acessibilidade

### 5.1 Hover e Foco
* **Hover no Link (`.scroll-cue:hover`):**
  * Todas as lâminas transitam suavemente (`transition: all 0.2s ease`) para opacidade total (`var(--foreground)`).
  * O nó terminal assume imediatamente a cor de destaque `#ff482c`.
  * Efeito de compressão elástica sutil: o gap entre as lâminas fecha ligeiramente de 5px para 4px (`transform: translateY(...)`), demonstrando resposta táctil direta ao ponteiro.
* **Press / Active (`.scroll-cue:active`):**
  * `transform: scale(0.97);` (mesmo padrão do CTA da hero).
* **Foco por Teclado (`.scroll-cue:focus-visible`):**
  * `outline: 2px solid var(--accent); outline-offset: 4px; border-radius: 2px;`

### 5.2 Estrutura de Código React ([ScrollCue.tsx](../../src/components/ScrollCue.tsx))
```tsx
import { useEffect, useRef } from 'react';

/** Desktop continuity link to the Processo section (#processo) via Striped Shutter. */
export default function ScrollCue() {
  const cueRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cue = cueRef.current;
    if (!cue) return;
    let isCueInViewport = false;
    const syncCueAnimationState = () => {
      cue.style.animationPlayState = isCueInViewport && !document.hidden ? 'running' : 'paused';
    };
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isCueInViewport = entry.isIntersecting;
      syncCueAnimationState();
    });
    intersectionObserver.observe(cue);
    document.addEventListener('visibilitychange', syncCueAnimationState);
    syncCueAnimationState();
    return () => {
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', syncCueAnimationState);
    };
  }, []);

  return (
    <a ref={cueRef} className="scroll-cue" href="#processo" aria-label="Conhecer nosso processo">
      <span className="scroll-cue-stack" aria-hidden="true">
        <span className="scroll-cue-slat scroll-cue-slat--1" />
        <span className="scroll-cue-slat scroll-cue-slat--2" />
        <span className="scroll-cue-slat scroll-cue-slat--3" />
        <span className="scroll-cue-slat scroll-cue-slat--4" />
        <span className="scroll-cue-anchor" />
      </span>
    </a>
  );
}
```

### 5.3 CSS de Referência ([styles.css](../../src/styles.css))
```css
/* Desktop continuity link to #processo: Striped Shutter */
.scroll-cue {
  display: none;
  text-decoration: none;
  border-radius: 2px;
  animation-play-state: paused;
}

@media (min-width: 1024px) {
  .hero-page .scroll-cue {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    align-self: flex-start;
    margin-top: 32px;
    width: 36px;
    height: 64px;
    outline: none;
  }

  .scroll-cue-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    transition: gap 0.2s ease, transform 0.2s ease;
    animation-play-state: inherit;
  }

  .scroll-cue-slat {
    height: 2px;
    background: currentColor;
    opacity: 0.18;
    color: var(--foreground);
    animation: cue-slat-cascade 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation-play-state: inherit;
    transition: opacity 0.2s ease, background-color 0.2s ease;
  }

  :root.dark .scroll-cue-slat {
    opacity: 0.16;
  }

  .scroll-cue-slat--1 { width: 20px; animation-delay: 0s; }
  .scroll-cue-slat--2 { width: 15px; animation-delay: 0.15s; }
  .scroll-cue-slat--3 { width: 10px; animation-delay: 0.3s; }
  .scroll-cue-slat--4 { width: 5px;  animation-delay: 0.45s; }

  .scroll-cue-anchor {
    width: 3px;
    height: 3px;
    background: currentColor;
    color: var(--foreground);
    opacity: 0.3;
    animation: cue-anchor-flash 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation-delay: 0.6s;
    animation-play-state: inherit;
    transition: opacity 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  }

  /* Keyframe da cascata das lâminas */
  @keyframes cue-slat-cascade {
    0% { opacity: 0.18; }
    12% { opacity: 1; }
    28%, 100% { opacity: 0.18; }
  }

  :root.dark @keyframes cue-slat-cascade {
    0% { opacity: 0.16; }
    12% { opacity: 1; }
    28%, 100% { opacity: 0.16; }
  }

  /* Keyframe do nó de ancoragem */
  @keyframes cue-anchor-flash {
    0% { opacity: 0.3; background: currentColor; box-shadow: none; }
    12% { opacity: 1; background: var(--accent); box-shadow: 0 0 6px var(--accent); }
    28%, 100% { opacity: 0.3; background: currentColor; box-shadow: none; }
  }

  /* Hover & Active */
  .scroll-cue:hover .scroll-cue-slat {
    opacity: 0.9;
    animation-play-state: paused;
  }

  .scroll-cue:hover .scroll-cue-anchor {
    opacity: 1;
    background: var(--accent);
    box-shadow: 0 0 6px var(--accent);
    animation-play-state: paused;
  }

  .scroll-cue:hover .scroll-cue-stack {
    gap: 4px;
    transform: translateY(2px);
  }

  .scroll-cue:active {
    transform: scale(0.97);
  }

  .scroll-cue:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue-slat,
  .scroll-cue-anchor {
    animation: none !important;
  }
  .scroll-cue-slat--1 { opacity: 0.25 !important; }
  .scroll-cue-slat--2 { opacity: 0.40 !important; }
  .scroll-cue-slat--3 { opacity: 0.60 !important; }
  .scroll-cue-slat--4 { opacity: 0.80 !important; }
  .scroll-cue-anchor  { opacity: 1 !important; background: var(--accent) !important; }
}
```

---

## 6. Roteiro de Testes e Migração (Playwright)

Ao implementar, Claude precisará migrar o arquivo `tests/scroll-cue.spec.ts` para refletir a nova estrutura:
1. **Seletores:** Substituir referências a `.scroll-cue-rail` e `.scroll-cue-pulse` por `.scroll-cue-slat` e `.scroll-cue-anchor`.
2. **Contagem:**
   * `expect(cue.locator('.scroll-cue-slat')).toHaveCount(4)`
   * `expect(cue.locator('.scroll-cue-anchor')).toHaveCount(1)`
3. **Geometria de Referência:**
   * Bounding box do link continua estável em `width: 36px; height: 64px;`.
   * As larguras das lâminas devem ser assertadas: `[20, 15, 10, 5]` com altura de 2px.
4. **Respeito a Reduced Motion e Suspensão:**
   * Garantir que `IntersectionObserver` e `visibilitychange` continuem pausando as animações ao sair do viewport ou trocar de aba.
   * Garantir que em telas `< 1024px` o componente continue `toBeHidden()`.
5. **Critério de Sucesso do Build:**
   * `bun run build` aprovado sem erros de tipagem.
   * `bun run test` (suite Playwright) com 100% dos testes aprovados.
