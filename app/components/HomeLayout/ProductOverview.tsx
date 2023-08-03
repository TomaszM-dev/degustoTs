import React from "react";
import Image from "next/image";
import product from "public/product.png";
import {
  AiFillStar,
  AiFillShopping,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const ProductOverview = () => {
  return (
    <div className="mt-20 w-[100%] mx-auto ">
      <h2 className="text-[3rem] gradientText">Our Best Products</h2>
      <div className="flex items-center mt-28">
        <AiOutlineArrowLeft className="w-[15%] text-[2.3rem]" />
        <div className="bg-secondary w-[70%] mx-auto pb-5  rounded-lg">
          <div className=" flex gap-10">
            <div className="flex flex-col relative">
              <div className="triangle gradientBg w-[100%] h-[70%] rounded-lg absolute"></div>
              <div className="flex flex-col p-10 pt-20 ">
                <h2 className="relative  text-[2.4rem] uppercase font-[500]">
                  vr google 4k
                </h2>
                <div className="relative flex mb-10 text-gold text-[1.7rem] gap-[1px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <Image src={product} className="relative w-[24rem]"></Image>
            </div>
            <div className="flex flex-col p-5  flex-1  items-start ">
              <AiFillShopping className="text-[2.2rem] mr-5  self-end " />
              <div className="w-full">
                <div className="mt-10 w-full">
                  <div className="flex items-center text-[1.4rem] gap-2">
                    <h3 className="text-[1.4rem] tracking-widest ">
                      Description
                    </h3>
                    <AiOutlineArrowDown className="font-[600]" />
                  </div>
                  <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                </div>
                <div className="mt-5 w-full">
                  <div className="flex items-center text-[1.4rem] gap-2">
                    <h3 className="text-[1.4rem] tracking-widest ">
                      Paramether
                    </h3>
                    <AiOutlineArrowDown className="font-[600]" />
                  </div>
                  <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                </div>
                <div className="mt-5 w-full">
                  <div className="flex items-center text-[1.4rem] gap-2">
                    <h3 className="text-[1.4rem] tracking-widest ">Overview</h3>
                    <AiOutlineArrowDown className="font-[600]" />
                  </div>
                  <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                </div>
              </div>
              <div className="mt-10 flex flex-col  w-[60%]">
                <p className="text-[1.9rem] text-center gradientText font-[500]">
                  120$
                </p>
                <button className="  gradientBg w-[90%] self-center py-3 rounded-lg mt-8">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <AiOutlineArrowRight className="w-[15%] text-[2.2rem]" />
      </div>
    </div>
  );
};

export default ProductOverview;
