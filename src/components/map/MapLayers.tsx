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
    [-20.10198, -43.05638],
    [-20.10282, -43.05608],
    [-20.10358, -43.05618],
    [-20.10442, -43.05594],
    [-20.10516, -43.05558],
    [-20.1061, -43.05518],
  ];

  return (
    <>
      {layers.river && (
        <>
          <Polyline
            positions={river}
            pathOptions={{
              color: '#064f7c',
              weight: riverActive ? 13 : 10,
              opacity: riverActive ? 0.78 : 0.58,
              lineCap: 'round',
              lineJoin: 'round',
            }}
          />
          <Polyline
            positions={river}
            pathOptions={{
              color: '#27c7f2',
              weight: riverActive ? 6 : 4,
              opacity: 0.98,
              lineCap: 'round',
              lineJoin: 'round',
            }}
          />
        </>
      )}
      <GeoJSON
        data={property.polygon}
        style={{ color: '#c1fac6', fillColor: '#128640', fillOpacity: 0.62, weight: 2 }}
      />
      {layers.overlap && (
        <GeoJSON
          data={property.overlap}
          key={`overlap-${overlapActive}`}
          style={{
            color: '#ffffff',
            dashArray: '8 7',
            fillColor: '#d93642',
            fillOpacity: overlapActive ? 0.84 : 0.7,
            weight: overlapActive ? 5 : 3,
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
            fillOpacity: restrictedActive ? 0.6 : 0.42,
            weight: restrictedActive ? 5 : 4,
          }}
        />
      )}
      <GeoJSON data={property.polygon} style={{ color: '#b7f8bd', fillOpacity: 0, weight: 5 }} />
    </>
  );
}
