import React from "react";
import Image from "next/image";
import servImg from "public/servicesGirl.png";
const Services = () => {
  return (
    <div className="flex flex-col gap-5  items-center">
      <h2 className="text-center text-[3.4rem] gradientText font-[500]">
        Our Services
      </h2>
      <p className="text-secondarytext text-[1.4rem] w-[70%] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        ducimus saepe magni nisi voluptate beatae perspiciatis placeat illum est
        dicta.
      </p>
      <div className="flex flex-col items-end relative  w-[72%] h-[30rem]  mt-10 ">
        <div className="flex justify-between w-full h-full relative gap-[20rem]">
          <div className="flex flex-col h-[100%] justify-between w-fit items-center">
            <h2 className="mt-[5.3rem] gradientBg px-9 py-4 rounded-lg z-10 ">
              Virtual Reality
            </h2>
            <h2 className="gradientBg px-9 py-4 rounded-lg mb-10 ml-14 z-10">
              Amazing Exp
            </h2>
          </div>
          <div className="flex flex-col h-[100%] justify-between w-fit items-center">
            <h2 className="mt-[5.3rem] gradientBg px-9 py-4 rounded-lg z-10 mr-10 ">
              Professional
            </h2>
            <h2 className="gradientBg px-9 py-4 rounded-lg mb-20 ml-12 z-10">
              Explore VR
            </h2>
          </div>
        </div>

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
