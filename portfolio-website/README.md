# Tirth Vaghela — Portfolio Website

## Overview

A professional personal portfolio website built for the Week 1 Web Development assignment. It presents a personal introduction, education background, technical skills, selected projects, and contact information across six pages.

## Features

- Responsive multi-page portfolio (Home, About, Projects, Skills, Resume, Contact)
- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Case-study style project presentation with abstract, CSS-drawn visuals (no screenshots or stock images)
- Accessible mobile navigation with a toggle menu (`aria-expanded`, `aria-controls`, Escape support, focus restoration)
- Contact form with native HTML5 validation and optional topic pills; there is no server, so sending opens the visitor's email app with the message ready to go
- Category filter on the project index, with screen-reader announcements (progressive enhancement)
- Skills page listing each technology area with the projects that use it (matched from each project's tech tags)
- Resume page with a short on-page summary, a print-friendly layout, and a download button for the full resume (PDF)
- "Copy" button on the email pill (progressive enhancement — hidden if JavaScript or the clipboard API is unavailable)
- Dark and light theme toggle in the header; the choice is remembered between pages and visits (`localStorage`)
- Smooth scrolling for in-page links such as "Back to top"
- Sections fade in as they scroll into view (progressive enhancement — content is never hidden without JavaScript)
- Decorative rotating "TV" monogram and contact ring, drawn as inline SVG
- Keyboard-accessible navigation with a skip link and visible focus states
- `prefers-reduced-motion` support (rotation, scroll reveals, and smooth scrolling are switched off)
- Layouts tested across mobile, tablet, and desktop widths

## Pages

- **Home** (`index.html`) — hero, areas of work, selected projects, capabilities, about preview, current focus and technology toolbox, contact call-to-action
- **About** (`about.html`) — profile, education and experience tiles, career interests, certifications, how I work, and a technology ticker that links to the Skills page
- **Projects** (`projects.html`) — case-study presentation of three featured projects, plus a filterable index of nine more
- **Skills** (`skills.html`) — five technology areas, each with the projects that use them
- **Resume** (`resume.html`) — summary of profile, education, skills, and projects, with a download button for the full resume PDF
- **Contact** (`contact.html`) — contact details, a resume download link, and a message form

## Projects

### VoiceFormAI
Voice-assisted paper form-filling system using computer vision, OCR, and AI-based document understanding.

### FileFlow AI
RPA-oriented file organization system using rule-based classification and automation.

### ProjectMindAI
Project/workspace assistant combining semantic search with an AI assistant.

### More projects

Nine further projects are listed on the Projects page as an editorial project index, each with its category, a short description, and its technology tags. The index can be filtered by category (the filter appears when JavaScript is available; without it all projects are shown):

- **Urban Signal** — AI / ML: intelligent traffic management system
- **EventEase** — Web: event management platform
- **Vois** — Full-Stack: social media platform
- **RIGS** — AI / ML: Roadside Intelligent Governance System
- **FreshVault** — Web: local pantry e-commerce platform
- **Electrox-Mobile** — Mobile: mobile digital voting platform
- **Wedding Face Finder** — AI / ML: AI photo search system
- **Electrox Web** — Full-Stack: secure digital voting platform
- **GLS University Student Portal** — Web: mobile-first student portal

*(Repository links for these projects will be added once available.)*

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript — no frameworks, no build step, no dependencies
- Fonts are self-hosted (`assets/fonts/`), so the site makes no third-party requests

## Design

Charcoal, burgundy, and sand on an off-white canvas. Display type is Young Serif with Manrope for body text. The layout uses an arch-shaped hero card, numbered section labels, large serif headings, pill-shaped buttons and links, and alternating light, dark, and burgundy bands. A dark theme is available from the header toggle: the light areas switch to charcoal surfaces while the burgundy and sand brand bands stay the same. Motion is limited to hover and focus states, the slow monogram rotation, and the scroll reveals.

## Accessibility

- Semantic HTML with a consistent heading hierarchy (one `h1` per page)
- Labelled form controls with native validation
- Skip-to-content link and visible keyboard focus states on every interactive element
- `aria-current="page"` on the active navigation link
- Mobile navigation exposes its state via `aria-expanded` / `aria-controls`
- Escape closes the mobile menu and returns focus to the toggle button
- The theme toggle is a real button that exposes its state through `aria-pressed`
- `prefers-reduced-motion` disables the rotation animations, scroll reveals, and smooth scrolling
- External links are announced as opening in a new tab
- Text and interactive colors checked against WCAG AA contrast ratios in both the light and dark themes

## Responsive Design

Built mobile-first and checked at:

- 375px, 430px (mobile)
- 768px, 834px (tablet)
- 1024px, 1280px, 1440px (desktop)

Above 1280px the type and spacing scale up gradually and the content spans the full width of the screen, so wide monitors are not left with empty side margins. This was also checked for horizontal overflow at 1600px, 1904px, 1920px, and 2560px.

## Project Structure

```
portfolio-website/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── resume.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── theme-init.js
└── assets/
    ├── fonts/
    │   ├── manrope-variable-latin.woff2
    │   └── young-serif-latin.woff2
    └── resume/
        └── Tirth-Vaghela-Resume.pdf
```

## Running Locally

No build step or dependencies are required.

Simplest option — open the file directly in a browser:

```
portfolio-website/index.html
```

Or serve it locally with Python's built-in server:

```
cd portfolio-website
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Live Website

Live Demo: To be added after deployment

## Screenshots

Screenshots will be added to the repository after final browser and deployment verification.

## Credits

Fonts: [Young Serif](https://fonts.google.com/specimen/Young+Serif) and [Manrope](https://fonts.google.com/specimen/Manrope), both licensed under the SIL Open Font License 1.1.

## Author

**Tirth Vaghela**
Email: vaghelatirth719@gmail.com
GitHub: https://github.com/Tirthvaghela
LinkedIn: https://www.linkedin.com/in/tirthvaghela/

## Assignment Context

This project was developed as part of the Week 1 Web Development assignment at WeIntern.
