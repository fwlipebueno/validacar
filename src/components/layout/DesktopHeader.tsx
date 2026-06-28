import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ChevronDown, CircleHelp, Plus } from 'lucide-react';
import { Logo } from '../common/Logo';

interface DesktopHeaderProps {
  subtitle: string;
  onBack?: () => void;
  onHome?: () => void;
  onAddProperty?: () => void;
  onViewAlerts?: () => void;
}

export function DesktopHeader({ subtitle, onBack, onHome, onAddProperty, onViewAlerts }: DesktopHeaderProps) {
  const [openMenu, setOpenMenu] = useState<'help' | 'alerts' | 'team' | null>(null);
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

  const toggleMenu = (menu: 'help' | 'alerts' | 'team') => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  const handleViewAlerts = () => {
    setOpenMenu(null);
    onViewAlerts?.();
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
            {onAddProperty && (
              <button className="soft-add-property-button" type="button" onClick={onAddProperty}>
                <Plus size={18} />
                Adicionar imóvel
              </button>
            )}
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
                aria-expanded={openMenu === 'alerts'}
                aria-haspopup="dialog"
                onClick={() => toggleMenu('alerts')}
              >
                <AlertTriangle size={18} />
                Alertas <b>5</b>
              </button>
              {openMenu === 'alerts' && (
                <div className="topbar-popover alerts-popover" role="dialog" aria-label="Alertas dos imóveis">
                  <strong>Alertas dos imóveis</strong>
                  <p>Resumo dos imóveis acompanhados nesta demonstração.</p>

                  <span className="popover-section-label">Imóvel atual</span>
                  <button className="property-alert-item property-alert-current" type="button" onClick={handleViewAlerts}>
                    <span className="property-alert-copy">
                      <b>Lote 56 e 57 da Quadra nº 13</b>
                      <small>5 alertas encontrados</small>
                    </span>
                    <em className="alert-badge-soft">Em análise</em>
                    <small className="property-alert-action">Ver no mapa</small>
                  </button>

                  <span className="popover-section-label">Outros imóveis</span>
                  <div className="property-alert-item property-alert-static">
                    <span className="property-alert-copy">
                      <b>Sítio Boa Esperança</b>
                      <small>3 pontos de atenção</small>
                    </span>
                    <em className="alert-badge-red">Alta</em>
                  </div>
                  <div className="property-alert-item property-alert-static">
                    <span className="property-alert-copy">
                      <b>Fazenda Santa Clara</b>
                      <small>Relatório orientativo pronto</small>
                    </span>
                    <em className="alert-badge-green">Ok</em>
                  </div>
                  <div className="property-alert-item property-alert-static">
                    <span className="property-alert-copy">
                      <b>Chácara São João</b>
                      <small>1 alerta pendente</small>
                    </span>
                    <em className="alert-badge-orange">Média</em>
                  </div>

                  <p className="popover-footer-note">Dados de exemplo para demonstração do MVP.</p>
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
              <span>Dados simulados</span>
              <span>Sem envio ao SICAR</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
