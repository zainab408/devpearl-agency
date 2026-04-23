// Mobile-friendly nav active state based on URL
document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop() ||
      (link.getAttribute('href') === 'index.html' && window.location.pathname === '/')) {
    link.classList.add('active');
  }
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }
    if (data.message.length < 10) {
      alert('Message must be at least 10 characters.');
      return;
    }
    alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    contactForm.reset();
  });
}

// Newsletter form
const newsletterForms = document.querySelectorAll('.newsletter');
newsletterForms.forEach(f => f.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for subscribing!');
  f.reset();
}));

// Copy link button (blog post)
const copyBtn = document.getElementById('copy-link');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    copyBtn.textContent = '✓';
    setTimeout(() => { copyBtn.innerHTML = '🔗'; }, 1500);
  });
}