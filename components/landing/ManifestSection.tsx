'use client';

import Image from 'next/image';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { ShieldCheck, MapPin } from 'lucide-react';

export function ManifestSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#08080a] border-y border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Minimal Editorial Header */}
        <div className="max-w-3xl mb-12">
          <RevealText delay={0.1}>
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
              <span>CENTRALNI KOMPLEKS · NIŠ</span>
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <h2 className="text-3xl sm:text-6xl font-display font-medium text-white leading-[1.04] tracking-tight uppercase">
              Više brendova. <br />
              Jedna <span className="editorial-italic font-normal text-white">adresa</span>.
            </h2>
          </RevealText>
          <RevealParagraph delay={0.3} className="mt-3 text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
            Preko 4.500 m² namenskog prostora: ovlašćeni saloni za automobile, specijalizovano moto krilo i inženjerski servisni centar.
          </RevealParagraph>
        </div>

        {/* Dual Expansive Photo Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Main Showroom Floor Photo */}
          <div className="lg:col-span-7">
            <RevealCard delay={0.2}>
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group">
                <Image
                  src="/images/unnamed (8).webp"
                  alt="Centralni Salon Car Box Niš"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono">
                  <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                    IZLOŽBENI SALON · OPEL & SUZUKI
                  </span>
                  <span className="text-emerald-400 font-bold">4.500 m²</span>
                </div>
              </div>
            </RevealCard>
          </div>

          {/* Exterior Facade Photo */}
          <div className="lg:col-span-5">
            <RevealCard delay={0.3}>
              <div className="relative aspect-[16/10] lg:aspect-auto h-full min-h-[260px] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group">
                <Image
                  src="/images/unnamed (5).webp"
                  alt="Car Box Eksterijer i Brendovi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono">
                  <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                    BULEVAR CARA KONSTANTINA
                  </span>
                  <span className="text-white font-bold">CAR BOX</span>
                </div>
              </div>
            </RevealCard>
          </div>
        </div>

        {/* Minimalist Metrics Grid */}
        <RevealCard delay={0.35}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-7 rounded-2xl bg-neutral-950 border border-white/5">
            <div>
              <OdometerNumber value={4500} suffix=" m²" className="text-2xl sm:text-3xl font-light text-white" />
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                Kompleks Salona
              </div>
            </div>

            <div>
              <OdometerNumber value={8} className="text-2xl sm:text-3xl font-light text-[#c8102e]" />
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                Svetskih Brendova
              </div>
            </div>

            <div>
              <OdometerNumber value={110} className="text-2xl sm:text-3xl font-light text-white" />
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                Tačaka Provere
              </div>
            </div>

            <div>
              <OdometerNumber value={100} suffix="%" className="text-2xl sm:text-3xl font-light text-[#c8102e]" />
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                Originalni Delovi
              </div>
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}
