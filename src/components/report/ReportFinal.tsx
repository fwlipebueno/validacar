import { Bell, CalendarDays, Check, ChevronRight, ClipboardCheck, Download, Info, Send, Star, UserRound } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Notice } from '../common/Notice';
import type { ChecklistItem, RuralProperty } from '../../types';

interface ReportFinalProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
}

export function ReportFinal({ property, checklist }: ReportFinalProps) {
  const completedCount = checklist.filter((item) => item.status === 'done').length;

  return (
    <>
      <section className="card report-ready">
        <span className="success-icon">
          <Check size={26} />
        </span>
        <div>
          <h2>Relatório pronto</h2>
          <p>Seu relatório foi gerado com sucesso e está pronto para ser exportado ou compartilhado.</p>
        </div>
      </section>

      <section className="card report-info">
        <h2>Informações do relatório</h2>
        <div>
          <CalendarDays size={18} />
          <span>Data de geração</span>
          <strong>16/05/2024 às 09:41</strong>
        </div>
        <div>
          <UserRound size={18} />
          <span>Responsável</span>
          <strong>{property.responsible}</strong>
        </div>
        <div>
          <Bell size={18} />
          <span>Prioridade geral</span>
          <Badge tone="orange">{property.report.priority}</Badge>
        </div>
        <div>
          <Info size={18} />
          <span>Total de alertas</span>
          <strong className="red-text">{property.alerts.length}</strong>
        </div>
        <div>
          <ClipboardCheck size={18} />
          <span>Checklist concluído</span>
          <strong>
            {completedCount}/{checklist.length}
          </strong>
        </div>
      </section>

      <section className="card recommendation-final">
        <div className="panel-title">
          <Star size={20} />
          <h2>Recomendação final</h2>
        </div>
        <p>{property.report.recommendation}</p>
      </section>

      <section className="card next-steps">
        <div className="panel-title">
          <ClipboardCheck size={20} />
          <h2>Próximos passos</h2>
        </div>
        {property.report.nextSteps.map((step, index) => (
          <article key={step}>
            <span>{index + 1}</span>
            <div>
              <strong>{step}</strong>
              <p>{index === 0 ? 'Ajuste o contorno do imóvel conforme as orientações.' : property.alerts[index].action}</p>
            </div>
            <ChevronRight size={20} />
          </article>
        ))}
      </section>

      <section className="card share-summary">
        <div className="panel-title">
          <UserRound size={20} />
          <h2>Resumo para compartilhamento</h2>
        </div>
        <p>{property.report.shareSummary}</p>
        <Notice />
      </section>

      <div className="report-actions">
        <button className="outline-button" type="button">
          <Download size={20} />
          Exportar PDF
        </button>
        <button className="primary-button" type="button">
          <Send size={20} />
          Compartilhar relatório
        </button>
      </div>
    </>
  );
}
