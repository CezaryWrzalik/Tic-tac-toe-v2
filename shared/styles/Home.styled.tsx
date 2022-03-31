import styled from "styled-components";
import { breakpoints } from "../constants";

export const HomePageContainer = styled.div`
  height: 100%;
  display: flex;
	flex-direction: column;
	gap: 50px;
  align-items: center;
  justify-content: center;

	@media (max-height: ${breakpoints.xs}px){
		gap: 30px;
	}
`;
