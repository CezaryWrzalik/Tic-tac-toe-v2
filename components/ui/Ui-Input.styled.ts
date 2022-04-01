import styled from "styled-components"

export const UiInputContainer = styled.input(
	({theme: {colors, fontSizes}}) => `
	display: block;
	background: ${colors.background.primary};
	border: none;
	border-bottom: 1px solid ${colors.text.primary};
	text-align: center;
	margin: 15px 0;
	padding: 5px;
	font-size: ${fontSizes[24]}px;

	:focus {
		outline: none;
	}
	`
)