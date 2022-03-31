import styled from "styled-components";

export const UiPreviousPageContainer = styled.div(
  ({ theme: { colors, transitions } }) => `
	position: absolute;
  height: 100%;
  width: 50px;
  cursor: pointer;
  z-index: 1;
	
	a{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		height: 30px;
		width: 30px;
		fill: ${colors.text.primary};
	}

	& svg {
		transition: ${transitions.default};
	}

	@media (hover: hover) {
		:hover{

			background: ${colors.text.primary};
			opacity: 0.2;
			
			svg {
				fill: ${colors.background.primary};
			}
		}
	}
	`
);
