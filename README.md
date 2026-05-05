# Ruochen Feng Portfolio

A handcrafted personal portfolio for Ruochen Feng, built with React and Vite.

The site is designed as a continuous narrative experience rather than a resume
dump or disconnected set of pages. Its flow moves from identity to about,
selected work, research, expansion worlds, and contact.

## Structure

```text
/                      continuous narrative surface
/research              publication and research activity section
/publications          alias for the research section
/projects/:slug        legacy deep links open the matching project focus view
```

GitHub Pages fallback support is handled by copying `dist/index.html` to
`dist/404.html` after build.

## Features

- Scroll-based identity transition from full-screen name to compact navigation
- Controlled project carousel with consistent 16:9 media containers
- Immersive focus-mode case notes with consistent project media
- Academic publication section for working papers and conference chapters
- Research activity photography and an ongoing-work highlight
- Reversible project transitions using the browser View Transitions API when available
- Local input-based portfolio guide powered by curated site notes
- Minimal RF identity mark used for favicon and navigation
- SEO and Open Graph metadata
- Responsive narrative layout with accessible links, buttons, and form controls

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs static files to `dist/`.
