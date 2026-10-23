import { useEffect, useRef, type CSSProperties } from 'react';

/** Segments per row; the orange anchor is the final "1". */
const ROWS = [6, 3];
const SEGMENT_WIDTH = 8;
const SEGMENT_GAP = 6;
const ROW_HEIGHT = 4;
const ROW_GAP = 14;
const ROW_STEP = ROW_HEIGHT + ROW_GAP;
const ANCHOR_SIZE = 8;
const ANCHOR_CENTER_Y = ROWS.length * ROW_STEP + ANCHOR_SIZE / 2;

/**
 * Per segment: offset from its center to the anchor's center (gravity keyframes)
 * and its reading-order index (the orange light visits segments in that order).
 */
const SEGMENT_ROWS = ROWS.map((count, row) => {
  const rowWidth = count * SEGMENT_WIDTH + (count - 1) * SEGMENT_GAP;
  const firstIndex = ROWS.slice(0, row).reduce((sum, n) => sum + n, 0);
  return Array.from({ length: count }, (_, i) => ({
    '--i': firstIndex + i,
    '--dx': `${rowWidth / 2 - (i * (SEGMENT_WIDTH + SEGMENT_GAP) + SEGMENT_WIDTH / 2)}px`,
    '--dy': `${ANCHOR_CENTER_Y - (row * ROW_STEP + ROW_HEIGHT / 2)}px`,
  }) as CSSProperties);
});

/** Desktop continuity link to the Processo section (#processo) via segment rows pulled toward an anchor. */
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
      <span className="scroll-cue-field" aria-hidden="true">
        {SEGMENT_ROWS.map((segments, row) => (
          <span key={row} className="scroll-cue-row">
            {segments.map((style, i) => <span key={i} className="scroll-cue-seg" style={style} />)}
          </span>
        ))}
        <span className="scroll-cue-anchor" style={{ '--i': SEGMENT_ROWS.flat().length } as CSSProperties} />
      </span>
    </a>
  );
}
