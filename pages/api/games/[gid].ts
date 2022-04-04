import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
		const { gid } = req.query;

    const client = await connectToDatabase();
    const db = client.db();

    const game = await db.collection("games").findOne({gid: gid})
    res.status(200).json(_.pick(game, ["gid", "user1", "user2"]));
  }
};

export default handler;
