'use client';

export type CameraMode = 'film' | 'orbit' | 'cockpit' | 'customizer';

export type CameraLimits = {
  minDistance: number;
  maxDistance: number;
  minPolar: number;
  maxPolar: number;
  returnDelay: number;
};

export const CAMERA_LIMITS: Record<CameraMode, CameraLimits> = {
  film: {
    minDistance: 3.5,
    maxDistance: 12.0,
    minPolar: 0.15,
    maxPolar: Math.PI / 2.05,
    returnDelay: 1.2,
  },
  orbit: {
    minDistance: 3.0,
    maxDistance: 14.0,
    minPolar: 0.1,
    maxPolar: Math.PI / 2.02,
    returnDelay: 999999,
  },
  cockpit: {
    minDistance: 0.2,
    maxDistance: 1.5,
    minPolar: 0.2,
    maxPolar: Math.PI - 0.2,
    returnDelay: 999999,
  },
  customizer: {
    minDistance: 3.2,
    maxDistance: 9.0,
    minPolar: 0.2,
    maxPolar: Math.PI / 2.1,
    returnDelay: 4.0,
  },
};

export const cameraState = {
  mode: 'film' as CameraMode,
  activeModel: 'civic' as 'civic' | 'crv',
  drag: false,
  lastInputTime: 0,
  target: {
    azimuth: 0,
    elevation: 0,
    zoom: 1,
  },
  applied: {
    azimuth: 0,
    elevation: 0,
    zoom: 1,
  },
};
