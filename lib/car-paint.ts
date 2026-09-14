import * as THREE from 'three';

export const HONDA_PAINTS = [
  { id: 'sonic_gray', name: 'Sonic Gray Pearl', hex: '#737c87', metallic: 0.3, roughness: 0.18 },
  { id: 'rallye_red', name: 'Rallye Red Racing', hex: '#d61625', metallic: 0.25, roughness: 0.2 },
  { id: 'crystal_black', name: 'Crystal Black Pearl', hex: '#111215', metallic: 0.35, roughness: 0.16 },
  { id: 'platinum_white', name: 'Platinum White Pearl', hex: '#f6f7fa', metallic: 0.2, roughness: 0.22 },
  { id: 'boost_blue', name: 'Boost Blue Metallic', hex: '#0c58cb', metallic: 0.35, roughness: 0.18 },
  { id: 'urban_gray', name: 'Urban Titanium', hex: '#5a5e66', metallic: 0.35, roughness: 0.2 },
] as const;

export type PaintId = (typeof HONDA_PAINTS)[number]['id'];

export function createCarPaintMaterial(colorHex: string = HONDA_PAINTS[0].hex) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(colorHex),
    metalness: 0.3,
    roughness: 0.18,
    clearcoat: 0.7,
    clearcoatRoughness: 0.1,
    envMapIntensity: 0.75,
    ior: 1.5,
    reflectivity: 0.7,
    side: THREE.FrontSide,
  });
}
