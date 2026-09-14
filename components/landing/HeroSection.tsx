'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Sparkles, ArrowRight, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';

interface Props {
  onOpenTestDrive?: () => void;
  onSelectBrand?: (brandId: string) => void;
}

export function HeroSection({ onOpenTestDrive, onSelectBrand }: Props) {
  const [activeVideo, setActiveVideo] = useState<'car' | 'motor'>('car');
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Instagram Story Highlights from @carbox_nis
  const brandStories = [
    { id: 'suzuki', name: 'Suzuki', label: 'Suzuki', badge: '4x4' },
    { id: 'jetour', name: 'JETOUR', label: 'JETOUR', badge: 'SUV' },
    { id: 'honda-moto', name: 'Honda Moto', label: 'Honda Motori', badge: 'Moto' },
    { id: 'opel', name: 'Opel', label: 'Opel', badge: 'GS' },
    { id: 'zontes', name: 'Zontes', label: 'Zontes', badge: 'Moto' },
    { id: 'honda', name: 'Honda', label: 'Honda', badge: 'e:HEV' },
    { id: 'peugeot', name: 'Peugeot', label: 'Peugeot', badge: 'GT' },
    { id: 'piaggio-vespa', name: 'Vespa', label: 'Vespa', badge: 'Skuter' },
    { id: 'aprilia', name: 'Aprilia', label: 'Aprilia', badge: 'Sport' },
    { id: 'segway-atv', name: 'Segway', label: 'Segway ATV', badge: '4x4' },
    { id: 'loncin', name: 'Loncin', label: 'Loncin', badge: 'ATV' },
    { id: 'voge', name: 'Voge', label: 'Voge', badge: 'Moto' },
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <section id="hero" className="relative min-h-[95vh] sm:min-h-screen pt-28 pb-14 flex flex-col justify-between bg-[#08080a] overflow-hidden">
      {/* Fullscreen Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          key={activeVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-[1.03] transition-opacity duration-1000"
        >
          <source
            src={activeVideo === 'car' ? '/car-hero.mp4' : '/motor-hero.mp4'}
            type="video/mp4"
          />
        </video>

        {/* Cinematic Film Overlays */}
        <div className="absolute inset-0 bg-black/45 backdrop-brightness-[0.85]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/35 to-[#08080a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(8,8,10,0.7)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Video Mode Switcher & Audio Controls */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Video Toggle Pills */}
          <div className="flex items-center p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/15">
            <button
              type="button"
              onClick={() => setActiveVideo('car')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                activeVideo === 'car'
                  ? 'bg-white text-black font-bold shadow-lg'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              01 AUTOMOBILI
            </button>
            <button
              type="button"
              onClick={() => setActiveVideo('motor')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                activeVideo === 'motor'
                  ? 'bg-white text-black font-bold shadow-lg'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              02 MOTO PROGRAM
            </button>
          </div>

          {/* Audio & Play Controls */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleToggleMute}
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-neutral-300 hover:text-white transition-colors"
              title={isMuted ? 'Uključi zvuk' : 'Isključi zvuk'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-[#c8102e]" />}
            </button>
            <button
              type="button"
              onClick={handleTogglePlay}
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-neutral-300 hover:text-white transition-colors"
              title={isPlaying ? 'Pauziraj video' : 'Pusti video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Centerpiece: Massive Editorial Typography */}
        <div className="my-auto py-8 max-w-5xl">
          <RevealText delay={0.1}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#f2f0eb] uppercase tracking-[0.25em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span>CAR BOX NIŠ · OVLAŠĆENI ZASTUPNIK</span>
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <h1 className="text-4xl sm:text-7xl lg:text-9xl font-display font-medium text-white tracking-tight leading-[0.92] uppercase">
              Centar za <br />
              <span className="editorial-italic font-normal text-white">premijum</span> pokret.
            </h1>
          </RevealText>

          <RevealParagraph delay={0.35} className="mt-5 text-sm sm:text-base text-neutral-300 max-w-lg font-light leading-relaxed">
            Ovlašćeni diler i serviser za <strong className="text-white font-medium">Honda, Peugeot, Opel, Suzuki, Jetour</strong>, vodeći moto centar <strong className="text-white font-medium">Piaggio, Vespa i Segway ATV</strong>.
          </RevealParagraph>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              href="#3d-showroom"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c8102e]" />
              <span>3D Showroom Modela</span>
            </a>

            <a
              href="#lager"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>Lager Vozila</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <button
              type="button"
              onClick={onOpenTestDrive}
              className="px-5 py-3.5 rounded-full text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Zakaži Test Vožnju
            </button>
          </div>
        </div>

        {/* Bottom Instagram Story Highlights Ribbon */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
            <span>OVLAŠĆENI PROGRAMI & INSTAGRAM PRIČE (@CARBOX_NIS):</span>
            <span className="hidden sm:inline text-neutral-400">PREVUCITE ZA SVE BRENDOVE →</span>
          </div>

          <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-none">
            {brandStories.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => {
                  onSelectBrand?.(b.id);
                  const el = document.getElementById('brendovi');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center space-y-1.5 shrink-0 group focus:outline-none"
              >
                {/* Instagram Gradient Ring */}
                <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-[#c8102e] via-amber-500 to-[#e60012] group-hover:scale-110 transition-transform shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0e0e14] flex items-center justify-center p-2 border border-black text-white font-mono text-[10px] font-bold text-center">
                    {b.name.split(' ')[0]}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors truncate max-w-[64px]">
                  {b.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
