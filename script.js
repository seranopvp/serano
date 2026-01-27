// ===== Sons =====
const buttons = document.querySelectorAll(".sound");
let counter = 0;
const counterDisplay = document.getElementById("counter");
let playingAudios = [];

// Jouer son
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = new Audio(`sounds/${button.dataset.sound}.mp3`);
    audio.play();
    playingAudios.push(audio);

    // compteur
    counter++;
    counterDisplay.textContent = `Sons joués : ${counter}`;

    // supprimer audio de la liste quand fini
    audio.addEventListener("ended", () => {
      playingAudios = playingAudios.filter(a => a !== audio);
    });
  });
});

// ===== Stop tous les sons =====
const stopBtn = document.getElementById("stop-sounds");

function stopAll() {
  playingAudios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
  playingAudios = [];
}

stopBtn.addEventListener("click", stopAll);

// Touche L = stop sons
document.addEventListener("keydown", e => {
  if(e.key.toLowerCase() === "l") {
    stopAll();
  }
});

// ===== BLACKOUT TOTAL =====
const blackout = document.getElementById("blackout");

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "k") {
    blackout.classList.toggle("active");
  }
});
