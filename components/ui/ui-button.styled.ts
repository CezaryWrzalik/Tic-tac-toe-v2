import styled from "styled-components";

export const UiButtonContainer = styled.button(
  ({ theme: { colors, transitions } }) => `
	
	background-color: inherit;
	border: none;
	cursor: pointer;
	
	&, & a {
		transition: ${transitions.quick}s;
		color: ${colors.text.primary};
	}

	&:hover, a:hover{
		color: ${colors.text.secondary};
	`
);
