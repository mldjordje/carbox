export interface Vehicle {
  id: string;
  brand: 'Honda' | 'Peugeot' | 'Opel' | 'Suzuki' | 'Vespa' | 'Aprilia' | 'Segway';
  model: string;
  badge?: string;
  category: 'novo' | 'polovno' | 'moto' | 'atv';
  bodyType: 'SUV' | 'Hečbek' | 'Sedan' | 'Krosover' | 'Motor' | 'Skuter' | 'ATV / Kvad';
  year: number;
  priceEur: number;
  monthlyEstimateEur: number;
  mileageKm: number;
  fuel: 'e:HEV Hibrid' | 'Plug-in Hibrid' | 'Benzin' | 'Dizel' | 'Električni';
  transmission: 'e-CVT Automatik' | '8-stepeni Automatik' | 'Manuelni 6 brzina' | 'CVT Automatik';
  powerHp: number;
  engineCc: number;
  has3D?: boolean;
  model3DId?: 'civic' | 'crv';
  image: string;
  gallery: string[];
  tags: string[];
  highlight: string;
  specs: {
    acceleration: string;
    topSpeed: string;
    consumption: string;
    trunk: string;
    warranty: string;
  };
  equipment?: {
    safety: string[];
    interior: string[];
    multimedia: string[];
    exterior: string[];
  };
  colors?: { name: string; hex: string }[];
  detailedSpecs?: {
    engineType?: string;
    torque?: string;
    dimensions?: string;
    curbWeight?: string;
    fuelTankCapacity?: string;
    batteryCapacity?: string;
    emissions?: string;
    serviceInterval?: string;
  };
}

export interface VehicleEquipment {
  safety: string[];
  interior: string[];
  multimedia: string[];
  exterior: string[];
}

export interface VehicleColor {
  name: string;
  hex: string;
}

export const DEFAULT_CAR_COLORS: VehicleColor[] = [
  { name: 'Sonic Grey Pearl', hex: '#545e65' },
  { name: 'Platinum White Pearl', hex: '#f0f2f5' },
  { name: 'Crystal Black Pearl', hex: '#111215' },
  { name: 'Rallye Crimson Red', hex: '#c8102e' },
  { name: 'Obsidian Grey Metallic', hex: '#2c2f33' },
];

