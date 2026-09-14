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
    description: 'Vodeća japanska hibridna efikasnost i sportska tradicija. Ovlašćena prodaja i servis.',
    modelsCount: 'Civic RS · CR-V · HR-V · ZR-V',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#E60012',
    image: '/images/unnamed (1).webp',
  },
  {
    id: 'peugeot',
    name: 'Peugeot',
    tagline: 'Panoramski i-Cockpit & Dizajn',
    category: 'auto',
    origin: 'Francuska',
    description: 'Avangardni fastback SUV modeli, premijum materijali i hibridni pogoni nove generacije.',
    modelsCount: '208 · 2008 · 3008 GT · 408 · 5008',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#0055A5',
    image: '/images/unnamed (7).webp',
  },
  {
    id: 'opel',
    name: 'Opel',
    tagline: 'Nemački Inženjering & Intelli-Lux',
    category: 'auto',
    origin: 'Nemačka',
    description: 'Čist Opel Vizor dizajn, Intelli-Lux Pixel LED svetla i ergonomska AGR sedišta.',
    modelsCount: 'Astra GS · Mokka · Corsa · Grandland',
    badge: 'Ovlašćeni Diler & Servis',
    accentColor: '#FFE600',
    image: '/images/unnamed (9).webp',
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    tagline: 'AllGrip 4x4 Pogon (Euro Sumar)',
    category: 'auto',
    origin: 'Japan',
    description: 'Legendarna pouzdanost i dokazani pogon na svim točkovima u partnerstvu sa Euro Sumar.',
    modelsCount: 'Vitara Hybrid · S-Cross · Swift · Ignis',
    badge: 'Partnerska Prodaja',
    accentColor: '#003399',
    image: '/images/unnamed (2).webp',
  },
  {
    id: 'jetour',
    name: 'Jetour',
    tagline: 'Drive Your Future · Premijum SUV',
    category: 'auto',
    origin: 'Global',
    description: 'Luksuzni SUV modeli sa vrhunskom opremom, prostranim enterijerom i naprednom tehnologijom.',
    modelsCount: 'Dashing · X70 Plus · T2 4x4',
    badge: 'Ovlašćeni Zastupnik',
    accentColor: '#00D2FF',
    image: '/images/unnamed (3).webp',
  },
  {
    id: 'honda-moto',
    name: 'Honda Motocikli',
    tagline: 'Sloboda na Dva Točka',
    category: 'moto',
    origin: 'Japan',
    description: 'Od okretnih gradskih skutera do supersportskih i adventure šampiona sveta.',
    modelsCount: 'PCX 125 · Forza 350 · CB650R · Africa Twin',
    badge: 'Ovlašćeni Moto Centar',
    accentColor: '#E60012',
    image: '/images/unnamed (4).webp',
  },
  {
    id: 'piaggio-vespa',
    name: 'Piaggio & Vespa',
    tagline: 'Italijanska Ikona Stila',
    category: 'moto',
    origin: 'Italija',
    description: 'Zvanična prodaja i servis za Vespa, Piaggio, Aprilia i Moto Guzzi.',
    modelsCount: 'Vespa Primavera · GTS 300 · Aprilia SR GT',
    badge: 'Zvanični Zastupnik',
    accentColor: '#00A859',
    image: '/images/unnamed (5).webp',
  },
  {
    id: 'segway-atv',
    name: 'Segway Powersports',
    tagline: 'Fear No Place · Kvadovi & SSV',
    category: 'atv',
    origin: 'SAD / Global',
    description: 'Snažni 4x4 terenci sa blokadom diferencijala, vitlom i mobilnom telemetrijom.',
    modelsCount: 'Snarler AT6 · Fugleman UT10 · Loncin',
    badge: 'Ovlašćeni Distributer',
    accentColor: '#00D2FF',
    image: '/images/unnamed (6).webp',
  },
];
