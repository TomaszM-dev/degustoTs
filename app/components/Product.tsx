import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillShopping } from "react-icons/ai";
import formatPrice from "@/utils/priceFormat";
import { ProductType } from "@/types/ProductType";
import { easeIn, easeInOut, motion } from "framer-motion";

const Product = ({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) => {
  const { id: metaId, overview, paramether } = metadata;

  const queryId = id;

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className="shadow p-3 px-7 flex flex-col gap-2 items-center"
    >
      <AiFillShopping className="text-[2.1rem] mb-1 self-end" />
      <Image
        className="w-60  h-60"
        src={image}
        width={400}
        height={400}
        alt="product"
      ></Image>
      <motion.div layout className="self-start ml-2 flex items-center gap-9">
        <h2 className=" text-[1.3rem] font-[500] uppercase py-2 ">{name}</h2>
        <p className="gradientText text-[1.5rem] font-[500]">
          {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
        </p>
      </motion.div>

      <Link
        href={{
          pathname: `/products/${id}`,
          query: {
            name,
            image,
            unit_amount,
            queryId,
            metaId,
            overview,
            paramether,
            description,
          },
        }}
        className="w-full"
      >
        <motion.button
          layout
          className="gradientBg w-full px-7 py-3 rounded-lg my-3  ml-3"
        >
          See More
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Product;
