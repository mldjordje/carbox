'use client';

import Image from 'next/image';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { Play, ExternalLink, Heart, MessageCircle } from 'lucide-react';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export function ReelsSection() {
  const reels = [
    {
      id: 'reel-1',
      title: 'Isporuka novog modela u Car Box salonu',
      views: '14.2K',
      likes: '840',
      tag: '#Peugeot3008',
      image: '/images/unnamed (7).webp',
    },
    {
      id: 'reel-2',
      title: 'Honda Civic RS e:HEV · Prvi utisci',
      views: '22.8K',
      likes: '1.2K',
      tag: '#HondaCivic',
      image: '/images/unnamed (1).webp',
    },
    {
      id: 'reel-3',
      title: 'Vespa GTS 300 Super Sport u Nišu',
      views: '9.4K',
      likes: '620',
      tag: '#VespaLife',
      image: '/images/unnamed (5).webp',
    },
    {
      id: 'reel-4',
      title: 'Segway Snarler 600 ATV · Off-road test',
      views: '18.1K',
      likes: '950',
      tag: '#SegwayPowersports',
      image: '/images/unnamed (6).webp',
    },
  ];

  return (
    <section className="relative py-24 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText delay={0.1}>
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                <InstagramIcon className="w-3.5 h-3.5 text-[#c8102e]" />
                <span>@CARBOX_NIS · ZVANIČNI INSTAGRAM REELS</span>
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Atmosfera <span className="editorial-italic font-normal text-white">uživo</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-lg font-light">
              Isporuke novih automobila, zvuk motora i najnovije vesti direktno iz našeg salona na Bulevaru cara Konstantina u Nišu.
            </RevealParagraph>
          </div>

          <a
            href="https://www.instagram.com/carbox_nis/reels/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/40 bg-neutral-900 text-white text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-[#c8102e]" />
            <span>Zaprati @carbox_nis</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Instagram Stories Highlights Bar */}
        <RevealCard delay={0.2}>
          <div className="mb-10 p-4 rounded-2xl bg-neutral-950/80 border border-white/5">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
              <span>PRIČE SA SALONA (@CARBOX_NIS):</span>
              <span className="hidden sm:inline">PREVUCI ZA SVE BRENDOVE →</span>
            </div>

            <div className="flex items-center space-x-4 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'honda', name: 'Honda', badge: 'e:HEV' },
                { id: 'peugeot', name: 'Peugeot', badge: 'GT' },
                { id: 'opel', name: 'Opel', badge: 'GS' },
                { id: 'suzuki', name: 'Suzuki', badge: '4x4' },
                { id: 'jetour', name: 'JETOUR', badge: 'SUV' },
                { id: 'honda-moto', name: 'Honda Moto', badge: 'Moto' },
                { id: 'piaggio-vespa', name: 'Vespa', badge: 'Skuter' },
                { id: 'aprilia', name: 'Aprilia', badge: 'Sport' },
                { id: 'segway-atv', name: 'Segway', badge: 'ATV' },
                { id: 'zontes', name: 'Zontes', badge: 'Moto' },
                { id: 'voge', name: 'Voge', badge: 'Moto' },
              ].map((b) => (
                <a
                  key={b.id}
                  href="#brendovi"
                  className="flex flex-col items-center space-y-1.5 shrink-0 group focus:outline-none"
                >
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#c8102e] via-amber-500 to-[#e60012] group-hover:scale-110 transition-transform shadow-md">
                    <div className="w-full h-full rounded-full bg-[#0e0e14] flex items-center justify-center p-1 border border-black text-white font-mono text-[9px] font-bold text-center">
                      {b.name.split(' ')[0]}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors truncate max-w-[60px]">
                    {b.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </RevealCard>

        {/* Reels Vertical Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reels.map((r, idx) => (
            <RevealCard key={r.id} delay={0.1 + idx * 0.08}>
              <a
                href="https://www.instagram.com/carbox_nis/reels/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 group shadow-2xl flex flex-col justify-between p-4 block h-full"
              >
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 opacity-90 group-hover:opacity-80 transition-opacity" />

                {/* Top Meta */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    {r.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-xs sm:text-sm font-display font-medium text-white line-clamp-2">
                    {r.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-neutral-300 pt-1 border-t border-white/10">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 text-[#c8102e]" />
                      <span>{r.likes}</span>
                    </span>
                    <span>·</span>
                    <span>{r.views} pregleda</span>
                  </div>
                </div>
              </a>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
