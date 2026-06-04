# Aidan O'Halloran — Portfolio

Dark, media-first portfolio (Vite + React + TypeScript). Featured work: Unreal game, [Reef Radar](https://reefradar.com), and ML projects on GitHub.

## Quick start

From the `aaME` folder:

```bash
cd aaME
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & preview

```bash
npm run build
npm run preview
```

## Add your assets

| Asset | Path |
|-------|------|
| Gameplay video | `public/video/game-demo.mp4` (H.264, ~720p–1080p, target under ~15 MB) |
| Project screenshots | Replace SVG placeholders under `public/projects/` (WebP/PNG recommended) |
| Resume (no home address) | `public/resume.pdf` — export a “web resume” without street address |
| LinkedIn URL | `src/data/site.ts` → `linkedin` |

## Git & GitHub

This folder (`aaME`) is the **git repo root** for your portfolio. Create a GitHub repo and push from here (not the parent `Portfolio` folder).

```bash
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## Deploy (Vercel)

1. Push this repo to GitHub (repo root = this `aaME` folder).
2. Import the project in [Vercel](https://vercel.com) — **Root Directory** `.` (repo root), framework preset **Vite**, build command `npm run build`, output directory `dist`.
3. Enable **Analytics** in the Vercel project dashboard (`@vercel/analytics` is already wired in `src/main.tsx`).
4. When ready, buy **aidanohalloran.com** and add the domain in Vercel → Settings → Domains (follow DNS instructions).

`vercel.json` includes SPA rewrites so client routes (`/projects`, `/about`, etc.) work on refresh.

## Privacy note (resume)

Use a PDF meant for the public web: same experience and skills as your full resume, but **omit your street address** (and phone if you prefer email-only contact). Contact on the site: email, GitHub, LinkedIn.

## Project structure

- `src/data/projects.ts` — project copy, links, media paths
- `src/data/site.ts` — name, email, socials
- `src/pages/` — Home, Projects, Project detail, About
