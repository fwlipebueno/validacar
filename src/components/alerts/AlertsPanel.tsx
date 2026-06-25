import { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import { AlertCard } from './AlertCard';
import type { AlertItem } from '../../types';

interface AlertsPanelProps {
  alerts: AlertItem[];
  detailed?: boolean;
  selectedAlertId?: number;
  onSelectAlert?: (alert: AlertItem) => void;
  onHoverAlert?: (alertId?: number) => void;
}

export function AlertsPanel({ alerts, detailed = false, selectedAlertId, onSelectAlert, onHoverAlert }: AlertsPanelProps) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!selectedAlertId) return;

    const selectedCard = panelRef.current?.querySelector(`[data-alert-id="${selectedAlertId}"]`);
    selectedCard?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [selectedAlertId]);

  return (
    <section className="card alerts-panel" ref={panelRef}>
      <div className="panel-title">
        <AlertTriangle size={22} />
        <h2>Alertas encontrados ({alerts.length})</h2>
      </div>
      <div className="alert-list">
        {alerts.map((alert) => (
          <AlertCard
            alert={alert}
            detailed={detailed}
            key={alert.id}
            onSelect={onSelectAlert}
            onHover={onHoverAlert}
            selected={selectedAlertId === alert.id}
          />
        ))}
      </div>
    </section>
  );
}
