export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  category: 'auto' | 'moto' | 'atv';
  origin: string;
  description: string;
  modelsCount: string;
  badge: string;
  accentColor: string;
  image: string;
}

export const CARBOX_BRANDS: BrandInfo[] = [
  {
    id: 'honda',
    name: 'Honda',
    tagline: 'e:HEV Hibridna Tehnologija',
    category: 'auto',
    origin: 'Japan',
    description: 'Vodeća japanska hibridna efikasnost i pouzdanost. Zvanični ovlašćeni diler i servisni centar.',
    modelsCount: 'Civic RS · CR-V 2026 · HR-V · ZR-V',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#E60012',
    image: '/images/unnamed (5).webp', // Real Car Box Honda facade
  },
  {
    id: 'peugeot',
    name: 'Peugeot',
    tagline: 'Panoramski i-Cockpit & Avangarda',
    category: 'auto',
    origin: 'Francuska',
    description: 'Najnovija generacija fastback i SUV modela izložena u Car Box salonu u Nišu.',
    modelsCount: '208 · 2008 · 3008 GT · 408 Fastback',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#0055A5',
    image: '/images/unnamed (1).webp', // Real Car Box Peugeot 3008 GT on showroom floor
  },
  {
    id: 'opel',
    name: 'Opel',
    tagline: 'Nemački Inženjering & Intelli-Lux',
    category: 'auto',
    origin: 'Nemačka',
    description: 'Poseban Opel izložbeni salon u sklopu centra Car Box sa kompletnom ponudom novih modela.',
    modelsCount: 'Astra GS · Corsa · Crossland · Mokka',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#FFE600',
    image: '/images/unnamed (2).webp', // Real Car Box Opel showroom floor
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    tagline: 'AllGrip 4x4 Pogon · Euro Sumar',
    category: 'auto',
    origin: 'Japan',
    description: 'Kompletna gama Suzuki putničkih i 4x4 vozila u ovlašćenom partnerstvu sa Euro Sumar.',
    modelsCount: 'Vitara AllGrip · S-Cross · Swift · Ignis',
    badge: 'Partnerska Prodaja & Servis',
    accentColor: '#003399',
    image: '/images/unnamed (4).webp', // Real Car Box Suzuki showroom
  },
  {
    id: 'honda-moto',
    name: 'Honda Motocikli',
    tagline: 'Sloboda na Dva Točka',
    category: 'moto',
    origin: 'Japan',
    description: 'Namensko moto krilo u Nišu: naked, adventure, touring mašine i gradski skuteri.',
    modelsCount: 'CB650R · Transalp · Africa Twin · PCX 125',
    badge: 'Ovlašćeni Moto Centar',
    accentColor: '#E60012',
    image: '/images/unnamed (3).webp', // Real Car Box Honda Moto showroom floor
  },
  {
    id: 'jetour',
    name: 'JETOUR',
    tagline: 'Drive Your Future · Premijum SUV',
    category: 'auto',
    origin: 'Global',
    description: 'Inovativni premijum SUV modeli sa prostranim enterijerom, bogatom opremom i garancijom.',
    modelsCount: 'Dashing · X70 Plus · T2 4x4',
    badge: 'Ovlašćeni Zastupnik',
    accentColor: '#00D2FF',
    image: '/images/unnamed (7).webp', // Real Peugeot 408 / facility flags
  },
  {
    id: 'piaggio-vespa',
    name: 'Piaggio & Vespa',
    tagline: 'Italijanska Ikona Urbana Mobilnosti',
    category: 'moto',
    origin: 'Italija',
    description: 'Zvanični uvoz i ovlašćeni servis za Piaggio, Vespa, Aprilia i Moto Guzzi dvotočkaše.',
    modelsCount: 'Vespa Primavera · GTS 300 · Aprilia SR GT',
    badge: 'Ovlašćeni Zastupnik',
    accentColor: '#00A859',
    image: '/images/unnamed (5).webp', // Real Car Box exterior with Vespa
  },
  {
    id: 'segway-atv',
    name: 'Segway Powersports',
    tagline: 'Fear No Place · Kvadovi & SSV',
    category: 'atv',
    origin: 'SAD / Global',
    description: 'Terenski program sa blokadom diferencijala, vitlom i mobilnom telemetrijom.',
    modelsCount: 'Snarler AT6 · Fugleman UT10 · Loncin',
    badge: 'Ovlašćeni Distributer',
    accentColor: '#00D2FF',
    image: '/images/unnamed (8).webp', // Real Car Box high-angle facility
  },
];
