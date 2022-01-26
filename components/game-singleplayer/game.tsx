import { useState } from "react";
import Board from "./board";
import { winnerState } from "../../atom/winnerAtom";

import classes from "./game.module.css";
import Switch from "./switch";
import UiButton from "../ui/ui-button";
import { useRecoilState } from "recoil";

const Game = () => {
  const [boardState, setBoardState] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("x");
  const [playerMark, setPlayerMark] = useState("x");
  const [oponentMark, SetOponentMark] = useState("o");
  const [winner, setWinner] = useRecoilState(winnerState);

  const [playerFirst, setPlayerFirst] = useState(true);

  const [isAgainstAi, setIsAgainstAi] = useState(false);
  const [isXCurrentMove, setIsXCurrentMove] = useState(true);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleCurrentPlayerChange = () => {
    const updatedMark = currentTurn === "x" ? "o" : "x";

    setCurrentTurn(updatedMark);
    setIsXCurrentMove(!isXCurrentMove);
  };

  const handleCheckIfWinner = () => {

    //check for winning in rows
    for (let row = 0; row <= 2; row++) {
      if (
        boardState[row][0] === boardState[row][1] &&
        boardState[row][1] === boardState[row][2]
      ) {
        if (boardState[row][0] === playerMark) {
          return -10;
        } else if (boardState[row][0] === oponentMark) {
          return 10;
        }
      }
    }

    //check for winning in columns
    for (let col = 0; col <= 2; col++) {
      if (
        boardState[0][col] === boardState[1][col] &&
        boardState[1][col] === boardState[2][col]
      ) {
        if (boardState[0][col] === playerMark) {
          return -10;
        } else if (boardState[0][col] === oponentMark) {
          return 10;
        }
      }
    }

    //check for winning in Diagonals
    if (
      boardState[0][0] === boardState[1][1] &&
      boardState[0][0] === boardState[2][2]
    ) {
      if (boardState[0][0] === playerMark) {
        return -10;
      } else if (boardState[0][0] === oponentMark) {
        return 10;
      }
    }
    if (
      boardState[0][2] === boardState[1][1] &&
      boardState[0][2] === boardState[2][0]
    ) {
      if (boardState[0][2] === playerMark) {
        return -10;
      } else if (boardState[0][2] === oponentMark) {
        return 10;
      }
    }

    return 0;
  };

  const handleCheckIfMovesLeft = () => {
    for (let row = 0; row <= 2; row++) {
      for (let col = 0; col <= 2; col++) {
        if (boardState[row][col] === "_") {
          return true;
        }
      }
    }
    return false;
  };

  const handleCheckIfFinished = () => {
    const winner = handleCheckIfWinner();

    if (winner !== 0) {
      setGameFinished(true);
      if (winner === 10) {
        return setWinner(oponentMark);
      } else if (winner === -10) {
        return setWinner(playerMark);
      }
    }

    const isMovesLeft = handleCheckIfMovesLeft();

    if (!isMovesLeft) {
      setGameFinished(true);
      return setWinner("DRAW");
    }

    return false;
  };

  const handleMove = (x: number, y: number) => {
    console.log(gameFinished);
    if (gameFinished) {
      return;
    }
    const currentBoard = boardState;
    currentBoard[x][y] = currentTurn;
    setBoardState(currentBoard);
    const winner = handleCheckIfFinished();

    
    if (!gameStarted) {
      handleStartGame();
    }
    
    handleCurrentPlayerChange();
  };

  const handleRestartGame = () => {
    setBoardState([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]);
    setCurrentTurn("x");
    setGameStarted(false);
    setPlayerFirst(true);
    setIsXCurrentMove(true);
    setGameFinished(false);
    setWinner("");
  };

  return (
    <div className={classes.gameGrid}>
      <div className={classes.switchContainer}>
        <p>TURN</p>
        <Switch switchFor={"turn"} currentOption={isXCurrentMove} />
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
        <Switch switchFor={"mode"} currentOption={!isAgainstAi} />
      </div>
    </div>
  );
};

export default Game;
