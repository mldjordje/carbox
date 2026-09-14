'use client';

export const SECTIONS = [
  'hero',
  'engineering',
  'configurator',
  'brands',
  'inventory',
  'moto',
  'finance',
  'service',
  'contact',
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const SECTION_RANGES: Record<SectionId, { start: number; end: number }> = {
  hero: { start: 0.0, end: 0.12 },
  engineering: { start: 0.12, end: 0.26 },
  configurator: { start: 0.26, end: 0.40 },
  brands: { start: 0.40, end: 0.52 },
  inventory: { start: 0.52, end: 0.68 },
  moto: { start: 0.68, end: 0.78 },
  finance: { start: 0.78, end: 0.88 },
  service: { start: 0.88, end: 0.95 },
  contact: { start: 0.95, end: 1.0 },
};

export const scrollState = {
  progress: 0,
  velocity: 0,
  target: 0,
  activeSection: 'hero' as SectionId,
};
