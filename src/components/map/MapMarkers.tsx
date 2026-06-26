import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { Badge } from '../common/Badge';
import type { AlertItem } from '../../types';
import type { VisibleMapLayers } from './mapTypes';

interface MapMarkersProps {
  alerts: AlertItem[];
  hoveredAlertId?: number;
  layers: VisibleMapLayers;
  selectedAlertId?: number;
  onSelectAlert?: (alert: AlertItem) => void;
  variant?: 'desktop' | 'mobile';
}

function severityTone(severity: AlertItem['severity']) {
  if (severity === 'Alta') return 'red';
  if (severity === 'Média') return 'orange';
  return 'blue';
}

function createAlertIcon(alert: AlertItem, active: boolean, variant: 'desktop' | 'mobile') {
  const idleSize: [number, number] = variant === 'mobile' ? [26, 26] : [30, 30];
  const activeSize: [number, number] = variant === 'mobile' ? [32, 32] : [38, 38];
  const size = active ? activeSize : idleSize;

  return L.divIcon({
    className: `alert-marker marker-${alert.color}${active ? ' active-marker' : ''}`,
    html: `<span>${alert.id}</span>`,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
  });
}

function isMarkerVisible(alert: AlertItem, layers: VisibleMapLayers) {
  if (alert.id === 1) return layers.overlap;
  if (alert.id === 3) return layers.restricted;
  return true;
}

export function MapMarkers({
  alerts,
  hoveredAlertId,
  layers,
  selectedAlertId,
  onSelectAlert,
  variant = 'desktop',
}: MapMarkersProps) {
  return (
    <>
      {alerts.filter((alert) => isMarkerVisible(alert, layers)).map((alert) => {
        const active = alert.id === selectedAlertId || alert.id === hoveredAlertId;

        return (
          <Marker
            eventHandlers={{
              click: () => {
                onSelectAlert?.(alert);
              },
            }}
            icon={createAlertIcon(alert, active, variant)}
            key={alert.id}
            position={alert.position}
            zIndexOffset={active ? 850 : 650}
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
