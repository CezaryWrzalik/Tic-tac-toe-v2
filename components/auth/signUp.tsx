import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { notificationState } from "../../atom/notificationState";
import { Typography } from "../typography";
import UiButton from "../ui/ui-button";
import UiInput from "../ui/ui-input";
import { ToggleType } from "./Sign";
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
  const router = useRouter();

  const createUser = async (e: FormEvent) => {
    e.preventDefault();

    const user = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(JSON.stringify({
      username: user,
      email,
      password,
    }),)

    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username: user,
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
    signIn("credentials", { user, password })
    .then((data: any) => {
      if(data.error){
        setNotification(data.error);
      } else {
        setNotification("Signed in")
        router.push('./multiplayer');
      }
    });
    return data;
  };

  return (
    <Container>
      <SignHeader><Typography.Text_24>Sign Up</Typography.Text_24></SignHeader>
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
