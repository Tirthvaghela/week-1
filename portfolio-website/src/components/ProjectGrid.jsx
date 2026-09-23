import ProjectCard from "./ProjectCard.jsx";

function ProjectGrid({ projects, detailed = false, leadFirst = false, startIndex = 0 }) {
  return (
    <div className="project-grid">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={startIndex + i}
          detailed={detailed}
          lead={leadFirst && i === 0}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
