import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-40  py-5 flex justify-between items-center gap-5 flex-col max-lg:flex-col max-lg:gap-4 ">
      <div className="flex gap-4 text-[1.6rem]  ">
        <BsFacebook className="" />
        <BsYoutube className="" />
        <BsTwitter className="" />
        <BsLinkedin className="" />
      </div>
      <div className="w-[90%] mx-auto h-[3px] gradientBg rounded-lg "></div>

      <p className="text-[1.3rem]  max-lg:text-center max-lg:mt-">
        @2023 all rights are reserved |
        <span className="gradientText ml-1 max-lg:text-center ">
          {" "}
          Created By TomaszM-dev
        </span>
      </p>
    </div>
  );
};

export default Footer;
