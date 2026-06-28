import { ArrowLeft } from 'lucide-react';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { BottomNav } from '../components/layout/BottomNav';
import { DesktopHeader } from '../components/layout/DesktopHeader';
import { ReportFinal } from '../components/report/ReportFinal';
import { formatArea, formatAreaDifference } from '../utils/format';
import type { ChecklistItem, RuralProperty, View } from '../types';

interface ReportPageProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
  onBack: () => void;
  onHome: () => void;
  onNavigate: (view: View) => void;
}

export function ReportPage({ property, checklist, onBack, onHome, onNavigate }: ReportPageProps) {
  const reportDate = '16/05/2024 às 09:41';
  const completedCount = checklist.filter((item) => item.status === 'done').length;

  const exportPdf = () => {
    const previousTitle = document.title;
    document.title = `ValidaCAR - Relatório ${property.propertyName}`;

    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener('afterprint', restoreTitle);
    };

    window.addEventListener('afterprint', restoreTitle);
    window.setTimeout(() => {
      window.print();
    }, 80);
  };

  return (
    <>
      <div className="desktop-only-shell">
        <main className="desktop-app report-desktop-app">
          <DesktopHeader subtitle="Relatório orientativo de pré-retificação" onBack={onBack} onHome={onHome} />
          <section className="desktop-report-page">
            <div className="report-hero-line">
              <div>
                <h1>Relatório final</h1>
                <p>Diagnóstico orientativo gerado antes da tentativa de retificação.</p>
              </div>
            </div>
            <div className="desktop-report-grid">
              <ReportFinal property={property} checklist={checklist} onExportPdf={exportPdf} reportDate={reportDate} />
            </div>
          </section>
        </main>
      </div>

      <div className="mobile-only-shell">
        <main className="mobile-screen report-screen">
          <div className="phone-frame app-phone">
            <div className="mobile-status">9:41</div>
            <ScreenHeader title="Relatório final" onBack={onBack} onHome={onHome} right={<span />} />
            <div className="scroll-area">
              <ReportFinal property={property} checklist={checklist} onExportPdf={exportPdf} reportDate={reportDate} />
              <button className="outline-button full" type="button" onClick={onBack}>
                <ArrowLeft size={20} />
                Voltar ao diagnóstico
              </button>
            </div>
            <BottomNav current="report" onNavigate={onNavigate} />
          </div>
        </main>
      </div>

      <PrintableReport property={property} checklist={checklist} completedCount={completedCount} reportDate={reportDate} />
    </>
  );
}

interface PrintableReportProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
  completedCount: number;
  reportDate: string;
}

function PrintableReport({ property, checklist, completedCount, reportDate }: PrintableReportProps) {
  return (
    <article className="print-report" aria-hidden="true">
      <header className="print-report-header">
        <div>
          <strong className="print-logo">
            Valida<span>CAR</span>
          </strong>
          <p>Relatório orientativo de pré-retificação</p>
        </div>
        <div>
          <span>Data de geração</span>
          <strong>{reportDate}</strong>
        </div>
      </header>

      <section className="print-block print-property-identification">
        <h1>{property.propertyName}</h1>
        <div className="print-grid">
          <div>
            <span>Município/UF</span>
            <strong>
              {property.municipality} / {property.state}
            </strong>
          </div>
          <div>
            <span>Código CAR</span>
            <strong>{property.carCode}</strong>
          </div>
          <div>
            <span>Situação no SICAR</span>
            <strong>{property.sicarStatus}</strong>
          </div>
          <div>
            <span>Pode retificar agora?</span>
            <strong>{property.canRectify ? 'Sim' : 'Não'}</strong>
          </div>
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
            <strong>{formatAreaDifference(property.calculatedAreaHa, property.declaredAreaHa)}</strong>
          </div>
        </div>
      </section>

      <section className="print-block print-diagnostic-summary">
        <h2>Resumo do diagnóstico</h2>
        <div className="print-summary-row">
          <div>
            <span>Total de alertas</span>
            <strong>{property.alerts.length}</strong>
          </div>
          <div>
            <span>Prioridade geral</span>
            <strong>{property.report.priority}</strong>
          </div>
          <div>
            <span>Checklist concluído</span>
            <strong>
              {completedCount}/{checklist.length}
            </strong>
          </div>
        </div>
      </section>

      <section className="print-block">
        <h2>Recomendação final</h2>
        <p>{property.report.recommendation}</p>
        <p className="print-priority">Prioridade: revisar perímetro e sobreposição antes de tentar nova retificação.</p>
      </section>

      <section className="print-block">
        <h2>Próximos passos</h2>
        <ol className="print-steps">
          {property.report.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="print-block">
        <h2>Resumo para compartilhamento</h2>
        <p>{property.report.shareSummary}</p>
      </section>

      <footer className="print-disclaimer">Este diagnóstico é orientativo e não substitui a análise oficial do SICAR.</footer>
    </article>
  );
}
