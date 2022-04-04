import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/db";
import uniqid from "uniqid";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    const data = await db.collection("games").find().toArray();
    res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { username } = req.body;
    const gid = uniqid();

    const client = await connectToDatabase();
    const db = client.db();
    await db.collection("games").insertOne({
      user1: username,
      user2: null,
      gid: gid,
    });

    res.status(201).json({ message: "Created game!", gid: gid });
    client.close();
  }

  if (req.method === "PUT") {
    const { username, gid } = req.body;

    const client = await connectToDatabase();
    const db = client.db();
    await db
      .collection("games")
      .updateOne({ gid: gid }, { $set: { user2: username } });

    res.status(204).json({ message: "resource updated successfully",});
    client.close();
  }
};

export default handler;
