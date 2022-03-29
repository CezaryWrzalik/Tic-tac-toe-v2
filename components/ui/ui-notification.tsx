import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { notificationState } from "../../atom/winnerAtom";

type NotificationContainerProps = {
  visible: boolean;
};

const Container = styled.div`
  position: absolute;
  top: 10%;
  overflow: hidden;
  width: 100%;
  padding: 5px 0;
`;

const NotificationContainer = styled.div<NotificationContainerProps>(
  ({ visible }) => `
position: relative;
right: ${visible ? "0" : "-100%"};
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

@media (max-width: 950px){
  width: 100%;
  text-align: center;
}
`
);

const UiNotification = () => {
  const [notification, setNotification] = useRecoilState(notificationState);
  const [showNotification, setShowNotification] = useState(false);

  const closeNotification = useCallback(() => {
    setShowNotification(false);
    setTimeout(() => {
      setNotification("");
    }, 500);
  }, [setNotification]);

  useEffect(() => {
    if (notification !== "") {
      setShowNotification(true);
      const timer = setTimeout(closeNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, closeNotification]);

  return (
    <Container>
      <NotificationContainer visible={showNotification}>
        {notification}
      </NotificationContainer>
    </Container>
  );
};

export default UiNotification;
