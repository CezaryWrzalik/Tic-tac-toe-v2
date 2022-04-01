import { NextPage } from "next";
import Head from "next/head";
import SingleplayerGame from "../../components/game-singleplayer/Game-singleplayer";
import { SinglePlayerContainer } from "../../shared/styles/Singleplayer.styled";

const SinglePlayerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tic tac toe | SINGLE</title>
      </Head>

      <SingleplayerGame />
    </>
  );
};

export default SinglePlayerPage;
