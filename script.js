gsap.from(".reveal", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
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

gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8
  });
});
