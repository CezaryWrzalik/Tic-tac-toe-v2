import classes from "./ui-button.module.css";

type UiButtonProps = {
  children: string | JSX.Element;
};

const UiButton = ({children}: UiButtonProps) => {
  return (
    <button className={classes.button}>{children}</button>
  );
};

export default UiButton;
