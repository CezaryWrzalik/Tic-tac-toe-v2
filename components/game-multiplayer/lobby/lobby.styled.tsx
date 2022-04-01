import styled from "styled-components";

export const LobbyContainer = styled.div`
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  text-align: center;
  height: 100%;
`;

export const PageTitle = styled.p``;

export const GamesGrid = styled.div`
  display: grid;
`;

export const GameItem = styled.div``;

export const LogoutButton = styled.button(
  ({ theme: { colors } }) => `

  margin: 10px 0;
  border: none;
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  cursor: pointer;

`
);
