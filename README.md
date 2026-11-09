# CodeAxis

Website for **CodeAxis**, a software engineering and technology services company co-founded by Faizan Zafar (software & technology), David Nguyen (architecture, BIM & civil engineering) and Agustin W. Salas (design architecture & master planning). It covers both practices: services, software client work and case studies, and the architecture portfolio.

## Tech

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- lucide-react

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, stats, client wall, services, process, software and architecture highlights, leadership, CTA |
| `/services` | Service lines and technology stack |
| `/projects` | Live client platforms and case studies |
| `/projects/[slug]` | Case study detail (problem, solution, results) |
| `/architecture` | Architecture, BIM & civil disciplines and portfolio |
| `/architecture/[slug]` | Architecture project detail with image gallery |
| `/portfolio/agustin-salas` | Co-founder profile and selected prior work, credited as in his portfolio |
| `/experience` | Company practice areas and case-study index |
| `/contact` | Enquiry form (opens the visitor's mail client) |

## Editing content

All copy lives in `data/portfolio.ts`:

- `siteInfo`: company name, tagline, description
- `founders`: leadership section
- `clientLinks` / `featuredClients`: client work links and the home-page client wall
- `projects`: case studies
- `services`, `processSteps`, `stackGroups`, `experienceItems`

Architecture content lives in `data/architecture.ts` (`disciplines`, `archProjects`); images are in `public/architecture/<slug>/NN.jpg`.

## Contact form

The form on `/contact` posts to `app/api/contact/route.ts`, which emails the enquiry via SMTP. Copy `.env.example` to `.env.local` and fill in the SMTP settings and `CONTACT_INBOX`. Until they are set, the form tells visitors the inbox is being set up.

## Theme

Light (day) mode is the default; the toggle in the header switches to night mode and remembers the choice. Colours are CSS variables in `app/globals.css`.
