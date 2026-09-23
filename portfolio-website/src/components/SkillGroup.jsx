function SkillGroup({ category, items }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group__category">{category}</h3>
      <ul className="skill-group__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGroup;
