import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, ClipboardCheck, FileText, Layers, Map, Target } from 'lucide-react';
import { AlertCard } from '../components/alerts/AlertCard';
import { ChecklistPanel } from '../components/checklist/ChecklistPanel';
import { Notice } from '../components/common/Notice';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { BottomNav } from '../components/layout/BottomNav';
import { MapAnalysis } from '../components/map/MapAnalysis';
import { MetricsGrid } from '../components/property/MetricsGrid';
import { PropertySummary } from '../components/property/PropertySummary';
import { RecommendationCard } from './DashboardPage';
import type { ChecklistItem, RuralProperty, View } from '../types';

type SheetState = 'collapsed' | 'middle' | 'expanded';

interface MobilePageProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
  onHome: () => void;
  onNavigate: (view: View) => void;
  onToggleChecklist: (id: string) => void;
}

export function MobileSummaryPage({ property, onHome, onNavigate }: MobilePageProps) {
  return (
    <main className="mobile-screen">
      <div className="phone-frame app-phone">
        <div className="mobile-status">9:41</div>
        <ScreenHeader title="Resumo do imóvel" onHome={onHome} />
        <div className="scroll-area">
          <PropertySummary property={property} />
          <MetricsGrid property={property} />
          <button className="outline-button map-button" type="button" onClick={() => onNavigate('map')}>
            <Map size={23} />
            Ver no mapa
          </button>
          <Notice />
        </div>
        <BottomNav current="summary" onNavigate={onNavigate} />
      </div>
    </main>
  );
}

export function MobileMapPage({ property, onHome, onNavigate }: MobilePageProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [selectedAlertId, setSelectedAlertId] = useState<number | undefined>();
  const [sheetState, setSheetState] = useState<SheetState>('middle');

  useEffect(() => {
    sheetRef.current?.scrollTo({ top: 0 });
  }, []);

  const selectAlert = (alertId: number) => {
    setSelectedAlertId(alertId);
    setSheetState('middle');
    window.setTimeout(() => {
      sheetRef.current
        ?.querySelector(`[data-alert-id="${alertId}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  return (
    <main className="mobile-screen">
      <div className="phone-frame app-phone">
        <div className="mobile-status">9:41</div>
        <ScreenHeader title="Mapa e alertas" onBack={() => onNavigate('summary')} onHome={onHome} right={<Layers size={21} />} />
        <div className="mobile-map-wrapper">
          <MapAnalysis
            onSelectAlert={(alert) => selectAlert(alert.id)}
            property={property}
            selectedAlertId={selectedAlertId}
            variant="mobile"
          />
        </div>
        <div className={`mobile-sheet sheet-${sheetState}`} ref={sheetRef}>
          <div className="sheet-handle-row">
            <button
              type="button"
              aria-label={sheetState === 'collapsed' ? 'Ver alertas' : 'Recolher alertas'}
              onClick={() => setSheetState(sheetState === 'collapsed' ? 'middle' : 'collapsed')}
            >
              <span />
              <strong>{property.alerts.length} alertas encontrados</strong>
              <em>{sheetState === 'collapsed' ? 'Ver alertas' : 'Recolher'}</em>
            </button>
          </div>
          <section className="mobile-alerts-panel">
            <div className="panel-title">
              <AlertTriangle size={21} />
              <h2>Alertas encontrados ({property.alerts.length})</h2>
              <button type="button" onClick={() => setSheetState(sheetState === 'expanded' ? 'middle' : 'expanded')}>
                {sheetState === 'expanded' ? 'Ver mapa' : 'Ver todos'}
              </button>
            </div>
            <div className="mobile-alert-list">
              {property.alerts.map((alert) => (
                <AlertCard
                  alert={alert}
                  detailed
                  key={alert.id}
                  onSelect={() => selectAlert(alert.id)}
                  selected={selectedAlertId === alert.id}
                />
              ))}
            </div>
          </section>
          <button className="next-step-card mobile-next" type="button">
            <Target size={26} />
            <span>
              <strong>Próximo melhor passo</strong>
              Revisar perímetro do imóvel e tratar a sobreposição identificada.
            </span>
          </button>
          <button className="primary-button" type="button" onClick={() => onNavigate('report')}>
            <FileText size={21} />
            Gerar relatório
            <ArrowRight size={20} />
          </button>
          <Notice />
        </div>
        <BottomNav current="map" onNavigate={onNavigate} />
      </div>
    </main>
  );
}

export function MobileChecklistPage({ property, checklist, onHome, onNavigate, onToggleChecklist }: MobilePageProps) {
  return (
    <main className="mobile-screen">
      <div className="phone-frame app-phone">
        <div className="mobile-status">9:41</div>
        <ScreenHeader title="Checklist" onBack={() => onNavigate('map')} onHome={onHome} right={<ClipboardCheck size={21} />} />
        <div className="scroll-area">
          <ChecklistPanel checklist={checklist} onToggle={onToggleChecklist} />
          <RecommendationCard onReport={() => onNavigate('report')} />
          <Notice />
        </div>
        <BottomNav current="checklist" onNavigate={onNavigate} />
      </div>
    </main>
  );
}
