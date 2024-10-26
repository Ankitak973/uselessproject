import React from 'react';
import { Scissors, Hand, Square } from 'lucide-react';

type Choice = 'rock' | 'paper' | 'scissors';

interface GameChoiceProps {
  choice: Choice;
  onClick: () => void;
  disabled?: boolean;
}

const icons = {
  rock: Square,
  paper: Hand,
  scissors: Scissors,
};

export function GameChoice({ choice, onClick, disabled }: GameChoiceProps) {
  const Icon = icons[choice];
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-6 rounded-full transition-all duration-300
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-lg'}
        bg-white shadow-md transform
        flex items-center justify-center
      `}
    >
      <Icon size={32} className="text-gray-700" />
    </button>
  );
}