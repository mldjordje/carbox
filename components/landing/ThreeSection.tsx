'use client';

import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { HondaCivic } from '@/components/three/HondaCivic';
import { HondaCRV } from '@/components/three/HondaCRV';
import { Showroom, CursorSpotlight } from '@/components/three/Showroom';
import { HONDA_PAINTS, type PaintId } from '@/lib/car-paint';
import { RevealText, RevealParagraph, RevealCard } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { RotateCw, Lightbulb, Calendar, Move, Sparkles, Play } from 'lucide-react';

if (typeof window !== 'undefined') {
  useGLTF.preload('/models/honda_civic_rs.glb');
  useGLTF.preload('/models/honda_cr-v_2026.glb');
}

interface Props {
  onOpenTestDrive?: () => void;
}

export function ThreeSection({ onOpenTestDrive }: Props) {
  const [activeModel, setActiveModel] = useState<'civic' | 'crv'>('civic');
  const [paint, setPaint] = useState<PaintId>('sonic_gray');
  const [lightsOn, setLightsOn] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const modelSpecs = {
    civic: {
      name: 'Honda Civic 2.0 e:HEV RS',
      subtitle: 'Sportski hibrid sa dvomotornom tehnologijom i 184 KS',
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
      subtitle: 'Luksuzni flagship Plug-in hibrid sa 82 km EV dometa',
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
    <section id="3d-showroom" className="relative py-20 sm:py-32 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Integrated Model Name & Price - Zero obstruction on 3D car */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-bold flex items-center space-x-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
                <span>02 · DIGITALNI 3D STUDIO · OVLAŠĆENI HONDA SALON</span>
              </div>
            </RevealText>
            <RevealText delay={0.15}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight uppercase">
                  {current.name}
                </h2>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                    {current.price.toLocaleString('sr-RS')} €
                  </span>
                  <span className="text-xs font-mono text-neutral-400">od {current.monthly} €/mes.</span>
                </div>
              </div>
            </RevealText>
            <RevealParagraph delay={0.2} className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-xl font-light">
              {current.subtitle}
            </RevealParagraph>
          </div>

          {/* Model Switcher */}
          <div className="flex items-center p-1 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              data-cursor="CIVIC"
              onClick={() => {
                setActiveModel('civic');
                setPaint('sonic_gray');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeModel === 'civic'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CIVIC RS
            </button>
            <button
              type="button"
              data-cursor="CR-V"
              onClick={() => {
                setActiveModel('crv');
                setPaint('crystal_black');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeModel === 'crv'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CR-V 2026
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas Stage - Completely Unobstructed View */}
        <RevealCard delay={0.25}>
          <div
            data-cursor="360° ROTACIJA"
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[460px] sm:min-h-[580px] rounded-3xl overflow-hidden border border-white/10 bg-[#070709] shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <Canvas
              shadows={{ type: THREE.PCFShadowMap }}
              dpr={[1, 2]}
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                powerPreference: 'high-performance',
              }}
              camera={{ position: [5.2, 1.7, 5.4], fov: 38, near: 0.1, far: 100 }}
              onCreated={({ gl }) => {
                gl.toneMappingExposure = 0.88;
              }}
              className="!absolute inset-0 cursor-grab active:cursor-grabbing"
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
                <Showroom intensity={1.0} />
              </Suspense>

              <CursorSpotlight />

              {/* Stage Floor - Matte Obsidian Studio with Gentle Reflection */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
                <planeGeometry args={[70, 70]} />
                <meshStandardMaterial color="#08080c" roughness={0.44} metalness={0.5} />
              </mesh>

              <OrbitControls
                makeDefault
                autoRotate={isRotating}
                autoRotateSpeed={0.68}
                enablePan={false}
                minPolarAngle={0.12}
                maxPolarAngle={Math.PI / 2.05}
                minDistance={3.2}
                maxDistance={12}
                enableDamping
                dampingFactor={0.06}
                onStart={() => {
                  if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                  setIsRotating(false);
                }}
                onEnd={() => {
                  if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                  resumeTimeoutRef.current = setTimeout(() => {
                    setIsRotating(true);
                  }, 2200);
                }}
              />
            </Canvas>

            {/* Top Left Subtle 360 Indicator */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center space-x-2 text-[10px] font-mono text-neutral-300">
                <Move className="w-3.5 h-3.5 text-[#c8102e]" />
                <span>360° PREVUCITE ZA ROTACIJU</span>
              </div>
            </div>

            {/* Top Right Floating Controls - Cinematic Toggle & Lights */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center space-x-2">
              <button
                type="button"
                onClick={() => {
                  if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                  setIsRotating(!isRotating);
                }}
                className={`px-3.5 py-2 rounded-full border text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1.5 transition-all backdrop-blur-md ${
                  isRotating
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold'
                    : 'bg-black/60 border-white/15 text-neutral-300 hover:text-white'
                }`}
                title={isRotating ? 'Pauziraj cinematic rotaciju' : 'Pokreni cinematic rotaciju'}
              >
                <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
                <span className="hidden xs:inline">{isRotating ? 'CINEMATIC 360°' : 'POKRENI 360°'}</span>
              </button>

              <button
                type="button"
                onClick={() => setLightsOn(!lightsOn)}
                className={`p-2.5 rounded-full border text-xs font-mono transition-all backdrop-blur-md ${
                  lightsOn ? 'bg-[#c8102e] border-[#c8102e] text-white shadow-[0_0_15px_rgba(200,16,46,0.6)]' : 'bg-black/60 border-white/15 text-neutral-400 hover:text-white'
                }`}
                title="Svetla"
              >
                <Lightbulb className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Floating Paint Palette Tray - Enlarged High-End Swatches */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-20">
              <div className="luxury-card p-3 sm:p-3.5 rounded-2xl space-y-2 shadow-2xl">
                <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider flex items-center justify-between gap-4">
                  <span>LAK KAROSERIJE:</span>
                  <span className="text-white font-bold">{HONDA_PAINTS.find((p) => p.id === paint)?.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {HONDA_PAINTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      data-cursor="BOJA"
                      onClick={() => setPaint(p.id)}
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 transition-all cursor-pointer ${
                        paint === p.id
                          ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)] ring-2 ring-[#c8102e]'
                          : 'border-white/20 opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: p.hex }}
                      title={p.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Right CTA on Desktop */}
            <div className="hidden sm:block absolute bottom-6 right-6 z-20">
              <button
                type="button"
                onClick={onOpenTestDrive}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#c8102e] hover:bg-[#e60012] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_25px_rgba(200,16,46,0.5)] transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Zakaži Test Vožnju</span>
              </button>
            </div>
          </div>
        </RevealCard>

        {/* Mobile Full-Width CTA (Never Overlaps Swatches) */}
        <div className="sm:hidden mt-3">
          <button
            type="button"
            onClick={onOpenTestDrive}
            className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-[#c8102e] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-lg active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Zakaži Test Vožnju Za {current.name.split(' ')[1]}</span>
          </button>
        </div>

        {/* Technical Specs Metric Strip - Large Format Luxury Tiles */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <RevealCard delay={0.1}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-white/25 transition-all space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">SISTEMSKA SNAGA</div>
              <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">{current.power} KS</div>
              <div className="text-xs font-mono text-neutral-400">{current.torque} Nm obrtni moment</div>
            </div>
          </RevealCard>

          <RevealCard delay={0.2}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-[#c8102e]/40 transition-all space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">UBRZANJE (0-100)</div>
              <div className="text-3xl sm:text-5xl font-bold font-mono text-[#c8102e] tracking-tight">{current.accel}</div>
              <div className="text-xs font-mono text-neutral-400">Trenutan odziv elektromotora</div>
            </div>
          </RevealCard>

          <RevealCard delay={0.3}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">POTROŠNJA GORIVA</div>
              <div className="text-3xl sm:text-5xl font-bold font-mono text-emerald-400 tracking-tight">{current.consumption}</div>
              <div className="text-xs font-mono text-neutral-400">Kombinovani ciklus</div>
            </div>
          </RevealCard>

          <RevealCard delay={0.4}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-white/25 transition-all space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">PRTLJAŽNIK</div>
              <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">{current.trunk}</div>
              <div className="text-xs font-mono text-neutral-400">Maksimalna zapremina</div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
