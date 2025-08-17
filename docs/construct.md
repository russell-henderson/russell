\# PHASE 2 — Design House NYC  
\# Goal: finish interactions, add bottom sections, move gallery to data, and prep for deploy.  
\# Scope is static HTML, CSS, JS. No frameworks. No inline styles.

\# 01 Lightbox Viewer  
todo "Lightbox" \\  
  file:add:index.html:"\#work \-\> add \<div class='lightbox' role='dialog' aria-hidden='true'\> with close, prev, next, stage" \\  
  file:update:assets/js/script.js:"add initLightbox(), open, close, prev, next, Esc, backdrop click, arrow keys, focus return" \\  
  file:update:assets/css/styles.css:"add .lightbox, .lightbox-stage, .lightbox-image, .lightbox-nav, .lightbox-close" \\  
  accept:"Keyboard only user can open any grid item, navigate with arrows, close with Esc, focus returns to trigger."

\# 02 Selected Clients  
todo "ClientsGrid" \\  
  file:create:assets/data/clients.json:'\[{"name":"Acme Retail","logo":"assets/img/clients/acme.svg","url":"\#"}, {"name":"Mono Labs","logo":"assets/img/clients/mono.svg","url":"\#"}\]' \\  
  file:update:index.html:"add \<section id='clients'\> with \<ul data-clients\>\</ul\> under gallery" \\  
  file:update:assets/js/script.js:"add renderClients() to fetch clients.json and inject list items; each \<img alt='Client: Name'\>" \\  
  file:update:assets/css/styles.css:"add .clients-grid list as 5 to 8 columns responsive, equal height logos, monochrome filter" \\  
  accept:"8 to 16 logos, equal visual weight, links have aria-label 'Visit Client'."

\# 03 Testimonials  
todo "TestimonialList" \\  
  file:create:assets/data/testimonials.json:'\[{"quote":"They delivered clean systems.","name":"J. Rivera","role":"Creative Lead","company":"Mono Labs"}\]' \\  
  file:update:index.html:"add \<section id='testimonials'\>\<ul data-testimonials\>\</ul\>\</section\>" \\  
  file:update:assets/js/script.js:"add renderTestimonials() to map JSON to cards; limit to 2 to 4 items" \\  
  file:update:assets/css/styles.css:"add .testimonial card style, max width 64ch, italic quote line" \\  
  accept:"Each quote under 200 chars, includes name and company, readable at 320 px."

\# 4 Services Snapshot  
todo "ServicesGrid" \\  
  file:create:assets/data/services.json:'\[{"title":"Identity","desc":"Logos, systems, guidelines"}, {"title":"Editorial","desc":"Magazines, books, grids"}, {"title":"Product","desc":"Shoot, retouch, listings"}, {"title":"Campaign","desc":"Concepts, boards, rollout"}\]' \\  
  file:update:index.html:"add \<section id='services'\>\<ul data-services\>\</ul\>\</section\>" \\  
  file:update:assets/js/script.js:"add renderServices()" \\  
  file:update:assets/css/styles.css:"add .service-card 2 to 4 column responsive grid; single CTA link placeholder" \\  
  accept:"4 to 6 cards with one line descriptions. Same padding and alignment."

\# 5 Process  
todo "ProcessSteps" \\  
  file:create:assets/data/process.json:'\[{"step":"Discover","text":"Intake and references"},{"step":"Define","text":"Scope and structure"},{"step":"Design","text":"Explorations and proof"},{"step":"Deliver","text":"Finals and handoff"}\]' \\  
  file:update:index.html:"add \<section id='process'\>\<ol data-process\>\</ol\>\</section\>" \\  
  file:update:assets/js/script.js:"add renderProcess()" \\  
  file:update:assets/css/styles.css:"add .process-steps grid of 4 on desktop, stack on mobile" \\  
  accept:"Four steps, one sentence each, ordered list semantics."

\# 6 Press and Awards  
todo "PressList" \\  
  file:create:assets/data/press.json:'\[{"outlet":"Design Weekly","year":2024,"title":"Monochrome done right","url":"\#"}\]' \\  
  file:update:index.html:"add \<section id='press'\>\<ul data-press\>\</ul\>\</section\>" \\  
  file:update:assets/js/script.js:"add renderPress() with target=\_blank rel=noopener" \\  
  file:update:assets/css/styles.css:"add .press-list with subtle separators" \\  
  accept:"Chronological list with outlet, year, title."

\# 7 CTA Strip  
todo "CTAStrip" \\  
  file:update:index.html:"add \<section id='cta' class='cta-strip'\>\<h3\>Work with us\</h3\>\<div class='cta-actions'\>\<a class='btn primary' href='\#contact'\>Start a project\</a\>\<a class='btn' href='\#work'\>View all work\</a\>\</div\>\</section\>" \\  
  file:update:assets/css/styles.css:"add .cta-strip full width muted background, .btn primary and secondary styles" \\  
  accept:"One line statement and two buttons, passes contrast."

