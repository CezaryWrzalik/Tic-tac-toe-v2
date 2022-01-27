import { NextPage } from "next";
import Head from "next/head";
import Game from "../../components/game-singleplayer/game";

import classes from "../../styles/singleplayer.module.css";

const SinglePlayerPage: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Tic tac toe | SINGLE</title>
      </Head>
      <Game />
    </div>
  );
};

export default SinglePlayerPage;
