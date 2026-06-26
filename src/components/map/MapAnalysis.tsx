import { useMemo, useState } from 'react';
import { MapContainer, ScaleControl, TileLayer } from 'react-leaflet';
import type { AlertItem, RuralProperty } from '../../types';
import { MapControls } from './MapControls';
import { MapContextPanel } from './MapContextPanel';
import { MapLabels } from './MapLabels';
import { MapLayers } from './MapLayers';
import { MapLegend } from './MapLegend';
import { MapMarkers } from './MapMarkers';
import { MapSurveyPanel } from './MapSurveyPanel';
import { MapViewport } from './MapViewport';
import type { VisibleMapLayers } from './mapTypes';

interface MapAnalysisProps {
  hoveredAlertId?: number;
  onSelectAlert?: (alert: AlertItem) => void;
  property: RuralProperty;
  selectedAlertId?: number;
  variant?: 'desktop' | 'mobile';
}

export function MapAnalysis({
  hoveredAlertId,
  onSelectAlert,
  property,
  selectedAlertId,
  variant = 'desktop',
}: MapAnalysisProps) {
  const [fitRequest, setFitRequest] = useState(0);
  const [useFallbackTiles, setUseFallbackTiles] = useState(false);
  const [layers, setLayers] = useState<VisibleMapLayers>({ overlap: true, restricted: true, river: true });
  const selectedAlert = useMemo(
    () => property.alerts.find((alert) => alert.id === selectedAlertId),
    [property.alerts, selectedAlertId],
  );

  const toggleLayer = (layer: keyof VisibleMapLayers) => {
    setLayers((current) => ({ ...current, [layer]: !current[layer] }));
  };

  return (
    <div className={`map-shell map-${variant}`}>
      <MapContainer
        center={[-20.10455, -43.0529]}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1}
        maxZoom={18}
        minZoom={7}
        preferCanvas
        zoom={15}
        zoomControl={false}
        attributionControl={false}
        worldCopyJump={false}
      >
        {useFallbackTiles ? (
          <TileLayer
            maxNativeZoom={18}
            maxZoom={18}
            noWrap
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <>
            <TileLayer
              eventHandlers={{ tileerror: () => setUseFallbackTiles(true) }}
              maxNativeZoom={17}
              maxZoom={18}
              noWrap
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <TileLayer
              maxNativeZoom={17}
              maxZoom={18}
              noWrap
              opacity={0.82}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            />
          </>
        )}
        <MapViewport fitRequest={fitRequest} property={property} selectedAlert={selectedAlert} variant={variant} />
        <MapLayers hoveredAlertId={hoveredAlertId} layers={layers} property={property} selectedAlertId={selectedAlertId} />
        <MapMarkers
          alerts={property.alerts}
          hoveredAlertId={hoveredAlertId}
          layers={layers}
          onSelectAlert={onSelectAlert}
          selectedAlertId={selectedAlertId}
          variant={variant}
        />
        <MapLabels property={property} />
        <MapControls
          layers={layers}
          onFitProperty={() => setFitRequest((request) => request + 1)}
          onToggleLayer={toggleLayer}
        />
        <ScaleControl imperial={false} position="bottomleft" />
      </MapContainer>
      <MapContextPanel property={property} />
      <MapSurveyPanel property={property} />
      <MapLegend />
    </div>
  );
}
