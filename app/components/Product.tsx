import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillShopping } from "react-icons/ai";
import formatPrice from "@/utils/priceFormat";
import { ProductType } from "@/types/ProductType";

const Product = ({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) => {
  const { metaId, overview, paramether } = metadata;

  return (
    <div className="shadow p-3 px-7 flex flex-col gap-2 items-center">
      <AiFillShopping className="text-[2.1rem] mb-1 self-end" />
      <Image
        className="w-60  h-60"
        src={image}
        width={400}
        height={400}
        alt="product"
      ></Image>
      <div className="self-start ml-2 flex items-center gap-9">
        <h2 className=" text-[1.3rem] font-[500] uppercase py-2 ">{name}</h2>
        <p className="gradientText text-[1.5rem] font-[500]">
          {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
        </p>
      </div>

      <Link
        href={{
          pathname: `/products/${id}`,
          query: {
            name,
            image,
            unit_amount,
            id,
            metaId,
            overview,
            paramether,
            description,
          },
        }}
      >
        <button className="gradientBg px-7 py-3 rounded-lg my-3  ml-3">
          See More
        </button>
      </Link>
    </div>
  );
};

export default Product;
