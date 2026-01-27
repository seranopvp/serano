// Sélection de tous les boutons
const buttons = document.querySelectorAll(".sound");

// Pour chaque bouton, on crée un audio et on ajoute l'événement click
buttons.forEach(button => {
  // Récupère le nom du son depuis data-sound
  const soundName = button.dataset.sound;

  // Crée un nouvel objet Audio pour ce son
  const audio = new Audio(`sounds/${soundName}.mp3`);

  // Quand le bouton est cliqué
  button.addEventListener("click", () => {
    audio.currentTime = 0; // remet le son au début si déjà en train de jouer
    audio.play();
  });
});
