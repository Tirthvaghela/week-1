function ProjectCard({ project, index, detailed = false, lead = false }) {
  const { title, shortDescription, longDescription, tech, link } = project;
  const description = detailed ? longDescription : shortDescription;

  return (
    <article className={`project-row${lead ? " project-row--lead" : ""}`}>
      <span className="project-row__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="project-row__title">{title}</h3>
      <p className="project-row__meta">{tech.join(" · ")}</p>
      <p className="project-row__description">{description}</p>
      {link && (
        <a
          className="project-row__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project &rarr;
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
