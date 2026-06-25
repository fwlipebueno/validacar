import { useEffect, useState } from 'react';
import { property } from './data/propertyData';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { MobileChecklistPage, MobileMapPage, MobileSummaryPage } from './pages/MobilePages';
import { ReportPage } from './pages/ReportPage';
import { loadChecklist, saveChecklist } from './utils/storage';
import type { ChecklistItem, View } from './types';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => loadChecklist(property.checklist));

  useEffect(() => {
    saveChecklist(checklist);
  }, [checklist]);

  const toggleChecklist = (id: string) => {
    setChecklist((items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: item.status === 'done' ? 'pending' : 'done' } : item,
      ),
    );
  };

  if (view === 'home') {
    return <HomePage onStart={() => setView('summary')} />;
  }

  if (view === 'report') {
    return (
      <ReportPage
        checklist={checklist}
        onBack={() => setView('summary')}
        onHome={() => setView('home')}
        onNavigate={setView}
        property={property}
      />
    );
  }

  return (
    <>
      <div className="desktop-only-shell">
        <DashboardPage
          checklist={checklist}
          onHome={() => setView('home')}
          onReport={() => setView('report')}
          onToggleChecklist={toggleChecklist}
          property={property}
        />
      </div>
      <div className="mobile-only-shell">
        {view === 'summary' && (
          <MobileSummaryPage
            checklist={checklist}
            onHome={() => setView('home')}
            onNavigate={setView}
            onToggleChecklist={toggleChecklist}
            property={property}
          />
        )}
        {view === 'map' && (
          <MobileMapPage
            checklist={checklist}
            onHome={() => setView('home')}
            onNavigate={setView}
            onToggleChecklist={toggleChecklist}
            property={property}
          />
        )}
        {view === 'checklist' && (
          <MobileChecklistPage
            checklist={checklist}
            onHome={() => setView('home')}
            onNavigate={setView}
            onToggleChecklist={toggleChecklist}
            property={property}
          />
        )}
      </div>
    </>
  );
}
