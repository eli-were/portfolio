const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const accordionItems = document.querySelectorAll('.accordion-item');

if (year) {
  year.textContent = new Date().getFullYear();
}

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
}

accordionItems.forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');

  if (trigger) {
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      accordionItems.forEach((entry) => {
        entry.classList.remove('active');
        const entryTrigger = entry.querySelector('.accordion-trigger');
        if (entryTrigger) {
          entryTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  }
});
