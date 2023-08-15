import Stripe from "stripe";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const userSession = await getServerSession(authOptions);
  if (!userSession?.user) {
    NextResponse.json({ message: "Not logged in" });
    return;
  }
  const orders = await prisma.order.findMany({
    where: { userId: userSession.user.id, status: "completed" },
    include: { products: true },
  });
  NextResponse.json(orders);
}
