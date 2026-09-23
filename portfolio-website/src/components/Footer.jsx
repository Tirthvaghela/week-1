import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Tirth Vaghela
        </p>

        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="footer__link"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com/Tirthvaghela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tirth Vaghela on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tirthvaghela/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tirth Vaghela on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
