/*
Todo list:
  - Add score functionality - DONE
  - End game when score is 3 on either side
    + Remove event listener when score is higher than 3
    + Make the arrow function a named function to be able to remove it
  - Add gradient border when hovered over choice
  - Add transition to border and text
  - Change fonts and font size
  - audio?
*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rand = Math.random();
  let cpuChoice;

  if(rand <= 0.33) {
    cpuChoice = "rock";
  } else if(rand <= 0.66) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }

  return cpuChoice;
}

function getChoices() {
  const choices = document.querySelectorAll(".choice");

  choices.forEach(choice => {
    applyEventListener(choice);
  });
}

function applyEventListener(element) {
  element.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    determineWinner(element.id, computerSelection);
    console.log("THE EVENT LISTENER HAS BEEN TRIGGERED");
  });
}

function determineWinner(choice1, choice2) {
  let winner;

  // The round is a draw
  if(choice1 === choice2) {
    console.log(`user choice: ${choice1}`);
    console.log(`cpu choice: ${choice2}`);
    console.log("It is a draw!");
    winner = "draw";
    printUI(choice1, choice2, winner);
    return;
  }

  // The round is not a draw, determine the winner
  if(choice1 === "rock") {
    if(choice2 === "paper") {
      winner = false;
      computerScore++;
    } else {
      winner = true;
      playerScore++;
    }

  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      winner = true;
      playerScore++;
    } else {
      winner = false;
      computerScore++;
    }

  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      winner = false;
      computerScore++;
    } else {
      winner = true;
      playerScore++;
    }

  } else {
    console.log("Error, var choice1 not rock, paper, or scissors");
  }

  if(winner !== undefined) printUI(choice1, choice2, winner);
}

function printUI(choice1, choice2, winner) {
  const textSection = document.querySelector("#win-messages");

  // Clear textSection first
  const previousText = document.querySelectorAll("#win-messages *");
  previousText.forEach(element => {
    element.remove();
  });

  const playerMessage = document.createElement("p");
  playerMessage.innerText = `You chose: ${choice1}`;
  const computerMessage = document.createElement("p");
  computerMessage.innerText = `Computer chose: ${choice2}`;

  let winnerMessage = document.createElement("p");
  if(winner === true) {
    winnerMessage.innerText = `${choice1} beats ${choice2}! You win!`;
  } else if(winner === false) {
    winnerMessage.innerText = `${choice2} beats ${choice1}! You Lose!`;
  } else if(winner === "draw") {
    winnerMessage.innerText = "It is a draw!";
  } else {
    console.log("ERROR, winner is not 1, 0, or 'draw'");
  }

  const scoreDiv = document.getElementById("score-div");
  const scoreDivContent = document.querySelectorAll("#score-div *");
  scoreDivContent.forEach(element => element.remove());

  const scorePlayer = document.createElement("p");
  const scoreComputer = document.createElement("p");
  scorePlayer.innerText = `Player Score: ${playerScore}`;
  scoreComputer.innerText = `Computer Score: ${computerScore}`;
  scoreDiv.append(scorePlayer);
  scoreDiv.append(scoreComputer);


  textSection.append(playerMessage);
  textSection.append(computerMessage);
  textSection.append(winnerMessage);
}

getChoices();
