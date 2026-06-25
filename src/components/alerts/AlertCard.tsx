import { ChevronRight } from 'lucide-react';
import { Badge } from '../common/Badge';
import type { AlertItem } from '../../types';

function severityTone(severity: AlertItem['severity']) {
  if (severity === 'Alta') return 'red';
  if (severity === 'Média') return 'orange';
  return 'blue';
}

interface AlertCardProps {
  alert: AlertItem;
  detailed?: boolean;
}

export function AlertCard({ alert, detailed = false }: AlertCardProps) {
  if (detailed) {
    return (
      <article className="alert-card-mobile">
        <div className="alert-card-head">
          <span className={`alert-number marker-${alert.color}`}>{alert.id}</span>
          <strong>{alert.title}</strong>
          <Badge tone={severityTone(alert.severity)}>{alert.severity}</Badge>
        </div>
        <p>{alert.summary}</p>
        <small>{alert.explanation}</small>
      </article>
    );
  }

  return (
    <article className={`alert-row row-${alert.color}`}>
      <span className={`alert-number marker-${alert.color}`}>{alert.id}</span>
      <div>
        <strong>{alert.title}</strong>
        <p>{alert.summary}</p>
      </div>
      <Badge tone={severityTone(alert.severity)}>{alert.severity}</Badge>
      <ChevronRight size={20} />
    </article>
  );
}
