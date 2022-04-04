import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../utils/auth";
import { connectToDatabase } from "../../../utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    const { username, email, password } = data;

    if (!username || username.trim().length < 4) {
      res.status(422).json({
        message:
          "Username is required and should be at least 4 characters long.",
      });
      return;
    }

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Please insert valid email",
      });
      return;
    }

    if (!password || password.trim().length < 7) {
      res.status(422).json({
        message:
          "Invalid input - password should be at least 7 characters long.",
      });
      return;
    }

    const client = await connectToDatabase();

    const db = await client.db();

    const existingUser = await db.collection("users").findOne({ username: username });
    const existingEmail = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "A user with this username already exists" });
      client.close();
      return;
    }

    if (existingEmail) {
      res.status(422).json({ message: "A user with this email already exists" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    await db.collection("users").insertOne({
      username: username,
      email: email,
      password: hashedPassword,
      won: '0',
      lost: '0',
      draws: '0',
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
  }
};

export default handler;
