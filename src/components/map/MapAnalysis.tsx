import { useEffect, useState } from 'react';
import L from 'leaflet';
import { bbox } from '@turf/turf';
import { GeoJSON, MapContainer, Marker, Polyline, TileLayer, useMap } from 'react-leaflet';
import { formatArea } from '../../utils/format';
import type { AlertItem, RuralProperty } from '../../types';

interface MapAnalysisProps {
  property: RuralProperty;
  variant?: 'desktop' | 'mobile';
}

function FitBounds({ property, variant }: { property: RuralProperty; variant: 'desktop' | 'mobile' }) {
  const map = useMap();

  useEffect(() => {
    const [minLng, minLat, maxLng, maxLat] = bbox(property.polygon);
    map.fitBounds(
      [
        [minLat, minLng],
        [maxLat, maxLng],
      ],
      { padding: variant === 'desktop' ? [34, 54] : [28, 28], maxZoom: variant === 'desktop' ? 17 : 16 },
    );

    window.setTimeout(() => map.invalidateSize(), 120);
  }, [map, property, variant]);

  return null;
}

function createAlertIcon(alert: AlertItem) {
  return L.divIcon({
    className: `alert-marker marker-${alert.color}`,
    html: `<span>${alert.id}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

export function MapAnalysis({ property, variant = 'desktop' }: MapAnalysisProps) {
  const [useFallbackTiles, setUseFallbackTiles] = useState(false);
  const river: [number, number][] = [
    [-20.10235, -43.05595],
    [-20.10335, -43.05562],
    [-20.10455, -43.05602],
    [-20.10555, -43.05572],
    [-20.10625, -43.0552],
  ];

  return (
    <div className={`map-shell map-${variant}`}>
      <MapContainer center={[-20.10455, -43.0529]} zoom={16} zoomControl={false} attributionControl={false}>
        {useFallbackTiles ? (
          <TileLayer maxZoom={19} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        ) : (
          <TileLayer
            eventHandlers={{ tileerror: () => setUseFallbackTiles(true) }}
            maxZoom={20}
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        )}
        <FitBounds property={property} variant={variant} />
        <GeoJSON
          data={property.polygon}
          style={{ color: '#b7f8bd', fillColor: '#128640', fillOpacity: 0.6, weight: 4 }}
        />
        <GeoJSON
          data={property.overlap}
          style={{ color: '#ffffff', dashArray: '8 7', fillColor: '#d93642', fillOpacity: 0.72, weight: 3 }}
        />
        <GeoJSON
          data={property.restrictedArea}
          style={{ color: '#ffa51f', dashArray: '7 6', fillColor: '#ffb12c', fillOpacity: 0.38, weight: 4 }}
        />
        <Polyline positions={river} pathOptions={{ color: '#119bd2', weight: 4, opacity: 0.95 }} />
        {property.alerts.map((alert) => (
          <Marker icon={createAlertIcon(alert)} key={alert.id} position={alert.position} />
        ))}
      </MapContainer>
      <div className="map-area-label">{formatArea(property.calculatedAreaHa)} ha</div>
      <div className="map-controls" aria-hidden="true">
        <button type="button">+</button>
        <button type="button">−</button>
        <button type="button">⌾</button>
      </div>
      <div className="map-scale">100 m</div>
      <div className="road-label">MG-329</div>
      <div className="map-legend">
        <span>
          <i className="legend-property" /> Perímetro do imóvel
        </span>
        <span>
          <i className="legend-overlap" /> Possível sobreposição
        </span>
        <span>
          <i className="legend-restricted" /> Área sensível (APP/RL)
        </span>
        <span>
          <i className="legend-river" /> Curso d'água
        </span>
      </div>
    </div>
  );
}
