"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePerformance } from '@/lib/hooks/usePerformance';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const performance = usePerformance();

  useEffect(() => {
    if (!performance.enableSmoothScroll) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [performance.enableSmoothScroll]);

  return <>{children}</>;
}
