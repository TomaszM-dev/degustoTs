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
import { motion } from "framer-motion";
import { useState } from "react";
import { SearchParamsType } from "@/types/SearchParamsType";
import AddCart from "../AddCart";
import { useCartStore } from "@/store";
import formatPrice from "@/utils/priceFormat";
import CartIcon from "@/app/components/CartIcon";

const Product = ({ searchParams }: SearchParamsType) => {
  const cartStore = useCartStore();
  const products = cartStore.cartAll;

  console.log(searchParams);
  const bestSellersVr = products.slice(0, 2);
  const bestSellersAcc = products.slice(4, 6);
  const bestSellers = bestSellersAcc.concat(bestSellersVr);

  const filtered = products.filter(
    (item) => !item.metadata.id.includes(`${searchParams.metaId}`)
  );
  console.log(filtered);

  console.log(searchParams.metaId);
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

  const [selected, setSelected] = useState(0);

  const toggle = (i: number) => {
    if (selected == i) {
      return setSelected(0);
    }
    setSelected(i);
  };

  return (
    <div className="mt-48 flex flex-col gap-10">
      <Link className="text-[2rem] flex items-center gap-3" href="/products">
        <h1 className="">
          ⬅ Go back to <span className="gradientText">the store</span>
        </h1>
      </Link>
      <div className="shadow w-[80%] mx-auto pb-5 mt-16  rounded-lg ">
        <div className=" flex gap-2">
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
              className="relative w-[21rem] pl-5"
            ></Image>
          </div>
          <div className="flex flex-col p-5  flex-1  items-start ">
            <AiFillShopping className="text-[2.2rem] mr-5  self-end " />
            <div className="w-[100%]">
              <div className="mt-10 w-[70%] mx-auto  h-[20rem]">
                {accordion.map((item, i) => {
                  const { headline, info } = item;
                  return (
                    <motion.div className="flex mb-4 flex-col justify-between text-[1.4rem]">
                      <div
                        onClick={() => toggle(i)}
                        className="flex justify-between   items-center cursor-pointer"
                      >
                        <h3 className="text-[1.4rem] tracking-widest ">
                          {headline}
                        </h3>
                        {selected === i ? (
                          <AiOutlineArrowUp className="font-[600]" />
                        ) : (
                          <AiOutlineArrowDown />
                        )}
                      </div>
                      <div className="w-[100%]  h-1 gradientBg rounded-lg mt-1"></div>
                      {selected === i ? (
                        <div className="text-secondarytext p-2 text-[1.2rem]">
                          {info}
                        </div>
                      ) : (
                        ""
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="mt-10 flex flex-col  w-[80%] mx-auto items-center">
              <p className="text-[1.9rem] self-center gradientText font-[500]">
                {formatPrice(searchParams.unit_amount)}
              </p>
              <AddCart {...searchParams} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-40 ">
        <div className="w-[100%] mx-auto h-2 gradientBg  rounded-lg"></div>
        <h3 className="mt-5 text-[2.3rem]">
          Fits <span className="gradientText"> well with</span>
        </h3>
        <div className="mt-16 grid grid-cols-bestS gap-7  p-1">
          {filtered.slice(0, 4).map((item) => {
            const { overview, paramether } = item.metadata;
            const name = item.name;
            const unit_amount = item.unit_amount;
            const description = item.description;
            const image = item.image;
            const id = item.id;
            return (
              <Link
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
};

export default Product;
