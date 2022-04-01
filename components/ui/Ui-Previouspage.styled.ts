import styled, { css } from "styled-components";

export const commonSideButtonCss = css(
  ({ theme: { colors, transitions } }) => `
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
  height: 100%;
  width: 50px;
  cursor: pointer;
  z-index: 1;
	
	
	svg {
		height: 30px;
		width: 30px;
		fill: ${colors.text.primary};
	}
	
	&, svg {
		transition: ${transitions.default}s;
	}
	
	@media (hover: hover) {
		:hover {
			background: ${colors.sideButtons.hoverBg};
		}
	}
	`
);

export const UiPreviousPageContainer = styled.div(
  () => css`
    ${commonSideButtonCss}
    position: absolute;
  `
);
