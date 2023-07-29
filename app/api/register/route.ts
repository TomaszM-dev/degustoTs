import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Stripe from "stripe";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("MIssing name");
  }
  if (email == null) throw new Error("Username undefined");

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("user exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  const costumer = await stripe.customers.create({
    email: email || undefined,
    name: name || undefined,
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { stripeCustomerId: costumer.id },
  });

  return NextResponse.json(user);
}
