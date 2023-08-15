"use client";
import { AddCartType } from "@/types/AddCartType";
import { useCartStore } from "@/store";

export default function AddCart({ name, id, image, unit_amount }: AddCartType) {
  const cartStore = useCartStore();

  return (
    <>
      <button
        onClick={() => cartStore.addProduct({ name, id, image, unit_amount })}
        className="gradientBg w-[90%] text-white btn py-3 rounded-lg mt-8"
      >
        Add To Cart
      </button>
    </>
  );
}
