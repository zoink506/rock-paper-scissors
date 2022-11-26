/*
Todo list:
  - Add score functionality
  - End game when score is 3 on either side
  - Add gradient border when hovered over choice
  - Add transition to border and text
  - Change fonts
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
  // Place event listener on rock paper scissors divs
  // When clicked, edit playerSelection
  // playerSelection set to null by default
  // If playerselection is not null, continue function 

  const choices = document.querySelectorAll(".choice");

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      // function that plays rest of game
      const computerSelection = getComputerChoice();
      console.log(choice.id);
      console.log(computerSelection);
      determineWinner(choice.id, computerSelection);

    });
  });
}

function determineWinner(choice1, choice2) {
  let winner;

  if(choice1 === choice2) {
    console.log(`user choice: ${choice1}`);
    console.log(`cpu choice: ${choice2}`);
    console.log("It is a draw!");
    winner = "draw";
    printUI(choice1, choice2, winner);
    return;
  }

  // Create printing function
  if(choice1 === "rock") {
    if(choice2 === "paper") {
      console.log("Paper beats rock! You lose!");
      winner = false;
    } else {
      console.log("Rock beats scissors! You win!");
      winner = true;
    }

  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      console.log("Paper beats rock! You win!");
      winner = true;
    } else {
      console.log("Scissors beats paper! You lose!");
      winner = false;
    }

  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      console.log("Rock beats scissors! You lose!");
      winner = false;
    } else {
      console.log("Scissors beats paper! You win!");
      winner = true;
    }

  } else {
    console.log("Error, var choice1 not rock, paper, or scissors");
  }

  if(winner !== undefined) printUI(choice1, choice2, winner);
}

function printUI(choice1, choice2, winner) {
  const textSection = document.querySelector("#win-messages");

  // Clear textSection first
  const previousText = document.querySelectorAll("#win-messages p");
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

  textSection.append(playerMessage);
  textSection.append(computerMessage);
  textSection.append(winnerMessage);
}

function game() {
  getChoices();
}

game();
