import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../utils/db";
import _ from 'lodash';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if(req.method === "GET") {
		const {uid} = req.query;
		const username = uid[0];

		const client = await connectToDatabase();
		const db = await client.db();

		const userStats = await db.collection("users").findOne({username: username});

		if(!userStats){
			res.status(404).json({message: "Something went wrong"});
			return;
		}
		
		res.status(200).json(_.pick(userStats, ['username', 'won', 'lost', 'draws']));
    client.close();
	}
}

export default handler;