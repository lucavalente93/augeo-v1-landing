import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { WHATSAPP_URL } from '@/lib/contact';
import { ShinyButton } from '@/components/ui/shiny-button';

import black2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-black-2k.webp';
import black4kWebp from '@/src/assets/logo/3d/webp/augeo-3d-black-4k.webp';
import blackMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-black-mobile.webp';
import white2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-2k.webp';
import whiteMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-mobile.webp';
import whiteInvert2kWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-invert-2k.webp';
import whiteInvertMobileWebp from '@/src/assets/logo/3d/webp/augeo-3d-white-invert-mobile.webp';

gsap.registerPlugin(useGSAP);

const STAGE_GRID_COLUMNS = [16, 30, 44, 58, 72, 86] as const;
// object-fit: cover can make the bitmap wider than its viewport, especially on mobile.
// These slot widths follow the monolith's height clamps × the source aspect ratio.
const STAGE_IMAGE_SIZES = '(max-width: 768px) max(100vw, clamp(609.2px, 93.167vh, 824.167px)), max(100vw, clamp(931.667px, 129vh, 1612.5px))';

export default function BrandImmersiveStage({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const stageRef = useRef<HTMLElement>(null);
  const monolithRef = useRef<HTMLDivElement>(null);
  const reflectionImageRef = useRef<HTMLImageElement>(null);
  const enableReflection = new URLSearchParams(window.location.search).get('brandReflection') === 'auto';

  // Optional comparison: the default page contains only the static source images.
  useGSAP(
    () => {
      const stage = stageRef.current;
      const monolith = monolithRef.current;
      const reflectionImage = reflectionImageRef.current;
      if (!enableReflection || theme !== 'dark' || !stage || !monolith || !reflectionImage) return;

      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        let isInViewport = false;
        const sweep = gsap.fromTo(stage, { '--stage-sweep': '-35%' }, {
          '--stage-sweep': '135%',
          duration: 10,
          ease: 'sine.inOut',
          repeat: -1,
          repeatDelay: 2,
          paused: true,
        });
        const updatePlayback = () => {
          const isImageReady = reflectionImage.complete && reflectionImage.naturalWidth > 0;
          sweep.paused(!isInViewport || document.hidden || !isImageReady);
        };
        const observer = new IntersectionObserver(([entry]) => {
          isInViewport = entry.isIntersecting;
          updatePlayback();
        });
        observer.observe(monolith);
        reflectionImage.addEventListener('load', updatePlayback);
        document.addEventListener('visibilitychange', updatePlayback);

        return () => {
          observer.disconnect();
          reflectionImage.removeEventListener('load', updatePlayback);
          document.removeEventListener('visibilitychange', updatePlayback);
        };
      });
      return () => media.revert();
    },
    { scope: stageRef, dependencies: [enableReflection, theme], revertOnUpdate: true }
  );

  return (
    <section
      ref={stageRef}
      className="brand-stage"
      data-reflection={enableReflection ? 'auto' : 'static'}
      id="entrada"
      aria-labelledby="brand-stage-title"
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
              <img
                src={black2kWebp}
                srcSet={`${blackMobileWebp} 1376w, ${black2kWebp} 2752w, ${black4kWebp} 5504w`}
                sizes={STAGE_IMAGE_SIZES}
                alt="AUGEO 3D Monolith"
                loading="lazy"
                decoding="async"
                width={5504}
                height={3072}
                className="brand-stage-img"
              />
            </picture>
          </div>

          {/* Dark theme: static base, with an opt-in automatic reflection. */}
          <div className="brand-stage-theme brand-stage-theme--dark">
            {/* Base Layer: Front Illuminated */}
            <picture className="brand-stage-layer brand-stage-layer--base">
              <img
                src={white2kWebp}
                srcSet={`${whiteMobileWebp} 1376w, ${white2kWebp} 2752w`}
                sizes={STAGE_IMAGE_SIZES}
                alt="AUGEO 3D Monolith"
                loading="lazy"
                decoding="async"
                width={2752}
                height={1536}
                className="brand-stage-img"
              />
            </picture>

            {enableReflection && (
              <picture className="brand-stage-layer brand-stage-layer--reflection" aria-hidden="true">
                <img
                  ref={reflectionImageRef}
                  src={whiteInvert2kWebp}
                  srcSet={`${whiteInvertMobileWebp} 1376w, ${whiteInvert2kWebp} 2752w`}
                  sizes={STAGE_IMAGE_SIZES}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={2752}
                  height={1536}
                  className="brand-stage-img"
                />
              </picture>
            )}
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
