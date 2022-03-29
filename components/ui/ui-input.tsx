import React from "react";
import classes from './ui-input.module.css'

type PropsType = {
	name: string;
	type: string;
}

const UiTextInput = React.forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  return (
    <div className={classes.container}>
      <input ref={ref} type={props.type} placeholder={props.name}/>
    </div>
  );
});
UiTextInput.displayName = "UiInputName";

export default UiTextInput;
