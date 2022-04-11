import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/layout";
import { Theme } from "../types/CommonTypes";
import themeVariant from "../utils/themeVariant";
import { GlobalStyled } from "../shared/theme/GlobalStyles.styled";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
          <GlobalStyled />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
