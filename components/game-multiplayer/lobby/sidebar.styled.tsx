import styled, { css } from "styled-components";
import { commonSideButtonCss } from "../../ui/Ui-Previouspage.styled";

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
  ({ visible }) => css`
	${commonSideButtonCss};

	svg {
		${visible && `transform: rotateY(-180deg)`};
	}
	`
);

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;
