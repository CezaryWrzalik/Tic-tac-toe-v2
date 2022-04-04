import { fetchGameById, fetchGames } from "../../utils/games";

const MuliplayerGamePage = ({game}: any) => {
	console.log(game);
  return <div>{game.gid}</div>;
};

export const getStaticProps = async (context: { params: { gid: string; }; }) => {
	const {gid} = context.params;

	const game = await fetchGameById(gid);

	return {
		props: {
			game
		}
	}

}

export const getStaticPaths = async () => {
	const games = await fetchGames(); 
	const paths = games.map((game: { gid: string; }) => ({
		params: {gid: game.gid}
	}))

	return {
		paths,
		fallback: false
	}

}

export default MuliplayerGamePage;
