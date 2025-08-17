Here is a focused next-steps list, prioritized and mapped to files.

## **P0 Critical**

1. Lightbox viewer

   * Add dialog markup with role="dialog" and aria-hidden in `index.html`.

   * Implement open, close, prev, next, Esc, backdrop click, arrow keys, focus return in `assets/js/script.js`.

   * Add styles for `.lightbox` in `assets/css/styles.css`.

   * Acceptance: keyboard only user can open any item, navigate images, and exit cleanly.

2. Gallery filters a11y

   * In `script.js` ensure `aria-pressed` toggles correctly and only the active filter is true.

   * In `styles.css` confirm visible focus ring for `.filter` and `.thumb`.

   * Acceptance: screen reader announces filter state, items hide or dim reliably.

3. Carousel controls

   * In `script.js` verify Prev or Next call `scrollBy` with a guarded step and respect container width; ensure buttons are disabled at ends or keep looping by design.

   * Acceptance: smooth scroll, no dead buttons, cards receive focus while tabbing.

4. Footer year

   * Wire `setYear()` in `script.js` and add `<span id="year"></span>` in footer.

   * Acceptance: current year renders.

5. No console or 404s

   * Open DevTools and Network to confirm.

   * Acceptance: clean console, all assets load.

## **P1 Quality and compliance**

6. Image hygiene

   * Add `width` and `height` on all `<img>` to reduce CLS.

   * Add `loading="lazy"` on non-hero images.

   * Compress assets and add WebP versions where possible.

   * Acceptance: Lighthouse shows low CLS and good image efficiency.

7. Alt text pass

   * Replace placeholders with descriptive alt for each work item.

   * Acceptance: alt text explains content, not just file names.

8. Keyboard sweep and headings

   * Verify logical heading order and tab order across the page.

   * Acceptance: complete keyboard path with visible focus everywhere.

9. Tokens and contrast

   * Recheck dark theme colors meet WCAG AA for text, links, focus, and borders.

   * Acceptance: Lighthouse a11y green for contrast.

## **P2 Product polish**

10. SEO and share cards

* Finalize `<title>` and `<meta name="description">`.

* Add Open Graph tags and a favicon.

* Acceptance: shared links show correct title, summary, and image.

11. Case study template page

* New page `case-study.html` with sticky table of contents, hero image, typographic layout, and back link.

* Acceptance: template usable for any project without code edits.

12. JSON-driven gallery

* Add `assets/data/gallery.json`.

* Fetch and render items in `script.js` to avoid editing HTML for updates.

* Acceptance: new work appears by editing JSON only.

13. Deploy

* Choose GitHub Pages or Netlify or Vercel.

* Push and verify live URL.

* Acceptance: production site matches local with no console errors.

## **File changes checklist**

* `index.html`

  * Lightbox container and controls

  * `id="year"` in footer

  * `width` and `height` on all `<img>`

* `assets/css/styles.css`

  * Focus outlines, modal styles, scroll snap verification

  * Contrast tweaks if needed

* `assets/js/script.js`

  * `setYear`, `initCarousel`, `initFilters`, `initLightbox` with guards

## **Quick test plan**

* Resize at 320, 375, 768, 1024, 1280\.

* Tab across all interactive elements.

* Open the lightbox, use arrows, use Esc.

* Run Lighthouse for Performance and Accessibility.

* Check Network for oversized images.

## **SAQC checkpoints**

* EM\! No decorative punctuation.

* OT\! If design diverges, note it before change.

* IN\! Image target widths: hero 1920, gallery 1200, thumbs 800\.

* SC\! Any estimates should be labeled.

## **Confidence scores**

Tech 98, Component 97, Behavior 96, Content 96, Style 99

Refinement: do you want me to implement the lightbox and filter a11y now, then move to image hygiene and SEO, or adjust the order?

