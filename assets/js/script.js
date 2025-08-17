/* Design House NYC — Interactions
   - Selected Works carousel controls
   - Filterable grid with pagination
   - Lightbox with keyboard support
   - Dynamic JSON content loading
   - Bottom sections rendering
*/

// Global variables for gallery pagination
let currentGalleryPage = 1;
let currentGalleryCategory = 'all';

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderClients();
  renderTestimonials();
  renderServices();
  renderProcess();
  renderPress();
  renderGallery();
  initCarousel();
  initFilters();
  initLightbox();
  initContactForm(); // Add this line
});

/* Footer year */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* Carousel */
function initCarousel() {
  const track = document.querySelector("[data-carousel]");
  const btnPrev = document.querySelector('[data-carousel="prev"]');
  const btnNext = document.querySelector('[data-carousel="next"]');
  
  if (!track || !btnPrev || !btnNext) return;

  const step = () => Math.min(track.clientWidth * 0.9, 640);

  btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
  
  btnNext.addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });

  // Keyboard navigation for carousel cards
  const cards = track.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Could open lightbox or navigate to project detail
        console.log('Card activated:', card.querySelector('h3')?.textContent);
      }
    });
  });
}

/* Data-Driven Gallery */
async function renderGallery() {
  try {
    const response = await fetch('assets/data/gallery.json');
    const galleryData = await response.json();

    const grid = document.querySelector('[data-grid]');
    if (!grid) return;

    grid.innerHTML = '';

    galleryData.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'grid-item';
      li.setAttribute('data-gallery-item', '');
      li.setAttribute('data-category', item.category);

      li.innerHTML = `
        <div class="gallery-item-content">
          <button class="thumb" data-gallery-open aria-label="Open ${item.title}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy" width="800" height="600">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <span class="gallery-category">${item.category}</span>
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-client">${item.client}</p>
              </div>
            </div>
          </button>
          <div class="gallery-item-info">
            <div class="gallery-item-header">
              <h3 class="gallery-item-title">${item.title}</h3>
              <span class="gallery-item-category">${item.category}</span>
            </div>
            <p class="gallery-item-description">${item.description}</p>
            <div class="gallery-item-meta">
              <span class="gallery-item-client">Client: ${item.client}</span>
            </div>
          </div>
        </div>
      `;
      
      grid.appendChild(li);
    });

    // Initialize lightbox after gallery is rendered
    initLightbox();

  } catch (error) {
    console.error('Error loading gallery data:', error);
  }
}

