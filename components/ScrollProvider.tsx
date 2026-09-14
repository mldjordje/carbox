'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { scrollState, SECTIONS, SECTION_RANGES, type SectionId } from '@/lib/scroll-state';

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function onScroll(e: { scroll: number; limit: number; velocity: number; progress: number }) {
      scrollState.progress = e.progress;
      scrollState.velocity = e.velocity;

      // Determine active section
      for (const section of SECTIONS) {
        const range = SECTION_RANGES[section];
        if (e.progress >= range.start && e.progress <= range.end) {
          scrollState.activeSection = section;
          break;
        }
      }
    }

    lenis.on('scroll', onScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
