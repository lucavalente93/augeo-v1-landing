import ScrollCue from './components/ScrollCue';
import ProcessSection from './components/ProcessSection';
import KineticMatrix from '@/components/ui/kinetic-matrix';
import symbol from '@/src/assets/logo/symbol.png';
import augeoLettering from '@/src/assets/augeo-lettering.svg';
import { useLayoutEffect, useRef, useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const classes = document.documentElement.classList;
    if (classes.contains('dark')) return 'dark';
    if (classes.contains('light')) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark');

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const heading = headingRef.current;
    if (!hero || !heading) return;
    const updateHeroHeadingCenter = () => {
      const headingBounds = heading.getBoundingClientRect();
      const headingCenterY = headingBounds.top + headingBounds.height / 2 - hero.getBoundingClientRect().top;
      hero.style.setProperty('--hero-heading-center-y', `${headingCenterY}px`);
    };
    const resizeObserver = new ResizeObserver(updateHeroHeadingCenter);
    resizeObserver.observe(hero);
    resizeObserver.observe(heading);
    resizeObserver.observe(hero.querySelector('.hero-description')!);
    const cta = hero.querySelector('.hero-cta');
    if (cta) resizeObserver.observe(cta);
    window.addEventListener('resize', updateHeroHeadingCenter);
    updateHeroHeadingCenter();
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeroHeadingCenter);
    };
  }, []);

  return (
    <div className="page hero-page" id="inicio">
      <header className="site-header" aria-label="Cabeçalho Augeo Creative">
        <a className="brand" href="#inicio" aria-label="Augeo Creative — início">
          <img src={symbol} alt="Augeo Creative" />
        </a>
        <button
          type="button"
          className="theme-toggle-rudimentary"
          onClick={toggleTheme}
          aria-label="Alternar entre modo claro e escuro"
        >
          [{theme === 'dark' ? 'DARK' : 'LIGHT'}]
        </button>
      </header>
      <main>
        <section ref={heroRef} className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-content">
              <h1 ref={headingRef} id="hero-title"><span>Presença</span>{' '}<span>digital com</span>{' '}<span>direção.</span></h1>
              <p className="hero-description">O contexto do seu negócio define como conectamos marca, website, aquisição e operação digital.</p>
              <a className="hero-cta" href="#entrada" aria-label="Apresentar negócio">
                <span>Apresentar negócio</span>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <ScrollCue />
          </div>
          <div className="hero-matrix-panel">
            <KineticMatrix title="AUGEO" titleArtworkSrc={augeoLettering} enableArtworkMotion gridSpacing={72} className="hero-matrix" />
          </div>
        </section>
        <ProcessSection />
      </main>
    </div>
  );
}
