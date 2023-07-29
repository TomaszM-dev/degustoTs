import { PrismaAdapter } from "@auth/prisma-adapter";

import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import Stripe from "stripe";
import { prisma } from "@/utils/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text", placeholder: "name" },
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials!.email,
            },
          });

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials!.password,
              user.hashedPassword!
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch {
          throw new Error("es");
        }
      },
    }),
  ],
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15",
      });

      const costumer = await stripe.customers.create({
        email: user.email || undefined,
        name: user.name || undefined,
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: costumer.id },
      });
    },
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
