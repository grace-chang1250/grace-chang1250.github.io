# grace-chang1250.github.io

Software engineer portfolio built with React and Vite.

## Prerequisites

- Node.js (recommended v18 or newer)
- npm (bundled with Node.js)

## Run locally

Clone the repo, install dependencies, and start the dev server:

```sh
git clone <this-repository-url>
cd <repository-name>
npm ci
npm run dev
# open http://localhost:5173
```

## Build & Preview

Create a production build and preview it locally:

```sh
npm run build
npm run preview
# preview served at http://localhost:5173
```

## Notes

- CI: this repository uses GitHub Actions to build and deploy the `dist/` output to GitHub Pages.
- The `public/` folder contains static assets (favicon, images) copied to the build output.
