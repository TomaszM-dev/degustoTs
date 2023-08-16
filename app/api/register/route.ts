import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Stripe from "stripe";
import { prisma } from "@/utils/prisma";

export async function POST(request: NextRequest, res) {
  const body = await request.json();
  const { name, email, password, image } = body;

  if (!name || !email || !password || !image) {
    return new NextResponse("MIssing name");
  }
  if (email == null) throw new Error("Username undefined");
  const hashedPassword = await bcrypt.hash(password, 10);

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
      hashedPassword: hashedPassword,
    },
  });

  if (exist) {
    return;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      image,
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
