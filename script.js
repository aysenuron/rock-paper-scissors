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

const refreshButton = document.createElement("button");
refreshButton.textContent = "Play Again";
refreshButton.classList.add("refresh-button");
const gameScores = document.querySelector(".game-scores");


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
            roundScore.textContent = `You win!`;
        } else if (human === computer) {
            roundScore.textContent = `We are even.`;
        } else {
            computerScore++;
            roundScore.textContent = `I win!`;
    }
    humanScoreTyped.textContent = "Human: " + humanScore;
    computerScoreTyped.textContent = "Computer: " + computerScore;
}

function coloring(typed, computer) {
        typed.textContent = "Computer: " + computer;
        if (computer === "Rock") {
            typed.style.color = "rgb(0, 179, 255)"; // Change color to blue
        } else if (computer === "Paper") {
            typed.style.color = "rgb(255, 166, 0)"; // Change color to yellow
        } else {
            typed.style.color = "rgb(45, 179, 0)"; // Change color to green
        }
    }

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Rock";
    humanSelection.style.color = "rgb(0, 179, 255)"; // Change color to blue
    versus.textContent = "vs.";
    coloring(computerSelectionTyped, computerSelection);
    playRound("Rock", computerSelection);
    playGame();
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Paper";
    humanSelection.style.color = "rgb(255, 166, 0)"; // Change color to blue
    versus.textContent = "vs.";
    computerSelectionTyped.textContent = "Computer: " + computerSelection;
    coloring(computerSelectionTyped, computerSelection);
    playRound("Paper", computerSelection);
    playGame();
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    humanSelection.textContent = "Human: Scissors";
    humanSelection.style.color = "rgb(45, 179, 0)"; // Change color to blue
    versus.textContent = "vs.";
    computerSelectionTyped.textContent = "Computer: " + computerSelection;
    coloring(computerSelectionTyped, computerSelection);
    playRound("Scissors", computerSelection);
    playGame();
});


function playGame() {
    if (humanScore === 5 && computerScore < 5) {
        humanScoreTyped.textContent = "Human: " + humanScore;
        computerScoreTyped.textContent = "Computer: " + computerScore;
        gameScore.textContent = "You win!";
        gameScores.appendChild(refreshButton);
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;
    } else if (computerScore === 5 && humanScore < 5) {
        humanScoreTyped.textContent = "Human: " + humanScore;
        computerScoreTyped.textContent = "Computer: " + computerScore;
        gameScore.textContent = "I win!";
        gameScores.appendChild(refreshButton);
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;    
    }
}   

refreshButton.addEventListener("click", () => {
    location.reload();
}
)