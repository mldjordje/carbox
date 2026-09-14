'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CARBOX_BRANDS } from '@/lib/content/brands';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onSelectBrand?: (brandId: string) => void;
}

export function BrandsSection({ onSelectBrand }: Props) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'auto' | 'moto' | 'atv'>('all');

  const filtered = CARBOX_BRANDS.filter((b) => {
    if (activeFilter === 'all') return true;
    return b.category === activeFilter;
  });

  return (
    <section id="brendovi" className="relative py-28 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                03 · ZASTUPNIŠTVA & PARTNERSTVA
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Ekosistem <span className="editorial-italic font-normal text-white">brendova</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-xl font-light">
              Zvanični diler i serviser za vodeće svetske proizvođače sa kompletnom fabričkom garancijom i originalnim delovima.
            </RevealParagraph>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/80 border border-white/10 text-xs font-mono">
            {[
              { id: 'all', label: 'SVI' },
              { id: 'auto', label: 'AUTOMOBILI' },
              { id: 'moto', label: 'MOTO & SKUTERI' },
              { id: 'atv', label: 'ATV & KVADOVI' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Monolithic Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <div
              key={b.id}
              className="luxury-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                  <span className="uppercase tracking-widest text-neutral-400">
                    {b.origin} · {b.category.toUpperCase()}
                  </span>
                  <span className="text-[#c8102e] uppercase font-bold">
                    {b.badge}
                  </span>
                </div>

                {/* Large Showroom Brand Photo */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 mb-4 border border-white/10">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <h3 className="text-2xl font-display font-medium text-white tracking-tight">
                      {b.name}
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-300 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                      SALON NIŠ
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-300 font-medium">
                  {b.tagline}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono text-neutral-400 uppercase">MODELI U SALONU:</div>
                  <div className="text-xs font-mono font-bold text-white truncate max-w-[210px]">
                    {b.modelsCount}
                  </div>
                </div>

                <a
                  href="#lager"
                  onClick={() => onSelectBrand?.(b.id)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white transition-all active:scale-95"
                  title="Pogledaj modele"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
