import styled from "styled-components";
import { breakpoints } from "../../shared/constants";

type SwitchContainerProps = {
  side: string;
};

export const SingleplayerContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: grid;
  grid-template: 1fr 4fr 1fr / 1fr 2fr 1fr;
  grid-template-areas: "top top top" "left center right" "bottom bottom bottom";

  @media (max-height: 700px) and (orientation: landscape) {
    grid-template: 3fr / 1fr 2fr 1fr;
    grid-template-areas: "left center right";
  }
`;

export const SwitchContainer = styled.div<SwitchContainerProps>(
  ({ side }) => `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	grid-area: ${side === "left" ? "left" : "right"};

  @media (max-width: ${breakpoints.sm}px) and (orientation: portrait) {
    grid-area: ${side === "left" ? "top" : "bottom"};
  }
	`
);

export const BoardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  grid-area: center;
`;

export const RestartContainer = styled.div`
  display: flex;
  grid-area: center;
  flex-direction: column;
  margin-bottom: 10px;
`;
