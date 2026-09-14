import * as THREE from 'three';

export const HONDA_PAINTS = [
  { id: 'sonic_gray', name: 'Sonic Gray Pearl', hex: '#5b6168', metallic: 0.25, roughness: 0.22 },
  { id: 'rallye_red', name: 'Rallye Red Racing', hex: '#c5121e', metallic: 0.15, roughness: 0.25 },
  { id: 'crystal_black', name: 'Crystal Black Pearl', hex: '#0a0a0d', metallic: 0.35, roughness: 0.18 },
  { id: 'platinum_white', name: 'Platinum White Pearl', hex: '#ededf2', metallic: 0.12, roughness: 0.28 },
  { id: 'boost_blue', name: 'Boost Blue Metallic', hex: '#0d4da6', metallic: 0.3, roughness: 0.2 },
  { id: 'urban_gray', name: 'Urban Titanium', hex: '#484b50', metallic: 0.35, roughness: 0.22 },
] as const;

export type PaintId = (typeof HONDA_PAINTS)[number]['id'];

export function createCarPaintMaterial(colorHex: string = HONDA_PAINTS[0].hex) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(colorHex),
    metalness: 0.12,
    roughness: 0.18,
    clearcoat: 0.45,
    clearcoatRoughness: 0.12,
    envMapIntensity: 0.35,
    ior: 1.48,
    reflectivity: 0.5,
    side: THREE.FrontSide,
  });
}
