# React Real Estate UI Design

## Project structure

```text
react-estate-ui/
├── public/                    # Static images and public assets
├── src/
│   ├── components/             # Reusable UI components; each has its own folder
│   │   ├── card/
│   │   ├── chat/
│   │   ├── filter/
│   │   ├── list/
│   │   ├── map/
│   │   ├── navbar/
│   │   ├── pin/
│   │   ├── searchBar/
│   │   └── slider/
│   ├── lib/                    # Shared data and helpers
│   ├── routes/                 # Route-level pages; page styles stay beside each page
│   │   ├── home/
│   │   ├── layout/
│   │   ├── listPage/
│   │   ├── login/
│   │   ├── profile/
│   │   └── singlePage/
│   ├── styles/                 # Global styles and shared responsive breakpoints
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Component JSX and its SCSS are kept together. Page JSX and its SCSS are also kept together. Shared breakpoints live in `src/styles/responsive.scss`; global styling is in `src/styles/global.scss`. Public image paths remain unchanged.

## Run locally

```bash
npm install
npm run dev
```

