function ExperienceItem({ date, company, location, role, description, highlights }) {
  return (
    <div className="experience-item">
      <div className="experience-item__meta">
        <p>{date}</p>
        <p>{company}</p>
        <p>{location}</p>
      </div>
      <div className="experience-item__content">
        <h3 className="experience-item__role">{role}</h3>
        <p className="experience-item__description">{description}</p>
        {highlights.length > 0 && (
          <ul className="experience-item__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
