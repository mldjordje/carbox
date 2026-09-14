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
    tagline: 'The Power of Dreams · e:HEV Tehnologija',
    category: 'auto',
    origin: 'Japan',
    description: 'Vodeća japanska hibridna tehnologija i sportska tradicija. Ovlašćena prodaja i servis za kompletnu gamu.',
    modelsCount: 'Civic RS · CR-V · HR-V · ZR-V · Jazz',
    badge: 'Ovlašćeni Diler & Serviser',
    accentColor: '#E60012',
    image: '/images/unnamed (1).webp',
  },
  {
    id: 'peugeot',
    name: 'Peugeot',
    tagline: 'The Language of Attraction',
    category: 'auto',
    origin: 'Francuska',
    description: 'Avangardni dizajn, panoramski i-Cockpit i elektrifikovani pogoni nove generacije.',
    modelsCount: '208 · 2008 · 308 · 3008 · 408 · 5008',
    badge: 'Ovlašćeni Diler & Serviser',
    accentColor: '#0055A5',
    image: '/images/unnamed (7).webp',
  },
  {
    id: 'opel',
    name: 'Opel',
    tagline: 'Zukunft gehört allen · Nemačka Preciznost',
    category: 'auto',
    origin: 'Nemačka',
    description: 'Čist i hrabar dizajn (Opel Vizor), vrhunska Intelli-Lux svetla i ergonomska AGR sedišta.',
    modelsCount: 'Corsa · Astra · Mokka · Grandland · Frontera',
    badge: 'Ovlašćeni Diler & Serviser',
    accentColor: '#FFE600',
    image: '/images/unnamed (9).webp',
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    tagline: 'Way of Life! · Dokazani 4x4 Pogon',
    category: 'auto',
    origin: 'Japan',
    description: 'Legendarna pouzdanost, AllGrip pogon na svim točkovima i pristupačna hibridna efikasnost.',
    modelsCount: 'Swift · Vitara · S-Cross · Jimny · Ignis',
    badge: 'Partnerska Prodaja & Servis',
    accentColor: '#003399',
    image: '/images/unnamed (2).webp',
  },
  {
    id: 'honda-moto',
    name: 'Honda Motorcycles',
    tagline: 'Sloboda na Dva Točka',
    category: 'moto',
    origin: 'Japan',
    description: 'Svetski šampion u pouzdanosti i performansama, od gradskih skutera do supersportskih mašina.',
    modelsCount: 'PCX 125 · Forza 350 · CB650R · Africa Twin',
    badge: 'Ovlašćeni Moto Centar',
    accentColor: '#E60012',
    image: '/images/unnamed (4).webp',
  },
  {
    id: 'piaggio-vespa',
    name: 'Piaggio & Vespa Group',
    tagline: 'Italijanska Ikona Urbana Mobilnosti',
    category: 'moto',
    origin: 'Italija',
    description: 'Zvanični uvoz i servis za Vespa, Piaggio, Aprilia i Moto Guzzi dvotočkaše.',
    modelsCount: 'Vespa Primavera · GTS Super · Aprilia SR GT',
    badge: 'Ovlašćeni Zastupnik',
    accentColor: '#00A859',
    image: '/images/unnamed (5).webp',
  },
  {
    id: 'segway-atv',
    name: 'Segway Powersports',
    tagline: 'Fear No Place · Pametni Kvadovi i UTV',
    category: 'atv',
    origin: 'SAD / Global',
    description: 'Nova definicija terenske vožnje sa Smart Commanding telemetrijom i hibridnim pogonom.',
    modelsCount: 'Snarler AT6 · Fugleman UT10 · Villain SX10',
    badge: 'Ovlašćeni ATV Distributer',
    accentColor: '#00D2FF',
    image: '/images/unnamed (6).webp',
  },
];
