// Sélection de tous les boutons
const buttons = document.querySelectorAll(".sound");

// Pour chaque bouton
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Crée un nouvel audio à chaque clic (cela force le navigateur à charger et jouer le son)
    const audio = new Audio(`sounds/${button.dataset.sound}.mp3`);
    audio.play().catch(err => console.log("Erreur audio :", err));
  });
});
