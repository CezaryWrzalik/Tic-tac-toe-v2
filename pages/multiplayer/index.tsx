import { signIn, useSession } from "next-auth/react";
import styled from "styled-components";
import Lobby from "../../components/game-multiplayer/lobby/lobby";
import Sign from "../../components/game-multiplayer/sign";
import UiPreviousPage from "../../components/ui/ui-previouspage";

const MultiplayerPageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MultiplayerPage = () => {
  const { data: session } = useSession();
  return (
    <MultiplayerPageContainer>
      <UiPreviousPage href="/" />
      {!session && <Sign />}
      {session && <Lobby />}
    </MultiplayerPageContainer>
  );
};

export default MultiplayerPage;
