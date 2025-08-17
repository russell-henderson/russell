I made you an updated TODO.md that maps directly to what is on the screen now and what still needs wiring.

Download TODO.md

If you prefer it inline:

\# TODO.md — Design House NYC Portfolio  
Status-aligned checklist based on the previous plan and the current screen capture. Scope covers header, hero, selected works carousel, filterable gallery, studio and contact sections, footer, and interactions. Keep it monochrome and minimal. No frameworks. No inline styles.

\---

\#\# 0\) Project scaffold  
\- \[x\] Create structure

.  
 ├─ index.html  
 ├─ assets/  
 │ ├─ css/styles.css  
 │ ├─ js/script.js  
 │ └─ img/

\- \[ \] Verify no 404s in the console and Network tab

\*\*Files\*\*: index.html, assets/css/styles.css, assets/js/script.js

\---

\#\# 1\) Base head and tokens  
\- \[x\] Meta viewport, title, description  
\- \[x\] Link styles.css and script.js with defer  
\- \[x\] CSS variables for palette, type, spacing, elevation  
\- \[x\] Minimal reset and base body styles  
\- \[x\] Prefers color scheme respected

\*\*Verify\*\*: color contrast on dark theme meets WCAG AA

\---

\#\# 2\) Header and primary nav  
\- \[x\] Sticky header with logo on the left, nav on the right  
\- \[x\] Semantic nav with list  
\- \[x\] Skip link present  
\- \[x\] Focus states visible

\*\*Acceptance\*\*: Tab order is Skip, Logo, Work, Studio, Contact

\---

\#\# 3\) Hero section  
\- \[x\] Text hero present with title and subcopy  
\- \[ \] Optional image hero variant (park for later)

\*\*Decision\*\*: Keep text hero for a clean editorial look

\---

\#\# 4\) Selected Works carousel  
\- \[x\] Horizontal card row renders  
\- \[x\] Prev and Next buttons present  
\- \[ \] Verify scrollBy on buttons  
\- \[ \] Confirm scroll snapping and keyboard focus within cards

\*\*Files\*\*: index.html, styles.css (.carousel, .card), script.js (initCarousel)

\---

\#\# 5\) Filterable Work grid  
\- \[x\] Gallery grid visible with six items  
\- \[x\] Filter chips render (All, Branding, Editorial, Product)  
\- \[ \] Verify filter logic toggles opacity and pointer events  
\- \[ \] Confirm aria-pressed updates

\*\*Files\*\*: index.html, styles.css (.grid, .filters), script.js (initFilters)

\---

\#\# 6\) Lightbox viewer  
\- \[ \] Confirm dialog markup exists with role="dialog" and aria-hidden  
\- \[ \] Wire open on click or Enter or Space  
\- \[ \] Wire Esc close, backdrop close, and Prev or Next controls  
\- \[ \] Maintain focus trap and return focus to the trigger  
\- \[ \] Caption equals the image alt text

\*\*Files\*\*: index.html (lightbox container), styles.css (.lightbox), script.js (initLightbox)

\---

\#\# 7\) Studio and Contact  
\- \[x\] Studio section with descriptive copy  
\- \[x\] Contact section with mailto link

\*\*Verify\*\*: Link text is readable and passes contrast

\---

\#\# 8\) Footer  
\- \[x\] Footer renders  
\- \[ \] Year set by script

\*\*Files\*\*: index.html, script.js (setYear)

\---

\#\# 9\) Accessibility  
\- \[ \] Keyboard sweep across header, hero link targets, carousel cards, filters, gallery items, lightbox, footer  
\- \[ \] Visible focus ring on all interactive elements  
\- \[ \] Logical heading order h1 then h2 groups then h3 if needed  
\- \[ \] Alt text set for every image with real descriptions

\*\*Tooling\*\*: Manual Tab test then Lighthouse a11y audit

\---

\#\# 10\) Performance and assets  
\- \[ \] Compress images  
\- Hero if used: \~1920 px wide  
\- Gallery items: up to 1200 px wide  
\- Thumbs: up to 800 px wide  
\- \[ \] Use WebP where possible with JPG fallback  
\- \[ \] Add loading="lazy" to non hero images  
\- \[ \] Add width and height attributes to reduce CLS

\*\*Tooling\*\*: Lighthouse performance check

\---

\#\# 11\) SEO and metadata  
\- \[ \] Finalize title and meta description  
\- \[ \] Add open graph tags (og:title, og:description, og:image)  
\- \[ \] Add favicon or simple monochrome SVG

\*\*Acceptance\*\*: Social share card shows correct text and image

\---

\#\# 12\) Deploy  
\- \[ \] GitHub Pages or Netlify or Vercel static host  
\- \[ \] Verify live URL with all assets loading

\*\*Acceptance\*\*: No console errors in production build

\---

\#\# Optional next steps  
\- \[ \] Case study template page with sticky table of contents  
\- \[ \] JSON driven gallery via assets/data/gallery.json with dynamic render  
\- \[ \] Basic analytics with a privacy focus  
\- \[ \] Sitemap and robots.txt

\---

\#\# Quick test plan  
1\. Open the page with a static server  
2\. Resize to 320, 375, 768, 1024, 1280  
3\. Tab through the page  
4\. Open each gallery item then navigate with arrows and Esc  
5\. Run Lighthouse for A11y and Performance  
6\. Check Network for oversized images

\---

\#\# Current status summary  
\- Green: Scaffold, base styles, header and nav, text hero, selected works cards, filters, gallery grid, studio and contact, footer  
\- Yellow: Carousel scroll controls, filter logic a11y, footer year, image sizes, lazy loading, lightbox interactions  
\- Grey: JSON gallery, case study page, SEO tags, deploy

\---

\#\# File diff queue  
\- \[ \] script.js  
\- Ensure setYear, initCarousel, initFilters, initLightbox are called and guarded  
\- \[ \] index.html  
\- Confirm lightbox markup and aria attributes  
\- Add width and height on all img tags  
\- \[ \] styles.css  
\- Confirm focus styles, scroll snap, and modal styles

\---

\#\# SAQC guardrails  
\- EM\! Avoid decorative punctuation  
\- OT\! If visual decisions diverge from this plan, call it out  
\- IN\! Provide concrete sizes for images as listed  
\- SC\! Label estimates

\---

\#\# Prompt confidence  
Tech 98, Component 97, Behavior 96, Content 96, Style 99

\---

\#\#\# Questions to confirm  
1\) Is the lightbox already wired in your current build  
2\) Do you want the case study template and JSON gallery implemented next  
3\) Should we keep the text hero or switch to the image hero variant

Refinement: confirm lightbox status and whether you want me to implement the case study template and JSON gallery now.

