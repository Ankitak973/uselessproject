(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();class n{constructor(){this.choices=["rock","paper","scissors"],this.playerScore=0,this.computerScore=0,this.isPlaying=!1}getComputerChoice(){return this.choices[Math.floor(Math.random()*this.choices.length)]}determineWinner(e,s){return e===s?"draw":{rock:"scissors",paper:"rock",scissors:"paper"}[e]===s?"win":"lose"}updateScore(e){e==="win"&&this.playerScore++,e==="lose"&&this.computerScore++}reset(){this.isPlaying=!1}}class a{constructor(e){this.game=e,this.choiceButtons=document.querySelectorAll(".choice-btn"),this.playerScoreElement=document.querySelector(".player-score"),this.computerScoreElement=document.querySelector(".computer-score"),this.resultElement=document.querySelector(".result"),this.playerChoiceDisplay=document.querySelector(".player-choice"),this.computerChoiceDisplay=document.querySelector(".computer-choice"),this.setupEventListeners(),this.updateScore()}setupEventListeners(){this.choiceButtons.forEach(e=>{e.addEventListener("click",()=>this.handleChoice(e.dataset.choice))})}handleChoice(e){this.game.isPlaying||(this.game.isPlaying=!0,this.setButtonsDisabled(!0),this.updateChoiceDisplay("player",e),this.computerChoiceDisplay.textContent="🤔",this.resultElement.textContent="Thinking...",setTimeout(()=>{const s=this.game.getComputerChoice(),c=this.game.determineWinner(e,s);this.updateChoiceDisplay("computer",s),this.showResult(c),this.game.updateScore(c),this.updateScore(),this.setButtonsDisabled(!1),this.game.reset()},1e3))}updateChoiceDisplay(e,s){const c={rock:"🪨",paper:"📄",scissors:"✂️"},t=e==="player"?this.playerChoiceDisplay:this.computerChoiceDisplay;t.textContent=c[s]}showResult(e){const s={win:"You Win! 🎉",lose:"You Lose! 😢",draw:"It's a Draw! 🤝"};this.resultElement.textContent=s[e]}updateScore(){this.playerScoreElement.textContent=this.game.playerScore,this.computerScoreElement.textContent=this.game.computerScore}setButtonsDisabled(e){this.choiceButtons.forEach(s=>s.disabled=e)}}document.querySelector("#app").innerHTML=`
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
`;const l=new n;new a(l);
