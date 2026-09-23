import { useState } from "react";
import { Link } from "react-router-dom";
import ContactItem from "../components/ContactItem.jsx";

const contactDetails = [
  {
    label: "Email",
    value: "vaghelatirth719@gmail.com",
    href: "mailto:vaghelatirth719@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Tirthvaghela",
    href: "https://github.com/Tirthvaghela",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tirthvaghela",
    href: "https://www.linkedin.com/in/tirthvaghela/",
    external: true,
  },
  {
    label: "Portfolio",
    value: "tirthvaghela.in",
    href: "https://tirthvaghela.in",
    external: true,
  },
  {
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
];

const focusAreas = ["Full-Stack Development", "AI/ML", "Computer Vision", "NLP"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const email = contactDetails.find((item) => item.label === "Email");
  const location = contactDetails.find((item) => item.label === "Location");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">04</span>
          <h1>Let&rsquo;s talk.</h1>
          <p className="page-header__lede">
            I&rsquo;m open to full-stack development and applied AI/ML
            opportunities. If you have a project, internship opportunity, or
            something worth building, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="section contact-intro">
        <div className="container">
          <div className="contact-intro__layout">
            <div className="contact-intro__content">
              <p>
                I&rsquo;m currently pursuing my Integrated M.Sc. in IT while
                working through a hybrid internship, so I&rsquo;m looking at
                things from both an academic and hands-on angle. Full-stack
                builds, applied AI/ML, or anything in between &mdash; if
                it&rsquo;s worth building, I&rsquo;d like to hear about it.
              </p>
            </div>
            <div className="contact-meta">
              <div className="contact-meta__group">
                <span className="eyebrow">Email</span>
                <p className="contact-meta__value">{email.value}</p>
              </div>
              <div className="contact-meta__group">
                <span className="eyebrow">Location</span>
                <p className="contact-meta__value">{location.value}</p>
              </div>
              <div className="contact-meta__group">
                <span className="eyebrow">Focus</span>
                <ul className="meta-list">
                  {focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-panel">
        <div className="container">
          <h2 className="section-heading">Get in Touch</h2>
          <div className="contact-panel__layout">
            <div className="contact-panel__details">
              <h3 className="contact-panel__subheading">Contact Details</h3>
              <div className="contact-item-list">
                {contactDetails.map((item) => (
                  <ContactItem
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                    external={item.external}
                  />
                ))}
              </div>
            </div>

            <div className="contact-panel__form">
              <h3 className="contact-panel__subheading">Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me a bit about what you're building or looking for."
                    required
                  />
                </div>
                <button type="submit" className="btn btn--accent">
                  Send Message
                </button>
                <p className="form-status" role="status" aria-live="polite">
                  {submitted
                    ? "This form isn't connected to an email service yet — please reach out directly at " +
                      email.value +
                      " in the meantime."
                    : ""}
                </p>
              </form>

              <div className="email-fallback">
                <span className="eyebrow">Prefer email?</span>
                <a href={email.href} className="email-fallback__link">
                  {email.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-closing">
        <div className="container">
          <p className="contact-closing__text">
            Currently open to full-stack and applied AI/ML opportunities
            &mdash; reach out above, or take a look at the{" "}
            <Link to="/projects">projects</Link> first.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
