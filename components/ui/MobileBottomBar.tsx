'use client';

import { Phone, Calendar, Sparkles, Compass } from 'lucide-react';

interface Props {
  onOpenTestDrive?: () => void;
}

export function MobileBottomBar({ onOpenTestDrive }: Props) {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-auto">
      <div className="flex items-center justify-between p-2 rounded-2xl bg-[#0e0e14]/95 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <a
          href="tel:+38118550000"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-[10px] font-mono font-bold text-neutral-300 hover:text-white"
        >
          <Phone className="w-4 h-4 text-[#e60012] mb-0.5" />
          <span>POZIV</span>
        </a>

        <a
          href="#3d-showroom"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-[10px] font-mono font-bold text-neutral-300 hover:text-white"
        >
          <Sparkles className="w-4 h-4 text-[#ff4d5a] mb-0.5" />
          <span>3D STUDIO</span>
        </a>

        <a
          href="#lager"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-[10px] font-mono font-bold text-neutral-300 hover:text-white"
        >
          <Compass className="w-4 h-4 text-neutral-400 mb-0.5" />
          <span>LAGER</span>
        </a>

        <button
          type="button"
          onClick={onOpenTestDrive}
          className="flex items-center space-x-1.5 py-2.5 px-4 rounded-xl bg-[#c8102e] text-white text-[11px] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(200,16,46,0.5)] active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>TEST VOŽNJA</span>
        </button>
      </div>
    </div>
  );
}
