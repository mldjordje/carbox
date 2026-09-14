'use client';

import { useState } from 'react';
import { CARBOX_SERVICES } from '@/lib/content/services';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { Wrench, CheckCircle2, PhoneCall, Calendar } from 'lucide-react';

export function ServiceSection() {
  const [formData, setFormData] = useState({
    vehicleBrand: 'Honda',
    vehicleModel: '',
    date: '2026-09-22',
    time: '09:30',
    name: '',
    phone: '',
  });
  const [isBooked, setIsBooked] = useState(false);

  return (
    <section id="servis" className="relative py-28 bg-[#08080a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                08 · OVLAŠĆENI SERVISNI CENTAR
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Inženjerski <span className="editorial-italic font-normal text-white">standardi</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-xl font-light">
              Visokotehnološki opremljen servis za automehaniku, dijagnostiku, limarijsko-farbarske usluge, vulkanizerske radove i originalne rezervne delove.
            </RevealParagraph>
          </div>

          <a
            href="tel:+38118550001"
            className="flex items-center space-x-2 text-xs font-mono text-neutral-300 hover:text-white px-4 py-2.5 rounded-xl border border-white/10"
          >
            <PhoneCall className="w-4 h-4 text-[#c8102e]" />
            <span>Prijem servisa: 018 / 550-001</span>
          </a>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CARBOX_SERVICES.map((s) => (
            <div key={s.id} className="luxury-card p-6 rounded-3xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#c8102e] uppercase tracking-widest">
                  {s.duration}
                </div>
                <h3 className="text-base font-display font-bold text-white mt-1">{s.title}</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mt-2">{s.shortDesc}</p>
              </div>

              <div className="pt-3 border-t border-neutral-850">
                <div className="text-[9px] font-mono text-neutral-400 uppercase">CENA OD:</div>
                <div className="text-sm font-mono font-bold text-white">{s.priceFromRsd.toLocaleString('sr-RS')} RSD</div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Appointment Form */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] font-mono text-[#c8102e] uppercase tracking-widest font-semibold">
                ONLINE ZAKAZIVANJE
              </span>
              <h3 className="text-2xl font-display font-medium text-white">
                Rezervišite termin bez čekanja u redu
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Prijemno odeljenje Car Box servisa u Nišu priprema neophodne delove pre vašeg dolaska.
              </p>
            </div>

            <div className="lg:col-span-7">
              {!isBooked ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsBooked(true);
                  }}
                  className="space-y-4 text-xs font-mono"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 mb-1 uppercase">Marka i Model</label>
                      <input
                        type="text"
                        required
                        placeholder="npr. Honda Civic, Peugeot 308..."
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 mb-1 uppercase">Željeni Datum</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 mb-1 uppercase">Ime i Prezime</label>
                      <input
                        type="text"
                        required
                        placeholder="Vaše ime"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                  >
                    Potvrdi Servisni Termin
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-2 font-mono">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Termin je zabeležen</h4>
                  <p className="text-xs text-neutral-400 font-light">Prijemni savetnik će vas pozvati na <strong>{formData.phone}</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
