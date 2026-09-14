'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements with custom cursor hints
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('[data-cursor]');
      if (interactive) {
        setCursorText(interactive.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else if (target?.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small precision center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[120] w-1.5 h-1.5 rounded-full bg-[#c8102e] -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer fluid trailing ring with optional text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[119] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border border-white/25 backdrop-blur-[1px]"
        animate={{
          x: pos.x,
          y: pos.y,
          width: cursorText ? 80 : isHovered ? 48 : 28,
          height: cursorText ? 80 : isHovered ? 48 : 28,
          backgroundColor: cursorText ? 'rgba(200, 16, 46, 0.25)' : isHovered ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          borderColor: cursorText ? '#c8102e' : isHovered ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 320, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest text-white uppercase font-bold text-center px-2 select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
