// ===== Sons =====
const buttons = document.querySelectorAll(".sound");
let counter = 0;
const counterDisplay = document.getElementById("counter");
let playingAudios = [];

// Jouer son avec effet glow
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = new Audio(`sounds/${button.dataset.sound}.mp3`);
    audio.play();
    playingAudios.push(audio);

    // compteur
    counter++;
    counterDisplay.textContent = `Sons joués : ${counter}`;
    counterDisplay.style.animation = "counterPulse 0.3s";
    setTimeout(() => counterDisplay.style.animation = "", 300);

    // effet glow sur bouton
    button.classList.add("playing");
    audio.addEventListener("ended", () => {
      playingAudios = playingAudios.filter(a => a !== audio);
      button.classList.remove("playing");
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
  buttons.forEach(b => b.classList.remove("playing"));
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
