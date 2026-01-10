// HERO INTRO
gsap.from(".profile-pic", {
  scale: 0.85,
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

// SCROLL ANIMATIONS
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

// PROJECT MODAL
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".work-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title || card.querySelector("h3").textContent;
    modalDesc.textContent = card.dataset.desc || "";
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
