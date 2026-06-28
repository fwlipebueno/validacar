import { ArrowLeft } from 'lucide-react';
import { LogoSymbol } from '../components/common/Logo';
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

      <PrintableReport
        property={property}
        checklistTotal={checklist.length}
        completedCount={completedCount}
        reportDate={reportDate}
      />
    </>
  );
}

interface PrintableReportProps {
  property: RuralProperty;
  checklistTotal: number;
  completedCount: number;
  reportDate: string;
}

function PrintableReport({ property, checklistTotal, completedCount, reportDate }: PrintableReportProps) {
  const printSteps = [
    {
      title: 'Revisar e ajustar o perímetro',
      description: 'Ajuste o contorno do imóvel conforme as orientações.',
    },
    {
      title: 'Tratar sobreposição identificada',
      description: 'Conferir área declarada e cálculo do perímetro.',
    },
    {
      title: 'Validar informações de Reserva Legal',
      description: 'Revisar APP e Reserva Legal.',
    },
  ];

  return (
    <article className="print-report" aria-hidden="true">
      <header className="print-report-header">
        <div>
          <div className="print-brand">
            <LogoSymbol />
            <strong className="print-logo">
              Valida<span>CAR</span>
            </strong>
          </div>
          <p>Relatório orientativo de pré-retificação</p>
        </div>
        <div>
          <span>Imóvel</span>
          <strong>{property.propertyName}</strong>
          <span>Data de geração</span>
          <strong>{reportDate}</strong>
        </div>
      </header>

      <section className="print-executive">
        <div>
          <span>Resumo executivo</span>
          <h1>Diagnóstico orientativo antes da retificação</h1>
        </div>
        <div className="print-kpi-grid">
          <div>
            <span>Prioridade geral</span>
            <strong>{property.report.priority}</strong>
          </div>
          <div>
            <span>Alertas encontrados</span>
            <strong>{property.alerts.length}</strong>
          </div>
          <div>
            <span>Checklist concluído</span>
            <strong>
              {completedCount}/{checklistTotal}
            </strong>
          </div>
          <div>
            <span>Pode retificar agora</span>
            <strong>{property.canRectify ? 'Sim' : 'Não'}</strong>
          </div>
        </div>
        <p>Prioridade: revisar perímetro e sobreposição antes de tentar nova retificação.</p>
      </section>

      <section className="print-block print-property-identification">
        <h2>Dados do imóvel</h2>
        <div className="print-grid">
          <div>
            <span>Imóvel</span>
            <strong>{property.propertyName}</strong>
          </div>
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
        <h2>Diagnóstico orientativo</h2>
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
              {completedCount}/{checklistTotal}
            </strong>
          </div>
        </div>
        <p>{property.report.recommendation}</p>
        <p className="print-advisory">Este diagnóstico é orientativo e não substitui a análise oficial do SICAR.</p>
      </section>

      <section className="print-block">
        <h2>Próximos passos</h2>
        <ol className="print-steps">
          {printSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="print-block">
        <h2>Resumo para compartilhamento</h2>
        <p>{property.report.shareSummary}</p>
      </section>

      <footer className="print-disclaimer">
        <strong>ValidaCAR — Assistente orientativo de pré-retificação do CAR</strong>
        <span>Documento gerado para apoio técnico com dados demonstrativos. Não substitui análise oficial do órgão ambiental.</span>
      </footer>
    </article>
  );
}
