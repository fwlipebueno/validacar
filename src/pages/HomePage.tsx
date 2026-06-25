import { ArrowRight, BarChart3, Bell, Check, FileText, Map, ShieldCheck, Target, TriangleAlert } from 'lucide-react';
import { Logo } from '../components/common/Logo';

interface HomePageProps {
  onStart: () => void;
}

function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="mini-panel">
        <Check size={16} />
        <Check size={16} />
        <Check size={16} />
      </div>
      <div className="screen-stand">
        <div className="screen-map">
          <div className="screen-poly" />
          <div className="screen-river" />
          <span>CAR</span>
        </div>
      </div>
      <div className="magnifier" />
      <div className="tree-dot" />
      <div className="ground-shape" />
    </div>
  );
}

function DesktopPreview() {
  return (
    <div className="home-dashboard-preview" aria-label="Prévia do diagnóstico ValidaCAR">
      <div className="preview-map">
        <div className="preview-river" />
        <div className="preview-overlap" />
        <div className="preview-sensitive" />
        <div className="preview-polygon" />
        <span className="preview-alert alert-a">1</span>
        <span className="preview-alert alert-b">2</span>
        <span className="preview-alert alert-c">3</span>
        <span className="preview-area">7,08 ha</span>
      </div>
      <div className="preview-panel">
        <span className="preview-kicker">Diagnóstico</span>
        <strong>O que merece atenção?</strong>
        <article>
          <TriangleAlert size={18} />
          <span>Sobreposição no perímetro</span>
          <b>Alta</b>
        </article>
        <article>
          <FileText size={18} />
          <span>Retificação indisponível</span>
          <b>Alta</b>
        </article>
        <button type="button">
          <Target size={18} />
          Próximo passo definido
        </button>
      </div>
    </div>
  );
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <main className="home-page">
      <section className="desktop-home">
        <header className="home-desktop-header">
          <Logo />
          <span>Assistente de pré-retificação do CAR</span>
        </header>

        <div className="home-desktop-content">
          <div className="home-copy-block">
            <span className="eyebrow">Diagnóstico orientativo para o CAR</span>
            <h1>Pré-análise do imóvel antes da retificação</h1>
            <p className="thesis">
              O CAR já mostra os dados. O ValidaCAR mostra <strong>o que fazer com eles.</strong>
            </p>
            <p>
              Organize a situação do imóvel, visualize pontos de atenção no mapa, entenda riscos em linguagem simples e
              saia com um checklist antes de tentar corrigir o cadastro.
            </p>
            <button className="primary-button" type="button" onClick={onStart}>
              Iniciar diagnóstico <ArrowRight size={22} />
            </button>
          </div>

          <DesktopPreview />
        </div>

        <div className="home-value-row">
          <article>
            <BarChart3 size={22} />
            <strong>Situação do imóvel</strong>
            <span>Status, área e condição de retificação em primeiro plano.</span>
          </article>
          <article>
            <Map size={22} />
            <strong>Mapa com alertas</strong>
            <span>Polígono, sobreposição e pontos críticos em uma leitura visual.</span>
          </article>
          <article>
            <ShieldCheck size={22} />
            <strong>Ação clara</strong>
            <span>Checklist e relatório orientativo antes da tentativa de retificação.</span>
          </article>
        </div>
      </section>

      <section className="mobile-home">
        <div className="phone-frame home-phone">
          <div className="mobile-status">9:41</div>
          <header className="home-top">
            <Logo />
            <Bell size={24} />
          </header>
          <section className="home-content">
            <h1>Pré-análise do imóvel antes da retificação</h1>
            <p className="thesis">
              O CAR já mostra os dados. O ValidaCAR mostra <strong>o que fazer com eles.</strong>
            </p>
            <HeroIllustration />
            <p className="home-copy">
              Analisamos seu imóvel no CAR, identificamos alertas e orientamos os próximos passos para retificar com
              segurança.
            </p>
            <button className="primary-button" type="button" onClick={onStart}>
              Iniciar diagnóstico <ArrowRight size={22} />
            </button>
            <div className="privacy-line">
              <ShieldCheck size={22} />
              <span>Seus dados estão protegidos e não são compartilhados.</span>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
