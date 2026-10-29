import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export interface ArrowSegment {
  id: string;
  index: number;
  x: number; // px offset from center (0)
  y: number; // px offset from top (0)
  width: number;
  height: number;
  scanlines: number;
  role: 'shaft' | 'wing' | 'tip';
}

/**
 * Confident Modular Shaft + Head Arrow Geometry:
 * - Substantial thickness and scale: 16px wide slats, 6px thickness
 * - Central vertical shaft (3 segments at y=0, 15, 30)
 * - Symmetric 45-degree diagonal wings (outer pair at y=38, inner pair at y=50)
 * - Apex tip anchor (16px x 9px, 3 scanlines at y=62)
 * 
 * Total drawing: 64px width x 71px height
 */
export const ARROW_SEGMENTS: ArrowSegment[] = [
  // Shaft (indices 0, 1, 2)
  { id: 'shaft-0', index: 0, x: 0, y: 0, width: 16, height: 6, scanlines: 2, role: 'shaft' },
  { id: 'shaft-1', index: 1, x: 0, y: 15, width: 16, height: 6, scanlines: 2, role: 'shaft' },
  { id: 'shaft-2', index: 2, x: 0, y: 30, width: 16, height: 6, scanlines: 2, role: 'shaft' },
  // Wings (outer pair at y=38, inner pair at y=50) - exact 45-degree angle (dx=12, dy=12)
  { id: 'wing-l-out', index: 3, x: -24, y: 38, width: 16, height: 6, scanlines: 2, role: 'wing' },
  { id: 'wing-r-out', index: 4, x: 24, y: 38, width: 16, height: 6, scanlines: 2, role: 'wing' },
  { id: 'wing-l-in', index: 5, x: -12, y: 50, width: 16, height: 6, scanlines: 2, role: 'wing' },
  { id: 'wing-r-in', index: 6, x: 12, y: 50, width: 16, height: 6, scanlines: 2, role: 'wing' },
  // Apex Tip Anchor (index 7)
  { id: 'arrow-tip', index: 7, x: 0, y: 62, width: 16, height: 9, scanlines: 3, role: 'tip' },
];

export const TOTAL_SEGMENTS = ARROW_SEGMENTS.length; // 8
export const TIP_INDEX = 7;

const FIELD_HOVER_VARIANTS = {
  rest: { y: 0 },
  hover: { y: 5 },
};

const FIELD_HOVER_TRANSITION = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 24,
};

