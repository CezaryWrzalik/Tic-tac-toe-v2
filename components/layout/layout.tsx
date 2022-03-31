import UiNotification from "../ui/ui-notification";
import Header from "./Header";
import { Typography } from "../typography";
import { Footer, LayoutContainer, Main } from "./Layout.styled";


type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <UiNotification />
      <LayoutContainer>
        <Header />
        <Main>{children}</Main>
        <Footer>
          <Typography.Text_16>by Cezary Wrzalik</Typography.Text_16>
        </Footer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
