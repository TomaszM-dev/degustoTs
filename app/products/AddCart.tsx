"use client";
import { AddCartType } from "@/types/AddCartType";
import { useCartStore } from "@/store";

export default function AddCart({ name, id, image, unit_amount }: AddCartType) {
  return (
    <>
      <button className="  gradientBg w-[90%]  py-3 rounded-lg mt-8">
        Add To Cart
      </button>
    </>
  );
}
