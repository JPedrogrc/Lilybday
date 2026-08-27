const screens = document.querySelectorAll(".screen");
let current = 1;

function goTo(number) {
  const next = document.getElementById(`screen-${number}`);

  if (!next) return;

  screens.forEach(screen => screen.classList.remove("active"));
  next.classList.add("active");
  current = number;

  // Always start a new screen at the top on phones.
  next.scrollTop = 0;
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    goTo(Number(button.dataset.next));
  });
});

// Stars
const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.opacity = Math.random();
  star.style.setProperty("--duration", `${2 + Math.random() * 5}s`);
  star.style.animationDelay = `${Math.random() * 5}s`;
  stars.appendChild(star);
}

// Music
const openButton = document.getElementById("openButton");
const music = document.getElementById("music");

music.volume = 0.25;

openButton.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (error) {
    console.error("Não foi possível iniciar a música:", error);
  }

  goTo(2);
});

// Hug surprise
const hugButton = document.getElementById("hugButton");
const hugMessage = document.getElementById("hugMessage");
const finalNext = document.getElementById("finalNext");

hugButton.addEventListener("click", () => {
  hugButton.style.display = "none";
  hugMessage.classList.add("show");

  setTimeout(() => {
    finalNext.classList.remove("hidden");
  }, 1800);
});

// Final secret
const sunButton = document.getElementById("sunButton");
const secret = document.getElementById("secret");

sunButton.addEventListener("click", () => {
  secret.classList.remove("hidden");
  sunButton.style.transform = "rotate(180deg) scale(1.08)";
});

// Keyboard navigation for desktop
document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" && current < 7) {
    goTo(current + 1);
  }

  if (event.key === "ArrowLeft" && current > 1) {
    goTo(current - 1);
  }
});
