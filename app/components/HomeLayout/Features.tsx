"use client";
import React from "react";
import Image from "next/image";
import FeaturesData from "@/Data/FeaturesData";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const Features = () => {
  const data = FeaturesData();

  const slideAnimationVariant = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 * index,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  const upAnimationVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="w-full  my-12 flex gap-3 flex-col">
      <motion.div className="flex  gap-10 mt-20 max-sm:mt-0 items-center max-lg:flex-col-reverse max-lg:flex-col max-lg:gap-[7rem] max-lg:w-[70%] max-sm:w-[100%] max-lg:mx-auto">
        <div className="flex gap-7 flex-row-reverse max-sm:flex-col">
          {data.map((item, index) => {
            return (
              <motion.div
                key={item.person}
                variants={slideAnimationVariant}
                initial="initial"
                whileInView="animate"
                custom={index}
                className="relative h-full flex flex-col justify-end shadow "
              >
                <Image
                  alt="guy"
                  src={item.gradientImg}
                  width={500}
                  height={500}
                  className="w-[20rem] h-[24rem] rounded-lg"
                ></Image>
                <Image
                  alt="guy"
                  width={500}
                  height={500}
                  src={item.person}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                ></Image>
                <div className="absolute bottom-0 blur h-24 w-full rounded-lg"></div>
                <div className="absolute bottom-0 left-[50%] translate-x-[-50%]  text-[1.5rem] w-full p-4 font-[300] flex flex-col gap-1">
                  <h2 className=" font-[500]">{item.headline}</h2>
                  <p className="text-[1rem] ">{item.info}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={upAnimationVariants}
          initial="initial"
          whileInView="animate"
          className="flex-[40%] flex flex-col gap-10  max-sm:items-center max-sm:text-center "
        >
          <h2 className="text-[2.4rem] leading-[2.7rem]">
            Check New Updated Gaming
            <span className="gradientText"> Features</span>
          </h2>
          <p className="text-secondarytext text-[1.1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veniam modi beatae debitis quas itaque at commodi vitae illo alias.
          </p>
          <button className=" btn text-white gradientBg px-9 py-4 rounded-lg mt-4 w-fit">
            Go Shopping
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
