import { NextPage } from "next";
import Head from "next/head";
import SingleplayerGame from "../../components/game-singleplayer/game-singleplayer";

import classes from "../../styles/singleplayer.module.css";

const SinglePlayerPage: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Tic tac toe | SINGLE</title>
      </Head>
      <SingleplayerGame />
    </div>
  );
};

export default SinglePlayerPage;
