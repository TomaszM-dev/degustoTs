import Stripe from "stripe";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const userSession = await getServerSession(authOptions);
  if (!userSession?.user) {
    NextResponse.json({ message: "Not logged in" });
    return;
  }

  console.log(userSession);
  const orders = await prisma.order.findMany({
    where: { userId: userSession.user.id, status: "completed" },
    include: { products: true },
  });
  return NextResponse.json(orders);
}
