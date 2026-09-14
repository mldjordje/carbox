'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Vehicle, INVENTORY_VEHICLES } from '@/lib/content/cars';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Car,
  User,
  Phone,
  AlertCircle,
  CalendarPlus,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
}

const MONTH_NAMES = [
  'Januar',
  'Februar',
  'Mart',
  'April',
  'Maj',
  'Jun',
  'Jul',
  'Avgust',
  'Septembar',
  'Oktobar',
  'Novembar',
  'Decembar',
];

const DAY_NAMES = ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'];

// 30-minute time slots
const WEEKDAY_SLOTS = [
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
];

const SATURDAY_SLOTS = [
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
];

function formatISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseISODate(str: string): Date {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// Calculate end time for a 30-minute slot
function getSlotEndTime(slot: string): string {
  const [h, m] = slot.split(':').map(Number);
  const totalMins = h * 60 + m + 30;
  const endH = Math.floor(totalMins / 60);
  const endM = totalMins % 60;
  return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
}

// Deterministic simulation of a couple of booked slots for realism
function isSlotSimulatedBooked(dateStr: string, slot: string): boolean {
  if (slot === '10:30' || slot === '11:00' || slot === '14:00') return false;
  let hash = 0;
  const str = `${dateStr}-${slot}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 7 === 1;
}

export function TestDriveModal({ isOpen, onClose, initialVehicle }: Props) {
  const today = useMemo(() => new Date(), []);
  const todayStr = useMemo(() => formatISODate(today), [today]);

  const defaultInitialDateStr = useMemo(() => {
    const d = new Date();
    // If today is Sunday (0), move to Monday
    if (d.getDay() === 0) {
      d.setDate(d.getDate() + 1);
    } else if (d.getHours() >= 17) {
      // If late afternoon, move to tomorrow
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    }
    return formatISODate(d);
  }, []);

  const [selectedModel, setSelectedModel] = useState(
    initialVehicle?.model || 'Honda Civic 2.0 e:HEV RS'
  );
  const [selectedDateStr, setSelectedDateStr] = useState(defaultInitialDateStr);
  const [selectedTime, setSelectedTime] = useState('11:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [hasLicense, setHasLicense] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calendar month navigation
  const [viewDate, setViewDate] = useState(() => parseISODate(defaultInitialDateStr));

  useEffect(() => {
    if (initialVehicle?.model) {
      setSelectedModel(initialVehicle.model);
    }
  }, [initialVehicle]);

  // When modal is reopened, reset success if needed
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  const selectedVehicleObj = useMemo(() => {
    return INVENTORY_VEHICLES.find((v) => v.model === selectedModel) || null;
  }, [selectedModel]);

  const selectedDateObj = useMemo(() => parseISODate(selectedDateStr), [selectedDateStr]);
  const dayOfWeek = selectedDateObj.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;

  // Available slots for selected date
  const availableSlots = useMemo(() => {
    if (isSunday) return [];
    if (isSaturday) return SATURDAY_SLOTS;
    return WEEKDAY_SLOTS;
  }, [isSunday, isSaturday]);

  // Split into prepodne / popodne
  const morningSlots = useMemo(() => {
    return availableSlots.filter((slot) => {
      const [h] = slot.split(':').map(Number);
      return h < 12;
    });
  }, [availableSlots]);

  const afternoonSlots = useMemo(() => {
    return availableSlots.filter((slot) => {
      const [h] = slot.split(':').map(Number);
      return h >= 12;
    });
  }, [availableSlots]);

  // If currently selected time is not in available slots, fallback to first available
  useEffect(() => {
    if (!isSunday && availableSlots.length > 0 && !availableSlots.includes(selectedTime)) {
      setSelectedTime(availableSlots[0]);
    }
  }, [availableSlots, isSunday, selectedTime]);

  if (!isOpen) return null;

  // Calendar calculations
  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  // European Monday-based offset (0 = Mon, 6 = Sun)
  const startOffset = (firstDayOfWeek + 6) % 7;

  const canGoPrevMonth =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const handlePrevMonth = () => {
    if (canGoPrevMonth) {
      setViewDate(new Date(viewYear, viewMonth - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const handleSelectDate = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const dateStr = formatISODate(d);
    setSelectedDateStr(dateStr);
  };

  const setQuickDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1); // skip Sunday
    setSelectedDateStr(formatISODate(d));
    setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSunday) return;
    const ref = `CB-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e60012', '#ff4d5a', '#ffffff', '#22c55e'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const formattedDateTitle = selectedDateObj.toLocaleDateString('sr-RS', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const calendarGoogleUrl = () => {
    const [h, m] = selectedTime.split(':').map(Number);
    const startD = new Date(selectedDateObj);
    startD.setHours(h, m, 0, 0);
    const endD = new Date(startD.getTime() + 30 * 60 * 1000);

    const toGCalISO = (d: Date) =>
      d.toISOString().replace(/-|:|\.\d+/g, '');

    const details = encodeURIComponent(
      `Test vožnja modela: ${selectedModel}\nTrajanje: 30 min\nSalon: Car Box Niš (Bulevar cara Konstantina 80-82)\nBroj rezervacije: ${bookingRef}`
    );
    const loc = encodeURIComponent('Bulevar cara Konstantina 80-82, 18000 Niš, Srbija');
    const title = encodeURIComponent(`Car Box Test Vožnja: ${selectedModel}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${toGCalISO(
      startD
    )}/${toGCalISO(endD)}&details=${details}&location=${loc}`;
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0e0e14] border border-neutral-800 shadow-2xl p-5 sm:p-7 space-y-6 my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#e60012]/20 border border-[#e60012]/40 flex items-center justify-center text-[#ff4d5a] shadow-[0_0_15px_rgba(230,0,18,0.25)]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Zakažite Test Vožnju
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#e60012]/15 text-[#ff4d5a] border border-[#e60012]/30 uppercase">
                  30 min slotovi
                </span>
              </div>
              <div className="text-xs font-mono text-neutral-400 flex items-center space-x-1.5 mt-0.5">
                <MapPin className="w-3 h-3 text-[#ff4d5a]" />
                <span>Car Box Salon · Bulevar cara Konstantina 80-82, Niš</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Zatvori"
            className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Model Selection Bar with thumbnail preview */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="relative w-14 h-10 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0">
                  {selectedVehicleObj?.image ? (
                    <Image
                      src={selectedVehicleObj.image}
                      alt={selectedModel}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                      <Car className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
                    Odabrano Test Vozilo
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer border-b border-dashed border-neutral-700 hover:border-neutral-500 pb-0.5"
                  >
                    {INVENTORY_VEHICLES.map((v) => (
                      <option key={v.id} value={v.model} className="bg-neutral-900 text-white">
                        {v.brand} {v.model} ({v.powerHp} KS · {v.fuel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedVehicleObj && (
                <div className="flex items-center space-x-2 text-[11px] font-mono text-neutral-400 shrink-0">
                  <span className="px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {selectedVehicleObj.powerHp} KS
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-[#e60012]/10 border border-[#e60012]/30 text-[#ff4d5a] font-medium">
                    {selectedVehicleObj.fuel}
                  </span>
                </div>
              )}
            </div>

            {/* Main Interactive Grid: Mini Calendar (Left) + 30-min Time Slots (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              {/* Left: Mini Calendar */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-mono uppercase text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-[#ff4d5a]" />
                    <span className="font-bold">1. Izaberite Datum</span>
                  </div>

                  {/* Quick shortcuts */}
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setQuickDate(0)}
                      className="px-2 py-0.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white transition-colors"
                    >
                      Danas
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(1)}
                      className="px-2 py-0.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white transition-colors"
                    >
                      Sutra
                    </button>
                  </div>
                </div>

                {/* Calendar Card */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800/90 p-4 space-y-3 shadow-inner">
                  {/* Month / Year header with buttons */}
                  <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      disabled={!canGoPrevMonth}
                      aria-label="Prethodni mesec"
                      className={`p-1.5 rounded-lg border border-neutral-800 transition-colors ${
                        canGoPrevMonth
                          ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                          : 'text-neutral-700 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-mono uppercase">
                      {MONTH_NAMES[viewMonth]} {viewYear}
                    </span>

                    <button
                      type="button"
                      onClick={handleNextMonth}
                      aria-label="Sledeći mesec"
                      className="p-1.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day Names Row */}
                  <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] font-bold text-neutral-400 uppercase">
                    {DAY_NAMES.map((d, i) => (
                      <div key={d} className={i === 6 ? 'text-[#ff4d5a]/80' : ''}>
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty padding offsets for start of month */}
                    {Array.from({ length: startOffset }).map((_, i) => (
                      <div key={`offset-${i}`} className="h-8 sm:h-9" />
                    ))}

                    {/* Actual day buttons */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateObj = new Date(viewYear, viewMonth, day);
                      const dateStr = formatISODate(dateObj);
                      const isPast = dateStr < todayStr;
                      const isSun = dateObj.getDay() === 0;
                      const isSat = dateObj.getDay() === 6;
                      const isSelected = dateStr === selectedDateStr;
                      const isTodayDate = dateStr === todayStr;

                      let cellStyle =
                        'text-neutral-300 hover:bg-neutral-800 hover:text-white border border-transparent';

                      if (isPast) {
                        cellStyle = 'opacity-25 cursor-not-allowed text-neutral-600';
                      } else if (isSun) {
                        cellStyle =
                          'opacity-40 text-neutral-600 cursor-not-allowed bg-neutral-900/20';
                      }

                      if (isSelected) {
                        cellStyle =
                          'bg-gradient-to-br from-[#e60012] to-[#b3000e] text-white font-bold border border-red-400 shadow-[0_0_12px_rgba(230,0,18,0.5)] scale-105 z-10';
                      } else if (isTodayDate && !isPast) {
                        cellStyle += ' ring-1 ring-[#ff4d5a]/60 font-semibold';
                      }

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isPast || isSun}
                          onClick={() => handleSelectDate(day)}
                          title={
                            isSun
                              ? 'Salon je zatvoren nedeljom'
                              : isSat
                              ? 'Subota: radno vreme 08:30–14:30'
                              : undefined
                          }
                          className={`relative h-8 sm:h-9 rounded-xl flex flex-col items-center justify-center text-xs font-mono transition-all ${cellStyle}`}
                        >
                          <span>{day}</span>
                          {isTodayDate && !isSelected && (
                            <span className="w-1 h-1 rounded-full bg-[#ff4d5a] absolute bottom-1" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Calendar Footer Info */}
                  <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      <span>Pon–Sub otvoreno</span>
                    </span>
                    <span className="text-neutral-500">Nedeljom neradno</span>
                  </div>
                </div>

                {/* Selected Date Indicator */}
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs font-mono flex items-center justify-between text-white">
                  <span className="text-neutral-400 text-[11px]">Odabrani datum:</span>
                  <span className="font-bold text-[#ff4d5a] capitalize">
                    {formattedDateTitle}
                  </span>
                </div>
              </div>

              {/* Right: 30-min Time Slots */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-mono uppercase text-neutral-300">
                    <Clock className="w-3.5 h-3.5 text-[#ff4d5a]" />
                    <span className="font-bold">2. Izaberite Vreme (30 min)</span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                    {isSaturday ? 'Subota: do 14:30' : 'Pon–Pet: do 17:30'}
                  </span>
                </div>

                {/* Time Slots Container */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800/90 p-4 space-y-4 shadow-inner min-h-[260px] flex flex-col justify-between">
                  {isSunday ? (
                    <div className="py-10 text-center space-y-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                      </div>
                      <div className="text-xs font-bold text-white">Salon je zatvoren nedeljom</div>
                      <p className="text-[11px] text-neutral-400 max-w-xs mx-auto">
                        Molimo izaberite datum od ponedeljka do subote kako biste odabrali slobodan 30-minutni termin za test vožnju.
                      </p>
                      <button
                        type="button"
                        onClick={() => setQuickDate(1)}
                        className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs hover:bg-neutral-800"
                      >
                        Izaberi sledeći radni dan
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Prepodnevni slotovi */}
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                          <span>🌅 Prepodne (08:30 – 12:00)</span>
                          <span className="text-neutral-500">Slot 30 min</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {morningSlots.map((slot) => {
                            const isBooked = isSlotSimulatedBooked(selectedDateStr, slot);
                            const isSelected = selectedTime === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={isBooked}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2 px-1 rounded-xl text-xs font-mono font-medium transition-all relative ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white font-bold shadow-[0_0_12px_rgba(230,0,18,0.5)] border border-red-400 scale-[1.03]'
                                    : isBooked
                                    ? 'bg-neutral-900/40 text-neutral-600 border border-neutral-900 cursor-not-allowed line-through'
                                    : 'bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 hover:border-neutral-700'
                                }`}
                              >
                                <div>{slot}</div>
                                <div className="text-[9px] opacity-75 font-light">
                                  {isBooked ? 'Zauzeto' : '30 min'}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Popodnevni slotovi */}
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                          <span>🌇 Popodne (12:30 – {isSaturday ? '14:30' : '17:30'})</span>
                          <span className="text-neutral-500">Slot 30 min</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {afternoonSlots.map((slot) => {
                            const isBooked = isSlotSimulatedBooked(selectedDateStr, slot);
                            const isSelected = selectedTime === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={isBooked}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2 px-1 rounded-xl text-xs font-mono font-medium transition-all relative ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white font-bold shadow-[0_0_12px_rgba(230,0,18,0.5)] border border-red-400 scale-[1.03]'
                                    : isBooked
                                    ? 'bg-neutral-900/40 text-neutral-600 border border-neutral-900 cursor-not-allowed line-through'
                                    : 'bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 hover:border-neutral-700'
                                }`}
                              >
                                <div>{slot}</div>
                                <div className="text-[9px] opacity-75 font-light">
                                  {isBooked ? 'Zauzeto' : '30 min'}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Selected Slot Summary pill */}
                      <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs font-mono flex items-center justify-between text-white">
                        <span className="text-neutral-400 text-[11px]">Rezervisan termin:</span>
                        <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                          <Clock className="w-3.5 h-3.5 text-[#ff4d5a]" />
                          <span>
                            {selectedTime} – {getSlotEndTime(selectedTime)}h (30 min)
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Customer Information & License Check */}
            <div className="space-y-3 pt-1 border-t border-neutral-850">
              <div className="flex items-center space-x-1.5 text-xs font-mono uppercase text-neutral-300">
                <User className="w-3.5 h-3.5 text-[#ff4d5a]" />
                <span className="font-bold">3. Podaci o Vozaču</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-mono text-neutral-400 mb-1 uppercase text-[10px]">
                    Ime i Prezime *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="npr. Marko Petrović"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012] transition-colors"
                    />
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-neutral-400 mb-1 uppercase text-[10px]">
                    Broj Telefona *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="06x / xxx - xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012] transition-colors"
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-mono text-neutral-400 mb-1 uppercase text-[10px]">
                  Dodatna Napomena (opciono)
                </label>
                <input
                  type="text"
                  placeholder="npr. Zainteresovan sam za procenu staro za novo ili posebnu opremu..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#e60012] text-xs transition-colors"
                />
              </div>

              <label className="flex items-start space-x-2.5 pt-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={hasLicense}
                  onChange={(e) => setHasLicense(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded accent-[#e60012] cursor-pointer"
                />
                <span className="text-neutral-300 text-[11px] leading-snug">
                  Posedujem važeću vozačku dozvolu (B kategorija / A za moto) i saglasan sam da me
                  ovlašćeni prodajni savetnik kontaktira radi potvrde termina.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSunday}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#e60012] to-[#b3000e] hover:from-[#f00015] hover:to-[#c40010] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(230,0,18,0.4)] hover:shadow-[0_0_35px_rgba(230,0,18,0.6)] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              <span>Potvrdi Rezervaciju Test Vožnje</span>
              <span className="hidden sm:inline opacity-80 font-mono text-xs">
                ({selectedDateStr} u {selectedTime}h · 30 min)
              </span>
            </button>
          </form>
        ) : (
          /* Confirmation / Success Screen */
          <div className="py-6 sm:py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                Broj rezervacije: <strong className="text-white">{bookingRef}</strong>
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white pt-2">
                Test Vožnja Je Uspešno Zakazana!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Hvala vam, <strong>{name}</strong>. Vaš 30-minutni termin za test vožnju je zabeležen u sistemu Car Box salona.
              </p>
            </div>

            {/* Booking Summary Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5">
                <span className="text-neutral-400">Vozilo:</span>
                <span className="text-white font-bold">{selectedModel}</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5">
                <span className="text-neutral-400">Datum & Dan:</span>
                <span className="text-white font-semibold capitalize">{formattedDateTitle}</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5">
                <span className="text-neutral-400">Vreme (trajanje):</span>
                <span className="text-[#ff4d5a] font-bold">
                  {selectedTime} – {getSlotEndTime(selectedTime)}h (30 min)
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5">
                <span className="text-neutral-400">Lokacija:</span>
                <span className="text-white">Car Box, Niš</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Telefon klijenta:</span>
                <span className="text-white">{phone}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs max-w-md mx-auto flex items-start space-x-2 text-left">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Molimo ponesite važeću vozačku dozvolu i dođite 10 minuta pre zakazanog termina (
                {selectedTime}h). Naš prodajni savetnik će vas pozvati radi finalne potvrde.
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={calendarGoogleUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2"
              >
                <CalendarPlus className="w-4 h-4 text-emerald-400" />
                <span>Dodaj u Google Kalendar</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e60012] to-[#b3000e] text-white text-xs font-bold transition-colors"
              >
                Zatvori
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

