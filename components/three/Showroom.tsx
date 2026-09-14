'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Showroom({ intensity = 1 }: { intensity?: number }) {
  return (
    <Environment resolution={1024} frames={1}>
      {/* Overhead Diffuse Studio Softbox - Broad & Soft (Eliminates harsh white glare) */}
      <Lightformer
        form="rect"
        intensity={1.35 * intensity}
        position={[0, 7.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[20, 6, 1]}
        color="#ffffff"
      />
      {/* Flank Left Cool Rim Light - Defines body curves & wheel arches */}
      <Lightformer
        form="rect"
        intensity={0.85 * intensity}
        position={[-9, 3, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[18, 5, 1]}
        color="#d8e4f5"
      />
      {/* Flank Right Warm Accent Light */}
      <Lightformer
        form="rect"
        intensity={0.75 * intensity}
        position={[9, 3, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[18, 5, 1]}
        color="#fef3e2"
      />
      {/* Front Soft Fascia & Grille Fill */}
      <Lightformer
        form="rect"
        intensity={0.55 * intensity}
        position={[0, 2.5, 9]}
        rotation={[0, 0, 0]}
        scale={[12, 4, 1]}
        color="#e5eaf2"
      />
      {/* Rear Sill Subtle Crimson Brand Accent */}
      <Lightformer
        form="rect"
        intensity={0.7 * intensity}
        position={[0, 0.6, -6]}
        rotation={[0, Math.PI, 0]}
        scale={[10, 0.8, 1]}
        color="#e60012"
      />
    </Environment>
  );
}

export function CursorSpotlight({ enabled = true }: { enabled?: boolean }) {
  const light = useRef<THREE.SpotLight>(null);
  const target = useRef(new THREE.Object3D());
  const { viewport } = useThree();
  const desired = useRef(new THREE.Vector3(0, 4.5, 4));

  useFrame((state, delta) => {
    if (!light.current) return;

    if (enabled) {
      const { x, y } = state.pointer;
      desired.current.set(
        x * viewport.width * 0.45,
        3.5 + y * 1.2,
        3.8 + Math.abs(x) * 1.0,
      );
    } else {
      const t = state.clock.elapsedTime * 0.25;
      desired.current.set(Math.sin(t) * 3.5, 3.5, Math.cos(t) * 3.5);
    }

    const k = 1 - Math.pow(0.003, delta);
    light.current.position.lerp(desired.current, k);
    light.current.target = target.current;
    light.current.target.updateMatrixWorld();
  });

  return (
    <>
      <primitive object={target.current} position={[0, 0.4, 0]} />
      {/* Gentle studio key light with soft penumbra - zero blown out highlights */}
      <spotLight
        ref={light}
        position={[0, 4.2, 4.5]}
        angle={0.7}
        penumbra={1.0}
        intensity={8.5}
        distance={22}
        color="#faf7f2"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
      />
      {/* Balanced ambient fill light so shadows preserve body detail */}
      <ambientLight intensity={0.38} />
      {/* Grounding Contact Shadows */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.82}
        scale={18}
        blur={2.0}
        far={4}
        resolution={512}
        color="#000000"
      />
    </>
  );
}