\# 8 Data-driven Gallery  
todo "GalleryData" \\  
  file:create:assets/data/gallery.json:'\[{"src":"assets/img/sample-01.jpg","alt":"Branding, geometric logo","cat":"branding"},{"src":"assets/img/sample-02.jpg","alt":"Editorial spread","cat":"editorial"}\]' \\  
  file:update:index.html:"replace hardcoded grid items with empty \<ul class='grid' data-grid\>\</ul\>" \\  
  file:update:assets/js/script.js:"add renderGallery() to load gallery.json, build \<li\> with \<button data-gallery-open\> and set data-category; call before initLightbox()" \\  
  accept:"New work appears by editing JSON only. Filters keep working."

\# 9 Interactions and A11y pass  
todo "A11yPass" \\  
  file:update:assets/js/script.js:"verify aria-pressed toggles in filters; trap focus inside lightbox; return focus on close" \\  
  file:update:assets/css/styles.css:"ensure :focus-visible outlines for .filter, .thumb, .btn, .lightbox controls" \\  
  accept:"Tab path works across entire page. Screen reader announces states."

\# 10 Image hygiene  
todo "Images" \\  
  file:update:index.html:"add width and height attributes to all \<img\>" \\  
  file:update:assets/css/styles.css:"ensure aspect-ratio rules remain consistent" \\  
  change:"convert large images to 1920 hero, 1200 gallery, 800 thumbs; add WebP where possible; set loading='lazy' on non-hero" \\  
  accept:"Low CLS, quick render, no oversized images flagged."

\# 11 SEO and share cards  
todo "SEO" \\  
  file:update:index.html:"finalize \<title\> and \<meta name='description'\>" \\  
  file:update:index.html:"add og:title, og:description, og:image, og:type=website" \\  
  file:add:assets/img/og.jpg:"1200x630 share image" \\  
  accept:"Shared links show correct title and preview."

\# 12 Footer year and housekeeping  
todo "FooterYear" \\  
  file:update:index.html:"ensure \<span id='year'\>\</span\> exists" \\  
  file:update:assets/js/script.js:"ensure setYear() runs on DOMContentLoaded" \\  
  accept:"Current year renders."

\# 13 Deploy  
todo "DeployStatic" \\  
  option:"GitHub Pages or Netlify or Vercel" \\  
  accept:"Live URL loads with no console errors."

\# Call order inside script.js on DOMContentLoaded  
\# setYear(); renderClients(); renderTestimonials(); renderServices(); renderProcess(); renderPress(); renderGallery();  
\# initCarousel(); initFilters(); initLightbox();

\# Exit criteria for Phase 2  
\# 1 Keyboard only user can browse full gallery with lightbox and filters.  
\# 2 Bottom sections render from JSON with consistent styling.  
\# 3 Lighthouse shows good scores for a11y and performance.  
\# 4 No console errors and no 404s.

1\. Strong Visual Hierarchy

* Use bold, clear headline typography for section titles.  
* Establish consistent heading sizes (H1, H2, H3...), and use spacing to visually group related content.

2\. Unified Color Palette

* Choose a refined, modern palette (2–3 primary colors plus neutrals). Incorporate a signature accent color for CTAs and hover states.  
* Ensure good contrast for readability and accessibility.

3\. Distinctive Typography

* Select one or two typefaces: a clean sans-serif for body and an expressive serif or display font for headers/titles.  
* Adjust line heights and letter spacing for more readable, elegant text blocks.

4\. Layout & Spacing

* Apply generous padding and margin between elements for an upscale, editorial feel.  
* Use grids or cards to display portfolio pieces, maintaining alignment and balance.

5\. Elegant Imagery

* Showcase high-resolution, well-lit project images. Use subtle drop shadows or borders to help images stand out without being overbearing.  
* Add hover effects (zoom, subtle overlay) for interactivity.

6\. Interactive Elements

* Smooth scroll to anchor links.  
* Animated transitions between pages or sections keep the UX lively but not distracting.  
* Clearly styled buttons with distinct hover/focus states.

7\. Subtle Details

* Consider micro-interactions (e.g., icon animations, button ripples).  
* Animate transitions for gallery slideshows or image reveals.

8\. Consistent Iconography

* Use a modern, minimal icon set for navigation, social links, and contact info.

9\. Responsive & Adaptive Design

* Optimize every section for all devices: use flexible grids, scalable images, and touch-friendly interactions.

10\. Professional Flourishes

* Add a branded favicon.  
* Use a subdued background texture or subtle section dividers for more visual interest without clutter.

Bonus: Modern Trends

* Consider a sticky navigation bar for easier browsing.  
* Offer a dark/light mode toggle for user preference.

Following these style suggestions will help your site convey creativity, trust, and high-end design sensibility—making it memorable for potential clients and collaborators.

