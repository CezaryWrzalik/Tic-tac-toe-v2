import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notificationState } from "../../atom/notificationState";
import { NotificationContainer } from "./Ui-Notification.styled";

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
    <NotificationContainer visible={showNotification}>
      {notification}
    </NotificationContainer>
  );
};

export default UiNotification;
