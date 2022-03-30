import styled from "styled-components";
import Sidebar from "./sidebar";

type SidebarProps = {
  visible: boolean;
};

export const WelcomeMessage = styled.h3`
`;

export const SidebarContainer = styled.div(
  ({ visible }: SidebarProps) => `
  display: grid;
  grid-template: 1fr / 50px 1fr;
  height: 100%;
  width: 250px;
  position: absolute;
  right: ${visible ? "0" : "-200px"};
	transition: .5s;
	text-align: center;
	`
);

export const SvgContainer = styled.div(
  ({ visible }: SidebarProps) => `
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: .5s;

	@media (hover: hover) {
	:hover{
    background-color: var(--main-font-color);
    opacity: 0.2;

		svg {
			fill: var(--main-bg-color);
		}
	};
}
	
  svg {
    width: 60%;
		${visible && `transform: rotateY(-180deg)`};

		transition: .5s;
  }
	
	`
);

export const StatsList = styled.ul`
	list-style: none;
	padding: 0;
`

