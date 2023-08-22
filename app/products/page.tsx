"use client";
import React, { useState } from "react";
import gogle from "public/product.png";
import Image from "next/image";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";
import Stripe from "stripe";
import Product from "../components/Product";
import formatPrice from "@/utils/priceFormat";
import { useCartStore } from "@/store";
import Filter from "../components/Filter";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { up } from "../components/animations/animations";

const Products = () => {
  const cartStore = useCartStore();

  const products = cartStore.cartAll;
  const bestSellersVr = products.slice(0, 2);
  const bestSellersAcc = products.slice(4, 6);
  const bestSellers = bestSellersAcc.concat(bestSellersVr);

  const [filtered, setFiltered] = useState(products);
  const [activeGenre, setActiveGenre] = useState("all");
  console.log(filtered);

  const showAnimationVariant = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="mt-[12rem] flex flex-col">
      <motion.h1
        initial={"offscreen"}
        variants={showAnimationVariant}
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="text-[2.8rem] max-lg:text-center"
      >
        Our <span className="gradientText">Products</span>
      </motion.h1>
      <Filter
        setFiltered={setFiltered}
        products={products}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        viewport={{
          once: true,
        }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="mt-16 grid grid-cols-fluid gap-10  p-1"
        >
          <AnimatePresence>
            {filtered.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <div className="flex flex-col mt-40 ">
        <div className="w-[100%] mx-auto h-2 gradientBg  rounded-lg"></div>
        <h3 className="mt-5 text-[2.3rem]">
          Our <span className="gradientText">Best Sellers</span>
        </h3>
        <div className="mt-16 grid grid-cols-bestS gap-7 max-lg:mx-0  p-1">
          {bestSellers.map((item, index) => {
            const { id: metaId, overview, paramether } = item.metadata;
            const name = item.name;
            const unit_amount = item.unit_amount;
            const description = item.description;
            const image = item.image;
            const id = item.id;
            const queryId = id;

            console.log(id);
            return (
              <Link
                key={index}
                href={{
                  pathname: `/products/${item.id}`,
                  query: {
                    queryId,
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
};

export default Products;
