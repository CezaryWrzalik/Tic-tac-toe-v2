import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { notificationState } from "../../../atom/winnerAtom";
import UiButton from "../../ui/ui-button";
import UiInput from "../../ui/ui-input";
import classes from "./signUp.module.css";

const SignUp = () => {
	const setNotification = useSetRecoilState(notificationState);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

	const createUser = async (e: FormEvent) => {
		e.preventDefault();

		const username = usernameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;


    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
				username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
			setNotification(data.message);
			return;
    }

		setNotification(data.message);
    signIn("credentials", {username, password});
    return data;
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Sign Up</h2>
      <form className={classes.form} onSubmit={(e) => createUser(e)}>
        <div className={classes.inputContainer}>
          <UiInput ref={usernameRef} name="username" type="text" />
          <UiInput ref={emailRef} name="email" type="text" />
          <UiInput ref={passwordRef} name="password" type="password" />
        </div>
        <UiButton>Create an account</UiButton>
      </form>
			<div className={classes.info}>Alredy got an account?<button>Sign in</button></div>
    </div>
  );
};

export default SignUp;
