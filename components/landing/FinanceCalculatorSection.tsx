'use client';

import { useState } from 'react';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { Calculator, FileText } from 'lucide-react';

export function FinanceCalculatorSection() {
  const [vehiclePrice, setVehiclePrice] = useState(38990);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [months, setMonths] = useState(60);

  const interestRate = 4.99;
  const downPaymentEur = Math.round((vehiclePrice * downPaymentPercent) / 100);
  const financedAmount = vehiclePrice - downPaymentEur;

  const monthlyRate = (() => {
    const monthlyRateFraction = interestRate / 100 / 12;
    const payment =
      (financedAmount * monthlyRateFraction * Math.pow(1 + monthlyRateFraction, months)) /
      (Math.pow(1 + monthlyRateFraction, months) - 1);
    return Math.round(payment);
  })();

  return (
    <section id="finansiranje" className="relative py-28 bg-[#08080a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold">
                06 · FINANSIJSKI ARANŽMANI
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase leading-[1.05]">
                Krediti & <br />
                <span className="editorial-italic font-normal text-white">lizing</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Zahvaljujući saradnji sa raznovrsnim bankama i lizing kućama, omogućavamo fleksibilne opcije plaćanja prilagođene vašem budžetu uz fiksne mesečne anuitete.
            </RevealParagraph>
          </div>

          {/* Right Minimalist Slider Box */}
          <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Live Monthly Rate Big Number */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  OKVIRNA MESEČNA RATA
                </div>
                <OdometerNumber value={monthlyRate} suffix=" €" className="text-4xl sm:text-5xl font-light text-white mt-1" />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Fiksna NKS: {interestRate}%
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-400 uppercase">Vrednost Vozila</span>
                <span className="text-white font-bold">{vehiclePrice.toLocaleString('sr-RS')} €</span>
              </div>
              <input
                type="range"
                min={8000}
                max={75000}
                step={500}
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                className="w-full accent-[#c8102e] bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-400 uppercase">Učešće ({downPaymentPercent}%)</span>
                <span className="text-white font-bold">{downPaymentEur.toLocaleString('sr-RS')} €</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#c8102e] bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Months Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-400 uppercase">Period Otplate</span>
                <span className="text-white font-bold">{months} meseci ({months / 12} god.)</span>
              </div>
              <input
                type="range"
                min={12}
                max={84}
                step={12}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-[#c8102e] bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            <a
              href="#kontakt"
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              <FileText className="w-4 h-4 text-[#c8102e]" />
              <span>Zatraži Zvaničnu Bankarsku Ponudu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
