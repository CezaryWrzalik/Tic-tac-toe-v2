import { Typography } from "../typography";
import { UiButtonContainer } from "./ui-button.styled";

type UiButtonProps = {
  children: string | JSX.Element;
  click?: () => void;
};

const UiButton = ({ children, click }: UiButtonProps) => {
  return (
    <UiButtonContainer onClick={() => click ? click() : null}>
      <Typography.Text_32>{children}</Typography.Text_32>
    </UiButtonContainer>
  );
};

export default UiButton;
