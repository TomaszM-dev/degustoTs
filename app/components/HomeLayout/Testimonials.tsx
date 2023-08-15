import React from "react";
// import TestimonialsData1 from "@/Data/TestimonialsData1";
import { TestimonialsData1 } from "@/Data/TestimonialsData";
import { TestimonialsData2 } from "@/Data/TestimonialsData";
import Image from "next/image";
import team1 from "public/team1.png";
import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const data = TestimonialsData1();
  const data2 = TestimonialsData2();

  return (
    <div className="my-20 h-screen w-full">
      <h2 className="text-center text-[3rem] font-[600]">
        Our <span className="gradientText">Global Students</span> say it best
      </h2>
      <div className="flex gap-5 mt-20">
        <div className="flex flex-col gap-5 flex-1">
          {data.map((item) => {
            return (
              <div className="flex  flex-col  shadow py-10 px-6 gap-7 rounded-3xl ">
                <div className="flex justify-between items-center gap-3">
                  <Image
                    src={team1}
                    className="w-14 h-14 rounded-[50%] object-cover "
                  ></Image>
                  <div className="flex-1 ">
                    <h2 className="text-[1.3rem] font-[600] ">{item.name}</h2>
                    <p className="text-secondarytext">{item.status}</p>
                  </div>
                  <div className="flex text-gold self-start mt-2">
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                  </div>
                </div>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          {data2.map((item) => {
            return (
              <div className="flex flex-col  shadow py-10 px-6 gap-7 rounded-3xl ">
                <div className="flex justify-between items-center gap-3">
                  <Image
                    src={team1}
                    className="w-14 h-14 rounded-[50%] object-cover "
                  ></Image>
                  <div className="flex-1 ">
                    <h2 className="text-[1.3rem] font-[600] ">{item.name}</h2>
                    <p className="text-secondarytext">{item.status}</p>
                  </div>
                  <div className="flex text-gold self-start mt-2">
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                    <AiFillStar className="text-[1.2rem]" />
                  </div>
                </div>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
