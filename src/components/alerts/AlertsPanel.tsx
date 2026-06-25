import { AlertTriangle } from 'lucide-react';
import { AlertCard } from './AlertCard';
import type { AlertItem } from '../../types';

interface AlertsPanelProps {
  alerts: AlertItem[];
  detailed?: boolean;
}

export function AlertsPanel({ alerts, detailed = false }: AlertsPanelProps) {
  return (
    <section className="card alerts-panel">
      <div className="panel-title">
        <AlertTriangle size={22} />
        <h2>Alertas encontrados ({alerts.length})</h2>
      </div>
      <div className="alert-list">{alerts.map((alert) => <AlertCard alert={alert} detailed={detailed} key={alert.id} />)}</div>
    </section>
  );
}
