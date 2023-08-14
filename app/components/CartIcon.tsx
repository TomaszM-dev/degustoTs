"use client";
import { useCartStore } from "@/store";
import React, { useEffect, useState } from "react";
import { AiFillShopping } from "react-icons/ai";

const CartIcon = ({ id }) => {
  const cartStore = useCartStore();

  return (
    <>
      {cartStore.cart.map((item) => {
        return (
          <AiFillShopping
            className={`text-[2.1rem] mb-5 self-end ${
              item.id === id ? "text-purple" : "text-white"
            } `}
          />
        );
      })}
    </>
  );
};

export default CartIcon;
