const getComputerChoice = () => {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return computerChoice[randomNum];
};

const getHumanChoice = (event) => {
  const humanClick = event.target.id;

  switch (humanClick) {
    case "btnRock":
      humanChoice = "Rock";
      break;
    case "btnPaper":
      humanChoice = "Paper";
      break;
    case "btnScissors":
      humanChoice = "Scissors";
      break;
  }

  return humanChoice;
};


function playRound(humanChoice, computerChoice) {
  if (humanClick === "Rock" && computerChoice === "Paper") {
    displayText.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanClick === "Rock" && computerChoice === "Scissors"){
    displayText.textContent = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    displayText.textContent = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    displayText.textContent = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    displayText.textContent = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    displayText.textContent = "You win! Scissors beats Paper";
    humanScore++;
  } else {
    displayText.textContent = "Its a tie!";
  }
  return { humanScore, computerScore };
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  humanScore = 0;
  computerScore = 0;
  displayText.textContent = "Make your decision:\nRock, Paper or Scissors";

  if (humanScore > computerScore) {
    displayText.textContent = `Human won! with:${humanScore} points, while Computer got: ${computerScore}`;
  } else if (humanScore < computerScore) {
    displayText.textContent = `Human lost with:${humanScore} points, while Computer got: ${computerScore}`;
  } else {
    displayText.textContent = `Its a tie! Human Score is ${humanScore} and computer's is: ${computerScore}`;
  }
  return { humanScore, computerScore };
}

let container = document.querySelector("#container");
let display = document.createElement("div");
display.setAttribute("id", "display");
display.style.border = "solid 2px";
container.appendChild(display);

let listRock = document.createElement("li");
let listPaper = document.createElement("li");
let listScissors = document.createElement("li");
let btnRock = document.createElement("button");
let btnPaper = document.createElement("button");
let btnScissors = document.createElement("button");
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
btnRock.setAttribute("id", "btnRock");
btnPaper.setAttribute("id", "btnPaper");
btnScissors.setAttribute("id", "btnScissors");
listRock.appendChild(btnRock);
btnRock.setAttribute("class", "gameBtn");
listPaper.appendChild(btnPaper);
btnPaper.setAttribute("class", "gameBtn");
listScissors.appendChild(btnScissors);
btnScissors.setAttribute("class", "gameBtn");
let gameBtns = document.createElement("ul");
gameBtns.setAttribute("class", "gameBtns");
gameBtns.append(listRock, listPaper, listScissors);

display.appendChild(gameBtns);

displayScore = document.createElement("div");
displayScore.setAttribute("class", "grid-item displayScore");
displayText = document.createElement("div");
displayText.setAttribute("class", "grid-item displayText");
displayOptions = document.createElement("div");
displayOptions.setAttribute("class", "grid-item displayOptions");
displayBtns = document.createElement("div");
displayBtns.setAttribute("class", "grid-item displayBtns");

let startBtn = document.createElement("button");
let restartBtn = document.createElement("button");
let listStart = document.createElement("li");
startBtn.setAttribute("class", "gameBtn");
startBtn.textContent = "Start";
listStart.appendChild(startBtn);
let listRestart = document.createElement("li");
restartBtn.setAttribute("class", "gameBtn");
restartBtn.textContent = "Restart";
listRestart.appendChild(restartBtn);
let gameOptions = document.createElement("ul");
gameOptions.setAttribute("class", "gameOptions");
gameOptions.append(listStart, listRestart);
displayOptions.appendChild(gameOptions);
displayBtns.appendChild(gameBtns);
display.append(displayScore, displayText, displayOptions, displayBtns);



startBtn.addEventListener("click", playGame);
  btnRock.addEventListener("click", getHumanChoice);
  btnPaper.addEventListener("click", getHumanChoice);
  btnScissors.addEventListener("click", getHumanChoice);

