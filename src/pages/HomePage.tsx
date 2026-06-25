import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  FileText,
  Map,
  ShieldCheck,
  Target,
  TriangleAlert,
} from 'lucide-react';
import homeMapPreview from '../assets/home-map-preview.jpg';
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
      <div className="preview-map-frame">
        <img
          src={homeMapPreview}
          alt="Mapa rural com perímetro do imóvel, sobreposição, área sensível e alertas numerados."
        />
      </div>
      <div className="preview-panel">
        <span>Diagnóstico</span>
        <strong>O que merece atenção?</strong>
        <article>
          <TriangleAlert size={24} />
          <b>Sobreposição no perímetro</b>
          <em>Alta</em>
        </article>
        <article>
          <FileText size={24} />
          <b>Retificação indisponível</b>
          <em>Alta</em>
        </article>
        <button type="button">
          <Target size={28} />
          <b>Próximo passo definido</b>
          <ChevronRight size={24} />
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
              Analisamos o imóvel, identificamos alertas e organizamos os próximos passos para apoiar a retificação com
              segurança.
            </p>
            <button className="primary-button" type="button" onClick={onStart}>
              Iniciar diagnóstico <ArrowRight size={22} />
            </button>
            <div className="privacy-line">
              <ShieldCheck size={22} />
              <span>Demo com dados de exemplo, sem envio para sistemas externos.</span>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
