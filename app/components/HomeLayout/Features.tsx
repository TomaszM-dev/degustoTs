"use client";
import React from "react";
import Image from "next/image";
import cardImg from "public/cardPhoto1.png";
import cardImg2 from "public/cardPhoto2.png";
import gradientPhoto from "public/gradientMain.png";
import FeaturesData from "@/Data/FeaturesData";

const Features = () => {
  const data = FeaturesData();
  console.log(data);

  return (
    <div className="w-full my-12 flex gap-3 flex-col">
      <div className="flex gap-10 mt-20 items-center">
        {data.map((item) => {
          return (
            <div className="relative h-full flex flex-col justify-end shadow ">
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
            </div>
          );
        })}
        <div className="flex-[40%] flex flex-col gap-10 ">
          <h2 className="text-[2.4rem] leading-[2.7rem]">
            Check New Updated Gaming
            <span className="gradientText"> Features</span>
          </h2>
          <p className="text-secondarytext text-[1.1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veniam modi beatae debitis quas itaque at commodi vitae illo alias.
          </p>
          <button className=" gradientBg px-9 py-4 rounded-lg mt-4 w-fit">
            Go Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
