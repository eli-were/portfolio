const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contact-status');

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get('name')?.toString().trim() || 'there';
    const senderEmail = data.get('email')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\n${message}`);

    window.location.href = `mailto:stepheneobare1@gmail.com?subject=${subject}&body=${body}`;
    contactForm.reset();
    contactStatus.textContent = 'Your email app should open with a new message ready to send.';
  });
}
