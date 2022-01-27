import { useEffect, useState } from "react";
import Board from "./board";
import { winnerState } from "../../atom/winnerAtom";

import classes from "./game.module.css";
import Switch from "./switch";
import UiButton from "../ui/ui-button";
import { useRecoilState } from "recoil";
import { checkIfMovesLeft, checkIfWinner } from "../../lib/game";
import Head from "next/head";
import UiPreviousPage from "../ui/ui-previouspage";

const Game = () => {
  const [boardState, setBoardState] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("x");
  const [player, setPlayer] = useState("x");
  const [oponent, setOponent] = useState("o");
  const [winner, setWinner] = useRecoilState(winnerState);

  const [isAgainstAi, setIsAgainstAi] = useState(false);
  const [isXCurrentMove, setIsXCurrentMove] = useState(true);

  //Starting game locks settings

  const startGame = () => {
    setGameStarted(true);
  };

  //Just turn

  const turnChange = () => {
    const updatedMark = currentTurn === "x" ? "o" : "x";

    setIsXCurrentMove(!isXCurrentMove);
    return setCurrentTurn(updatedMark);
  };

  const checkIfFinished = () => {
    const winner = checkIfWinner(boardState, player, oponent);

    if (winner !== 0) {
      setGameFinished(true);
      if (winner === 1) {
        return setWinner(oponent);
      } else if (winner === -1) {
        return setWinner(player);
      }
    }

    const isMovesLeft = checkIfMovesLeft(boardState);

    if (!isMovesLeft) {
      setGameFinished(true);
      return setWinner("DRAW");
    }

    return false;
  };

  const minimax = (
    board: string[][],
    depth: number,
    isMax: boolean
  ): number => {
    const score = checkIfWinner(board, player, oponent);

    if (score == 1) {
      return score;
    }

    if (score == -1) {
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
            board[row][col] = oponent;

            value = Math.max(value, minimax(board, depth + 1, !isMax));

            board[row][col] = "_";
          }
        }
      }
      return value;
    } else {
      let value = 10;

      for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          if (board[row][col] === "_") {
            board[row][col] = player;

            value = Math.min(value, minimax(board, depth + 1, !isMax));

            board[row][col] = "_";
          }
        }
      }
      return value;
    }
  };

  const findBestMove = (board: string[][]) => {
    let val = -10;
    let bestRowMove = -1;
    let bestColMove = -1;

    for (let row = 0; row <= 2; row++) {
      for (let col = 0; col <= 2; col++) {
        if (board[row][col] === "_") {
          board[row][col] = oponent;

          let moveVal = minimax(board, 0, false);

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

  // Letting the ai begin

  const aiStart = () => {
    if (!gameStarted) {
      setPlayer("o");
      setOponent("x");
    } else {
      alert("Not available during the game");
    }
  };

  // Change into mode against Ai

  const setMode = () => {
    if (!gameStarted) {
      setIsAgainstAi(!isAgainstAi);
    } else {
      alert("Not available during the game");
    }
  };

  const handleMove = (x: number, y: number) => {
    if (gameFinished) {
      return;
    }
    const currentBoard = boardState;
    currentBoard[x][y] = currentTurn;
    setBoardState(currentBoard);
    checkIfFinished();

    if (!gameStarted) {
      startGame();
    }

    turnChange();
  };

  //All Setings to default

  const handleRestartGame = () => {
    setBoardState([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]);
    setCurrentTurn("x");
    setGameStarted(false);
    setIsXCurrentMove(true);
    setGameFinished(false);
    setWinner("");
    setPlayer("x");
    setOponent("o");
  };

  useEffect(() => {
    if (currentTurn === oponent && isAgainstAi) {
      const bestMove = findBestMove(boardState);
      handleMove(bestMove.bestRowMove, bestMove.bestColMove);
    }
  }, [currentTurn, oponent]);

  return (
    <div className={classes.gameContainer}>
      <UiPreviousPage href="/"/>
      <div className={classes.gameGrid}>
        <Head>
          <title>TIC TAC TOE | Singleplayer</title>
        </Head>
        <div className={classes.switchContainer}>
          <p>TURN</p>
          <Switch
            switchFor={"turn"}
            currentOption={isXCurrentMove}
            func={aiStart}
          />
        </div>
        <div className={classes.boardContainer}>
          <div className={classes.blankForCenter}></div>
          <Board boardState={boardState} handleMove={handleMove} />
          <UiButton>
            <p onClick={handleRestartGame}>Play Again</p>
          </UiButton>
        </div>
        <div className={classes.switchContainer}>
          <p>MODE</p>
          <Switch
            switchFor={"mode"}
            currentOption={!isAgainstAi}
            func={setMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
