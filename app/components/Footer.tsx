import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-40  py-5 flex justify-between items-center">
      <p className="text-[1.3rem]  ">
        @2023 all rights are reserved |
        <span className="gradientText ml-1"> Created By TomaszM-dev</span>
      </p>
      <div className="flex gap-4 text-[1.6rem] ">
        <BsFacebook className="" />
        <BsYoutube className="" />
        <BsTwitter className="" />
        <BsLinkedin className="" />
      </div>
    </div>
  );
};

export default Footer;
