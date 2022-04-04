import styled from "styled-components";

export const GameItemContainer = styled.div(
  ({theme: {colors, transitions}}) => `

  display: flex;
  justify-content: center;
  gap: 20px;
  border-bottom: 1px solid ${colors.text.primary};
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  transition: ${transitions.quick}s;

  :hover {
    background: ${colors.background.hoverBg};
  }
  `
)