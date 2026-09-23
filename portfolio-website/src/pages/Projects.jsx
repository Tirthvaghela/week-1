import { Link } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid.jsx";
import { projects } from "../data/projects.js";

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

function Projects() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">03</span>
          <h1>Projects</h1>
          <p className="page-header__lede">
            A selection of full-stack, AI/ML, computer vision, and NLP
            projects I&rsquo;ve built.
          </p>
        </div>
      </section>

      <section className="section projects-listing">
        <div className="container">
          <h2 className="section-heading">Featured Work</h2>
          <ProjectGrid projects={featuredProjects} detailed leadFirst />

          <h2 className="section-heading projects-heading--secondary">
            Additional Work
          </h2>
          <ProjectGrid
            projects={additionalProjects}
            detailed
            startIndex={featuredProjects.length}
          />
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <div className="contact-cta__row">
            <div className="contact-cta__text">
              <h2>Have a project in mind?</h2>
              <p>
                I&rsquo;m open to full-stack and applied AI/ML opportunities.
              </p>
            </div>
            <div className="btn-row">
              <Link to="/about" className="btn">
                About Me
              </Link>
              <Link to="/contact" className="btn btn--accent">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
