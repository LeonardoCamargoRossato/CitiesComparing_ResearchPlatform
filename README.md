# Cities Comparing Research Platform

V0 of a local/static research platform for organizing and presenting research in Econophysics, Visual Analytics and Data Science.

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

The Vite `base` is configured as `./` and routing uses `HashRouter`, keeping the frontend suitable for a future static GitHub Pages deployment.

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
