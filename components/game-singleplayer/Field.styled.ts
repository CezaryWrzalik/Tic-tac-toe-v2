import styled from "styled-components";

export const FieldContainer = styled.div(
  ({ theme: { colors } }) => ` 
  background: ${colors.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
	cursor: pointer;

	svg {
		height: 90%;
		width: 90%;
		fill: var(--main-font-color)
	}
	`
);
