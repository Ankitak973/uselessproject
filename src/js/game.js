export class Game {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
    this.playerScore = 0;
    this.computerScore = 0;
    this.isPlaying = false;
  }

  getComputerChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'draw';
    
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

    return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
  }

  updateScore(result) {
    if (result === 'win') this.playerScore++;
    if (result === 'lose') this.computerScore++;
  }

  reset() {
    this.isPlaying = false;
  }
}