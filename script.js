let audios = [];
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

    // Audio source de base
    const baseAudio = new Audio(`sounds/${sound}.mp3`);

    // Clone pour permettre la superposition
    const audio = baseAudio.cloneNode();
    audio.currentTime = 0;
    audio.play();

    audios.push(audio);

    audio.addEventListener("ended", () => {
      audios = audios.filter(a => a !== audio);
    });

    count++;
    counter.textContent = `Sons joués : ${count}`;
  });
});

document.getElementById("stop-sounds").addEventListener("click", () => {
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
  audios = [];
});

document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "k") {
    blackout.classList.toggle("active");
  }

  if (e.key.toLowerCase() === "l") {
    muted = !muted;
    audios.forEach(a => {
      a.pause();
      a.currentTime = 0;
    });
    audios = [];
  }
});
