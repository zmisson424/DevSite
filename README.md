# zm. — Zachery Misson's personal site (v4)

A single-page portfolio built with React and Vite, styled with plain CSS.

## Scripts

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into ./build
npm run preview   # serve the production build locally
```

## Where things live

```
src/
  data/        All site copy and links. Edit these to change content.
  sections/    One folder per chapter of the page (Hero, DayJob, PastRoles, …).
  components/  Pieces shared across sections (header, footer, headings, logo).
  hooks/       Small reusable hooks (animation clock, element size, reduced motion).
  styles/      Design tokens (colors, fonts, layout) and page-wide base styles.
```

Each component keeps its stylesheet next to it with BEM-style class names
(`block__element`, `block--modifier`, plus `is-*` state classes).

## Open placeholders

Search the `src/data` folder for `TODO` to find copy that still needs real values.
StringTheory's store and web app links are marked `isComingSoon` in `src/data/projects.js`
until they go live.
