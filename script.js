const buttons = document.querySelectorAll(".sound");

buttons.forEach(button => {
  const soundFile = `sounds/${button.dataset.sound}.mp3`;
  const audio = new Audio(soundFile);

  button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });
});