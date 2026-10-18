# Food of Life Foundation — Website

A Next.js (App Router) + Tailwind CSS v4 website for the **Food of Life Foundation**, focused on community outreach, food relief, and human welfare in **Kuje, Abuja, Nigeria**.

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Adding Outreach Pictures & Videos

Drop your folder of outreach pictures and videos into:
- `public/outreach/` (recommended for direct serving in Next.js) or anywhere in the project root, and we will wire them directly into the gallery, hero, and campaign pages.

## Structure

- `src/app/` — pages: home, about, what-we-do, campaigns, gallery (outreach photos & videos), get-involved, contact
- `src/components/` — Nav, Footer, GlobalBand, AnimatedHeadline, FadeIn
- `src/data/campaigns.ts` — Kuje outreach campaigns (upcoming & completed)
- `src/data/media.ts` — Outreach photos and videos configuration
