export class GameUI {
  constructor(game) {
    this.game = game;
    this.choiceButtons = document.querySelectorAll('.choice-btn');
    this.playerScoreElement = document.querySelector('.player-score');
    this.computerScoreElement = document.querySelector('.computer-score');
    this.resultElement = document.querySelector('.result');
    this.playerChoiceDisplay = document.querySelector('.player-choice');
    this.computerChoiceDisplay = document.querySelector('.computer-choice');
    
    this.setupEventListeners();
    this.updateScore();
  }

  setupEventListeners() {
    this.choiceButtons.forEach(button => {
      button.addEventListener('click', () => this.handleChoice(button.dataset.choice));
    });
  }

  handleChoice(playerChoice) {
    if (this.game.isPlaying) return;
    
    this.game.isPlaying = true;
    this.setButtonsDisabled(true);
    this.updateChoiceDisplay('player', playerChoice);
    this.computerChoiceDisplay.textContent = '🤔';
    this.resultElement.textContent = 'Thinking...';

    setTimeout(() => {
      const computerChoice = this.game.getComputerChoice();
      const result = this.game.determineWinner(playerChoice, computerChoice);
      
      this.updateChoiceDisplay('computer', computerChoice);
      this.showResult(result);
      this.game.updateScore(result);
      this.updateScore();
      this.setButtonsDisabled(false);
      this.game.reset();
    }, 1000);
  }

  updateChoiceDisplay(player, choice) {
    const icons = {
      rock: '🪨',
      paper: '📄',
      scissors: '✂️'
    };
    
    const element = player === 'player' ? this.playerChoiceDisplay : this.computerChoiceDisplay;
    element.textContent = icons[choice];
  }

  showResult(result) {
    const messages = {
      win: 'You Win! 🎉',
      lose: 'You Lose! 😢',
      draw: "It's a Draw! 🤝"
    };
    
    this.resultElement.textContent = messages[result];
  }

  updateScore() {
    this.playerScoreElement.textContent = this.game.playerScore;
    this.computerScoreElement.textContent = this.game.computerScore;
  }

  setButtonsDisabled(disabled) {
    this.choiceButtons.forEach(button => button.disabled = disabled);
  }
}