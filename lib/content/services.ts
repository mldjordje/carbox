export interface ServiceModule {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceFromRsd: number;
  features: string[];
  icon: string;
}

export const CARBOX_SERVICES: ServiceModule[] = [
  {
    id: 'redovan-servis',
    title: 'Redovan Servis & Inspekcija',
    shortDesc: 'Zamena ulja, filtera i provera vozila u 60 kontrolnih tačaka uz fabričku garanciju.',
    fullDesc: 'Kompletan servis po normativima proizvođača (Honda, Peugeot, Opel, Suzuki). Korišćenje isključivo originalnih delova i motornih ulja najvišeg standarda.',
    duration: '1.5 - 2.5 h',
    priceFromRsd: 14500,
    features: ['Originalno ulje & OEM filteri', 'Provera kočionog sistema', 'Elektronska evidencija u knjižicu', 'Reset servisnog intervala'],
    icon: 'Wrench',
  },
  {
    id: 'dijagnostika',
    title: 'Kompjuterska Dijagnostika',
    shortDesc: 'Originalni namenski dijagnostički testeri za lociranje i otklanjanje elektronskih grešaka.',
    fullDesc: 'Očitavanje svih parametara motora, hibridnog sklopa, menjača i bezbednosnih ADAS sistema najsavremenijim dijagnostičkim alatima.',
    duration: '45 min',
    priceFromRsd: 4200,
    features: ['Skeniranje svih ECU modula', 'Analiza parametara uživo', 'Kalibracija senzora i kamera', 'Štampani izveštaj grešaka'],
    icon: 'Cpu',
  },
  {
    id: 'klima-trap',
    title: '3D Reglaža Trapa & Klima',
    shortDesc: 'Laserska 3D geometrija trapa i ultrazvučna dezinfekcija i punjenje klima uređaja.',
    fullDesc: 'Najpreciznije 3D centriranje prednjeg i zadnjeg trapa za optimalno trošenje pneumatika i maksimalnu stabilnost pri velikim brzinama.',
    duration: '1 h',
    priceFromRsd: 5500,
    features: ['3D lasersko merenje', 'Punjenje R134a i R1234yf freona', 'Antibakterijsko čišćenje ventilacije', 'Provera vešanja na treskalici'],
    icon: 'Gauge',
  },
  {
    id: 'limarija-farbanje',
    title: 'Limarija & Komora za Farbanje',
    shortDesc: 'Vraćanje fabričke geometrije karoserije na šablonu i farbanje u komori sa garancijom.',
    fullDesc: 'Sopstvena moderna komora sa vodenim bazama boja. Kompjutersko nijansiranje i saradnja sa svim osiguravajućim kućama u Srbiji.',
    duration: '1 - 3 dana',
    priceFromRsd: 12000,
    features: ['Kompjutersko miksovanje boja', 'Originalni lak visokog sjaja', 'Zapisnik štete za osiguranja', 'Garancija na postojanost laka'],
    icon: 'ShieldCheck',
  },
];