export default function ScrollCue() {
  const cueRef = useRef<HTMLAnchorElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Unified Lifecycle: GSAP Downward Cascade + Viewport / Tab Suspension
  useGSAP(() => {
    const root = cueRef.current;
    if (!root) return;

    const segments = gsap.utils.toArray<HTMLElement>('.scroll-cue-seg', root);

    if (reducedMotion) {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      gsap.killTweensOf(segments);
      gsap.set(segments, { clearProps: 'opacity,filter,y,transform,--cue-mix' });
      (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = null;
      root.dataset.playState = 'reduced';
      return;
    }

    if (segments.length < TOTAL_SEGMENTS) return;

    const [s0, s1, s2, wlOut, wrOut, wlIn, wrIn, tip] = segments;

    // Start PAUSED; IntersectionObserver / visibilitycheck will play if visible
    const tl = gsap.timeline({
      repeat: -1,
      paused: true,
    });

    const ACCENT_GLOW = 'drop-shadow(0 0 6px rgba(255, 72, 44, 0.85))';
    const TIP_GLOW = 'drop-shadow(0 0 10px rgba(255, 72, 44, 0.95))';
    const REST_OPACITY = 0.45;
    const TIP_REST_OPACITY = 0.8;
    const ECHO_OPACITY_WINGS = 0.70;
    const ECHO_OPACITY_SHAFT = 0.65;

    // =========================================================================
    // PHASE 1: Downward Cascade (0.00s -> 0.86s)
    // Speed reduced by ~35% (stagger expanded from 0.13s to 0.18s)
    // Energy flows steadily down shaft, through wings, down to the apex tip.
    // =========================================================================
    const shaftSteps = [s0, s1, s2];
    shaftSteps.forEach((el, idx) => {
      const t = idx * 0.18;
      tl.to(
        el,
        {
          opacity: 1,
          '--cue-mix': 1,
          filter: ACCENT_GLOW,
          duration: 0.12,
          ease: 'power2.out',
        },
        t
      ).to(
        el,
        {
          opacity: REST_OPACITY,
          '--cue-mix': 0,
          filter: 'drop-shadow(0 0 0px transparent)',
          duration: 0.38,
          ease: 'power1.inOut',
        },
        t + 0.18
      );
    });

    // Outer wings in unison at 0.54s
    tl.to(
      [wlOut, wrOut],
      {
        opacity: 1,
        '--cue-mix': 1,
        filter: ACCENT_GLOW,
        duration: 0.12,
        ease: 'power2.out',
      },
      0.54
    ).to(
      [wlOut, wrOut],
      {
        opacity: REST_OPACITY,
        '--cue-mix': 0,
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 0.38,
        ease: 'power1.inOut',
      },
      0.70
    );

    // Inner wings in unison at 0.70s
    tl.to(
      [wlIn, wrIn],
      {
        opacity: 1,
        '--cue-mix': 1,
        filter: ACCENT_GLOW,
        duration: 0.12,
        ease: 'power2.out',
      },
      0.70
    ).to(
      [wlIn, wrIn],
      {
        opacity: REST_OPACITY,
        '--cue-mix': 0,
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 0.38,
        ease: 'power1.inOut',
      },
      0.86
    );

    // =========================================================================
    // PHASE 2: Apex Tip Strike & Downward Energy Absorption (0.86s -> 1.10s)
    // Tip catches amber excitation, micro-compresses (+1.5px) absorbing energy.
    // NO white phosphor flash: retains rich orange tone at peak.
    // =========================================================================
    tl.to(
      tip,
      {
        opacity: 1,
        '--cue-mix': 1,
        filter: TIP_GLOW,
        y: 1.5,
        duration: 0.14,
        ease: 'power2.out',
      },
      0.86
    );

    // Tip smoothly settles downward compression back to 0 (1.10s -> 1.60s)
    tl.to(
      tip,
      {
        y: 0,
        duration: 0.50,
        ease: 'power2.out',
      },
      1.10
    );

    // =========================================================================
    // PHASE 3: Apex Orange Persistence (Slow Fade) & Preceding Echoes (1.10s -> 2.50s)
    // 1. Tip maintains orange accent, then slowly fades over 1.4s into resting currentColor.
    // 2. Preceding segments echo excitation in REGULAR colors (currentColor opacity bloom),
    //    while executing subtle upward micro-motion pull (-1px to -1.5px) simulating
    //    an upward gravity-field wave without bouncy recoil.
    // =========================================================================

    // Tip slow orange fade-out to resting color (1.10s -> 2.50s)
    tl.to(
      tip,
      {
        opacity: TIP_REST_OPACITY,
        '--cue-mix': 0,
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 1.40,
        ease: 'power2.out',
      },
      1.10
    );

    // Inner wings echo in regular color + upward gravity pull (1.10s -> 1.70s)
    tl.to(
      [wlIn, wrIn],
      {
        opacity: ECHO_OPACITY_WINGS,
        duration: 0.14,
        ease: 'power2.out',
      },
      1.10
    ).to(
      [wlIn, wrIn],
      {
        opacity: REST_OPACITY,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.24
    );
    tl.to(
      [wlIn, wrIn],
      {
        y: -1.0,
        duration: 0.18,
        ease: 'sine.out',
      },
      1.10
    ).to(
      [wlIn, wrIn],
      {
        y: 0,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.28
    );

    // Outer wings echo in regular color + upward gravity pull (1.25s -> 1.85s)
    tl.to(
      [wlOut, wrOut],
      {
        opacity: ECHO_OPACITY_WINGS,
        duration: 0.14,
        ease: 'power2.out',
      },
      1.25
    ).to(
      [wlOut, wrOut],
      {
        opacity: REST_OPACITY,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.39
    );
    tl.to(
      [wlOut, wrOut],
      {
        y: -1.0,
        duration: 0.18,
        ease: 'sine.out',
      },
      1.25
    ).to(
      [wlOut, wrOut],
      {
        y: 0,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.43
    );

    // Shaft base (s2) echo in regular color + upward gravity pull (1.40s -> 2.05s)
    tl.to(
      s2,
      {
        opacity: ECHO_OPACITY_SHAFT,
        duration: 0.14,
        ease: 'power2.out',
      },
      1.40
    ).to(
      s2,
      {
        opacity: REST_OPACITY,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.54
    );
    tl.to(
      s2,
      {
        y: -1.2,
        duration: 0.20,
        ease: 'sine.out',
      },
      1.40
    ).to(
      s2,
      {
        y: 0,
        duration: 0.45,
        ease: 'power1.inOut',
      },
      1.60
    );

    // Shaft mid (s1) echo in regular color + upward gravity pull (1.55s -> 2.20s)
    tl.to(
      s1,
      {
        opacity: ECHO_OPACITY_SHAFT,
        duration: 0.14,
        ease: 'power2.out',
      },
      1.55
    ).to(
      s1,
      {
        opacity: REST_OPACITY,
        duration: 0.42,
        ease: 'power1.inOut',
      },
      1.69
    );
    tl.to(
      s1,
      {
        y: -1.2,
        duration: 0.20,
        ease: 'sine.out',
      },
      1.55
    ).to(
      s1,
      {
        y: 0,
        duration: 0.45,
        ease: 'power1.inOut',
      },
      1.75
    );

    // Shaft top (s0) echo in regular color + upward gravity pull (1.70s -> 2.45s)
    tl.to(
      s0,
      {
        opacity: ECHO_OPACITY_SHAFT,
        duration: 0.16,
        ease: 'power2.out',
      },
      1.70
    ).to(
      s0,
      {
        opacity: REST_OPACITY,
        duration: 0.45,
        ease: 'power1.inOut',
      },
      1.86
    );
    tl.to(
      s0,
      {
        y: -1.5,
        duration: 0.22,
        ease: 'sine.out',
      },
      1.70
    ).to(
      s0,
      {
        y: 0,
        duration: 0.50,
        ease: 'power1.inOut',
      },
      1.92
    );

    // =========================================================================
    // PHASE 4: Quiescent Breathing & Anchored Rest (2.50s -> 6.00s)
    // Elements remain solidly anchored at resting opacities without vanishing.
    // Subtle pre-charge warm-up blip on s0 at cycle tail.
    // Total cycle duration: 6.00s (25% duration increase / 20% speed reduction from 4.8s)
    // =========================================================================
    tl.to(
      s0,
      {
        opacity: 0.75,
        filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.35))',
        duration: 0.14,
        ease: 'power2.out',
      },
      5.70
    ).to(
      s0,
      {
        opacity: REST_OPACITY,
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 0.14,
        ease: 'power1.in',
      },
      5.84
    );

    // Total cycle duration: 6.00s
    tl.set({}, {}, 6.0);
    timelineRef.current = tl;
    (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = tl;

    // Viewport & Tab Suspension Lifecycle (Unified within useGSAP)
    let inView = false;
    const syncPlayState = () => {
      const shouldRun = inView && !document.hidden;
      if (shouldRun) {
        if (tl.paused()) tl.play();
        root.dataset.playState = 'running';
      } else {
        if (!tl.paused()) tl.pause();
        root.dataset.playState = 'paused';
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = Boolean(entry?.isIntersecting);
      syncPlayState();
    });
    observer.observe(root);

    document.addEventListener('visibilitychange', syncPlayState);
    syncPlayState(); // Initial check

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayState);
      tl.kill();
      gsap.killTweensOf(segments);
      timelineRef.current = null;
      (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = null;
      gsap.set(segments, { clearProps: 'opacity,filter,y,transform,--cue-mix' });
    };
  }, { scope: cueRef, dependencies: [reducedMotion] });

  return (
    <motion.a
      ref={cueRef}
      className="scroll-cue"
      href="#processo"
      aria-label="Conhecer nosso processo"
      initial="rest"
      whileHover={reducedMotion ? undefined : "hover"}
    >
      <motion.span
        className="scroll-cue-field"
        aria-hidden="true"
        variants={FIELD_HOVER_VARIANTS}
        transition={FIELD_HOVER_TRANSITION}
      >
        {ARROW_SEGMENTS.map((seg) => {
          const segLeftOffset = seg.x - seg.width / 2;
          return (
            <span
              key={seg.id}
              className={`scroll-cue-seg scroll-cue-${seg.role}`}
              data-index={seg.index}
              data-role={seg.role}
              style={{
                '--seg-x': `${segLeftOffset}px`,
                '--seg-y': `${seg.y}px`,
                '--seg-w': `${seg.width}px`,
                '--seg-h': `${seg.height}px`,
                left: `calc(50% + ${segLeftOffset}px)`,
                top: `${seg.y}px`,
                width: `${seg.width}px`,
                height: `${seg.height}px`,
              } as React.CSSProperties}
            >
              {Array.from({ length: seg.scanlines }).map((_, lineIdx) => (
                <span key={lineIdx} className="scroll-cue-scanline" />
              ))}
            </span>
          );
        })}
      </motion.span>
    </motion.a>
  );
}
