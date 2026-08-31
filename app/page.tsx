import {
  ArrowDownToLine,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Film,
  Library,
  Monitor,
  MonitorDown,
  Palette,
  Play,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  WifiOff,
} from 'lucide-react';

const DOWNLOADS = {
  windows: 'https://github.com/arturseixas/SabuflixFlutter/releases/download/build-main--56/sabuflix-installer.exe',
  portable: 'https://github.com/arturseixas/SabuflixFlutter/releases/download/build-main--56/sabuflix-windows-bundle.zip',
  android: 'https://github.com/arturseixas/SabuflixFlutter/releases/download/build-main--56/sabuflix.apk',
  release: 'https://github.com/arturseixas/SabuflixFlutter/releases/tag/build-main--56',
  repo: 'https://github.com/arturseixas/SabuflixFlutter',
};

const features = [
  { icon: Film, title: 'Descubra o que assistir', copy: 'Explore filmes e séries em uma experiência visual que coloca o conteúdo em primeiro plano.' },
  { icon: Search, title: 'Encontre em segundos', copy: 'Pesquisa rápida, detalhes completos e navegação simples para chegar logo ao próximo play.' },
  { icon: Download, title: 'Leve com você', copy: 'Organize seus downloads e tenha sua biblioteca sempre à mão, mesmo quando estiver offline.' },
  { icon: Library, title: 'Sua biblioteca, organizada', copy: 'Lista, playlists, downloads e histórico reunidos em um só lugar, sem complicação.' },
  { icon: SlidersHorizontal, title: 'Do seu jeito', copy: 'Ajuste capas, ordenação e preferências para criar uma experiência realmente pessoal.' },
  { icon: Palette, title: 'Bonito em qualquer tela', copy: 'Uma interface escura, consistente e responsiva, pensada para desktop e dispositivos móveis.' },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Sabuflix — início">
          <span className="brand-mark"><Play fill="currentColor" size={16} /></span>
          <span>Sabuflix</span>
        </a>
        <div className="nav-links">
          <a href="#recursos">Recursos</a>
          <a href="#experiencia">O app</a>
          <a href="#download">Downloads</a>
          <a href={DOWNLOADS.repo} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <a className="nav-cta" href={DOWNLOADS.windows}>
          <ArrowDownToLine size={16} /> Baixar agora
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Seu entretenimento, do seu jeito</div>
          <h1>Sua central de mídia.<br /><span>Linda. Livre. Sua.</span></h1>
          <p>Filmes, séries e tudo o que você ama em uma experiência rápida, elegante e feita para a sua tela.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={DOWNLOADS.windows}>
              <MonitorDown size={19} /> Baixar para Windows
            </a>
            <a className="button button-secondary" href={DOWNLOADS.release} target="_blank" rel="noreferrer">
              <Code2 size={19} /> Ver no GitHub
            </a>
          </div>
          <div className="hero-meta">
            <span>Versão 1.1.0</span><i />
            <span>Windows & Android</span><i />
            <span>Grátis</span>
          </div>
        </div>

        <div className="app-stage">
          <div className="stage-orbit orbit-one" aria-hidden="true" />
          <div className="stage-orbit orbit-two" aria-hidden="true" />
          <div className="app-window">
            <div className="window-bar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>Sabuflix</span><div />
            </div>
            <img src="/sabuflix-home.png" alt="Tela inicial do Sabuflix com catálogo de filmes" />
          </div>
          <div className="floating-card card-play">
            <span><Play size={18} fill="currentColor" /></span>
            <div><strong>Pronto para assistir</strong><small>Continue de onde parou</small></div>
          </div>
          <div className="floating-card card-quality"><strong>4K</strong><span>Qualidade incrível</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Destaques">
        <p>Uma experiência feita para <strong>quem ama cinema.</strong></p>
        <div><span>Interface imersiva</span><i /><span>Downloads offline</span><i /><span>Código aberto</span></div>
      </section>

      <section className="section features-section" id="recursos">
        <div className="section-heading centered">
          <span className="section-kicker">Tudo em um só lugar</span>
          <h2>Menos procura.<br /><span>Mais histórias.</span></h2>
          <p>O Sabuflix tira o ruído do caminho para você aproveitar o que realmente importa.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, copy }, index) => (
            <article className={`feature-card feature-${index + 1}`} key={title}>
              <div className="feature-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-section" id="experiencia">
        <div className="showcase-copy section-heading">
          <span className="section-kicker">Feito para desaparecer</span>
          <h2>A interface sai de cena.<br /><span>O conteúdo fica.</span></h2>
          <p>Da descoberta aos detalhes, cada tela foi desenhada para ser clara, familiar e rápida.</p>
          <ul className="benefit-list">
            <li><span><ShieldCheck size={18} /></span><div><strong>Controle nas suas mãos</strong><small>Perfis, listas e preferências ficam organizados do seu jeito.</small></div></li>
            <li><span><WifiOff size={18} /></span><div><strong>Pronto para o offline</strong><small>Acesse e gerencie downloads pela sua biblioteca.</small></div></li>
            <li><span><Monitor size={18} /></span><div><strong>Experiência consistente</strong><small>Design pensado para funcionar bem em diferentes tamanhos de tela.</small></div></li>
          </ul>
        </div>
        <div className="screen-collage" aria-label="Telas do aplicativo Sabuflix">
          <figure className="screen screen-main"><img src="/sabuflix-details.png" alt="Página de detalhes de um filme no Sabuflix" /></figure>
          <figure className="screen screen-library"><img src="/sabuflix-library.png" alt="Biblioteca do Sabuflix" /></figure>
          <figure className="screen screen-settings"><img src="/sabuflix-settings.png" alt="Ajustes do Sabuflix" /></figure>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-glow" aria-hidden="true" />
        <div className="section-heading centered download-heading">
          <span className="section-kicker">Comece agora</span>
          <h2>Sua próxima sessão<br /><span>começa aqui.</span></h2>
          <p>Escolha sua plataforma e baixe diretamente do release oficial no GitHub.</p>
        </div>
        <div className="download-grid">
          <article className="download-card featured-download">
            <div className="recommended">Recomendado</div>
            <div className="platform-icon"><Monitor size={28} /></div>
            <div className="platform-copy"><span>Sabuflix para</span><h3>Windows</h3><p>Instalador • 23,5 MB</p></div>
            <a className="download-button" href={DOWNLOADS.windows}><Download size={18} /> Baixar instalador</a>
            <a className="alternative-download" href={DOWNLOADS.portable}>Prefere sem instalar? Baixe o ZIP portátil <ChevronRight size={14} /></a>
          </article>
          <article className="download-card">
            <div className="platform-icon"><Smartphone size={28} /></div>
            <div className="platform-copy"><span>Sabuflix para</span><h3>Android</h3><p>APK • 94,0 MB</p></div>
            <a className="download-button secondary-download" href={DOWNLOADS.android}><Download size={18} /> Baixar APK</a>
            <small className="install-note">Pode ser necessário permitir a instalação de apps externos.</small>
          </article>
        </div>
        <a className="all-releases" href={DOWNLOADS.release} target="_blank" rel="noreferrer">Ver todos os arquivos do release #56 <ExternalLink size={14} /></a>
      </section>

      <section className="open-source-section">
        <div>
          <span className="code-mark"><Code2 size={25} /></span>
          <div><h2>Aberto para quem gosta de construir.</h2><p>Conheça o código, acompanhe o projeto e contribua com o futuro do Sabuflix.</p></div>
        </div>
        <a className="button button-secondary" href={DOWNLOADS.repo} target="_blank" rel="noreferrer">Explorar repositório <ExternalLink size={16} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Play fill="currentColor" size={14} /></span><span>Sabuflix</span></a>
        <p>O Sabuflix é um cliente de mídia. Não hospeda nem distribui conteúdo. Use somente fontes e mídias que você tem autorização para acessar.</p>
        <span>© 2026 Sabuflix</span>
      </footer>
    </main>
  );
}
