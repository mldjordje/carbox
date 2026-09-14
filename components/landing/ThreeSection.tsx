'use client';

import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { HondaCivic } from '@/components/three/HondaCivic';
import { HondaCRV } from '@/components/three/HondaCRV';
import { Showroom, CursorSpotlight } from '@/components/three/Showroom';
import { HONDA_PAINTS, type PaintId } from '@/lib/car-paint';
import { RevealText, RevealParagraph } from '@/components/ui/RevealText';
import { OdometerNumber } from '@/components/ui/OdometerNumber';
import { RotateCw, Lightbulb, Calendar, Sparkles, Eye, Shield, Zap, Compass, Check } from 'lucide-react';

interface Props {
  onOpenTestDrive?: () => void;
}

// Camera Target Rig for smooth cinematic camera transitions
function CameraPresetRig({ targetPos, targetLook }: { targetPos: [number, number, number]; targetLook: [number, number, number] }) {
  const lookVector = useRef(new THREE.Vector3(...targetLook));
  const posVector = useRef(new THREE.Vector3(...targetPos));

  useFrame((state, delta) => {
    const k = 1 - Math.pow(0.001, delta);
    posVector.current.set(...targetPos);
    lookVector.current.set(...targetLook);

    state.camera.position.lerp(posVector.current, k);
    state.camera.lookAt(lookVector.current);
  });

  return null;
}

