export function MapLegend() {
  return (
    <div className="map-legend">
      <span>
        <i className="legend-property" /> Perímetro do imóvel
      </span>
      <span>
        <i className="legend-overlap" /> Possível sobreposição
      </span>
      <span>
        <i className="legend-restricted" /> Área sensível (APP/RL)
      </span>
      <span>
        <i className="legend-river" /> Curso d'água
      </span>
    </div>
  );
}
