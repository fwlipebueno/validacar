import { MapPin } from 'lucide-react';
import type { RuralProperty } from '../../types';

interface MapContextPanelProps {
  property: RuralProperty;
}

export function MapContextPanel({ property }: MapContextPanelProps) {
  return (
    <div className="map-context-panel">
      <span>
        <MapPin size={15} />
        Imóvel carregado: {property.municipality} / {property.state}
      </span>
    </div>
  );
}
