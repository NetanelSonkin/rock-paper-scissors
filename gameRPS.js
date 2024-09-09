const getComputerChoice = () => {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return computerChoice[randomNum];
};

const getHumanChoice = () => {
  const humanChoice = prompt(`Please write "Rock", "Paper" or "Scissors"`);
  return humanChoice;
};

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  let lowerHumanChoice = humanChoice.toLowerCase();
  let lowerComputerChoice = computerChoice.toLowerCase();

  if (lowerHumanChoice === "rock" && lowerComputerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (
    lowerHumanChoice === "rock" &&
    lowerComputerChoice === "scissors"
  ) {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (
    lowerHumanChoice === "paper" &&
    lowerComputerChoice === "scissors"
  ) {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (lowerHumanChoice === "paper" && lowerComputerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (
    lowerHumanChoice === "scissors" &&
    lowerComputerChoice === "rock"
  ) {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (
    lowerHumanChoice === "scissors" &&
    lowerComputerChoice === "paper"
  ) {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log("Its a tie!");
  }
  return { humanScore, computerScore };
}

let humanScore = 0;
let computerScore = 0;
function playGame() {

  if (humanScore > computerScore) {
    console.log(
      `Human won! with:${humanScore} points, while Computer got: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Human lost with:${humanScore} points, while Computer got: ${computerScore}`
    );
  } else {
    console.log(
      `Its a tie! Human Score is ${humanScore} and computer's is: ${computerScore}`
    );
  }
  return { humanScore, computerScore };
}

let container = document.querySelector('#container');
let gameBtns = document.querySelector('.gameBtns');
let screen = document.createElement('div');
screen.setAttribute("id", "screen");
screen.style.border = "solid 2px";
container.insertBefore(screen, gameBtns);

let listRock = document.createElement("li");
let listPaper = document.createElement("li");
let listScissors = document.createElement("li");
let btnRock = document.createElement('button');
let btnPaper = document.createElement('button'); 
let btnScissors = document.createElement('button');
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
listRock.appendChild(btnRock);
listPaper.appendChild(btnPaper);
listScissors.appendChild(btnScissors);
gameBtns.append(listRock,listPaper,listScissors);
gameBtns.style.cssText = 'list-style-type: none; padding: 0; margin: 0;';

