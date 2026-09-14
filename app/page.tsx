'use client';

import { useState } from 'react';
import { Preloader } from '@/components/landing/Preloader';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ManifestSection } from '@/components/landing/ManifestSection';
import { ThreeSection } from '@/components/landing/ThreeSection';
import { ShowroomGallerySection } from '@/components/landing/ShowroomGallerySection';
import { ReelsSection } from '@/components/landing/ReelsSection';
import { BrandsSection } from '@/components/landing/BrandsSection';
import { InventorySection } from '@/components/landing/InventorySection';
import { TradeInSection } from '@/components/landing/TradeInSection';
import { FinanceCalculatorSection } from '@/components/landing/FinanceCalculatorSection';
import { MotoATVSection } from '@/components/landing/MotoATVSection';
import { ServiceSection } from '@/components/landing/ServiceSection';
import { ContactFooterSection } from '@/components/landing/ContactFooterSection';
import { MobileBottomBar } from '@/components/ui/MobileBottomBar';
import { CustomCursor } from '@/components/ui/CustomCursor';
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
      {/* Luxury Custom Magnetic Cursor (Desktop only) */}
      <CustomCursor />

      {/* Cinematic Luxury Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Luxury Navigation */}
      <Navbar
        onOpenTestDrive={() => handleOpenTestDrive()}
        onSelectBrand={(brandId) => {
          const el = document.getElementById('brendovi');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S01: Awwwards Video Hero + Instagram Stories Ribbon */}
      <HeroSection
        onOpenTestDrive={() => handleOpenTestDrive()}
        onSelectBrand={(brandId) => {
          const el = document.getElementById('brendovi');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S02: Silent Editorial Manifest with 4.500 m² Real Showroom Photo */}
      <ManifestSection />

      {/* S03: 3D Digital Showroom (Civic RS & CR-V 2026) with Pinned Hotspots & Camera Presets */}
      <ThreeSection
        onOpenTestDrive={() => handleOpenTestDrive()}
      />

      {/* S04: NEW Authentic Showroom & Complex Master Gallery (Real Car Box Facility) */}
      <ShowroomGallerySection />

      {/* S05: Instagram Reels & Showroom Live Atmosphere */}
      <ReelsSection />

      {/* S06: Brand Ecosystem & Story (Real Car Box Branded Showrooms) */}
      <BrandsSection
        onSelectBrand={(brandId) => {
          const el = document.getElementById('lager');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S07: Minimalist Inventory & Natural Language Search */}
      <InventorySection
        onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
        onOpenFinanceModal={(vehicle) => {
          const el = document.getElementById('finansiranje');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* S08: "Staro za Novo" Certified Trade-In */}
      <TradeInSection />

      {/* S09: Finance & Leasing Calculator */}
      <FinanceCalculatorSection />

      {/* S10: Moto & Powersports Hub */}
      <MotoATVSection
        onOpenTestRide={() => handleOpenTestDrive()}
      />

      {/* S11: Service Center */}
      <ServiceSection />

      {/* S12: Location, Authentic Exterior Building & Footer */}
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
