'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { INVENTORY_VEHICLES, type Vehicle } from '@/lib/content/cars';
import { pretraziVozila } from '@/lib/pretraga';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { Search, Fuel, Gauge, Zap, ArrowUpRight, Calculator, Sparkles } from 'lucide-react';

interface Props {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenFinanceModal?: (vehicle: Vehicle) => void;
}

export function InventorySection({ onSelectVehicle, onOpenFinanceModal }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const searchResult = useMemo(() => {
    return pretraziVozila(searchQuery);
  }, [searchQuery]);

  const displayedVehicles = useMemo(() => {
    return searchResult.vozila.filter((v) => {
      if (selectedCategory !== 'all' && v.category !== selectedCategory) return false;
      return true;
    });
  }, [searchResult, selectedCategory]);

  return (
    <section id="lager" className="relative py-28 bg-[#08080a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                04 · DIGITALNI LAGER
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Aktuelna <span className="editorial-italic font-normal text-white">ponuda</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-xl font-light">
              Pregledajte nova i sertifikovana polovna vozila sa poznatom servisnom istorijom i garancijom na kilometražu.
            </RevealParagraph>
          </div>

          <div className="text-xs font-mono text-neutral-400 p-3 rounded-xl bg-neutral-950 border border-white/5 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Prikazano: <strong className="text-white">{displayedVehicles.length}</strong> vozila</span>
          </div>
        </div>

        {/* Minimalist Search Bar */}
        <div className="luxury-card rounded-2xl p-4 sm:p-5 mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pretraga lagera (npr: 'hibrid do 40k', 'suv', 'skuter', 'polovno')..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-[#c8102e]"
            />
          </div>

          {/* NLP Explanation */}
          {searchQuery && searchResult.objasnjenje.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-850 text-xs font-mono">
              <span className="text-neutral-400">Prepoznato:</span>
              {searchResult.objasnjenje.map((e, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-white text-[11px]">
                  {e}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
          {[
            { id: 'all', label: 'SVA VOZILA' },
            { id: 'novo', label: 'NOVA (0 KM)' },
            { id: 'polovno', label: 'STARO ZA NOVO (POLOVNA)' },
            { id: 'moto', label: 'MOTO & SKUTERI' },
            { id: 'atv', label: 'ATV / KVADOVI' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-neutral-950 border border-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedVehicles.map((car) => (
            <div
              key={car.id}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden border-b border-white/5">
                  <Image
                    src={car.image}
                    alt={car.model}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-neutral-950/90 text-white border border-white/10">
                      {car.badge || car.brand}
                    </span>
                    {car.has3D && (
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#c8102e] text-white flex items-center space-x-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>3D</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[11px] font-mono text-[#c8102e]">{car.brand}</div>
                    <h3 className="text-lg font-display font-medium text-white tracking-tight">
                      {car.model}
                    </h3>
                  </div>
                </div>

                {/* Specs */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                    {car.highlight}
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-neutral-400 border-y border-neutral-850 py-3">
                    <div>
                      <div className="text-white font-bold">{car.powerHp} KS</div>
                      <div className="text-neutral-400">Snaga</div>
                    </div>
                    <div>
                      <div className="text-white font-bold truncate">{car.fuel.split(' ')[0]}</div>
                      <div className="text-neutral-400">Gorivo</div>
                    </div>
                    <div>
                      <div className="text-white font-bold truncate">{car.transmission.split(' ')[0]}</div>
                      <div className="text-neutral-400">Menjač</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <div>
                  <OdometerNumber value={car.priceEur} suffix=" €" className="text-xl font-bold text-white font-mono" />
                  <div className="text-[10px] font-mono text-neutral-400">od {car.monthlyEstimateEur} € / mes.</div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectVehicle?.(car)}
                  className="flex items-center space-x-1 px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Detalji</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
