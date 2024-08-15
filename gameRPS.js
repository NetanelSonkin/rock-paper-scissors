//create new function called getComputerChoice
//make an array with 3 elements, rock paper and scissors
//use math.random function to generate numbers from 0 to 2 and choose a random element from the array
//return the element chosen by the randomizer
//call the function

const getComputerChoice = () =>{
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return computerChoice[randomNum];
}



//create new function called getHumanChoice
//the function will ask the user what he wants to choose (rock paper or scissors) using prompt
//the function will return the choice

const getHumanChoice = () =>{
    const humanChoice = prompt(`Please write "Rock", "Paper" or "Scissors"`); 
    return humanChoice;
}

//create variable named humanScore to keep track of human scores
//do the same for computer
//create a function named playRound
//define 2 parameters for playRound humanChoice and computerChoice
//make humanChoice case insensitive so people can input ROCK rock Rock
//If human chose rock and computer paper > computer ++
//if human chose rock and computer scissors> human ++
//if human chose paper and computer rock > human ++
//if human chose paper and computer scissors > computer ++
//if human chose scissors and computer rock > computer ++
//if human chose scissors and computer paper > human ++
// else its a tie - no increments 


// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

function playRound(humanChoice , computerChoice){
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();
    // console.log(lowerComputerChoice, lowerHumanChoice)

    if(lowerHumanChoice === 'rock' && lowerComputerChoice === 'paper'){
        console.log('You lose! Paper beats Rock');
        computerScore  ++;
    }else if(lowerHumanChoice === 'rock' && lowerComputerChoice === 'scissors'){
        console.log('You win! Rock beats Scissors');
        humanScore ++;
    }else if(lowerHumanChoice === 'paper' && lowerComputerChoice === 'scissors'){
        console.log('You lose! Scissors beats Paper');
        computerScore ++;
    }else if(lowerHumanChoice === 'paper' && lowerComputerChoice === 'rock'){
        console.log('You win! Paper beats Rock');
        humanScore ++;
    }else if(lowerHumanChoice === 'scissors' && lowerComputerChoice === 'rock'){
        console.log('You lose! Rock beats Scissors');
        computerScore ++;
    }else if(lowerHumanChoice === 'scissors' && lowerComputerChoice === 'paper'){
        console.log('You win! Scissors beats Paper');
        humanScore ++;}else{
            console.log('Its a tie!')
        }
        return {humanScore, computerScore};
}


// console.log(playRound(humanChoice, computerChoice));


//create function named playGame that will run playRound 5 times
//create for loop that will call playRound 5 times
//get the scores
//check who has better score
//say who wins
let humanScore = 0;
let computerScore = 0;
function playGame(){

    for(let i = 0; i <5 ; i++ ){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result =  playRound(humanChoice, computerChoice);

        humanScore = result.humanScore;
        computerScore = result.computerScore;
    }
    if(humanScore > computerScore){
        console.log(`Human won! with:${humanScore} points, while Computer got: ${computerScore}`);
    } else if(humanScore < computerScore){
        console.log(`Human lost with:${humanScore} points, while Computer got: ${computerScore}`);
    }else{
        console.log(`Its a tie! Human Score is${humanScore} and computer's is: ${computerScore}`);
    }
    return { humanScore, computerScore };

}

console.log(playGame());
