import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WHATSAPP_URL } from '@/lib/contact';
import { ShinyButton } from '@/components/ui/shiny-button';

import black2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-black-2k.webp';
import blackMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-black-mobile.webp';
import white2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-2k.webp';
import whiteMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-mobile.webp';
import whiteInvert2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-invert-2k.webp';
import whiteInvertMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-invert-mobile.webp';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STAGE_GRID_COLUMNS = [16, 30, 44, 58, 72, 86] as const;

export default function BrandImmersiveStage() {
  const stageRef = useRef<HTMLElement>(null);
  const monolithRef = useRef<HTMLDivElement>(null);
  const [sweep, setSweep] = useState<number>(45);
  const [isPointerActive, setIsPointerActive] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  // Viewport-wide pointer tracking across the stage
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setSweep(Math.round(ratio * 100));
    setIsPointerActive(true);
  }, [reducedMotion]);

  const handlePointerLeave = useCallback(() => {
    setIsPointerActive(false);
    setSweep(45); // Rest at optimal chamfer highlight
  }, []);

  // GSAP ScrollTrigger for cinematic entrance light sweep
  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage || reducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 75%',
          end: 'center center',
          scrub: 0.8,
        },
      });

      tl.fromTo(
        stage,
        { '--scroll-sweep': '10%' },
        { '--scroll-sweep': '80%', ease: 'none' }
      );
    },
    { scope: stageRef, dependencies: [reducedMotion] }
  );

  const activeSweep = isPointerActive ? sweep : 45;
  const activeOpacity = isPointerActive ? 0.9 : 0.55;

  return (
    <section
      ref={stageRef}
      className="brand-stage"
      id="entrada"
      aria-labelledby="brand-stage-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        '--stage-sweep': `${activeSweep}%`,
        '--stage-opacity': activeOpacity,
      } as React.CSSProperties}
    >
      {/* Background Architectural Grid Lines — Equilateral continuation of Process */}
      <div className="brand-stage-grid" aria-hidden="true">
        {STAGE_GRID_COLUMNS.map((col) => (
          <span
            key={col}
            className="brand-stage-column"
            style={{ left: `${col}%` }}
          />
        ))}
      </div>

      {/* The Monumental 3D Monolith Canvas */}
      <div ref={monolithRef} className="brand-stage-monolith-wrapper">
        <div className="brand-stage-monolith">
          {/* Light Theme Monumental Rendition */}
          <div className="brand-stage-theme brand-stage-theme--light">
            <picture className="brand-stage-layer">
              <source media="(max-width: 768px)" srcSet={blackMobileWebp} type="image/webp" />
              <img
                src={black2kWebp}
                alt="AUGEO 3D Monolith"
                loading="lazy"
                decoding="async"
                width={2752}
                height={1536}
                className="brand-stage-img"
              />
            </picture>
          </div>

          {/* Dark Theme Monumental Dual-Layer Reflection Rendition */}
          <div className="brand-stage-theme brand-stage-theme--dark">
            {/* Base Layer: Front Illuminated */}
            <picture className="brand-stage-layer brand-stage-layer--base">
              <source media="(max-width: 768px)" srcSet={whiteMobileWebp} type="image/webp" />
              <img
                src={white2kWebp}
                alt="AUGEO 3D Monolith"
                loading="lazy"
                decoding="async"
                width={2752}
                height={1536}
                className="brand-stage-img"
              />
            </picture>

            {/* Specular Layer: Extruded Sidewalls Inverted */}
            <picture className="brand-stage-layer brand-stage-layer--reflection">
              <source media="(max-width: 768px)" srcSet={whiteInvertMobileWebp} type="image/webp" />
              <img
                src={whiteInvert2kWebp}
                alt=""
                loading="lazy"
                decoding="async"
                width={2752}
                height={1536}
                className="brand-stage-img"
              />
            </picture>
          </div>

          {/* Precision Architectural Vignette Mask */}
          <div className="brand-stage-vignette" aria-hidden="true" />
        </div>
      </div>

      {/* Editorial Conversion Anchor */}
      <div className="brand-stage-content">
        <div className="brand-stage-copy">
          <h2 id="brand-stage-title" className="brand-stage-title">
            A contratação começa pelo diagnóstico.
          </h2>
          <p className="brand-stage-note">
            O projeto é desenhado para o seu momento; sem pacotes fechados ou compromisso antecipado.
          </p>
        </div>

        <div className="brand-stage-actions">
          <ShinyButton
            label="Apresentar negócio"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apresentar negócio pelo WhatsApp (abre em nova aba)"
            accentColor="#ff482c"
            accentSoftColor="#ff7a64"
            cornerRadius={12}
          />
        </div>
      </div>
    </section>
  );
}
