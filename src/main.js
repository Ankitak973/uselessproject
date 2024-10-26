import './styles/game.css';
import { Game } from './js/game';
import { GameUI } from './js/ui';

document.querySelector('#app').innerHTML = `
  <div class="game-container">
    <h1 class="game-title">Rock Paper Scissors</h1>
    
    <div class="score-board">
      <div class="score-card">
        <div class="score-label">You</div>
        <div class="score player-score">0</div>
      </div>
      <div>🏆</div>
      <div class="score-card">
        <div class="score-label">Computer</div>
        <div class="score computer-score">0</div>
      </div>
    </div>

    <div class="choices-display">
      <div class="choice-display">
        <div class="choice-title">Your Choice</div>
        <div class="choice-icon player-choice">❔</div>
      </div>
      <div class="choice-display">
        <div class="choice-title">Computer's Choice</div>
        <div class="choice-icon computer-choice">❔</div>
      </div>
    </div>

    <div class="result"></div>

    <div class="choices">
      <button class="choice-btn" data-choice="rock">🪨</button>
      <button class="choice-btn" data-choice="paper">📄</button>
      <button class="choice-btn" data-choice="scissors">✂️</button>
    </div>
  </div>
`;

const game = new Game();
new GameUI(game);