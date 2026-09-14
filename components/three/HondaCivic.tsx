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

export function HondaCivic({ paint = 'sonic_gray', lightsOn = true, visible = true }: Props) {
  const { scene } = useGLTF('/models/honda_civic_rs.glb');
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

      // Check if it's body paint
      if (
        matName.includes('body_paint') ||
        matName.includes('crystal_red') ||
        matName.includes('body_color') ||
        matName.includes('r_81') ||
        matName.includes('tosou')
      ) {
        child.material = paintMaterial;
      }

      // Upgrade glass
      if (matName.includes('glass') || matName.includes('window')) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#0a0d12'),
          transmission: 0.9,
          roughness: 0.05,
          ior: 1.52,
          transparent: true,
          opacity: 0.85,
        });
      }

      // Headlights & Taillights
      if (
        matName.includes('headlight_lamp') ||
        matName.includes('taillamp_red') ||
        matName.includes('bulb') ||
        matName.includes('rear_tail')
      ) {
        if (!emissiveMats.current.includes(mat)) {
          mat.emissive = matName.includes('taillamp')
            ? new THREE.Color('#ff1a2b')
            : new THREE.Color('#d4e8ff');
          mat.emissiveIntensity = lightsOn ? 2.5 : 0;
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
        lightsOn ? 2.5 : 0,
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

useGLTF.preload('/models/honda_civic_rs.glb');
