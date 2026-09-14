import { INVENTORY_VEHICLES, type Vehicle } from './content/cars';

export type PretragaKriterijumi = {
  tekst: string;
  maksCenaEur?: number;
  minCenaEur?: number;
  kategorija?: 'novo' | 'polovno' | 'moto' | 'atv';
  karoserija?: string;
  gorivo?: string;
  menjac?: string;
  brend?: string;
  namere: string[];
};

export type PretragaRezultat = {
  kriterijumi: PretragaKriterijumi;
  vozila: Vehicle[];
  objasnjenje: string[];
};

export function parsirajUpit(upit: string): PretragaKriterijumi {
  const norm = upit.toLowerCase().trim();
  const namere: string[] = [];
  const kriterijumi: PretragaKriterijumi = { tekst: upit, namere };

  // 1. Cenovni parsing ("do 30000", "do 35k", "do 40 hiljada", "oko 25.000")
  const cenaMatchDo = norm.match(/do\s*(\d+(?:[.,]\d+)?)\s*(k|hiljad[ae]?|000)?/i);
  if (cenaMatchDo) {
    let iznos = parseFloat(cenaMatchDo[1].replace(',', '.'));
    if (cenaMatchDo[2] && (cenaMatchDo[2].toLowerCase() === 'k' || cenaMatchDo[2].toLowerCase().startsWith('hiljad'))) {
      iznos *= 1000;
    } else if (iznos < 150) {
      iznos *= 1000; // npr "do 35" -> 35000
    }
    kriterijumi.maksCenaEur = iznos;
    namere.push(`Budžet do ${iznos.toLocaleString('sr-RS')} €`);
  }

  // 2. Brend parsing
  if (norm.includes('honda')) {
    kriterijumi.brend = 'Honda';
    namere.push('Brend: Honda');
  } else if (norm.includes('peugeot') || norm.includes('pezzo') || norm.includes('pezo')) {
    kriterijumi.brend = 'Peugeot';
    namere.push('Brend: Peugeot');
  } else if (norm.includes('opel')) {
    kriterijumi.brend = 'Opel';
    namere.push('Brend: Opel');
  } else if (norm.includes('suzuki')) {
    kriterijumi.brend = 'Suzuki';
    namere.push('Brend: Suzuki');
  } else if (norm.includes('vespa') || norm.includes('piaggio')) {
    kriterijumi.brend = 'Vespa';
    namere.push('Brend: Vespa / Piaggio');
  } else if (norm.includes('segway') || norm.includes('kvad') || norm.includes('atv')) {
    kriterijumi.brend = 'Segway';
    namere.push('Segment: ATV & Kvad');
  }

  // 3. Karoserija & Namena
  if (norm.includes('suv') || norm.includes('dzip') || norm.includes('terenac') || norm.includes('4x4')) {
    kriterijumi.karoserija = 'SUV';
    namere.push('Tip: SUV / Povišeni klirens');
  } else if (norm.includes('porodic') || norm.includes('deca') || norm.includes('velik')) {
    kriterijumi.karoserija = 'SUV';
    namere.push('Namena: Prostrano porodično vozilo');
  } else if (norm.includes('grad') || norm.includes('mali') || norm.includes('kompakt') || norm.includes('hecbek') || norm.includes('hečbek')) {
    kriterijumi.karoserija = 'Hečbek';
    namere.push('Namena: Okretno gradsko vozilo');
  } else if (norm.includes('motor') || norm.includes('skuter') || norm.includes('dvotockas')) {
    kriterijumi.kategorija = 'moto';
    namere.push('Kategorija: Moto & Skuteri');
  }

  // 4. Gorivo & Pogon
  if (norm.includes('hibrid') || norm.includes('hybrid') || norm.includes('e:hev') || norm.includes('struj')) {
    kriterijumi.gorivo = 'Hibrid';
    namere.push('Pogon: Hibridni / e:HEV');
  } else if (norm.includes('dizel')) {
    kriterijumi.gorivo = 'Dizel';
    namere.push('Gorivo: Dizel');
  } else if (norm.includes('benzin')) {
    kriterijumi.gorivo = 'Benzin';
    namere.push('Gorivo: Benzin');
  }

  // 5. Menjač
  if (norm.includes('automatik') || norm.includes('automatski')) {
    kriterijumi.menjac = 'Automatik';
    namere.push('Menjač: Automatik');
  }

  // 6. Novo vs Polovno
  if (norm.includes('nov') || norm.includes('nova') || norm.includes('novo')) {
    kriterijumi.kategorija = 'novo';
    namere.push('Stanje: Nova vozila (0 km)');
  } else if (norm.includes('polovn') || norm.includes('koriscen') || norm.includes('korišćen')) {
    kriterijumi.kategorija = 'polovno';
    namere.push('Stanje: Sertifikovana polovna vozila');
  }

  return kriterijumi;
}

export function pretraziVozila(upit: string): PretragaRezultat {
  const kriterijumi = parsirajUpit(upit);
  const norm = upit.toLowerCase().trim();

  if (!norm) {
    return {
      kriterijumi,
      vozila: INVENTORY_VEHICLES,
      objasnjenje: ['Kompletan lager vozila Car Box Niš (Novo, Polovno, Moto & ATV)'],
    };
  }

  const filtrirano = INVENTORY_VEHICLES.filter((v) => {
    if (kriterijumi.maksCenaEur && v.priceEur > kriterijumi.maksCenaEur) return false;
    if (kriterijumi.minCenaEur && v.priceEur < kriterijumi.minCenaEur) return false;
    if (kriterijumi.kategorija && v.category !== kriterijumi.kategorija) return false;
    if (kriterijumi.brend && v.brand.toLowerCase() !== kriterijumi.brend.toLowerCase()) return false;
    if (kriterijumi.karoserija && !v.bodyType.toLowerCase().includes(kriterijumi.karoserija.toLowerCase())) return false;
    if (kriterijumi.gorivo && !v.fuel.toLowerCase().includes(kriterijumi.gorivo.toLowerCase())) return false;
    if (kriterijumi.menjac && !v.transmission.toLowerCase().includes(kriterijumi.menjac.toLowerCase())) return false;

    // Keyword match on model, brand, tags, highlight
    if (kriterijumi.namere.length === 0) {
      const matchKeywords =
        v.model.toLowerCase().includes(norm) ||
        v.brand.toLowerCase().includes(norm) ||
        v.tags.some((t) => t.toLowerCase().includes(norm)) ||
        v.highlight.toLowerCase().includes(norm);
      return matchKeywords;
    }

    return true;
  });

  return {
    kriterijumi,
    vozila: filtrirano.length > 0 ? filtrirano : INVENTORY_VEHICLES.slice(0, 3),
    objasnjenje:
      kriterijumi.namere.length > 0
        ? kriterijumi.namere
        : [`Prikaz rezultata za upit: "${upit}"`],
  };
}
