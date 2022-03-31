import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import InfoModal from "../components/modal/info-modal";
import UiButton from "../components/ui/ui-button";
import { HomePageContainer } from "../shared/styles/Home.styled";



const Home: NextPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = () => {
    setModalActive(true);
  }

  return (
    <>
      <Head>
        <title>Tic tac toe | HOME</title>
      </Head>

      <HomePageContainer>
        <UiButton>
          <Link href="/singleplayer">SINGLEPLAYER</Link>
        </UiButton>

        <UiButton>
          <Link href="/multiplayer">MULTIPLAYER</Link>
        </UiButton>

        <UiButton click={() => handleClick()}> INFO</UiButton>

        <InfoModal
          active={modalActive}
          disableModal={() => setModalActive(false)}
        />
      </HomePageContainer>
    </>
  );
};

export default Home;
