import React, { useState } from 'react';
import { GameChoice } from './components/GameChoice';
import { ResultDisplay } from './components/ResultDisplay';
import { ScoreBoard } from './components/ScoreBoard';
import { motion } from 'framer-motion';

type Choice = 'rock' | 'paper' | 'scissors';
type Result = 'win' | 'lose' | 'draw' | null;

const choices: Choice[] = ['rock', 'paper', 'scissors'];

function App() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return 'draw';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const playGame = (choice: Choice) => {
    setIsPlaying(true);
    setPlayerChoice(choice);
    
    // Simulate computer thinking
    setTimeout(() => {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(computerChoice);
      
      const gameResult = determineWinner(choice, computerChoice);
      setResult(gameResult);
      
      if (gameResult === 'win') setPlayerScore(prev => prev + 1);
      if (gameResult === 'lose') setComputerScore(prev => prev + 1);
      
      setIsPlaying(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Rock Paper Scissors
        </motion.h1>

        <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Your Choice</h2>
              {playerChoice ? (
                <GameChoice choice={playerChoice} onClick={() => {}} disabled />
              ) : (
                <div className="h-20 flex items-center justify-center text-gray-400">
                  Make your choice
                </div>
              )}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Computer's Choice</h2>
              {computerChoice ? (
                <GameChoice choice={computerChoice} onClick={() => {}} disabled />
              ) : (
                <div className="h-20 flex items-center justify-center text-gray-400">
                  {isPlaying ? 'Thinking...' : 'Waiting...'}
                </div>
              )}
            </div>
          </div>

          <ResultDisplay result={result} />

          <div className="grid grid-cols-3 gap-4 mt-8">
            {choices.map((choice) => (
              <GameChoice
                key={choice}
                choice={choice}
                onClick={() => {
                  resetGame();
                  playGame(choice);
                }}
                disabled={isPlaying}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;