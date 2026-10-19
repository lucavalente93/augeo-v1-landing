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
      <svg className="scroll-cue-triangle" viewBox="0 0 24 42" aria-hidden="true" focusable="false">
        <path d="M0 6H24L12 24Z" />
      </svg>
      <svg className="scroll-cue-triangle" viewBox="0 0 24 42" aria-hidden="true" focusable="false">
        <path d="M0 18H24L12 36Z" />
      </svg>
    </a>
  );
}
