"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import product from "public/product.png";
import {
  AiFillStar,
  AiFillShopping,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useCartStore } from "@/store";
import formatPrice from "@/utils/priceFormat";
import AddCart from "@/app/products/AddCart";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import { scrollReveal, up } from "../animations/animations";
import { ProductType } from "@/types/ProductType";

const ProductOverview = ({ products }: ProductType) => {
  const [element, controls] = useScroll();

  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.addAllProducts(products);
  }, []);

  const bestSellersVr = cartStore.cartAll.slice(0, 2);
  const bestSellersAcc = cartStore.cartAll.slice(4, 6);
  const bestSellers = bestSellersAcc.concat(bestSellersVr);

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? bestSellers.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === bestSellers.length - 1 ? 0 : curr + 1));
  };

  return (
    <motion.div
      variants={up}
      animate={controls}
      initial="hidden"
      ref={element}
      className="mt-20 w-[100%] mx-auto  relative"
    >
      <motion.div className="flex flex-col">
        <h2 className="text-[3rem] gradientText text-center">
          Our Best Products
        </h2>
        <p className="text-[1.2rem] mt-3 text-secondarytext text-center mx-auto mb-10 w-[70%] max-sm:w-[100%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          facere eius odio eaque iusto laboriosam corporis temporibus
          accusantium ex delectus!
        </p>
      </motion.div>

      <AiOutlineArrowLeft
        onClick={prev}
        className="cursor-pointer p-1 rounded-full z-10 absolute top-[62%] left-10 text-[2.3rem] max-sm:hidden"
      />
      <AiOutlineArrowRight
        onClick={next}
        className="p-1 text-white rounded-full z-10 absolute top-[62%] right-10 text-[2.3rem] cursor-pointer max-sm:hidden"
      />
      <div className="flex items-center mt-16 overflow-hidden shadow max-w-[75%] relative  mx-auto max-sm:max-w-[100%] ">
        {bestSellers.map((item) => {
          console.log(item);
          return (
            <motion.div
              key={item.id}
              className="  min-w-full mx-auto pb-5   rounded-lg transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <div className=" flex gap-10 max-lg:gap-0 max-lg:flex-col max-lg:items-center">
                <div className="flex  flex-col  ">
                  <div className="triangle gradientBg w-[100%] max-lg:h-[40%] h-[70%] rounded-lg absolute max-lg:left-0 max-sm:top-[-2rem]"></div>
                  <div className="flex flex-col px-10 max-lg:px-0 pt-20 ">
                    <h2 className="relative text-[2.1rem] uppercase font-[500]">
                      {item.name}
                    </h2>
                    <div className="relative flex mb-10 text-gold text-[1.7rem] gap-[1px]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    alt=""
                    width={400}
                    height={400}
                    className="max-sm:ml-5 max-lg:scale-125 relative w-[18rem] h-[18rem] ml-14 max-lg:ml-0 max-sm:w-[14rem] max-sm:h-[14rem]"
                  ></Image>
                </div>
                <div className="flex  flex-col p-5  flex-1  items-center  max-lg:w-full max-lg:items-center justify-center">
                  <AiFillShopping
                    className={`text-[2.2rem]  mr-5  self-end max-lg:hidden  ${cartStore.cart.map(
                      (es) => (es.id === item.id ? "text-purple" : "text-white")
                    )}`}
                  />
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="mt-10 w-full flex flex-col ml-40 max-sm:ml-20  ">
                      <div className="flex items-center text-[1.4rem] gap-2">
                        <h3 className="text-[1.4rem] w-full  ">Description</h3>
                      </div>
                      <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                    </div>
                    <div className="mt-5 w-full flex flex-col ml-40 max-sm:ml-20 ">
                      <div className="flex items-center text-[1.4rem] gap-2">
                        <h3 className="text-[1.4rem] tracking-widest ">
                          Paramether
                        </h3>
                      </div>
                      <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                    </div>
                    <div className="mt-5 w-full flex flex-col ml-40 max-sm:ml-20 ">
                      <div className="flex items-center text-[1.4rem] gap-2">
                        <h3 className="text-[1.4rem] tracking-widest ">
                          Overview
                        </h3>
                      </div>
                      <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-col  w-[60%] max-sm:w-[80%] max-sm:items-center">
                    <p className="text-[1.9rem]   gradientText font-[500]">
                      {formatPrice(item.unit_amount as number)}
                    </p>
                    <AddCart
                      name={item.name}
                      id={item.id}
                      image={item.image}
                      quantity={item.quantity}
                      unit_amount={item.unit_amount}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="absolute bottom-[-4rem] right-0 left-0 ">
        <div className="flex items-center justify-center gap-2 ">
          {bestSellers.map((_, i) => (
            <div
              onClick={() => {
                setCurr(i);
              }}
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "gradientBg" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductOverview;
