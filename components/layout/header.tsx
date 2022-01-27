import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/winnerAtom";
import CircleIcon from "../icons/circle-icon";
import CrossIcon from "../icons/cross-icon";

import classes from "./header.module.css";

const Header = () => {
  const [winner, setWinner] = useRecoilState(winnerState);

  console.log(winner);

  if (winner === "o" || winner === "x") {
    return (
      <div className={classes.header}>
        {winner === "o" ? <CircleIcon /> : <CrossIcon />}
        <h1>WINS</h1>
      </div>
    );
  }

  if(winner === "DRAW"){
    return <h1>DRAW</h1>
  }

  return <h1>TIC TAC TOE</h1>
};

export default Header;
