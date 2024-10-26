import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreBoardProps {
  playerScore: number;
  computerScore: number;
}

export function ScoreBoard({ playerScore, computerScore }: ScoreBoardProps) {
  return (
    <div className="flex items-center justify-center gap-8 mb-8">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">You</h2>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <span className="text-2xl font-bold text-blue-600">{playerScore}</span>
        </div>
      </div>
      <Trophy className="text-yellow-500" size={32} />
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Computer</h2>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <span className="text-2xl font-bold text-red-600">{computerScore}</span>
        </div>
      </div>
    </div>
  );
}