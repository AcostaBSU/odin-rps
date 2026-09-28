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

  let menu = document.querySelector('#menu');
  let scoreboard = document.querySelector('#scoreboard');
  let lastRound = document.querySelector('#last-round');
  let winner = document.querySelector('#winner');

  menu.addEventListener('click', (event) => {
    let target = event.target;

    lastRound.textContent = playRound(getComputerChoice(), target.id);
    scoreboard.textContent = `Human: ${humanScore} Bot: ${computerScore}`;
    if (computerScore == 5) winner.textContent = 'Bot wins. Resetting game.';
    if (humanScore == 5) winner.textContent = 'Human wins! Resetting game.';
    if (computerScore == 5 || humanScore == 5) {
      setTimeout(() => {
        computerScore = 0;
        humanScore = 0;
	winner.textContent = '';
        lastRound.textContent = '';
        scoreboard.textContent = 'Click your choice to start a game!';
      }, 5000);  // Game resets after 5 seconds
    } 
  });
}

playGame();
