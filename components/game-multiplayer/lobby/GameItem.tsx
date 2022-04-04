import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getIntoTheGame } from "../../../utils/games";
import { GameItemContainer } from "./GameItem.styled";

type GameItemProps = {
  gid: string;
  user1: string;
  user2: string;
};


const GameItem = ({ gid, user1, user2 }: GameItemProps) => {
	const {data: session} = useSession();
	const router = useRouter()

	const handleClick = () => {
		const username = session?.user.username
		const response = getIntoTheGame(gid, username);
		console.log(response);
	}

  return (
      <GameItemContainer onClick={() => handleClick()}>
				<p>{gid}</p>
        <p>{user1}</p>
        <p>{user2}</p>
      </GameItemContainer>
  );
};

export default GameItem;
