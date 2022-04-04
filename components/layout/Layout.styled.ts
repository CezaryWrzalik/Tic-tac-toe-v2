import styled from "styled-components";
import { breakpoints } from "../../shared/constants";

export const LayoutContainer = styled.div(
  ({theme: {colors} }) => `
  height: 100%;
  display: grid;
  grid-template: 100px calc(100% - 200px) 100px / 1fr;
  background-color: ${colors.background.primary};
  position: relative;
  
  @media (max-height: ${breakpoints.sm}px){
    grid-template: 30px calc(100% - 60px) 30px / 1fr;
  }
  `
);

export const Main = styled.main`
position: relative;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`