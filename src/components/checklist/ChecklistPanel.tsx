import { ArrowRight, Check, ClipboardCheck } from 'lucide-react';
import type { ChecklistItem } from '../../types';

interface ChecklistPanelProps {
  checklist: ChecklistItem[];
  onToggle: (id: string) => void;
  readOnly?: boolean;
}

export function ChecklistPanel({ checklist, onToggle, readOnly = false }: ChecklistPanelProps) {
  return (
    <section className="card checklist-panel">
      <div className="panel-title">
        <ClipboardCheck size={22} />
        <h2>Checklist de ação</h2>
      </div>
      <div className="checklist-list">
        {checklist.map((item) => {
          const checked = item.status === 'done';

          return (
            <label className="check-row" key={item.id}>
              <input checked={checked} disabled={readOnly} onChange={() => onToggle(item.id)} type="checkbox" />
              <span className="fake-check">{checked ? <Check size={14} /> : null}</span>
              <span>{item.label}</span>
              <em>{checked ? 'Concluído' : 'Pendente'}</em>
            </label>
          );
        })}
      </div>
      <button className="link-button" type="button">
        Ver todas as orientações <ArrowRight size={18} />
      </button>
    </section>
  );
}
