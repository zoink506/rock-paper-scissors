let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const rand = Math.random();
  let cpuChoice;

  if(rand <= 0.33) {
    cpuChoice = 0;
  } else if(rand <= 0.66) {
    cpuChoice = 1;
  } else {
    cpuChoice = 2;
  }

  return cpuChoice;
}

function getPlayerChoice() {
  let playerSelection = prompt("rock, paper, or scissors? Type your selection.");

  if(!playerSelection.localeCompare("rock", undefined, { sensitivity: 'accent'})) {
    playerSelection = 0;
  } else if(!playerSelection.localeCompare("paper", undefined, { sensitivity: 'accent'})) {
    playerSelection = 1;
  } else if(!playerSelection.localeCompare("scissors", undefined, { sensitivity: 'accent'})) {
    playerSelection = 2;
  } else {
    playerSelection = -1;
    playerSelection = getPlayerChoice();
  }

  return playerSelection;
}

function round() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  //console.log("Player selection: ", playerSelection);
  //console.log("Computer selection: ", computerSelection);

  if(computerSelection != -1 && playerSelection != -1) {

    if(playerSelection === 0) { // Rock
      if(computerSelection === 0) {
        printScore("Draw!");
        return;

      } else if(computerSelection === 1) {
        computerScore += 1;
        printScore("Paper beats rock!");
        return;

      } else if(computerSelection === 2) {
        playerScore += 1;
        printScore("Rock beats scissors!");
        return;
      }
    } else if(playerSelection === 1) { // Paper
      if(computerSelection === 0) {
        playerScore += 1;
        printScore("Paper beats rock!");
        return;

      } else if(computerSelection === 1) {
        printScore("Draw!");
        return;

      } else if(computerSelection === 2) {
        computerScore += 1;
        printScore("Scissors beats paper!");
        return;
      }

    } else if(playerSelection === 2) { // Scissors
      if(computerSelection === 0) {
        computerScore += 1;
        printScore("Rock beats scissors");
        return;

      } else if(computerSelection === 1) {
        playerScore += 1;
        printScore("Scissors beats paper!");
        return;

      } else if(computerSelection === 2) {
        printScore("Draw!");
        return;
      }

    }

  } else {
    console.warn("Either computerSelection or playerSelection is -1.");
  }
}

function printScore(message) {
  console.log(`%c${message}`, "font-size:16px;");
  console.log(`%cPlayer Score: ${playerScore}`, "color:blue;");
  console.log(`%cComputer Score: ${computerScore}`, "color:red;");
}

function game() {
  while(playerScore < 3 && computerScore < 3) {
    round();
  }

  if(playerScore === 3) {
    console.log("Player wins!");
  } else {
    console.log("Computer Wins!");
  }
  console.log("Game Over, thanks for playing!");
}

game();
