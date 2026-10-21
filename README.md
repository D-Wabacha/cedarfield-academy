# Cedarfield Academy: school website demo

A complete, responsive school website built by **Sonath Solutions** as a portfolio demonstration for private schools, academies, kindergartens and education centres in Kenya.

> **Cedarfield Academy is fictional.** All names, contact details, news, events and programme descriptions are illustrative. Photos are licensed stock images from Unsplash and do not show a real campus, students or staff. The site claims no accreditation, partnerships, results or testimonials.

## Features

- **7 main pages:** Home, About, Academics & Curriculum, Admissions, School Life (facilities & activities), News (with individual article pages), and Contact & Location, plus a 404 page.
- **Homepage built for parents:** hero with an enquiry call to action, quick links, values and approach, programmes by age, facilities, gallery with lightbox, latest news, contact options and a quick enquiry form.
- **Admissions enquiry form** and **contact form** with inline validation, an error summary, loading, success and error states, and a demo control that simulates a sending failure. **Nothing is sent or stored** (see `src/lib/submit.ts`). The forms never ask for a child's name, date of birth or records.
- **Downloadable admissions guide (PDF)**, generated from the same content as the website.
- **Click-to-call, WhatsApp and email links**, all set in one config file, plus a sticky Call / WhatsApp / Enquire bar on phones.
- **Accessible:** semantic landmarks, a skip link, a keyboard-trapped mobile menu (Escape closes it), focus moved to the page heading on navigation, labelled form fields with `aria-invalid` and `aria-describedby`, `aria-pressed` filter buttons, a native `<dialog>` lightbox with arrow-key navigation, visible focus rings, and reduced-motion support.
- **SEO:** a title, description, canonical link, Open Graph and Twitter tags for each page; a 1200×630 OG image; `sitemap.xml`; and `robots.txt`.
- **Performance:** route-level code splitting, responsive `srcset` images, lazy loading below the fold, fixed aspect ratios (no layout shift), and a branded fallback if an image fails.

## Tech stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router 7 · pdf-lib (build-time PDF only)

## Getting started

Requires **Node.js 22.18 or later** (the PDF script runs TypeScript directly with Node).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Regenerate the admissions PDF, type-check, and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only |
| `npm run gen:pdf` | Regenerate `public/downloads/cedarfield-admissions-guide.pdf` |

## Customising for a real school

Content is kept apart from the interface, so most changes never touch a component.

| File | Controls |
| --- | --- |
| `src/config/school.ts` | Name, tagline, ages, address, map embed, phone, WhatsApp number and message, emails, office hours, social links, site URL, and the `isDemo` flag |
| `src/config/navigation.ts` | Menu items |
| `src/content/images.ts` | All photography (an Unsplash id or any URL / `/images/...` path) and alt text |
| `src/content/school-life.ts` | Values, approach, programmes (with a typical day), facilities, clubs, gallery |
| `src/content/admissions.ts` | Admissions steps, key dates, requirements, fees note, FAQs (also used for the PDF) |
| `src/content/news.ts` | News articles |
| `src/index.css` | Brand colours and fonts (`@theme` tokens) |
| `index.html` | Default meta and OG tags for crawlers that don't run JavaScript |

Checklist before going live:

1. Set `isDemo: false` in `school.ts`. This removes the demo banner and inline demo notices.
2. Replace every placeholder contact detail. Phone numbers use international format without `+` (e.g. `254712345678`).
3. Replace stock photos with the school's own photography, with consent for any images of children.
4. Connect the forms: replace the body of `submitDemoForm` in `src/lib/submit.ts` with a call to the school's endpoint (e.g. a serverless function, Formspree or a CRM). Remove the demo acknowledgement checkbox and the "simulate failure" control, and add a privacy notice that meets **Kenya's Data Protection Act, 2019**.
5. Update `siteUrl` in `school.ts` and the URLs in `index.html` and `public/sitemap.xml`.
6. Remove `<meta name="robots" content="noindex">` from `index.html` and replace `public/robots.txt` with one that allows indexing and points to the sitemap.
7. Run `npm run build` so the PDF picks up the new details.

## Deployment

The output is a static site in `dist/`. Because it is a single-page app, the host must serve `index.html` for unknown paths. The config for that is included:

- **Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles routing.
- **Vercel:** framework preset "Vite". `vercel.json` handles routing.
- **Cloudflare Pages:** build `npm run build`, output `dist`. `_redirects` is supported.
- **Apache / cPanel hosting** (common with Kenyan hosts): upload the contents of `dist/` and add an `.htaccess` file:

  ```apache
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
  ```

## Project structure

```
src/
  config/       school profile and navigation
  content/      all page copy, programmes, news, admissions, images
  components/   reusable UI (Header, Footer, forms, cards, gallery, SEO…)
  hooks/        useDemoForm: shared form state and validation flow
  lib/          validation rules, link builders, demo submit
  pages/        one file per route
scripts/        build-time PDF generator
public/         favicon, OG image, robots, sitemap, downloads
```

## Known limitations

- Forms are demonstrations only and send nothing.
- This is a client-rendered SPA, so social previews use the defaults in `index.html` rather than each article's own tags. Prerendering (e.g. `vite-plugin-prerender` or a move to a static-site framework) would give each page its own preview.
- Photos are hotlinked from Unsplash's CDN. Self-host the school's own images for production.
- The map is a placeholder until a Google Maps embed URL is added.
- No CMS. Content is edited in TypeScript files. A headless CMS (e.g. Sanity, Strapi or Decap) can be added later without changing the components.
- Google Fonts load from Google's CDN. Self-host them if required by the school's privacy policy.
