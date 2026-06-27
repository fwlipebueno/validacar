import { useState } from 'react';
import { ChevronRight, FileText, Home, Map, ShieldCheck, Target } from 'lucide-react';
import { AlertsPanel } from '../components/alerts/AlertsPanel';
import { ChecklistPanel } from '../components/checklist/ChecklistPanel';
import { Badge } from '../components/common/Badge';
import { DesktopHeader } from '../components/layout/DesktopHeader';
import { MapAnalysis } from '../components/map/MapAnalysis';
import { formatArea, formatAreaDifference } from '../utils/format';
import type { ChecklistItem, RuralProperty } from '../types';

interface DashboardPageProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
  onHome: () => void;
  onToggleChecklist: (id: string) => void;
  onReport: () => void;
}

export function RecommendationCard({ onReport }: { onReport?: () => void }) {
  return (
    <section className="recommendation-card">
      <div className="recommendation-copy">
        <div className="panel-title">
          <ShieldCheck size={20} />
          <h2>Resumo da recomendação</h2>
        </div>
        <p>
          Foram identificados 5 pontos que merecem atenção antes da retificação. Priorize a revisão do perímetro, trate
          a sobreposição e valide as informações de APP/Reserva Legal.
        </p>
      </div>
      <button className="next-step-card" type="button" onClick={onReport}>
        <Target size={26} />
        <span>
          <strong>Próximo melhor passo</strong>
          Revisar perímetro e tratar sobreposição.
        </span>
        <ChevronRight className="next-step-arrow" size={20} />
      </button>
    </section>
  );
}

export function DashboardPage({ property, checklist, onHome, onToggleChecklist, onReport }: DashboardPageProps) {
  const [selectedAlertId, setSelectedAlertId] = useState<number | undefined>();
  const [hoveredAlertId, setHoveredAlertId] = useState<number | undefined>();

  return (
    <main className="desktop-app dashboard-app">
      <DesktopHeader subtitle="Assistente de pré-retificação do CAR" onHome={onHome} />

      <section className="desktop-hero compact-hero">
        <div className="hero-icon">
          <FileText size={30} />
        </div>
        <div>
          <h1>Pré-análise do imóvel antes da retificação</h1>
          <p>
            O CAR já mostra os dados. O ValidaCAR mostra <strong>o que fazer com eles.</strong>
          </p>
        </div>
        <button className="primary-button desktop-report-button" type="button" onClick={onReport}>
          <FileText size={19} />
          Gerar relatório
        </button>
      </section>

      <section className="dashboard-grid">
        <aside className="card desktop-summary">
          <div className="panel-title">
            <Home size={20} />
            <h2>Resumo do imóvel</h2>
          </div>

          <div className="summary-primary">
            <span>Imóvel</span>
            <strong>{property.propertyName}</strong>
          </div>

          <div className="summary-compact-grid">
            <div>
              <span>Município / UF</span>
              <strong>
                {property.municipality} / {property.state}
              </strong>
            </div>
            <div>
              <span>Código CAR</span>
              <strong>{property.carCode}</strong>
            </div>
          </div>

          <div className="summary-status-grid">
            <div>
              <span>Situação no SICAR</span>
              <Badge tone="orange">{property.sicarStatus}</Badge>
            </div>
            <div>
              <span>Pode retificar agora?</span>
              <Badge tone="red">{property.canRectify ? 'Sim' : 'Não'}</Badge>
            </div>
          </div>

          <p className="summary-message">{property.rectificationMessage}</p>

          <div className="summary-metrics">
            <div>
              <span>Área declarada</span>
              <strong>{formatArea(property.declaredAreaHa)} ha</strong>
            </div>
            <div>
              <span>Área calculada</span>
              <strong>{formatArea(property.calculatedAreaHa)} ha</strong>
            </div>
            <div>
              <span>Diferença</span>
              <strong className="red-text">{formatAreaDifference(property.calculatedAreaHa, property.declaredAreaHa)}</strong>
            </div>
          </div>

          <div className="summary-alert-total">
            <span>Alertas encontrados</span>
            <Badge tone="red">{String(property.alerts.length)}</Badge>
          </div>
        </aside>

        <section className="card map-card">
          <div className="map-card-header">
            <div className="panel-title">
              <Map size={20} />
              <h2>Mapa de análise</h2>
            </div>
          </div>
          <MapAnalysis
            hoveredAlertId={hoveredAlertId}
            onSelectAlert={(alert) => setSelectedAlertId(alert.id)}
            property={property}
            selectedAlertId={selectedAlertId}
          />
        </section>

        <aside className="side-stack">
          <AlertsPanel
            alerts={property.alerts}
            onHoverAlert={setHoveredAlertId}
            onSelectAlert={(alert) => setSelectedAlertId(alert.id)}
            selectedAlertId={selectedAlertId}
          />
          <ChecklistPanel checklist={checklist} onToggle={onToggleChecklist} />
        </aside>
      </section>

      <RecommendationCard onReport={onReport} />
    </main>
  );
}
