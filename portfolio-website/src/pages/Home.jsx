import { Link } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid.jsx";
import { projects } from "../data/projects.js";

const featuredProjects = projects.filter((project) => project.featured);

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__layout">
          <div className="hero__content">
            <span className="eyebrow">AI/ML · FULL-STACK · SOFTWARE</span>
            <h1 className="hero__name">Tirth Vaghela</h1>
            <p className="hero__role">AI/ML &amp; Full-Stack Developer</p>
            <p className="hero__intro">
              I build full-stack and AI-powered applications, with hands-on
              experience in computer vision, NLP, automation, and modern web
              development.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn--accent">
                View Projects
              </Link>
              <Link to="/about" className="btn">
                About Me
              </Link>
            </div>
          </div>

          <div className="hero__meta">
            <span className="eyebrow">01</span>
            <ul className="meta-list">
              <li>Full-Stack</li>
              <li>AI · ML</li>
              <li>Computer Vision</li>
              <li>NLP</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container">
          <h2 className="section-heading">About</h2>
          <div className="about-teaser__layout">
            <div className="about-teaser__content">
              <p className="about-teaser__text">
                I&rsquo;m currently pursuing my Integrated M.Sc. in IT at GLS
                University, working across full-stack development and
                applied AI/ML, computer vision, NLP, and the backend/API
                work that ties a system together, built mostly with Python
                and React/Next.js.
              </p>
              <Link to="/about" className="text-link">
                Read more &rarr;
              </Link>
            </div>
            <ul className="meta-list about-teaser__meta">
              <li>GLS University</li>
              <li>M.Sc. IT</li>
              <li>Sem 9</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section selected-work">
        <div className="container">
          <div className="selected-work__header">
            <h2 className="section-heading">Selected Work</h2>
            <Link to="/projects" className="text-link">
              View all projects &rarr;
            </Link>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <div className="contact-cta__row">
            <div className="contact-cta__text">
              <h2>Let&rsquo;s build something useful.</h2>
              <p>
                I&rsquo;m open to full-stack and applied AI/ML work &mdash;
                reach out if something here lines up with what you&rsquo;re
                building.
              </p>
            </div>
            <Link to="/contact" className="btn btn--accent">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
