import { useState } from "react";
import { SignContainer } from "./sign.styled";
import SignIn from "./signIn";
import SignUp from "./signUp";

export type ToggleType = {
	toggle: () => void;
}

const Auth = () => {
	const [isRegister, setIsRegister] = useState(false);

	const toggleRegister = () => {
		setIsRegister(!isRegister);
	}
	
	return(
		<SignContainer>
			{isRegister && <SignUp toggle={toggleRegister}/>}
			{!isRegister && <SignIn toggle={toggleRegister}/>}
		</SignContainer>
	)
}

export default Auth;