import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle(
  ({ theme: { colors } }: any) => `
	
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
	
	::-moz-selection { /* Code for Firefox */
  color: ${colors.text.primary};
  background: ${colors.text.secondary};
}

::selection {
  color: ${colors.text.primary};
  background: ${colors.text.secondary};
}

::-webkit-scrollbar {
  width: 5px;
	cursor: pointer;
}

::-webkit-scrollbar-track {
  background: #inherit;
}

::-webkit-scrollbar-thumb {
  background: ${colors.scroll.primary};
	border-radius: 20px;
}
	`
);
