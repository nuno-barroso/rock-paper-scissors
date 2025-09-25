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

function showCurrentScore (humanScore, computerScore) {
    console.log("Your current score is " + humanScore + ".");
    console.log("Computer's current score is " + computerScore + ".");
}



function playRound (computerChoice, humanChoice) {
    const upHumanChoice = humanChoice.toUpperCase();

    if (computerChoice == upHumanChoice) {
        console.log("It's a draw! You chose " + upHumanChoice + " and the computer also chose " + computerChoice + ".");
        return -1;
    }

    if (computerChoice == "PAPER" && upHumanChoice == "ROCK") {
        console.log("You lose! Paper beats Rock.");
        return 0;
    } else if (computerChoice == "PAPER" && upHumanChoice == "SCISSORS") {
        console.log("You win! Scissors beats Paper.");
        return 1;
    } else if (computerChoice == "ROCK" && upHumanChoice == "PAPER") {
        console.log("You win! Paper beats Rock.");
        return 1;
    } else if (computerChoice == "ROCK" && upHumanChoice == "SCISSORS") {
        console.log("You lose! Rock beats Scissors.");
        return 0;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "ROCK") {
        console.log("You win! Rock beats Scissors.");
        return 1;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "PAPER") {
        console.log("You lose! Scissors beats Paper.");
        return 0;
    }
}

function playGame () {
    let humanSelection = 0;
    let computerSelection = 0;

    let humanScore = 0;
    let computerScore = 0;

    let winner = 0;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        winner = playRound(computerSelection, humanSelection);

        if (winner == 0) {
            computerScore++;
        } else if (winner == 1) {
            humanScore++;
        }

        showCurrentScore(humanScore, computerScore);

         if (computerScore == 3 || humanScore == 3) {
            console.log("Game Over.");
            return;
        }
    }
}

playGame();