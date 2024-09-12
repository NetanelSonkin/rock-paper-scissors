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

const handleBtnClick = (event) => {
  let humanChoice = getHumanChoice(event);
  let computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
}

function startGame() {
  humanScore = 0;
  computerScore = 0;
  displayText.textContent = "Make your decision:\nRock, Paper or Scissors";
  updateDisplayScores();
  btnRock.addEventListener("click", handleBtnClick);
  btnPaper.addEventListener("click", handleBtnClick);
  btnScissors.addEventListener("click", handleBtnClick);
}

const disableGame = () => {
  btnRock.removeEventListener('click', handleBtnClick);
  btnPaper.removeEventListener('click', handleBtnClick);
  btnScissors.removeEventListener('click', handleBtnClick);
}

function playGame(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    displayText.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
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

  updateDisplayScores();

  if (humanScore>= 5){
    displayText.textContent = `Game Over! Human wins with ${humanScore} points!`
    disableGame();
  }else if (computerScore >= 5) {
    displayText.textContent = `Game Over! Computer wins with ${humanScore} points!`
    disableGame();
  }
}

const updateDisplayScores = () => {
  displayScore.textContent = `Human: ${humanScore}\n Computer ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;


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
let listStart = document.createElement("li");
startBtn.setAttribute("class", "gameBtn");
startBtn.textContent = "Start";
listStart.appendChild(startBtn);
let gameOptions = document.createElement("ul");
gameOptions.setAttribute("class", "gameOptions");
gameOptions.append(listStart);
displayOptions.appendChild(gameOptions);
displayBtns.appendChild(gameBtns);
display.append(displayScore, displayText, displayOptions, displayBtns);



startBtn.addEventListener("click", startGame);


