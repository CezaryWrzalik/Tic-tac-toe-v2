import { signIn, useSession } from "next-auth/react";
import styled from "styled-components";
import Lobby from "../../components/game-multiplayer/lobby/lobby";
import Sign from "../../components/auth";
import UiPreviousPage from "../../components/ui/Ui-Previouspage";

const MultiplayerPageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MultiplayerPage = () => {
  const { data: session } = useSession();
  return (
    <MultiplayerPageContainer>
      <UiPreviousPage href="/" />
      {session && <Lobby />}
      {!session && <Sign />}
    </MultiplayerPageContainer>
  );
};

export default MultiplayerPage;
