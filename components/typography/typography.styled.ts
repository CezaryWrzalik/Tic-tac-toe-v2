import styled from "styled-components";
import { breakpoints } from "../../shared/constants";

export const Text_32 = styled.span(
	({theme: {fontSizes, fontWeight}}) => `
		font-size: ${fontSizes[32]}px;
		font-weight: ${fontWeight.regular};
		
		@media (max-height: ${breakpoints.xs}px) , (max-width: ${breakpoints.sm}px){
			font-size: ${fontSizes[24]}px;
		};
	`
)

export const Text_16 = styled.span(
	({theme: {fontSizes}}) => `
		font-size: ${fontSizes[16]}px;

		@media (max-height: ${breakpoints.xs}px), (max-width: ${breakpoints.sm}px) {
			font-size: ${fontSizes[14]}px;
		};
	`
)

