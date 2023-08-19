"use client";
import Image from "next/image";
import React from "react";
import { useCartStore } from "@/store";
import formatPrice from "@/utils/priceFormat";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { easeIn, easeInOut, motion } from "framer-motion";
import basket from "public/basket.png";
import { AnimatePresence } from "framer-motion";
import Checkout from "./Checkout";
import OrderConfirmed from "./OrderConfirmed";

const Cart = () => {
  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: easeInOut, duration: 0.2 }}
      exit={{ opacity: 0, x: 300 }}
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full  h-screen left-0 top-0  bg-opacity-[0.40]"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=" bg-main shadow absolute right-0 top-0 w-[34%] max-lg:w-[100%] h-screen  overflow-scroll flex flex-col items-center gap-5 bg-opacity-[0.98] "
      >
        {cartStore.onCheckout === "cart" && (
          <h1
            onClick={() => cartStore.toggleCart()}
            className="text-[1.3rem]  mt-16 self-start px-10 mb-5 cursor-pointer"
          >
            Back to store 🏃‍♂️
          </h1>
        )}
        {cartStore.onCheckout === "checkout" && (
          <h1
            onClick={() => cartStore.setCheckout("cart")}
            className="text-[1.3rem]  mt-16 self-start px-10 mb-5 cursor-pointer"
          >
            Back to Cart 🏃‍♂️
          </h1>
        )}

        {cartStore.onCheckout === "cart" && (
          <>
            {cartStore.cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex  gap-10  w-[90%] px-5 rounded-xl  "
              >
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt="product"
                  className="w-[8rem] h-[8rem]"
                ></Image>
                <motion.div
                  layout
                  className="flex flex-col justify-center gap-1 text-[1.1rem]"
                >
                  <h2 className="gradientText text-[1.2rem]">{item.name}</h2>
                  <div className="flex items-center">
                    <p className="pr-2">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => cartStore.removeProduct(item)}
                      className=" text-[1.3rem] pr-1 text-purple"
                    >
                      <IoRemoveCircle />
                    </button>
                    <button
                      onClick={() => cartStore.addProduct(item)}
                      className=" text-[1.3rem]  text-purple"
                    >
                      <IoAddCircle />
                    </button>
                  </div>
                  <p>{formatPrice(item.unit_amount)}</p>
                </motion.div>
              </motion.div>
            ))}
          </>
        )}
        {cartStore.onCheckout === "checkout" && <Checkout />}
        {cartStore.onCheckout === "success" && <OrderConfirmed />}

        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
          <motion.div
            layout
            className="flex flex-col mt-6 gap-3 self-start px-12 w-full"
          >
            <p className="text-[1.2rem]">
              Total Price:{" "}
              <span className="gradientText">{formatPrice(totalPrice)}</span>
            </p>
            <button
              onClick={() => cartStore.setCheckout("checkout")}
              className=" py-[0.6rem]  text-[1.1rem] rounded-lg gradientBg w-full"
            >
              Checkout
            </button>
          </motion.div>
        ) : (
          ""
        )}
        <AnimatePresence>
          {!cartStore.cart.length && cartStore.onCheckout === "cart" && (
            <motion.div
              layout
              animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
              initial={{ scale: 0, rotateZ: -10, opacity: 0 }}
              exit={{ scale: 0, rotateZ: -10, opacity: 0 }}
              className="mt-10 flex flex-col items-center gap-10 text-[1.5rem] font-[500]"
            >
              <h1>
                Uhhh ohhh... <span className="gradientText">its empty </span>😢
              </h1>
              <Image
                alt="basket"
                src={basket}
                className="w-60 h-60"
                width={400}
                height={400}
              ></Image>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Cart;
