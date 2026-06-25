import L from 'leaflet';
import { Marker } from 'react-leaflet';
import type { RuralProperty } from '../../types';
import { formatArea } from '../../utils/format';

interface MapLabelsProps {
  property: RuralProperty;
}

function createLabelIcon(className: string, label: string, size: [number, number]) {
  return L.divIcon({
    className,
    html: `<span>${label}</span>`,
    iconAnchor: [size[0] / 2, size[1] / 2],
    iconSize: size,
  });
}

export function MapLabels({ property }: MapLabelsProps) {
  const areaIcon = createLabelIcon('map-area-leaflet-label', `${formatArea(property.calculatedAreaHa)} ha`, [86, 36]);
  const roadIcon = createLabelIcon('road-leaflet-label', 'MG-329', [78, 30]);

  return (
    <>
      <Marker icon={areaIcon} interactive={false} position={[-20.10472, -43.05275]} />
      <Marker icon={roadIcon} interactive={false} position={[-20.10428, -43.05005]} />
    </>
  );
}
