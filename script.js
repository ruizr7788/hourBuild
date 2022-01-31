const containerEl = document.getElementById("container");
const userGuessEl = document.getElementById("input");
const checkGuessBTNEl = document.getElementById("check");
const mysteryNumEl = document.getElementById("mystery_number");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const inputEl = document.getElementById("input");
const resetEl = document.getElementById("reset");

checkGuessBTNEl.addEventListener("click", checkGuess);
resetEl.addEventListener("click", resetGame);

let randomNumber = generateRandomNumber();
let score = 10;
let highscore = 0;
let guess;

function checkGuess() {
  guess = +userGuessEl.value;
  updateScore();
  hint();
  guess === randomNumber ? winGame() : checkLoss();
}

function updateScore() {
  if (guess !== randomNumber) score--;
  scoreEl.textContent = score;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 51);
}

function winGame() {
  mysteryNumEl.textContent = randomNumber;
  highscoreEl.textContent = `${score * 30}`;
  containerEl.style.backgroundColor = "lightgreen";
  messageEl.textContent = "You win";
}

function checkLoss() {
  if (score <= 0) {
    checkGuessBTNEl.disabled = true;
    inputEl.innerHTML = "";
    inputEl.blur();
    containerEl.style.backgroundColor = "red";
    messageEl.textContent = "You lose";
    if (highscore > +highscoreEl.textContent)
      highscoreEl.textContent = `${score * 30}`;
  }
}

function hint() {
  if (guess < randomNumber) messageEl.textContent = "too low";
  if (guess > randomNumber) messageEl.textContent = "too high";
}

function resetGame() {
  containerEl.style.backgroundColor = "#333";
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = "10";
  score = 10;
  randomNumber = generateRandomNumber();
}
