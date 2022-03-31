import { normalize } from 'styled-normalize';
import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
${normalize};

*{
	box-sizing: border-box;
}

body{
	font-family: 'Play', sans-serif;
	min-height: 279px;
	min-width: 279px;
}

html,body,#__next{
	width: 100%;
	height: 100%;
	overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
`