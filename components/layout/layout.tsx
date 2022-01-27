import Header from "./header";

import classes from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

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
