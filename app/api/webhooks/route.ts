import Stripe from "stripe";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export async function POST(req: any) {
  const rawBody = await req.text();

  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ sig });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json("Webhook error" + err);
  }
  switch (event.type) {
    case "payment_intent.created":
      const paymentIntent = event.data.object;

      break;

    case "charge.succeeded":
      const charge = event.data.object as Stripe.Charge;
      if (typeof charge.payment_intent === "string") {
        const order = await prisma.order.update({
          where: { paymentIntentID: charge.payment_intent },
          data: { status: "completed" },
        });
      }
      break;
    default:
      console.log("unhandled event type:" + event.type);
  }
}
