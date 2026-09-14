'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGLTF } from '@react-three/drei';

if (typeof window !== 'undefined') {
  useGLTF.preload('/models/honda_civic_rs.glb');
  useGLTF.preload('/models/honda_cr-v_2026.glb');
}

interface Props {
  onComplete: () => void;
}

const ASSET_IMAGES = [
  '/images/unnamed (8).webp',
  '/images/unnamed (5).webp',
  '/images/unnamed (9).webp',
  '/images/unnamed (3).webp',
  '/images/unnamed (4).webp',
  '/images/unnamed (1).webp',
  '/images/unnamed (6).webp',
  '/images/unnamed (2).webp',
  '/images/unnamed (7).webp',
  '/images/unnamed.webp',
  '/images/logo.jpg',
];

export function Preloader({ onComplete }: Props) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [statusMessage, setStatusMessage] = useState('INICIJALIZACIJA SISTEMA...');
  const targetProgress = useRef(0);

  const handleSkip = () => {
    setIsFinished(true);
    setTimeout(onComplete, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    // Total items to load: images + video + 3D models + fonts
    const totalItems = ASSET_IMAGES.length + 4;

    const updateItemLoaded = (msg?: string) => {
      if (isCancelled) return;
      loadedCount++;
      const pct = Math.min(100, Math.round((loadedCount / totalItems) * 100));
      targetProgress.current = pct;
      if (msg) setStatusMessage(msg);
    };

    // 1. Preload Fonts
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready
        .then(() => updateItemLoaded('UČITAVANJE TIPOGRAFIJE...'))
        .catch(() => updateItemLoaded());
    } else {
      updateItemLoaded();
    }

    // 2. Preload Hero Video
    const preloadVideo = (src: string) => {
      const vid = document.createElement('video');
      vid.preload = 'auto';
      vid.muted = true;
      vid.playsInline = true;
      vid.src = src;

      let resolved = false;
      const done = () => {
        if (!resolved) {
          resolved = true;
          updateItemLoaded('BAFEROVANJE CINEMATIC VIDEA...');
        }
      };

      vid.oncanplaythrough = done;
      vid.onloadeddata = done;
      vid.onerror = done;
      vid.load();
    };

    preloadVideo('/car-hero.mp4');

    // 3. Preload 3D Models
    const preloadModel = (src: string) => {
      fetch(src)
        .then(() => updateItemLoaded('UČITAVANJE 3D STUDIJA...'))
        .catch(() => updateItemLoaded('UČITAVANJE 3D STUDIJA...'));
    };

    preloadModel('/models/honda_civic_rs.glb');
    preloadModel('/models/honda_cr-v_2026.glb');

    // 4. Preload & GPU Decode Showroom Images
    ASSET_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      const onImgDone = () => {
        if ('decode' in img) {
          img.decode().then(() => updateItemLoaded('DEKODOVANJE FOTOGRAFIJA SALONA...')).catch(() => updateItemLoaded());
        } else {
          updateItemLoaded('DEKODOVANJE FOTOGRAFIJA SALONA...');
        }
      };
      img.onload = onImgDone;
      img.onerror = () => updateItemLoaded();
    });

    // 5. Smooth Display Progress Counter & Safety Dismissal
    const startTime = Date.now();
    const ticker = setInterval(() => {
      if (isCancelled) return;

      setDisplayProgress((curr) => {
        const target = targetProgress.current;
        if (curr < target) {
          return curr + 1;
        }

        // Check if all assets are ready
        if (curr >= 100 && target >= 100) {
          clearInterval(ticker);
          setStatusMessage('SPREMNO (100%)');
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 350);
          return 100;
        }

        return curr;
      });

      // Safety timeout: max 6.5s to ensure user is never stuck
      if (Date.now() - startTime > 6500) {
        targetProgress.current = 100;
      }
    }, 28);

    return () => {
      isCancelled = true;
      clearInterval(ticker);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#08080a] text-[#f2f0eb] p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span>CAR BOX NIŠ</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase hidden sm:block">
                BULEVAR CARA KONSTANTINA 80-82 · 4.500 m²
              </div>
              <button
                type="button"
                onClick={handleSkip}
                className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-[#c8102e] bg-white/5 backdrop-blur transition-all flex items-center space-x-1 cursor-pointer"
              >
                <span>Preskoči uvod</span>
                <span className="text-[9px] text-neutral-400 hidden sm:inline">[Esc]</span>
                <span>→</span>
              </button>
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
              <p className="text-sm font-light text-neutral-400">
                Ovlašćeni prodajno-servisni centar
              </p>
            </motion.div>

            {/* Mechanical Counter */}
            <div className="pt-4">
              <div className="text-6xl sm:text-8xl font-mono font-light tracking-tighter text-white">
                {displayProgress}
                <span className="text-2xl sm:text-3xl text-[#c8102e] ml-1 font-mono font-normal">%</span>
              </div>
            </div>

            {/* Red Laser Micro Line */}
            <div className="w-56 mx-auto h-[2px] bg-neutral-800 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-[#c8102e] transition-all duration-100 ease-out"
                style={{ width: `${displayProgress}%` }}
              />
            </div>

            <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              {statusMessage}
            </div>
          </div>

          {/* Bottom Line */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-neutral-900 pt-4">
            <span>HONDA · PEUGEOT · OPEL · SUZUKI · VESPA · SEGWAY</span>
            <span>{displayProgress < 100 ? 'UČITAVANJE...' : 'KOMPLETIRANO'}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

