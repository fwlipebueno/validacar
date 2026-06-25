import { Copy, Home, MapPinned } from 'lucide-react';
import { Badge } from '../common/Badge';
import type { RuralProperty } from '../../types';

interface PropertySummaryProps {
  property: RuralProperty;
  compact?: boolean;
}

export function PropertySummary({ property, compact = false }: PropertySummaryProps) {
  return (
    <article className={`card summary-card ${compact ? 'compact-card' : ''}`}>
      <div className="section-label">
        <Home size={18} />
        <span>Imóvel</span>
      </div>
      <h2>{property.propertyName}</h2>
      <p className="muted inline-muted">
        <MapPinned size={18} />
        {property.municipality} / {property.state}
      </p>
      <div className="divider" />
      <div className="field-line">
        <span>Código CAR</span>
        <strong>{property.carCode}</strong>
        <Copy size={18} />
      </div>
      <div className="summary-badges">
        <Badge tone="orange">{property.sicarStatus}</Badge>
        <Badge tone={property.canRectify ? 'green' : 'red'}>{property.canRectify ? 'Pode retificar' : 'Não'}</Badge>
      </div>
      {!compact && <p className="muted rectification-copy">{property.rectificationMessage}</p>}
    </article>
  );
}
