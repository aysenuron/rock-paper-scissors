function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors. (Plase type Rock, Paper or Scissors.");
    while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
        humanChoice = prompt("Invalid choice. Please exactly type Rock, Paper or Scissors.")
    }
    return humanChoice;
}

function getComputerChoice () {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomNumber];
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (human, computer) {
        if (human === "Rock" && computer === "Scissors" ||
            human === "Paper"  && computer === "Rock" ||
            human === "Scissors" && computer === "Paper") {
                humanScore++;
                alert(`You win! ${human} beats ${computer}.`);
            } else if (human === computer) {
                alert(`We are even. ${human} equals to ${computer}.`);
            } else {
                computerScore++;
                alert(`I win! ${computer} beats ${human}.`);
        }
    }

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
        alert("Round #" + round + " --- Human:" + humanScore + " - Computer:" + computerScore);
    }

    if (humanScore > computerScore) {
        alert(`Human ${humanScore} - Computer ${computerScore}. You win.`)
    } else if (humanScore == computerScore) {
        alert(`Human ${humanScore} - Computer ${computerScore}. Tie.`)
    } else {
        alert(`Human ${humanScore} - Computer ${computerScore}. I win.`)
    }
}

playGame();
