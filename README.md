# UX Tax Portfolio

A modern personal portfolio for a UX designer with a tax-focused background. This
project highlights positioning, case-study-ready project listings, and an
about page that communicates domain expertise in tax and financial services.

## Purpose

The portfolio showcases UX work that translates complex tax requirements into
clear, human-centered digital experiences. It is intended to serve as a
professional site for presenting case studies, background, and skills.

## Project structure

```
app/
  about/         # About page (background and skills)
  projects/      # Projects list page (case-study-ready)
  globals.css    # Global styling and layout tokens
  layout.tsx     # Shared layout with navigation
  page.tsx       # Home page
public/          # Static assets
```

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` in your browser.

## Build for production

```bash
npm run build
npm run start
```
