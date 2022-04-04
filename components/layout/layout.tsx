import UiNotification from "../ui/Ui-Notification";
import Header from "./Header";
import { Typography } from "../typography";
import { Footer, LayoutContainer, Main } from "./Layout.styled";
import UiPreviousPage from "../ui/Ui-Previouspage";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <UiNotification />
      <LayoutContainer>
        <Header />
        <Main>
          <UiPreviousPage />
          {children}
        </Main>
        <Footer>
          <Typography.Text_16>by Cezary Wrzalik</Typography.Text_16>
        </Footer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
