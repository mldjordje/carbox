'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { HONDA_PAINTS, createCarPaintMaterial, type PaintId } from '@/lib/car-paint';

interface Props {
  paint?: PaintId;
  lightsOn?: boolean;
  visible?: boolean;
}

export function HondaCRV({ paint = 'crystal_black', lightsOn = true, visible = true }: Props) {
  const { scene } = useGLTF('/models/honda_cr-v_2026.glb');
  const groupRef = useRef<THREE.Group>(null);
  const paintMaterial = useMemo(() => createCarPaintMaterial(), []);
  const emissiveMats = useRef<THREE.MeshStandardMaterial[]>([]);

  useEffect(() => {
    emissiveMats.current = [];

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const mat = child.material as THREE.MeshStandardMaterial;
      const matName = mat?.name?.toLowerCase() ?? '';

      // Check if it's body paint in CR-V
      if (
        matName.includes('body_paint') ||
        matName.includes('slategray') ||
        matName.includes('r_81') ||
        matName.includes('nh_731p_body') ||
        matName.includes('nh_578_body')
      ) {
        child.material = paintMaterial;
      }

      // Upgrade glass - sleek tinted automotive privacy glass with balanced reflection
      if (matName.includes('glass') || matName.includes('window') || matName.includes('clear_parts_window')) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#080a0e'),
          transmission: 0.88,
          roughness: 0.08,
          ior: 1.5,
          transparent: true,
          opacity: 0.88,
          envMapIntensity: 0.6,
          reflectivity: 0.5,
        });
      }

      // Headlights & Taillights
      if (
        matName.includes('headlight') ||
        matName.includes('rearlight') ||
        matName.includes('red_ffmx') ||
        matName.includes('white_plastic_naka')
      ) {
        if (!emissiveMats.current.includes(mat)) {
          mat.emissive = matName.includes('rear') || matName.includes('red')
            ? new THREE.Color('#ff1a2b')
            : new THREE.Color('#d8ebff');
          mat.emissiveIntensity = lightsOn ? 1.6 : 0;
          emissiveMats.current.push(mat);
        }
      }
    });
  }, [scene, paintMaterial, lightsOn]);

  const targetColor = useMemo(() => {
    const p = HONDA_PAINTS.find((x) => x.id === paint) || HONDA_PAINTS[0];
    return new THREE.Color(p.hex);
  }, [paint]);

  useFrame((_, delta) => {
    if (!visible) return;
    const k = 1 - Math.pow(0.001, delta);
    paintMaterial.color.lerp(targetColor, k);

    for (const mat of emissiveMats.current) {
      mat.emissiveIntensity = THREE.MathUtils.lerp(
        mat.emissiveIntensity,
        lightsOn ? 2.8 : 0,
        k,
      );
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/honda_cr-v_2026.glb');
