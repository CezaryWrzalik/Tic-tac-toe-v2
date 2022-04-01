import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/notificationState";
import CircleIcon from "../icons/circle-icon";
import CrossIcon from "../icons/cross-icon";
import { Typography } from "../typography";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  const [winner, setWinner] = useRecoilState(winnerState);

  if (winner === "o" || winner === "x") {
    return (
      <HeaderContainer>
        {winner === "o" ? <CircleIcon /> : <CrossIcon />}
        <h1><Typography.Text_32>WINS</Typography.Text_32></h1>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <h1>
        <Typography.Text_32>{winner === "DRAW" ? "draw" : "TIC TAC TOE"}</Typography.Text_32>
      </h1>
    </HeaderContainer>
  );
};

export default Header;
