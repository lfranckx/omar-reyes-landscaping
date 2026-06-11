# Reyes's Landscaping — Website

Marketing site for **Reyes's Landscaping** (Omar Reyes, Berryville, AR), built with **React + Vite** and deployed on **Vercel**.

## Tech stack

- React 18
- Vite 5 (dev server + build)
- Plain CSS (`src/index.css`) — no UI framework

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

All business info, services, reviews, and service areas live in one file:

```
src/siteData.js
```

Update the phone number, services, or testimonials there and every section
updates automatically. The page is assembled from section components in
`src/components/` (Header, Hero, Services, About, Gallery, Reviews,
ServiceArea, Contact, Footer).

### Adding real photos

Two spots use styled placeholders so they're easy to spot:

- **About** (`src/components/About.jsx`) — the "Add a photo of Omar & the crew" tile.
- **Gallery** (`src/components/Gallery.jsx`) — the four work tiles.

Drop image files into `public/` (e.g. `public/img/lawn-1.jpg`) and replace the
placeholder `<div className="ph">…</div>` with an `<img src="/img/lawn-1.jpg" alt="…" />`.

## Deploy to Vercel

This project is configured for Vercel out of the box (`vercel.json` sets the
framework to Vite). Two ways to ship it, matching a typical Vercel workflow:

### Option A — Git integration (recommended)

1. Create a new Git repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Reyes's Landscaping site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the Vercel dashboard: **Add New → Project → Import** the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future `git push` redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel   # if not already installed
vercel            # follow prompts (first run links/creates the project)
vercel --prod     # promote to production
```

## Notes

- `create-react-app` was used originally for the other sites but was deprecated
  in 2025; Vite is the maintained, faster equivalent and deploys to Vercel the
  same way (no config changes needed on Vercel's side).
