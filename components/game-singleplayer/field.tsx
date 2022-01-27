import CircleIcon from "../icons/circle-icon";
import CrossIcon from "../icons/cross-icon";

import classes from "./field.module.css";

type fieldProps = {
  fieldValue: string;
  arrayXIndex: number;
  arrayYIndex: number;
  handlePlayerMove: (x: number, y: number) => void;
};

const Field = (props: fieldProps) => {
  const handleClick = () => {
    if (props.fieldValue === "_") {
      props.handlePlayerMove(props.arrayXIndex, props.arrayYIndex);
    }
  };

  return (
    <div className={classes.field} onClick={handleClick}>
      {props.fieldValue === "x" && <CrossIcon />}
      {props.fieldValue === "o" && <CircleIcon />}
    </div>
  );
};

export default Field;
