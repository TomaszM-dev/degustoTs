import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import Stripe from "stripe";
import { getServerSession, NextAuthOptions } from "next-auth";
import { prisma } from "@/utils/prisma";
import { AddCartType } from "@/types/AddCartType";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

const calcOrderAmount = (items: AddCartType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.quantity! * item.unit_amount!;
  }, 0);
  return totalPrice;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { items, payment_intent_id } = body;

  const userSession = await getServerSession(authOptions);
  if (!userSession?.user) {
    return;
  }
  const orderData = {
    user: { connect: { id: userSession.user?.id } },
    amount: calcOrderAmount(items),
    currency: "usd",
    status: "pending",
    paymentIntentID: payment_intent_id,
    products: {
      create: items.map((item: any) => ({
        name: item.name,
        unit_amount: parseFloat(item.unit_amount),
        image: item.image,
        quantity: item.quantity,
      })),
    },
  };

  if (payment_intent_id) {
    const current_intent = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );
    if (current_intent) {
      const updated_intent = await stripe.paymentIntents.update(
        payment_intent_id,
        { amount: calcOrderAmount(items) }
      );
      const existing_order = await prisma.order.findFirst({
        where: { paymentIntentID: updated_intent.id },
        include: { products: true },
      });
      if (!existing_order) {
        return NextResponse.json({ message: "Invalid" });
      }

      const updated_order = await prisma.order.update({
        where: { id: existing_order?.id },
        data: {
          amount: calcOrderAmount(items),
          products: {
            deleteMany: {},
            create: items.map((item: any) => ({
              name: item.name,
              unit_amount: parseFloat(item.unit_amount),
              image: item.image,
              quantity: item.quantity,
            })),
          },
        },
      });
      return NextResponse.json({ paymentIntent: updated_intent });
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calcOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    orderData.paymentIntentID = paymentIntent.id;
    const newOrder = await prisma.order.create({
      data: orderData,
    });

    return NextResponse.json({ paymentIntent });
  }
}
