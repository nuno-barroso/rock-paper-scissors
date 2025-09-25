function getComputerChoice () {
    const randomNumber = Math.random();

    if (randomNumber <= 0.333) {
        return "ROCK";
    } else if (randomNumber > 0.333 && randomNumber <= 0.666) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice () {
    return prompt("Rock, Paper or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound (computerChoice, humanChoice) {
    const upHumanChoice = humanChoice.toUpperCase();

    if (computerChoice == upHumanChoice) {
        console.log("It's a draw! You chose " + upHumanChoice + " and the computer also chose " + computerChoice + ".");
    }

    if (computerChoice == "PAPER" && upHumanChoice == "ROCK") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (computerChoice == "PAPER" && upHumanChoice == "SCISSORS") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (computerChoice == "ROCK" && upHumanChoice == "PAPER") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (computerChoice == "ROCK" && upHumanChoice == "SCISSORS") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "ROCK") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "PAPER") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);