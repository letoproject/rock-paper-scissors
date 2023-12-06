const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];

let playerWins = 0;
let computerWins = 0;
let tieCounter = 0;

const btns = document.querySelectorAll(".btn-player");
btns.forEach((btn) => btn.addEventListener("click", getPlayerChoice));

const playerChoiceText = document.querySelector(".selection-text.player");
const computerChoiceText = document.querySelector(".selection-text.computer");
const playerScore = document.querySelector(".player-score span");
const computerScore = document.querySelector(".computer-score span");
const tieScore = document.querySelector(".tie-score span");
const roundResult = document.querySelector(".round-winner");
const gameResult = document.querySelector(".game-winner");
const battlefield = document.querySelector(".battlefield");
const restartBtn = document.querySelector(".reset");

restartBtn.addEventListener("click", () => location.reload());

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

function getPlayerChoice(e) {
  let playerChoice = CHOICES[e.target.id];
  playRound(playerChoice, getComputerChoice());
  battlefield.classList.remove("hide");
  battlefield.classList.add("show");
}

function playRound(playerSelection, computerSelection) {
  playerChoiceText.textContent = playerSelection;
  computerChoiceText.textContent = computerSelection;

  let roundWinner = "";
  roundResult.classList.remove("hide");
  roundResult.classList.add("show");

  if (playerSelection === computerSelection) {
    roundResult.textContent = "It's tie.";
    roundWinner = "Tie";
    tieScore.textContent = tieCounter += 1;
  } else if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    roundWinner = "computer";
    computerScore.textContent = computerWins += 1;
  } else {
    roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    roundWinner = "player";
    playerScore.textContent = playerWins += 1;
  }

  checkWinner();
}

function checkWinner() {
  let message = "";
  if (computerWins === 5 || playerWins === 5) {
    message = `${
      computerWins > playerWins ? "Computer" : "Player"
    } win this round! 
     Press Restart button.`;
    gameResult.classList.remove("hide");
    gameResult.classList.add("show");
    gameResult.textContent = message;
    btns.forEach((btn) => (btn.disabled = true));
    btns.forEach((btn) => btn.removeEventListener("click", getPlayerChoice));
  }
}
