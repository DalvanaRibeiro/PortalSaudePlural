import { ArrowRight, Award, BookOpen, CheckCircle2, HeartHandshake, LogIn, PlayCircle, ShieldCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const presentation = [
  'Esta formação autoinstrucional possui como intuito ampliar e aperfeiçoar a capacitação de profissionais do serviço de saúde quanto ao atendimento e acolhimento à comunidade LGBTQIA+, visando diminuir o preconceito e a discriminação dentro das unidades de saúde e proporcionando um ambiente de maior conforto e respeito.',
  'É fundamental que todas as pessoas se sintam respeitadas e bem cuidadas nos serviços de saúde. No entanto, sabemos que muitas pessoas enfrentam desafios devido à falta de compreensão e ao preconceito.',
  'O diferencial deste curso está na abordagem voltada ao cuidado e ao acolhimento do indivíduo no serviço de saúde, possibilitando ouvir pessoas envolvidas com o tema, usuários dos serviços e experiências construídas a partir da realidade do nosso território.',
  'Juntos, podemos construir um ambiente mais acolhedor e solidário, no qual todas as pessoas se sintam à vontade para compartilhar suas histórias e desafios.',
  'Esperamos que você aproveite muito esta formação e possa fazer a diferença na vida de alguém.',
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <div className="landing-pride" aria-hidden="true" />

      <header className="landing-header">
        <Link to="/" className="landing-logo">
          <img src="/icon.png" alt="Logotipo Saúde Plural" />
          <span>Saúde <strong>Plural</strong></span>
        </Link>
        <nav className="landing-nav" aria-label="Acesso à plataforma">
          <Link to="/login" className="landing-login"><LogIn /> Entrar</Link>
          <Link to="/cadastro" className="landing-register"><UserPlus /> Criar conta</Link>
        </nav>
      </header>

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <span className="landing-eyebrow"><ShieldCheck /> Formação autoinstrucional</span>
          <h1>Comunidade LGBTQIA+ na Atenção Básica de Saúde</h1>
          <h2>Cuidado e Acolhimento</h2>
          <p>Uma formação para fortalecer práticas de saúde mais humanas, inclusivas, acolhedoras e livres de discriminação.</p>
          <div className="landing-actions">
            <Link to="/cadastro" className="landing-primary">Começar agora <ArrowRight /></Link>
            <Link to="/login" className="landing-secondary">Já tenho uma conta</Link>
          </div>
          <div className="landing-highlights">
            <span><BookOpen /> 9 unidades curriculares</span>
            <span><Award /> Certificado digital</span>
            <span><CheckCircle2 /> Progresso salvo</span>
          </div>
        </div>
        <div className="landing-image-wrap">
          <img src="/LGB-splash2.jpg" alt="Representação visual do curso Saúde Plural" />
        </div>
      </section>

      <section className="landing-content">
        <div className="landing-video-column">
          <div className="landing-section-heading">
            <span><PlayCircle /> Apresentação em vídeo</span>
            <h2>Conheça a proposta do curso</h2>
          </div>
          <div className="landing-video-card">
            <div className="landing-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/9-PwVp5OdoU?controls=1&playsinline=1&rel=0"
                title="Apresentação do curso Saúde Plural"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a href="https://www.youtube.com/watch?v=9-PwVp5OdoU" target="_blank" rel="noopener noreferrer" className="landing-youtube-link">
              Abrir o vídeo diretamente no YouTube
            </a>
          </div>
        </div>

        <article className="landing-presentation">
          <span className="landing-eyebrow dark"><HeartHandshake /> Apresentação</span>
          <h2>Uma formação voltada ao respeito e ao cuidado</h2>
          {presentation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <aside className="landing-credit">
            <strong>Desenvolvimento do curso</strong>
            <p>Este curso foi criado e desenvolvido pela Turma do Curso Técnico de Enfermagem 24.1M e pelo Curso Técnico em Desenvolvimento de Sistemas da Escola Senac São Leopoldo, entre os anos de 2024 e 2026.</p>
          </aside>
        </article>
      </section>

      <section className="landing-cta">
        <div>
          <span>Formação, equidade e acolhimento</span>
          <h2>Comece agora a construir um atendimento mais inclusivo.</h2>
        </div>
        <Link to="/cadastro" className="landing-primary">Criar minha conta <ArrowRight /></Link>
      </section>

      <footer className="landing-footer">
        <strong>Saúde Plural</strong>
        <span>Formação para o cuidado inclusivo • Senac São Leopoldo</span>
      </footer>
    </main>
  );
}
