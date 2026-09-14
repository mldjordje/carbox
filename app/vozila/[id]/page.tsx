import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INVENTORY_VEHICLES, getVehicleById, getVehicleEquipment } from '@/lib/content/cars';
import { VehicleDetailClient } from './VehicleDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return INVENTORY_VEHICLES.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  if (!vehicle) return { title: 'Vozilo nije pronađeno · Car Box Niš' };

  return {
    title: `${vehicle.brand} ${vehicle.model} (${vehicle.year}) · Car Box Niš | Cena, Oprema i Finansiranje`,
    description: `${vehicle.highlight} Zvanična cena: ${vehicle.priceEur.toLocaleString('sr-RS')} € (od ${vehicle.monthlyEstimateEur} €/mes). Posetite Car Box salon u Nišu, Bulevar cara Konstantina 80-82.`,
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  const equipment = getVehicleEquipment(vehicle);
  const relatedVehicles = INVENTORY_VEHICLES.filter((v) => v.id !== vehicle.id).slice(0, 3);

  return (
    <VehicleDetailClient
      vehicle={vehicle}
      equipment={equipment}
      relatedVehicles={relatedVehicles}
    />
  );
}
