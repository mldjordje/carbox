'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { ArrowLeft, ArrowRight, MapPin, Maximize2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export function ShowroomGallerySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const galleryItems = [
    {
      id: 'main-floor',
      title: 'Centralni Izložbeni Salon · Bulevar cara Konstantina',
      subtitle: '4.500 m² namenskog prodajnog i servisnog prostora',
      category: 'KOMPLEKS NIŠ',
      image: '/images/unnamed (8).webp',
      specs: 'Savremeno LED osvetljenje · Izložbene platforme · Namenski klijentski prijem',
    },
    {
      id: 'exterior-facade',
      title: 'Arhitektura & Ovlašćena Zastupništva',
      subtitle: 'Honda · Suzuki (Euro Sumar) · Opel · Vespa na jednoj adresi',
      category: 'EKSTERIJER',
      image: '/images/unnamed (5).webp',
      specs: 'Glavni saobraćajni pravac Niš – Niška Banja · Prostran klijentski parking',
    },
    {
      id: 'sales-desk',
      title: 'Savetovanje & Finansiranje u Salonu',
      subtitle: 'Posvećen tim prodajnih savetnika i bankarskih aranžmana',
      category: 'PRIJEM KLIJENATA',
      image: '/images/unnamed (9).webp',
      specs: 'Direktno odobrenje lizinga i kredita · Transparentan proces kupovine',
    },
    {
      id: 'honda-moto-wing',
      title: 'Zvanični Honda Moto & Piaggio Centar',
      subtitle: 'Najveća ponuda dvotočkaša i prateće moto opreme na jugu Srbije',
      category: 'MOTO KRILO',
      image: '/images/unnamed (3).webp',
      specs: 'Naked · Adventure · Gradska mobilnost · Ovlašćeni moto serviser',
    },
    {
      id: 'suzuki-wing',
      title: 'Suzuki Izložbeni Salon · Partnerstvo Euro Sumar',
      subtitle: 'Swift, Vitara AllGrip 4x4 i S-Cross dostupni za test vožnju',
      category: 'SUZUKI SALON',
      image: '/images/unnamed (4).webp',
      specs: 'Japanska pouzdanost · Hibridni pogon · Isporuka sa stanja',
    },
    {
      id: 'peugeot-wing',
      title: 'Peugeot Salon & i-Cockpit Generacija',
      subtitle: 'Novi 208, 2008, 3008 GT i 408 sa fabričkom garancijom',
      category: 'PEUGEOT SALON',
      image: '/images/unnamed (6).webp',
      specs: 'Avangardni dizajn · Test vozila · Brza isporuka',
    },
    {
      id: 'opel-pavilion',
      title: 'Opel Salon · Nemačka Inženjerska Preciznost',
      subtitle: 'Ovlašćeni prodajno-servisni centar za Opel putnički program',
      category: 'OPEL SALON',
      image: '/images/unnamed.webp',
      specs: 'Intelli-Lux LED tehnologija · AGR sedišta · Sertifikovan servis',
    },
  ];

  const current = galleryItems[activeIdx];

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % galleryItems.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <section className="relative py-28 sm:py-36 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText delay={0.1}>
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>KOMPLEKS CAR BOX NIŠ · POGLED UŽIVO</span>
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Naš prostor. <span className="editorial-italic font-normal text-white">Vaša adresa</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-xl font-light">
              Pogledajte fotografije našeg modernog prodajno-servisnog centra na Bulevaru cara Konstantina 80-82 u Nišu.
            </RevealParagraph>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-neutral-400">
              <strong className="text-white">0{activeIdx + 1}</strong> / 0{galleryItems.length}
            </span>
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/10 bg-neutral-900 text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                title="Prethodna fotografija"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/10 bg-neutral-900 text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                title="Sledeća fotografija"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Format Master Photo Hero */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center space-x-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-bold">
              {current.category}
            </span>
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>AUTENTIČAN SALON CAR BOX NIŠ</span>
            </div>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-1">
              <h3 className="text-xl sm:text-3xl font-display font-medium text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                {current.subtitle}
              </p>
              <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 pt-1">
                {current.specs}
              </div>
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-mono uppercase tracking-wider font-bold transition-all shrink-0 self-start sm:self-auto shadow-lg"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c8102e]" />
              <span>Posetite Salon</span>
            </a>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                activeIdx === idx
                  ? 'border-white scale-105 shadow-xl'
                  : 'border-white/10 opacity-50 hover:opacity-90'
              }`}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
