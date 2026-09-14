'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Showroom({ intensity = 1 }: { intensity?: number }) {
  return (
    <Environment resolution={512} frames={1}>
      {/* Automotive Light Tunnel: Dual Narrow Edge Strips (Leaves hood center rich & deep) */}
      <Lightformer
        form="rect"
        intensity={0.6 * intensity}
        position={[-3.2, 5.5, 0]}
        rotation={[Math.PI / 2.2, 0, 0]}
        scale={[16, 0.6, 1]}
        color="#ffffff"
      />
      <Lightformer
        form="rect"
        intensity={0.6 * intensity}
        position={[3.2, 5.5, 0]}
        rotation={[Math.PI / 2.2, 0, 0]}
        scale={[16, 0.6, 1]}
        color="#ffffff"
      />

      {/* Flank Left Body Contour Light */}
      <Lightformer
        form="rect"
        intensity={0.5 * intensity}
        position={[-8, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[16, 2.2, 1]}
        color="#d0deee"
      />
      {/* Flank Right Body Contour Light */}
      <Lightformer
        form="rect"
        intensity={0.45 * intensity}
        position={[8, 2.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[16, 2.2, 1]}
        color="#f4ebdc"
      />

      {/* Front Fascia & Headlight Soft Accent */}
      <Lightformer
        form="rect"
        intensity={0.35 * intensity}
        position={[0, 1.8, 8]}
        rotation={[0, 0, 0]}
        scale={[8, 1.2, 1]}
        color="#e0e6f0"
      />

      {/* Rear Sill Subtle Brand Glow */}
      <Lightformer
        form="rect"
        intensity={0.4 * intensity}
        position={[0, 0.5, -6]}
        rotation={[0, Math.PI, 0]}
        scale={[8, 0.6, 1]}
        color="#c8102e"
      />
    </Environment>
  );
}

export function CursorSpotlight() {
  return (
    <>
      {/* Fixed, soft studio directional key light - zero harsh hotspots on hood or windshield */}
      <directionalLight
        position={[5, 7, 5]}
        intensity={0.45}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
        shadow-camera-near={1}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />
      {/* Subtle opposite fill light */}
      <directionalLight
        position={[-5, 4, -3]}
        intensity={0.2}
      />
      {/* Balanced ambient fill light so shadows preserve wheel & body detail */}
      <ambientLight intensity={0.32} />

      {/* Grounding Contact Shadows */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.8}
        scale={16}
        blur={1.8}
        far={3.5}
        resolution={512}
        color="#000000"
      />
    </>
  );
}
