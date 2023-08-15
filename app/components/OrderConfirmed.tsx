"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import confirmed from "public/confirmed.png";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export default function OrderConfirmed() {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center my-12 flex-col w-full"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="overflow-hidden text-center mt-10">
        <h1 className="text-[1.5rem] font-bold mb-2 gradientText ">
          Your order has been placed 🚀
        </h1>
        <h2 className="text-secondarytext">
          Check your email for the receipt.
        </h2>
      </div>
      <div className="relative flex w-full h-[25rem]">
        <Image
          src={confirmed}
          className="py-8 rounded-lg  mt-10 absolute top-0 left-0 w-full h-full"
          alt="dancing"
          height={400}
          width={400}
        ></Image>
        <div className="w-[60%] rounded-md bottom-[-1rem] right-[3rem] h-2 gradientBg absolute"></div>
        <Link href={"/dashboard"} className="flex flex-col gap-5">
          <button
            onClick={() => {
              setTimeout(() => {
                cartStore.setCheckout("cart");
              }, 1000);
              cartStore.toggleCart();
            }}
            className="px-7 py-3 mt-20 z-10 ml-10 gradientBg rounded-md"
          >
            Check your order
          </button>
        </Link>
      </div>
      <span className="mt-16 text-[1.3rem]">
        Thanks for trusting us | <span className="gradientText">DegustoVR</span>
      </span>
    </motion.div>
  );
}