/* Clients Section */
async function renderClients() {
  try {
    const response = await fetch('assets/data/clients.json');
    const clients = await response.json();
    
    const clientsGrid = document.querySelector('[data-clients]');
    if (!clientsGrid) return;
    
    clientsGrid.innerHTML = '';
    
    clients.forEach(client => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${client.url}" aria-label="Visit ${client.name}">
          <img src="${client.logo}" alt="Client: ${client.name}" loading="lazy" width="200" height="100">
        </a>
      `;
      clientsGrid.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error loading clients data:', error);
  }
}

/* Testimonials Section */
async function renderTestimonials() {
  try {
    const response = await fetch('assets/data/testimonials.json');
    const testimonials = await response.json();
    
    const testimonialsList = document.querySelector('[data-testimonials]');
    if (!testimonialsList) return;
    
    testimonialsList.innerHTML = '';
    
    testimonials.forEach(testimonial => {
      const li = document.createElement('li');
      li.className = 'testimonial-card';
      li.innerHTML = `
        <blockquote class="testimonial-quote">"${testimonial.quote}"</blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-name">${testimonial.name}</div>
          <div class="testimonial-role">${testimonial.role}, ${testimonial.company}</div>
        </div>
      `;
      testimonialsList.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error loading testimonials data:', error);
  }
}

/* Services Section */
async function renderServices() {
  try {
    const response = await fetch('assets/data/services.json');
    const services = await response.json();
    
    const servicesGrid = document.querySelector('[data-services]');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';
    
    services.forEach(service => {
      const li = document.createElement('li');
      li.className = 'service-card';
      li.innerHTML = `
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.desc}</p>
        <a href="${service.url}" class="service-link">View work →</a>
      `;
      servicesGrid.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error loading services data:', error);
  }
}

/* Process Section */
async function renderProcess() {
  try {
    const response = await fetch('assets/data/process.json');
    const processSteps = await response.json();
    
    const processList = document.querySelector('[data-process]');
    if (!processList) return;
    
    processList.innerHTML = '';
    
    processSteps.forEach(step => {
      const li = document.createElement('li');
      li.className = 'process-step';
      li.innerHTML = `
        <h3 class="process-step-title">${step.step}</h3>
        <p class="process-step-text">${step.text}</p>
      `;
      processList.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error loading process data:', error);
  }
}

/* Press Section */
async function renderPress() {
  try {
    const response = await fetch('assets/data/press.json');
    const pressItems = await response.json();
    
    const pressList = document.querySelector('[data-press]');
    if (!pressList) return;
    
    pressList.innerHTML = '';
    
    pressItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'press-item';
      li.innerHTML = `
        <div class="press-info">
          <div class="press-outlet">${item.outlet}</div>
          <div class="press-title">${item.title}</div>
          <div class="press-year">${item.year}</div>
        </div>
        <a href="${item.url}" class="press-link" target="_blank" rel="noopener">Read →</a>
      `;
      pressList.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error loading press data:', error);
  }
}

/* Filters */
function initFilters() {
  const buttons = Array.from(document.querySelectorAll(".filter"));
  
  if (!buttons.length) return;

  function apply(category, clickedBtn) {
    // Update all button states
    buttons.forEach((b) => {
      const isActive = b === clickedBtn;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    
    // Filter gallery items
    const items = document.querySelectorAll('[data-gallery-item]');
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const show = category === 'all' || itemCategory === category;
      
      if (show) {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.setAttribute('aria-hidden', 'false');
      } else {
        item.style.display = 'none';
        item.style.opacity = '0.08';
        item.setAttribute('aria-hidden', 'true');
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-filter");
      apply(selected, btn);
    });
  });
}

/* Lightbox */
function initLightbox() {
  const lightbox = document.querySelector("[data-lightbox]");
  const btnClose = document.querySelector("[data-lightbox-close]");
  const btnPrev = document.querySelector("[data-lightbox-prev]");
  const btnNext = document.querySelector("[data-lightbox-next]");
  const stageImg = document.querySelector(".lightbox-image");
  const stageCap = document.querySelector(".lightbox-caption");
  const triggers = Array.from(document.querySelectorAll("[data-gallery-open]"));
  const items = Array.from(document.querySelectorAll("[data-gallery-item]"));

  if (!lightbox || !btnClose || !btnPrev || !btnNext || !stageImg || !stageCap) {
    console.warn('Lightbox elements not found');
    return;
  }
  
  if (!triggers.length || !items.length) {
    console.warn('No gallery items found');
    return;
  }

  let current = 0;
  let lastFocused = null;

  function readItem(i) {
    const img = items[i].querySelector("img");
    const src = img?.getAttribute("src") || "";
    const alt = img?.getAttribute("alt") || "";
    return { src, alt };
  }

  function open(i) {
    current = i;
    const { src, alt } = readItem(current);
    
    if (!src) {
      console.warn('No image source found for item', i);
      return;
    }
    
    stageImg.src = src;
    stageImg.alt = alt;
    stageCap.textContent = alt;

    lastFocused = document.activeElement;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock-scroll");
    
    // Focus management
    btnClose.focus();
    
    // Announce to screen readers
    announceToScreenReader(`Opened image ${i + 1} of ${items.length}: ${alt}`);
  }

  function close() {
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock-scroll");
    stageImg.removeAttribute("src");
    stageImg.alt = "";
    stageCap.textContent = "";
    
    // Return focus to trigger
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    
    announceToScreenReader('Lightbox closed');
  }

  function prev() {
    current = (current - 1 + items.length) % items.length;
    const { src, alt } = readItem(current);
    stageImg.src = src;
    stageImg.alt = alt;
    stageCap.textContent = alt;
    
    announceToScreenReader(`Previous image: ${alt}`);
  }

  function next() {
    current = (current + 1) % items.length;
    const { src, alt } = readItem(current);
    stageImg.src = src;
    stageImg.alt = alt;
    stageCap.textContent = alt;
    
    announceToScreenReader(`Next image: ${alt}`);
  }

  // Screen reader announcement helper
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Wire triggers
  triggers.forEach((btn, index) => {
    btn.addEventListener("click", () => open(index));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
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
  lightbox.addEventListener("click", (e) => {
    const clickedOnBackdrop = e.target === lightbox;
    if (clickedOnBackdrop) close();
  });

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    const isOpen = lightbox.getAttribute("aria-hidden") === "false";
    if (!isOpen) return;
    
    switch (e.key) {
      case "Escape":
        close();
        break;
      case "ArrowLeft":
        prev();
        break;
      case "ArrowRight":
        next();
        break;
      case "Home":
        e.preventDefault();
        open(0);
        break;
      case "End":
        e.preventDefault();
        open(items.length - 1);
        break;
    }
  });

  // Focus trap within lightbox
  const focusableElements = lightbox.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });
}

/* Contact Form Handling */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Show loading state
    setFormLoading(true);
    
    try {
      // Simulate form submission (replace with actual endpoint)
      await submitForm(form);
      
      // Show success message
      showSuccessMessage();
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      showFormError('An error occurred. Please try again or contact us directly.');
    } finally {
      setFormLoading(false);
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
}

function validateForm() {
  const form = document.getElementById('contactForm');
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (!errorElement) return true;

  let isValid = true;
  let errorMessage = '';

  // Required field validation
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    errorMessage = 'This field is required.';
  }

  // Email validation
  if (field.type === 'email' && field.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }
  }

  // Name validation (minimum 2 characters)
  if (field.id === 'name' && field.value.trim() && field.value.trim().length < 2) {
    isValid = false;
    errorMessage = 'Name must be at least 2 characters long.';
  }

  // Message validation (minimum 10 characters)
  if (field.id === 'message' && field.value.trim() && field.value.trim().length < 10) {
    isValid = false;
    errorMessage = 'Message must be at least 10 characters long.';
  }

  // Show/hide error
  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError(field);
  }

  return isValid;
}

function showFieldError(field, message) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    field.classList.add('error');
  }
}

function clearFieldError(field) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    field.classList.remove('error');
  }
}

function clearFormErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  const errorFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
  
  errorMessages.forEach(error => {
    error.textContent = '';
    error.style.display = 'none';
  });
  
  errorFields.forEach(field => {
    field.classList.remove('error');
  });
}

function setFormLoading(loading) {
  const submitBtn = document.querySelector('#contactForm button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  
  if (loading) {
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.classList.add('loading');
  } else {
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    submitBtn.classList.remove('loading');
  }
}

async function submitForm(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Simulate API call (replace with actual endpoint)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success (90% success rate)
      if (Math.random() > 0.1) {
        resolve(data);
      } else {
        reject(new Error('Network error'));
      }
    }, 1500);
  });
}

function showSuccessMessage() {
  const successMessage = document.getElementById('successMessage');
  const form = document.getElementById('contactForm');
  
  if (successMessage && form) {
    form.style.display = 'none';
    successMessage.hidden = false;
    
    // Auto-hide after 10 seconds and show form again
    setTimeout(() => {
      successMessage.hidden = true;
      form.style.display = 'block';
    }, 10000);
  }
}

function showFormError(message) {
  // Create a temporary error banner
  const errorBanner = document.createElement('div');
  errorBanner.className = 'form-error-banner';
  errorBanner.innerHTML = `
    <div class="error-banner-content">
      <span class="error-icon">⚠️</span>
      <span class="error-text">${message}</span>
      <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(errorBanner, form);
  
  // Auto-hide after 8 seconds
  setTimeout(() => {
    if (errorBanner.parentNode) {
      errorBanner.remove();
    }
  }, 8000);
}

/* Theme Toggle Functionality */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Update button state
  updateThemeToggleState();

  // Handle theme toggle click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add pulse animation
    themeToggle.classList.add('changing');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeToggleState();
    
    // Remove animation class after animation completes
    setTimeout(() => {
      themeToggle.classList.remove('changing');
    }, 600);
    
    // Announce theme change to screen readers
    const themeAnnouncement = document.getElementById('theme-announcement');
    if (themeAnnouncement) {
      themeAnnouncement.textContent = `Switched to ${newTheme} theme`;
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateThemeToggleState();
    }
  });
}

function updateThemeToggleState() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIndicator = document.getElementById('themeIndicator');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
  }
  
  if (themeIndicator) {
    themeIndicator.textContent = currentTheme === 'dark' ? 'Dark' : 'Light';
  }
}

/* Scroll-triggered Animations */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initCarousel();
  initFilters();
  initLightbox();
  initContactForm();
  initScrollAnimations();
  initThemeToggle(); // Initialize theme toggle
});

// Add screen reader only class
const style = document.createElement('style');
style.textContent = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
document.head.appendChild(style);
