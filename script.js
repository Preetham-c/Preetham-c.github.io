gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out"
});

/* SECTIONS */
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    }
  });
});

/* CARDS */
gsap.utils.toArray(".professional-card").forEach(card => {
  gsap.from(card, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    }
  });
});

/* MODAL DATA */
const details = {
  toyota: `
    <h3>Employee Engagement & Productivity</h3>
    <p><strong>Company:</strong> Toyota Kirloskar Motors Pvt. Ltd</p>
    <p><strong>Duration:</strong> May 2025 – July 2025</p>
    <ul>
      <li>Analyzed employee engagement initiatives</li>
      <li>Studied grievance redressal systems</li>
      <li>Evaluated impact on productivity and work-life balance</li>
      <li>Reviewed CSR activities and collaboration culture</li>
    </ul>
  `,
  ajith: `
    <h3>Business Operations & HR Internship</h3>
    <p><strong>Company:</strong> Ajith Glaga India Pvt. Ltd.</p>
    <p><strong>Duration:</strong> Aug 2024 – Sep 2024</p>
    <ul>
      <li>Worked across HR, Production, and Finance departments</li>
      <li>Conducted financial statement analysis</li>
      <li>Applied SWOT, Porter’s Five Forces & McKinsey 7S</li>
      <li>Observed manufacturing and quality control processes</li>
    </ul>
  `
};

const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".professional-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.modal;
    if (!key) return;

    modalContent.innerHTML = details[key];
    modal.style.display = "flex";

    gsap.from(".modal", {
      scale: 0.9,
      opacity: 0,
      duration: 0.4
    });
  });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => e.target === modal && (modal.style.display = "none");
