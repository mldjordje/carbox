'use client';

import Image from 'next/image';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export function ContactFooterSection() {
  return (
    <footer id="kontakt" className="relative pt-24 pb-16 bg-[#050507] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Location Box with Authentic Exterior Facility Image */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 mb-16 space-y-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Facility Real Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-xl group">
                <Image
                  src="/images/unnamed.webp"
                  alt="Car Box Niš Eksterijer Salona"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                    Bulevar cara Konstantina 80-82, Niš
                  </span>
                  <span className="text-emerald-400 font-bold">Otvoren Salon</span>
                </div>
              </div>
            </div>

            {/* Right Contact Info */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold">
                  09 · SALON & SERVISNI CENTAR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-medium text-white tracking-tight uppercase mt-1">
                  Posetite nas u Nišu.
                </h2>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mt-2">
                  Izložbeni salon novih i sertifikovanih polovnih vozila, ovlašćeno moto krilo i prijem servisa na jednom mestu sa prostranim klijentskim parkingom.
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="tel:+38118550000"
                  className="p-3.5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 text-white transition-colors block"
                >
                  <div className="text-[10px] text-neutral-400 uppercase">PRODAJA VOZILA:</div>
                  <div className="text-sm font-bold text-white mt-0.5">018 / 550 - 000</div>
                  <div className="text-[10px] text-neutral-400">prodaja@carbox.rs</div>
                </a>

                <a
                  href="tel:+38118550001"
                  className="p-3.5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 text-white transition-colors block"
                >
                  <div className="text-[10px] text-neutral-400 uppercase">PRIJEM SERVISA:</div>
                  <div className="text-sm font-bold text-white mt-0.5">018 / 550 - 001</div>
                  <div className="text-[10px] text-neutral-400">servis@carbox.rs</div>
                </a>
              </div>

              {/* Working Hours & Map CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400 border-t border-neutral-850">
                <div className="flex items-center space-x-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Pon–Pet 08–18h | Sub 08–15h</span>
                </div>

                <a
                  href="https://maps.google.com/?q=Bulevar+cara+Konstantina+80-82+Nis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-white hover:text-[#c8102e] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Google Maps Navigacija</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
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
