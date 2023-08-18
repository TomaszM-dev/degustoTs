"use client";
import React from "react";
import Image from "next/image";
import gradientMain from "public/gradientMain.png";
import heroGirl from "public/heroGirl.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll } from "../useScroll";
import { useRef } from "react";
import { scrollLeft, scrollRight, scrollUp } from "../animations/animations";

const Hero = () => {
  const [element, controls] = useScroll();

  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.1 1"],
  // });

  return (
    <motion.div className="flex items-center w-full mt-60  h-[30rem] justify-center gap-10">
      <motion.div
        variants={scrollLeft}
        animate={controls}
        initial="hidden"
        ref={element}
        className="flex-1 flex flex-col gap-8 self-start"
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
        animate={controls}
        initial="hidden"
        ref={element}
        className="flex-1 relative  flex items-center justify-center mb-40  w-full h-full shrink-0"
      >
        <Image
          className="absolute w-[20rem] h-[16rem] rounded-2xl top-[11rem] right-[5rem] "
          src={gradientMain}
          alt="gradient"
          width={300}
          height={300}
        ></Image>
        <Image
          className="relative h-[24rem] w-[45rem] "
          alt="vr girl "
          width={700}
          height={700}
          src={heroGirl}
        ></Image>
        <div className="absolute w-[20rem] h-[4.6rem] bottom-[3rem] right-[5rem] rounded-2xl blur"></div>
        <div className="absolute bottom-0 mb-16 ml-10 text-[1.6rem] font-[300] flex items-center justify-center">
          <h3>Explore our Store</h3>
        </div>
      </motion.div>
    </motion.div>

    /* image 3 */
  );
};

export default Hero;
/* image 5 */
