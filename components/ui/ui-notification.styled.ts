import styled from "styled-components";

type NotificationContainerProps = {
  visible: boolean;
};

export const NotificationContainer = styled.div<NotificationContainerProps>(
  ({ visible }) => `
    position: fixed;
    right: ${visible ? "0px" : "-505px"};
    top: 10%;
    width: 500px;
    max-width: 100%;
    border: 1px solid var(--main-font-color);
    padding: 20px;
    border-radius: 20px 0 0 20px;
    box-shadow: 0 5px 4px gray;
    min-height: 50px;
    transition: .5s;
    background: var(--main-bg-color);
    z-index: 1;

@media (max-width: 950px){
  width: 100%;
  text-align: center;
  right: ${visible ? "0px" : "-100%"};
  border-radius: 0px 0 0 0px;

}
`
);