import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface CueSegment {
  index: number;
  row: number;
  col: number;
  dx: number;
  dy: number;
}

const ROWS = [6, 3];
const SEGMENT_WIDTH = 8;
const SEGMENT_GAP = 6;
const ROW_HEIGHT = 4;
const ROW_GAP = 14;
const ROW_STEP = ROW_HEIGHT + ROW_GAP; // 18px
const ANCHOR_SIZE = 8;
const ANCHOR_CENTER_Y = ROWS.length * ROW_STEP + ANCHOR_SIZE / 2; // 40px

/**
 * Geometric calculation of distance to anchor center for each segment in the 6 · 3 · 1 funnel.
 */
const SEGMENT_MATRIX: CueSegment[][] = ROWS.map((count, row) => {
  const rowWidth = count * SEGMENT_WIDTH + (count - 1) * SEGMENT_GAP;
  const firstIndex = ROWS.slice(0, row).reduce((sum, n) => sum + n, 0);
  return Array.from({ length: count }, (_, col) => {
    const segCenterX = -rowWidth / 2 + (col * (SEGMENT_WIDTH + SEGMENT_GAP) + SEGMENT_WIDTH / 2);
    const segCenterY = row * ROW_STEP + ROW_HEIGHT / 2;
    return {
      index: firstIndex + col,
      row,
      col,
      // dx and dy pointing towards anchor center (0, ANCHOR_CENTER_Y)
      dx: -segCenterX,
      dy: ANCHOR_CENTER_Y - segCenterY,
    };
  });
});

const TOTAL_SEGMENTS = SEGMENT_MATRIX.flat().length; // 9
const ANCHOR_INDEX = TOTAL_SEGMENTS; // 9 (10th layer)

/**
 * Option 3: CRT Scanline Aperture Array
 * 
 * Replaces raw CSS keyframes with curated React motion:
 * - Micro-scanline raster apertures inside each segment, echoing the horizontal scanlines of the AUGEO lettering.
 * - Declarative spring physics on hover via Motion (spring stiffness 280, damping 22).
 * - Electron beam sweep and phosphor decay orchestrated with millisecond precision via GSAP timeline.
 * - Viewport (IntersectionObserver) and tab (visibilitychange) suspension.
 * - Preserves accessible link <a href="#processo"> and prefers-reduced-motion fallback.
 */
export default function ScrollCue() {
  const cueRef = useRef<HTMLAnchorElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // GSAP Electron Beam Sweep Timeline
  useGSAP(() => {
    const root = cueRef.current;
    if (!root) return;

    if (reducedMotion) {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = null;
      root.dataset.playState = 'reduced';
      return;
    }

    const elements = gsap.utils.toArray<HTMLElement>('.scroll-cue-seg, .scroll-cue-anchor', root);
    if (elements.length < 10) return;

    const tl = gsap.timeline({
      repeat: -1,
      paused: false,
    });

    elements.forEach((el, index) => {
      const isAnchor = index === ANCHOR_INDEX;
      const startTime = index * 0.22;

      if (!isAnchor) {
        tl.to(
          el,
          {
            opacity: 1,
            color: 'rgb(255, 72, 44)',
            filter: 'drop-shadow(0 0 4px rgba(255, 72, 44, 0.85))',
            duration: 0.06,
            ease: 'power2.out',
          },
          startTime
        ).to(
          el,
          {
            opacity: 0.35,
            color: 'currentColor',
            filter: 'drop-shadow(0 0 0px transparent)',
            duration: 0.35,
            ease: 'power1.inOut',
          },
          startTime + 0.18
        );
      } else {
        // Anchor catches the light at 1.98s and holds for ~1.5s
        tl.to(
          el,
          {
            opacity: 1,
            color: 'rgb(255, 72, 44)',
            filter: 'drop-shadow(0 0 8px rgba(255, 72, 44, 0.95))',
            duration: 0.08,
            ease: 'power2.out',
          },
          startTime
        ).to(
          el,
          {
            opacity: 0.7,
            color: 'currentColor',
            filter: 'drop-shadow(0 0 0px transparent)',
            duration: 0.45,
            ease: 'power1.inOut',
          },
          startTime + 1.5
        );
      }
    });

    // 5.0 second total cycle with silence/breathing room before the next pulse
    tl.set({}, {}, 5.0);
    timelineRef.current = tl;
    (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = tl;
    root.dataset.playState = 'running';

    return () => {
      tl.kill();
      timelineRef.current = null;
      (root as unknown as { __gsapTimeline: gsap.core.Timeline | null }).__gsapTimeline = null;
    };
  }, { scope: cueRef, dependencies: [reducedMotion] });

  // Viewport & Tab Suspension Lifecycle
  useEffect(() => {
    const cue = cueRef.current;
    if (!cue || reducedMotion) return;

    let inView = true;
    const syncPlayState = () => {
      const tl = timelineRef.current;
      if (!tl) return;
      const shouldRun = inView && !document.hidden;
      if (shouldRun) {
        if (tl.paused()) tl.play();
        cue.dataset.playState = 'running';
      } else {
        if (!tl.paused()) tl.pause();
        cue.dataset.playState = 'paused';
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayState();
    });
    observer.observe(cue);

    document.addEventListener('visibilitychange', syncPlayState);
    syncPlayState();

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayState);
    };
  }, [reducedMotion]);

  return (
    <motion.a
      ref={cueRef}
      className="scroll-cue"
      href="#processo"
      aria-label="Conhecer nosso processo"
      initial="rest"
      whileHover={reducedMotion ? undefined : "hover"}
      animate={isHovered && !reducedMotion ? "hover" : "rest"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="scroll-cue-field" aria-hidden="true">
        {SEGMENT_MATRIX.map((rowSegments, rowIndex) => (
          <span key={rowIndex} className="scroll-cue-row">
            {rowSegments.map((segment) => (
              <motion.span
                key={segment.index}
                className="scroll-cue-seg"
                data-index={segment.index}
                variants={{
                  rest: { x: 0, y: 0 },
                  hover: { x: segment.dx * 0.35, y: segment.dy * 0.35 },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 22,
                  mass: 0.8,
                }}
              >
                <span className="scroll-cue-scanline" />
                <span className="scroll-cue-scanline" />
              </motion.span>
            ))}
          </span>
        ))}

        <motion.span
          className="scroll-cue-anchor"
          data-index={ANCHOR_INDEX}
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          <span className="scroll-cue-scanline" />
          <span className="scroll-cue-scanline" />
          <span className="scroll-cue-scanline" />
          <span className="scroll-cue-scanline" />
        </motion.span>
      </span>
    </motion.a>
  );
}
