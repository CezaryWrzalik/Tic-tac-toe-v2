import { checkIfMovesLeft, evaluate } from "./evaluation";

const minimax = (
  board: string[][],
  depth: number,
  isMax: boolean,
  player: string,
  opponent: string
): number => {
  const score = evaluate(board, player, opponent);

  if (score == 10) {
    return score;
  }

  if (score == -10) {
    return score;
  }

  const movesLeft = checkIfMovesLeft(board);

  if (!movesLeft) {
    return 0;
  }

  if (isMax) {
    let value = -10;

    for (let row = 0; row <= 2; row++) {
      for (let col = 0; col <= 2; col++) {
        if (board[row][col] === "_") {
          board[row][col] = opponent;

          value = Math.max(
            value,
            minimax(board, depth + 1, !isMax, player, opponent)
          );

          board[row][col] = "_";
        }
      }
    }
    return value - depth;
  } else {
    let value = 10;

    for (let row = 0; row <= 2; row++) {
      for (let col = 0; col <= 2; col++) {
        if (board[row][col] === "_") {
          board[row][col] = player;

          value = Math.min(
            value,
            minimax(board, depth + 1, !isMax, player, opponent)
          );

          board[row][col] = "_";
        }
      }
    }
    return value + depth;
  }
};

export const findBestMove = (
  board: string[][],
  player: string,
  opponent: string
) => {
  let val = -10;
  let bestRowMove = -1;
  let bestColMove = -1;

  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 2; col++) {
      if (board[row][col] === "_") {
        board[row][col] = opponent;

        let moveVal = minimax(board, 0, false, player, opponent);

        board[row][col] = "_";
        if (moveVal > val) {
          bestRowMove = row;
          bestColMove = col;
          val = moveVal;
        }
      }
    }
  }
  return { bestRowMove, bestColMove };
};
