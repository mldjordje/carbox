'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { HondaCivic } from '@/components/three/HondaCivic';
import { HondaCRV } from '@/components/three/HondaCRV';
import { Showroom, CursorSpotlight } from '@/components/three/Showroom';
import { HONDA_PAINTS, type PaintId } from '@/lib/car-paint';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { RotateCw, Lightbulb, Calendar, Car } from 'lucide-react';

interface Props {
  onOpenTestDrive?: () => void;
}

export function ThreeSection({ onOpenTestDrive }: Props) {
  const [activeModel, setActiveModel] = useState<'civic' | 'crv'>('civic');
  const [paint, setPaint] = useState<PaintId>('sonic_gray');
  const [lightsOn, setLightsOn] = useState(true);
  const [isRotating, setIsRotating] = useState(false);

  const modelSpecs = {
    civic: {
      name: 'Honda Civic 2.0 e:HEV RS',
      subtitle: 'Sportski hibrid sa dvomotornom tehnologijom',
      price: 38990,
      monthly: 345,
      power: 184,
      torque: 315,
      accel: '7.8 s',
      consumption: '4.7 l',
      trunk: '410 L',
    },
    crv: {
      name: 'Honda CR-V 2.0 e:PHEV Advance',
      subtitle: 'Luksuzni flagship Plug-in hibridni SUV',
      price: 52990,
      monthly: 480,
      power: 215,
      torque: 335,
      accel: '9.0 s',
      consumption: '0.8 l',
      trunk: '617 L',
    },
  };

  const current = modelSpecs[activeModel];

  return (
    <section id="3d-showroom" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                02 · 3D DIGITAL SHOWROOM
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase">
                Interaktivni <span className="editorial-italic font-normal text-white">studio</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-lg font-light">
              Pregledajte i konfigurišite modele u realnom vremenu uz 360° kontrolu kamere, studijsko osvetljenje i metalik lakove.
            </RevealParagraph>
          </div>

          {/* Model Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/80 border border-white/10">
            <button
              type="button"
              onClick={() => {
                setActiveModel('civic');
                setPaint('sonic_gray');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeModel === 'civic'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CIVIC RS
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveModel('crv');
                setPaint('crystal_black');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeModel === 'crv'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CR-V 2026
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas Stage */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[460px] sm:min-h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-[#070709] shadow-2xl">
          <Canvas
            shadows={{ type: THREE.PCFShadowMap }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              powerPreference: 'high-performance',
            }}
            camera={{ position: [5.2, 1.6, 5.8], fov: 38, near: 0.1, far: 100 }}
            className="!absolute inset-0"
          >
            <color attach="background" args={['#070709']} />
            <fog attach="fog" args={['#070709', 10, 32]} />

            <Suspense fallback={null}>
              <HondaCivic
                paint={paint}
                lightsOn={lightsOn}
                visible={activeModel === 'civic'}
              />
              <HondaCRV
                paint={paint}
                lightsOn={lightsOn}
                visible={activeModel === 'crv'}
              />
              <Showroom intensity={1.1} />
            </Suspense>

            <CursorSpotlight />

            {/* Stage Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
              <planeGeometry args={[70, 70]} />
              <meshStandardMaterial color="#0b0b0f" roughness={0.34} metalness={0.6} />
            </mesh>

            <OrbitControls
              makeDefault
              autoRotate={isRotating}
              autoRotateSpeed={1.4}
              enablePan={false}
              minPolarAngle={0.15}
              maxPolarAngle={Math.PI / 2.05}
              minDistance={3.5}
              maxDistance={12}
              enableDamping
              dampingFactor={0.06}
            />
          </Canvas>

          {/* Top Left Model HUD */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
            <div className="luxury-card p-4 rounded-2xl max-w-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#c8102e] font-semibold">
                OVLAŠĆENI HONDA SALON
              </div>
              <div className="text-base sm:text-lg font-display font-medium text-white">
                {current.name}
              </div>
              <div className="text-[11px] text-neutral-400">{current.subtitle}</div>
              <div className="pt-2 flex items-baseline space-x-2">
                <OdometerNumber value={current.price} suffix=" €" className="text-lg font-bold text-white" />
                <span className="text-[11px] font-mono text-neutral-400">od {current.monthly} €/mes.</span>
              </div>
            </div>
          </div>

          {/* Top Right Controls */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex flex-col items-end space-y-2">
            <button
              type="button"
              onClick={() => setIsRotating(!isRotating)}
              className={`p-2.5 rounded-xl border text-xs font-mono transition-colors flex items-center space-x-2 ${
                isRotating ? 'bg-white text-black border-white' : 'luxury-card text-neutral-300 hover:text-white'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">360° ROTACIJA</span>
            </button>

            <button
              type="button"
              onClick={() => setLightsOn(!lightsOn)}
              className={`p-2.5 rounded-xl border text-xs font-mono transition-colors flex items-center space-x-2 ${
                lightsOn ? 'bg-[#c8102e] border-[#c8102e] text-white' : 'luxury-card text-neutral-400 hover:text-white'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lightsOn ? 'FAROVI: ON' : 'FAROVI: OFF'}</span>
            </button>
          </div>

          {/* Bottom Left Paint Swatches */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
            <div className="luxury-card p-3 rounded-2xl space-y-1.5">
              <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                <span>BOJA:</span>
                <span className="text-white font-bold">{HONDA_PAINTS.find((p) => p.id === paint)?.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                {HONDA_PAINTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPaint(p.id)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      paint === p.id ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: p.hex }}
                    title={p.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Right CTA */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
            <button
              type="button"
              onClick={onOpenTestDrive}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#c8102e] hover:bg-[#e60012] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(200,16,46,0.4)] transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Zakaži Test Vožnju</span>
            </button>
          </div>
        </div>

        {/* Technical Specs Strip Below Studio */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5">
            <div className="text-[10px] text-neutral-400 uppercase">SISTEMSKA SNAGA</div>
            <div className="text-xl font-bold text-white mt-1">{current.power} KS</div>
            <div className="text-[10px] text-neutral-400 mt-0.5">{current.torque} Nm obrtni moment</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5">
            <div className="text-[10px] text-neutral-400 uppercase">UBRZANJE (0-100)</div>
            <div className="text-xl font-bold text-[#c8102e] mt-1">{current.accel}</div>
            <div className="text-[10px] text-neutral-400 mt-0.5">Trenutan električni odziv</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5">
            <div className="text-[10px] text-neutral-400 uppercase">POTROŠNJA GORIVA</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">{current.consumption}</div>
            <div className="text-[10px] text-neutral-400 mt-0.5">Kombinovani ciklus</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5">
            <div className="text-[10px] text-neutral-400 uppercase">PRTLJAŽNIK</div>
            <div className="text-xl font-bold text-white mt-1">{current.trunk}</div>
            <div className="text-[10px] text-neutral-400 mt-0.5">Maksimalna zapremina</div>
          </div>
        </div>
      </div>
    </section>
  );
}
