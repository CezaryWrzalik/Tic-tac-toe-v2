import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/winnerAtom";
import Board from "./board";
import Switch from "./switch";
import UiButton from "../ui/ui-button";
import UiPreviousPage from "../ui/ui-previouspage";
import { checkIfMovesLeft, evaluate } from "../../lib/evaluation";
import { findBestMove } from "../../lib/minimax";

import classes from "./game.module.css";

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
  const [opponent, setOpponent] = useState("o");
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
    const winner = evaluate(boardState, player, opponent);

    if (winner !== 0) {
      setGameFinished(true);
      if (winner === 10) {
        return setWinner(opponent);
      } else if (winner === -10) {
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

  const aiStart = () => {
    if (!gameStarted) {
      setPlayer("o");
      setOpponent("x");
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
    setOpponent("o");
  };

  useEffect(() => {
    if (currentTurn === opponent && isAgainstAi) {
      const bestMove = findBestMove(boardState, player, opponent);

      handleMove(bestMove.bestRowMove, bestMove.bestColMove);
    }
  }, [currentTurn, opponent]);

  return (
    <div className={classes.gameContainer}>
      <UiPreviousPage href="/" />
      <div className={classes.gameGrid}>
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
