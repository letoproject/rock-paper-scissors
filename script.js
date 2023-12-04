const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];

let playerWins = 0;
let computerWins = 0;
let gamesTotal = 0;
let tieCounter = 0;
let roundWinner = "";

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

    // for exit from loop (with error)
    if (playerSelectionInput === null) {
      break;
    }
  }

  return playerSelectionInput.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  // for info
  console.log("playerSelection", playerSelection);
  console.log("computerSelection", computerSelection);

  roundWinner = "";

  if (playerSelection === computerSelection) {
    console.log("It's draw.");
    return (roundWinner = "Tie");
  }

  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === ROCK)
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return (roundWinner = "computer");
  }

  // if Player win
  console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  return (roundWinner = "player");
}

function game() {
  for (let i = 0; i < 5; i += 1) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    gamesTotal += 1;

    playRound(playerSelection, computerSelection);
    switch (roundWinner) {
      case "computer":
        computerWins += 1;
        break;
      case "player":
        playerWins += 1;
        break;
      default:
        tieCounter += 1;
        break;
    }

    // for info
    console.log("computerWins", computerWins);
    console.log("playerWins", playerWins);
    console.log("tieCounter", tieCounter);

    // decorator
    if (gamesTotal < 5) {
      console.log("=================== NEXT ROUND ===================");
    }
  }

  // decorator
  console.log("=================== ROUND RESULT ===================");

  if (playerWins > computerWins) {
    return console.log(`Player win this game with score ${playerWins}`);
  } else if (playerWins === computerWins) {
    return console.log("It's tie");
  }
  // if Computer win
  return console.log(`Computer win this game with score ${computerWins}`);
}

game();
