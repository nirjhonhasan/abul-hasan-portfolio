# Abul Hasan | Full Stack Web Developer

My personal portfolio website, with a glassmorphism design, light and dark themes, and projects loaded from my own API.

**Live site:** https://abul-hasan.vercel.app

## Features

- Responsive layout with a dedicated hero design for phones
- Light and dark themes (follows the system setting and remembers your choice)
- Hero with portrait, CV download and a scrolling technology strip
- Featured projects on the home page (first 6)
- `/projects` page with all projects, category filters and search
- About and Contact sections, including a copy-email button
- Respects the reduced-motion setting (only the technology strip keeps moving; it pauses on hover)

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Cache Components), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Icons | Lucide and inline SVGs |
| API | Express 5 and MongoDB (separate server project) |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment variable

Create `.env.local` in the project root:

```bash
API_URL=http://localhost:5000
```

Use the address of your project server. If `API_URL` is missing or the server cannot be reached, the site shows sample projects.

`.env.local` is not uploaded when you deploy. In Vercel, add `API_URL` under **Settings → Environment Variables**, then redeploy.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

## Project structure

```
src/
  app/
    layout.tsx          Shared navbar, footer, background and metadata
    page.tsx            Home page
    projects/page.tsx   All projects page
    globals.css         Theme colors and animations
  components/           Page sections and reusable UI
  lib/
    site.ts             Editable content: links, contact, skills, services, stats
    projects.ts         Loads projects from the API
public/                 Portrait, logo and CV
```

## Editing content

- **Links, skills, services, stats and technologies:** `src/lib/site.ts`
- **Intro text:** `src/components/Hero.tsx` and `src/components/About.tsx`
- **CV:** replace `public/Abul-Hasan-CV.pdf`
- **Portrait:** replace `public/abul-hasan.webp`

## Projects API

The site requests `GET {API_URL}/projects` and expects an array. Only `title` is required.

| Field | Description |
| --- | --- |
| `_id` or `id` | Unique ID |
| `title` | Project name |
| `category` | Used for the filter buttons, so keep spelling consistent |
| `description` | Short summary |
| `tags` | List of technologies |
| `image` | Full image URL |
| `liveUrl` | Live demo link |
| `githubUrl` | Source code link |

The database stores `thumbnail` and `techStack`; the server returns them as `image` and `tags`.

Project data is cached, so a database change can take a few minutes to appear.

### Images

- imgbb links work, both viewer links (`https://ibb.co.com/xxxx`) and direct links (`https://i.ibb.co.com/...`).
- A wide 16:9 image of at least 1200px looks best. Keeping files under about 500 KB helps them load reliably.
- To use another image host, add it to `images.remotePatterns` in `next.config.ts`.

## Deployment

Deploy the server first, then this site with `API_URL` set.

```bash
vercel deploy --prod
```
