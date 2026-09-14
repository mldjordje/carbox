'use client';

import Image from 'next/image';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { ShieldCheck, MapPin } from 'lucide-react';

export function ManifestSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#08080a] border-y border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Overhead Photo of Car Box Facility */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group">
              <Image
                src="/images/unnamed (8).webp"
                alt="Car Box Showroom Floor Niš"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    CENTRALNI SALON CAR BOX
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">Bulevar cara Konstantina 80-82, Niš</div>
                </div>
                <div className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>4.500 m²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Numbers */}
          <div className="lg:col-span-6 space-y-8">
            <RevealText delay={0.1}>
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span>STANDARDI & INFRASTRUKTURA</span>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white leading-[1.08] tracking-tight uppercase">
                Više brendova. <br />
                Jedna <span className="editorial-italic font-normal text-white">adresa</span> u Nišu.
              </h2>
            </RevealText>

            <RevealParagraph delay={0.3} className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Kompleks Car Box prostire se na preko 4.500 m² namenskog prostora. Pod jednim krovom objedinjuje ovlašćene salone za putnička vozila, specijalizovano krilo za motocikle i kvadove, kao i visokotehnološki servis sa limarsko-farbarskom komorom.
            </RevealParagraph>

            {/* Minimalist Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-850">
              <div>
                <OdometerNumber value={4500} suffix=" m²" className="text-2xl sm:text-3xl font-light text-white" />
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                  Kompleksa
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
          </div>
        </div>
      </div>
    </section>
  );
}
