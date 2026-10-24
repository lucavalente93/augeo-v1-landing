import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type ProcessStep = Readonly<{
  id: 'entrada' | 'entendimento' | 'proposta';
  domId: 'processo-01' | 'processo-02' | 'processo-03';
  title: string;
  description: string;
}>;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: 'entrada',
    domId: 'processo-01',
    title: 'Conhecemos seu negócio',
    description: 'Investigamos seu momento atual e os obstáculos que motivaram o contato.',
  },
  {
    id: 'entendimento',
    domId: 'processo-02',
    title: 'Definimos as prioridades',
    description: 'Analisamos quais mudanças fazem sentido e como as entregas devem trabalhar juntas.',
  },
  {
    id: 'proposta',
    domId: 'processo-03',
    title: 'Apresentamos o projeto',
    description: 'Devolvemos um briefing validado com nossa recomendação, o escopo e o investimento. Você decide sobre a contratação.',
  },
] as const;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [unlockedStepIndex, setUnlockedStepIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const header = section?.querySelector<HTMLElement>('.process-header-primary');
      const step2 = section?.querySelector<HTMLElement>('#processo-02');
      const closing = section?.querySelector<HTMLElement>('.process-closing');
      if (!section || !title || !header || !step2) return;

      const mm = gsap.matchMedia();

      // Desktop: animação suave com ScrollTrigger e matchMedia
      mm.add('(min-width: 1024px)', () => {
        // 1. Alinhamento contínuo e suave (scrub) da headline com o centro do bloco do Step 2
        // Calcula o deslocamento exato para que, no final do percurso do processo, o centro
        // vertical da headline repouse perfeitamente alinhado com o centro do Step 2.
        const calcShift = () => {
          const s3 = section.querySelector<HTMLElement>('#processo-03');
          if (!s3 || !closing) return 0;
          const s2Height = step2.offsetHeight;
          const s3Height = s3.offsetHeight;
          const closingHeight = closing.offsetHeight;
          const s2TopAtBottom = window.innerHeight - closingHeight - s3Height - s2Height;
          const s2CenterAtBottom = s2TopAtBottom + s2Height / 2;

          const stickyTop = window.innerHeight * 0.15;
          const headerPaddingTop = parseFloat(getComputedStyle(header).paddingTop);
          const hTopAtBottom = stickyTop + headerPaddingTop;
          const hCenterAtBottom = hTopAtBottom + title.offsetHeight / 2;

          return s2CenterAtBottom - hCenterAtBottom;
        };

        const anim = gsap.to(title, {
          y: () => calcShift(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // 2. Telemetria de foco cumulativo dos passos (1 -> 2 -> 3) com fluidez bidirecional
        PROCESS_STEPS.forEach((step, idx) => {
          const el = section.querySelector<HTMLElement>(`#${step.domId}`);
          if (!el) return;

          const startTrigger = idx === 0 ? 'top 75%' : 'top 42%';

          ScrollTrigger.create({
            trigger: el,
            start: startTrigger,
            onEnter: () => setUnlockedStepIndex((prev) => Math.max(prev, idx)),
            onEnterBack: () => setUnlockedStepIndex(idx),
            onLeaveBack: () => setUnlockedStepIndex(idx - 1),
          });
        });

        // Desbloqueia todos ao alcançar o fechamento
        if (closing) {
          ScrollTrigger.create({
            trigger: closing,
            start: 'top 85%',
            onEnter: () => setUnlockedStepIndex(PROCESS_STEPS.length - 1),
          });
        }

        // Limpeza ao sair da seção por cima
        ScrollTrigger.create({
          trigger: section,
          start: 'top 95%',
          onLeaveBack: () => setUnlockedStepIndex(-1),
        });

        return () => {
          anim.kill();
        };
      });

      // Mobile / i3wm tiling (< 1024px):
      // Reversão limpa de inline styles para evitar qualquer sobreposição
      mm.add('(max-width: 1023px)', () => {
        gsap.set(title, { clearProps: 'transform,y' });

        // No mobile, os passos ativam naturalmente conforme entram na tela
        PROCESS_STEPS.forEach((step, idx) => {
          const el = section.querySelector<HTMLElement>(`#${step.domId}`);
          if (!el) return;

          ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            onEnter: () => setUnlockedStepIndex((prev) => Math.max(prev, idx)),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="process-section"
      aria-labelledby="process-title"
      tabIndex={-1}
    >
      <div className="process-panel">
        <div className="process-header-primary">
          <h2
            ref={titleRef}
            id="process-title"
            className="process-title"
            tabIndex={-1}
          >
            Nós estruturamos sua presença digital.
          </h2>
        </div>
        <div className="process-ledger-wrapper">
          <ol
            className="process-ledger"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {PROCESS_STEPS.map((step, index) => {
              const isCumulativeHover = hoveredIndex !== null && index <= hoveredIndex;
              const isScrollUnlocked = hoveredIndex === null && index <= unlockedStepIndex;
              const isActive = isCumulativeHover || isScrollUnlocked;

              return (
                <li
                  key={step.id}
                  id={step.domId}
                  className={`process-step process-step--${step.id}${isActive ? ' process-step--active' : ''}`}
                  data-active={isActive ? 'true' : 'false'}
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <div className="process-step-body">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-description">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <footer className="process-closing">
          <div className="process-closing-inner">
            <div className="process-closing-meta">
              <h3 className="process-closing-title">A contratação começa pelo diagnóstico.</h3>
              <p className="process-closing-note">
                O projeto é desenhado para o seu momento; sem pacotes fechados ou compromisso antecipado.
              </p>
            </div>
            <div className="process-closing-action">
              <a
                className="process-cta"
                href="#entrada"
                aria-label="Apresentar negócio"
              >
                <span>Apresentar negócio</span>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
