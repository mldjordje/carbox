'use client';

import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';

export function ContactFooterSection() {
  return (
    <footer id="kontakt" className="relative pt-24 pb-16 bg-[#050507] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Location Box */}
        <div className="luxury-card rounded-3xl p-6 sm:p-12 mb-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold">
                09 · SALON & SERVIS
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight uppercase">
                Bulevar cara Konstantina <br className="hidden sm:block" />
                <span className="editorial-italic font-normal text-white">80-82</span>, Niš
              </h2>
              <p className="text-sm text-neutral-400 font-light max-w-lg leading-relaxed">
                Nalazimo se na glavnoj saobraćajnici sa namenskim parkingom za klijente, izložbenim salonom i prijemnim odeljenjem servisa.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                <div className="flex items-center space-x-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Salon: Pon–Pet 08–18h | Sub 08–15h</span>
                </div>
                <span>·</span>
                <span>Servis: Pon–Pet 08–16:30h</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3 font-mono text-xs">
              <a
                href="https://maps.google.com/?q=Bulevar+cara+Konstantina+80-82+Nis"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#c8102e]" />
                  <span>Otvori Google Maps Navigaciju</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href="tel:+38118550000"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#c8102e]" />
                  <span>Prodaja: 018 / 550 - 000</span>
                </div>
                <span className="text-[10px] text-neutral-400">POZOVI</span>
              </a>

              <a
                href="https://www.polovniautomobili.com/car-box"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 text-white transition-colors"
              >
                <span>Profil na Polovnim Automobilima</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-8">
          <div>
            CAR BOX NIŠ · OVLAŠĆENI ZASTUPNIK ZA JUGOISTOČNU SRBIJU
          </div>
          <div>
            Sva prava zadržana © {new Date().getFullYear()} Car Box d.o.o.
          </div>
        </div>
      </div>
    </footer>
  );
}
