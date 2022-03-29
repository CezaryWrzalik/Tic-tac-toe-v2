import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import InfoModal from "../components/modal/info-modal";
import UiButton from "../components/ui/ui-button";
import classes from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.main}>
      <Head>
        <title>Tic tac toe | HOME</title>
      </Head>
      <Link href="/singleplayer">
        <a>
          <UiButton>SINGLEPLAYER</UiButton>
        </a>
      </Link>
      <Link href="/multiplayer">
        <a>
          <UiButton>MULTIPLAYER</UiButton>
        </a>
      </Link>
      <a onClick={() => setModalActive(true)}>
        <UiButton>
          INFO
        </UiButton>
      </a>

      <InfoModal
        active={modalActive}
        disableModal={() => setModalActive(false)}
      />
    </div>
  );
};

export default Home;
