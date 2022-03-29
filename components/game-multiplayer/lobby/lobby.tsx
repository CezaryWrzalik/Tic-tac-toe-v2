import styled from "styled-components";
import UiPreviousPage from "../../ui/ui-previouspage";

const LobbyContainer = styled.div`
  display: grid;
	grid-template: auto 1fr auto / 1fr;
  text-align: center;
  height: 100%;
`;

const PageTitle = styled.h2``;

const GamesGrid = styled.div`
display: grid;

`;

const GameItem = styled.div`

`

const Lobby = () => {
  return (
    <LobbyContainer>
      <UiPreviousPage href="/" />
      <PageTitle>List of games</PageTitle>
			<GamesGrid>
				<div></div>
			</GamesGrid>
    </LobbyContainer>
  );
};

export default Lobby;
