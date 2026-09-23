import { Link } from "react-router-dom";
import ExperienceItem from "../components/ExperienceItem.jsx";
import SkillGroup from "../components/SkillGroup.jsx";
import { skills } from "../data/skills.js";

function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">02</span>
          <h1>About</h1>
          <p className="page-header__lede">
            A little more about how I work, what I build, and the
            technologies I use.
          </p>
        </div>
      </section>

      <section className="section about-profile">
        <div className="container">
          <h2 className="section-heading">Profile</h2>
          <div className="about-profile__layout">
            <div className="about-profile__content">
              <p>
                I&rsquo;m a full-stack developer currently pursuing my
                Integrated M.Sc. in IT at GLS University, working across web
                development and applied AI/ML. Most of what I build sits at
                that intersection &mdash; systems where a React or Next.js
                frontend talks to a Python or Node backend, which in turn
                talks to a model doing something useful: reading a form,
                matching a face, or flagging a traffic violation.
              </p>
              <p>
                I like working through a full stack rather than staying in
                one layer. That usually means building the API, wiring up
                the database, and getting the AI component &mdash; computer
                vision, OCR, or retrieval &mdash; to actually behave inside
                a real application, not just in a notebook.
              </p>
            </div>
            <ul className="meta-list about-profile__meta">
              <li>Tirth Vaghela</li>
              <li>Ahmedabad, India</li>
              <li>Currently: Sem 9</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section career-interests">
        <div className="container">
          <h2 className="section-heading">Career Interests</h2>
          <div className="interest-grid">
            <div className="interest-item">
              <span className="eyebrow">01</span>
              <h3 className="interest-item__title">
                Full-Stack Development
              </h3>
              <p className="interest-item__desc">
                Building complete web applications across frontend, backend,
                APIs and databases.
              </p>
            </div>
            <div className="interest-item">
              <span className="eyebrow">02</span>
              <h3 className="interest-item__title">AI / ML</h3>
              <p className="interest-item__desc">
                Building practical AI-powered applications rather than only
                experimental models.
              </p>
            </div>
            <div className="interest-item">
              <span className="eyebrow">03</span>
              <h3 className="interest-item__title">Computer Vision</h3>
              <p className="interest-item__desc">
                Working with YOLO, OpenCV and OCR for real-world visual
                processing.
              </p>
            </div>
            <div className="interest-item">
              <span className="eyebrow">04</span>
              <h3 className="interest-item__title">NLP</h3>
              <p className="interest-item__desc">
                Working with semantic search, embeddings and hybrid
                retrieval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience">
        <div className="container">
          <h2 className="section-heading">Experience</h2>
          <ExperienceItem
            date="September 2026 – Present"
            company="WeIntern Pvt Ltd"
            location="Hybrid, Pune"
            role="Full Stack Web Developer Intern"
            description="Currently contributing to assigned web development tasks, project deliverables, research, implementation, and team collaboration as part of the internship program."
            highlights={[]}
          />
          <ExperienceItem
            date="February 2026"
            company="Prodigy InfoTech"
            location="Remote"
            role="Full-Stack Web Development Intern"
            description="Built and shipped several full-stack applications end to end, from authentication systems to a MERN-based internal tool and a full social platform."
            highlights={[
              "Built an enterprise authentication system with Django REST Framework and React — JWT, TOTP-based 2FA, session management, audit logging, and RBAC.",
              "Built a MERN Employee Management System with file uploads, search/filtering, and CSV/PDF export.",
              "Built a PHP and MySQL e-commerce platform.",
              "Built Vois, a full-stack social platform, using React, FastAPI, and MongoDB.",
            ]}
          />
        </div>
      </section>

      <section className="section education">
        <div className="container">
          <h2 className="section-heading">Education</h2>
          <div className="timeline-row">
            <p className="timeline-row__date">2025&ndash;2027</p>
            <div className="timeline-row__content">
              <h3 className="timeline-row__title">Integrated M.Sc. (IT)</h3>
              <p className="timeline-row__meta">
                GLS University &middot; Currently Sem 9
              </p>
            </div>
          </div>
          <div className="timeline-row">
            <p className="timeline-row__date">2022&ndash;2025</p>
            <div className="timeline-row__content">
              <h3 className="timeline-row__title">B.Sc. (IT)</h3>
              <p className="timeline-row__meta">
                GLS University &middot; 7.64 CGPA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills">
        <div className="container">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <SkillGroup
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <div className="contact-cta__row">
            <div className="contact-cta__text">
              <h2>Want to see what I&rsquo;ve built?</h2>
              <p>Explore the projects or get in touch.</p>
            </div>
            <div className="btn-row">
              <Link to="/projects" className="btn">
                View Projects
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

export default About;
