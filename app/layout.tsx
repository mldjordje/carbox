import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ScrollProvider } from '@/components/ScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Car Box Niš · Ovlašćeni Diler & Serviser | Honda, Peugeot, Opel, Suzuki, Moto & ATV',
  description: 'Ovlašćeni diler i serviser za brendove HONDA, PEUGEOT i OPEL, Suzuki vozila, Piaggio & Vespa grupaciju, Honda motocikle i Segway ATV u Nišu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#08080a] text-[#f2f0eb] antialiased selection:bg-[#c8102e] selection:text-white font-sans overflow-x-hidden">
        <div className="grain-overlay pointer-events-none" />
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
