import React from "react";
import gogle from "public/product.png";
import Image from "next/image";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";
import Stripe from "stripe";
import Product from "../components/Product";
import formatPrice from "@/utils/priceFormat";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        description: product.description,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        metadata: product.metadata,
      };
    })
  );
  return productWithPrices;
};

const Products = async () => {
  const products = await getProducts();

  const bestSellersVr = products.slice(0, 2);
  const bestSellersAcc = products.slice(4, 6);
  const bestSellers = bestSellersAcc.concat(bestSellersVr);

  return (
    <div className="mt-[12rem] flex flex-col">
      <h1 className="text-[2.8rem]">
        Our <span className="gradientText">Products</span>
      </h1>
      <div className="mt-6 text-[1.2rem] flex items-center gap-7">
        <button className="gradientBg px-9 py-4 rounded-lg mt-8">
          All Products
        </button>
        <button className="border-[1px] border-purple px-9 py-4 rounded-lg mt-8">
          Vr google
        </button>
        <button className="border-[1px] border-purple px-9 py-4 rounded-lg mt-8">
          Accessories
        </button>
        <button className="border-[1px] border-purple px-9 py-4 rounded-lg mt-8">
          Games
        </button>
      </div>
      <div className="mt-16 grid grid-cols-fluid gap-10  p-1">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
      <div className="flex flex-col mt-40 ">
        <div className="w-[100%] mx-auto h-2 gradientBg  rounded-lg"></div>
        <h3 className="mt-5 text-[2.3rem]">
          Our <span className="gradientText">Best Sellers</span>
        </h3>
        <div className="mt-16 grid grid-cols-bestS gap-7  p-1">
          {bestSellers.map((item) => {
            const { overview, paramether } = item.metadata;
            const name = item.name;
            const unit_amount = item.unit_amount;
            const description = item.description;
            const image = item.image;
            return (
              <Link
                href={{
                  pathname: `/products/${item.id}`,
                  query: {
                    name,
                    image,
                    unit_amount,
                    overview,
                    paramether,
                    description,
                  },
                }}
                className="shadow p-3 px-7 flex flex-col gap-2 items-center"
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
