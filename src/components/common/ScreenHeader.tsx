import type { ReactNode } from 'react';
import { ArrowLeft, Bell, Menu } from 'lucide-react';
import { LogoSymbol } from './Logo';

interface ScreenHeaderProps {
  onHome?: () => void;
  title: string;
  onBack?: () => void;
  right?: ReactNode;
}

export function ScreenHeader({ title, onBack, onHome, right }: ScreenHeaderProps) {
  return (
    <header className="mobile-header">
      <button className="icon-button" type="button" onClick={onBack} aria-label={onBack ? 'Voltar' : 'Menu'}>
        {onBack ? <ArrowLeft size={21} /> : <Menu size={21} />}
      </button>
      {onHome && (
        <button className="mobile-home-mark" type="button" onClick={onHome} aria-label="Voltar para a home">
          <LogoSymbol />
        </button>
      )}
      <strong>{title}</strong>
      <div className="mobile-header-right">{right ?? <Bell size={21} />}</div>
    </header>
  );
}
