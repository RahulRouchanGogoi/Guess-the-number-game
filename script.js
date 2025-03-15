let randomNo = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highscore = 20;
let gameOver = false;

document.querySelector(".check").addEventListener("click", function () {
  if (gameOver) return;
  const guess = Number(document.querySelector(".guess").value);
  if (!guess || guess < 0 || guess > 20) {
    const messageElement = document.querySelector(".message");
    messageElement.textContent = "⛔ Enter a valid guess!";
    messageElement.style.color = "#FF3B3B";
  } else if (guess === randomNo) {
    score++;
    const messageElement = document.querySelector(".message");
    messageElement.textContent = "✅ Correct Guess!";
    document.querySelector(".number").textContent = randomNo;
    document.querySelector(".number").style.fontSize = "1.2rem";
    document.querySelector(".yay-image-right").style.backgroundImage =
      'url("right.png")';
    document.querySelector(".yay-image-left").style.backgroundImage =
      'url("left.png")';
    document.querySelector(".score").textContent = score;
    document.querySelector(".main").style.backgroundColor = "#4CAF50";

    if (highscore === 20 || score < highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = " " + highscore;
    }
    gameOver = true;
  } else if (guess > randomNo) {
    if (score < 20) {
      document.querySelector(".message").textContent = "⬆️ Guess is high!";
      score++;
      document.querySelector(".score").textContent = " " + score;
    } else {
      document.querySelector(".message").textContent = "🥹 You loss the game! ";
      document.querySelector(".main").style.backgroundColor = "#FF3B3B";

      document.querySelector(".yay-image-left").style.backgroundImage =
        'url("cry.png")';
      document.querySelector(".yay-image-right").style.backgroundImage =
        'url("cryright.png")';
      gameOver = true;
    }
  } else if (guess < randomNo) {
    if (score < 20) {
      document.querySelector(".message").textContent = "⬇️ Guess is Low!";
      score++;
      document.querySelector(".score").textContent = " " + score;
    } else {
      document.querySelector(".message").textContent = "🥹 You loss the game! ";
      document.querySelector(".main").style.backgroundColor = "#FF3B3B";

      document.querySelector(".yay-image-left").style.backgroundImage =
        'url("cry.png")';
      document.querySelector(".yay-image-right").style.backgroundImage =
        'url("cryright.png")';
      gameOver = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNo = Math.trunc(Math.random() * 20) + 1;
  score = 0;
  document.querySelector(".message").textContent = "Start guessing...!";
  document.querySelector(".message").style.color = "#ffd700";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = " " + score;
  document.querySelector(".yay-image-right").style.backgroundImage = "none";
  document.querySelector(".yay-image-left").style.backgroundImage = "none";
  document.querySelector(".main").style.backgroundColor = "#1e1e1e";
  gameOver = false;
});
