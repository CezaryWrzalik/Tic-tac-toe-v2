import styled from "styled-components";
import { breakpoints } from "../../shared/constants";

export const BoardContainer = styled.div(
  ({ theme: { colors } }) => `
	background: ${colors.text.primary};
	`
);

export const BoardGrid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 4px;

  width: 300px;
  height: 300px;

	@media (max-width: ${breakpoints.sm}px){
			width: 300px;
			height: 300px;
		
	}
	
	@media (max-height: ${breakpoints.sm}px){

			width: 250px;
			height: 250px;
		
	}
	
	@media (max-height: ${breakpoints.xs}px){

			width: 150px;
			height: 150px;
		
	}
`;
