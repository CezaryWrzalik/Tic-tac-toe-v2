import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../utils/auth";
import { connectToDatabase } from "../../../utils/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        if (!credentials) {
          throw new Error("Something went wrong!");
        }

        let user = await usersCollection.findOne({
          username: credentials.user,
        });

        if (!user) {
          user = await usersCollection.findOne({
            email: credentials.user,
          });
        }

        if (!user) {
          throw new Error("No user found"!);
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        client.close();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {

      const client = await connectToDatabase();

      const usersCollection = client.db().collection("users");

      const user = await usersCollection.findOne({
        email: session.user.email,
      });

      session.user.username = user?.username;

      return session;
    },
  },
});
