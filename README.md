# Nexus Partners — Website

A static HTML website deployable on GitHub + Netlify.

## Folder Structure

All files live at the **repo root** (no subdirectories):

```
nexus-partners-site/
├── index.html              ← MAIN FILE — all page copy lives here
├── styles.css              ← All styles, colors, fonts
├── main.js                 ← Interactivity (nav, modals, form, animations)
├── hero-bg.jpg             Hero section background
├── about.jpg               About section image
├── services-business.jpg
├── services-digital.jpg
├── services-org.jpg
├── case-adt.jpg            ADT case study
├── case-sony.jpg           Sony case study
├── case-hallmark.jpg       Hallmark case study
├── contact-bg.jpg          Contact section background
├── logo.svg                Main logo (nav + footer)
├── favicon.png             Browser tab icon
├── netlify.toml            ← Netlify deployment settings
└── README.md               ← This file
```

## Editing Copy

All text is in **`index.html`**. Look for the `═══` comment banners — each section has a block that tells you exactly what to change:

```html
<!-- ═══════════════════════════════
     HERO SECTION
     COPY TO EDIT:
       - hero-eyebrow : small label line
       - hero-title   : main headline
       ...
     ═══════════════════════════════ -->
```

### Quick reference — where to find each piece of copy

| Content | Location in index.html |
|---|---|
| Page title / SEO | `<head>` → `<title>` and `<meta name="description">` |
| Nav links | `<nav>` section |
| Hero headline & subtitle | `class="hero-title"` and `class="hero-sub"` |
| About paragraphs | `class="about-body"` (×2) |
| Statistics | `class="stat-num"` and `class="stat-label"` (×4) |
| Services copy | Each `<div class="service-card">` block |
| Work card copy | Each `<div class="work-card">` block |
| Case study modals | Each `<div class="modal-overlay">` block |
| Contact section | `class="contact-headline"` and `class="contact-lead"` |
| Email addresses | `href="mailto:..."` in contact + footer |
| Footer tagline | `class="footer-tagline"` |
| Copyright | `class="footer-bottom"` |

## Changing Brand Colors

Open **`styles.css`** and edit the `:root` block at the top:

```css
:root {
  --navy:      #1B2A4A;   /* Primary dark navy */
  --gold:      #C5A55A;   /* Primary gold accent */
  --off-white: #F8F7F4;   /* Page background */
  ...
}
```

## Replacing Images

Drop new images into the repo root using the same filenames, or update the `src` attributes in `index.html`.

Recommended sizes:
- `hero-bg.jpg` — 1920×1080px minimum
- `about.jpg` — 900×1100px
- `services-*.jpg` — 900×1200px
- `case-*.jpg` — 1200×800px
- `contact-bg.jpg` — 900×1200px

## Deploying to Netlify via GitHub

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repository
4. Build settings:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
5. Click **Deploy site**

Netlify will auto-deploy on every push to your main branch.

## Activating the Contact Form (Netlify Forms)

Add `name="contact" data-netlify="true"` to the `<form>` tag in `index.html`:

```html
<form id="contactForm" name="contact" data-netlify="true" novalidate>
```

Submissions will appear in your Netlify dashboard under **Forms**.

## Adding Google Analytics

Paste your GA4 script just before `</head>` in `index.html`.
