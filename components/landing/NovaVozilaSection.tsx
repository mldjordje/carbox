'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { INVENTORY_VEHICLES, type Vehicle } from '@/lib/content/cars';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  Award, 
  Car
} from 'lucide-react';

interface Props {
  onOpenTestDrive?: (vehicle?: Vehicle) => void;
}

export function NovaVozilaSection({ onOpenTestDrive }: Props) {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // Filter only new vehicles (category === 'novo')
  const newVehicles = useMemo(() => {
    return INVENTORY_VEHICLES.filter((v) => v.category === 'novo');
  }, []);

  const filteredVehicles = useMemo(() => {
    if (selectedBrand === 'all') return newVehicles;
    if (selectedBrand === 'hybrid') {
      return newVehicles.filter(
        (v) => v.fuel.includes('Hibrid') || v.fuel.includes('Plug-in')
      );
    }
    if (selectedBrand === 'suv') {
      return newVehicles.filter((v) => v.bodyType === 'SUV' || v.bodyType === 'Krosover');
    }
    return newVehicles.filter((v) => v.brand.toLowerCase() === selectedBrand.toLowerCase());
  }, [newVehicles, selectedBrand]);

  // Featured flagship car
  const flagship = newVehicles[0];

  return (
    <section id="nova-vozila" className="relative py-28 bg-[#060608] border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c8102e]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText delay={0.1}>
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#e60012] uppercase font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-[#e60012] animate-pulse" />
                <span>03 · FLOTA NOVIH VOZILA (0 KM)</span>
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Nova vozila sa <span className="editorial-italic font-normal text-white">garancijom</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-2xl font-light leading-relaxed">
              Ovlašćeni diler brendova Honda, Peugeot, Opel i Suzuki u Nišu. Sva nova vozila su sa 0 km, dostupna sa lagera uz mogućnost isporuke za 48h i fabričku garanciju do 8 godina.
            </RevealParagraph>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-neutral-950 border border-white/10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dostupno odmah: <strong className="text-white">{filteredVehicles.length}</strong> nova modela</span>
            </div>
          </div>
        </div>

        {/* Brand & Category Filter Tabs */}
        <RevealCard delay={0.2}>
          <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-mono">
            {[
              { id: 'all', label: 'SVI NOVI MODELI' },
              { id: 'Honda', label: 'HONDA' },
              { id: 'Peugeot', label: 'PEUGEOT' },
              { id: 'Opel', label: 'OPEL' },
              { id: 'Suzuki', label: 'SUZUKI' },
              { id: 'hybrid', label: '⚡ HIBRIDI & PHEV' },
              { id: 'suv', label: 'SUV & KROSOVER' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedBrand(tab.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedBrand === tab.id
                    ? 'bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white font-bold shadow-[0_0_20px_rgba(230,0,18,0.4)] scale-105'
                    : 'bg-neutral-950 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </RevealCard>

        {/* Flagship Spotlight Hero Card (Civic RS or CR-V) */}
        {selectedBrand === 'all' && flagship && (
          <RevealCard delay={0.25}>
            <div className="luxury-card rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 border border-white/10 relative overflow-hidden group hover:border-[#e60012]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual side */}
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-700">
                    <Image
                      src={flagship.image}
                      alt={flagship.model}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#e60012] text-white shadow-lg shadow-red-900/50">
                        IZDVAJAMO IZ SALONA · 0 KM
                      </span>
                      {flagship.has3D && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 text-white border border-white/20 backdrop-blur-md flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-[#e60012]" />
                          <span>3D STUDIO DOSTUPNO</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                      <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                        {flagship.brand} · Niš Showroom
                      </span>
                      <span className="text-emerald-400 font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Isporuka za 48h</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info side */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#e60012] font-semibold">
                      {flagship.brand} · NOVO VOZILO 2026
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1">
                      {flagship.model}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                      {flagship.highlight}
                    </p>
                  </div>

                  {/* 4 Pillars Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono border-y border-neutral-850 py-3.5">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5">
                      <div className="text-neutral-400 text-[10px] uppercase">Snaga</div>
                      <div className="text-white font-bold mt-0.5">{flagship.powerHp} KS</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5">
                      <div className="text-neutral-400 text-[10px] uppercase">Pogon</div>
                      <div className="text-white font-bold mt-0.5 truncate">{flagship.fuel.split(' ')[0]}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5">
                      <div className="text-neutral-400 text-[10px] uppercase">Ubrzanje</div>
                      <div className="text-white font-bold mt-0.5">{flagship.specs.acceleration.split(' ')[0]}s</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5">
                      <div className="text-neutral-400 text-[10px] uppercase">Garancija</div>
                      <div className="text-[#ff4d5a] font-bold mt-0.5 text-[11px]">5 Godina</div>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">Zvanična cena salona:</div>
                      <div className="flex items-baseline space-x-2">
                        <OdometerNumber
                          value={flagship.priceEur}
                          suffix=" €"
                          className="text-2xl sm:text-3xl font-mono font-bold text-white"
                        />
                        <span className="text-xs font-mono text-neutral-400">
                          od {flagship.monthlyEstimateEur} € / mes.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/vozila/${flagship.id}`}
                        className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow-lg active:scale-95 cursor-pointer"
                      >
                        <span>Detaljna Stranica</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => onOpenTestDrive?.(flagship)}
                        className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-mono font-medium transition-colors cursor-pointer"
                        title="Zakaži test vožnju"
                      >
                        <Calendar className="w-4 h-4 text-[#ff4d5a]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealCard>
        )}

        {/* New Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredVehicles.map((car, idx) => (
            <RevealCard key={car.id} delay={0.08 + (idx % 3) * 0.08}>
              <div className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group h-full border border-white/10 hover:border-[#e60012]/40 transition-all">
                <div>
                  {/* Vehicle Image Container */}
                  <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden border-b border-white/5">
                    <Image
                      src={car.image}
                      alt={car.model}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#e60012] text-white font-bold shadow-md">
                        0 KM · NOVO
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/80 text-neutral-200 border border-white/10 font-semibold">
                        {car.brand}
                      </span>
                      {car.has3D && (
                        <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-neutral-900/90 text-white border border-white/20 flex items-center space-x-1">
                          <Sparkles className="w-2.5 h-2.5 text-[#ff4d5a]" />
                          <span>3D</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        {car.specs.warranty}
                      </span>
                      <span className="text-emerald-400 font-bold">Isporuka 48h</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3.5">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#e60012] font-semibold">
                        {car.badge || car.bodyType}
                      </div>
                      <h3 className="text-lg font-display font-medium text-white tracking-tight mt-0.5 group-hover:text-[#ff4d5a] transition-colors">
                        {car.model}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-2 mt-1 font-light leading-relaxed">
                        {car.highlight}
                      </p>
                    </div>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-neutral-400 border-y border-neutral-850 py-2.5 bg-neutral-950/40 rounded-xl px-2">
                      <div>
                        <div className="text-white font-bold">{car.powerHp} KS</div>
                        <div className="text-neutral-500">Snaga</div>
                      </div>
                      <div>
                        <div className="text-white font-bold truncate">{car.fuel.split(' ')[0]}</div>
                        <div className="text-neutral-500">Pogon</div>
                      </div>
                      <div>
                        <div className="text-white font-bold truncate">{car.transmission.split(' ')[0]}</div>
                        <div className="text-neutral-500">Menjač</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="p-5 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">Cena sa PDV-om:</div>
                      <OdometerNumber
                        value={car.priceEur}
                        suffix=" €"
                        className="text-xl font-bold text-white font-mono"
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">Rata od:</div>
                      <div className="text-xs font-mono font-bold text-[#ff4d5a]">
                        {car.monthlyEstimateEur} € / mes.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 pt-1">
                    <Link
                      href={`/vozila/${car.id}`}
                      className="col-span-8 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors active:scale-95 shadow-md cursor-pointer"
                    >
                      <span>Detaljna Stranica</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenTestDrive?.(car)}
                      className="col-span-4 flex items-center justify-center space-x-1 py-2.5 px-2 rounded-xl bg-neutral-900 hover:bg-[#e60012]/20 hover:border-[#e60012]/40 border border-white/10 text-white text-xs font-mono transition-colors active:scale-95 cursor-pointer"
                      title="Zakaži 30-minutnu test vožnju"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#ff4d5a]" />
                      <span className="text-[10px]">Test</span>
                    </button>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Dealership Trust & Advantages Footer Bar */}
        <RevealCard delay={0.3}>
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10">
            <div className="text-center mb-6">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#e60012] uppercase font-semibold">
                CAR BOX NIŠ · OVLAŠĆENE PREDNOSTI ZA NOVA VOZILA
              </div>
              <h4 className="text-xl font-display font-medium text-white tracking-tight mt-1">
                Zašto kupiti novo vozilo u Car Box salonu?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#e60012]/20 text-[#ff4d5a] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-bold text-white uppercase text-[11px]">Fabrička Garancija</div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Ovlašćena garancija do 8 godina sa 24/7 mobilnom asistencijom na teritoriji cele Evrope.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="font-bold text-white uppercase text-[11px]">Isporuka u 48h</div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Vozila sa lagera u Nišu spremna su za tehnički pregled, registraciju i ključeve u ruci.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-bold text-white uppercase text-[11px]">0% Učešća & Fiksna Kamata</div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Bankarsko i lizing odobrenje na licu mesta u salonu uz fleksibilan period otplate do 84 meseca.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
                  <Car className="w-4 h-4" />
                </div>
                <div className="font-bold text-white uppercase text-[11px]">Staro Za Novo Otkup</div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Besplatna i transparentna procena vašeg polovnog automobila kao učešće za novi model.
                </p>
              </div>
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}