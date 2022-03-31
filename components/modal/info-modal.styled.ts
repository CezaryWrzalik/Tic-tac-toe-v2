import styled, { css } from "styled-components";

type ModalProps = {
  opened: boolean;
};

const ModalOpened = css`
  opacity: 1;
  visibility: visible;
`;

export const ModalContainer = styled.div<ModalProps>(
  ({ opened, theme: { colors } }) => `
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: ${colors.modal.secondary};
	backdrop-filter: blur(2px);
	opacity: 0;
	visibility: hidden;

	transition: .5s;
	color: ${opened ? "red" : "blue"};
	${opened && ModalOpened}
	`
);

export const ContentContainer = styled.div(
  ({ theme: { colors } }) => `
	position: relative;
	width: 80%;
	height: 80%;
	background-color: ${colors.modal.primary};;
	border-radius: 20px;
	
	`
);

export const CloseCotnainer = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 20px;
	width: 20px;
	cursor: pointer;
`;
