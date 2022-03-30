import { signOut, useSession } from "next-auth/react";
import UiPreviousPage from "../../ui/ui-previouspage";
import { GamesGrid, LobbyContainer, LogoutButton, PageTitle, WelcomeMessage } from "./lobby.styled";
import Sidebar from "./sidebar";

const Lobby = () => {
  const { data: session } = useSession();
  return (
    <>
      <UiPreviousPage href="/" />
      <Sidebar />
      <LobbyContainer>
        <div>
          <PageTitle>List of games</PageTitle>
        </div>
        <GamesGrid>
          <div></div>
        </GamesGrid>
        <div>
        </div>
        <LogoutButton onClick={() => signOut()}>Sing Out</LogoutButton>
      </LobbyContainer>
    </>
  );
};

export default Lobby;
