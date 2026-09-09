import ActivityCard from "./ActivityCard";

function SemesterSection({
  semester
}) {
  return (
    <section
      className="semester-section"
      id={semester.id}
    >
      <div className="section-heading">
        <div>
          <span className="section-label">
            Formação
          </span>

          <h2>{semester.title}</h2>

          <p>
            {semester.description}
          </p>
        </div>

        <a
          href={semester.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="secondary-button"
        >
          Abrir semestre
        </a>
      </div>

      {semester.periods.map((period) => (
        <div
          className="period"
          key={period.id}
        >
          <div className="period-header">
            <h3>{period.title}</h3>

            {period.githubUrl && (
              <a
                href={period.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver no GitHub
              </a>
            )}
          </div>

          {period.subjects && (
            <div className="activities-grid">
              {period.subjects.map((subject) => (
                <ActivityCard
                  key={subject.id}
                  title={subject.title}
                  description={subject.description}
                  githubUrl={subject.githubUrl}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default SemesterSection;