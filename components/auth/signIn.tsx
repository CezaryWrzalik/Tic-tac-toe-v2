import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { notificationState } from "../../atom/notificationState";
import { Typography } from "../typography";
import UiButton from "../ui/Ui-Button";
import UiInput from "../ui/Ui-Input";
import { ToggleType } from "./Sign";
import {
  Container,
  InfoContainer,
  InputsContainer,
  SignHeader,
} from "./Sign.styled";

const SignIn = ({ toggle }: ToggleType) => {
  const setNotification = useSetRecoilState(notificationState);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
          router.push('./multiplayer');
				}
			})
  };

  return (
    <>
      <Container>
        <SignHeader><Typography.Text_24>Sign In</Typography.Text_24></SignHeader>
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
