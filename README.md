# Fusion Energy Workforce

A free, open guide to learning plasma and fusion energy, and to the commercial
fusion industry. Reorganized from the NSF-funded *Workforce Accelerator for Fusion
Energy Development* conference site into a general-purpose learning resource.

Built with [Astro](https://astro.build) as a static site (no server, no database).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build & deploy

```bash
npm run build    # outputs static files to ./dist
npm run preview  # preview the production build locally
```

The `dist/` folder is plain static HTML/CSS/JS — drop it on **Netlify, Vercel,
Cloudflare Pages, GitHub Pages**, or any static host (including your current one).
Before deploying, set your real domain in [`astro.config.mjs`](astro.config.mjs)
(`site:`), which is used for canonical URLs.

## Where the content lives

All directory content is plain data — edit these files to add, remove or update
entries, and the pages rebuild automatically. **No HTML knowledge required.**

| File | Powers |
| --- | --- |
| [`src/data/resources.js`](src/data/resources.js) | Learn page: videos, courses, simulators, books, teacher resources |
| [`src/data/companies.js`](src/data/companies.js) | Commercial Fusion: company directory + ecosystem links |
| [`src/data/programs.js`](src/data/programs.js) | Programs: university/lab directory by region |
| [`src/data/facilities.js`](src/data/facilities.js) | Facilities: major experiments worldwide |

Each entry is a simple object, e.g. a new learning resource:

```js
{
  title: 'Resource name',
  by: 'Who made it',
  level: 'Newcomer',   // 'Newcomer' | 'Student' | 'Advanced'
  blurb: 'One short sentence about it.',
  url: 'https://…',
  tag: 'Watch',        // small label: Watch / Course / Play / Read / Teach …
}
```

## Structure

```
src/
  data/         ← all editable content (see table above)
  components/   ← Nav, Footer, ResourceCard
  layouts/      ← Base.astro (shared <head>, fonts, SEO)
  pages/        ← one .astro file per page (index, learn, commercial, programs, facilities, about)
  styles/       ← global.css (the whole design system + color palette)
public/         ← favicon and static assets
```

## Design

A warm theme built around a sun/star motif. The color palette and all visual tokens
live at the top of [`src/styles/global.css`](src/styles/global.css) as CSS custom
properties; change a few variables to re-theme the whole site.

## A note on links

Resource links point to third-party sites and were accurate at build time. Fusion
moves fast, so check periodically for dead links and new resources. The data files
make updates quick.
