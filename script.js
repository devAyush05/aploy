const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.35 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 15}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heart.style.animationDelay = `${Math.random() * 1.5}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 13000); 
  
}

setInterval(createHeart, 650);
for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 180);

const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextBtn.style.transform = "scale(.96)";
    setTimeout(() => {
      window.location.href = "apology.html";
    }, 120);
  });
}

const loveBtn = document.getElementById("loveBtn");
const loveModal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");

if (loveBtn && loveModal) {
  loveBtn.addEventListener("click", () => {
    loveModal.classList.add("show");
  });
}

if (closeModal && loveModal) {
  closeModal.addEventListener("click", () => {
    loveModal.classList.remove("show");
  });

  loveModal.addEventListener("click", (e) => {
    if (e.target === loveModal) loveModal.classList.remove("show");
  });
}
