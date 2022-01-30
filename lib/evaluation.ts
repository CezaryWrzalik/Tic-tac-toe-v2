export const evaluate = (
  board: string[][],
  player: string,
  oponent: string
) => {
  //check for winning in rows
  for (let row = 0; row <= 2; row++) {
    if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
      if (board[row][0] === oponent) {
        return 10;
      } else if (board[row][0] === player) {
        return -10;
      }
    }
  }

  //check for winning in columns
  for (let col = 0; col <= 2; col++) {
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
      if (board[0][col] === oponent) {
        return 10;
      } else if (board[0][col] === player) {
        return -10;
      }
    }
  }

  //check for winning in Diagonals
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
		if (board[0][0] === oponent) {
			return 10;
		} else if (board[0][0] === player) {
			return -10;
		}
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
		if (board[0][2] === oponent) {
			return 10;
		} else if (board[0][2] === player) {
			return -10;
		}
  }

  return 0;
};

export const checkIfMovesLeft = (board: string[][]) => {
  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 2; col++) {
      if (board[row][col] === "_") {
        return true;
      }
    }
  }
  return false;
};
