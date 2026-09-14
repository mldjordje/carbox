'use client';

import { useState } from 'react';
import { Preloader } from '@/components/landing/Preloader';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ManifestSection } from '@/components/landing/ManifestSection';
import { ThreeSection } from '@/components/landing/ThreeSection';
import { BrandsSection } from '@/components/landing/BrandsSection';
import { InventorySection } from '@/components/landing/InventorySection';
import { TradeInSection } from '@/components/landing/TradeInSection';
import { FinanceCalculatorSection } from '@/components/landing/FinanceCalculatorSection';
import { MotoATVSection } from '@/components/landing/MotoATVSection';
import { ServiceSection } from '@/components/landing/ServiceSection';
import { ContactFooterSection } from '@/components/landing/ContactFooterSection';
import { MobileBottomBar } from '@/components/ui/MobileBottomBar';
import { VehicleModal } from '@/components/ui/VehicleModal';
import { TestDriveModal } from '@/components/ui/TestDriveModal';
import { Vehicle } from '@/lib/content/cars';

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [testDriveVehicle, setTestDriveVehicle] = useState<Vehicle | null>(null);

  const handleOpenTestDrive = (vehicle?: Vehicle) => {
    setTestDriveVehicle(vehicle || null);
    setTestDriveOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#08080a] text-[#f2f0eb] selection:bg-[#c8102e] selection:text-white pb-16 lg:pb-0">
      {/* Cinematic Luxury Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Luxury Navigation */}
      <Navbar
        onOpenTestDrive={() => handleOpenTestDrive()}
        onSelectBrand={(brandId) => {
          const el = document.getElementById('lager');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S01: Hero Statement (No 3D Model here) */}
      <HeroSection
        onOpenTestDrive={() => handleOpenTestDrive()}
      />

      {/* S02: Silent Editorial Manifest & Key Pillars */}
      <ManifestSection />

      {/* S03: 3D Digital Showroom (Civic RS & CR-V 2026) */}
      <ThreeSection
        onOpenTestDrive={() => handleOpenTestDrive()}
      />

      {/* S04: Brand Ecosystem */}
      <BrandsSection
        onSelectBrand={(brandId) => {
          const el = document.getElementById('lager');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S05: Inventory & Natural Language Search */}
      <InventorySection
        onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
        onOpenFinanceModal={(vehicle) => {
          const el = document.getElementById('finansiranje');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S06: "Staro za Novo" Certified Trade-In */}
      <TradeInSection />

      {/* S07: Finance & Leasing Calculator */}
      <FinanceCalculatorSection />

      {/* S08: Moto & Powersports */}
      <MotoATVSection
        onOpenTestRide={() => handleOpenTestDrive()}
      />

      {/* S09: Service Center */}
      <ServiceSection />

      {/* S10: Location & Footer */}
      <ContactFooterSection />

      {/* Mobile-First Floating Thumb Bar */}
      <MobileBottomBar
        onOpenTestDrive={() => handleOpenTestDrive()}
      />

      {/* Interactive Modals */}
      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onOpenTestDrive={(vehicle) => handleOpenTestDrive(vehicle)}
      />

      <TestDriveModal
        isOpen={testDriveOpen}
        onClose={() => setTestDriveOpen(false)}
        initialVehicle={testDriveVehicle}
      />
    </main>
  );
}
