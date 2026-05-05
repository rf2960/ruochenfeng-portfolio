# Ruochen Feng Portfolio

A handcrafted personal portfolio for Ruochen Feng, built with React and Vite.

The site is designed as a continuous narrative experience rather than a resume
dump or disconnected set of pages. Its flow moves from identity to thinking,
selected work, project focus, expansion worlds, and contact.

## Structure

```text
/                      continuous narrative surface
/projects/:slug        legacy deep links open the matching project focus view
```

GitHub Pages fallback support is handled by copying `dist/index.html` to
`dist/404.html` after build.

## Features

- Scroll-based identity transition from full-screen name to compact navigation
- Selected project stack with immersive focus-mode case notes
- Reversible project transitions using the browser View Transitions API when available
- Local "Ask the portfolio" guide powered by curated site notes
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
