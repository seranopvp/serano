let currentAudios = [];
let count = 0;
let muted = false;

const counter = document.getElementById("counter");
const blackout = document.getElementById("blackout");
const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
  intro.classList.add("hide");
});

document.querySelectorAll(".sound").forEach(btn => {
  btn.addEventListener("click", () => {
    if (muted) return;

    const sound = btn.dataset.sound;
    const audio = new Audio(`sounds/${sound}.mp3`);

    audio.play();
    currentAudios.push(audio);

    // Nettoyage automatique quand un son se termine
    audio.addEventListener("ended", () => {
      currentAudios = currentAudios.filter(a => a !== audio);
    });

    count++;
    counter.textContent = `Sons joués : ${count}`;
  });
});

document.getElementById("stop-sounds").addEventListener("click", () => {
  currentAudios.forEach(audio => audio.pause());
  currentAudios = [];
});

document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "k") {
    blackout.classList.toggle("active");
  }

  if (e.key.toLowerCase() === "l") {
    muted = !muted;
    currentAudios.forEach(audio => audio.pause());
    currentAudios = [];
  }
});
