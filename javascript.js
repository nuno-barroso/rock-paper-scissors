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

function showCurrentScore (humanScore, computerScore) {
    const playerScoreNum = document.getElementById("player-score-num");
    const computerScoreNum = document.getElementById("computer-score-num");

    playerScoreNum.textContent = humanScore;
    computerScoreNum.textContent = computerScore;
}

function roundDescription (winner, computerChoice, humanChoice) {
    const description = document.getElementById("round-description");

    if (winner == 1) {
        description.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }

    if (winner == 0) {
        description.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    else {
        description.textContent = "It's a draw! You chose " + humanChoice + " and the computer also chose " + computerChoice + ".";
    }
}

function endGame(humanScore) {
  const description = document.querySelector("#round-description");

  if (humanScore == 5) {
    description.textContent = "You won the game!";
  } else {
    description.textContent = "The computer won the game!";
  }
}

function playRound (computerChoice, humanChoice) {
    const upHumanChoice = humanChoice.toUpperCase();
    let winner = 0;

    if (computerChoice == upHumanChoice) {
        console.log("It's a draw! You chose " + upHumanChoice + " and the computer also chose " + computerChoice + ".");
        winner = -1;
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    }

    if (computerChoice == "PAPER" && upHumanChoice == "ROCK") {
        console.log("You lose! Paper beats Rock.");
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    } else if (computerChoice == "PAPER" && upHumanChoice == "SCISSORS") {
        console.log("You win! Scissors beats Paper.");
        winner = 1;
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    } else if (computerChoice == "ROCK" && upHumanChoice == "PAPER") {
        console.log("You win! Paper beats Rock.");
        winner = 1;
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    } else if (computerChoice == "ROCK" && upHumanChoice == "SCISSORS") {
        console.log("You lose! Rock beats Scissors.");
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "ROCK") {
        console.log("You win! Rock beats Scissors.");
        winner = 1;
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    } else if (computerChoice == "SCISSORS" && upHumanChoice == "PAPER") {
        console.log("You lose! Scissors beats Paper.");
        roundDescription(winner, computerChoice, upHumanChoice);
        return winner;
    }
}

function playGame () {
    let computerSelection = 0;

    let humanScore = 0;
    let computerScore = 0;

    let winner = 0;

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    
    rock.addEventListener("click", (e) => {
        computerSelection = getComputerChoice();
        winner=playRound(computerSelection, e.target.value);
        if (winner == 0) {
            computerScore++;
        } else if (winner == 1) {
            humanScore++;
        }
        showCurrentScore(humanScore, computerScore);

        if (humanScore == 5 || computerScore == 5) {
            endGame(humanScore);
        };
    });

    paper.addEventListener("click", (e) => {
        computerSelection = getComputerChoice();
        winner=playRound(computerSelection, e.target.value);
        playRound(computerSelection, e.target.value);
        if (winner == 0) {
            computerScore++;
        } else if (winner == 1) {
            humanScore++;
        }
        showCurrentScore(humanScore, computerScore);

        if (humanScore == 5 || computerScore == 5) {
            endGame(humanScore);
        };
    });

    scissors.addEventListener("click", (e) => {
        computerSelection = getComputerChoice();
        winner=playRound(computerSelection, e.target.value);
        playRound(computerSelection, e.target.value);
        if (winner == 0) {
            computerScore++;
        } else if (winner == 1) {
            humanScore++;
        }
        showCurrentScore(humanScore, computerScore);

        if (humanScore == 5 || computerScore == 5) {
            endGame(humanScore);
        };
    });
}

playGame();