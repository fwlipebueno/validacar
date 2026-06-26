import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import type { AlertItem, RuralProperty } from '../../types';

interface MapViewportProps {
  fitRequest: number;
  property: RuralProperty;
  selectedAlert?: AlertItem;
  variant: 'desktop' | 'mobile';
}

function getPropertyBounds(property: RuralProperty) {
  return L.geoJSON(property.polygon).getBounds();
}

export function MapViewport({ fitRequest, property, variant }: MapViewportProps) {
  const map = useMap();

  useEffect(() => {
    const fitProperty = () => {
      const bounds = getPropertyBounds(property);
      if (bounds.isValid()) {
        map.invalidateSize();
        map.fitBounds(bounds, {
          animate: false,
          maxZoom: variant === 'desktop' ? 16 : 15,
          padding: variant === 'desktop' ? [24, 24] : [20, 20],
        });
      }
    };

    fitProperty();
    const timers = [80, 220, 520].map((delay) => window.setTimeout(fitProperty, delay));
    return () => timers.forEach(window.clearTimeout);
  }, [fitRequest, map, property, variant]);

  return null;
}
