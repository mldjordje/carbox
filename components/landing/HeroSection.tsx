'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';

interface Props {
  onOpenTestDrive?: () => void;
  onSelectBrand?: (brandId: string) => void;
}

export function HeroSection({ onOpenTestDrive, onSelectBrand }: Props) {
  const [activeVideo, setActiveVideo] = useState<'car' | 'motor'>('car');
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen pt-24 pb-12 sm:pb-16 flex flex-col justify-between bg-[#08080a] overflow-hidden">
      {/* Fullscreen Cinematic Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          key={activeVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-[1.02] transition-opacity duration-1000"
        >
          <source
            src={activeVideo === 'car' ? '/car-hero.mp4' : '/motor-hero.mp4'}
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-[#08080a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(8,8,10,0.75)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Subtle Dual Toggle Pill */}
          <div className="flex items-center p-1 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg">
            <button
              type="button"
              onClick={() => setActiveVideo('car')}
              className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all ${
                activeVideo === 'car'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              AUTOMOBILI
            </button>
            <button
              type="button"
              onClick={() => setActiveVideo('motor')}
              className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all ${
                activeVideo === 'motor'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              MOTO PROGRAM
            </button>
          </div>

          {/* Media Audio & Play Buttons */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleToggleMute}
              className="p-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title={isMuted ? 'Uključi zvuk' : 'Isključi zvuk'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c8102e]" />}
            </button>
            <button
              type="button"
              onClick={handleTogglePlay}
              className="p-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title={isPlaying ? 'Pauziraj video' : 'Pusti video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Center / Lower Editorial Presentation: Pure Cinematic Breathing Space */}
        <div className="my-auto py-12 sm:py-20 max-w-4xl">
          <RevealText delay={0.1}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300 uppercase tracking-[0.25em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span>CAR BOX NIŠ · OVLAŠĆENI ZASTUPNIK</span>
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-medium text-white tracking-tight leading-[0.96] uppercase">
              Centar za <br />
              <span className="editorial-italic font-normal text-white">premijum</span> mobilnost.
            </h1>
          </RevealText>

          <RevealParagraph delay={0.25} className="mt-4 text-xs sm:text-sm font-mono tracking-wider text-neutral-300 uppercase font-light">
            HONDA · PEUGEOT · OPEL · SUZUKI · VESPA · SEGWAY ATV
          </RevealParagraph>

          {/* Action CTAs */}
          <RevealCard delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 pt-8">
              <a
                href="#3d-showroom"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c8102e]" />
                <span>3D Digitalni Studio</span>
              </a>

              <a
                href="#lager"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors active:scale-95"
              >
                <span>Vozila Na Stanju</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </RevealCard>
        </div>

        {/* Minimalist Bottom Facility Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c8102e]" />
            <span>BULEVAR CARA KONSTANTINA 80-82, NIŠ · 4.500 m² KOMPLEKS</span>
          </div>
          <div className="hidden sm:block text-neutral-500">
            PRODAJNO-SERVISNI CENTAR SA FABRIČKOM GARANCIJOM
          </div>
        </div>
      </div>
    </section>
  );
}
