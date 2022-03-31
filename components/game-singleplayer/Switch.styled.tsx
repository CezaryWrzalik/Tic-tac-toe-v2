import styled from "styled-components";
import { breakpoints } from "../../shared/constants";

type SvgContainerProps = {
	selected?: boolean;
}

export const SwitchContainer = styled.div(
  ({ theme: { colors } }) => `
  background: ${colors.text.primary};
  cursor: pointer;
	`
);

export const SwitchFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: ${breakpoints.sm}px) and (orientation: portrait) {
    flex-direction: row;
  }
`;

export const SvgContainer = styled.div<SvgContainerProps>(
  ({ selected ,theme: { colors } }) => `
  background: ${colors.background.primary};
  width: 50px;
  padding: 0 5px;
	border: 1px solid ${colors.background.primary};

	svg {
		opacity: ${selected ? 1 : .4};
	}
	`
);
