import { area as turfArea } from '@turf/turf';
import type { RuralProperty } from '../types';

export function getMockAreaValidation(property: RuralProperty) {
  const calculatedFromPolygon = turfArea(property.polygon) / 10000;
  const delta = Math.abs(calculatedFromPolygon - property.calculatedAreaHa);

  return {
    isReadyForFutureValidation: Number.isFinite(calculatedFromPolygon),
    hasMockGeometryDelta: delta > 0,
  };
}
