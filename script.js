function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?");

  return choice;
}

function playGame() {
  function playRound(playerOneChoice, playerTwoChoice) {
    playerOneChoice = playerOneChoice.toLowerCase();
    playerTwoChoice = playerTwoChoice.toLowerCase();
  
    if (playerOneChoice === playerTwoChoice) return `Draw! Both players played ${playerOneChoice}`;
    
    if (playerOneChoice === 'rock') {
      if (playerTwoChoice === 'scissors') {
        computerScore++;
        return `You lose! ${playerOneChoice} beats ${playerTwoChoice}`;
      }
      else {
        humanScore++;
        return `You win! ${playerTwoChoice} beats ${playerOneChoice}`;
      }
    }
    if (playerOneChoice === 'paper') {
      if (playerTwoChoice === 'rock') {
        computerScore++;
        return `You lose! ${playerOneChoice} beats ${playerTwoChoice}`;
      }
      else {
        humanScore++;
        return `You win! ${playerTwoChoice} beats ${playerOneChoice}`;
      }
    }
    if (playerOneChoice === 'scissors') {
      if (playerTwoChoice === 'paper') {
        computerScore++;
        return `You lose! ${playerOneChoice} beats ${playerTwoChoice}`;
      }
      else {
        humanScore++;
        return `You win! ${playerTwoChoice} beats ${playerOneChoice}`;
      }
    }
  }

  function determineWinner() {
    if (computerScore === humanScore) return `Game ends in draw with both players ending with a total score of ${computerScore}`;
    else if (computerScore >= humanScore) return `Game ends with the bot winning with a total score of ${computerScore} to the human's ${humanScore}`;
    else return `Game ends with the human winning with a total score of ${humanScore} to the bot's ${computerScore}`;
  }

  let computerScore = 0;
  let humanScore = 0;

  let roundsPlayed = 0;

  for (let i=0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), getHumanChoice()));
  }
  console.log(determineWinner());
}

playGame();
