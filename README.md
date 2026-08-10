# Personal Site

Product-minded software engineer portfolio built with React, TypeScript, and Vite.

Phase 1 foundation is implemented: responsive layout, navigation, homepage, work index,
about page, contact page, interactive palette playground, accessible focus states, and a
GitHub Pages deployment workflow.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions to GitHub Pages.

After the first deploy, enable **GitHub Pages → Source: GitHub Actions** in the repository settings.

## Customize content

Edit `src/content/site.ts` for the bio, email, links, skills, and project content.

The contact page currently uses email and LinkedIn; add a resume later when it is ready.
