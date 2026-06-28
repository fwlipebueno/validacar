import type { ReactNode } from 'react';
import { ClipboardCheck, FileText, Home, Map } from 'lucide-react';
import type { View } from '../../types';

interface BottomNavProps {
  current: View;
  onNavigate: (view: View) => void;
}

export function BottomNav({ current, onNavigate }: BottomNavProps) {
  const items: Array<{ view: View; label: string; icon: ReactNode }> = [
    { view: 'summary', label: 'Resumo', icon: <Home size={21} /> },
    { view: 'map', label: 'Mapa', icon: <Map size={21} /> },
    { view: 'checklist', label: 'Checklist', icon: <ClipboardCheck size={21} /> },
    { view: 'report', label: 'Relatório', icon: <FileText size={21} /> },
  ];

  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {items.map((item) => (
        <button
          className={current === item.view ? 'active' : ''}
          key={item.view}
          type="button"
          onClick={() => onNavigate(item.view)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
