"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CheckoutForm from "./CheckoutForm";
import { NextResponse } from "next/server";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const cartStore = useCartStore();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    try {
      fetch("/api/paymentIntent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartStore.cart,
          payment_intent_id: cartStore.paymentIntent,
        }),
      })
        .then((res) => {
          console.log(res.status);
          return res.json();
        })
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret);
          cartStore.setPaymentIntent(data.paymentIntent.id);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "night",
      labels: "floating",
    },
  };

  return (
    <div>
      {/* {!clientSecret && <OrderAnimation></OrderAnimation>} */}
      {clientSecret && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </motion.div>
      )}
    </div>
  );
}
