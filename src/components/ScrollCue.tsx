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

    // Phase 1: Forward Cascade (Sweep Down 0 -> 8 -> Anchor)
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
      }
    });

    // Anchor excitation at 1.98s:
    // Glows intense orange, settles into crisp white CRT phosphor, then dims anterior rectangles
    const anchorEl = elements[ANCHOR_INDEX];
    const anteriorEls = elements.slice(0, 9);
    const anchorStartTime = ANCHOR_INDEX * 0.22; // 1.98s

    // Anchor catches the light in orange
    tl.to(
      anchorEl,
      {
        opacity: 1,
        color: 'rgb(255, 72, 44)',
        filter: 'drop-shadow(0 0 8px rgba(255, 72, 44, 0.95))',
        duration: 0.08,
        ease: 'power2.out',
      },
      anchorStartTime
    );

    // Anchor transitions from glowing orange into pure white phosphor at 2.35s
    tl.to(
      anchorEl,
      {
        color: '#ffffff',
        filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
        duration: 0.25,
        ease: 'power2.inOut',
      },
      anchorStartTime + 0.37
    );

    // Anterior segments dim down to low resting opacity (0.18) to isolate focus on the white anchor
    tl.to(
      anteriorEls,
      {
        opacity: 0.18,
        duration: 0.3,
        ease: 'power1.out',
      },
      anchorStartTime + 0.4
    );

    // Anchor holds white glow until 3.3s, then gently decays to currentColor
    tl.to(
      anchorEl,
      {
        opacity: 0.7,
        color: 'currentColor',
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 0.45,
        ease: 'power1.inOut',
      },
      3.3
    );

    // Phase 2: Symmetric Funnel Discharge (Vertical Return)
    // Row 1 center segments (indices 7, 6, 8) and Row 0 center segments (indices 2, 3)
    // emit a delicate upward return wave between 3.65s and 3.95s
    const row1CenterEls = [elements[7]]; // center segment of row 1
    const row1FlankEls = [elements[6], elements[8]]; // flanks of row 1
    const row0CenterEls = [elements[2], elements[3]]; // center segments of row 0
    const row0MidEls = [elements[1], elements[4]];

    tl.to(
      [row1CenterEls, row1FlankEls],
      {
        opacity: 0.7,
        color: 'currentColor',
        duration: 0.12,
        ease: 'power2.out',
        stagger: 0.04,
      },
      3.65
    ).to(
      [row1CenterEls, row1FlankEls],
      {
        opacity: 0.35,
        duration: 0.22,
        ease: 'power1.inOut',
      },
      3.8
    );

    tl.to(
      [row0CenterEls, row0MidEls],
      {
        opacity: 0.7,
        color: 'currentColor',
        duration: 0.12,
        ease: 'power2.out',
        stagger: 0.04,
      },
      3.8
    ).to(
      [row0CenterEls, row0MidEls],
      {
        opacity: 0.35,
        duration: 0.22,
        ease: 'power1.inOut',
      },
      3.95
    );

    // Restore any remaining anterior elements smoothly to default resting opacity (0.35)
    tl.to(
      anteriorEls,
      {
        opacity: 0.35,
        color: 'currentColor',
        duration: 0.3,
        ease: 'power1.inOut',
      },
      4.1
    );

    // Phase 3: Standby Filament Pre-Charge at Segment 0
    // At 4.82s (right before the next loop at 5.0s), Segment 0 pulses subtly, seeding the eye
    tl.to(
      elements[0],
      {
        opacity: 0.85,
        color: 'currentColor',
        filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))',
        duration: 0.1,
        ease: 'power2.out',
      },
      4.82
    ).to(
      elements[0],
      {
        opacity: 0.35,
        filter: 'drop-shadow(0 0 0px transparent)',
        duration: 0.08,
        ease: 'power1.in',
      },
      4.92
    );

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
