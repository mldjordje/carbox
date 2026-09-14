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
              className="luxury-card rounded-3xl p-6 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {b.origin} · {b.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-[#c8102e] uppercase font-semibold">
                    {b.badge}
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 mb-5 border border-white/5">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-2xl font-display font-medium text-white tracking-tight">
                      {b.name}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-400 mb-2">
                  {b.tagline}
                </div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">MODELI:</div>
                  <div className="text-xs font-mono font-bold text-white truncate max-w-[200px]">
                    {b.modelsCount}
                  </div>
                </div>

                <a
                  href="#lager"
                  onClick={() => onSelectBrand?.(b.id)}
                  className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 text-white transition-colors"
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
