# Rohit Raj Yadav — Portfolio

A **premium, fully responsive, animated** portfolio built with **React + Vite + Framer Motion + Tailwind CSS**.
A warm, editorial design (cream + ink + a single terracotta accent, Fraunces serif + Inter sans)
that feels hand-crafted rather than templated.

## ✨ Features

- 🎨 **Premium look** — warm cream/ink palette, one terracotta accent, no gradients or neon. Fraunces serif headings + Inter body.
- 🏠 **Long landing page** — hero, about, a featured-projects **carousel**, skills, experience & achievements previews, then a CTA.
- 🖼️ **Carousel** — auto-advancing, pause-on-hover, with arrows and dot navigation.
- 📱 **Fully responsive** — mobile slide-in menu, fluid layouts, works on all devices.
- 🎬 **Animated** — Framer Motion transitions, scroll reveals, animated skill bars, typewriter effect.
- 🧭 **Multi nested pages** — Home, About, Skills, Experience, Projects → **Project Detail** (nested), Achievements, Contact, 404.
- 🗂️ **Data-driven** — all content lives in **`public/data.json`**. Edit that file to change skills, experience, projects, achievements, etc. **No code changes needed.**

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## 🗂️ Editing Content

Open **`public/data.json`** and edit the values. The app fetches this file at runtime,
so changes appear immediately (just refresh).

| Section in `data.json` | What it controls |
| --- | --- |
| `profile` | Name, title, tagline, summary, stats, contact links |
| `skills` | Skill categories, items & proficiency levels |
| `experience` | Jobs, achievements, tech stack |
| `projects` | Project cards + nested detail pages (`/projects/:id`) |
| `achievements` | Badges & certifications |
| `education` | Education details |
| `certifications` | Certification list |

> Tip: each project `id` becomes its own nested route, e.g. `/projects/easyquant`.

## 🧱 Tech Stack

- **React 18** + **Vite 5**
- **React Router 6** (nested routes)
- **Framer Motion** (animations)
- **Tailwind CSS** (styling)
- **lucide-react** (icons)
- **canvas-confetti** (celebration effects)

## 📁 Structure

```
public/
  data.json          ← edit this to change content
src/
  components/        Layout, AnimatedBackground, Reveal, PageHeader, ScrollToTop
  hooks/             useData, useTypewriter
  pages/             Home, About, Skills, Experience, Projects, ProjectDetail,
                     Achievements, Contact, NotFound
  utils/             colors, confetti
```
