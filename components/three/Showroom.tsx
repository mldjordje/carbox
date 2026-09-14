'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Showroom({ intensity = 1 }: { intensity?: number }) {
  return (
    <Environment resolution={1024} frames={1}>
      {/* Overhead High-Gloss Studio Strip */}
      <Lightformer
        form="rect"
        intensity={3.8 * intensity}
        position={[0, 7, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[16, 2.8, 1]}
        color="#ffffff"
      />
      {/* Flank Left Cool Rim Light */}
      <Lightformer
        form="rect"
        intensity={2.0 * intensity}
        position={[-8, 3.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[16, 6, 1]}
        color="#dbe4ff"
      />
      {/* Flank Right Warm Accent Light */}
      <Lightformer
        form="rect"
        intensity={1.8 * intensity}
        position={[8, 3.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[16, 6, 1]}
        color="#fff1e0"
      />
      {/* Front Soft Fill */}
      <Lightformer
        form="rect"
        intensity={1.2 * intensity}
        position={[0, 3, 10]}
        rotation={[0, 0, 0]}
        scale={[14, 5, 1]}
        color="#e2e8f0"
      />
      {/* Rear Sill Crimson Glow (Car Box brand accent) */}
      <Lightformer
        form="rect"
        intensity={1.2 * intensity}
        position={[0, 0.5, -6]}
        rotation={[0, Math.PI, 0]}
        scale={[8, 0.8, 1]}
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
        x * viewport.width * 0.7,
        3.2 + y * 2.0,
        3.0 + Math.abs(x) * 1.5,
      );
    } else {
      const t = state.clock.elapsedTime * 0.3;
      desired.current.set(Math.sin(t) * 4, 3.5, Math.cos(t) * 4);
    }

    const k = 1 - Math.pow(0.002, delta);
    light.current.position.lerp(desired.current, k);
    light.current.target = target.current;
    light.current.target.updateMatrixWorld();
  });

  return (
    <>
      <primitive object={target.current} position={[0, 0.5, 0]} />
      <spotLight
        ref={light}
        position={[0, 4.5, 4]}
        angle={0.6}
        penumbra={0.9}
        intensity={160}
        distance={24}
        color="#fff8f0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      />
      <ambientLight intensity={0.12} />
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.88}
        scale={16}
        blur={2.2}
        far={4.5}
        resolution={512}
        color="#000000"
      />
    </>
  );
}
