<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Test Audio</title>
</head>
<body>
  <button id="btn">Test Son</button>

  <script>
    document.getElementById("btn").addEventListener("click", () => {
      const audio = new Audio("sounds/aller-ftg.mp3");
      audio.play().catch(err => console.log("Erreur audio :", err));
    });
  </script>
</body>
</html>
