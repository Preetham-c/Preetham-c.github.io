gsap.from(".hero-title, .hero-sub, .profile-pic", {
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out"
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});
