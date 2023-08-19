"use client";
import React from "react";
import Image from "next/image";
import gradientMain from "public/gradientMain.png";
import heroGirl from "public/heroGirl.png";
import { motion } from "framer-motion";
import Link from "next/link";

import { useRef } from "react";
import { scrollLeft, scrollRight, scrollUp } from "../animations/animations";

const Hero = () => {
  const scrollLeft = {
    hidden: {
      x: -300,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.4,
      },
    },
  };
  const scrollRight = {
    hidden: {
      opacity: 0,
      x: 300,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div className="max-lg:flex-col max-lg:gap-20 flex items-center max-sm:mt-40  mt-64  h-full  justify-center gap-10 mb-28">
      <motion.div
        variants={scrollLeft}
        whileInView={"show"}
        initial="hidden"
        className="flex-1 max-lg:w-[80%] max-sm:w-[100%] max-sm: mx-auto flex flex-col gap-8 self-start max-lg:mb-40"
      >
        <h1 className="text-[3.3rem] font-[600] leading-[3.9rem]">
          Explore the best VR{" "}
          <span className="gradientText">Gaming Experience</span>
        </h1>
        <p className="text-secondarytext text-[1.1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis earum quia sunt sint recusandae qui impedit ab consequatur illum!
        </p>
        <div className="flex items-center gap-6 mt-10">
          <Link
            href="/products"
            className="  btn gradientBg text-white px-9 py-4 rounded-lg mt-8"
          >
            Order Now
          </Link>
          <button className=" btn bg-main hover:bg-main hover:border-purple border-purple text-white px-9 py-4 rounded-lg mt-8 border-[1px] ">
            More Details
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={scrollRight}
        whileInView={"show"}
        initial="hidden"
        className=" relative flex items-center justify-center h-full   w-[30rem] max-lg:mt-20  "
      >
        <Image
          className="self-end mb-[-1rem] scale-125  rounded-2xl "
          src={gradientMain}
          alt="gradient"
          width={300}
          height={300}
        ></Image>
        <Image
          className="absolute bottom-0  scale-125 "
          alt="vr girl "
          width={700}
          height={700}
          src={heroGirl}
        ></Image>
        <div className="absolute w-[18.6rem] h-[4.6rem] bottom-[-2rem] max-lg:bottom-[-2rem] right-[5.7rem] rounded-2xl blur  scale-125  "></div>
        <div className="absolute bottom-[-2rem] mb-4 max-lg:mb-4 ml-2 max-lg:ml-18 text-[1.6rem] font-[300] flex items-center justify-center ">
          <h3 className="">Explore our Store</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
