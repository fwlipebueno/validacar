import { useEffect, useRef, useState } from 'react';
import { Bell, ChevronDown, CircleHelp } from 'lucide-react';
import { Logo } from '../common/Logo';

interface DesktopHeaderProps {
  subtitle: string;
  onBack?: () => void;
  onHome?: () => void;
}

export function DesktopHeader({ subtitle, onBack, onHome }: DesktopHeaderProps) {
  const [openMenu, setOpenMenu] = useState<'help' | 'notifications' | 'team' | null>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!actionsRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = (menu: 'help' | 'notifications' | 'team') => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="desktop-topbar">
      <Logo onClick={onHome} />
      <span className="topbar-separator" />
      <span>{subtitle}</span>
      <div className="topbar-actions" ref={actionsRef}>
        {onBack ? (
          <button className="ghost-back-button" type="button" onClick={onBack}>
            ← Voltar ao diagnóstico
          </button>
        ) : (
          <>
            <div className="topbar-popover-wrap">
              <button
                type="button"
                aria-expanded={openMenu === 'help'}
                aria-haspopup="dialog"
                onClick={() => toggleMenu('help')}
              >
                <CircleHelp size={18} />
                Ajuda
              </button>
              {openMenu === 'help' && (
                <div className="topbar-popover help-popover" role="dialog" aria-label="Ajuda">
                  <p>Demo orientativa do ValidaCAR. Os dados são simulados e não substituem a análise oficial do SICAR.</p>
                </div>
              )}
            </div>
            <div className="topbar-popover-wrap">
              <button
                type="button"
                aria-expanded={openMenu === 'notifications'}
                aria-haspopup="dialog"
                onClick={() => toggleMenu('notifications')}
              >
                <Bell size={18} />
                Notificações <b>3</b>
              </button>
              {openMenu === 'notifications' && (
                <div className="topbar-popover notifications-popover" role="dialog" aria-label="Notificações">
                  <strong>3 pontos de atenção</strong>
                  <span>Sobreposição no perímetro</span>
                  <span>Retificação indisponível</span>
                  <span>Reserva Legal/APP pendente</span>
                </div>
              )}
            </div>
          </>
        )}
        <div className="topbar-popover-wrap">
          <button
            className="user-chip"
            type="button"
            aria-expanded={openMenu === 'team'}
            aria-haspopup="menu"
            onClick={() => toggleMenu('team')}
          >
            <span>VC</span>
            <strong>
              Equipe ValidaCAR
              <small>Técnico responsável</small>
            </strong>
            <ChevronDown size={16} />
          </button>
          {openMenu === 'team' && (
            <div className="topbar-popover team-popover" role="menu" aria-label="Equipe ValidaCAR">
              <strong>Equipe ValidaCAR</strong>
              <span>Técnico responsável</span>
              <span>Protótipo demonstrativo</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
