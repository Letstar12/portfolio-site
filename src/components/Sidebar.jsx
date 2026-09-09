function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <h2>Navegação</h2>

        <nav>
          <a href="#inicio">Início</a>

          <a href="#sobre">Sobre mim</a>

          <a href="#portfolio">Portfólio</a>

          <a href="#semestres">Semestres</a>

          <a
            href="https://github.com/Letstar12/portif-lio.ds"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>

      <div className="sidebar-card">
        <h2>Curso</h2>

        <p>
          Desenvolvimento de Sistemas
        </p>

        <p>
          Ensino Médio Técnico
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;