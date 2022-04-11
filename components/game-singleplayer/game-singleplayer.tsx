import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { notificationState, winnerState } from "../../atom/notificationState";
import Board from "./board";
import Switch from "./switch";
import UiButton from "../ui/ui-button";
import UiPreviousPage from "../ui/ui-previouspage";
import { checkIfMovesLeft, evaluate } from "../../utils/evaluation";
import { findBestMove } from "../../utils/minimax";

import {
  BoardContainer,
  RestartContainer,
  SingleplayerContainer,
  SwitchContainer,
} from "./Game-singleplayer.styled";
import { Typography } from "../typography";

const SingleplayerGame = () => {
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
  const setWinner = useSetRecoilState(winnerState);
  const setNotification = useSetRecoilState(notificationState);


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
      setNotification("Not available during the game");
    }
  };

  // Change into mode against Ai

  const setMode = () => {
    if (!gameStarted) {
      setIsAgainstAi(!isAgainstAi);
    } else {
      setNotification("Not available during the game");
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
    <>
      <UiPreviousPage />
      <SingleplayerContainer>
        <SwitchContainer side="left">
          <Typography.Text_32>TURN</Typography.Text_32>
          <Switch
            switchFor={"turn"}
            currentOption={isXCurrentMove}
            func={aiStart}
          />
        </SwitchContainer>
        <BoardContainer>
          <Board boardState={boardState} handleMove={handleMove} />
        <RestartContainer>
          <UiButton click={handleRestartGame}>Play Again</UiButton>
        </RestartContainer>
        </BoardContainer>
        <SwitchContainer side="right">
          <Typography.Text_32>MODE</Typography.Text_32>
          <Switch
            switchFor={"mode"}
            currentOption={!isAgainstAi}
            func={setMode}
          />
        </SwitchContainer>
      </SingleplayerContainer>
    </>
  );
};

export default SingleplayerGame;
