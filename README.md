# Cities Comparing Research Platform

V0 of a local/static research platform for organizing and presenting research in Econophysics, Visual Analytics and Data Science.

## Live Research Platform

https://citiescomparing.dev

Repository: https://github.com/LeonardoCamargoRossato/CitiesComparing_ResearchPlatform

## Stack

- React
- Vite
- React Router (`HashRouter`)
- lucide-react icons
- CSS

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The Vite `base` is configured as `./` and routing uses `HashRouter`. Relative build paths support both the custom domain root and the GitHub Pages project-path fallback without changing application routes.

## Deployment and custom domain

GitHub Actions builds the Vite application and deploys `dist/` to GitHub Pages. The custom domain is managed in **Repository Settings → Pages → Custom domain**, so this workflow does not publish a duplicate `CNAME` file.

Canonical domain: `citiescomparing.dev`

The expected public routes retain hash-based navigation, for example:

```text
https://citiescomparing.dev/#/research
https://citiescomparing.dev/#/toolkit
https://citiescomparing.dev/#/notebooks
https://citiescomparing.dev/#/about
```

Until DNS and the Pages custom-domain setting are active, the GitHub Pages project URL remains the technical fallback:

```text
https://leonardocamargorossato.github.io/CitiesComparing_ResearchPlatform/
```

## Pages

- Home
- Research Hub
- Interactive Notebooks
- Analysis Toolkit
- Python Engine / API
- About

## Assets to add manually

Place the following files in the existing folders:

```text
public/assets/images/Graphical_Abstract.png
public/assets/docs/Dissertacao_Econofisica_LeonardoRossato.pdf
public/assets/docs/Apresentacao_Streamlit_App_VisualAnalytics.pdf
```

The folders are already included in this project. The source code references these exact relative paths.

## V0 architecture

V0 is a local/static frontend architecture. The Python computational backend will be integrated in future versions.

The current Python Engine / API page is documentation-only; no backend is required for V0 navigation or build.
