import { signOut, useSession } from "next-auth/react";
import { Typography } from "../../typography";
import UiPreviousPage from "../../ui/Ui-Previouspage";
import {
  GameItem,
  GamesGrid,
  LobbyContainer,
  LogoutButton,
  PageTitle,
} from "./Lobby.styled";
import Sidebar from "./Sidebar";

const Lobby = () => {
  return (
    <>
      <UiPreviousPage />
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
