import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/winnerAtom";
import CircleIcon from "../icons/circle-icon";
import CrossIcon from "../icons/cross-icon";

import classes from "./header.module.css";

const Header = () => {
  const [winner, setWinner] = useRecoilState(winnerState);

  if (winner === "o" || winner === "x") {
    return (
      <div className={classes.header}>
        {winner === "o" ? <CircleIcon /> : <CrossIcon />}
        <h1>WINS</h1>
      </div>
    );
  }

  if (winner === "DRAW") {
    return (
      <div className={classes.header}>
        <h1>DRAW</h1>
      </div>
    );
  }

  return (
    <div className={classes.header}>
      <h1>TIC TAC TOE</h1>
    </div>
  );
};

export default Header;
