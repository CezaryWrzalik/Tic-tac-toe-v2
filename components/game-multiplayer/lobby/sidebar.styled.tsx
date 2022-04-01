import styled from "styled-components";

type SidebarProps = {
  visible: boolean;
};

export const WelcomeMessage = styled.h3``;

export const SidebarContainer = styled.div<SidebarProps>(
  ({ visible, theme: { transitions } }) => `
  display: grid;
  grid-template: 1fr / 50px 1fr;
  height: 100%;
  width: 250px;
  position: absolute;
  right: ${visible ? "0" : "-200px"};
	transition: ${transitions.default}s;
	text-align: center;
	`
);

export const SvgContainer = styled.div<SidebarProps>(
  ({ visible, theme: { colors, transitions } }) => `
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	svg {
		height: 30px;
		width: 30px;
		fill: ${colors.text.primary};
		${visible && `transform: rotateY(-180deg)`};
	}

	&, svg {
		transition: ${transitions.default}s;
	}

	@media (hover: hover) {
		:hover{
			background: ${colors.sideButtons.hoverBg};
		}
	}
}
	
	`
);

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;
