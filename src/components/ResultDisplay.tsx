import React from 'react';
import { motion } from 'framer-motion';

interface ResultDisplayProps {
  result: 'win' | 'lose' | 'draw' | null;
}

const resultMessages = {
  win: 'You Win! 🎉',
  lose: 'You Lose! 😢',
  draw: "It's a Draw! 🤝",
};

export function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="text-3xl font-bold text-center my-8"
    >
      {resultMessages[result]}
    </motion.div>
  );
}