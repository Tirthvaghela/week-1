# AURA Studio

A fictional premium architecture and interior design studio, built as a responsive single-page landing site.

## Overview

AURA Studio is an invented practice: "Spaces designed to be lived in." The site presents the studio the way an architecture publication might: large serif type, thin rules, generous white space and prominent architectural imagery, with the interface kept quiet so the work leads.

It is a static frontend project. There is no backend, and the studio, its projects, locations and figures are all made up for this assignment.

The page runs in this order: header and navigation, hero, Studio, Services, Selected Projects, Our Approach (with the studio figures), a closing call to action, Contact, and the footer.

## Objective

The project is meant to show working command of frontend fundamentals:

- semantic HTML5
- modern CSS, including Grid, Flexbox and custom properties
- responsive design from small phones to wide desktops
- vanilla JavaScript for the interactions
- accessible interactions (keyboard, focus, screen-reader labelling)
- a responsive contact form with client-side validation
- a polished, consistent frontend presentation

Nothing here talks to a server. The contact form is a demo and sends nothing anywhere.

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, `clamp()`)
- Vanilla JavaScript
- WebP images
- SVG (the favicon)
- Self-hosted WOFF2 fonts: Newsreader and Hanken Grotesk

Plain HTML, CSS and JavaScript only, with no build step and no npm dependencies.

## Features

- Responsive navigation: inline links on wide screens, a full-screen menu below 768px
- Mobile menu that closes with Escape, returns focus to its button, locks page scroll and makes the page behind it inert
- Sticky header that tucks away while scrolling down and returns on scroll up
- Reading-progress line under the header
- Hero with a stepped headline and a tall architectural plate on the grid; on smaller screens it stacks as headline, full-width picture, then copy
- Studio section whose statement lights up word by word as it scrolls into view
- Services list that works as an accordion: hover, focus or click a service to open it and change the preview picture and its counter (on phones every description is already open and the preview is hidden)
- Four selected projects shown as full-height panels that stack as you scroll, in three different arrangements
- Project viewer built on the native `<dialog>` element, opened from each project's "View Project" button (or its picture); it closes with the Close button, Escape or a click outside, and focus returns to the button
- Our Approach section with three principles and a drifting "Light — Material — Life" band
- Studio figures (12+, 60+, 09, 04) that count up when they scroll into view
- Closing call to action: a stepped headline, a ruled details cell with the Start a Project button and email, and a wide picture plate with a figure caption; it stacks in reading order on smaller screens
- Contact form with native HTML validation, enhanced by JavaScript: inline messages, `aria-invalid`, focus moved to the first problem, and a live-region confirmation
- Visible keyboard focus states throughout
- `prefers-reduced-motion` support: animations and transitions are switched off and nothing waits for a scroll to appear
- No-JavaScript fallback: all content stays visible, the navigation stays usable, and the form still validates natively (the project viewer buttons are simply not offered)
- Panels that would not fit a very short screen or heavy browser zoom scroll normally instead of sticking

## Design

The direction is editorial architecture: quiet, restrained and image-led.

- **Colour:** Bone (`#F4F0E8`) for the page, Graphite (`#1C1A17`) for text and buttons, and Clay (`#9C5537`) as the single accent. A slightly darker Limestone (`#E9E3D8`) tints the Services, Contact and footer bands.
- **Type:** Newsreader in light weights for the large headings and numerals, Hanken Grotesk for interface text and labels.
- **Structure:** a six-column desktop grid, shown as faint column lines that run down the page. Headlines and picture plates sit on those lines.
- **Line and shape:** thin architectural rules, square corners, outlined numerals.
- **Composition:** asymmetric layouts, offset plates and stepped headlines in the hero and the closing call to action.
- **Motion:** restrained and tied to reading: lines rising out of masks, picture wipes, lit words, a drifting band, counters. Nothing loops.
- **Imagery:** concept visualisations of fictional buildings, cropped to the layout. They are not photographs of real projects.

AURA Studio is a fictional studio. It is not a real architecture business.

## Responsive Design

The layout was checked in Chromium at these viewport widths:

320px, 375px, 414px, 768px, 1024px, 1280px, 1440px and 1920px

It adapts across mobile, tablet and desktop: the navigation collapses into the menu, the hero and project panels reflow to a single column, the Services preview is dropped on phones, and the figures form a 2 × 2 grid. There is no horizontal overflow at any of those widths.

It has not been tested on physical devices or in other browser engines.

## Accessibility

Checked in the browser during development:

- semantic landmarks (`header`, `nav`, `main`, `footer`)
- a skip link to the main content
- a logical heading hierarchy with a single `h1`
- visible keyboard focus
- 44px minimum interactive targets
- labelled form fields
- descriptive alt text on the content images (decorative repeats use an empty alt)
- keyboard support for the mobile menu, including Escape and focus return
- reduced-motion support
- native form validation, with JavaScript validation on top
- `aria-invalid` on fields with errors
- an `aria-live` region for the form messages

## Project Structure

```
business-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── fonts/
│   └── images/
├── favicon.svg
└── README.md
```

`assets/fonts/` holds the WOFF2 files and their licence texts (SIL Open Font License). `assets/images/` holds the WebP images.

The screenshots below live in the repository's shared `screenshots/` folder, one level up.

## Running Locally

No installation is needed. From this folder:

```bash
cd business-landing-page
python -m http.server 8765
```

Then open:

http://localhost:8765

Opening `index.html` directly in a browser also works.

## Live Website

Live website: https://aura-studio-khaki.vercel.app

## Screenshots

Full page at 1440px wide:

![AURA Studio, full desktop page](../screenshots/landing-desktop.png)

The hero on a 375px-wide phone:

![AURA Studio hero on mobile](../screenshots/landing-hero-mobile.png)

The Services section, with the first service open and its preview picture:

![AURA Studio services section](../screenshots/landing-services.png)

The Contact section and enquiry form:

![AURA Studio contact form](../screenshots/landing-contact-form.png)

## Author

Tirth Vaghela

- GitHub: https://github.com/Tirthvaghela
- LinkedIn: https://www.linkedin.com/in/tirthvaghela/

## Project Note

AURA Studio is a fictional studio created for a frontend web development assignment. The projects, locations, figures and contact details are invented, the social links point to the platforms' home pages rather than real accounts, and the contact form does not send anything.
