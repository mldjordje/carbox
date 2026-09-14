'use client';

import { useState } from 'react';
import { Vehicle } from '@/lib/content/cars';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Send, Car } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
}

export function TestDriveModal({ isOpen, onClose, initialVehicle }: Props) {
  const [formData, setFormData] = useState({
    model: initialVehicle?.model || 'Honda Civic 2.0 e:HEV RS',
    date: '2026-09-21',
    time: '11:00',
    name: '',
    phone: '',
    hasLicense: true,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0e14] border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-[#e60012]/20 border border-[#e60012]/40 flex items-center justify-center text-[#ff4d5a]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Zakažite Test Vožnju</h3>
              <div className="text-[10px] font-mono text-neutral-400">Car Box Salon · Niš</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-mono text-neutral-400 mb-1.5 uppercase">Odaberite Model</label>
              <select
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#e60012]"
              >
                <option value="Honda Civic 2.0 e:HEV RS">Honda Civic 2.0 e:HEV RS</option>
                <option value="Honda CR-V 2.0 e:PHEV Advance Tech">Honda CR-V 2.0 e:PHEV Advance Tech</option>
                <option value="Honda HR-V 1.5 e:HEV">Honda HR-V 1.5 e:HEV Advance</option>
                <option value="Peugeot 3008 GT Hybrid">Peugeot 3008 GT Hybrid 136</option>
                <option value="Opel Astra GS Line">Opel Astra GS Line 1.2</option>
                <option value="Suzuki Vitara 1.4 AllGrip">Suzuki Vitara 1.4 BoosterJet 4x4</option>
                <option value="Vespa GTS 300 Super Sport">Vespa GTS 300 Super Sport (Moto)</option>
                <option value="Segway Snarler 600 ATV">Segway Snarler 600 ATV (Kvad)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-neutral-400 mb-1.5 uppercase">Željeni Datum</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#e60012]"
                />
              </div>

              <div>
                <label className="block font-mono text-neutral-400 mb-1.5 uppercase">Termin</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#e60012]"
                >
                  <option value="09:00">09:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:30">13:30</option>
                  <option value="15:30">15:30</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-neutral-400 mb-1.5 uppercase">Ime i Prezime</label>
                <input
                  type="text"
                  required
                  placeholder="Vaše ime"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#e60012]"
                />
              </div>

              <div>
                <label className="block font-mono text-neutral-400 mb-1.5 uppercase">Broj Telefona</label>
                <input
                  type="tel"
                  required
                  placeholder="06x / xxx - xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#e60012]"
                />
              </div>
            </div>

            <label className="flex items-center space-x-2 pt-1 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasLicense}
                onChange={(e) => setFormData({ ...formData, hasLicense: e.target.checked })}
                className="w-4 h-4 rounded accent-[#e60012]"
              />
              <span className="text-neutral-300 text-[11px]">Posedujem važeću vozačku dozvolu (B kategorija / A za moto)</span>
            </label>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,0,18,0.4)] transition-all mt-2"
            >
              Potvrdi Rezervaciju Test Vožnje
            </button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Test Vožnja Je Rezervisana!</h4>
            <p className="text-xs text-neutral-300">
              Hvala vam, <strong>{formData.name}</strong>. Vaš termin za <strong>{formData.model}</strong> na dan <strong>{formData.date} u {formData.time}h</strong> je zabeležen. Naš prodajni savetnik će vas pozvati na <strong>{formData.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold hover:bg-neutral-800"
            >
              Zatvori
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
