import { useEffect, useRef } from 'react';

/** Desktop continuity link to the Processo section (#processo). */
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
      <span className="scroll-cue-rail" aria-hidden="true">
        <span className="scroll-cue-pulse" />
      </span>
      <span className="scroll-cue-node" aria-hidden="true" />
    </a>
  );
}
