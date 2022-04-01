import { CircleIcon, CrossIcon } from "../icons";
import { FieldContainer } from "./Field.styled";

type fieldProps = {
  fieldValue: string;
  arrayXIndex: number;
  arrayYIndex: number;
  handleMove: (x: number, y: number) => void;
};

const Field = (props: fieldProps) => {
  const handleClick = () => {
    if (props.fieldValue === "_") {
      props.handleMove(props.arrayXIndex, props.arrayYIndex);
    }
  };

  return (
    <FieldContainer onClick={handleClick}>
      {props.fieldValue === "x" && <CrossIcon />}
      {props.fieldValue === "o" && <CircleIcon />}
    </FieldContainer>
  );
};

export default Field;
