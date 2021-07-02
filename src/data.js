export const game = {
  board: [null, null, null, null, null, null, null, null, null],
  players: {
    next: 'X',
    previous: 'O',
  },
  winner: null,
};

export const winningConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
