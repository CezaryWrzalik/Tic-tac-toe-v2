import React from "react";
import { UiInputContainer } from "./Ui-Input.styled";

type PropsType = {
	name: string;
	type: string;
}

const UiTextInput = React.forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  return (
      <UiInputContainer ref={ref} type={props.type} placeholder={props.name}/>
  );
});
UiTextInput.displayName = "UiInputName";

export default UiTextInput;
