import { ArrowLeft } from 'lucide-react';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { BottomNav } from '../components/layout/BottomNav';
import { DesktopHeader } from '../components/layout/DesktopHeader';
import { ReportFinal } from '../components/report/ReportFinal';
import type { ChecklistItem, RuralProperty, View } from '../types';

interface ReportPageProps {
  property: RuralProperty;
  checklist: ChecklistItem[];
  onBack: () => void;
  onHome: () => void;
  onNavigate: (view: View) => void;
}

export function ReportPage({ property, checklist, onBack, onHome, onNavigate }: ReportPageProps) {
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
              <ReportFinal property={property} checklist={checklist} />
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
              <ReportFinal property={property} checklist={checklist} />
              <button className="outline-button full" type="button" onClick={onBack}>
                <ArrowLeft size={20} />
                Voltar ao diagnóstico
              </button>
            </div>
            <BottomNav current="report" onNavigate={onNavigate} />
          </div>
        </main>
      </div>
    </>
  );
}
