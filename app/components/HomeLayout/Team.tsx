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

const Team = () => {
  return (
    <div className="flex flex-col gap-5 mt-20 items-center ">
      <h2 className="text-center text-[3.2rem] gradientText font-[500]">
        Our Team
      </h2>
      <p className="text-secondarytext text-[1.3rem] w-[70%] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        ducimus saepe magni nisi voluptate beatae perspiciatis placeat illum est
        dicta.
      </p>
      <div className="mt-20 flex gap-10  h-[30rem]  ">
        <div className="relative h-full flex flex-col justify-end   ">
          <Image
            src={gradientPhoto}
            width={500}
            height={500}
            className="w-[20rem] h-[25rem] rounded-lg"
          ></Image>
          <Image
            src={team1}
            className="absolute top-0 w-full left-0 h-full object-cover"
            width={600}
            height={600}
          ></Image>
          <div className="absolute bottom-0 blur h-40 w-full rounded-lg "></div>
          <div className="absolute bottom-[0.3rem] left-[50%] translate-x-[-50%]  text-[1.5rem] w-full p-4 font-[300] flex flex-col gap-1 ">
            <p className=" text-center font-[600] text-[1.7rem]">CEO</p>
            <p className="text-center">John Pierce</p>
            <div className="flex gap-5 justify-center mt-4 ">
              <BsFacebook className="" />
              <BsYoutube className="" />
              <BsTwitter className="" />
              <BsLinkedin className="" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative h-full flex flex-col justify-end  ">
            <Image
              src={gradientPhoto}
              width={500}
              height={500}
              className="w-[20rem] h-[25rem] rounded-lg"
            ></Image>
            <Image
              src={team2}
              className="absolute top-0 w-full left-0 h-full object-cover"
              width={600}
              height={600}
            ></Image>
            <div className="absolute bottom-0 blur h-40 w-full rounded-lg "></div>
            <div className="absolute bottom-[0.3rem] left-[50%] translate-x-[-50%]  text-[1.5rem] w-full p-4 font-[300] flex flex-col gap-1 ">
              <p className=" text-center font-[600] text-[1.7rem]">OWNER</p>
              <p className="text-center">Karim Gander</p>
              <div className="flex gap-5 justify-center mt-4 ">
                <BsFacebook className="" />
                <BsYoutube className="" />
                <BsTwitter className="" />
                <BsLinkedin className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full flex flex-col justify-end  ">
          <Image
            alt="gradient"
            src={gradientPhoto}
            width={500}
            height={500}
            className="w-[20rem] h-[25rem] rounded-lg"
          ></Image>
          <Image
            alt="team member"
            src={team3}
            className="absolute top-0 w-full left-0 h-full object-cover "
            width={600}
            height={600}
          ></Image>
          <div className="absolute bottom-0 blur h-40 w-full rounded-lg "></div>
          <div className="absolute bottom-[0.3rem] left-[50%] translate-x-[-50%]  text-[1.5rem] w-full p-4 font-[300] flex flex-col gap-1 ">
            <p className=" text-center font-[600] text-[1.7rem]">SEO</p>
            <p className="text-center">Morgan Russel</p>
            <div className="flex gap-5 justify-center mt-4 ">
              <BsFacebook className="" />
              <BsYoutube className="" />
              <BsTwitter className="" />
              <BsLinkedin className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
