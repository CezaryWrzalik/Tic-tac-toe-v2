import { useState } from "react";
import classes from './index.module.css'
import SignUp from "./signUp";

const Sign = () => {
	const [isResiter, setIsRegister] = useState(true);
	
	return(
		<div className={classes.signContainer}>
			{isResiter && <SignUp />}
		</div>
	)
}

export default Sign;