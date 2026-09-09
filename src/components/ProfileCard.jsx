function ProfileCard() {
  return (
    <section className="profile-card" id="inicio">
      <div className="profile-image-container">
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Foto de perfil"
        className="profile-image"
      />
      </div>

      <div className="profile-content">
        <span className="section-label">
          Portfólio Acadêmico
        </span>

        <h2>Letícia Oliveira Sá</h2>

        <h3>Desenvolvimento de Sistemas</h3>

        <div className="student-info">
          <p>
            <strong>Número:</strong> 19
          </p>

          <p>
            <strong>Série:</strong> 3º B
          </p>

          <p>
            <strong>Curso:</strong> Desenvolvimento de Sistemas
          </p>
        </div>

        <p>
          Este portfólio reúne minhas atividades, projetos e
          experiências desenvolvidas ao longo do curso técnico de
          Desenvolvimento de Sistemas.
        </p>

        <a
          className="primary-button"
          href="#portfolio"
        >
          Ver atividades
        </a>
      </div>
    </section>
  );
}

export default ProfileCard;