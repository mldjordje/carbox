'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Calendar, Sparkles, MapPin } from 'lucide-react';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';

interface Props {
  onOpenTestDrive?: () => void;
}

export function HeroSection({ onOpenTestDrive }: Props) {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  const heroShowcases = [
    {
      id: 'honda',
      brand: 'HONDA',
      model: 'Civic & CR-V 2026',
      tagline: 'Japansko Inženjersko Savršenstvo',
      type: 'e:HEV & e:PHEV Hibridi',
      image: '/images/unnamed (1).webp',
      badge: 'Ovlašćeni Diler & Servis',
    },
    {
      id: 'peugeot',
      brand: 'PEUGEOT',
      model: '3008 & 2008 GT',
      tagline: 'Avangardni Dizajn & i-Cockpit',
      type: 'Hibridna & Električna Tehnologija',
      image: '/images/unnamed (7).webp',
      badge: 'Ovlašćeni Diler & Servis',
    },
    {
      id: 'opel',
      brand: 'OPEL',
      model: 'Astra & Mokka GS',
      tagline: 'Nemačka Inženjerska Preciznost',
      type: 'Intelli-Lux LED & AGR Komfor',
      image: '/images/unnamed (9).webp',
      badge: 'Ovlašćeni Diler & Servis',
    },
    {
      id: 'suzuki',
      brand: 'SUZUKI',
      model: 'Vitara & S-Cross',
      tagline: 'AllGrip 4x4 Pogon i Pouzdanost',
      type: 'U partnerstvu sa Euro Sumar',
      image: '/images/unnamed (2).webp',
      badge: 'Partnerska Prodaja',
    },
    {
      id: 'moto',
      brand: 'MOTO DIVIZIJA',
      model: 'Vespa, Honda Moto & Segway ATV',
      tagline: 'Najveća Moto Ponuda na Jugu Srbije',
      type: 'Piaggio Group · Aprilia · ATV 4x4',
      image: '/images/unnamed (5).webp',
      badge: 'Ovlašćeni Moto Centar',
    },
  ];

  const current = heroShowcases[activeBrandIndex];

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 flex flex-col justify-between bg-[#08080a] overflow-hidden">
      {/* Background Subdued Luxury Photo */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/unnamed (4).webp"
          alt="Car Box Showroom"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-[#08080a]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Mini Meta Bar */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span>CAR BOX NIŠ · OVLAŠĆENI ZASTUPNIK</span>
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono text-neutral-400">
            <MapPin className="w-3 h-3 text-[#c8102e]" />
            <span>Bulevar cara Konstantina 80-82</span>
          </div>
        </div>

        {/* Center Editorial Title & Statement */}
        <div className="my-auto py-10 max-w-5xl">
          <RevealText delay={0.1}>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#c8102e] font-semibold mb-3">
              PUTNIČKA · MOTO · TERENSKA VOZILA
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-medium text-white tracking-tight leading-[0.95] uppercase">
              Centar za <br />
              <span className="editorial-italic font-normal text-white">premijum</span> mobilnost.
            </h1>
          </RevealText>

          <RevealParagraph delay={0.35} className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-xl leading-relaxed font-light">
            Zvanični diler i serviser za <strong className="text-white font-medium">Honda</strong>,{' '}
            <strong className="text-white font-medium">Peugeot</strong> i{' '}
            <strong className="text-white font-medium">Opel</strong>, ponuda{' '}
            <strong className="text-white font-medium">Suzuki</strong> vozila, ovlašćeni moto centar{' '}
            <strong className="text-white font-medium">Piaggio & Vespa</strong>, i provereni program zamene staro za novo.
          </RevealParagraph>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-8">
            <a
              href="#3d-showroom"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono uppercase tracking-wider font-semibold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c8102e]" />
              <span>3D Showroom Modela</span>
            </a>

            <a
              href="#lager"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/40 bg-neutral-900/50 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>Pregled Lagera</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <button
              type="button"
              onClick={onOpenTestDrive}
              className="px-5 py-3.5 rounded-xl text-neutral-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Zakaži Test Vožnju
            </button>
          </div>
        </div>

        {/* Bottom Minimalist Brand Selector Ribbon */}
        <div className="border-t border-neutral-850/80 pt-6">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
            OVLAŠĆENI PROGRAMI & ZASTUPNIŠTVA:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {heroShowcases.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveBrandIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeBrandIndex === idx
                    ? 'bg-neutral-900/90 border-[#c8102e] text-white shadow-lg'
                    : 'bg-neutral-950/40 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                }`}
              >
                <div className="text-xs font-mono font-bold">{s.brand}</div>
                <div className="text-[10px] text-neutral-400 truncate mt-0.5">{s.model}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
