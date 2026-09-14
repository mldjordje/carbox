'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Showroom({ intensity = 1 }: { intensity?: number }) {
  return (
    <Environment resolution={512} frames={1}>
      {/* Automotive Studio Soft Ceiling Banks */}
      <Lightformer
        form="rect"
        intensity={1.2 * intensity}
        position={[-3.5, 6, 0]}
        rotation={[Math.PI / 2.2, 0, 0]}
        scale={[16, 1.2, 1]}
        color="#ffffff"
      />
      <Lightformer
        form="rect"
        intensity={1.2 * intensity}
        position={[3.5, 6, 0]}
        rotation={[Math.PI / 2.2, 0, 0]}
        scale={[16, 1.2, 1]}
        color="#ffffff"
      />

      {/* Flank Left Body Contour Light */}
      <Lightformer
        form="rect"
        intensity={1.0 * intensity}
        position={[-8, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[16, 2.5, 1]}
        color="#d8e8f8"
      />
      {/* Flank Right Body Contour Light */}
      <Lightformer
        form="rect"
        intensity={0.9 * intensity}
        position={[8, 2.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[16, 2.5, 1]}
        color="#f8ede2"
      />

      {/* Front Fascia & Headlight Soft Accent */}
      <Lightformer
        form="rect"
        intensity={0.8 * intensity}
        position={[0, 2.0, 8]}
        rotation={[0, 0, 0]}
        scale={[10, 1.8, 1]}
        color="#e8f0fa"
      />

      {/* Rear Contour Glow */}
      <Lightformer
        form="rect"
        intensity={0.7 * intensity}
        position={[0, 1.0, -7]}
        rotation={[0, Math.PI, 0]}
        scale={[10, 1.2, 1]}
        color="#c8102e"
      />
    </Environment>
  );
}

export function CursorSpotlight() {
  return (
    <>
      {/* Primary Key Light - Illuminates hood, front quarter, and body panels */}
      <directionalLight
        position={[5.5, 6.5, 5.5]}
        intensity={2.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
        shadow-camera-near={1}
        shadow-camera-far={25}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
      />

      {/* Cool Rim / Silhouette Light - Edge definition along roofline and rear fenders */}
      <directionalLight
        position={[-6, 5, -5.5]}
        intensity={2.8}
        color="#d8e8ff"
      />

      {/* Left Flank & Wheel Fill Light */}
      <directionalLight
        position={[-6, 2.8, 3.5]}
        intensity={1.5}
        color="#ffffff"
      />

      {/* Front Fascia & Grille Detail Light */}
      <directionalLight
        position={[0, 2.0, 6.5]}
        intensity={1.6}
        color="#ffffff"
      />

      {/* Ambient Fill Light - Prevents dark shadows, highlights wheels & chassis details */}
      <ambientLight intensity={0.85} color="#ffffff" />

      {/* Grounding Contact Shadows - Clean, crisp, realistic under-tire shadow patch */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.9}
        scale={18}
        blur={2.0}
        far={3.5}
        resolution={512}
        color="#000000"
      />
    </>
  );
}
