let currentAudio = null;
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

    if (currentAudio) currentAudio.pause();

    const sound = btn.dataset.sound;
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();

    count++;
    counter.textContent = `Sons joués : ${count}`;
  });
});

document.getElementById("stop-sounds").addEventListener("click", () => {
  if (currentAudio) currentAudio.pause();
});

document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "k") {
    blackout.classList.toggle("active");
  }

  if (e.key.toLowerCase() === "l") {
    muted = !muted;
    if (currentAudio) currentAudio.pause();
  }
});
