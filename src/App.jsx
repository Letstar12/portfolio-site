import { useEffect, useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";

import { getPortfolioData } from "./services/portfolio";

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        setLoading(true);
        setError("");

        const data = await getPortfolioData();

        setPortfolio(data);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar as atividades.");
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  return (
    <div className="site">
      <Header />

      <main className="main-container">
        <div className="content">
          <ProfileCard />

          <section className="about-card" id="sobre">
            <span className="section-label">Sobre</span>

            <h2>Sobre este portfólio</h2>

            <p>
              Este portfólio reúne minhas atividades, projetos e
              experiências desenvolvidas durante o curso técnico de
              Desenvolvimento de Sistemas.
            </p>

            <p>
              O conteúdo é atualizado automaticamente a partir das
              atividades armazenadas no meu repositório de estudos.
            </p>
          </section>

          <section className="portfolio-intro" id="portfolio">
            <span className="section-label">Projetos e atividades</span>

            <h2>Meu portfólio</h2>

            <p>
              Confira abaixo as atividades desenvolvidas durante
              minha formação.
            </p>
          </section>

          <section className="semester-section" id="semestres">
            <div className="section-heading">
              <div>
                <span className="section-label">Formação</span>

                <h2>Atividades do curso</h2>

                <p>
                  Conteúdo atualizado automaticamente a partir do
                  repositório de atividades.
                </p>
              </div>
            </div>

            {loading && (
              <div className="github-status">
                <p>Carregando atividades...</p>
              </div>
            )}

            {!loading && error && (
              <div className="github-status error">
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && portfolio && (
              <div className="portfolio-data">
                {portfolio.files?.length > 0 ? (
                  <div className="github-files">
                    {portfolio.files.map((file) => (
                      <a
                        href={file.url}
                        key={file.path}
                        target="_blank"
                        rel="noreferrer"
                        className="github-file"
                      >
                        <span className="github-file-icon">📄</span>

                        <span className="github-file-info">
                          <strong>{file.name}</strong>

                          <small>{file.path}</small>
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="github-status">
                    <p>Nenhuma atividade encontrada.</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;