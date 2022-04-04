import { getSession, GetSessionParams } from "next-auth/react";
import styled from "styled-components";
import Lobby from "../../components/game-multiplayer/lobby/Lobby";

const MultiplayerPageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MultiplayerPage = () => {

  return (
    <MultiplayerPageContainer>
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
