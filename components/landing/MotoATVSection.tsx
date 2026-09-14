'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { ArrowRight, Bike } from 'lucide-react';

interface Props {
  onOpenTestRide?: () => void;
}

export function MotoATVSection({ onOpenTestRide }: Props) {
  const [activeTab, setActiveTab] = useState<'vespa' | 'moto' | 'chinese' | 'atv'>('vespa');

  const tabs = [
    {
      id: 'vespa' as const,
      title: 'Piaggio & Vespa Group',
      badge: 'Italijanski Stil',
      desc: 'Zvanični diler i serviser za Piaggio, Vespa, Aprilia i Moto Guzzi dvotočkaše. Bešumni HPE motori, ikoničan dizajn i maksimalna praktičnost.',
      models: 'Vespa Primavera · GTS 300 Super · Aprilia SR GT · Piaggio Medley',
      image: '/images/unnamed (5).webp',
    },
    {
      id: 'moto' as const,
      title: 'Honda Motocikli',
      badge: 'Japanska Pouzdanost',
      desc: 'Ovlašćeni diler za Honda motocikle: od gradskih skutera (PCX 125, ADV 350) do touring i adventure šampiona (Africa Twin, Transalp).',
      models: 'Honda CB650R · Forza 350 · Africa Twin · PCX 125',
      image: '/images/unnamed (3).webp',
    },
    {
      id: 'chinese' as const,
      title: 'Zontes, QJMotors & Voge',
      badge: 'Kineski Tehnološki Lideri',
      desc: 'Nova generacija motocikala sa TFT ekranima, Bosch ubrizgavanjem, Keyless sistemom i konkurentnim cenama.',
      models: 'Zontes 350E · QJMotor SRT 700 · Voge 525DSX',
      image: '/images/unnamed (7).webp',
    },
    {
      id: 'atv' as const,
      title: 'Segway & Loncin ATV / UTV',
      badge: 'Terenska Dominacija',
      desc: 'Snažni kvadovi i radna terenska vozila sa 4x4 pogonom, EPS servo sistemom i aplikacijom za mobilnu telemetriju.',
      models: 'Segway Snarler AT6 · Fugleman UT10 · Loncin XWolf 700',
      image: '/images/unnamed (6).webp',
    },
  ];

  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="moto-atv" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                07 · MOTO & POWERSPORTS DIVIZIJA
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Svet <span className="editorial-italic font-normal text-white">dvotočkaša</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-xl font-light">
              Ovlašćeni prodajno-servisni centar za Honda motocikle, Piaggio, Vespa, Aprilia i Segway ATV.
            </RevealParagraph>
          </div>

          <button
            type="button"
            onClick={onOpenTestRide}
            className="flex items-center space-x-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/40 text-white text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
          >
            <Bike className="w-4 h-4 text-[#c8102e]" />
            <span>Zakaži Test Motora</span>
          </button>
        </div>

        {/* Tab Selector */}
        <RevealCard delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8 text-xs font-mono">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === t.id
                    ? 'bg-neutral-900 border-white text-white'
                    : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest">{t.badge}</div>
                <div className="text-sm font-bold mt-1 text-white">{t.title}</div>
              </button>
            ))}
          </div>
        </RevealCard>

        {/* Display Stage */}
        <RevealCard delay={0.25}>
          <div className="luxury-card rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-xl">
                <Image src={current.image} alt={current.title} fill className="object-cover" />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-mono text-[#c8102e] uppercase tracking-widest font-bold">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {current.desc}
                </p>

                <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">MODELI U PONUDI:</div>
                  <div className="text-xs font-mono font-bold text-white">{current.models}</div>
                </div>

                <div className="pt-2">
                  <a
                    href="#lager"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Pogledaj Moto Ponudu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}
