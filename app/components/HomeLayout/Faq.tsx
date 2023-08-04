"use client";
import React from "react";
import FaqData from "@/Data/FaqData";
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import Toggle from "./Toggle";

import Link from "next/link";

const Faq = () => {
  const faqData = FaqData();
  // const [element, controls] = useScroll();

  return (
    <div className="mt-20">
      <motion.h1 className="text-[2.8rem] text-center font-[700] leading-[3.3rem] my-20 w-[90%] mx-auto">
        Frequently<span className="gradientText"> Asked</span> Questions
      </motion.h1>
      <motion.div className="text-[1.5rem] font-[600] w-[80%] mx-auto flex flex-col gap-10 my-20">
        <LayoutGroup>
          {faqData.map((el) => {
            return (
              <Toggle title={el.title} key={el.title}>
                <motion.p
                  layout
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: -50 }}
                  exit={{ opacity: 0, translateY: -50 }}
                  transition={{ duration: 0.5 }}
                ></motion.p>
                <p className="text-[1.2rem] my-5 font-[300] text-secondarytext ">
                  {el.answer}
                </p>
              </Toggle>
            );
          })}
        </LayoutGroup>
      </motion.div>
    </div>
  );
};

export default Faq;
