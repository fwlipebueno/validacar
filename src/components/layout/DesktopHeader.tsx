import { Bell, ChevronDown, CircleHelp } from 'lucide-react';
import { Logo } from '../common/Logo';

interface DesktopHeaderProps {
  subtitle: string;
  onBack?: () => void;
}

export function DesktopHeader({ subtitle, onBack }: DesktopHeaderProps) {
  return (
    <header className="desktop-topbar">
      <Logo />
      <span className="topbar-separator" />
      <span>{subtitle}</span>
      <div className="topbar-actions">
        {onBack ? (
          <button type="button" onClick={onBack}>
            Voltar ao diagnóstico
          </button>
        ) : (
          <>
            <button type="button">
              <CircleHelp size={18} />
              Ajuda
            </button>
            <button type="button">
              <Bell size={18} />
              Notificações <b>3</b>
            </button>
          </>
        )}
        <div className="user-chip">
          <span>VC</span>
          <strong>
            Equipe ValidaCAR
            <small>Técnico responsável</small>
          </strong>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}
