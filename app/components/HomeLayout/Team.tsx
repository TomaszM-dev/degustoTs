"use client";
import React from "react";
import Image from "next/image";
import cardImg from "public/cardPhoto1.png";
import cardImg2 from "public/cardPhoto2.png";
import gradientPhoto from "public/gradientMain.png";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import team1 from "public/team1.png";
import team2 from "public/team2.png";
import team3 from "public/team3.png";
import { useScroll } from "../useScroll";
import { easeOut, motion } from "framer-motion";
import TeamData from "@/Data/TeamData";
import { up } from "../animations/animations";

const Team = () => {
  const [element, controls] = useScroll();

  const upAnimationVariant = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  const data = TeamData();

  return (
    <div className="flex flex-col gap-5 mt-40 items-center max-lg:h-[100rem]">
      <motion.div
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
        className="flex flex-col"
      >
        <h2 className="text-center text-[3.2rem] gradientText font-[500]">
          Our Team
        </h2>
        <p className="text-secondarytext text-[1.3rem] w-[70%] max-sm:w-[100%] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ducimus saepe magni nisi voluptate beatae perspiciatis placeat illum
          est dicta.
        </p>
      </motion.div>
      <div className="mt-20 flex gap-10  h-[30rem] max-lg:flex-col max-lg:gap-14 max-lg:mt-10 ">
        {data.map((item, index) => {
          return (
            <motion.div
              variants={upAnimationVariant}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              className={`${index === 1 ? "mb-10 max-lg:mb-0" : ""}`}
            >
              <div className={`relative h-full flex flex-col justify-end`}>
                <Image
                  alt="gradient"
                  src={item.gradientImg}
                  width={500}
                  height={500}
                  className="w-[20rem] h-[26.5rem] rounded-lg"
                ></Image>
                <Image
                  alt="guy"
                  src={item.guy}
                  className="absolute top-0 w-full left-0 h-full object-cover"
                  width={600}
                  height={600}
                ></Image>
                <div className="absolute bottom-0 blur h-40 w-full rounded-lg "></div>
                <div className="absolute bottom-[0.3rem] left-[50%] translate-x-[-50%]  text-[1.5rem] w-full p-4 font-[300] flex flex-col gap-1 ">
                  <p className=" text-center font-[600] text-[1.7rem]">
                    {item.position}
                  </p>
                  <p className="text-center">{item.name}</p>
                  <div className="flex gap-5 justify-center mt-4 ">
                    <BsFacebook className="" />
                    <BsYoutube className="" />
                    <BsTwitter className="" />
                    <BsLinkedin className="" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
