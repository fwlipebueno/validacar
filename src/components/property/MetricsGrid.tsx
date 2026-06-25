import { formatArea, formatAreaDifference } from '../../utils/format';
import type { RuralProperty } from '../../types';

interface MetricsGridProps {
  property: RuralProperty;
  includeDifference?: boolean;
}

export function MetricsGrid({ property, includeDifference = false }: MetricsGridProps) {
  return (
    <div className={`metric-grid ${includeDifference ? 'metric-grid-four' : ''}`}>
      <div>
        <span>Área declarada</span>
        <strong className="green-text">{formatArea(property.declaredAreaHa)} ha</strong>
      </div>
      <div>
        <span>Área calculada</span>
        <strong>{formatArea(property.calculatedAreaHa)} ha</strong>
      </div>
      <div>
        <span>Alertas encontrados</span>
        <strong className="red-text">{property.alerts.length}</strong>
      </div>
      {includeDifference && (
        <div>
          <span>Diferença</span>
          <strong className="red-text">
            {formatAreaDifference(property.calculatedAreaHa, property.declaredAreaHa)}
          </strong>
        </div>
      )}
    </div>
  );
}
