// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// HERO INTRO (on load)
gsap.from(".profile-pic", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power4.out"
});

gsap.from(".hero-sub, .hero-links a", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.15,
  ease: "power3.out"
});

// SECTION SCROLL ANIMATIONS
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });
});
