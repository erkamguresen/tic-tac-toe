import { game, winningConditions } from '../data.js';

export const determineWinner = (board = []) => {
  let winner = null;
  let winnerSymbol = null;

  for (let index = 0; index < winningConditions.length; index++) {
    const condition = winningConditions[index];
    winnerSymbol = checkWinCondition(condition, board);
    if (winnerSymbol !== null) break;
  }

  switch (winnerSymbol) {
    case null:
    case 'draw':
      break;

    case 'X':
      winner = 'X';
      break;

    case 'O':
      winner = 'O';
      break;
    default:
      break;
  }

  game.winner = winner;

  return game.winner;
};

const checkWinCondition = (condition, board = game.board) => {
  let winnerSymbol = board[condition[0]];

  if (
    winnerSymbol !== board[condition[1]] ||
    winnerSymbol !== board[condition[2]]
  )
    return null;

  return winnerSymbol;
};
