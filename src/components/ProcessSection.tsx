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

// Shared grid rhythm, with the former 2% left-edge line deliberately omitted.
// Each column is split around the protected reading band; row boundaries connect it.
const PROCESS_INTERSECTION_COLUMN = 44;
const PROCESS_GRID_COLUMNS = [16, 30, PROCESS_INTERSECTION_COLUMN, 58, 72, 86] as const;
const PROCESS_LINE_SEGMENTS = [
  { id: 'upper', axis: 'y', from: 'row-start', to: 'reading-band-start', at: 0, duration: 0.4 },
  { id: 'lower', axis: 'y', from: 'reading-band-end', to: 'row-end', at: 0.4, duration: 0.4 },
  { id: 'boundary', axis: 'x', from: 'panel-left', to: 'panel-right', at: 0.8, duration: 0.2 },
] as const;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [unlockedStepIndex, setUnlockedStepIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();
      let refreshFrame = 0;
      let isDisposed = false;

      const measureProtectedBands = () => {
        section.querySelectorAll<HTMLElement>('.process-step').forEach((row) => {
          const bounds = row.getBoundingClientRect();
          const blocks = [...row.querySelectorAll<HTMLElement>('.process-step-title, .process-step-description')]
            .map((element) => element.getBoundingClientRect());
          const start = Math.max(0, Math.min(...blocks.map((rect) => rect.top)) - bounds.top - 24);
          const end = Math.min(bounds.height, Math.max(...blocks.map((rect) => rect.bottom)) - bounds.top + 24);
          row.style.setProperty('--process-reading-start', `${start}px`);
          row.style.setProperty('--process-reading-end', `${end}px`);
        });
      };
      measureProtectedBands();
      ScrollTrigger.addEventListener('refreshInit', measureProtectedBands);

      const refreshLayout = () => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          // A breakpoint change can preserve a later mobile focus index. Rebuild
          // the reading state from this layout before scroll callbacks take over.
          let currentIndex = -1;
          PROCESS_STEPS.forEach((step, index) => {
            const element = section.querySelector<HTMLElement>(`#${step.domId}`);
            if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.45) {
              currentIndex = index;
            }
          });
          setUnlockedStepIndex(currentIndex);
        });
      };

      mm.add(
        {
          desktop: '(min-width: 1024px)',
          narrow: '(max-width: 1023px)',
          reducedMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, reducedMotion } = context.conditions!;

          PROCESS_STEPS.forEach((step, index) => {
            const row = section.querySelector<HTMLElement>(`#${step.domId}`);
            const title = row?.querySelector<HTMLElement>('.process-step-title');
            const description = row?.querySelector<HTMLElement>('.process-step-description');
            if (!row || !title || !description) return;

            ScrollTrigger.create({
              trigger: row,
              start: 'top 45%',
              onEnter: () => setUnlockedStepIndex(index),
              onEnterBack: () => setUnlockedStepIndex(index),
              onLeaveBack: () => setUnlockedStepIndex(index - 1),
            });

            if (!desktop || reducedMotion) return;

            const drawing = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: row,
                start: index === 0 ? 'top 85%' : 'top 55%',
                // Keep connected segments sequential and let the final branch
                // finish even when the page has a short closing section.
                end: 'clamp(bottom 55%)',
                scrub: 0.35,
                invalidateOnRefresh: true,
              },
            });

            // The joint belongs to the preceding boundary. Reveal it only as
            // this row supplies the fourth arm of the intersection.
            const previousJoint = index > 0
              ? section.querySelector<SVGElement>(`#${PROCESS_STEPS[index - 1].domId} .process-grid-joint`)
              : null;
            if (previousJoint) {
              drawing.fromTo(previousJoint, { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.05);
            }

            PROCESS_LINE_SEGMENTS.forEach((segment) => {
              const strokes = row.querySelectorAll<HTMLElement>(`[data-line="${segment.id}"]`);
              drawing.fromTo(strokes,
                segment.axis === 'y' ? { scaleY: 0 } : { scaleX: 0 },
                {
                  ...(segment.axis === 'y' ? { scaleY: 1 } : { scaleX: 1 }),
                  duration: segment.duration,
                },
                segment.at,
              );
            });
          });

          refreshLayout();
        }
      );

      // Refresh scroll landmarks when text, fonts or window tiling change row bounds.
      const resizeObserver = new ResizeObserver(refreshLayout);
      resizeObserver.observe(section);
      window.addEventListener('resize', refreshLayout);
      document.fonts.ready.then(() => {
        if (!isDisposed) refreshLayout();
      });
      refreshLayout();

      return () => {
        isDisposed = true;
        window.removeEventListener('resize', refreshLayout);
        resizeObserver.disconnect();
        cancelAnimationFrame(refreshFrame);
        ScrollTrigger.removeEventListener('refreshInit', measureProtectedBands);
        mm.revert();
        section.querySelectorAll<HTMLElement>('.process-step').forEach((row) => {
          row.style.removeProperty('--process-reading-start');
          row.style.removeProperty('--process-reading-end');
        });
      };
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
            id="process-title"
            className="process-title"
            tabIndex={-1}
          >
            O seu contexto define o caminho.
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
                  <span className="process-line-arrangement" aria-hidden="true">
                    {PROCESS_GRID_COLUMNS.map((column) => (
                      <span key={column} className="process-grid-column" style={{ left: `${column}%` }}>
                        {PROCESS_LINE_SEGMENTS.filter((segment) => segment.axis === 'y').map((segment) => (
                          <span key={segment.id} className={`process-line process-line--${segment.id}`}
                            data-line={segment.id} data-from={segment.from} data-to={segment.to} />
                        ))}
                      </span>
                    ))}
                    <span className="process-line process-line--boundary" data-line="boundary"
                      data-from="panel-left" data-to="panel-right" />
                    {index < PROCESS_STEPS.length - 1 && (
                      <svg className="process-grid-joint" width="15" height="15" viewBox="0 0 15 15"
                        style={{ left: `calc(${PROCESS_INTERSECTION_COLUMN}% + 0.5px)` }}
                        focusable="false">
                        <path d="M7.5 0V15M0 7.5H15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </span>
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
