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
  const riverIcon = createLabelIcon('river-leaflet-label', 'Ribeirão São João', [132, 28]);

  return (
    <>
      <Marker icon={riverIcon} interactive={false} position={[-20.1052, -43.0557]} zIndexOffset={500} />
      <Marker icon={areaIcon} interactive={false} position={[-20.10475, -43.05272]} zIndexOffset={760} />
      <Marker icon={roadIcon} interactive={false} position={[-20.10398, -43.04968]} zIndexOffset={740} />
    </>
  );
}
