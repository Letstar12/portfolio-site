import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import SemesterSection from "./components/SemesterSection";
import Footer from "./components/Footer";

import { semesters } from "./data/activities";

function App() {
  return (
    <div className="site">

      <Header />

      <main className="main-container">

        <div className="content">

          <ProfileCard />

          <section
            className="about-card"
            id="sobre"
          >
            <span className="section-label">
              Sobre
            </span>

            <h2>Sobre este portfólio</h2>

            <p>
              Este espaço foi desenvolvido para reunir e
              apresentar as atividades realizadas durante
              minha formação em Desenvolvimento de Sistemas.
            </p>

            <p>
              Aqui estão organizados projetos e atividades
              relacionados a diferentes áreas da tecnologia,
              permitindo acompanhar minha evolução acadêmica
              ao longo dos semestres.
            </p>
          </section>

          <section
            className="portfolio-intro"
            id="portfolio"
          >
            <span className="section-label">
              Projetos e atividades
            </span>

            <h2>Meu portfólio</h2>

            <p>
              Confira abaixo as áreas e atividades
              desenvolvidas durante o curso.
            </p>
          </section>

          <div id="semestres">
            {semesters.map((semester) => (
              <SemesterSection
                key={semester.id}
                semester={semester}
              />
            ))}
          </div>

        </div>

        <Sidebar />

      </main>

      <Footer />

    </div>
  );
}

export default App;