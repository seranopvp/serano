// ===== Gestion des sons =====
const buttons = document.querySelectorAll(".sound");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = new Audio(`sounds/${button.dataset.sound}.mp3`);
    audio.play().catch(err => console.log("Erreur audio :", err));
  });
});

// ===== Touche K pour mode Nori =====
document.addEventListener("keydown", (e) => {
  if(e.key.toLowerCase() === "k") {
    document.body.classList.toggle("nori");
  }
  // ===== BLACKOUT TOTAL (touche K) =====
const blackout = document.getElementById("blackout");

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "k") {
    blackout.classList.toggle("active");
  }
});

});

