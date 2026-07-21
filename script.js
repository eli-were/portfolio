/* ============================================================
   Security-hardened portfolio script
   ============================================================ */
'use strict';

(() => {
  // ── Utility: sanitize a string for safe use in text/URLs ──
  const sanitizeText = (str) => {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  // ── Utility: strip all HTML tags (for plain-text contexts) ──
  const stripHTML = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/<[^>]*>/g, '');
  };

  // ── Utility: basic email format validation ──
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ── Constants ──
  const MAX_NAME_LENGTH = 100;
  const MAX_EMAIL_LENGTH = 254;
  const MAX_MESSAGE_LENGTH = 2000;
  const RATE_LIMIT_MS = 30000; // 30 seconds between submissions

  // ── DOM References ──
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const year = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contact-status');

  // ── Year ──
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ── Mobile Navigation ──
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Contact Form with Security Hardening ──
  if (contactForm && contactStatus) {
    let lastSubmitTime = 0;

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Rate limiting
      const now = Date.now();
      if (now - lastSubmitTime < RATE_LIMIT_MS) {
        const wait = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime)) / 1000);
        contactStatus.textContent = `Please wait ${wait} seconds before sending again.`;
        contactStatus.className = 'form-status form-status--error';
        return;
      }

      const data = new FormData(contactForm);

      // Extract and sanitize inputs
      let name = stripHTML(data.get('name')?.toString().trim() || '');
      let senderEmail = stripHTML(data.get('email')?.toString().trim() || '');
      let message = stripHTML(data.get('message')?.toString().trim() || '');

      // Enforce maximum lengths
      name = name.slice(0, MAX_NAME_LENGTH);
      senderEmail = senderEmail.slice(0, MAX_EMAIL_LENGTH);
      message = message.slice(0, MAX_MESSAGE_LENGTH);

      // Validation
      if (!name) {
        contactStatus.textContent = 'Please enter your name.';
        contactStatus.className = 'form-status form-status--error';
        return;
      }

      if (!senderEmail || !isValidEmail(senderEmail)) {
        contactStatus.textContent = 'Please enter a valid email address.';
        contactStatus.className = 'form-status form-status--error';
        return;
      }

      if (!message) {
        contactStatus.textContent = 'Please enter a message.';
        contactStatus.className = 'form-status form-status--error';
        return;
      }

      // Build mailto safely with encoded components
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`
      );

      lastSubmitTime = now;
      window.location.href = `mailto:stepheneobare1@gmail.com?subject=${subject}&body=${body}`;
      contactForm.reset();
      contactStatus.textContent =
        'Your email app should open with a new message ready to send.';
      contactStatus.className = 'form-status form-status--success';
    });
  }

  // ── Enforce security attributes on all external links ──
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // ── Block drag-and-drop of images (content protection) ──
  document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('draggable', 'false');
  });

  // ── Scroll-Reveal via IntersectionObserver ──
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Instantly show everything for accessibility
    revealTargets.forEach((el) => el.classList.add('revealed'));
    document.querySelectorAll('.timeline-item, .competency-grid article').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }
})();
