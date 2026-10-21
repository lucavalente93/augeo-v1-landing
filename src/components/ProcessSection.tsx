export type ProcessStep = Readonly<{
  id: 'entrada' | 'entendimento' | 'proposta';
  domId: 'processo-01' | 'processo-02' | 'processo-03';
  index: '01' | '02' | '03';
  stageLabel: string;
  title: string;
  description: string;
}>;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: 'entrada',
    domId: 'processo-01',
    index: '01',
    stageLabel: 'ENTRADA',
    title: 'Conhecemos seu negócio',
    description: 'Investigamos seu momento atual e os obstáculos que motivaram o contato.',
  },
  {
    id: 'entendimento',
    domId: 'processo-02',
    index: '02',
    stageLabel: 'ENTENDIMENTO DO CENÁRIO',
    title: 'Definimos as prioridades',
    description: 'Analisamos quais mudanças fazem sentido e como as entregas devem trabalhar juntas.',
  },
  {
    id: 'proposta',
    domId: 'processo-03',
    index: '03',
    stageLabel: 'DIRECIONAMENTO E PROPOSTA',
    title: 'Apresentamos o projeto',
    description: 'Devolvemos um briefing validado com nossa recomendação, o escopo e o investimento. Você decide sobre a contratação.',
  },
] as const;

export default function ProcessSection() {
  return (
    <section
      id="processo"
      className="process-section"
      aria-labelledby="process-title"
      tabIndex={-1}
    >
      <div className="process-panel">
        <div className="process-header-primary">
          <h2 id="process-title" className="process-title" tabIndex={-1}>
            Nós estruturamos sua presença digital.
          </h2>
        </div>
        <div className="process-ledger-wrapper">
          <div className="process-header-secondary">
            <p className="process-lead">
              Conhecemos seu negócio, identificamos o que precisa mudar e propomos um projeto para conectar apresentação e operação.
            </p>
          </div>

          <ol className="process-ledger">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.id}
                id={step.domId}
                className={`process-step process-step--${step.id}`}
              >
                <div className="process-step-datum">
                  <span className="process-step-rule" aria-hidden="true" />
                  <span className="process-step-stage">{step.stageLabel}</span>
                </div>
                <div className="process-step-body">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <footer className="process-closing">
          <div className="process-closing-inner">
            <div className="process-closing-meta">
              <p className="process-closing-note">
                A contratação começa pelo entendimento do cenário — sem pacotes fechados ou compromisso antecipado.
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
