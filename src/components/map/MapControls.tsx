import { useState } from 'react';
import { Layers, LocateFixed } from 'lucide-react';
import { useMap } from 'react-leaflet';
import type { VisibleMapLayers } from './mapTypes';

interface MapControlsProps {
  layers: VisibleMapLayers;
  onFitProperty: () => void;
  onToggleLayer: (layer: keyof VisibleMapLayers) => void;
}

export function MapControls({ layers, onFitProperty, onToggleLayer }: MapControlsProps) {
  const map = useMap();
  const [isLayerPanelOpen, setIsLayerPanelOpen] = useState(false);

  return (
    <>
      <div className="map-controls" aria-label="Controles do mapa">
        <button type="button" aria-label="Aproximar" onClick={() => map.zoomIn()}>
          +
        </button>
        <button type="button" aria-label="Afastar" onClick={() => map.zoomOut()}>
          −
        </button>
        <button type="button" aria-label="Reenquadrar imóvel" onClick={onFitProperty}>
          <LocateFixed size={18} />
        </button>
      </div>
      <div className="map-layer-control">
        <button
          type="button"
          aria-expanded={isLayerPanelOpen}
          aria-controls="map-layer-options"
          onClick={() => setIsLayerPanelOpen((current) => !current)}
        >
          <Layers size={17} />
          Camadas
        </button>
        {isLayerPanelOpen && (
          <div id="map-layer-options">
            <span className="loaded-file-chip">Camadas ativas</span>
            <label>
              <input checked={layers.overlap} onChange={() => onToggleLayer('overlap')} type="checkbox" />
              Sobreposição
            </label>
            <label>
              <input checked={layers.restricted} onChange={() => onToggleLayer('restricted')} type="checkbox" />
              APP/RL
            </label>
            <label>
              <input checked={layers.river} onChange={() => onToggleLayer('river')} type="checkbox" />
              Curso d'água
            </label>
          </div>
        )}
      </div>
    </>
  );
}
