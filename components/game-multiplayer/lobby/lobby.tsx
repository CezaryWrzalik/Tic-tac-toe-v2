import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { notificationState } from "../../../atom/notificationState";
import { fetchGames, postGame } from "../../../utils/games";
import { Typography } from "../../typography";
import UiButton from "../../ui/Ui-Button";
import GameItem from "./GameItem";
import {
  GamesGrid,
  LobbyContainer,
  LogoutButton,
  PageTitle,
} from "./Lobby.styled";
import Sidebar from "./Sidebar";

const Lobby = () => {
  const setNotification = useSetRecoilState(notificationState);
  const {data: session} = useSession();
  const [games, setGames] = useState([]);
  const router = useRouter();

  const createGame = async () => {
    if(session) {
      const username = session.user.username;
      const data = await postGame(username);
      setNotification(data.message);
      router.push(`./multiplayer/${data.gid}`);
    } else {
      setNotification("You must me logged in");
    }
  };

  const getGames = async () => {
    const games = await fetchGames();
    setGames(games);
  };

  useEffect(() => {
    console.log(session);
    getGames();
  }, []);

  return (
    <>
      <Sidebar />
      <LobbyContainer>
        <PageTitle>
          <Typography.Text_24>List of games</Typography.Text_24>
        </PageTitle>
          <GamesGrid>
            {games.length > 0 &&
              games.map((game: any) => (
                <GameItem key={game.gid} gid={game.gid} user1={game.user1} user2={game.user2}/>
              ))}
          </GamesGrid>
          <UiButton click={() => createGame()}>Create Game</UiButton>
        <LogoutButton onClick={() => signOut()}>Sing Out</LogoutButton>
      </LobbyContainer>
    </>
  );
};

export default Lobby;
