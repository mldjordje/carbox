'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Vehicle } from '@/lib/content/cars';
import { 
  X, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Fuel, 
  Gauge, 
  Sparkles, 
  Check, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  FileText
} from 'lucide-react';

interface Props {
  vehicle: Vehicle | null;
  onClose: () => void;
  onOpenTestDrive?: (vehicle: Vehicle) => void;
}

export function VehicleModal({ vehicle, onClose, onOpenTestDrive }: Props) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'finance' | 'inquiry'>('specs');
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({ name: '', phone: '', email: '', message: '' });

  if (!vehicle) return null;

  const gallery = vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0d0d12] border border-neutral-800 shadow-2xl overflow-hidden my-auto">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#e60012] text-white">
              {vehicle.badge || vehicle.brand}
            </span>
            <div className="text-xs font-mono text-neutral-400">
              {vehicle.year} · {vehicle.category === 'novo' ? 'NOVO VOZILO (0 km)' : `${vehicle.mileageKm.toLocaleString('sr-RS')} km`}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Top Title & Price Grid */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#ff4d5a] font-bold">{vehicle.brand}</div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {vehicle.model}
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white text-gradient-silver">
                {vehicle.priceEur.toLocaleString('sr-RS')} €
              </div>
              <div className="text-xs font-mono text-emerald-400">
                od {vehicle.monthlyEstimateEur} € / mesečno (Kredit/Lizing)
              </div>
            </div>
          </div>

          {/* Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
              <Image
                src={gallery[selectedImg] || vehicle.image}
                alt={vehicle.model}
                fill
                className="object-cover"
              />
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImg(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImg === idx ? 'border-[#e60012]' : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tabs: Specs vs Inquiry */}
          <div className="flex items-center space-x-2 border-b border-neutral-800 pb-2">
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'specs' ? 'bg-[#e60012] text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tehničke Specifikacije
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('inquiry')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'inquiry' ? 'bg-[#e60012] text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Zatraži Ponudu / Upit
            </button>
          </div>

          {activeTab === 'specs' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <p className="text-sm text-neutral-300 leading-relaxed">{vehicle.highlight}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-900">
                  <div className="text-[10px] text-neutral-400">SNAGA</div>
                  <div className="text-sm font-bold text-white mt-0.5">{vehicle.powerHp} KS</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-900">
                  <div className="text-[10px] text-neutral-400">GORIVO / POGON</div>
                  <div className="text-sm font-bold text-white mt-0.5">{vehicle.fuel}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-900">
                  <div className="text-[10px] text-neutral-400">MENJAČ</div>
                  <div className="text-sm font-bold text-white mt-0.5">{vehicle.transmission}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-900">
                  <div className="text-[10px] text-neutral-400">UBRZANJE (0-100)</div>
                  <div className="text-sm font-bold text-[#ff4d5a] mt-0.5">{vehicle.specs.acceleration}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Potrošnja goriva:</span>
                  <span className="text-white font-mono font-semibold">{vehicle.specs.consumption}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Maksimalna brzina:</span>
                  <span className="text-white font-mono font-semibold">{vehicle.specs.topSpeed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Prtljažni prostor:</span>
                  <span className="text-white font-mono font-semibold">{vehicle.specs.trunk}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Garancija:</span>
                  <span className="text-emerald-400 font-mono font-bold">{vehicle.specs.warranty}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inquiry' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {!inquirySent ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">Vaše Ime i Prezime</label>
                      <input
                        type="text"
                        required
                        placeholder="Ime i prezime"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#e60012]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">Broj Telefona</label>
                      <input
                        type="tel"
                        required
                        placeholder="06x / xxx - xxx"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#e60012]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">Poruka / Pitanje</label>
                    <textarea
                      rows={3}
                      placeholder="Zanima me dostupnost vozila, uslovi finansiranja ili zamena za moje trenutno vozilo..."
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#e60012]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,0,18,0.4)]"
                  >
                    Pošalji Upit Prodajnom Timu Car Box
                  </button>
                </form>
              ) : (
                <div className="p-6 text-center space-y-3 bg-neutral-950 rounded-2xl border border-neutral-800">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Upit za {vehicle.model} je Poslat!</h4>
                  <p className="text-xs text-neutral-400">Naš prodajni savetnik će vas kontaktirati na <strong>{inquiryData.phone}</strong>.</p>
                </div>
              )}
            </div>
          )}

          {/* Action Hub */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dostupno u Car Box salonu u Nišu</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="tel:+38118550000"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e60012]" />
                <span>018 / 550 - 000</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTestDrive?.(vehicle);
                }}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#e60012] hover:bg-[#ff1a2b] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(230,0,18,0.4)] transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Zakaži Test Vožnju</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
