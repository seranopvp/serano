// ===== Gestion des sons =====
const buttons = document.querySelectorAll(".sound");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = new Audio(`sounds/${button.dataset.sound}.mp3`);
    audio.play().catch(err => console.log("Erreur audio :", err));
  });
});

// ===== Touche K pour mode blackout =====
document.addEventListener("keydown", (e) => {
  if(e.key.toLowerCase() === "k") {
    document.body.classList.toggle("blackout");
  }
});
