'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TradeInSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    carBrand: '',
    carModel: '',
    carYear: '2019',
    carMileage: '95000',
    carCondition: 'odlicno',
    desiredVehicle: 'Honda Civic 2.0 e:HEV RS',
    fullName: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const estimatedValue = (() => {
    const year = parseInt(formData.carYear) || 2018;
    const mileage = parseInt(formData.carMileage) || 100000;
    const base = 18000;
    const yearFactor = Math.max(0.3, 1 - (2026 - year) * 0.08);
    const mileageFactor = Math.max(0.4, 1 - (mileage / 300000) * 0.4);
    const conditionFactor = formData.carCondition === 'odlicno' ? 1.1 : 0.9;
    const raw = Math.round(base * yearFactor * mileageFactor * conditionFactor);
    return Math.max(3000, raw);
  })();

  return (
    <section id="staro-za-novo" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Authentic Showroom Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <RevealText delay={0.1}>
                <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                  05 · PROGRAM ZAMENE VOZILA
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase leading-[1.05]">
                  Staro <br />
                  <span className="editorial-italic font-normal text-white">za novo</span>.
                </h2>
              </RevealText>
              <RevealParagraph delay={0.3} className="mt-2 text-xs sm:text-sm text-neutral-400 font-light">
                Transparentna procena i pisana garancija na kilometražu.
              </RevealParagraph>
            </div>

            {/* Authentic Showroom Photo */}
            <RevealCard delay={0.25}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-xl group">
                <Image
                  src="/images/unnamed (9).webp"
                  alt="Car Box Prijem Vozila i Savetovanje Niš"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#c8102e]" />
                    <span>110 TAČAKA PROVERE U SALONU</span>
                  </span>
                  <span className="text-neutral-300">CAR BOX NIŠ</span>
                </div>
              </div>
            </RevealCard>
          </div>

          {/* Right Appraisal Form */}
          <div className="lg:col-span-7">
            <RevealCard delay={0.2}>
              <div className="luxury-card rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
                  <div className="text-xs font-mono text-neutral-400">
                    KORAK <strong className="text-white">0{step}</strong> / 02
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-mono text-neutral-400 uppercase">OKVIRNA VREDNOST:</div>
                  <OdometerNumber value={estimatedValue} prefix="~ " suffix=" €" className="text-base font-bold text-white" />
                </div>
              </div>

              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 1) setStep(2);
                    else setIsSubmitted(true);
                  }}
                  className="space-y-4 text-xs font-mono"
                >
                  {step === 1 ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Marka i Model</label>
                          <input
                            type="text"
                            required
                            placeholder="npr. Peugeot 308 1.6 HDi"
                            value={formData.carModel}
                            onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Godište</label>
                          <select
                            value={formData.carYear}
                            onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          >
                            {Array.from({ length: 14 }, (_, i) => 2025 - i).map((y) => (
                              <option key={y} value={y}>{y}. godina</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Kilometraža (km)</label>
                          <input
                            type="number"
                            value={formData.carMileage}
                            onChange={(e) => setFormData({ ...formData, carMileage: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Željeni Car Box Model</label>
                          <select
                            value={formData.desiredVehicle}
                            onChange={(e) => setFormData({ ...formData, desiredVehicle: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          >
                            <option value="Honda Civic 2.0 e:HEV RS">Honda Civic RS</option>
                            <option value="Honda CR-V 2.0 e:PHEV Advance">Honda CR-V 2026</option>
                            <option value="Peugeot 3008 GT Hybrid">Peugeot 3008 GT</option>
                            <option value="Opel Astra GS Line">Opel Astra GS</option>
                            <option value="Suzuki Vitara 1.4 Hybrid">Suzuki Vitara Hybrid</option>
                            <option value="Vespa GTS 300">Vespa GTS 300 Super</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                      >
                        Nastavi Na Podatke Za Kontakt
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Ime i Prezime</label>
                          <input
                            type="text"
                            required
                            placeholder="Vaše ime"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1 uppercase">Broj Telefona</label>
                          <input
                            type="tel"
                            required
                            placeholder="06x / xxx - xxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-3.5 rounded-xl border border-white/10 text-neutral-400 hover:text-white"
                        >
                          Nazad
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3.5 rounded-xl bg-[#c8102e] hover:bg-[#e60012] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-lg"
                        >
                          Pošalji Zahtev Za Procenu
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <div className="py-8 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Zahtev je uspešno zabeležen</h4>
                  <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto">
                    Naš tim će pregledati podatke za <strong>{formData.carModel}</strong> i javiti se na <strong>{formData.phone}</strong>.
                  </p>
                </div>
              )}
            </div>
            </RevealCard>
          </div>
        </div>
      </div>
    </section>
  );
}
