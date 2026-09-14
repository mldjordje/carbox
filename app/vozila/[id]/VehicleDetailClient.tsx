'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Vehicle, VehicleEquipment, DEFAULT_CAR_COLORS } from '@/lib/content/cars';
import { TestDriveModal } from '@/components/ui/TestDriveModal';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Gauge,
  Fuel,
  Sparkles,
  Phone,
  ArrowRight,
  Share2,
  ExternalLink,
  ChevronRight,
  Check,
  Award,
  Layers,
  FileText,
  MapPin,
  Car,
  CircleDot
} from 'lucide-react';

interface Props {
  vehicle: Vehicle;
  equipment: VehicleEquipment;
  relatedVehicles: Vehicle[];
}

export function VehicleDetailClient({ vehicle, equipment, relatedVehicles }: Props) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeColor, setActiveColor] = useState(DEFAULT_CAR_COLORS[0]);
  const [activeEquipmentTab, setActiveEquipmentTab] = useState<'safety' | 'interior' | 'multimedia' | 'exterior'>('safety');
  
  // Finance Calculator for this vehicle
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanMonths, setLoanMonths] = useState(60);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryNote, setInquiryNote] = useState('');

  // Test Drive Modal state
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const gallery = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  // Calculated Finance details
  const downPaymentEur = Math.round((vehicle.priceEur * downPaymentPercent) / 100);
  const financedAmount = vehicle.priceEur - downPaymentEur;
  const annualInterestRate = 0.0549; // 5.49% representative rate
  const monthlyRateFraction = annualInterestRate / 12;
  const calculatedMonthlyRate = Math.round(
    (financedAmount * monthlyRateFraction * Math.pow(1 + monthlyRateFraction, loanMonths)) /
      (Math.pow(1 + monthlyRateFraction, loanMonths) - 1)
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f2f0eb] pb-24 lg:pb-16 selection:bg-[#c8102e] selection:text-white">
      {/* Top Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#08080a]/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/#nova-vozila"
              className="flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors group px-2.5 py-1.5 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-800"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Nazad na salon</span>
            </Link>

            {/* Breadcrumbs */}
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-neutral-500">
              <span className="text-neutral-700">/</span>
              <Link href="/" className="hover:text-neutral-300 transition-colors">CAR BOX</Link>
              <span className="text-neutral-700">/</span>
              <span className="text-neutral-300 uppercase">{vehicle.brand}</span>
              <span className="text-neutral-700">/</span>
              <span className="text-white font-medium truncate max-w-[200px]">{vehicle.model}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="tel:+38118550000"
              className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-neutral-300 hover:text-white px-3 py-1.5 rounded-xl bg-neutral-900 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff4d5a]" />
              <span>018 / 550 - 000</span>
            </a>

            <button
              type="button"
              onClick={() => setIsTestDriveOpen(true)}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#e60012] to-[#b3000e] hover:from-[#f00015] hover:to-[#c40010] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,0,18,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Zakaži Test Vožnju</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Top Hero Section: Title, Badges, Price, and Gallery */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Showcase Gallery & Color Picker */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group">
              <Image
                src={gallery[activeImageIdx] || vehicle.image}
                alt={vehicle.model}
                fill
                priority
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#e60012] text-white shadow-lg shadow-red-900/40">
                    {vehicle.category === 'novo' ? '0 KM · NOVO VOZILO' : 'SERTIFIKOVANO POLOVNO'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20">
                    {vehicle.brand} OVLAŠĆENI SALON
                  </span>
                </div>

                {vehicle.has3D && (
                  <Link
                    href="/#3d-showroom"
                    className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#e60012]/20 hover:bg-[#e60012]/30 text-[#ff4d5a] border border-[#e60012]/40 backdrop-blur-md flex items-center space-x-1.5 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#ff4d5a]" />
                    <span>3D STUDIO</span>
                  </Link>
                )}
              </div>

              {/* Bottom Stage Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-[#ff4d5a]" />
                  <span>Car Box Niš · Bulevar cara Konstantina 80-82</span>
                </span>
                <span className="text-emerald-400 font-bold hidden sm:inline-block">
                  Dostupno za preuzimanje
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            {gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden bg-neutral-900 border transition-all shrink-0 cursor-pointer ${
                      activeImageIdx === idx
                        ? 'border-[#e60012] ring-2 ring-[#e60012]/40 scale-105'
                        : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Interactive Color Swatch Bar */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                  Izbor fabričke boje karoserije:
                </span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">
                  {activeColor.name}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {DEFAULT_CAR_COLORS.map((col) => (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => setActiveColor(col)}
                    title={col.name}
                    style={{ backgroundColor: col.hex }}
                    className={`w-7 h-7 rounded-full transition-all cursor-pointer border ${
                      activeColor.name === col.name
                        ? 'ring-2 ring-[#e60012] ring-offset-2 ring-offset-neutral-950 scale-110 border-white'
                        : 'border-neutral-700 opacity-85 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Specs, Price, and Fast Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e60012] font-semibold flex items-center space-x-2">
                <span>{vehicle.brand}</span>
                <span className="text-neutral-600">·</span>
                <span>{vehicle.year} GODIŠTE</span>
                <span className="text-neutral-600">·</span>
                <span>{vehicle.bodyType}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mt-2">
                {vehicle.model}
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {vehicle.highlight}
              </p>
            </div>

            {/* Main Price & Lease Card */}
            <div className="p-6 rounded-3xl bg-neutral-950 border border-white/10 space-y-5 shadow-xl">
              <div className="flex items-baseline justify-between border-b border-neutral-850 pb-4">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Zvanična cena sa PDV-om:</div>
                  <div className="flex items-baseline space-x-2 mt-0.5">
                    <OdometerNumber
                      value={vehicle.priceEur}
                      suffix=" €"
                      className="text-3xl sm:text-4xl font-mono font-bold text-white"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Mesečna rata od:</div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-[#ff4d5a]">
                    {vehicle.monthlyEstimateEur} € / mes.
                  </div>
                </div>
              </div>

              {/* Dealership highlights */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center space-x-2 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Isporuka sa carinskog lagera u Nišu za 48h</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-[#ff4d5a] shrink-0" />
                  <span>{vehicle.specs.warranty}</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-300">
                  <Award className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Mogućnost finansiranja uz 0% učešća i zamene staro za novo</span>
                </div>
              </div>

              {/* Primary Conversion CTAs */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTestDriveOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#e60012] to-[#b3000e] hover:from-[#f00015] hover:to-[#c40010] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(230,0,18,0.4)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Zakažite Test Vožnju (30 min)</span>
                </button>

                <a
                  href="#finansiranje-vozila"
                  className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-neutral-400" />
                  <span>Kalkulator Finansiranja & Ponuda</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The 6 Engineering & Performance Gauges */}
        <section className="space-y-4">
          <div className="text-[11px] font-mono tracking-[0.2em] text-[#e60012] uppercase font-semibold">
            TEHNIČKE PERFORMANSE I SPECIFIKACIJE
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-[#ff4d5a]" />
                <span>Snaga</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{vehicle.powerHp} KS</div>
              <div className="text-[10px] text-neutral-400 font-mono">({Math.round(vehicle.powerHp * 0.7355)} kW)</div>
            </div>

            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Ubrzanje 0-100</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{vehicle.specs.acceleration.split(' ')[0]}s</div>
              <div className="text-[10px] text-neutral-400 font-mono">Do 100 km/h</div>
            </div>

            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <Fuel className="w-3.5 h-3.5 text-emerald-400" />
                <span>Potrošnja</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{vehicle.specs.consumption.split(' ')[0]}</div>
              <div className="text-[10px] text-neutral-400 font-mono">l / 100 km komb.</div>
            </div>

            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                <span>Maks. Brzina</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{vehicle.specs.topSpeed.split(' ')[0]}</div>
              <div className="text-[10px] text-neutral-400 font-mono">km / h</div>
            </div>

            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Prtljažnik</span>
              </div>
              <div className="text-xl font-mono font-bold text-white">{vehicle.specs.trunk.split(' ')[0]}</div>
              <div className="text-[10px] text-neutral-400 font-mono">litara kapacitet</div>
            </div>

            <div className="luxury-card p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="text-neutral-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d5a]" />
                <span>Garancija</span>
              </div>
              <div className="text-sm font-mono font-bold text-[#ff4d5a] mt-1">{vehicle.specs.warranty}</div>
              <div className="text-[10px] text-neutral-400 font-mono">Fabrička garancija</div>
            </div>
          </div>
        </section>

        {/* Tabbed Equipment Explorer */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-850 pb-4">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#e60012] uppercase font-semibold">
                PREGLED OPREME I SISTEMA
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight uppercase mt-1">
                Serijska i dodatna oprema.
              </h2>
            </div>

            {/* Category Switcher */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-950 border border-white/10 text-xs font-mono">
              {[
                { id: 'safety', label: '🛡️ Sigurnost & ADAS' },
                { id: 'interior', label: '💺 Enterijer & Komfor' },
                { id: 'multimedia', label: '📱 Multimedija' },
                { id: 'exterior', label: '🌟 Eksterijer' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveEquipmentTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeEquipmentTab === tab.id
                      ? 'bg-white text-black font-bold shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {equipment[activeEquipmentTab].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-neutral-950/70 border border-white/5 hover:border-white/20 transition-colors flex items-start space-x-3 text-xs font-mono"
              >
                <div className="w-5 h-5 rounded-full bg-[#e60012]/15 border border-[#e60012]/30 flex items-center justify-center text-[#ff4d5a] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-neutral-200 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Financing Calculator for THIS Vehicle */}
        <section id="finansiranje-vozila" className="luxury-card rounded-3xl p-6 sm:p-10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-[11px] font-mono tracking-[0.2em] text-[#e60012] uppercase font-semibold">
                  PERSONALIZOVANA KALKULACIJA LIZINGA & KREDITA
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight uppercase mt-1">
                  Finansiranje za {vehicle.model}
                </h3>
                <p className="text-xs text-neutral-400 font-light mt-1">
                  Prilagodite učešće i period otplate prema vašim finansijskim planovima. Fiksna kamatna stopa i odobrenje za 24h u salonu.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 uppercase">Učešće ({downPaymentPercent}%):</span>
                    <span className="text-white font-bold">{downPaymentEur.toLocaleString('sr-RS')} €</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#e60012] bg-neutral-900 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Min: 10%</span>
                    <span>Max: 50%</span>
                  </div>
                </div>

                {/* Period Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 uppercase">Period otplate:</span>
                    <span className="text-white font-bold">{loanMonths} meseci ({loanMonths / 12} god.)</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={84}
                    step={12}
                    value={loanMonths}
                    onChange={(e) => setLoanMonths(Number(e.target.value))}
                    className="w-full accent-[#e60012] bg-neutral-900 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>12 meseci</span>
                    <span>84 meseca</span>
                  </div>
                </div>
              </div>

              {/* Calculated Monthly Installment Box */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Okvirna mesečna rata:</div>
                  <OdometerNumber
                    value={calculatedMonthlyRate}
                    suffix=" € / mes."
                    className="text-3xl font-mono font-bold text-white mt-0.5"
                  />
                </div>
                <div className="text-right text-[10px] font-mono text-neutral-400 space-y-0.5">
                  <div>Cena vozila: {vehicle.priceEur.toLocaleString('sr-RS')} €</div>
                  <div>Finansiran iznos: {financedAmount.toLocaleString('sr-RS')} €</div>
                  <div className="text-emerald-400">Reprezentativna NKS: 5.49%</div>
                </div>
              </div>
            </div>

            {/* Right: Instant Inquiry Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-white/10">
              {!inquirySent ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-neutral-850 pb-3">
                    <h4 className="text-sm font-bold text-white uppercase">Zatražite zvaničnu bankarsku ponudu</h4>
                    <p className="text-[11px] text-neutral-400">Naš finansijski savetnik će vam pripremiti precizan plan otplate.</p>
                  </div>

                  <div>
                    <label className="block text-[10px] text-neutral-400 uppercase mb-1">Ime i Prezime *</label>
                    <input
                      type="text"
                      required
                      placeholder="npr. Nikola Jovanović"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-neutral-400 uppercase mb-1">Broj Telefona *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06x / xxx - xxx"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-neutral-400 uppercase mb-1">Napomena (opciono)</label>
                    <input
                      type="text"
                      placeholder="npr. Zainteresovan sam za zamenu staro za novo..."
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Pošalji Zahtev Za Finansiranje Modela
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Zahtev je uspešno zabeležen!</h4>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    Hvala vam, <strong>{inquiryName}</strong>. Prodajni savetnik za {vehicle.model} će vas pozvati na <strong>{inquiryPhone}</strong> sa pripremljenim nacrtom lizing ugovora.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Big Test Drive Callout Banner */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#e60012] via-[#b3000e] to-[#700009] p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider inline-block">
                ISPROBAJTE NA DRUMU U NIŠU · 30 MINUTA
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight uppercase">
                Zakažite individualnu test vožnju za {vehicle.model}.
              </h3>
              <p className="text-xs sm:text-sm text-white/85 max-w-xl font-light leading-relaxed">
                Doživite odziv pogona, udobnost i napredne asistente u realnim uslovima vožnje. Odaberite tačan dan u našem novom mini kalendaru i termin od 30 minuta.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsTestDriveOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-neutral-100 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-2xl transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#e60012]" />
                <span>Otvori Mini Kalendar & Slotove</span>
              </button>

              <div className="text-[11px] font-mono text-white/70">
                Radno vreme: Pon–Pet 08:30–17:30 | Sub 08:30–14:30
              </div>
            </div>
          </div>
        </section>

        {/* Related Vehicles Section */}
        {relatedVehicles.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-neutral-900">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e60012]">
                  DIGITALNI LAGER
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight uppercase mt-0.5">
                  Pogledajte i druge modele iz ponude
                </h3>
              </div>

              <Link
                href="/#lager"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center space-x-1"
              >
                <span>Sva vozila</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVehicles.map((car) => (
                <Link
                  key={car.id}
                  href={`/vozila/${car.id}`}
                  className="luxury-card rounded-3xl overflow-hidden group border border-white/10 hover:border-[#e60012]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden border-b border-white/5">
                      <Image
                        src={car.image}
                        alt={car.model}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-white border border-white/10">
                          {car.brand}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-base font-display font-bold text-white group-hover:text-[#ff4d5a] transition-colors">
                        {car.model}
                      </h4>
                      <div className="text-xs font-mono text-neutral-400 flex items-center space-x-2">
                        <span>{car.powerHp} KS</span>
                        <span>·</span>
                        <span>{car.fuel.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-white">
                      {car.priceEur.toLocaleString('sr-RS')} €
                    </span>
                    <span className="text-xs font-mono text-[#ff4d5a] group-hover:translate-x-1 transition-transform flex items-center">
                      <span>Pogledaj</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Floating Bottom Conversion Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#08080a]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between shadow-2xl">
        <div>
          <div className="text-[9px] font-mono text-neutral-400 uppercase">{vehicle.model}</div>
          <div className="text-base font-mono font-bold text-white">{vehicle.priceEur.toLocaleString('sr-RS')} €</div>
        </div>

        <button
          type="button"
          onClick={() => setIsTestDriveOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Test Vožnja (30 min)</span>
        </button>
      </div>

      {/* Interactive Upgraded Test Drive Modal */}
      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        initialVehicle={vehicle}
      />
    </div>
  );
}
