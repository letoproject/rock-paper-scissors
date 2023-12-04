const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

console.log(getComputerChoice());
