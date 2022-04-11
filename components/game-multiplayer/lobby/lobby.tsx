import { signOut } from "next-auth/react";
import { Typography } from "../../typography";
import UiPreviousPage from "../../ui/ui-previouspage";
import {
  GameItem,
  GamesGrid,
  LobbyContainer,
  LogoutButton,
  PageTitle,
} from "./lobby.styled";
import Sidebar from "./sidebar";

const Lobby = () => {
  return (
    <>
      <Sidebar />
      <LobbyContainer>
        <PageTitle><Typography.Text_24>List of games</Typography.Text_24></PageTitle>
        <GamesGrid>

        </GamesGrid>
        <LogoutButton onClick={() => signOut()}>Sing Out</LogoutButton>
      </LobbyContainer>
    </>
  );
};

export default Lobby;
