import { CircleIcon, ComputerIcon, CrossIcon, PersonIcon } from "../icons";
import { SvgContainer, SwitchContainer, SwitchFlex } from "./Switch.styled";

type PropsTypes = {
  switchFor: string;
  currentOption: boolean;
  func: (mode?: boolean) => void;
};

const Switch = ({ currentOption, switchFor, func }: PropsTypes) => {
  const handleClick = () => {
    func();
  };

  return (
    <SwitchContainer>
      <SwitchFlex>
        <SvgContainer selected={currentOption} onClick={handleClick}>
          {switchFor === "turn" ? <CrossIcon /> : <PersonIcon />}
        </SvgContainer>
        <SvgContainer selected={!currentOption} onClick={handleClick}>
          {switchFor === "turn" ? <CircleIcon /> : <ComputerIcon />}
        </SvgContainer>
      </SwitchFlex>
    </SwitchContainer>
  );
};

export default Switch;
