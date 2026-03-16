# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static single-page website template** for DIIM Lab (Design Innovation and Intelligent Manufacturing Lab) students at the University of Guelph to showcase research projects. There are no build tools, package managers, or frameworks — just plain HTML, CSS, and JavaScript.

## Running / Serving

Since this is a static site, serve files directly:

```bash
# Python (any directory)
python -m http.server 8000

# Node.js (if npx available)
npx serve .
```

Then open `http://localhost:8000` in a browser.

## Architecture

```
index.html              # Main template (all content lives here)
css/
  variables.css         # Design system tokens (colors, fonts, spacing) — edit here to restyle
  project-styles.css    # All component styles — marked "DO NOT MODIFY" for template consistency
js/
  main.js               # Scroll animations (Intersection Observer), navbar shadow, smooth scroll
images/                 # Drop project images here
```

### Key Design Decisions

- **CSS custom properties** in `variables.css` are the single source of truth for the visual design. Changing a color or font here affects the entire site.
- **`project-styles.css` is intentionally not student-editable** — it ensures visual consistency across all student pages on the lab site.
- **Navigation links** use `data-link` attributes (`home`, `projects`, `contact`) resolved at runtime by an inline script at the bottom of `index.html` to point back to the main DIIM Lab site (`https://i-umayr.github.io/DigitalTwinWebsite`).

### Customizing a Page

All student-editable sections in `index.html` are marked with `<!-- STUDENT: ... -->` comments. Key areas:
- `<head>` meta tags (title, description, author)
- `.project-hero` — tag, title, author, publication info
- Hero image (`src` on the featured image)
- Content sections: problem, solution, outcomes, applications, gallery images
- Optional YouTube video embed
- Publication DOI links in `.paper-links`
