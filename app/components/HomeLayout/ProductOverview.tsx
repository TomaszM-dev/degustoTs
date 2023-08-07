"use client";
import React, { useState } from "react";
import Image from "next/image";
import product from "public/product.png";
import {
  AiFillStar,
  AiFillShopping,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const data2 = () => {
  return [
    { title: "vr google 4k", price: "120$", info: "essa" },
    { title: "essa ", price: "120$", info: "essa" },
    { title: "luzno", price: "120$", info: "essa" },
    { title: "najs", price: "120$", info: "essa" },
  ];
};

const ProductOverview = () => {
  const data = data2();

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="mt-20 w-[100%] mx-auto  relative">
      <h2 className="text-[3rem] gradientText text-center">
        Our Best Products
      </h2>
      <p className="text-[1.2rem] mt-3 text-secondarytext text-center mx-auto mb-20 w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        facere eius odio eaque iusto laboriosam corporis temporibus accusantium
        ex delectus!
      </p>
      <AiOutlineArrowLeft
        onClick={prev}
        className="cursor-pointer p-1 text-black bg-white rounded-full z-10 absolute top-[62%] left-10 text-[2.3rem]"
      />
      <AiOutlineArrowRight
        onClick={next}
        className="p-1 text-black bg-white rounded-full z-10 absolute top-[62%] right-10 text-[2.3rem] cursor-pointer"
      />
      <div className="flex items-center mt-16 overflow-hidden shadow max-w-[75%] relative  mx-auto ">
        {data.map((item) => {
          return (
            <div
              className="  min-w-full mx-auto pb-5   rounded-lg transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <div className=" flex gap-10">
                <div className="flex flex-col relative ">
                  <div className="triangle gradientBg w-[100%] h-[70%] rounded-lg absolute"></div>
                  <div className="flex flex-col px-10 pt-20 ">
                    <h2 className="relative  text-[2.4rem] uppercase font-[500]">
                      {item.title}
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
                      </div>
                      <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                    </div>
                    <div className="mt-5 w-full">
                      <div className="flex items-center text-[1.4rem] gap-2">
                        <h3 className="text-[1.4rem] tracking-widest ">
                          Paramether
                        </h3>
                      </div>
                      <div className="w-[70%] h-1 gradientBg rounded-lg mt-1"></div>
                    </div>
                    <div className="mt-5 w-full">
                      <div className="flex items-center text-[1.4rem] gap-2">
                        <h3 className="text-[1.4rem] tracking-widest ">
                          Overview
                        </h3>
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
          );
        })}
      </div>
      <div className="absolute bottom-[-4rem] right-0 left-0 ">
        <div className="flex items-center justify-center gap-2 ">
          {data.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "gradientBg" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
