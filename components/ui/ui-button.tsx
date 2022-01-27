import classes from "./ui-button.module.css";

type UiButtonProps = {
  children: string | JSX.Element;
  unactive?: boolean;
};

const UiButton = ({children, unactive}: UiButtonProps) => {


  if(unactive === true){
    return <button className={classes.unactiveButton}>{children}</button>
  }

  return (
    <button className={classes.button}>{children}</button>
  );
};

export default UiButton;
