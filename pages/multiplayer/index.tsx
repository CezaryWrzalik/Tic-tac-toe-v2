import { getSession, GetSessionParams } from "next-auth/react";
import { ContextType } from "react";
import styled from "styled-components";
import Lobby from "../../components/game-multiplayer/lobby/Lobby";
import UiPreviousPage from "../../components/ui/Ui-Previouspage";

const MultiplayerPageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MultiplayerPage = () => {

  return (
    <MultiplayerPageContainer>
      <UiPreviousPage />
      <Lobby />
    </MultiplayerPageContainer>
  );
};

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  if(!session) {
    return{
      redirect: {
        destination: '/auth',
        pernament: false,
      },
    }
  }

  return {
    props: {session}
  }
}

export default MultiplayerPage;
