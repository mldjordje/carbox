'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Database,
  Layers,
  Car,
  Calendar,
  Wrench,
  TrendingUp,
  Sparkles,
  Bot,
  QrCode,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Printer,
  FileSpreadsheet,
  Zap,
  Target,
  Users,
  Building2,
  ChevronRight,
  Share2,
  CreditCard,
  PhoneCall,
} from 'lucide-react';

export default function ProjekatPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-sans antialiased selection:bg-[#c8102e] selection:text-white pb-32">
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-50 bg-[#0c0c10]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#c8102e]" />
          <span>Nazad na Car Box Demo</span>
        </Link>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-white/15 bg-neutral-900 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#c8102e]" />
            <span>Štampaj / Snimi u PDF</span>
          </button>

          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#c8102e]/20 text-[#ff4d5a] border border-[#c8102e]/40 uppercase tracking-wider">
            Sastanak · Master Dokument
          </span>
        </div>
      </header>

      {/* Hero / Title Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 border-b border-neutral-800/80">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#c8102e] text-white font-mono text-xs font-bold uppercase tracking-widest">
              CAR BOX NIŠ
            </span>
            <span className="text-xs font-mono text-neutral-400">
              OVLAŠĆENI PRODAJNO-SERVISNI CENTAR · BULEVAR CARA KONSTANTINA 80-82
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
            STRATEŠKI PLAN DIGITALIZACIJE I PONUDA ZA IMPLEMENTACIJU
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-4xl">
            Od vizuelnog online izloga do integrisanog sistema koji generiše prodaju novih i polovnih vozila,
            automatski puni servisne kapacitete i štedi stotine radnih sati vašem timu svakog meseca.
          </p>

          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-white/10 text-xs sm:text-sm font-mono text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-white">Pripremljeno za:</strong> Rukovodstvo i menadžment Car Box d.o.o. Niš
            </div>
            <div className="text-neutral-400">
              Cilj sastanka: Usklađivanje obima projekta, prioriteta i dinamike puštanja u rad
            </div>
          </div>
        </div>

        {/* Sticky Table of Contents Quick Nav */}
        <div className="mt-10 pt-6 border-t border-neutral-800">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
            BRZI SKOK NA SEKCIJE ZA ČITANJE NA SASTANKU:
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <a href="#stanje-demoa" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              00 · Stanje demoa
            </a>
            <a href="#paket-1" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              01 · Paket 1: Baza i Admin
            </a>
            <a href="#paket-2" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              02 · Paket 2: Prodaja
            </a>
            <a href="#paket-3" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              03 · Paket 3: Servis
            </a>
            <a href="#paket-4" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              04 · Paket 4: Marketing
            </a>
            <a href="#paket-5" className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/5 transition-colors">
              05 · Paket 5: Premium (3D/360)
            </a>
            <a href="#nase-dopune" className="px-3 py-1.5 rounded-lg bg-[#c8102e]/20 hover:bg-[#c8102e]/30 text-[#ff4d5a] font-bold border border-[#c8102e]/40 transition-colors">
              ★ Naše dopune (B2B, QR, Viber)
            </a>
            <a href="#faze-i-roi" className="px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 font-bold border border-emerald-800/40 transition-colors">
              ★ Faze i Poslovni ROI
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 space-y-20">

        {/* 00. STANJE DEMOA */}
        <section id="stanje-demoa" className="space-y-6 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-xl bg-neutral-800 text-white font-mono font-bold flex items-center justify-center text-sm">
              00
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Šta demo ima sada (Urađeni temelj)
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Demo sajt koji smo izgradili predstavlja najmoderniju tehnološku platformu u automobilskom sektoru u Srbiji. 
            Koristi najnoviji <strong>Next.js 16</strong> i <strong>React Three Fiber 3D grafički endžin</strong>, što Car Boxu 
            omogućava da izgleda i funkcioniše ispred svih ovlašćenih uvoznika i dilera na Balkanu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-emerald-500/30 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Šta je spremno i funkcionalno u demo izdanju</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• <strong>3D Digitalni Showroom:</strong> Potpuno interaktivan 3D pregled modela Civic RS i CR-V 2026 sa rotacijom od 360°, promenom originalnih fabričkih boja karoserije i studijskim osvetljenjem bez odsjaja.</li>
                <li>• <strong>Pojedinačne stranice vozila (/vozila/[id]):</strong> Detaljan prikaz svakog modela sa specifikacijama, opremom (bezbednost, enterijer, multimedija, eksterijer), galerijom i kalkulatorom rate.</li>
                <li>• <strong>Pametna pretraga prirodnim jezikom:</strong> Kupac može ukucati npr. <em>"hibrid do 35k"</em> ili <em>"suv automatik"</em> i sistem odmah filtrira odgovarajuća vozila.</li>
                <li>• <strong>Online kalendar test vožnje:</strong> 30-minutni slotovi, odabir dana, potvrda i direktan eksport u Google Kalendar.</li>
                <li>• <strong>Autentični vizuelni identitet:</strong> Fotografije i atmosfera sa stvarne lokacije u Nišu (Bulevar cara Konstantina 80-82, 4.500 m²).</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-amber-500/30 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Trenutna ograničenja (Zašto je ovo izlog, a ne još gotov softver)</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• <strong>Lager u kodu:</strong> Trenutno je 9 vozila ručno upisano u statički fajl. Kada se auto proda, mora se ručno menjati kod.</li>
                <li>• <strong>Forme ne šalju podatke:</strong> Kada kupac klikne "Pošalji upit" ili "Zakaži servis", pojavi se lepa poruka na ekranu, ali upit ne stiže prodavcu na telefon niti se upisuje u bazu.</li>
                <li>• <strong>Slike vozila:</strong> Korišćene su privremene ilustracije umesto originalnih fotografija svakog konkretnog vozila sa lagera.</li>
                <li>• <strong>Veličina 3D modela:</strong> 3D fajlovi trenutno imaju 19–23 MB i zahtevaju kompresiju (Draco/Meshopt) kako bi se na mobilnom telefonu preko 4G mreže učitavali za manje od 2 sekunde.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 01. PAKET 1 — OSNOVA */}
        <section id="paket-1" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-[#c8102e] text-white font-mono font-bold flex items-center justify-center text-sm">
                01
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Paket 1 — Osnova (Bez ovoga sajt ne može da radi)
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Ovo je tehnički temelj. Pretvara sajt iz lepog kataloga u stvarni radni alat vašeg prodajnog tima.
            </p>
          </div>

          <div className="space-y-6">
            {/* 1.1 Admin panel */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">1.1 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Centralni Admin Panel za Lager (Web aplikacija za unos i izmenu)
                  </h3>
                </div>
                <Database className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>

              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <strong className="text-white">Šta je to:</strong> Jednostavna administratorska platforma zaštićena lozinkom gde vaši referenti prodaje samostalno dodaju nova i polovna vozila, menjaju cene, unose opremu i menjaju status vozila (Dostupno, Rezervisano kaparom, Prodato).
                </p>
                <p>
                  <strong className="text-white">Kako radi u praksi:</strong> Prodavac na svom telefonu ili računaru klikne "Novo vozilo", unese marku, model, kilometražu i cenu, prevuče fotografije i klikne "Sačuvaj". Vozilo je istog trenutka vidljivo na sajtu u pretrazi i lageru.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Potpuna nezavisnost od programera i agencija. Ušteda od minimum 20 radnih sati mesečno. Lager na sajtu je uvek 100% tačan, što eliminiše neprijatne situacije gde kupac zove za auto koji je prodat pre nedelju dana.
                </div>
              </div>
            </div>

            {/* 1.2 Forme stvarno rade */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">1.2 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Sve forme stvarno rade: Baza podataka + Instant SMS / Viber / Email notifikacije
                  </h3>
                </div>
                <MessageSquare className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>

              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <strong className="text-white">Šta je to:</strong> Povezivanje svih kontakt tačaka (upit za cenu, zakazivanje test vožnje, prijava za servis, zahtev za procenu staro za novo) sa pouzdanom bazom podataka i trenutnim slanjem obaveštenja na telefon prodavca.
                </p>
                <p>
                  <strong className="text-white">Kako radi u praksi:</strong> Kupac u 20:30h pošalje upit za Hondu Civic. U roku od 2 sekunde, prodajnom savetniku na telefon stiže Viber poruka sa imenom, brojem telefona i modelom koji kupac želi, dok kupac automatski dobija SMS potvrde da je upit primljen.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Statistika auto industrije dokazuje da kontaktiranje kupca u prvih 15 minuta od slanja upita povećava šansu za zaključenje prodaje za čak 390%. Kada kupac dobije poziv dok još gleda u ekran, konkurencija nema nikakve šanse.
                </div>
              </div>
            </div>

            {/* 1.3 Mini CRM */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">1.3 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Mini CRM za upravljanje upitima i prodajnim levkom (Lead Management)
                  </h3>
                </div>
                <Users className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>

              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <strong className="text-white">Šta je to:</strong> Jednostavna digitalna tabla koja vodi svakog kupca kroz korake: <em>Novi upit → Pozvan → Poslata ponuda → Zakazana test vožnja → Prodat auto (ili razlog odustajanja)</em>.
                </p>
                <p>
                  <strong className="text-white">Kako radi u praksi:</strong> Svaki upit se automatski dodeljuje zaduženom prodavcu. Šef prodaje ili direktor u svakom trenutku vidi listu svih otvorenih pregovora, vrednost potencijalnih prodaja i vreme odziva svakog prodavca.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Sprečava da ijedan kupac "propadne kroz pukotine" jer je prodavac zaboravio da se javi. Donosi potpunu transparentnost poslovanja vlasniku firme.
                </div>
              </div>
            </div>

            {/* 1.4 Posebna strana za svako vozilo */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">1.4 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Unikatna SEO stranica za svako vozilo i vizuelne kartice za deljenje na Viberu i mrežama
                  </h3>
                </div>
                <Share2 className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>

              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <strong className="text-white">Šta je to:</strong> Svako pojedinačno vozilo na lageru ima svoju stalnu adresu (npr. <code>carbox.rs/vozila/honda-civic-rs</code>) optimizovanu za Google pretragu i deljenje preko poruka.
                </p>
                <p>
                  <strong className="text-white">Kako radi u praksi:</strong> Kada vaš prodavac pošalje link kupcu na Viber ili WhatsApp, u poruci se automatski prikazuje velika fotografija auta, tačna cena, rata i oznaka Car Box Niš.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Organski saobraćaj sa Google-a kada neko u Nišu i regionu traži npr. <em>"kupovina Peugeot 3008 Niš cena"</em>. Premijum prezentacija koja u očima kupca podiže ugled kuće.
                </div>
              </div>
            </div>

            {/* 1.5 Sinhronizacija sa Polovnim Automobilima */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">1.5 Modul · Najveća operativna ušteda</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Automatska dvosmerna sinhronizacija sa portalom "Polovni Automobili"
                  </h3>
                </div>
                <FileSpreadsheet className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>

              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <strong className="text-white">Šta je to:</strong> Povezivanje sajta sa profilom Car Box-a na portalu PolovniAutomobili.com putem API-ja ili automatskog feed-a.
                </p>
                <p>
                  <strong className="text-white">Kako radi u praksi:</strong> Vozilo se unese <strong>samo jednom</strong> — u Car Box admin panel. Sistem ga automatski postavlja i na zvanični sajt i na oglasnik. Ako promenite cenu na sajtu, ona se istog trena ažurira i na Polovnim automobilima. Kada se vozilo označi kao prodato, oglas se automatski arhivira.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Direktna ušteda od 30 do 50 radnih sati zaposlenih svakog meseca. Eliminišu se dupli unosi, greške u cenama i gubljenje vremena na ručno osvežavanje stotina oglasa.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. PAKET 2 — PRODAJA */}
        <section id="paket-2" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-[#c8102e] text-white font-mono font-bold flex items-center justify-center text-sm">
                02
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Paket 2 — Prodaja (Direktan generator novog novca)
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Alati dizajnirani sa jednim ciljem: da posetioca sajta što brže pretvore u kupca koji uplaćuje kaparu ili sedi za volanom u vašem salonu.
            </p>
          </div>

          <div className="space-y-6">
            {/* 2.1 Online kalendar za test vožnju */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.1 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Pravi interaktivni kalendar test vožnje sa SMS potvrdama i podsetnicima
                  </h3>
                </div>
                <Calendar className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Prikaz stvarnih slobodnih 30-minutnih termina za svaki test automobil, uz onemogućavanje preklapanja termina.</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> Kupac bira dan i tačan sat, sistem mu šalje SMS potvrdu. 24 sata pre zakazane vožnje, sistem šalje automatski podsetnik na telefon: <em>"Podsećamo vas na zakazanu test vožnju Honde Civic sutra u 11:00h u Car Box salonu u Nišu"</em>.</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Smanjuje stopu nepojavljivanja (no-show) za više od 70%. U auto industriji, 30% ljudi koji dođu na test vožnju u roku od mesec dana kupe automobil.
                </div>
              </div>
            </div>

            {/* 2.2 Staro za novo */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.2 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Pravi program "Staro za Novo": Upload slika i saobraćajne dozvole sa telefona
                  </h3>
                </div>
                <Car className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Umesto statičke formule, kupac fotografiše svoje vozilo i saobraćajnu dozvolu, bira koji novi auto želi iz vaše ponude i šalje zahtev za zvaničnu ponudu otkupa/zamene.</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> Vaš procenitelj u admin panelu dobija gotov dosije vozila, unosi procenjenu vrednost i jednim klikom vraća klijentu zvaničnu ponudu na SMS/Viber: <em>"Vaša procena je 13.500 € uz doplatu od 18.000 € za novu Hondu CR-V"</em>.</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Preko 65% kupaca novih automobila u Srbiji ima staro vozilo koje prvo mora da reši. Otklanjanjem ove prepreke na sajtu, privlačite kupce koji bi inače mesecima odlagali kupovinu novog auta.
                </div>
              </div>
            </div>

            {/* 2.3 Kalkulator po bankama */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.3 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Finansijski kalkulator po bankama i lizing kućama sa dugmetom "Pošalji zahtev za kredit"
                  </h3>
                </div>
                <CreditCard className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Finansijski modul prilagođen uslovima vodećih partner banaka (Banca Intesa, OTP, Porsche Leasing, UniCredit) sa izborom učešća (10-50%) i perioda otplate (12-84 meseca).</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> Kupac podešava parametre, vidi da ga npr. Peugeot 2008 košta samo 220 € mesečno, i odmah klikne "Pošalji zahtev finansijskom savetniku Car Box-a".</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Skida psihološku barijeru visoke cene. Za kupca je 250 € mesečno prihvatljiv trošak, dok mu 30.000 € deluje nedostižno. Pored toga, donosi proviziju od lizing kuća i banaka za svaki plasirani ugovor.
                </div>
              </div>
            </div>

            {/* 2.4 Rezervacija vozila kaparom */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.4 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Online rezervacija vozila uplatom kapare (npr. 200–500 € preko platne kartice)
                  </h3>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Sigurna online naplata depozita u dinarima (preko domaće banke) kojom kupac garantuje kupovinu, a Car Box skida vozilo sa lagera na 48 sati.</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> Kupac iz Vranja, Leskovca ili Beograda vidi auto koji mu odgovara u 22h uveče. Plaši se da se auto ne proda do vikenda. Ukuca karticu, uplati 25.000 RSD depozita, a na sajtu se odmah pojavi oznaka "Rezervisano za kupca".</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Vezuje kupca za vaš salon. Kada kupac uplati kaparu, prestaje da gleda druge salone i ponude konkurencije.
                </div>
              </div>
            </div>

            {/* 2.5 Poređenje i lista želja */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.5 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Uporedni prikaz vozila (Side-by-Side poređenje 2–3 modela) i sačuvana vozila
                  </h3>
                </div>
                <Layers className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Mogućnost da posetilac uporedi npr. Honda Civic RS vs Peugeot 308 GT vs Suzuki Vitara na jednom preglednom ekranu sa jasnim razlikama u ceni, snazi, potrošnji i opremi.</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Zadržava posetioca na vašem sajtu i skraćuje vreme donošenja odluke. Pomaže kupcu da opravda izbor skupljeg paketa opreme.</p>
              </div>
            </div>

            {/* 2.6 Obaveštenje kupcu "Javi mi kad stigne" */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.6 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Automatska lista čekanja: "Javi mi kad stigne traženo vozilo"
                  </h3>
                </div>
                <Clock className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Kupac upiše željene parametre (npr. <em>"CR-V hibrid ispod 45.000 €"</em> ili <em>"Peugeot 2008 dizel do 20.000 €"</em>). Čim takvo vozilo stigne na lager, sistem mu automatski šalje SMS i email sa linkom.</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Polovna i test vozila se prodaju u roku od 24h bez trošenja novca na oglašavanje. Gradi bazu najkvalitetnijih kupaca u regionu.</p>
              </div>
            </div>

            {/* 2.7 AI Prodajni Asistent */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">2.7 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    AI Prodajni Asistent (Chatbot obučen na stvarnom lageru i specifikacijama Car Box-a)
                  </h3>
                </div>
                <Bot className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Inteligentni asistent na srpskom jeziku koji 24/7 komunicira sa kupcima umesto statičke pretrage, odgovara na tehnička pitanja i uzima kontakt telefon.</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> Kupac pita: <em>"Da li imate CR-V sa pogonom na sva 4 točka i koliki je gepek?"</em>. AI odgovara: <em>"Imamo CR-V e:PHEV na stanju sa prtljažnikom od 617 litara. Želite li da vam zakažem probnu vožnju za sutra u Nišu?"</em>.</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Preko 40% pretraga na internetu obavlja se van radnog vremena salona (između 20h i 01h). AI hvata ove kupce dok su "zagrejani", uzima njihov broj i ujutru u 08:00h prodajni savetnik dobija gotovog kupca za poziv.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. PAKET 3 — SERVIS */}
        <section id="paket-3" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-[#c8102e] text-white font-mono font-bold flex items-center justify-center text-sm">
                03
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Paket 3 — Servisni Centar (Stalni mesečni prihod & lojalnost)
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Dok je prodaja automobila ciklična, servis donosi siguran prihod svakog radnog dana u godini. 
              Ovaj paket digitalizuje servis i vraća kupce u vašu radionicu.
            </p>
          </div>

          <div className="space-y-6">
            {/* 3.1 Online zakazivanje servisa */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.1 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Online planer prijema servisa po radnim mestima i mehaničarima
                  </h3>
                </div>
                <Wrench className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Sistem za zakazivanje koji uzima u obzir tip posla (mali servis 1.5h, dijagnostika 1h, kočnice 2h) i automatski popunjava slobodne dizalice bez zagušenja prijema.</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Oslobađa telefon prijemnog odeljenja. Servis radi sa maksimalnim kapacitetom bez "praznog hoda" i bez nervoznih klijenata koji čekaju u hodniku.</p>
              </div>
            </div>

            {/* 3.2 Garaža kupca */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.2 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Digitalna Garaža kupca ("Moj Car Box Nalog" · Elektronska servisna knjižica)
                  </h3>
                </div>
                <Car className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Lični profil vlasnika vozila gde se na osnovu broja šasije ili registracije vide svi prethodni servisi, ugrađeni delovi, preporučeni radovi i računi u PDF-u.</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Cementira lojalnost. Klijent ne želi da ide kod neovlašćenog majstora "u garažu" jer bi time izgubio proverenu digitalnu servisnu istoriju koja mu podiže vrednost auta za 1.000–2.000 € pri budućoj prodaji.</p>
              </div>
            </div>

            {/* 3.3 Automatski podsetnici */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.3 Modul · Najveći generator prihoda servisa</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Automatizovani SMS & Viber podsetnici za redovan servis, registraciju i sezonsku zamenu guma
                  </h3>
                </div>
                <MessageSquare className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Sistem koji bez ikakvog ručnog rada prati kalendar svakog klijenta i automatski šalje personalizovane poruke.</p>
                <p><strong className="text-white">Kako radi u praksi:</strong> 11 meseci nakon poslednjeg servisa, klijentu stiže Viber poruka: <em>"Poštovani Ivane, bliži se redovan godišnji servis za vaš Peugeot 3008. Kliknite ovde da izaberete termin uz 10% popusta na originalne filtere"</em>.</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Ovo je najprofitabilniji modul celog sistema. Vraća preko 40% zaboravnih klijenata koji bi inače servis obavili na drugom mestu. Garantuje stalan i predvidiv prihod servisa svakog meseca.
                </div>
              </div>
            </div>

            {/* 3.4 Status popravke uživo */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.4 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Praćenje statusa popravke uživo ("Live Tracking") sa foto-odobrenjem dodatnih radova
                  </h3>
                </div>
                <Target className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Klijent na svom telefonu prati faze: <em>Prijem → Dijagnostika → Radovi u toku → Završno pranje → Vozilo spremno za preuzimanje</em>.</p>
                <p><strong className="text-white">Ključna inovacija:</strong> Ako mehaničar primeti istrošene pločice, slika ih telefonom. Klijentu stiže poruka sa slikom i dugmetom: <em>"Zameniti kočione pločice za 8.500 RSD? [Odobri jednim klikom]"</em>.</p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base">
                  <strong>Zašto ovo donosi novac / Poslovni ROI:</strong> Eliminiše gubljenje vremena na zvanje klijenata koji se ne javljaju dok auto stoji na dizalici. Dramatično povećava prodaju dodatnih delova jer kupac svojim očima vidi problem na fotografiji.
                </div>
              </div>
            </div>

            {/* 3.5 Limarija i osiguranje */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.5 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Modul za prijavu limarijskih šteta i koordinaciju sa osiguravajućim kućama
                  </h3>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Brza online prijava saobraćajne nezgode sa uploadom policijskog zapisnika i slika oštećenja radi direktne koordinacije sa osiguranjima (Generali, Dunav, DDOR, Triglav).</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Limarijski i farbarski poslovi nose najveće marže u servisu. Klijent dobija sve na jednom mestu bez lutanja.</p>
              </div>
            </div>

            {/* 3.6 Hotel za gume */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff4d5a] uppercase tracking-wider font-bold">3.6 Modul</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Digitalni Hotel za gume sa evidencijom šare i automatskom ponudom novih pneumatika
                  </h3>
                </div>
                <Database className="w-6 h-6 text-[#c8102e] shrink-0" />
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p><strong className="text-white">Šta je to:</strong> Evidencija skladištenih točkova (pozicija u magacinu, DOT, dubina šare u milimetrima). Ako je šara ispod 4 mm, sistem pre zimske sezone automatski nudi klijentu nov set guma uz montiranje.</p>
                <p><strong className="text-white">Zašto ovo donosi novac / Poslovni ROI:</strong> Dodatni prihod od čuvanja guma i direktna prodaja novih pneumatika pre početka gužvi u novembru.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 04. PAKET 4 — MARKETING & ANALITIKA */}
        <section id="paket-4" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-[#c8102e] text-white font-mono font-bold flex items-center justify-center text-sm">
                04
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Paket 4 — Marketing, Analitika & Kontrola poslovanja
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Precizno merenje gde odlazi svaki marketinški dinar i automatsko građenje najbolje reputacije u južnoj Srbiji.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                4.1 Meta & Google Conversion API (Praćenje stvarnih kupovina i test vožnji)
              </h3>
              <p className="text-base sm:text-lg text-neutral-300">
                Najmodernije serversko praćenje koje tačno meri koji sponzorisani oglas na Instagramu ili Google-u donosi stvarna zakazivanja i prodaju, a koji samo troši budžet. Kraj rasipanju novca na "lažne preglede".
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                4.2 Dashboard za direktora i vlasnika (Kontrolna soba poslovanja)
              </h3>
              <p className="text-base sm:text-lg text-neutral-300">
                Pregled na jednom ekranu: broj upita po modelima, brzina reakcije prodavaca, stopa uspešnosti, najgledanija vozila i popunjenost servisa za narednih 14 dana. Pristup sa telefona bilo gde u svetu.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                4.3 Automatizovano prikupljanje Google recenzija (5 zvezdica za Car Box)
              </h3>
              <p className="text-base sm:text-lg text-neutral-300">
                Dva sata nakon uspešnog servisa ili kupovine, klijentu stiže kratka molba za ocenu na Google Maps-u. Ovo diže Car Box na prvo mesto Google pretrage za auto servise i salone u Nišu i celom regionu.
              </p>
            </div>
          </div>
        </section>

        {/* 05. PAKET 5 — PREMIUM TEHNOLOGIJE */}
        <section id="paket-5" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-[#c8102e] text-white font-mono font-bold flex items-center justify-center text-sm">
                05
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Paket 5 — Premium Dodaci (Digitalni WOW faktor)
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Tehnologije koje vas izdvajaju iznad bilo kog konkurenta i pozicioniraju Car Box kao najnapredniji auto centar u zemlji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#ff4d5a] uppercase font-bold">5.1 Modul</span>
              <h3 className="text-xl font-bold text-white">3D Konfigurator za više modela</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Proširenje postojećeg 3D salona na sve ključne modele gde kupac u 3D-u menja boje, felne i nivoe opreme sa automatskim proračunom cene.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#ff4d5a] uppercase font-bold">5.2 Modul</span>
              <h3 className="text-xl font-bold text-white">360° Virtuelni enterijer polovnih vozila</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Snimljeno običnim telefonom: kupac sa računara ili mobilnog može "ući" u polovno vozilo i detaljno pogledati sedišta, volan i kontrolnu tablu.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#ff4d5a] uppercase font-bold">5.3 Modul</span>
              <h3 className="text-xl font-bold text-white">Video poziv sa prodavcem ("Live Walkaround")</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Omogućava kupcima iz Pirota, Leskovca, Vranja, Prištine ili Beograda da zakažu 10-minutni video poziv sa prodavcem koji telefonom obilazi auto u salonu.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/70 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#ff4d5a] uppercase font-bold">5.4 Modul</span>
              <h3 className="text-xl font-bold text-white">Specijalizovano Moto & ATV krilo</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Zaseban portal za Vespa, Segway i ATV program sa opremom, delovima, sezonskim akcijama i rent-a-kvad uslugama.
              </p>
            </div>
          </div>
        </section>

        {/* 06. NAŠE STRATEŠKE PREPORUKE */}
        <section id="nase-dopune" className="space-y-8 scroll-mt-24 pt-8 border-t-2 border-[#c8102e]/60">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-lg bg-[#c8102e] text-white font-mono font-bold text-xs uppercase tracking-widest">
                NAŠA EKSPERTSKA DOPUNA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Ključne stvari koje donose novac, a nisu bile u prvom planu
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-300">
              Ovo su 4 visokoprofitabilne funkcije specifične za poslovanje u Nišu i južnoj Srbiji koje direktno podižu promet:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dopuna 1: B2B Flotna prodaja */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14141c] to-neutral-950 border border-white/15 space-y-4">
              <div className="flex items-center space-x-3 text-[#ff4d5a]">
                <Building2 className="w-6 h-6" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">Preporuka 01</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                B2B Flotni portal i N1 privredna vozila sa 100% odbitkom PDV-a
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Kompanije u Nišu i industrijskim zonama (jugoistočna Srbija) kupuju po 3 do 10 vozila odjednom. 
                Sajt treba da ima namensku B2B stranicu sa TCO kalkulatorom (trošak po kilometru, niska potrošnja hibrida, servisni paketi za firme) 
                i brzim slanjem korporativnih ponuda.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                ROI: Samo jedan sklopljen flotni ugovor sa lokalnom kompanijom donosi preko 80.000–150.000 € prometa.
              </div>
            </div>

            {/* Dopuna 2: QR kodovi na fizičkom placu */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14141c] to-neutral-950 border border-white/15 space-y-4">
              <div className="flex items-center space-x-3 text-[#ff4d5a]">
                <QrCode className="w-6 h-6" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">Preporuka 02</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Salon i Plac QR Kodovi ("Digitalni prodavac koji radi 24/7")
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Svako vozilo na placu u Nišu dobija nalepnicu sa QR kodom na bočnom staklu. 
                Kada prolaznik u nedelju popodne ili uveče (dok je salon zatvoren) skenira kod telefonom, 
                odmah vidi cenu, opremu, video zvuka motora i dugme <em>"Zakaži test vožnju za ponedeljak u 9h"</em>.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                ROI: Vaš fizički plac na Bulevaru prodaje automobile 24 sata dnevno bez ijednog angažovanog radnika.
              </div>
            </div>

            {/* Dopuna 3: Viber & WhatsApp Lead Connect */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14141c] to-neutral-950 border border-white/15 space-y-4">
              <div className="flex items-center space-x-3 text-[#ff4d5a]">
                <PhoneCall className="w-6 h-6" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">Preporuka 03</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Viber & WhatsApp Instant Lead Connect (1-klik kontakt)
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                U južnoj Srbiji preko 80% brze komunikacije ide preko Vibera. Pored svakog vozila postavlja se dugme 
                "Pitaj prodavca na Viberu". Klikom se na telefonu kupca otvara čet sa unapred napisanom porukom: 
                <em>"Pozdrav, gledam Honda Civic RS (ID: 104) na vašem sajtu, da li je auto slobodan za pregled?"</em>.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                ROI: Eliminiše popunjavanje dosadnih formi. Prodavac odmah ima broj telefona kupca u svom imeniku.
              </div>
            </div>

            {/* Dopuna 4: Courtesy Car */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14141c] to-neutral-950 border border-white/15 space-y-4">
              <div className="flex items-center space-x-3 text-[#ff4d5a]">
                <Car className="w-6 h-6" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">Preporuka 04</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Zamensko vozilo tokom servisa (Courtesy Car Modul)
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Prilikom online zakazivanja servisa, klijent jednim klikom rezerviše zamensko vozilo za vreme popravke. 
                Ovo uklanja najveći strah klijenata: da će ostati bez prevoza dok im je auto na redovnom servisu.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                ROI: Premijum nivo usluge koji u potpunosti eliminiše prelazak klijenata kod neovlašćenih servisa.
              </div>
            </div>
          </div>
        </section>

        {/* 07. FAZE IMPLEMENTACIJE I POSLOVNI ROI */}
        <section id="faze-i-roi" className="space-y-8 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-sm">
                07
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Plan realizacije po fazama i Poslovni ROI
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-400">
              Da projekat ne bi delovao preobimno, predlažemo jasnu implementaciju u 3 faze:
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-900 border-l-4 border-[#c8102e] border-t border-r border-b border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white">FAZA 1 (15–20 dana): Temelj i zvanično puštanje u rad</h3>
                <span className="text-xs font-mono text-[#ff4d5a] font-bold">KRITIČNI PRIORITET</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300">
                Izrada centralnog Admin Panela za lager, povezivanje svih formi sa bazom i instant Viber/email notifikacijama prodavcima, unikatne stranice za svako vozilo, zamena mock podataka stvarnim cenama i optimizacija brzine sajta.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border-l-4 border-amber-500 border-t border-r border-b border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white">FAZA 2 (20–35 dana): Prodajni akcelerator & Servis</h3>
                <span className="text-xs font-mono text-amber-400 font-bold">PRODAJA & SERVIS</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300">
                Dvosmerna sinhronizacija sa Polovnim Automobilima, pametni kalendar za test vožnju sa SMS podsetnicima, online zakazivanje servisa sa automatizovanim podsetnicima za redovno održavanje i kalkulator lizinga.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border-l-4 border-emerald-500 border-t border-r border-b border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white">FAZA 3 (35–60 dana): Automatizacija, AI & B2B Flote</h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">PREMIUM & RAST</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300">
                AI Prodajni asistent obučen na lageru, digitalna garaža kupca, QR kodovi za salon i plac, B2B modul za privredu i napredni dashboard za direktora.
              </p>
            </div>
          </div>

          {/* Poslovna računica */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-white/20 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <span>Matematika za vlasnika: Kako se ovaj projekat isplaćuje?</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base">
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="text-2xl font-extrabold text-emerald-400">+2 do 3 vozila</div>
                <div className="text-xs font-mono text-neutral-400 uppercase">PRODAJA NOVIH VOZILA</div>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Ako sajt zahvaljujući brzini odgovora, lizing kalkulatoru i test vožnjama proda samo 2 do 3 dodatna automobila godišnje, <strong>kompletna investicija u sajt i softver je već u prvih 6 meseci 100% otplaćena</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="text-2xl font-extrabold text-emerald-400">+15.000 € / god</div>
                <div className="text-xs font-mono text-neutral-400 uppercase">PRIHOD SERVISA</div>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Automatski SMS/Viber podsetnici vraćaju klijente na redovan servis. Samo 15 dodatnih servisa mesečno generiše preko <strong>15.000 do 25.000 € čistog prihoda servisa godišnje</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="text-2xl font-extrabold text-emerald-400">40 sati mesečno</div>
                <div className="text-xs font-mono text-neutral-400 uppercase">UŠTEDA RADNOG VREMENA</div>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Sinhronizacija sa Polovnim Automobilima i automatske forme štede pola radnog vremena jednog zaposlenog, koji to vreme umesto unosa oglasa troši na <strong>direktan kontakt sa kupcima</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 08. TEHNIČKI DUG PRE ZVANIČNOG PUŠTANJA */}
        <section className="space-y-6 scroll-mt-24 pt-8 border-t border-neutral-850">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-xl bg-neutral-800 text-white font-mono font-bold flex items-center justify-center text-sm">
              08
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Tehnički koraci pre zvaničnog lansiranja
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-neutral-300">
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
              <strong className="text-white">• GLB Draco Kompresija:</strong>
              <p className="text-xs sm:text-sm text-neutral-400">Smanjivanje 3D modela sa 20 MB na 3–4 MB radi munjevitog učitavanja na mobilnim mrežama.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
              <strong className="text-white">• Prave fotografije sa lagera:</strong>
              <p className="text-xs sm:text-sm text-neutral-400">Zamena privremenih demo slika stvarnim fotografijama vozila iz vašeg salona i placa.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
              <strong className="text-white">• Tačni zvanični podaci:</strong>
              <p className="text-xs sm:text-sm text-neutral-400">Unos stvarnih fiksnih telefona, radnog vremena odeljenja, PIB-a i zvaničnih podataka firme.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
              <strong className="text-white">• Pravna usklađenost (ZZPL):</strong>
              <p className="text-xs sm:text-sm text-neutral-400">Politika privatnosti i saglasnost za obradu podataka o ličnosti na svim kontakt formama.</p>
            </div>
          </div>
        </section>

        {/* Bottom Closing Action CTA */}
        <div className="pt-12 pb-16 border-t border-neutral-800 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Spremni za sledeći korak?
          </h3>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Temelj je postavljen i dokazao je kvalitet. Možemo odmah startovati sa Fazom 1 i omogućiti vašem timu 
            da kroz centralni admin panel počne sa unosom pravog lagera.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#e60012] to-[#b3000e] hover:from-[#ff1a2b] hover:to-[#c8102e] text-white text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(230,0,18,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <span>Pregledaj ponovo Car Box Demo Sajt</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <Printer className="w-4 h-4 text-[#c8102e]" />
              <span>Sačuvaj ovaj dokument (PDF)</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
