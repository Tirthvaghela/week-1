# Tirth Vaghela — Portfolio

A personal portfolio site for Tirth Vaghela, built as the Week 1 Task 1 project for the WeIntern internship program. It showcases work across full-stack development, AI/ML, computer vision, and NLP.

---

## About

The site introduces Tirth Vaghela — currently pursuing an Integrated M.Sc. in IT at GLS University — and presents his background, experience, education, technical skills, and a selection of projects that combine full-stack web development with applied AI/ML (computer vision, OCR, and semantic search/retrieval).

---

## Pages

- `/` — **Home**: an introduction (name, role, short intro), a condensed "About" teaser, three featured projects, and a closing call to action.
- `/about` — **About**: full profile, career interests, work experience, education, and a categorized skills list.
- `/projects` — **Projects**: all five projects, grouped into Featured Work and Additional Work, each with a fuller description and tech list.
- `/contact` — **Contact**: contact details and a message form.

---

## Featured Projects

Five projects are documented on the Projects page:

1. **VoiceForm AI** — AI-powered document assistant that detects form fields, extracts labels using OCR, and guides users through form completion using multilingual voice interaction.
2. **ProjectMindAI** — Intelligent project discovery system combining semantic embeddings and BM25 keyword search for hybrid retrieval, project recommendations, and similar-project discovery.
3. **RIGS** — Automated traffic-violation detection using YOLOv8 and OCR to identify helmetless riders, extract license plates, and generate e-challans.
4. **Urban Signal** — Real-time traffic management system using YOLOv4 and OpenCV for vehicle detection, congestion analysis, dynamic signal timing, and emergency-vehicle prioritization.
5. **Wedding Face Finder** — AI-powered facial search system using DeepFace, ArcFace, and RetinaFace to identify people across thousands of photos through facial embeddings and similarity matching.

None of these projects currently have a live demo or repository link published, so none are linked from the site.

---

## Tech Stack

This portfolio **site itself** is built with:

- React 19
- React Router (`react-router-dom`) for client-side routing
- Vite as the build tool/dev server
- Plain JavaScript/JSX (no TypeScript)
- Plain CSS — one hand-written stylesheet, no framework or preprocessor
- Google Fonts (Archivo, Work Sans, JetBrains Mono), loaded via a CSS `@import`

**Note on React:** the WeIntern Week 1 handbook describes this task as an HTML/CSS assignment and states that external UI libraries need approval. React was used here as a deliberate, disclosed choice rather than an oversight — no CSS framework or component library was added, and all styling is plain, hand-written CSS.

The technologies listed under Featured Projects above (YOLO, OpenCV, FastAPI, MongoDB, DeepFace, etc.) belong to those *showcased* projects — they are not dependencies of this portfolio site.

---

## Project Structure

```
portfolio-website/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/
├── screenshots/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProjectCard.jsx
    │   ├── ProjectGrid.jsx
    │   ├── SkillGroup.jsx
    │   ├── ExperienceItem.jsx
    │   └── ContactItem.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   └── Contact.jsx
    ├── data/
    │   ├── projects.js
    │   └── skills.js
    └── styles/
        └── style.css
```

---

## Getting Started

1. Clone the repository
2. Move into the project directory:
   ```
   cd portfolio-website
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

To create a production build:

```
npm run build
```

---

## Available Scripts

- `npm run dev` — starts the Vite development server
- `npm run build` — builds the production bundle into `dist/`
- `npm run preview` — serves the production build locally, for a final check before deployment

---

## Design

The site follows an editorial, minimal visual direction:

- Warm off-white background (`#F7F6F2`) with near-black text (`#101114`)
- A single restrained cobalt-blue accent (`#2451D8`), used sparingly for links, buttons, and active states
- Sharp corners (near-zero border radius) and 1px hairline rules used throughout for structure, instead of cards, shadows, or gradients
- A three-typeface system: Archivo for headings, Work Sans for body text, JetBrains Mono for small metadata and labels
- Layouts built with CSS Grid and Flexbox, including asymmetric two-column sections

---

## Accessibility

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- All interactive elements are keyboard-focusable, with a visible `:focus-visible` outline
- The mobile navigation toggle is a real `<button>` with `aria-expanded` and `aria-controls`
- Contact form fields use real `<label htmlFor>` associations
- The contact form's submission status is announced via an `aria-live="polite"` region
- Native HTML5 form validation (`required` fields, `type="email"`)

This has not been audited against a formal accessibility standard (e.g. WCAG) — the above are the specific practices actually implemented.

---

## Responsive Design

Layout has been tested at desktop (1280px), tablet (834px), and mobile (375px) widths, with no horizontal overflow at any of them. This isn't a guarantee of correct rendering on every possible device or browser.

---

## Contact

The Contact page (`/contact`) lists:

- **Email:** vaghelatirth719@gmail.com
- **GitHub:** github.com/Tirthvaghela
- **LinkedIn:** linkedin.com/in/tirthvaghela
- **Portfolio:** tirthvaghela.in
- **Location:** Ahmedabad, Gujarat, India

The contact form on that page is currently **frontend-only** — submitting it does not send an email or reach any backend/service. It shows an on-page status message saying so, and points to the email address above as the real way to get in touch.

---

## Development Notes

The project intentionally keeps dependencies minimal (five packages total) and favors small, reusable components — `ProjectCard`/`ProjectGrid`, `ExperienceItem`, `SkillGroup`, `ContactItem` — driven by plain local data files (`src/data/projects.js`, `src/data/skills.js`) rather than hardcoding content into each page.
