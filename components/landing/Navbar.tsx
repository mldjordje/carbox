'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Calendar, Sparkles, MapPin, Menu, X } from 'lucide-react';

interface Props {
  onOpenTestDrive?: () => void;
  onSelectBrand?: (brandId: string) => void;
}

export function Navbar({ onOpenTestDrive, onSelectBrand }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#08080a] via-[#08080a]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Subtitle */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center font-display font-bold text-xs tracking-tighter text-white group-hover:border-[#c8102e] transition-colors">
              CB
            </div>
            <div>
              <div className="text-sm font-display font-medium tracking-tight text-white group-hover:text-[#c8102e] transition-colors">
                CAR BOX <span className="font-mono text-[10px] text-neutral-400 font-normal ml-1">NIŠ</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase hidden sm:block">
                Ovlašćeni Diler & Servis
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono tracking-wider text-neutral-300">
            <a href="#3d-showroom" className="hover:text-white transition-colors flex items-center space-x-1.5">
              <span className="w-1 h-1 rounded-full bg-[#c8102e]" />
              <span>3D STUDIO</span>
            </a>
            <a href="#brendovi" className="hover:text-white transition-colors">BRENDOVI</a>
            <a href="#lager" className="hover:text-white transition-colors">LAGER</a>
            <a href="#staro-za-novo" className="hover:text-white transition-colors">STARO ZA NOVO</a>
            <a href="#moto-atv" className="hover:text-white transition-colors">MOTO & ATV</a>
            <a href="#finansiranje" className="hover:text-white transition-colors">FINANSIJE</a>
            <a href="#servis" className="hover:text-white transition-colors">SERVIS</a>
            <a href="#kontakt" className="hover:text-white transition-colors">KONTAKT</a>
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+38118550000"
              className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
            >
              018 / 550-000
            </a>

            <button
              type="button"
              onClick={onOpenTestDrive}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#c8102e] hover:bg-[#e60012] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(200,16,46,0.3)] transition-all"
            >
              <Calendar className="w-3 h-3" />
              <span>TEST VOŽNJA</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={onOpenTestDrive}
              className="px-3 py-1.5 rounded-lg bg-[#c8102e] text-white text-[11px] font-mono font-bold uppercase"
            >
              TEST
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 bg-neutral-900 text-neutral-300"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0e0e14] border border-white/10 shadow-2xl space-y-3 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#3d-showroom"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                3D Studio
              </a>
              <a
                href="#lager"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                Lager Vozila
              </a>
              <a
                href="#staro-za-novo"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                Staro za Novo
              </a>
              <a
                href="#moto-atv"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                Moto & ATV
              </a>
              <a
                href="#finansiranje"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                Finansije
              </a>
              <a
                href="#servis"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white"
              >
                Servis
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive?.();
              }}
              className="w-full py-3 rounded-xl bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider"
            >
              Zakaži Test Vožnju
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
