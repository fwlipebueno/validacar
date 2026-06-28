import { length, lineString } from '@turf/turf';
import { DraftingCompass, Ruler } from 'lucide-react';
import type { RuralProperty } from '../../types';
import { formatArea } from '../../utils/format';

interface MapSurveyPanelProps {
  property: RuralProperty;
}

function formatPerimeter(property: RuralProperty) {
  const geometry = property.polygon.geometry;
  if (geometry.type !== 'Polygon') return 'Verificar geometria';

  const perimeterKm = length(lineString(geometry.coordinates[0]), { units: 'kilometers' });
  return `${Math.round(perimeterKm * 1000).toLocaleString('pt-BR')} m`;
}

export function MapSurveyPanel({ property }: MapSurveyPanelProps) {
  return (
    <div className="map-survey-panel">
      <span>
        <Ruler size={15} />
        Área analisada: <strong>{formatArea(property.calculatedAreaHa)} ha</strong>
      </span>
      <span>
        <DraftingCompass size={15} />
        Perímetro: <strong>{formatPerimeter(property)}</strong>
      </span>
    </div>
  );
}
