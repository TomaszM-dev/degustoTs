"use client";
import React from "react";
import Link from "next/link";
import {
  AiFillShopping,
  AiFillStar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { SearchParamsType } from "@/types/SearchParamsType";
import AddCart from "../AddCart";
import { useCartStore } from "@/store";
import formatPrice from "@/utils/priceFormat";
import CartIcon from "@/app/components/CartIcon";
import { up } from "@/app/components/animations/animations";

export default function Product({ searchParams }: SearchParamsType) {
  const cartStore = useCartStore();
  const products = cartStore.cartAll;
  console.log(searchParams);

  const bestSellersVr = products.slice(0, 2);
  const bestSellersAcc = products.slice(4, 6);
  const bestSellers = bestSellersAcc.concat(bestSellersVr);

  const filtered = products.filter(
    (item) => !item.metadata.id.includes(`${searchParams.metaId}`)
  );

  const name = searchParams.name;
  const id = searchParams.id;
  const unit_amount = searchParams.unit_amount;
  const image = searchParams.image;
  const quantity = searchParams.quantity;

  const accordion = [
    {
      headline: "Overview",
      info: searchParams.overview,
    },
    {
      headline: "Paramether",
      info: searchParams.paramether,
    },
    {
      headline: "Description",
      info: searchParams.description,
    },
  ];

  const showAnimationVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,

      transition: (i) => ({
        delay: 0.5 * i,
        duration: 1.8,
        ease: easeInOut,
      }),
    },
  };

  const [selected, setSelected] = useState(0);

  const toggle = (i: number) => {
    if (selected == i) {
      return setSelected(0);
    }
    setSelected(i);
  };

  return (
    <div className="mt-40 flex flex-col gap-10">
      <Link className="text-[2rem] flex items-center gap-3" href="/products">
        <motion.h1
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          ⬅ Go back to <span className="gradientText">the store</span>
        </motion.h1>
      </Link>
      <motion.div
        viewport={{
          once: true,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="shadow w-[80%] mx-auto pb-5 mt-8  rounded-lg max-sm:w-[100%] "
      >
        <div className=" flex gap-2 max-lg:flex-col">
          <div className="flex  flex-1 flex-col relative items-center">
            <div className="triangle gradientBg w-[100%] h-[70%] rounded-lg absolute"></div>
            <div className="flex flex-col px-10 pt-20 ">
              <h2 className="relative  text-[2.4rem] uppercase font-[500]">
                {searchParams.name}
              </h2>
              <div className="relative flex mb-10 text-gold text-[1.7rem] gap-[1px]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <Image
              src={searchParams.image}
              width={300}
              height={300}
              alt="product detail"
              className="relative w-[21rem] pl-5 max-lg:pl-0"
            ></Image>
          </div>
          <div className="flex flex-col p-5  flex-1  items-start ">
            <AiFillShopping className="text-[2.2rem] mr-5  self-end  max-lg:hidden" />
            <div className="w-[100%]">
              <motion.div className="mt-10 max-lg:mb-20 w-[70%] mx-auto max-sm:w-[95%]   h-[20rem]">
                {accordion.map((item, i) => {
                  const { headline, info } = item;
                  return (
                    <motion.div
                      key={i}
                      initial={"offscreen"}
                      whileInView={"onscreen"}
                      transition={{ staggerChildren: 1 }}
                      viewport={{
                        once: true,
                      }}
                      className="flex mb-4 flex-col justify-between text-[1.4rem]"
                    >
                      <motion.div
                        variants={showAnimationVariant}
                        onClick={() => toggle(i)}
                        className="flex justify-between   items-center cursor-pointer"
                      >
                        <motion.h3
                          layout
                          className="text-[1.4rem] tracking-widest "
                        >
                          {headline}
                        </motion.h3>
                        {selected === i ? (
                          <AiOutlineArrowUp className="font-[600]" />
                        ) : (
                          <AiOutlineArrowDown />
                        )}
                      </motion.div>
                      <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        className="w-[100%]  h-1 gradientBg rounded-lg mt-1"
                      ></motion.div>
                      {selected === i ? (
                        <motion.div
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          className="text-secondarytext p-2 text-[1.2rem]"
                        >
                          {info}
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <div className="mt-10 flex flex-col  w-[80%] mx-auto items-center">
              <p className="text-[1.9rem] self-center gradientText font-[500]">
                {formatPrice(searchParams.unit_amount)}
              </p>
              <button
                className="w-[90%] mx-auto mt-5 px-3 py-4 gradientBg btn text-white"
                onClick={() =>
                  cartStore.addProduct({
                    name,
                    id,
                    image,
                    unit_amount,
                    quantity,
                  })
                }
              >
                Add
              </button>
              {/* <AddCart
                id={searchParams.id}
                image={searchParams.image}
                name={searchParams.name}
                unit_amount={searchParams.unit_amount}
              /> */}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col mt-40 ">
        <div className="w-[100%] mx-auto h-2 gradientBg  rounded-lg"></div>
        <h3 className="mt-5 text-[2.3rem]">
          Fits <span className="gradientText"> well with</span>
        </h3>
        <div className="mt-16 grid grid-cols-bestS gap-7  p-1">
          {filtered.slice(0, 4).map((item) => {
            const { overview, paramether, id: metaId } = item.metadata;
            const name = item.name;
            const unit_amount = item.unit_amount;
            const description = item.description;
            const image = item.image;
            const id = item.id;

            return (
              <Link
                key={item.id}
                href={{
                  pathname: `/products/${item.id}`,
                  query: {
                    id,
                    name,
                    image,
                    unit_amount,
                    overview,
                    paramether,
                    description,
                    metaId,
                  },
                }}
                className="shadow p-3 px-7 flex flex-col gap-2 items-center "
              >
                <AiFillShopping className="text-[2.1rem] mb-5 self-end" />
                <Image
                  className="w-40 h-40 "
                  src={item.image}
                  width={400}
                  height={400}
                  alt="product"
                ></Image>
                <h2 className=" text-[1.3rem] font-[500] uppercase mt-5 text-center">
                  {item.name}
                </h2>
                <p className="gradientText text-[1.6rem]">
                  {formatPrice(item.unit_amount as number)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
