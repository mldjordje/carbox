'use client';

import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';

export function ManifestSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#08080a] border-y border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Top mono label */}
          <RevealText delay={0.1}>
            <div className="flex items-center space-x-3 text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
              <span>CAR BOX STANDARDI</span>
            </div>
          </RevealText>

          {/* Large Editorial Statement */}
          <div className="space-y-4">
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#f2f0eb] leading-[1.15] tracking-tight">
                Četiri vodeća brenda. <br className="hidden sm:block" />
                Najveća moto i ATV divizija. <br className="hidden sm:block" />
                Servis koji <span className="editorial-italic text-white">razume inženjering</span>.
              </h2>
            </RevealText>

            <RevealParagraph delay={0.35} className="max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed pt-4">
              Car Box u Nišu postavlja standarde za kupovinu i održavanje motornih vozila. Od najnovijih e:HEV hibrida i premijum SUV modela do legendarnih italijanskih dvotočkaša i proverenog programa zamene staro za novo.
            </RevealParagraph>
          </div>

          {/* Minimalist Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-neutral-850">
            <div>
              <OdometerNumber value={4} className="text-3xl sm:text-4xl font-light text-white" />
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-1">
                Ovlašćena Auto Brenda
              </div>
            </div>

            <div>
              <OdometerNumber value={8} className="text-3xl sm:text-4xl font-light text-[#c8102e]" />
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-1">
                Moto & ATV Proizvođača
              </div>
            </div>

            <div>
              <OdometerNumber value={110} className="text-3xl sm:text-4xl font-light text-white" />
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-1">
                Tačaka Provere Vozila
              </div>
            </div>

            <div>
              <OdometerNumber value={100} suffix="%" className="text-3xl sm:text-4xl font-light text-[#c8102e]" />
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-1">
                Originalni Delovi & Servis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
