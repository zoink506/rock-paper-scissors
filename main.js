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
  if(choice1 === choice2) {
    console.log(`user choice: ${choice1}`);
    console.log(`cpu choice: ${choice2}`);
    console.log("It is a draw!");
    return;
  }

  // Create printing function
  if(choice1 === "rock") {
    if(choice2 === "paper") {
      console.log("Paper beats rock! You lose!");
    } else {
      console.log("Rock beats scissors! You win!");
    }

  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      console.log("Paper beats rock! You win!");
    } else {
      console.log("Scissors beats paper! You lose!");
    }

  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      console.log("Rock beats scissors! You lose!");
    } else {
      console.log("Scissors beats paper! You win!");
    }

  } else {
    console.log("Error, var choice1 not rock, paper, or scissors");
  }
}

function game() {
  getChoices();
}

game();
