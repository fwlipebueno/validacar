import L from 'leaflet';
import { Marker, Popup, useMap } from 'react-leaflet';
import { Badge } from '../common/Badge';
import type { AlertItem } from '../../types';
import type { VisibleMapLayers } from './mapTypes';

interface MapMarkersProps {
  alerts: AlertItem[];
  hoveredAlertId?: number;
  layers: VisibleMapLayers;
  selectedAlertId?: number;
  onSelectAlert?: (alert: AlertItem) => void;
}

function severityTone(severity: AlertItem['severity']) {
  if (severity === 'Alta') return 'red';
  if (severity === 'Média') return 'orange';
  return 'blue';
}

function createAlertIcon(alert: AlertItem, active: boolean) {
  return L.divIcon({
    className: `alert-marker marker-${alert.color}${active ? ' active-marker' : ''}`,
    html: `<span>${alert.id}</span>`,
    iconSize: active ? [38, 38] : [30, 30],
    iconAnchor: active ? [19, 19] : [15, 15],
  });
}

function isMarkerVisible(alert: AlertItem, layers: VisibleMapLayers) {
  if (alert.id === 1) return layers.overlap;
  if (alert.id === 3) return layers.restricted;
  return true;
}

export function MapMarkers({ alerts, hoveredAlertId, layers, selectedAlertId, onSelectAlert }: MapMarkersProps) {
  const map = useMap();

  return (
    <>
      {alerts.filter((alert) => isMarkerVisible(alert, layers)).map((alert) => {
        const active = alert.id === selectedAlertId || alert.id === hoveredAlertId;

        return (
          <Marker
            eventHandlers={{
              click: () => {
                onSelectAlert?.(alert);
                map.flyTo(alert.position, Math.max(map.getZoom(), 16), { duration: 0.45 });
              },
              mouseover: () => {
                if (!selectedAlertId) {
                  map.panTo(alert.position, { animate: true, duration: 0.25 });
                }
              },
            }}
            icon={createAlertIcon(alert, active)}
            key={alert.id}
            position={alert.position}
          >
            <Popup closeButton={false} offset={[0, -10]}>
              <div className="marker-popup">
                <strong>{alert.title}</strong>
                <Badge tone={severityTone(alert.severity)}>{alert.severity}</Badge>
                <p>{alert.action}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
