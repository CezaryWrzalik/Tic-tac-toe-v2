import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { ToggleType } from ".";
import { notificationState } from "../../atom/notificationState";
import UiButton from "../ui/Ui-Button";
import UiInput from "../ui/Ui-Input";
import {
  Container,
  InfoContainer,
  InputsContainer,
  SignHeader,
} from "./sign.styled";

const SignUp = ({toggle}: ToggleType) => {
  const setNotification = useSetRecoilState(notificationState);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createUser = async (e: FormEvent) => {
    e.preventDefault();

    const user = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        user,
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
    signIn("credentials", { user, password });
    return data;
  };

  return (
    <Container>
      <SignHeader>Sign Up</SignHeader>
      <form onSubmit={(e) => createUser(e)}>
        <InputsContainer>
          <UiInput ref={usernameRef} name="username" type="text" />
          <UiInput ref={emailRef} name="email" type="email" />
          <UiInput ref={passwordRef} name="password" type="password" />
        </InputsContainer>
        <UiButton>Create an account</UiButton>
      </form>
      <InfoContainer>
        Alredy got an account?<button onClick={() => toggle()}>Sign in</button>
      </InfoContainer>
    </Container>
  );
};

export default SignUp;