export function getVehicleEquipment(vehicle: Vehicle): VehicleEquipment {
  if (vehicle.equipment) return vehicle.equipment;

  // Rich brand-tailored default equipment packages
  if (vehicle.brand === 'Honda') {
    return {
      safety: [
        'Honda SENSING napredni bezbednosni paket (ADAS Nivo 2)',
        'CMBS sistem automatskog kočenja sa detekcijom pešaka i biciklista',
        'LKAS sistem za održavanje vozila u sredini saobraćajne trake',
        'ACC adaptivni tempomat sa funkcijom praćenja pri niskim brzinama (LSF)',
        'BSI sistem za nadzor mrtvih uglova sa CTM upozorenjem na poprečni saobraćaj',
        'TSR sistem za automatsko prepoznavanje saobraćajnih znakova',
        '11 vazdušnih jastuka uključujući prednji centralni vazdušni jastuk',
        'Automatska e-Call funkcija hitnog poziva u slučaju nezgode',
      ],
      interior: [
        'Dvozonski automatski klima uređaj sa jonizatorom i plasmacluster tehnologijom',
        'Sportska sedišta u kombinaciji prirodne kože i alkantare sa crvenim štepom',
        'Grejanje prednjih sedišta i grejanje obruča upravljača',
        'Elektropodesivo sedište vozača u 8 smerova sa memorijom',
        'Ambijentalno LED osvetljenje enterijera u crvenoj boji (RS Edition)',
        'Aluminijumske sportske pedale i pragovi sa osvetljenim logotipom',
        'Honda Magic Seats preklopiva zadnja sedišta u bioskopskom stilu',
      ],
      multimedia: [
        'Honda CONNECT sa 9-inčnim HD ekranom osetljivim na dodir i navigacijom',
        'Bežično povezivanje za Apple CarPlay i Android Auto',
        'Bose® Premium Audio sistem sa 12 zvučnika i centralnim sabvuferom',
        'Digitalna TFT instrument tabla od 10.2 inča sa prikazom protoka hibridne energije',
        'Bežični indukcioni punjač za mobilne telefone (15W Qi)',
        '4 brza USB-C priključka napred i pozadi sa brzim punjenjem',
      ],
      exterior: [
        'Full LED adaptivni farovi sa automatskim dugim svetlima i Matrix funkcijom',
        '18-inčne RS aluminijumske felne u crnoj visokosjajnoj završnoj obradi',
        'Panoramski krov sa električnim otvaranjem i integrisanom zavesom',
        'Zatamnjena zadnja stakla sa UV i toplotnom zaštitom',
        'Automatsko električno sklapanje retrovizora sa grejanjem i LED migavcima',
        'Pametni ključ (Smart Entry & Start) sa senzorom dodira na kvakama',
      ],
    };
  }

  if (vehicle.brand === 'Peugeot') {
    return {
      safety: [
        'Peugeot Drive Assist Plus (poluautonomna vožnja nivo 2)',
        'Automatsko kočenje u slučaju opasnosti (Active Safety Brake) sa noćnim radarom',
        'Aktivni sistem upozorenja na nenamerno napuštanje trake',
        'Adaptivni tempomat sa Stop&Go funkcijom',
        'Nadzor mrtvog ugla dugog dometa (do 75 metara)',
        'VisioPark 360° sistem sa 4 HD kamere i panoramskim prikazom',
        'LED Matrix tehnologija svetala koja sprečava zaslepljivanje drugih vozača',
      ],
      interior: [
        'Peugeot Panoramic i-Cockpit® sa zakrivljenim HD ekranom od 21 inča',
        'GT sportska sedišta sa AGR sertifikatom za ergonomiju i funkcijom masaže',
        'Grejana prednja sedišta i grejani kompaktni sportski upravljač sa GT logoom',
        'Trokraka ambijentalna LED rasveta u 8 personalizovanih boja',
        'Automatski trozonski klima uređaj sa Clean Cabin sistemom filtera',
        'Električna vrata prtljažnika sa hands-free otvaranjem pokretom noge',
      ],
      multimedia: [
        'Peugeot i-Connect Advanced sa 3D povezivom TomTom navigacijom',
        'Bežični Apple CarPlay i Android Auto sa ažuriranjem preko vazduha (OTA)',
        'Focal® Premium Hi-Fi zvučni sistem sa 10 zvučnika snage 690W',
        'i-Toggles: prilagodljive digitalne prečice osetljive na dodir',
        'Bežično punjenje pametnih telefona (15W) i 4 USB-C priključka',
      ],
      exterior: [
        'Peugeot Pixel LED prednja svetla u obliku tri lavlje kandže',
        '19-inčne dvobojne dijamantski sečene aluminijumske felne',
        'Crni krov Black Diamond u kontrastnoj boji (dvobojna karoserija)',
        'Akustično laminirana prednja bočna stakla za maksimalnu zvučnu izolaciju',
        'Električni preklopivi grejani retrovizori sa projekcijom lavljeg amblema',
      ],
    };
  }

  if (vehicle.brand === 'Suzuki') {
    return {
      safety: [
        'Suzuki Safety Support napredni sistem asistencija',
        'Dual Sensor Brake Support II (DSBS II) automatsko kočenje radarom i kamerom',
        'Lane Departure Prevention sistem prevencije napuštanja trake',
        'Adaptivni tempomat sa automatskim održavanjem distance',
        'Blind Spot Monitor (BSM) upozorenje na vozila u mrtvom uglu',
        'Rear Cross Traffic Alert upozorenje na nadolazeći saobraćaj unazad',
        'Sistem prepoznavanja znakova ograničenja brzine i kamera za vožnju unazad',
      ],
      interior: [
        'AllGrip selektor režima vožnje (Auto, Sport, Snow, Lock) na centralnoj konzoli',
        'Kombinovana kožna sedišta sa grejanjem vozačkog i suvozačkog mesta',
        'Automatski klima uređaj sa antialergijskim polen filterom',
        'Multifunkcionalni kožni upravljač sa komandama za audio i tempomat',
        'Dvostruki pod prtljažnika sa dodatnim skrivenim odeljkom za stvari',
      ],
      multimedia: [
        '9-inčni HD multimedijalni ekran osetljiv na dodir sa prikazom hibridnog rada',
        'Bežična podrška za pametne telefone putem Apple CarPlay i Android Auto',
        'Suzuki Connect telemetrija i praćenje vozila putem mobilne aplikacije',
        '4.2-inčni kolor LCD displej na instrument tabli sa AllGrip telemetrijom',
        'Bluetooth handsfree povezivanje i USB priključak sa brzim punjenjem',
      ],
      exterior: [
        'AllGrip 4x4 stalni inteligentni pogon na svim točkovima',
        'Full LED prednja svetla sa integrisanim LED dnevnim svetlima',
        '17-inčne polirane aluminijumske felne u dvobojnom finišu',
        'Hromirani detalji maske hladnjaka i zaštitne plastike branika',
        'Uzdužni krovni nosači u srebrnoj boji i tonirana stakla',
      ],
    };
  }

  // Generic / Moto / Other
  return {
    safety: [
      'Napredni ABS sistem sa elektronskom raspodelom kočione sile (EBD)',
      'Sistem elektronske kontrole stabilnosti (ESP / ESC)',
      'Sistem kontrole proklizavanja (TCS / ASR)',
      'Vazdušni jastuci za vozača i suvozača sa bočnim zavesama',
      'LED dnevna i glavna svetla visokog intenziteta osvetljenja',
    ],
    interior: [
      'Ergonomska premijum sedišta visokog komfora',
      'Automatski klima uređaj sa digitalnim kontrolama',
      'Kožni sportski upravljač podesiv po visini i dubini',
      'Električni podizači stakala napred i pozadi',
    ],
    multimedia: [
      'Multimedijalni kolor ekran osetljiv na dodir',
      'Integracija pametnih telefona (Apple CarPlay & Android Auto)',
      'Bluetooth handsfree telefoniranje i audio striming',
      'USB priključci za punjenje prenosivih uređaja',
    ],
    exterior: [
      'Originalne aluminijumske felne sa sigurnosnim šrafovima',
      'Električno podesivi i grejani spoljni retrovizori',
      'Fabrički zatamnjena stakla sa UV filterom',
      'Metalik premijum lak karoserije visokog sjaja',
    ],
  };
}