export function ThreeSection({ onOpenTestDrive }: Props) {
  const [activeModel, setActiveModel] = useState<'civic' | 'crv'>('civic');
  const [paint, setPaint] = useState<PaintId>('sonic_gray');
  const [lightsOn, setLightsOn] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [cameraPreset, setCameraPreset] = useState<'overview' | 'engine' | 'wheel' | 'aero'>('overview');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Camera presets coordinates: [x, y, z] position, [x, y, z] lookAt
  const presets: Record<string, { pos: [number, number, number]; look: [number, number, number] }> = {
    overview: { pos: [5.4, 1.7, 5.8], look: [0, 0.7, 0] },
    engine: { pos: [0.2, 2.2, 3.8], look: [0, 0.7, 1.2] },
    wheel: { pos: [3.4, 0.8, 2.4], look: [1.2, 0.4, 1.0] },
    aero: { pos: [-4.6, 1.4, -4.2], look: [0, 0.7, 0] },
  };

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
      hotspots: [
        { id: 'engine', title: '2.0 e:HEV Pogonski Agregat', desc: 'Atkinson benzinac sa dva snažna elektromotora i trenutnih 315 Nm obrtnog momenta.', pos: [0, 1.1, 1.5] as [number, number, number] },
        { id: 'wheel', title: '18" Matte Black Felne', desc: 'Laki aluminijumski naplaci sa niskoprofilnim Michelin sportskim pneumaticima.', pos: [1.0, 0.5, 1.4] as [number, number, number] },
        { id: 'lights', title: 'Full LED Matrix Svetlosni Snop', desc: 'Automatsko adaptivno praćenje krivina i senčenje nadolazećih vozila.', pos: [0.6, 0.85, 2.2] as [number, number, number] },
      ],
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
      hotspots: [
        { id: 'engine', title: 'e:PHEV Plug-in Hibrid', desc: 'Do 82 km čiste bešumne električne vožnje uz brzo punjenje baterije.', pos: [0, 1.25, 1.6] as [number, number, number] },
        { id: 'wheel', title: '19" Diamond Cut Naplaci', desc: 'Aerodinamični točkovi konstruisani za minimalan otpor vazduha i maksimalnu tišinu.', pos: [1.05, 0.6, 1.5] as [number, number, number] },
        { id: 'lights', title: 'Honda SENSING 360® Radar', desc: 'Pet radarskih senzora sa kompletnim pokrivanjem mrtvih uglova.', pos: [0.7, 0.95, 2.3] as [number, number, number] },
      ],
    },
  };

  const current = modelSpecs[activeModel];
  const activePreset = presets[cameraPreset];

  return (
    <section id="3d-showroom" className="relative py-28 sm:py-36 bg-[#08080a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <RevealText delay={0.1}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#c8102e] uppercase font-semibold mb-2">
                02 · DIGITALNI 3D STUDIO
              </div>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl sm:text-6xl font-display font-medium text-white tracking-tight uppercase">
                Interaktivni <span className="editorial-italic font-normal text-white">studio</span>.
              </h2>
            </RevealText>
            <RevealParagraph delay={0.3} className="mt-2 text-sm text-neutral-400 max-w-lg font-light">
              Istražite inženjerske detalje u realnom vremenu uz 360° rotaciju, fabričke boje laka i interaktivne fokus tačke.
            </RevealParagraph>
          </div>

          {/* Model Switcher with Audio Feedback */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/90 border border-white/10 shadow-xl">
            <button
              type="button"
              data-cursor="CIVIC"
              onClick={() => {
                setActiveModel('civic');
                setPaint('sonic_gray');
                setCameraPreset('overview');
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
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
                setCameraPreset('overview');
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeModel === 'crv'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CR-V 2026
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas Stage */}
        <div
          data-cursor="360° ROTACIJA"
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[480px] sm:min-h-[580px] rounded-3xl overflow-hidden border border-white/10 bg-[#070709] shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        >
          <Canvas
            shadows={{ type: THREE.PCFShadowMap }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              powerPreference: 'high-performance',
            }}
            camera={{ position: activePreset.pos, fov: 38, near: 0.1, far: 100 }}
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
              <Showroom intensity={1.15} />

              {/* Pinned 3D Interactive Hotspots */}
              {current.hotspots.map((hs) => (
                <Html key={hs.id} position={hs.pos} center distanceFactor={8}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(activeHotspot === hs.id ? null : hs.id);
                      if (hs.id === 'engine') setCameraPreset('engine');
                      else if (hs.id === 'wheel') setCameraPreset('wheel');
                      else setCameraPreset('overview');
                    }}
                    className="relative group focus:outline-none"
                  >
                    <span className="absolute -inset-2 rounded-full bg-[#c8102e]/40 animate-ping" />
                    <span className="relative w-5 h-5 rounded-full bg-[#c8102e] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_12px_rgba(200,16,46,0.9)] group-hover:scale-125 transition-transform">
                      +
                    </span>

                    {/* Hotspot Floating Callout */}
                    {activeHotspot === hs.id && (
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-60 p-3.5 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/20 text-left shadow-2xl text-white pointer-events-auto z-50">
                        <div className="text-[10px] font-mono text-[#c8102e] font-bold uppercase">{hs.title}</div>
                        <div className="text-[11px] text-neutral-300 font-light mt-1 leading-relaxed">{hs.desc}</div>
                      </div>
                    )}
                  </button>
                </Html>
              ))}
            </Suspense>

            <CursorSpotlight />
            <CameraPresetRig targetPos={activePreset.pos} targetLook={activePreset.look} />

            {/* Stage Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
              <planeGeometry args={[70, 70]} />
              <meshStandardMaterial color="#0b0b0f" roughness={0.34} metalness={0.65} />
            </mesh>

            <OrbitControls
              makeDefault
              autoRotate={isRotating}
              autoRotateSpeed={1.2}
              enablePan={false}
              minPolarAngle={0.15}
              maxPolarAngle={Math.PI / 2.05}
              minDistance={3.2}
              maxDistance={12}
              enableDamping
              dampingFactor={0.06}
            />
          </Canvas>

          {/* Top Left Model HUD */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
            <div className="luxury-card p-4 sm:p-5 rounded-2xl max-w-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#c8102e] font-semibold flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span>OVLAŠĆENI HONDA SALON</span>
              </div>
              <div className="text-base sm:text-lg font-display font-medium text-white">
                {current.name}
              </div>
              <div className="text-[11px] text-neutral-400 font-light">{current.subtitle}</div>
              <div className="pt-2 flex items-baseline space-x-2">
                <OdometerNumber value={current.price} suffix=" €" className="text-lg font-bold text-white" />
                <span className="text-[11px] font-mono text-neutral-400">od {current.monthly} €/mes.</span>
              </div>
            </div>
          </div>

          {/* Top Right Controls & Cinematic Camera Angles */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex flex-col items-end space-y-2">
            {/* Camera Perspective Switcher */}
            <div className="p-1 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center space-x-1 text-[10px] font-mono">
              {[
                { id: 'overview', label: '360°' },
                { id: 'engine', label: 'HIBRID' },
                { id: 'wheel', label: 'FELNE' },
                { id: 'aero', label: 'AERO' },
              ].map((cam) => (
                <button
                  key={cam.id}
                  type="button"
                  onClick={() => setCameraPreset(cam.id as any)}
                  className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                    cameraPreset === cam.id ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cam.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsRotating(!isRotating)}
              className={`p-2.5 rounded-xl border text-xs font-mono transition-colors flex items-center space-x-2 ${
                isRotating ? 'bg-white text-black border-white' : 'luxury-card text-neutral-300 hover:text-white'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">ROTACIJA</span>
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
                <span>LAK:</span>
                <span className="text-white font-bold">{HONDA_PAINTS.find((p) => p.id === paint)?.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                {HONDA_PAINTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="BOJA"
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
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#c8102e] hover:bg-[#e60012] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(200,16,46,0.4)] transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Zakaži Test Vožnju</span>
            </button>
          </div>
        </div>

        {/* Technical Specs Metric Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-0.5">
            <div className="text-[10px] text-neutral-400 uppercase">SISTEMSKA SNAGA</div>
            <div className="text-xl font-bold text-white">{current.power} KS</div>
            <div className="text-[10px] text-neutral-400">{current.torque} Nm obrtni moment</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-0.5">
            <div className="text-[10px] text-neutral-400 uppercase">UBRZANJE (0-100)</div>
            <div className="text-xl font-bold text-[#c8102e]">{current.accel}</div>
            <div className="text-[10px] text-neutral-400">Trenutan električni odziv</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-0.5">
            <div className="text-[10px] text-neutral-400 uppercase">POTROŠNJA GORIVA</div>
            <div className="text-xl font-bold text-emerald-400">{current.consumption}</div>
            <div className="text-[10px] text-neutral-400">Kombinovani ciklus</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-0.5">
            <div className="text-[10px] text-neutral-400 uppercase">PRTLJAŽNIK</div>
            <div className="text-xl font-bold text-white">{current.trunk}</div>
            <div className="text-[10px] text-neutral-400">Maksimalna zapremina</div>
          </div>
        </div>
      </div>
    </section>
  );
}
