const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const humanSelection = document.querySelector(".human-selection");
const computerSelectionTyped = document.querySelector(".computer-selection");
const roundScore = document.querySelector(".round-score");
const versus = document.querySelector(".versus");

const humanScoreTyped = document.querySelector(".human-score");
const computerScoreTyped = document.querySelector(".computer-score");
const gameScore = document.querySelector(".game-score");


let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomNumber];
}


function playRound (human, computer) {
    if (human === "Rock" && computer === "Scissors" ||
        human === "Paper"  && computer === "Rock" ||
        human === "Scissors" && computer === "Paper") {
            humanScore++;
            roundScore.textContent = `You win! ${human} beats ${computer}.`;
        } else if (human === computer) {
            roundScore.textContent = `We are even. ${human} equals to ${computer}.`;
        } else {
            computerScore++;
            roundScore.textContent = `I win! ${computer} beats ${human}.`;
    }
    humanScoreTyped.textContent = "Human: " + humanScore;
    computerScoreTyped.textContent = "Computer: " + computerScore;
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Rock";
    versus.textContent = "vs.";
    computerSelectionTyped.textContent = "Computer: " + computerSelection;
    playRound("Rock", computerSelection);
    playGame();
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Paper";
    versus.textContent = "vs.";
    computerSelectionTyped.textContent = "Computer: " + computerSelection;
    playRound("Paper", computerSelection);
    playGame();
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Scissors";
    versus.textContent = "vs.";
    computerSelectionTyped.textContent = "Computer: " + computerSelection;
    playRound("Scissors", computerSelection);
    playGame();
});


function playGame() {
    if (humanScore === 5 && computerScore < 5) {
        humanScoreTyped.textContent = "Human: " + humanScore;
        computerScoreTyped.textContent = "Computer: " + computerScore;
        gameScore.textContent = "You win!";
    } else if (computerScore === 5 && humanScore < 5) {
        humanScoreTyped.textContent = "Human: " + humanScore;
        computerScoreTyped.textContent = "Computer: " + computerScore;
        gameScore.textContent = "I win!";
    }
}   