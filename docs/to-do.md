\# TODO.md — Minimal Black & White Portfolio (Design House NYC)

A step-by-step checklist to build the portfolio shown in the mock. Scope includes: header, hero, timeline, key moments, visual gallery with lightbox, legacy metrics, footer, and basic interactions. No frameworks. No inline styles. Files live under \`assets/css/styles.css\` and \`assets/js/script.js\`.

\---

\#\# 0\) Project scaffold

\- \[ \] Create structure


.  
 ├─ index.html  
 ├─ assets/  
 │ ├─ css/styles.css  
 │ ├─ js/script.js  
 │ └─ img/ ← place images here

\- \[ \] Install VS Code Live Server or use any static server

\- \[ \] Add sample images to \`assets/img/\` with clear names  

Example: \`hero.jpg\`, \`gallery-01.jpg\`, \`gallery-02.jpg\`, etc.

\*\*Checkpoint A\*\*  

Open \`index.html\` in a browser. Confirm there are no 404s in DevTools.

\---

\#\# 1\) Base HTML head and global tokens

\- \[ \] Add meta viewport, descriptive title, description

\- \[ \] Link \`assets/css/styles.css\` and \`assets/js/script.js\` with \`defer\`

\- \[ \] Define CSS variables for palette, typography, spacing, and elevation

\- \[ \] Set up minimal reset and base body styles

\- \[ \] Respect prefers-color-scheme while keeping monochrome feel

\*\*Definition of done\*\*  

Body renders black background in dark mode, white background in light mode. No inline styles used.

\---

\#\# 2\) Header and primary navigation

\- \[ \] Build sticky header with logo at left and simple nav at right

\- \[ \] Use semantic \`\<nav\>\` and an unordered list of links

\- \[ \] Add skip link for accessibility

\- \[ \] Add hover and focus states with visible focus rings

\*\*Definition of done\*\*  

Tabbing cycles through Skip link, Logo, and each nav item in order. Focus ring visible.

\---

\#\# 3\) Hero section

\- \[ \] Add full width hero with a single image from \`assets/img/hero.jpg\`

\- \[ \] Add overlay block with site name and short tagline

\- \[ \] Ensure text remains readable on both themes

\- \[ \] Use \`loading="eager"\` for the hero image, all others lazy

\*\*Definition of done\*\*  

Hero loads quickly and resizes cleanly from mobile to desktop.

\---

\#\# 4\) Timeline section

\- \[ \] Add section heading and subtitle

\- \[ \] Create vertical timeline with alternating cards

\- \[ \] Each item has: year badge, title, 1 to 2 lines of copy

\- \[ \] Implement a simple CSS layout using grid or flex

\- \[ \] Ensure mobile stacks in a single column

\*\*Definition of done\*\*  

Screen readers read the timeline top to bottom with meaningful order. No overlap at any width.

\---

\#\# 5\) Key Moments cards

\- \[ \] Add two or three cards with an image thumbnail, title, short body, and optional link

\- \[ \] Use a uniform card component with border and soft elevation

\- \[ \] Keep all images grayscale by default and lift on hover

\*\*Definition of done\*\*  

Cards align to a responsive grid and maintain equal padding. Keyboard users can reach links and images.

\---

\#\# 6\) Visual Gallery with lightbox

\- \[ \] Build a responsive grid of thumbnails under a section heading

\- \[ \] Each grid item uses a \`\<button class="thumb" data-gallery-open\>\` with an \`\<img\>\` inside

\- \[ \] Implement the lightbox dialog in HTML with \`role="dialog"\` and \`\[aria-hidden\]\`

\- \[ \] In \`script.js\` implement:

\- \[ \] Open on click or Enter/Space

\- \[ \] Close on Escape or backdrop click

\- \[ \] Next and Prev buttons

\- \[ \] Arrow keys support

\- \[ \] Focus trap and return focus on close

\- \[ \] Add captions from each image \`alt\`

\*\*Definition of done\*\*  

All gallery items open in a modal that passes keyboard tests. Images are lazy loaded.

\---

\#\# 7\) Legacy metrics

\- \[ \] Add a muted section with three metrics in a simple grid  

Example: Projects, Publications, Awards or Mentions

\- \[ \] Keep numbers static for now. Add data attributes for future animation

\- \[ \] Confirm color contrast meets WCAG AA

\*\*Definition of done\*\*  

Each metric is readable at 320 px width. Contrast check passes.

\---

\#\# 8\) Footer

\- \[ \] Add contact email and simple link list

\- \[ \] Include the current year using \`script.js\` helper

\- \[ \] Keep text small and muted

\*\*Definition of done\*\*  

Email is a proper \`mailto:\` link. Year updates automatically.

\---

\#\# 9\) Interaction summary in \`script.js\`

\- \[ \] \`setYear()\` writes the current year

\- \[ \] \`initLightbox()\` wires the modal viewer as described

\- \[ \] Optional: \`initCarousel()\` if a horizontal selected works row is included

\- \[ \] Optional: \`initFilters()\` if filter chips are included in the gallery

\*\*Definition of done\*\*  

No console errors in any modern browser. Functions guard against missing DOM nodes.

\---

\#\# 10\) Content pass

\- \[ \] Replace placeholder copy with final copy for tagline, timeline, and cards

\- \[ \] Add descriptive \`alt\` text for each image that explains the subject

\- \[ \] Verify link targets and email

\*\*Definition of done\*\*  

No lorem ipsum remains. All images have non-empty alt text.

\---

\#\# 11\) Responsiveness

\- \[ \] Validate layouts at 320, 375, 768, 1024, and 1280 widths

\- \[ \] Ensure grids reflow to 1, 2, 3, or 4 columns where appropriate

\- \[ \] Keep max content width at about 1120 px

\*\*Definition of done\*\*  

No horizontal scrollbars on mobile. Typography scale remains readable.

\---

\#\# 12\) Accessibility checks

\- \[ \] Keyboard pass for all interactive elements

\- \[ \] Visible focus ring on links, buttons, and thumbs

\- \[ \] Landmark roles: header, nav, main, footer

\- \[ \] Headings follow a logical hierarchy

\- \[ \] Color contrast meets WCAG AA

\*\*Definition of done\*\*  

Manual checks with Tab and Shift+Tab succeed across the whole page.

\---

\#\# 13\) Performance and assets

\- \[ \] Compress images to web-friendly sizes  

\- Hero: \~1920 px wide  

\- Gallery: 1200 px wide max  

\- Thumbs: 800 px wide max  

\- \[ \] Use JPG for photos and WebP where possible

\- \[ \] Ensure all non-hero images have \`loading="lazy"\`

\- \[ \] Set explicit \`width\` and \`height\` attributes to reduce CLS

\*\*Definition of done\*\*  

Lighthouse shows low CLS and fast LCP. No oversized images flagged.

\---

\#\# 14\) SEO and metadata

\- \[ \] Set \`\<title\>\` and \`\<meta name="description"\>\` with real content

\- \[ \] Add \`og:title\`, \`og:description\`, and \`og:image\` if desired

\- \[ \] Add a simple \`favicon.ico\` or monochrome SVG

\*\*Definition of done\*\*  

Shared links display the correct title and summary.

\---

\#\# 15\) QA checklist

\- \[ \] Chrome, Firefox, Safari, and Edge smoke test

\- \[ \] Mobile test on a physical device

\- \[ \] Console clean of errors and warnings

\- \[ \] 404 pass in Network tab

\- \[ \] Validate HTML using the W3C validator

\*\*Definition of done\*\*  

No blocking issues remain. Page is stable under quick navigation.

\---

\#\# 16\) Deploy

\- \[ \] Option A: GitHub Pages  

\- Push repo  

\- Enable Pages on \`main\` with root  

\- Confirm live site

\- \[ \] Option B: Netlify or Vercel  

\- Drag and drop or connect repo  

\- Set root to project folder  

\- No build command required

\*\*Definition of done\*\*  

Live URL loads the site with all images and interactions working.

\---

\#\# 17\) Optional next steps

\- \[ \] Case study template page with sticky table of contents

\- \[ \] JSON-driven gallery  

\- Add \`assets/data/gallery.json\`  

\- Fetch in \`script.js\` and render gallery items dynamically

\- \[ \] Basic analytics with privacy focus

\- \[ \] Sitemap and robots.txt

\---

\#\# File-by-file tasks

\- \[ \] \`index.html\`  

\- Head meta, header, hero, timeline, key moments, gallery, legacy, footer, lightbox dialog markup

\- \[ \] \`assets/css/styles.css\`  

\- Variables, reset, layout containers, header, hero, timeline, cards, grid, modal, footer, media queries

\- \[ \] \`assets/js/script.js\`  

\- Year setter, lightbox open/close, optional carousel, optional filters, safe guards

\---

\#\# SAQC guardrails

\- \[ \] EM\! Avoid long dashes and decorative punctuation in copy

\- \[ \] OT\! If the layout diverges from the mock, pause and note changes

\- \[ \] IN\! Provide concrete numbers where needed, like image widths

\- \[ \] SC\! If estimating, label as an estimate

\---

\#\# Milestones and checkpoints

1\. Milestone 1: Base scaffold running  

 \- Sections: Header, Hero  

 \- Checkpoint A passed

2\. Milestone 2: Timeline and Key Moments complete  

 \- Keyboard pass

3\. Milestone 3: Gallery and Lightbox complete  

 \- Keyboard and screen reader pass

4\. Milestone 4: Legacy and Footer complete  

 \- Lighthouse pass for CLS and basic performance

5\. Milestone 5: QA and Deploy  

 \- Live URL verified

\---

\#\# Commit guide

Use small commits with clear messages.

\- \`feat(hero): add hero image and overlay copy\`

\- \`feat(timeline): create alternating timeline layout\`

\- \`feat(gallery): add grid and lightbox interactions\`

\- \`style(tokens): refine grayscale palette and spacing\`

\- \`fix(a11y): add focus outlines and aria labels\`

\- \`chore(images): compress gallery assets\`

\---

\#\# Prompt confidence

\- Tech: 98  

\- Component: 97  

\- Behavior: 97  

\- Content: 96  

\- Style: 99

If you want, I can generate the exact HTML, CSS, and JS for the timeline and key moments sections to match the screenshot, then wire them into the current starter. Should I proceed with that in this thread?

Here is a clean, black and white portfolio starter that fits a NYC design house vibe. It has a minimal grid gallery, category filters, a full lightbox with keyboard support, and a horizontal interactive carousel for selected work. No frameworks. No inline styles. Everything is accessible and responsive.

## **Project structure**

design-house-nyc/  
├─ index.html  
├─ assets/  
│  ├─ css/  
│  │  └─ styles.css  
│  ├─ js/  
│  │  └─ script.js  
│  └─ img/  
│     ├─ sample-01.jpg  
│     ├─ sample-02.jpg  
│     ├─ sample-03.jpg  
│     ├─ sample-04.jpg  
│     ├─ sample-05.jpg  
│     ├─ sample-06.jpg  
│     └─ ...

Place your images in `assets/img/`. The sample filenames used below can be replaced with your real work.

---

## **`index.html` (copy complete file)**

\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
  \<meta charset="utf-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1" /\>  
  \<title\>Design House NYC — Portfolio\</title\>  
  \<meta name="description" content="Monochrome portfolio, image galleries, and interactive showcases." /\>

  \<\!-- Styles \--\>  
  \<link rel="stylesheet" href="assets/css/styles.css" /\>  
\</head\>  
\<body\>  
  \<\!-- Skip link for a11y \--\>  
  \<a class="skip-link" href="\#main"\>Skip to content\</a\>

  \<\!-- Header \--\>  
  \<header class="site-header" role="banner" aria-label="Site header"\>  
    \<div class="container header-inner"\>  
      \<a href="\#" class="logo" aria-label="Design House NYC"\>  
        DHNYC  
      \</a\>  
      \<nav class="nav" aria-label="Primary"\>  
        \<ul\>  
          \<li\>\<a href="\#work"\>Work\</a\>\</li\>  
          \<li\>\<a href="\#about"\>Studio\</a\>\</li\>  
          \<li\>\<a href="\#contact"\>Contact\</a\>\</li\>  
        \</ul\>  
      \</nav\>  
    \</div\>  
  \</header\>

  \<\!-- Hero \--\>  
  \<section class="hero" id="top" aria-label="Intro"\>  
    \<div class="container hero-inner"\>  
      \<h1\>Design House NYC\</h1\>  
      \<p\>Black and white. Strong composition. Refined typography. Focus on the work.\</p\>  
    \</div\>  
  \</section\>

  \<main id="main" tabindex="-1"\>  
    \<\!-- Selected Works carousel \--\>  
    \<section class="carousel-section" aria-labelledby="selected-heading"\>  
      \<div class="container"\>  
        \<div class="section-head"\>  
          \<h2 id="selected-heading"\>Selected Works\</h2\>  
          \<div class="carousel-controls" aria-label="Carousel controls"\>  
            \<button class="carousel-btn" data-carousel="prev" aria-label="Previous"\>Prev\</button\>  
            \<button class="carousel-btn" data-carousel="next" aria-label="Next"\>Next\</button\>  
          \</div\>  
        \</div\>

        \<div class="carousel" data-carousel\>  
          \<\!-- Each card uses real images you add in assets/img \--\>  
          \<article class="card" tabindex="0"\>  
            \<img src="assets/img/sample-01.jpg" alt="Identity system for boutique label" loading="lazy" /\>  
            \<div class="card-meta"\>  
              \<h3\>Identity, Boutique Label\</h3\>  
              \<p\>Branding\</p\>  
            \</div\>  
          \</article\>  
          \<article class="card" tabindex="0"\>  
            \<img src="assets/img/sample-02.jpg" alt="Editorial layout, monochrome series" loading="lazy" /\>  
            \<div class="card-meta"\>  
              \<h3\>Editorial Series\</h3\>  
              \<p\>Editorial\</p\>  
            \</div\>  
          \</article\>  
          \<article class="card" tabindex="0"\>  
            \<img src="assets/img/sample-03.jpg" alt="Product shots for capsule collection" loading="lazy" /\>  
            \<div class="card-meta"\>  
              \<h3\>Capsule Collection\</h3\>  
              \<p\>Product\</p\>  
            \</div\>  
          \</article\>  
          \<article class="card" tabindex="0"\>  
            \<img src="assets/img/sample-04.jpg" alt="Campaign concept boards" loading="lazy" /\>  
            \<div class="card-meta"\>  
              \<h3\>Campaign Boards\</h3\>  
              \<p\>Concept\</p\>  
            \</div\>  
          \</article\>  
        \</div\>  
      \</div\>  
    \</section\>

    \<\!-- Filterable gallery \--\>  
    \<section class="gallery-section" id="work" aria-labelledby="work-heading"\>  
      \<div class="container"\>  
        \<div class="section-head"\>  
          \<h2 id="work-heading"\>Work\</h2\>  
          \<div class="filters" role="group" aria-label="Filter projects"\>  
            \<button class="filter is-active" data-filter="all" aria-pressed="true"\>All\</button\>  
            \<button class="filter" data-filter="branding" aria-pressed="false"\>Branding\</button\>  
            \<button class="filter" data-filter="editorial" aria-pressed="false"\>Editorial\</button\>  
            \<button class="filter" data-filter="product" aria-pressed="false"\>Product\</button\>  
          \</div\>  
        \</div\>

        \<ul class="grid" data-grid role="list"\>  
          \<\!-- Each item has a data-category for filtering and is lightbox-enabled \--\>  
          \<li class="grid-item" data-gallery-item data-category="branding"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-01.jpg" alt="Branding, geometric logo study" loading="lazy" /\>  
            \</button\>  
          \</li\>

          \<li class="grid-item" data-gallery-item data-category="editorial"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-02.jpg" alt="Editorial spread, clean typographic grid" loading="lazy" /\>  
            \</button\>  
          \</li\>

          \<li class="grid-item" data-gallery-item data-category="product"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-03.jpg" alt="Product still life, high contrast" loading="lazy" /\>  
            \</button\>  
          \</li\>

          \<li class="grid-item" data-gallery-item data-category="branding"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-04.jpg" alt="Wordmark exploration, mono palette" loading="lazy" /\>  
            \</button\>  
          \</li\>

          \<li class="grid-item" data-gallery-item data-category="product"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-05.jpg" alt="Packaging system, foil on black" loading="lazy" /\>  
            \</button\>  
          \</li\>

          \<li class="grid-item" data-gallery-item data-category="editorial"\>  
            \<button class="thumb" data-gallery-open aria-label="Open item"\>  
              \<img src="assets/img/sample-06.jpg" alt="Magazine cover, stark composition" loading="lazy" /\>  
            \</button\>  
          \</li\>  
        \</ul\>  
      \</div\>  
    \</section\>

    \<\!-- About \--\>  
    \<section class="about-section" id="about" aria-labelledby="about-heading"\>  
      \<div class="container"\>  
        \<h2 id="about-heading"\>Studio\</h2\>  
        \<p\>  
          Independent studio in New York City. We craft identities, editorial systems,  
          and product visuals. The process is structured. The output is focused.  
        \</p\>  
      \</div\>  
    \</section\>

    \<\!-- Contact \--\>  
    \<section class="contact-section" id="contact" aria-labelledby="contact-heading"\>  
      \<div class="container"\>  
        \<h2 id="contact-heading"\>Contact\</h2\>  
        \<p\>Email: \<a href="mailto:studio@example.com"\>studio@example.com\</a\>\</p\>  
      \</div\>  
    \</section\>  
  \</main\>

  \<\!-- Footer \--\>  
  \<footer class="site-footer" role="contentinfo"\>  
    \<div class="container"\>  
      \<p\>© \<span id="year"\>\</span\> Design House NYC\</p\>  
    \</div\>  
  \</footer\>

  \<\!-- Lightbox dialog \--\>  
  \<div class="lightbox" data-lightbox aria-hidden="true" role="dialog" aria-modal="true" aria-label="Image viewer"\>  
    \<button class="lightbox-close" data-lightbox-close aria-label="Close"\>Close\</button\>  
    \<button class="lightbox-nav prev" data-lightbox-prev aria-label="Previous"\>Prev\</button\>  
    \<figure class="lightbox-stage"\>  
      \<img class="lightbox-image" alt="" /\>  
      \<figcaption class="lightbox-caption"\>\</figcaption\>  
    \</figure\>  
    \<button class="lightbox-nav next" data-lightbox-next aria-label="Next"\>Next\</button\>  
  \</div\>

  \<\!-- Scripts \--\>  
  \<script src="assets/js/script.js" defer\>\</script\>  
\</body\>  
\</html\>

---

## **`assets/css/styles.css` (copy complete file)**

/\* \==========================================================================  
   Design House NYC — Monochrome Portfolio  
   \- Minimal reset  
   \- Variables and typography  
   \- Layout helpers  
   \- Carousel, gallery, and lightbox  
   \========================================================================== \*/

/\* Reset \*/  
\*,  
\*::before,  
\*::after { box-sizing: border-box; }  
html, body { margin: 0; padding: 0; }  
img, picture { max-width: 100%; display: block; }  
button { font: inherit; background: none; border: 0; cursor: pointer; }  
a { color: inherit; text-decoration: none; }

/\* Variables \*/  
:root {  
  \--bg: \#ffffff;  
  \--fg: \#0a0a0a;  
  \--muted: \#7a7a7a;  
  \--line: \#e6e6e6;  
  \--focus: \#111111;  
  \--gap: 20px;

  /\* Typography scale \*/  
  \--font-sans: ui-sans-serif, system-ui, \-apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";  
  \--h1: clamp(2rem, 5vw, 4rem);  
  \--h2: clamp(1.25rem, 2.5vw, 2rem);  
  \--h3: 1.125rem;  
  \--body: 16px;

  /\* Elevation \*/  
  \--shadow-1: 0 2px 20px rgba(0,0,0,0.08);  
  \--shadow-2: 0 10px 40px rgba(0,0,0,0.12);  
}

@media (prefers-color-scheme: dark) {  
  :root {  
    \--bg: \#0b0b0b;  
    \--fg: \#f5f5f5;  
    \--muted: \#b5b5b5;  
    \--line: \#1a1a1a;  
    \--focus: \#f5f5f5;  
  }  
}

/\* Base \*/  
html { color-scheme: light dark; }  
body {  
  background: var(--bg);  
  color: var(--fg);  
  font-family: var(--font-sans);  
  line-height: 1.6;  
  font-size: var(--body);  
}

/\* A11y \*/  
.skip-link {  
  position: absolute;  
  left: \-9999px;  
  top: \-9999px;  
}  
.skip-link:focus {  
  left: 12px;  
  top: 12px;  
  background: var(--fg);  
  color: var(--bg);  
  padding: 8px 12px;  
  border-radius: 4px;  
}

/\* Layout \*/  
.container {  
  width: min(1120px, calc(100% \- 40px));  
  margin: 0 auto;  
}

.section-head {  
  display: flex;  
  align-items: center;  
  justify-content: space-between;  
  gap: var(--gap);  
  border-bottom: 1px solid var(--line);  
  padding-bottom: 12px;  
  margin-bottom: 24px;  
}

/\* Header \*/  
.site-header {  
  position: sticky;  
  top: 0;  
  background: var(--bg);  
  border-bottom: 1px solid var(--line);  
  z-index: 100;  
}  
.header-inner {  
  display: flex;  
  align-items: center;  
  justify-content: space-between;  
  height: 64px;  
}  
.logo {  
  font-weight: 700;  
  letter-spacing: 0.08em;  
  font-size: 18px;  
}  
.nav ul {  
  list-style: none;  
  display: flex;  
  gap: 20px;  
  padding: 0;  
  margin: 0;  
}  
.nav a {  
  color: var(--muted);  
}  
.nav a:hover,  
.nav a:focus {  
  color: var(--fg);  
}

/\* Hero \*/  
.hero {  
  padding: 72px 0 56px 0;  
  border-bottom: 1px solid var(--line);  
}  
.hero-inner h1 {  
  font-size: var(--h1);  
  letter-spacing: \-0.02em;  
  margin: 0 0 8px 0;  
}  
.hero-inner p {  
  color: var(--muted);  
  margin: 0;  
}

/\* Carousel \*/  
.carousel-section { padding: 48px 0; }  
.carousel {  
  display: grid;  
  grid-auto-flow: column;  
  grid-auto-columns: minmax(260px, 1fr);  
  gap: var(--gap);  
  overflow-x: auto;  
  scroll-snap-type: x mandatory;  
  \-webkit-overflow-scrolling: touch;  
  padding-bottom: 6px;  
}  
.carousel::-webkit-scrollbar { height: 8px; }  
.carousel::-webkit-scrollbar-thumb { background: var(--line); }  
.card {  
  scroll-snap-align: start;  
  background: var(--bg);  
  border: 1px solid var(--line);  
  box-shadow: var(--shadow-1);  
  outline-offset: 2px;  
}  
.card img { aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }  
.card-meta {  
  padding: 12px 14px 16px 14px;  
  border-top: 1px solid var(--line);  
}  
.card-meta h3 {  
  font-size: var(--h3);  
  margin: 0 0 4px 0;  
}  
.card-meta p {  
  color: var(--muted);  
  margin: 0;  
}  
.carousel-controls { display: flex; gap: 8px; }  
.carousel-btn {  
  border: 1px solid var(--line);  
  padding: 8px 12px;  
}  
.carousel-btn:focus-visible {  
  outline: 2px solid var(--focus);  
  outline-offset: 2px;  
}

/\* Filters \*/  
.filters {  
  display: flex;  
  flex-wrap: wrap;  
  gap: 8px;  
}  
.filter {  
  border: 1px solid var(--line);  
  padding: 6px 10px;  
  color: var(--muted);  
}  
.filter.is-active,  
.filter:hover,  
.filter:focus-visible {  
  color: var(--fg);  
  border-color: var(--fg);  
}

/\* Gallery grid \*/  
.gallery-section { padding: 48px 0; }  
.grid {  
  list-style: none;  
  display: grid;  
  grid-template-columns: repeat(12, 1fr);  
  gap: var(--gap);  
  padding: 0;  
  margin: 0;  
}  
.grid-item {  
  grid-column: span 4;  
  transition: transform 160ms ease, opacity 160ms ease;  
}  
@media (max-width: 900px) {  
  .grid-item { grid-column: span 6; }  
}  
@media (max-width: 600px) {  
  .grid-item { grid-column: span 12; }  
}  
.thumb {  
  width: 100%;  
  border: 1px solid var(--line);  
  background: var(--bg);  
}  
.thumb img {  
  width: 100%;  
  height: 100%;  
  aspect-ratio: 4 / 3;  
  object-fit: cover;  
  filter: grayscale(100%) contrast(1.05);  
  transition: transform 200ms ease, filter 200ms ease;  
}  
.thumb:hover img,  
.thumb:focus-visible img {  
  transform: scale(1.02);  
  filter: grayscale(0%) contrast(1.1);  
}

/\* About and Contact \*/  
.about-section,  
.contact-section {  
  padding: 48px 0;  
  border-top: 1px solid var(--line);  
}  
.about-section p,  
.contact-section p {  
  max-width: 64ch;  
  color: var(--muted);  
}

/\* Footer \*/  
.site-footer {  
  border-top: 1px solid var(--line);  
  padding: 24px 0 48px 0;  
  color: var(--muted);  
}

/\* Lightbox \*/  
.lightbox {  
  position: fixed;  
  inset: 0;  
  background: rgba(0,0,0,0.92);  
  display: grid;  
  grid-template-columns: auto 1fr auto;  
  grid-template-rows: auto 1fr auto;  
  align-items: center;  
  justify-items: center;  
  gap: 12px;  
  padding: 20px;  
  opacity: 0;  
  visibility: hidden;  
  transition: opacity 160ms ease, visibility 160ms ease;  
}  
.lightbox\[aria-hidden="false"\] {  
  opacity: 1;  
  visibility: visible;  
}  
.lightbox-stage {  
  grid-column: 1 / \-1;  
  grid-row: 2;  
  max-width: min(90vw, 1200px);  
  width: 100%;  
}  
.lightbox-image {  
  width: 100%;  
  height: auto;  
  object-fit: contain;  
  border: 1px solid \#222;  
  box-shadow: var(--shadow-2);  
}  
.lightbox-caption {  
  color: \#cfcfcf;  
  font-size: 14px;  
  margin-top: 8px;  
  text-align: center;  
}  
.lightbox-close,  
.lightbox-nav {  
  color: \#f0f0f0;  
  border: 1px solid \#333;  
  padding: 10px 12px;  
  background: \#0f0f0f;  
}  
.lightbox-close {  
  grid-column: 1;  
  grid-row: 1;  
  justify-self: start;  
}  
.lightbox-nav.prev { grid-column: 1; grid-row: 3; }  
.lightbox-nav.next { grid-column: 3; grid-row: 3; }

/\* Utility when modal open \*/  
body.lock-scroll { overflow: hidden; }

---

## **`assets/js/script.js` (copy complete file)**

/\* Design House NYC — Interactions  
   \- Selected Works carousel controls  
   \- Filterable grid  
   \- Lightbox with keyboard support  
\*/

document.addEventListener("DOMContentLoaded", () \=\> {  
  setYear();  
  initCarousel();  
  initFilters();  
  initLightbox();  
});

/\* Footer year \*/  
function setYear() {  
  const el \= document.getElementById("year");  
  if (el) el.textContent \= String(new Date().getFullYear());  
}

/\* Carousel \*/  
function initCarousel() {  
  const track \= document.querySelector("\[data-carousel\]");  
  const btnPrev \= document.querySelector('\[data-carousel="prev"\]');  
  const btnNext \= document.querySelector('\[data-carousel="next"\]');  
  if (\!track || \!btnPrev || \!btnNext) return;

  const step \= () \=\> Math.min(track.clientWidth \* 0.9, 640);

  btnPrev.addEventListener("click", () \=\> {  
    track.scrollBy({ left: \-step(), behavior: "smooth" });  
  });  
  btnNext.addEventListener("click", () \=\> {  
    track.scrollBy({ left: step(), behavior: "smooth" });  
  });  
}

/\* Filters \*/  
function initFilters() {  
  const buttons \= Array.from(document.querySelectorAll(".filter"));  
  const items \= Array.from(document.querySelectorAll("\[data-gallery-item\]"));  
  if (\!buttons.length || \!items.length) return;

  function apply(category) {  
    items.forEach((li) \=\> {  
      const itemCat \= li.getAttribute("data-category");  
      const show \= category \=== "all" || itemCat \=== category;  
      li.style.opacity \= show ? "1" : "0.08";  
      li.style.pointerEvents \= show ? "auto" : "none";  
    });  
  }

  buttons.forEach((btn) \=\> {  
    btn.addEventListener("click", () \=\> {  
      const isActive \= btn.classList.contains("is-active");  
      const selected \= btn.getAttribute("data-filter");  
      buttons.forEach((b) \=\> {  
        b.classList.toggle("is-active", b \=== btn);  
        b.setAttribute("aria-pressed", b \=== btn ? "true" : "false");  
      });  
      if (\!isActive && selected) apply(selected);  
    });  
  });  
}

/\* Lightbox \*/  
function initLightbox() {  
  const lightbox \= document.querySelector("\[data-lightbox\]");  
  const btnClose \= document.querySelector("\[data-lightbox-close\]");  
  const btnPrev \= document.querySelector("\[data-lightbox-prev\]");  
  const btnNext \= document.querySelector("\[data-lightbox-next\]");  
  const stageImg \= document.querySelector(".lightbox-image");  
  const stageCap \= document.querySelector(".lightbox-caption");  
  const triggers \= Array.from(document.querySelectorAll("\[data-gallery-open\]"));  
  const items \= Array.from(document.querySelectorAll("\[data-gallery-item\]"));

  if (\!lightbox || \!btnClose || \!btnPrev || \!btnNext || \!stageImg || \!stageCap) return;  
  if (\!triggers.length || \!items.length) return;

  let current \= 0;  
  let lastFocused \= null;

  function readItem(i) {  
    const img \= items\[i\].querySelector("img");  
    const src \= img?.getAttribute("src") || "";  
    const alt \= img?.getAttribute("alt") || "";  
    return { src, alt };  
  }

  function open(i) {  
    current \= i;  
    const { src, alt } \= readItem(current);  
    stageImg.src \= src;  
    stageImg.alt \= alt;  
    stageCap.textContent \= alt;

    lastFocused \= document.activeElement;  
    lightbox.setAttribute("aria-hidden", "false");  
    document.body.classList.add("lock-scroll");  
    btnClose.focus();  
  }

  function close() {  
    lightbox.setAttribute("aria-hidden", "true");  
    document.body.classList.remove("lock-scroll");  
    stageImg.removeAttribute("src");  
    stageImg.alt \= "";  
    stageCap.textContent \= "";  
    if (lastFocused && typeof lastFocused.focus \=== "function") {  
      lastFocused.focus();  
    }  
  }

  function prev() {  
    current \= (current \- 1 \+ items.length) % items.length;  
    const { src, alt } \= readItem(current);  
    stageImg.src \= src;  
    stageImg.alt \= alt;  
    stageCap.textContent \= alt;  
  }

  function next() {  
    current \= (current \+ 1\) % items.length;  
    const { src, alt } \= readItem(current);  
    stageImg.src \= src;  
    stageImg.alt \= alt;  
    stageCap.textContent \= alt;  
  }

  // Wire triggers  
  triggers.forEach((btn, index) \=\> {  
    btn.addEventListener("click", () \=\> open(index));  
    btn.addEventListener("keydown", (e) \=\> {  
      if (e.key \=== "Enter" || e.key \=== " ") {  
        e.preventDefault();  
        open(index);  
      }  
    });  
  });

  // Controls  
  btnClose.addEventListener("click", close);  
  btnPrev.addEventListener("click", prev);  
  btnNext.addEventListener("click", next);

  // Dismiss when clicking outside the image  
  lightbox.addEventListener("click", (e) \=\> {  
    const clickedOnBackdrop \= e.target \=== lightbox;  
    if (clickedOnBackdrop) close();  
  });

  // Keyboard support  
  document.addEventListener("keydown", (e) \=\> {  
    const isOpen \= lightbox.getAttribute("aria-hidden") \=== "false";  
    if (\!isOpen) return;  
    if (e.key \=== "Escape") close();  
    if (e.key \=== "ArrowLeft") prev();  
    if (e.key \=== "ArrowRight") next();  
  });  
}

---

## **How to run**

1. Create the folder structure above.

2. Put these three files in place.

3. Add your images to `assets/img/` and update the file names in the HTML if needed.

4. Open `index.html` in a browser. No build step required.

## **Checkpoint**

Do you want me to add a case study template page with a monochrome layout, sticky table of contents, and a project hero image, then extend the gallery to load items from a JSON file for easy updates?

