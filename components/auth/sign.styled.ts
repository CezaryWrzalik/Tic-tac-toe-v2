import styled from "styled-components";

//Index.tsx

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

//SignOut & SignIn .tsx

export const Container = styled.div`
  text-align: center;
`;

export const SignHeader = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  font-size: var(--size-15);
  margin: 0;
`;

export const InputsContainer = styled.div`
  margin: 40px;

  @media (max-height: 450px) {
    .inputContainer {
      margin: 10px;
    }
  }
`;

export const InfoContainer = styled.div`


  button {
    margin: 10px 0;
    border: none;
    background: inherit;
    color: var(--seondary-font-color);
    cursor: pointer;
  }
`;
