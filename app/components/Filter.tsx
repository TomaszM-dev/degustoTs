"use client";
import React, { useEffect } from "react";

const Filter = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  products,
}: any) => {
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
    <div className="mt-6 text-[1.2rem] flex items-center gap-7">
      <button
        onClick={() => setActiveGenre("all")}
        className={`border-[1px] border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "all" ? "gradientBg px-9 py-4 rounded-lg mt-8 " : ""
        }`}
      >
        All Products
      </button>
      <button
        onClick={() => setActiveGenre("accessories")}
        className={`border-[1px] border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "accessories"
            ? "gradientBg px-9 py-4 rounded-lg mt-8 "
            : ""
        }`}
      >
        Accessories
      </button>
      <button
        onClick={() => setActiveGenre("google")}
        className={`border-[1px] border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "google"
            ? "gradientBg px-9 py-4 rounded-lg mt-8 "
            : ""
        }`}
      >
        Vr google
      </button>
      <button
        onClick={() => setActiveGenre("game")}
        className={`border-[1px] border-purple px-9 py-4 rounded-lg mt-8 ${
          activeGenre === "game" ? "gradientBg px-9 py-4 rounded-lg mt-8 " : ""
        }`}
      >
        Games
      </button>
    </div>
  );
};

export default Filter;
