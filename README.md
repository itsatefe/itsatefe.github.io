# Portfolio Template (React + Vite)

- React + TypeScript single-page app with client-side routing (React Router) built on Vite.
- All personal content lives in `src/data/*.ts` so pages stay free of hardcoded
  strings.
- Reusable layout components (`SectionShell`, etc.) keep sections consistent.

## Routing

- `/` -> Home
- `/experience` -> Experience
- `/education` -> Education
- `/projects` -> Projects
- `/skills` -> Skills
- `/contact` -> Contact
- `*` -> fallback to Home

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL to view the site. When ready to ship:

```bash
npm run build
npm run preview
```

## Personalize it

- `src/data/profile.ts`: core profile fields (name, title, location, email,
  socials, experience, projects, skills, education).
- `src/data/contact.ts`: contact card copy, action buttons, detail rows, and
  availability items.
- Add more data modules as needed, then import them into pages/components
  instead of hardcoding text.

Styling lives in `src/index.css`. Adjust tokens, spacing, or component classes
to match your brand.

## Use as a template

1) Fork or copy this repo.  
2) Update the data files above with your own info.  
3) Swap assets in `src/assets/` (logo, avatar, favicons) if desired.  
4) Run `npm run build` and deploy the `dist/` folder to your host of choice.  

If you add new sections, follow the existing pattern: keep copy in `src/data`,
map it into JSX, and avoid embedding personal details directly in the markup.
