"use client";

import { useEffect, useRef, useState } from 'react';
import { usePerformance } from '@/lib/hooks/usePerformance';
import { cn } from '@/lib/utils';

type CursorState = 'default' | 'enter' | 'view' | 'play' | 'drag' | 'discover';

export default function ContextualCursor() {
  const performance = usePerformance();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>('default');

  useEffect(() => {
    if (!performance.enableCursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const target = e.target as HTMLElement;
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorState;
      
      if (cursorType) {
        setCursorState(cursorType);
      } else {
        setCursorState('default');
      }
    };

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
      }

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [performance.enableCursor]);

  if (!performance.enableCursor) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out',
        cursorState === 'default' && 'h-2 w-2 bg-[#C9A96E] mix-blend-difference',
        cursorState === 'enter' && 'h-[60px] w-[60px] bg-aelora-accent/20 backdrop-blur-sm border border-aelora-accent text-aelora-accent',
        cursorState === 'view' && 'h-[50px] w-[50px] bg-aelora-accent text-aelora-bg',
        cursorState === 'play' && 'h-[50px] w-[50px] bg-aelora-accent text-aelora-bg',
        cursorState === 'drag' && 'h-[40px] w-[40px] bg-aelora-accent/50 text-aelora-bg',
        cursorState === 'discover' && 'h-[50px] w-[50px] bg-transparent border border-aelora-accent text-aelora-accent'
      )}
    >
      <div className="text-[10px] font-bold tracking-widest flex items-center justify-center w-full h-full">
        {cursorState === 'enter' && 'ENTER'}
        {cursorState === 'view' && 'VIEW'}
        {cursorState === 'play' && <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-aelora-bg border-b-4 border-b-transparent ml-1" />}
        {cursorState === 'drag' && '↔'}
        {cursorState === 'discover' && '+'}
      </div>
    </div>
  );
}
