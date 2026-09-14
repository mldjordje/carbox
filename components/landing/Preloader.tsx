'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#08080a] text-[#f2f0eb] p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
              <span>CAR BOX NIŠ</span>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase hidden sm:block">
              BULEVAR CARA KONSTANTINA 80-82
            </div>
          </div>

          {/* Center Minimalist Monogram & Progress Counter */}
          <div className="my-auto max-w-lg mx-auto w-full text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-white uppercase">
                CAR BOX
              </h1>
              <p className="text-xs font-serif italic text-neutral-400 tracking-normal text-lg">
                Centar za premijum mobilnost i inženjering
              </p>
            </motion.div>

            {/* Mechanical Counter */}
            <div className="pt-6">
              <div className="text-5xl sm:text-7xl font-mono font-light tracking-tighter text-[#f2f0eb]">
                {Math.min(100, progress)}
                <span className="text-xl sm:text-2xl text-[#c8102e] ml-1 font-mono font-normal">%</span>
              </div>
            </div>

            {/* Red Laser Micro Line */}
            <div className="w-48 mx-auto h-[1px] bg-neutral-800 relative overflow-hidden">
              <div
                className="h-full bg-[#c8102e] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Line */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-neutral-900 pt-4">
            <span>HONDA · PEUGEOT · OPEL · SUZUKI · VESPA · SEGWAY</span>
            <span>{progress < 100 ? 'UČITAVANJE SALONA...' : 'SPREMNO'}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
