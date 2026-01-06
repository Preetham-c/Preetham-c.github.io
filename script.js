// ===== Smooth Scroll Offset Fix (Sticky Navbar) =====
const navHeight = document.querySelector('.top-nav').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offsetTop = target.offsetTop - navHeight - 10;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// ===== Reveal Cards on Scroll =====
const cards = document.querySelectorAll(
  '.project-card, .education-card, .achievement-card, .skills-card, .professional-card'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-card');
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));
