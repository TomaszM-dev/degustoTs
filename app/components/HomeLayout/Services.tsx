"use client";
import React from "react";
import Image from "next/image";
import servImg from "public/servicesGirl.png";
import ServicesData from "@/Data/ServicesData";
import { easeInOut, motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { show, up } from "../animations/animations";

const Services = () => {
  const [element, controls] = useScroll();
  const data = ServicesData();

  const showAnimationVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,

        ease: easeInOut,
      },
    },
  };

  return (
    <div className="flex flex-col gap-5 mt-20 items-center">
      <motion.div
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2 className="text-center text-[3.4rem] gradientText font-[500]">
          Our Services
        </h2>
        <p className="text-secondarytext text-[1.4rem] w-[70%] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ducimus saepe magni nisi voluptate beatae perspiciatis placeat illum
          est dicta.
        </p>
      </motion.div>
      <div className="flex flex-col items-end relative  w-[72%] mr-20 h-[30rem]  mt-10 ">
        {data.map((item, index) => {
          return (
            <motion.div
              key={item.info1}
              variants={showAnimationVariant}
              className="flex justify-between w-full h-full relative gap-[20rem]"
            >
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                transition={{ staggerChildren: 0.5 }}
                className="flex flex-col h-[100%] justify-between w-fit items-center"
              >
                <motion.h2
                  variants={showAnimationVariant}
                  className="mt-[5.3rem] gradientBg px-9 py-4 rounded-lg z-10 "
                >
                  {item.info1}
                </motion.h2>
                <motion.h2
                  variants={showAnimationVariant}
                  className="gradientBg px-9 py-4 rounded-lg mb-10 ml-14 z-10"
                >
                  {item.info2}
                </motion.h2>
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                transition={{ staggerChildren: 0.5 }}
                className="flex flex-col h-[100%] justify-between w-fit items-center"
              >
                <motion.h2
                  variants={showAnimationVariant}
                  className="mt-[5.3rem] gradientBg px-9 py-4 rounded-lg z-10 mr-10 "
                >
                  {item.info3}
                </motion.h2>
                <motion.h2
                  variants={showAnimationVariant}
                  className="gradientBg px-9 py-4 rounded-lg mb-20 ml-12 z-10"
                >
                  {item.info4}
                </motion.h2>
              </motion.div>
            </motion.div>
          );
        })}

        <Image
          className="top-[50%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={servImg}
          alt="es"
          width={600}
          height={500}
        ></Image>
        <div className="w-[55%] mr-20 mb-[1.7rem] mx-auto h-[0.9rem] shadow rounded-lg gradientBg"></div>
      </div>
    </div>
  );
};

export default Services;
