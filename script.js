const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

function inputValidation(string) {
  if (string === "" || string === null) {
    false;
  } else if (
    string.toLowerCase() !== ROCK &&
    string.toLowerCase() !== PAPER &&
    string.toLowerCase() !== SCISSORS
  ) {
    alert("You need input rock, paper or scissors");
    false;
  } else {
    return string.toLowerCase();
  }
}

function getPlayerSelection() {
  let playerSelectionInput = prompt("Input your choice");

  while (!inputValidation(playerSelectionInput)) {
    alert("Input must be a valid string");
    playerSelectionInput = prompt("Input again your choice");
  }

  return playerSelectionInput.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  console.log("playerSelection", playerSelection);
  console.log("computerSelection", computerSelection);

  if (playerSelection === computerSelection) {
    return console.log("It's draw. Try one more time");
  }

  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    return console.log(
      `You Lose! ${computerSelection} beats ${playerSelection}`
    );
  }

  return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
