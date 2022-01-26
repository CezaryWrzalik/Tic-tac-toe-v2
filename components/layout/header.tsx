import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/winnerAtom";

const Header = () => {
  const [winner, setWinner] = useRecoilState(winnerState);
  const [header, setHeader] = useState("TIC TAC TOE");

  useEffect(() => {
		console.log(winner)
    if (winner === "") {
      setHeader("TIC TAC TOE");
    } else if (winner === "o") {
      setHeader("O WINS");
    } else if (winner === "x") {
      setHeader("X WINS");
    } else {
      setHeader("DRAW");
			
		}
  }, [winner]);

  return <h1>{header}</h1>;
};

export default Header;
