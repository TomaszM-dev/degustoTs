"use client";
import { AddCartType } from "@/types/AddCartType";
import { useCartStore } from "@/store";

export default function AddCart({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();
  console.log(id);
  return (
    <div className="w-[90%] mx-auto flex items-center">
      <button
        onClick={() =>
          cartStore.addProduct({ name, id, image, unit_amount, quantity })
        }
        className="gradientBg w-[90%] mx-auto text-white btn py-3 rounded-lg mt-8"
      >
        Add To Cart
      </button>
    </div>
  );
}
