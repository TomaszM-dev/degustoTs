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
    <div className="flex flex-col gap-5  items-center mt-[10rem]">
      <motion.div
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2 className="text-center text-[3.4rem] gradientText font-[500]">
          Our Services
        </h2>
        <p className="text-secondarytext text-[1.4rem] w-[70%] mx-auto text-center max-sm:w-[100%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ducimus saepe magni nisi voluptate beatae perspiciatis placeat illum
          est dicta.
        </p>
      </motion.div>
      <div className=" flex flex-col items-end relative  w-[72%] max-lg:h-full max-lg:mr-0 max-lg:items-center  h-  mt-10   mx-auto mr-40  max-lg:w-full max-sm:w-[100%] ">
        {data.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={showAnimationVariant}
              className="flex justify-between w-full max-sm:flex-col max-sm:gap-5  max-sm:w-full max-lg:mb-10 relative gap-[20rem] max-lg:gap-20 max-lg:justify-center max-lg:items-center "
            >
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                transition={{ staggerChildren: 0.5 }}
                className="flex flex-col h-[100%] justify-between w-fit max-sm:w-[90%] max-sm:text-center items-center max-lg:justify-start max-lg:gap-5 gap-40 "
              >
                <motion.h2
                  variants={showAnimationVariant}
                  className="max-sm:w-[100%] mt-[5.3rem] ml-24  max-lg:ml-0 max-lg:mt-0  gradientBg   px-9 py-4 rounded-lg z-10 "
                >
                  {item.info1}
                </motion.h2>
                <motion.h2
                  variants={showAnimationVariant}
                  className="max-sm:w-[100%] gradientBg px-9 py-4 rounded-lg mb-10 ml-14 z-10 max-lg:mb-0 max-lg:ml-0 "
                >
                  {item.info2}
                </motion.h2>
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                transition={{ staggerChildren: 0.5 }}
                className="flex flex-col h-[100%] max-sm:w-[90%] max-sm:text-center   justify-between w-fit items-center max-lg:justify-start max-lg:gap-5 gap-40 "
              >
                <motion.h2
                  variants={showAnimationVariant}
                  className="max-sm:w-[100%]  mt-[5.3rem] gradientBg px-9 py-4 rounded-lg z-10 mr-4 max-lg:gap-20 max-lg:justify-center max-lg:items-center max-lg:mt-0 max-lg:w-full max-lg:mr-0"
                >
                  {item.info3}
                </motion.h2>
                <motion.h2
                  variants={showAnimationVariant}
                  className="max-sm:w-[100%] gradientBg px-9 py-4 rounded-lg mb-20 ml-12 z-10 max-lg:gap-20 max-lg:justify-center max-lg:items-center max-lg:mb-0 max-lg:ml-0  max-lg:w-full"
                >
                  {item.info4}
                </motion.h2>
              </motion.div>
            </motion.div>
          );
        })}

        <Image
          className="bottom-0 right-20 absolute mb-4 max-lg:hidden "
          src={servImg}
          alt="es"
          width={600}
          height={600}
        ></Image>
        <div className=" max-sm:hidden w-[55%] mr-20 max-lg:w-[80%] mx-auto h-[0.9rem] shadow rounded-lg gradientBg"></div>
      </div>
    </div>
  );
};

export default Services;
