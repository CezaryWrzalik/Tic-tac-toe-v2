import styled from "styled-components";

export const LobbyContainer = styled.div`
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  text-align: center;
  height: 100%;
  width: 80%;
  margin: auto;
`;

export const PageTitle = styled.p``;

export const GamesGrid = styled.div`
  display: grid;
  grid-template: repeat(10, 50px) / 1fr;
  overflow-Y: scroll;
  height: 80%;
`;

export const LogoutButton = styled.button(
  ({ theme: { colors, transitions } }) => `

  margin: 10px 0;
  border: none;
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  cursor: pointer;
  transition: ${transitions.quick}s;

  :hover {
    color: ${colors.text.secondary};
  }
`
);
