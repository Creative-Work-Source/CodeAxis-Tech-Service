# Portfolio Site Pro

A multi-page portfolio starter built with Next.js, TypeScript, and Tailwind CSS.

## Included

- Separate pages for Projects, Services, Stack, Experience, and Contact
- Dynamic project detail pages under `app/projects/[slug]`
- Animated motion background using layered gradients, floating mesh lights, and a subtle noise texture
- Reusable layout and page shell components
- Tailwind-based styling with glassmorphism panels
- `.gitignore`, `package.json`, and starter README included

## Tech

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- lucide-react

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## Project structure

```text
app/
  page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  services/page.tsx
  stack/page.tsx
  experience/page.tsx
  contact/page.tsx
components/
  animated-background.tsx
  footer.tsx
  page-hero.tsx
  page-shell.tsx
  project-card.tsx
  site-header.tsx
data/
  portfolio.ts
public/
  noise.svg
  resume.pdf
```

## Customize first

- `data/portfolio.ts`
- `components/site-header.tsx`
- `app/layout.tsx`
- `public/resume.pdf`

## Notes

The tabs in the header now route to separate pages instead of page anchors.
Each project card links to a standalone dynamic detail page.
Replace the placeholder content with your real projects, links, screenshots, and experience.
