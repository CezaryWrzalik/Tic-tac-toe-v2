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

const SignIn = ({ toggle }: ToggleType) => {
  const setNotification = useSetRecoilState(notificationState);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const user = usernameRef.current?.value;
    const password = passwordRef.current?.value;
		
		if(!user){
			return;
		}

    signIn("credentials", {redirect: false, user, password })
      .then((data: any) => {
				if(data.error){
					setNotification(data.error);
				} else {
					setNotification("Signed in")
				}
			})
  };

  return (
    <>
      <Container>
        <SignHeader>Sign In</SignHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputsContainer>
            <UiInput ref={usernameRef} name="username / email" type="text"/>
            <UiInput ref={passwordRef} name="password" type="password" />
          </InputsContainer>
          <UiButton>Sign In</UiButton>
        </form>
        <InfoContainer>
          Create an account<button onClick={() => toggle()}>Sign Up</button>
        </InfoContainer>
      </Container>
    </>
  );
};

export default SignIn;
