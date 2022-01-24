import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InfoModal from "../components/modal/info-modal";
import UiButton from "../components/ui/ui-button";
import classes from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.main}>
      <Link href="/singleplayer"><a><UiButton>SINGLEPLAYER</UiButton></a></Link>
      <UiButton>MULTIPLAYER</UiButton>
      <UiButton>
        <p onClick={() => setModalActive(true)}>INFO</p>
      </UiButton>

      <InfoModal active={modalActive} disableModal={() => setModalActive(false)}/>
    </div>
  );
};

export default Home;
