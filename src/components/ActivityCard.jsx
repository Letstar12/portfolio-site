function ActivityCard({
  title,
  description,
  githubUrl
}) {
  return (
    <article className="activity-card">
      <div className="activity-card-content">
        <span className="activity-label">
          Atividade
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="secondary-button"
        >
          Ver no GitHub
        </a>
      </div>
    </article>
  );
}

export default ActivityCard;