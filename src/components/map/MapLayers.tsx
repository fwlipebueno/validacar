import { GeoJSON, Polyline } from 'react-leaflet';
import type { RuralProperty } from '../../types';
import type { VisibleMapLayers } from './mapTypes';

interface MapLayersProps {
  property: RuralProperty;
  selectedAlertId?: number;
  hoveredAlertId?: number;
  layers: VisibleMapLayers;
}

function isActive(alertIds: number[], selectedAlertId?: number, hoveredAlertId?: number) {
  return alertIds.includes(selectedAlertId ?? 0) || alertIds.includes(hoveredAlertId ?? 0);
}

export function MapLayers({ property, selectedAlertId, hoveredAlertId, layers }: MapLayersProps) {
  const overlapActive = isActive([1], selectedAlertId, hoveredAlertId);
  const restrictedActive = isActive([3], selectedAlertId, hoveredAlertId);
  const riverActive = isActive([5], selectedAlertId, hoveredAlertId);

  const river: [number, number][] = [
    [-20.1022, -43.05595],
    [-20.10325, -43.05562],
    [-20.10442, -43.05595],
    [-20.10545, -43.05568],
    [-20.10625, -43.05512],
  ];

  return (
    <>
      {layers.river && (
        <Polyline
          positions={river}
          pathOptions={{
            color: '#0ea5d7',
            weight: riverActive ? 6 : 4,
            opacity: 0.96,
          }}
        />
      )}
      <GeoJSON
        data={property.polygon}
        style={{ color: '#b7f8bd', fillColor: '#128640', fillOpacity: 0.56, weight: 2 }}
      />
      {layers.overlap && (
        <GeoJSON
          data={property.overlap}
          key={`overlap-${overlapActive}`}
          style={{
            color: '#ffffff',
            dashArray: '8 7',
            fillColor: '#d93642',
            fillOpacity: overlapActive ? 0.82 : 0.68,
            weight: overlapActive ? 4 : 3,
          }}
        />
      )}
      {layers.restricted && (
        <GeoJSON
          data={property.restrictedArea}
          key={`restricted-${restrictedActive}`}
          style={{
            color: '#ffa51f',
            dashArray: '7 6',
            fillColor: '#ffb12c',
            fillOpacity: restrictedActive ? 0.52 : 0.36,
            weight: restrictedActive ? 5 : 4,
          }}
        />
      )}
      <GeoJSON data={property.polygon} style={{ color: '#b7f8bd', fillOpacity: 0, weight: 4 }} />
    </>
  );
}
