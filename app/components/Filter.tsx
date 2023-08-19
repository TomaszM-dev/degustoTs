"use client";
import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

const Filter = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  products,
}: any) => {
  const showAnimationVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  useEffect(() => {
    if (activeGenre === "all") {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((item) =>
      item.metadata.id.includes(activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{
        once: true,
      }}
      className="mt-6 text-[1.2rem] flex items-center gap-7 max-lg:gap-0 max-lg:flex-col max-lg:w-full"
    >
      <motion.button
        variants={showAnimationVariant}
        onClick={() => setActiveGenre("all")}
        className={`border-[1px] max-lg:w-[70%] max-lg: border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "all" ? "gradientBg px-9 py-4 rounded-lg mt-8 " : ""
        }`}
      >
        All Products
      </motion.button>
      <motion.button
        variants={showAnimationVariant}
        onClick={() => setActiveGenre("accessories")}
        className={`border-[1px] max-lg:w-[70%] max-lg: border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "accessories"
            ? "gradientBg px-9 py-4 rounded-lg mt-8 "
            : ""
        }`}
      >
        Accessories
      </motion.button>
      <motion.button
        variants={showAnimationVariant}
        onClick={() => setActiveGenre("googles")}
        className={`border-[1px] max-lg:w-[70%] max-lg: border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "googles"
            ? "gradientBg px-9 py-4 rounded-lg mt-8 "
            : ""
        }`}
      >
        Vr google
      </motion.button>
      <motion.button
        variants={showAnimationVariant}
        onClick={() => setActiveGenre("game")}
        className={`border-[1px] max-lg:w-[70%] max-lg: border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "game" ? "gradientBg px-9 py-4 rounded-lg mt-8 " : ""
        }`}
      >
        Games
      </motion.button>
    </motion.div>
  );
};

export default Filter;
