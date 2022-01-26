import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { winnerState } from "../../atom/winnerAtom";
import Header from "./header";

import classes from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const winner = useRecoilState(winnerState);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Header />
      </header>
      <div className={classes.main}>{children}</div>
      <footer className={classes.footer}>by Cezary Wrzalik</footer>
    </div>
  );
};

export default Layout;
