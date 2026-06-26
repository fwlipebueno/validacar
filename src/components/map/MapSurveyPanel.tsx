import { area, length, lineString } from '@turf/turf';
import { DraftingCompass, FileUp, Ruler } from 'lucide-react';
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

function formatCalculatedArea(property: RuralProperty) {
  const squareMeters = area(property.polygon);
  return `${formatArea(squareMeters / 10000)} ha`;
}

export function MapSurveyPanel({ property }: MapSurveyPanelProps) {
  return (
    <div className="map-survey-panel">
      <span>
        <Ruler size={15} />
        Área: <strong>{formatCalculatedArea(property)}</strong>
      </span>
      <span>
        <DraftingCompass size={15} />
        Perímetro: <strong>{formatPerimeter(property)}</strong>
      </span>
      <span>CRS: WGS84</span>
      <span>
        <FileUp size={15} />
        GeoJSON
      </span>
    </div>
  );
}