export function getVehicleById(id: string): Vehicle | undefined {
  return INVENTORY_VEHICLES.find((v) => v.id === id);
}

export const INVENTORY_VEHICLES: Vehicle[] = [
  {
    id: 'honda-civic-rs',
    brand: 'Honda',
    model: 'Civic 2.0 e:HEV RS',
    badge: 'Sport Edition · 3D Dostupno',
    category: 'novo',
    bodyType: 'Hečbek',
    year: 2026,
    priceEur: 38990,
    monthlyEstimateEur: 345,
    mileageKm: 0,
    fuel: 'e:HEV Hibrid',
    transmission: 'e-CVT Automatik',
    powerHp: 184,
    engineCc: 1993,
    has3D: true,
    model3DId: 'civic',
    image: '/images/unnamed (1).webp',
    gallery: [
      '/images/unnamed (1).webp',
      '/images/unnamed (2).webp',
      '/images/unnamed (3).webp',
    ],
    tags: ['Hibrid', 'Sport', 'Novo', 'Honda Sensing', 'Bose Sound'],
    highlight: 'Kombinacija izuzetne sportske dinamike i hibridne efikasnosti sa 184 KS i 315 Nm.',
    specs: {
      acceleration: '7.8 s (0-100 km/h)',
      topSpeed: '180 km/h',
      consumption: '4.7 l / 100 km',
      trunk: '410 litara',
      warranty: '5 godina ili 100.000 km',
    },
  },
  {
    id: 'honda-crv-2026',
    brand: 'Honda',
    model: 'CR-V 2.0 e:PHEV Advance Tech',
    badge: 'Flagship SUV · 3D Dostupno',
    category: 'novo',
    bodyType: 'SUV',
    year: 2026,
    priceEur: 52990,
    monthlyEstimateEur: 480,
    mileageKm: 0,
    fuel: 'Plug-in Hibrid',
    transmission: 'e-CVT Automatik',
    powerHp: 215,
    engineCc: 1993,
    has3D: true,
    model3DId: 'crv',
    image: '/images/unnamed (4).webp',
    gallery: [
      '/images/unnamed (4).webp',
      '/images/unnamed (5).webp',
      '/images/unnamed (6).webp',
    ],
    tags: ['PHEV', 'SUV', 'AWD', 'Panorama', 'Masažna sedišta'],
    highlight: 'Do 82 km čiste električne autonomije u gradu, uz vrhunski nivo komfora i prostranosti.',
    specs: {
      acceleration: '9.0 s (0-100 km/h)',
      topSpeed: '195 km/h',
      consumption: '0.8 l / 100 km (kombinovano)',
      trunk: '617 litara',
      warranty: '8 godina na bateriju',
    },
  },
  {
    id: 'peugeot-3008-gt',
    brand: 'Peugeot',
    model: '3008 GT Hybrid 136 e-DCS6',
    badge: 'Novi Fastback SUV',
    category: 'novo',
    bodyType: 'SUV',
    year: 2025,
    priceEur: 36490,
    monthlyEstimateEur: 320,
    mileageKm: 0,
    fuel: 'e:HEV Hibrid',
    transmission: '8-stepeni Automatik',
    powerHp: 136,
    engineCc: 1199,
    image: '/images/unnamed (7).webp',
    gallery: [
      '/images/unnamed (7).webp',
      '/images/unnamed (8).webp',
    ],
    tags: ['Novi Model', 'Panoramic i-Cockpit', 'Focal Audio'],
    highlight: 'Revolucionarni Panoramic i-Cockpit od 21 inča sa zakrivljenim ekranom visoke rezolucije.',
    specs: {
      acceleration: '10.2 s (0-100 km/h)',
      topSpeed: '201 km/h',
      consumption: '5.5 l / 100 km',
      trunk: '520 litara',
      warranty: '5 godina garancije',
    },
  },
  {
    id: 'opel-astra-gs',
    brand: 'Opel',
    model: 'Astra GS Line 1.2 Turbo',
    badge: 'Nemački Inženjering',
    category: 'novo',
    bodyType: 'Hečbek',
    year: 2025,
    priceEur: 27900,
    monthlyEstimateEur: 245,
    mileageKm: 0,
    fuel: 'Benzin',
    transmission: '8-stepeni Automatik',
    powerHp: 130,
    engineCc: 1199,
    image: '/images/unnamed (9).webp',
    gallery: ['/images/unnamed (9).webp'],
    tags: ['Intelli-Lux LED', 'AGR sedišta', 'Head-up Display'],
    highlight: 'Nagrađivana Intelli-Lux Pixel LED svetla sa 168 individualnih LED elemenata.',
    specs: {
      acceleration: '9.7 s (0-100 km/h)',
      topSpeed: '210 km/h',
      consumption: '5.6 l / 100 km',
      trunk: '422 litara',
      warranty: '4 godine garancije',
    },
  },
  {
    id: 'honda-hrv-advance',
    brand: 'Honda',
    model: 'HR-V 1.5 e:HEV Advance Style',
    badge: 'Urbani Krosover',
    category: 'novo',
    bodyType: 'Krosover',
    year: 2025,
    priceEur: 33490,
    monthlyEstimateEur: 295,
    mileageKm: 0,
    fuel: 'e:HEV Hibrid',
    transmission: 'e-CVT Automatik',
    powerHp: 131,
    engineCc: 1498,
    image: '/images/unnamed.webp',
    gallery: ['/images/unnamed.webp'],
    tags: ['Magic Seats', 'Samopuneći Hibrid', 'Dvobojna Karoserija'],
    highlight: 'Poznata Honda Magic Seats magična sedišta koja se podižu kao u bioskopu.',
    specs: {
      acceleration: '10.6 s (0-100 km/h)',
      topSpeed: '170 km/h',
      consumption: '5.4 l / 100 km',
      trunk: '335 - 1305 litara',
      warranty: '5 godina / 100.000 km',
    },
  },
  {
    id: 'suzuki-vitara-hybrid',
    brand: 'Suzuki',
    model: 'Vitara 1.4 BoosterJet AllGrip Premium',
    badge: '4x4 Pogon',
    category: 'novo',
    bodyType: 'SUV',
    year: 2025,
    priceEur: 24900,
    monthlyEstimateEur: 215,
    mileageKm: 0,
    fuel: 'e:HEV Hibrid',
    transmission: 'Manuelni 6 brzina',
    powerHp: 129,
    engineCc: 1373,
    image: '/images/unnamed (2).webp',
    gallery: ['/images/unnamed (2).webp'],
    tags: ['AllGrip 4WD', 'Japanska Pouzdanost', 'Kamera 360'],
    highlight: 'Dokazani AllGrip pogon na sva 4 točka sa 4 režima vožnje (Auto, Sport, Snow, Lock).',
    specs: {
      acceleration: '10.2 s (0-100 km/h)',
      topSpeed: '190 km/h',
      consumption: '5.8 l / 100 km',
      trunk: '375 litara',
      warranty: '3 godine + 7 godina produženo',
    },
  },
  {
    id: 'certified-peugeot-2008-gt',
    brand: 'Peugeot',
    model: '2008 GT 1.5 BlueHDi Automatic',
    badge: 'Sertifikovano Polovno · 1. Vlasnik',
    category: 'polovno',
    bodyType: 'Krosover',
    year: 2022,
    priceEur: 21490,
    monthlyEstimateEur: 185,
    mileageKm: 48500,
    fuel: 'Dizel',
    transmission: '8-stepeni Automatik',
    powerHp: 130,
    engineCc: 1499,
    image: '/images/unnamed (3).webp',
    gallery: ['/images/unnamed (3).webp'],
    tags: ['Kupljen nov u Srbiji', 'Kompletna Servisna Istorija', '12 Meseci Garancije'],
    highlight: 'Vozilo kupljeno i održavano u ovlašćenom Car Box servisu, provereno u 110 tačaka.',
    specs: {
      acceleration: '9.3 s (0-100 km/h)',
      topSpeed: '195 km/h',
      consumption: '4.8 l / 100 km',
      trunk: '434 litara',
      warranty: '12 meseci pisana garancija',
    },
  },
  {
    id: 'vespa-gts-300-super',
    brand: 'Vespa',
    model: 'GTS 300 Super Sport HPE',
    badge: 'Ikona Stila · Moto Program',
    category: 'moto',
    bodyType: 'Skuter',
    year: 2025,
    priceEur: 7490,
    monthlyEstimateEur: 75,
    mileageKm: 0,
    fuel: 'Benzin',
    transmission: 'CVT Automatik',
    powerHp: 24,
    engineCc: 278,
    image: '/images/unnamed (5).webp',
    gallery: ['/images/unnamed (5).webp'],
    tags: ['HPE Agregat', 'Keyless', 'TFT Display', 'ABS/ASR'],
    highlight: 'Najsnažniji motor u istoriji Vespe sa preko 23.8 KS i najsavremenijim Keyless sistemom.',
    specs: {
      acceleration: 'Brz start na semaforu',
      topSpeed: '125 km/h',
      consumption: '3.3 l / 100 km',
      trunk: 'Kaciga pod sedištem',
      warranty: '2 godine bez limita km',
    },
  },
  {
    id: 'segway-snarler-600',
    brand: 'Segway',
    model: 'Snarler AT6 L Limited EPS',
    badge: 'Off-Road Zver · ATV Program',
    category: 'atv',
    bodyType: 'ATV / Kvad',
    year: 2025,
    priceEur: 8990,
    monthlyEstimateEur: 90,
    mileageKm: 0,
    fuel: 'Benzin',
    transmission: 'CVT Automatik',
    powerHp: 44,
    engineCc: 570,
    image: '/images/unnamed (6).webp',
    gallery: ['/images/unnamed (6).webp'],
    tags: ['4x4 Blokada', 'Vitlo 2.500 lbs', 'Smart Commanding App'],
    highlight: 'Smart Commanding aplikacija sa GPS praćenjem, SOS alarmom i telemetrijom u realnom vremenu.',
    specs: {
      acceleration: 'Visok obrtni moment 48 Nm',
      topSpeed: '105 km/h',
      consumption: 'Ekonomičan DOHC',
      trunk: 'Prednji & zadnji nosač',
      warranty: '2 godine fabričke garancije',
    },
  },
];
